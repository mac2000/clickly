import {dateDaysAgo, dateToAnalyticsFormat, dateFromAnalyticsFormat} from './utils'

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
}

export const retrieveEvents = () => new Promise((resolve, reject) => {
    gapi.client.request({
        path: '/v4/reports:batchGet',
        root: 'https://analyticsreporting.googleapis.com/',
        method: 'POST',
        body: {
            reportRequests: [{
                pageSize: 10000,
                viewId,
                dateRanges: [{
                    startDate: dateToAnalyticsFormat(dateDaysAgo(-1)),
                    endDate: dateToAnalyticsFormat(dateDaysAgo(-1))
                }],
                metrics: [{
                    expression: 'ga:totalEvents'
                }],
                dimensions: [
                    {name: 'ga:eventCategory'},
                    {name: 'ga:eventAction'},
                    {name: 'ga:dimension1'},
                    {name: 'ga:dimension2'}
                ]
            }]
    }}).then(response => {

        const data = response.result.reports[0].data.rows
            .map(row => ({
                el: row[0],
                ec: row[1],
                cid: parseInt(row[2]),
                ts: new Date(row[3])
            }))
            .filter(item => !isNaN(item.cid))
            .sort((a, b) => a.ts - b.ts)

        window.data = data
        console.log(data)
        resolve(data)
    }, reject);
})