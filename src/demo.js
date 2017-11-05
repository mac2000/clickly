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

export const retrieveEventsFor = (url = 'https://monitex.com.ua/') => new Promise((resolve, reject) => {
    const daysAgo = 0
    gapi.client.request({
        path: '/v4/reports:batchGet',
        root: 'https://analyticsreporting.googleapis.com/',
        method: 'POST',
        body: {
            reportRequests: [{
                pageSize: 10000,
                viewId,
                dateRanges: [{
                    startDate: dateToAnalyticsFormat(dateDaysAgo(-1 * daysAgo)),
                    endDate: dateToAnalyticsFormat(dateDaysAgo(-1 * daysAgo))
                }],
                metrics: [{
                    expression: 'ga:totalEvents'
                }],
                dimensions: [
                    {name: 'ga:eventCategory'},
                    {name: 'ga:eventAction'},
                    {name: 'ga:eventLabel'},
                    {name: 'ga:dimension1'},
                    {name: 'ga:dimension2'}
                ],
                filtersExpression: `ga:eventCategory==${url}`
            }]
    }}).then(response => {
        const data = response.result.reports[0].data.rows
            .map(row => ({
                ec: row.dimensions[0],
                ea: row.dimensions[1],
                el: row.dimensions[2],
                cid: parseInt(row.dimensions[3]),
                ts: parseInt(row.dimensions[4])
            }))
            .filter(item => !isNaN(item.cid))
            .sort((a, b) => a.ts - b.ts)

        window.data = data
        resolve(data)
    }, reject);
})

export const handleResponseData = data => {
    console.table(data)
    console.log(`retrieved ${data.length} events`)
    const pageviews = data.filter(i => i.ea === 'view').length
    console.log(`${pageviews} pageviews`)
}