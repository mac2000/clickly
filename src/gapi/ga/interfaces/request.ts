import {DayNames} from '../names/day-names';
import {MetricNames} from '../names/metric-names';
import {DimensionNames} from '../names/dimension-names';
import {MetricFilter} from './metric-filter';
import {DimensionFilter} from './dimension-filter';
import {FilterCollection} from './filter-collection';
import {Sort} from './sort';

export interface Request {
  id: string;
  startDate: DayNames | Date;
  endDate: DayNames | Date;
  metrics: MetricNames[];
  dimensions?: DimensionNames[];
  filters?: MetricFilter | DimensionFilter | FilterCollection;
  sort?: Sort[];
}
