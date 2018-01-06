import {DimensionFilter} from './dimension-filter';
import {MetricFilter} from './metric-filter';

export interface FilterCollection {
  operator: 'and' | 'or';
  filters: (DimensionFilter | MetricFilter | FilterCollection)[];
}
