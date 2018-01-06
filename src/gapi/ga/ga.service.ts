import {Inject, Injectable} from '@angular/core';
import {fromPromise} from 'rxjs/observable/fromPromise';
import {Observable} from 'rxjs/Observable';
import {MetricNames} from './names/metric-names';
import {DimensionNames} from './names/dimension-names';
import {Names} from './names/names';
import {DayNames} from './names/day-names';
import {GoogleApi} from '../interfaces';
import {MetricExpressions} from '../enums/metric-expressions';
import {MetricFilter} from './interfaces/metric-filter';
import {DimensionExpressions} from '../enums/dimension-expressions';
import {DimensionFilter} from './interfaces/dimension-filter';
import {Sort} from './interfaces/sort';
import {FilterCollection} from './interfaces/filter-collection';
import {Request} from './interfaces/request';

const _metric = (name: MetricNames, expression: MetricExpressions, value: number): MetricFilter => ({
  metric: name,
  expression,
  value
});

const _dimension = (name: DimensionNames, expression: DimensionExpressions, value: string): DimensionFilter => ({
  dimension: name,
  expression,
  value
});

// noinspection JSUnusedGlobalSymbols
export const metric = (name: MetricNames) => ({
  equals: (value: number): MetricFilter => _metric(name, MetricExpressions.Equals, value),
  doesNotEqual: (value: number): MetricFilter => _metric(name, MetricExpressions.DoesNotEqual, value),
  greaterThan: (value: number): MetricFilter => _metric(name, MetricExpressions.GreaterThan, value),
  lessThan: (value: number): MetricFilter => _metric(name, MetricExpressions.LessThan, value),
  greaterThanOrEqualTo: (value: number): MetricFilter => _metric(name, MetricExpressions.GreaterThanOrEqualTo, value),
  lessThanOrEqualTo: (value: number): MetricFilter => _metric(name, MetricExpressions.LessThanOrEqualTo, value)
});

// noinspection JSUnusedGlobalSymbols
export const dimension = (name: DimensionNames) => ({
  exactMatch: (value: string): DimensionFilter => _dimension(name, DimensionExpressions.ExactMatch, value),
  doesNotMatch: (value: string): DimensionFilter => _dimension(name, DimensionExpressions.DoesNotMatch, value),
  containsSubstring: (value: string): DimensionFilter => _dimension(name, DimensionExpressions.ContainsSubstring, value),
  doesNotContainSubstring: (value: string): DimensionFilter => _dimension(name, DimensionExpressions.DoesNotContainSubstring, value),
  matchRegularExpression: (value: string): DimensionFilter => _dimension(name, DimensionExpressions.MatchRegularExpression, value),
  doesNotMatchRegularExpression: (value: string): DimensionFilter => {
    return _dimension(name, DimensionExpressions.DoesNotMatchRegularExpression, value);
  }
});

export const and = (...filters: (DimensionFilter | MetricFilter | FilterCollection)[]): FilterCollection => ({
  operator: 'and',
  filters: filters
});

export const or = (...filters: (DimensionFilter | MetricFilter | FilterCollection)[]): FilterCollection => ({
  operator: 'or',
  filters: filters
});

export const asc = (name: Names): Sort => ({
  name: name,
  desc: false
});

export const desc = (name: Names): Sort => ({
  name: name,
  desc: true
});

const prependGaIfNeeded = (input: string) => input.indexOf('ga:') === 0
  ? input
  : `ga:${input}`;

const dateToString = (input: Date): string => input.toISOString().split('T').shift() || '';

const mapGaRequestDate = (input: DayNames | Date): string => {
  if (input instanceof Date) {
    return dateToString(input);
  }

  return input;
};

const stringifyFilter = (filter: MetricFilter | DimensionFilter): string => {
  const name: string = 'metric' in filter
    ? (<MetricFilter>filter).metric
    : (<DimensionFilter>filter).dimension;

  return `${prependGaIfNeeded(name)}${filter.expression}${filter.value}`;
};

const stringifyCollection = (collection: FilterCollection): string => {
  return collection.filters
    .map((item: MetricFilter | DimensionFilter | FilterCollection) => 'operator' in item
      ? stringifyCollection((<FilterCollection>item))
      : stringifyFilter(<MetricFilter | DimensionFilter>item))
    .join(collection.operator === 'and' ? ';' : ',');
};

const mapGaRequest = (input: Request): RawRequest => {
  const output: RawRequest = {
    'start-date': mapGaRequestDate(input.startDate),
    'end-date': mapGaRequestDate(input.endDate),
    ids: prependGaIfNeeded(input.id),
    metrics: input.metrics.map(prependGaIfNeeded).join(',')
  };

  if (input.dimensions && input.dimensions.length) {
    output.dimensions = input.dimensions.map(prependGaIfNeeded).join(',');
  }

  if (input.filters) {
    output.filters = 'operator' in input.filters
      ? stringifyCollection(<FilterCollection>input.filters)
      : stringifyFilter(<MetricFilter | DimensionFilter>input.filters);
  }

  if (input.sort && input.sort.length) {
    output.sort = input.sort
      .map(sort => `${sort.desc ? '-' : ''}${prependGaIfNeeded(sort.name)}`)
      .join(',');
  }

  // https://developers.google.com/analytics/devguides/reporting/core/v3/reference#filters

  return output;
};

interface RawRequest {
  'start-date': string;
  'end-date': string;
  ids: string;
  metrics: string;
  dimensions?: string;
  filters?: string;
  sort?: string;
}

@Injectable()
export class GaService {
  private readonly limit = 10000;

  public constructor(@Inject('gapi') private gapi: GoogleApi) {
  }

  public get(params: Request): Observable<string[][]> {
    return fromPromise(this.retrieveAsync(params));
  }

  private async retrieveAsync(params: any) {
    let start = 1;
    let total = 0;
    let items: string[][] = [];

    do {
      const response = await this.gapi.client.analytics.data.ga.get(Object.assign({}, mapGaRequest(params), {
        'fields': `rows,totalResults`,
        'max-results': this.limit,
        'start-index': start
      }));
      total = response.result.totalResults;
      start = start + this.limit;
      items = items.concat(response.result.rows);
    } while (start < total);

    return items;
  }

  // public get(params: Request): Observable<string[][]> {
  //   return fromPromise(this.retrieveAsync(params));
  // }
  //
  // private async retrieveAsync(params: any) {
  //   const {items, total} = await this.retrieveAsync2({...params, start: 1});
  //   const requests = [];
  //   for(let i = 0; i < total / this.limit; i++) {
  //     requests.push()
  //   }
  //   return items;
  // }
  //
  // private async retrieveAsync2(params: any) {
  //   const response = await this.gapi.client.analytics.data.ga.get(Object.assign({}, mapGaRequest(params), {
  //     'fields': `rows,totalResults`,
  //     'max-results': this.limit,
  //     'start-index': params.start
  //   }));
  //
  //   return {
  //     items: response.result.rows,
  //     total: response.result.totalResults
  //   };
  // }
}
