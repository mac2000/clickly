import {dateDaysAgo, dateToAnalyticsFormat, dateFromAnalyticsFormat} from './utils'

console.log('Hello from demo.js')

export const viewId = '160451249'

export const run = () => {
    gapi.client.request({
        path: '/v4/reports:batchGet',
        root: 'https://analyticsreporting.googleapis.com/',
        method: 'POST',
        body: {
            reportRequests: [{
                pageSize: 10000,
                viewId,
                dateRanges: [{
                    startDate: dateToAnalyticsFormat(dateDaysAgo(-7)),
                    endDate: dateToAnalyticsFormat(dateDaysAgo(-1))
                }],
                metrics: [{
                    expression: 'ga:pageviews'
                }],
                dimensions: [{
                    name: 'ga:date'
                }]
            }]
        }
        }).then(response => {
            window.response = response
            const html = response.result.reports[0].data.rows
                .map(row => ({
                    date: dateFromAnalyticsFormat(row.dimensions[0]).toDateString(),
                    pageviews: parseInt(row.metrics[0].values[0])
                }))
                .map(item => `<tr><td>${item.date}</td><td>${item.pageviews}</td><tr>`)
                .join('')
            demo.hidden = false
            demo.querySelector('tbody').innerHTML = html
        }, console.error.bind(console))

    // gapi.client.request({
    //     path: '/v4/reports:batchGet',
    //     root: 'https://analyticsreporting.googleapis.com/',
    //     method: 'POST',
    //     body: {
    //         reportRequests: [
    //         {
    //             pageSize: 10000,
    //             viewId: VIEW_ID,
    //             dateRanges: [
    //             {
    //                 startDate: '2017-10-13',
    //                 endDate: '2017-10-13'
    //             }
    //             ],
    //             metrics: [
    //             {
    //                 expression: 'ga:totalEvents'
    //             }
    //             ],
    //             dimensions: [
    //                 {
    //                     name: 'ga:eventCategory'
    //                 },
    //                 {
    //                     name: 'ga:eventAction'
    //                 },
    //                 {
    //                     name: 'ga:dimension1'
    //                 },
    //                 {
    //                     name: 'ga:dimension2'
    //                 }
    //             ]
    //         }
    //         ]
    //     }
    //     }).then(displayResults, console.error.bind(console));
}