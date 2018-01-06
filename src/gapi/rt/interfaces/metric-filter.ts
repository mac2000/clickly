import {MetricExpressions} from '../../enums/metric-expressions';
import {MetricNames} from '../names/metric-names';

export interface MetricFilter {
  metric: MetricNames;
  expression: MetricExpressions;
  value: number;
}
