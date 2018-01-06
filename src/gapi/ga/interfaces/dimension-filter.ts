import {DimensionNames} from '../names/dimension-names';
import {DimensionExpressions} from '../../enums/dimension-expressions';

export interface DimensionFilter {
  dimension: DimensionNames;
  expression: DimensionExpressions;
  value: string;
}
