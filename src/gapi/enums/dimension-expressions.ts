export enum DimensionExpressions {
  ExactMatch = '==',
  DoesNotMatch = '!=',
  ContainsSubstring = '=@',
  DoesNotContainSubstring = '!@',
  MatchRegularExpression = '=~',
  DoesNotMatchRegularExpression = '!~'
}
