import {DimensionExpressions} from '../../enums/dimension-expressions';
import {DimensionNames} from '../names/dimension-names';

export interface DimensionFilter {
  dimension: DimensionNames;
  expression: DimensionExpressions;
  value: string;
}
