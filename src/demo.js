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
                    startDate: dateToAnalyticsFormat(dateDaysAgo(-2 * daysAgo)),
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
    if (document.getElementById('info')) {
        document.getElementById('info').innerHTML = `<ul>
            <li>${data.length} events</li>
            <li>${data.filter(i => i.ea === 'view').length} pageviews</li>
            <li>${data.filter(i => i.ea !== 'view').length} clickls</li>
        </ul>`
    }

    const events = countEvents(data)
    const rows = events
        .filter(({ea}) => ea !== 'view')
        .slice(0, 10)
        .map(({ea, el, count}) => `<tr><td title="${ea}">${el}</td><td>${count}</td></tr>`)
        .join('')

    const table = `<table cellpadding="5" cellspacing="0" border="1" style="font-size:80%">
        <caption>Top events on this page</caption>
        <thead>
            <tr>
                <th>el</th>
                <th>count</th>
            </tr>
        <thead>
        <tbody>${rows}</tbody>
    </table>`

    if (document.getElementById('topevents')) {
        document.getElementById('topevents').innerHTML = table
    }
}

export const countEvents = data => {
    const events = data
        .map(({ec, ea, el}) => ({ec, ea, el}))
        .reduce((acc, x) => {
            const key = JSON.stringify(x)
            acc[key] = (acc[key] || 0) + 1
            return acc
        }, {})
    return Object.keys(events)
        .map(key => Object.assign(JSON.parse(key), {count: events[key]}))
        .sort((a, b) => b.count - a.count)
}

export const handleClick = (data, click) => {
    const events = data.filter(({ec, ea, el}) => click.ec == ec && click.ea === ea && click.el === el)
    const users = Object.values(events.map(({cid}) => cid).reduce((acc, x) => Object.assign(acc, {[x]: x}), {}))
    console.log('EVENTS', events)
    const items = events.map(event => {
        event.prev = data.filter(({cid, ts}) => event.cid === cid && event.ts > ts).sort((a, b) => a.ts - b.ts).pop() || {ec: 'exit', ea: 'exit', el: 'exit', cid: event.cid, ts: event.ts + 1}
        event.next = data.filter(({cid, ts}) => event.cid === cid && event.ts < ts).sort((a, b) => a.ts - b.ts).shift() || {ec: 'exit', ea: 'exit', el: 'exit', cid: event.cid, ts: event.ts + 1}
        return event
    })
    console.log('ITEMS', items)
    window.items = items

    const prev = countEvents(items.map(({prev}) => prev))
    const next = countEvents(items.map(({next}) => next))
    console.log('PREV', prev)
    console.log('NEXT', next)


    if (document.getElementById('info')) {
        document.getElementById('info').innerHTML = `<ul>
            <li>${events.length} events</li>
            <li>${users.length} users</li>
        </ul>`

        document.getElementById('prev').innerHTML = `<table cellpadding="5" cellspacing="0" border="1" style="font-size:80%">
            <caption>Prev events</caption>
            <thead>
                <tr>
                    <th>el</th>
                    <th>count</th>
                </tr>
            <thead>
            <tbody>${prev
                .map(({ec, ea, el, count}) => `<tr><td title="${ea === 'view' ? ec : ea}">${ea === 'view' ? ea : el}</td><td>${count}</td></tr>`)
                .join('')}</tbody>
        </table>`

        document.getElementById('next').innerHTML = `<table cellpadding="5" cellspacing="0" border="1" style="font-size:80%">
        <caption>Next events</caption>
        <thead>
            <tr>
                <th>el</th>
                <th>count</th>
            </tr>
        <thead>
        <tbody>${prev
            .map(({ec, ea, el, count}) => `<tr><td title="${ea === 'view' ? ec : ea}">${ea === 'view' ? ea : el}</td><td>${count}</td></tr>`)
            .join('')}</tbody>
    </table>`
    }
}