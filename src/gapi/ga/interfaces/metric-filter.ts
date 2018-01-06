import {MetricNames} from '../names/metric-names';
import {MetricExpressions} from '../../enums/metric-expressions';

export interface MetricFilter {
  metric: MetricNames;
  expression: MetricExpressions;
  value: number;
}
