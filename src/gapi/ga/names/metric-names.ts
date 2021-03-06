export type MetricNames = '14dayUsers'
  | '1dayUsers'
  | '30dayUsers'
  | '7dayUsers'
  | 'CPC'
  | 'CPM'
  | 'CTR'
  | 'ROAS'
  | 'RPC'
  | 'adClicks'
  | 'adCost'
  | 'adsenseAdUnitsViewed'
  | 'adsenseAdsClicks'
  | 'adsenseAdsViewed'
  | 'adsenseCTR'
  | 'adsenseCoverage'
  | 'adsenseECPM'
  | 'adsenseExits'
  | 'adsensePageImpressions'
  | 'adsenseRevenue'
  | 'adsenseViewableImpressionPercent'
  | 'adxCTR'
  | 'adxClicks'
  | 'adxCoverage'
  | 'adxECPM'
  | 'adxImpressions'
  | 'adxImpressionsPerSession'
  | 'adxMonetizedPageviews'
  | 'adxRevenue'
  | 'adxRevenuePer1000Sessions'
  | 'adxViewableImpressionsPercent'
  | 'avgDomContentLoadedTime'
  | 'avgDomInteractiveTime'
  | 'avgDomainLookupTime'
  | 'avgEventValue'
  | 'avgPageDownloadTime'
  | 'avgPageLoadTime'
  | 'avgRedirectionTime'
  | 'avgScreenviewDuration'
  | 'avgSearchDepth'
  | 'avgSearchDuration'
  | 'avgSearchResultViews'
  | 'avgServerConnectionTime'
  | 'avgServerResponseTime'
  | 'avgSessionDuration'
  | 'avgTimeOnPage'
  | 'avgUserTimingValue'
  | 'backfillCTR'
  | 'backfillClicks'
  | 'backfillCoverage'
  | 'backfillECPM'
  | 'backfillImpressions'
  | 'backfillImpressionsPerSession'
  | 'backfillMonetizedPageviews'
  | 'backfillRevenue'
  | 'backfillRevenuePer1000Sessions'
  | 'backfillViewableImpressionsPercent'
  | 'bounceRate'
  | 'bounces'
  | 'buyToDetailRate'
  | 'cartToDetailRate'
  | 'cohortActiveUsers'
  | 'cohortAppviewsPerUser'
  | 'cohortAppviewsPerUserWithLifetimeCriteria'
  | 'cohortGoalCompletionsPerUser'
  | 'cohortGoalCompletionsPerUserWithLifetimeCriteria'
  | 'cohortPageviewsPerUser'
  | 'cohortPageviewsPerUserWithLifetimeCriteria'
  | 'cohortRetentionRate'
  | 'cohortRevenuePerUser'
  | 'cohortRevenuePerUserWithLifetimeCriteria'
  | 'cohortSessionDurationPerUser'
  | 'cohortSessionDurationPerUserWithLifetimeCriteria'
  | 'cohortSessionsPerUser'
  | 'cohortSessionsPerUserWithLifetimeCriteria'
  | 'cohortTotalUsers'
  | 'cohortTotalUsersWithLifetimeCriteria'
  | 'contentGroupUniqueViews1'
  | 'contentGroupUniqueViews2'
  | 'contentGroupUniqueViews3'
  | 'contentGroupUniqueViews4'
  | 'contentGroupUniqueViews5'
  | 'costPerConversion'
  | 'costPerGoalConversion'
  | 'costPerTransaction'
  | 'dbmCPA'
  | 'dbmCPC'
  | 'dbmCPM'
  | 'dbmCTR'
  | 'dbmClicks'
  | 'dbmConversions'
  | 'dbmCost'
  | 'dbmImpressions'
  | 'dbmROAS'
  | 'dcmCPC'
  | 'dcmCTR'
  | 'dcmClicks'
  | 'dcmCost'
  | 'dcmFloodlightQuantity'
  | 'dcmFloodlightRevenue'
  | 'dcmImpressions'
  | 'dcmROAS'
  | 'dcmRPC'
  | 'dfpCTR'
  | 'dfpClicks'
  | 'dfpCoverage'
  | 'dfpECPM'
  | 'dfpImpressions'
  | 'dfpImpressionsPerSession'
  | 'dfpMonetizedPageviews'
  | 'dfpRevenue'
  | 'dfpRevenuePer1000Sessions'
  | 'dfpViewableImpressionsPercent'
  | 'domContentLoadedTime'
  | 'domInteractiveTime'
  | 'domLatencyMetricsSample'
  | 'domainLookupTime'
  | 'dsCPC'
  | 'dsCTR'
  | 'dsClicks'
  | 'dsCost'
  | 'dsImpressions'
  | 'dsProfit'
  | 'dsReturnOnAdSpend'
  | 'dsRevenuePerClick'
  | 'entranceRate'
  | 'entrances'
  | 'eventValue'
  | 'eventsPerSessionWithEvent'
  | 'exceptions'
  | 'exceptionsPerScreenview'
  | 'exitRate'
  | 'exits'
  | 'fatalExceptions'
  | 'fatalExceptionsPerScreenview'
  | 'goal10AbandonRate'
  | 'goal10Abandons'
  | 'goal10Completions'
  | 'goal10ConversionRate'
  | 'goal10Starts'
  | 'goal10Value'
  | 'goal11AbandonRate'
  | 'goal11Abandons'
  | 'goal11Completions'
  | 'goal11ConversionRate'
  | 'goal11Starts'
  | 'goal11Value'
  | 'goal12AbandonRate'
  | 'goal12Abandons'
  | 'goal12Completions'
  | 'goal12ConversionRate'
  | 'goal12Starts'
  | 'goal12Value'
  | 'goal13AbandonRate'
  | 'goal13Abandons'
  | 'goal13Completions'
  | 'goal13ConversionRate'
  | 'goal13Starts'
  | 'goal13Value'
  | 'goal14AbandonRate'
  | 'goal14Abandons'
  | 'goal14Completions'
  | 'goal14ConversionRate'
  | 'goal14Starts'
  | 'goal14Value'
  | 'goal15AbandonRate'
  | 'goal15Abandons'
  | 'goal15Completions'
  | 'goal15ConversionRate'
  | 'goal15Starts'
  | 'goal15Value'
  | 'goal16AbandonRate'
  | 'goal16Abandons'
  | 'goal16Completions'
  | 'goal16ConversionRate'
  | 'goal16Starts'
  | 'goal16Value'
  | 'goal17AbandonRate'
  | 'goal17Abandons'
  | 'goal17Completions'
  | 'goal17ConversionRate'
  | 'goal17Starts'
  | 'goal17Value'
  | 'goal18AbandonRate'
  | 'goal18Abandons'
  | 'goal18Completions'
  | 'goal18ConversionRate'
  | 'goal18Starts'
  | 'goal18Value'
  | 'goal19AbandonRate'
  | 'goal19Abandons'
  | 'goal19Completions'
  | 'goal19ConversionRate'
  | 'goal19Starts'
  | 'goal19Value'
  | 'goal1AbandonRate'
  | 'goal1Abandons'
  | 'goal1Completions'
  | 'goal1ConversionRate'
  | 'goal1Starts'
  | 'goal1Value'
  | 'goal20AbandonRate'
  | 'goal20Abandons'
  | 'goal20Completions'
  | 'goal20ConversionRate'
  | 'goal20Starts'
  | 'goal20Value'
  | 'goal2AbandonRate'
  | 'goal2Abandons'
  | 'goal2Completions'
  | 'goal2ConversionRate'
  | 'goal2Starts'
  | 'goal2Value'
  | 'goal3AbandonRate'
  | 'goal3Abandons'
  | 'goal3Completions'
  | 'goal3ConversionRate'
  | 'goal3Starts'
  | 'goal3Value'
  | 'goal4AbandonRate'
  | 'goal4Abandons'
  | 'goal4Completions'
  | 'goal4ConversionRate'
  | 'goal4Starts'
  | 'goal4Value'
  | 'goal5AbandonRate'
  | 'goal5Abandons'
  | 'goal5Completions'
  | 'goal5ConversionRate'
  | 'goal5Starts'
  | 'goal5Value'
  | 'goal6AbandonRate'
  | 'goal6Abandons'
  | 'goal6Completions'
  | 'goal6ConversionRate'
  | 'goal6Starts'
  | 'goal6Value'
  | 'goal7AbandonRate'
  | 'goal7Abandons'
  | 'goal7Completions'
  | 'goal7ConversionRate'
  | 'goal7Starts'
  | 'goal7Value'
  | 'goal8AbandonRate'
  | 'goal8Abandons'
  | 'goal8Completions'
  | 'goal8ConversionRate'
  | 'goal8Starts'
  | 'goal8Value'
  | 'goal9AbandonRate'
  | 'goal9Abandons'
  | 'goal9Completions'
  | 'goal9ConversionRate'
  | 'goal9Starts'
  | 'goal9Value'
  | 'goalAbandonRateAll'
  | 'goalAbandonsAll'
  | 'goalCompletionsAll'
  | 'goalConversionRateAll'
  | 'goalStartsAll'
  | 'goalValueAll'
  | 'goalValueAllPerSearch'
  | 'goalValuePerSession'
  | 'hits'
  | 'impressions'
  | 'internalPromotionCTR'
  | 'internalPromotionClicks'
  | 'internalPromotionViews'
  | 'itemQuantity'
  | 'itemRevenue'
  | 'itemsPerPurchase'
  | 'localItemRevenue'
  | 'localProductRefundAmount'
  | 'localRefundAmount'
  | 'localTransactionRevenue'
  | 'localTransactionShipping'
  | 'localTransactionTax'
  | 'metric1'
  | 'metric10'
  | 'metric11'
  | 'metric12'
  | 'metric13'
  | 'metric14'
  | 'metric15'
  | 'metric16'
  | 'metric17'
  | 'metric18'
  | 'metric19'
  | 'metric2'
  | 'metric20'
  | 'metric3'
  | 'metric4'
  | 'metric5'
  | 'metric6'
  | 'metric7'
  | 'metric8'
  | 'metric9'
  | 'newUsers'
  | 'organicSearches'
  | 'pageDownloadTime'
  | 'pageLoadSample'
  | 'pageLoadTime'
  | 'pageValue'
  | 'pageviews'
  | 'pageviewsPerSession'
  | 'percentNewSessions'
  | 'percentSearchRefinements'
  | 'percentSessionsWithSearch'
  | 'productAddsToCart'
  | 'productCheckouts'
  | 'productDetailViews'
  | 'productListCTR'
  | 'productListClicks'
  | 'productListViews'
  | 'productRefundAmount'
  | 'productRefunds'
  | 'productRemovesFromCart'
  | 'productRevenuePerPurchase'
  | 'quantityAddedToCart'
  | 'quantityCheckedOut'
  | 'quantityRefunded'
  | 'quantityRemovedFromCart'
  | 'redirectionTime'
  | 'refundAmount'
  | 'revenuePerItem'
  | 'revenuePerTransaction'
  | 'revenuePerUser'
  | 'screenviews'
  | 'screenviewsPerSession'
  | 'searchDepth'
  | 'searchDuration'
  | 'searchExitRate'
  | 'searchExits'
  | 'searchGoal10ConversionRate'
  | 'searchGoal11ConversionRate'
  | 'searchGoal12ConversionRate'
  | 'searchGoal13ConversionRate'
  | 'searchGoal14ConversionRate'
  | 'searchGoal15ConversionRate'
  | 'searchGoal16ConversionRate'
  | 'searchGoal17ConversionRate'
  | 'searchGoal18ConversionRate'
  | 'searchGoal19ConversionRate'
  | 'searchGoal1ConversionRate'
  | 'searchGoal20ConversionRate'
  | 'searchGoal2ConversionRate'
  | 'searchGoal3ConversionRate'
  | 'searchGoal4ConversionRate'
  | 'searchGoal5ConversionRate'
  | 'searchGoal6ConversionRate'
  | 'searchGoal7ConversionRate'
  | 'searchGoal8ConversionRate'
  | 'searchGoal9ConversionRate'
  | 'searchGoalConversionRateAll'
  | 'searchRefinements'
  | 'searchResultViews'
  | 'searchSessions'
  | 'searchUniques'
  | 'serverConnectionTime'
  | 'serverResponseTime'
  | 'sessionDuration'
  | 'sessions'
  | 'sessionsPerUser'
  | 'sessionsWithEvent'
  | 'socialInteractions'
  | 'socialInteractionsPerSession'
  | 'speedMetricsSample'
  | 'timeOnPage'
  | 'timeOnScreen'
  | 'totalEvents'
  | 'totalRefunds'
  | 'totalValue'
  | 'transactionRevenue'
  | 'transactionRevenuePerSession'
  | 'transactionShipping'
  | 'transactionTax'
  | 'transactions'
  | 'transactionsPerSession'
  | 'transactionsPerUser'
  | 'uniqueDimensionCombinations'
  | 'uniqueEvents'
  | 'uniquePageviews'
  | 'uniquePurchases'
  | 'uniqueScreenviews'
  | 'uniqueSocialInteractions'
  | 'userTimingSample'
  | 'userTimingValue'
  | 'users';
