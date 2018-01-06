import {Inject, Injectable} from '@angular/core';
import {GoogleAccount, GoogleApi, GoogleProfile, GoogleProperty, GoogleSummary, GoogleSummaryFlat} from './interfaces';
import {Observable} from 'rxjs/Observable';
import {fromPromise} from 'rxjs/observable/fromPromise';
import {of} from 'rxjs/observable/of';
import {map} from 'rxjs/operators';

@Injectable()
export class ManagementService {
  private readonly limit = 1000;

  public constructor(@Inject('gapi') private gapi: GoogleApi) {
  }

  public getSummary(): Observable<GoogleSummary[]> {
    const cb = this.gapi.client.analytics.management.accountSummaries.list;
    const params = {
      fields: 'items(id,name,webProperties(id,name,level,websiteUrl,profiles(id,name,type)))'
    };
    return this.retrieve<GoogleSummary>(cb, params);
  }

  public getFlatSummary(): Observable<GoogleSummaryFlat[]> {
    return this.getSummary().pipe(
      map(this.flatifySummary)
    );
  }

  public getWebSites(): Observable<GoogleSummaryFlat[]> {
    return this.getFlatSummary()
      .pipe(
        map(items => items.filter(item => !!item.websiteUrl).filter(item => item.type === 'WEB'))
      );
  }

  private flatifySummary(accounts: GoogleSummary[]): GoogleSummaryFlat[] {
    return accounts
      .map(account => account.webProperties.map(property => ({
        accountId: account.id,
        accountName: account.name,
        propertyId: property.id,
        propertyName: property.name,
        level: property.level,
        websiteUrl: property.websiteUrl,
        profiles: property.profiles
      })))
      .reduce((a, b) => a.concat(b), [])
      .map(property => property.profiles.map(profile => ({
        accountId: property.accountId,
        accountName: property.accountName,
        propertyId: property.propertyId,
        propertyName: property.propertyName,
        level: property.level,
        websiteUrl: property.websiteUrl,
        profileId: profile.id,
        profileName: profile.name,
        type: profile.type
      })))
      .reduce((a, b) => a.concat(b), []);
  }

  public getAccounts(): Observable<GoogleAccount[]> {
    const cb = this.gapi.client.analytics.management.accounts.list;
    const params = {fields: 'items(id,name)'};
    return this.retrieve<GoogleAccount>(cb, params);
  }

  public getProperties(account: GoogleAccount): Observable<GoogleProperty[]> {
    if (!account) {
      return of([]);
    }
    const cb = this.gapi.client.analytics.management.webproperties.list;
    const params = {
      fields: 'items(id,name,accountId)',
      accountId: account.id
    };
    return this.retrieve<GoogleProperty>(cb, params);
  }

  public getProfiles(property: GoogleProperty): Observable<GoogleProfile[]> {
    if (!property) {
      return of([]);
    }
    const cb = this.gapi.client.analytics.management.profiles.list;
    const params = {
      fields: 'items(id,name,accountId,webPropertyId,websiteUrl)',
      accountId: property.accountId,
      webPropertyId: property.id
    };
    return this.retrieve<GoogleProfile>(cb, params);
  }

  private retrieve<T>(cb: Function, params: { [key: string]: string }): Observable<T[]> {
    return fromPromise(this.retrieveAsync<T>(cb, params));
  }

  private async retrieveAsync<T>(cb: Function, params: { [key: string]: string }) {
    let start = 1;
    let total = 0;
    let items: T[] = [];

    do {
      const response = await cb(Object.assign({}, params, {
        'fields': `${params['fields']},totalResults`,
        'max-results': this.limit,
        'start-index': start
      }));
      total = response.result.totalResults;
      start = start + this.limit;
      items = items.concat(response.result.items);
    } while (start < total);

    return items;
  }
}
