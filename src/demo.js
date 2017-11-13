import {dateDaysAgo, dateToAnalyticsFormat, dateFromAnalyticsFormat} from './utils'

export const viewId = '160451249'

// TODO: remove me i'm obsolete
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

// TODO: remove me i'm obsolete
export const retrieveEventsFor = (url = 'https://monitex.com.ua/') => new Promise((resolve, reject) => {
    const daysAgo = 1
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

export const retrieveEventsForPageType = (type = 'home') => new Promise((resolve, reject) => {
    const daysAgo = 1
    gapi.client.request({
        path: '/v4/reports:batchGet',
        root: 'https://analyticsreporting.googleapis.com/',
        method: 'POST',
        body: {
            reportRequests: [{
                pageSize: 10000,
                viewId,
                dateRanges: [{
                    // startDate: dateToAnalyticsFormat(dateDaysAgo(-1 * daysAgo)),
                    // endDate: dateToAnalyticsFormat(dateDaysAgo(-1 * daysAgo))
                    startDate: dateToAnalyticsFormat(dateDaysAgo(-8)),
                    endDate: dateToAnalyticsFormat(dateDaysAgo(0))
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
                filtersExpression: `ga:dimension4==${type}`
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

export const getLabelsFor = (data, {/*ec,*/ ea}) => data
    .filter(item => /*item.ec === ec &&*/ item.ea === ea)
    .map(item => item.el)
    .reduce((acc, x) => {
        if (acc.indexOf(x) === -1) {
            acc.push(x)
        }
        return acc
    }, [])

export const getUsersFor = (data, {/*ec,*/ ea}) => data
    .filter(item => /*item.ec === ec &&*/ item.ea === ea)
    .map(item => item.cid)
    .reduce((acc, x) => {
        if (acc.indexOf(x) === -1) {
            acc.push(x)
        }
        return acc
    }, [])
    .length

export const countEvents = data => {
    const events = data
        //.map(({ec, ea, el}) => ({ec, ea, el}))
        //.map(({ec, ea}) => ({ec, ea}))
        .map(({ea}) => ({ea}))
        .reduce((acc, x) => {
            const key = JSON.stringify(x)
            acc[key] = (acc[key] || 0) + 1
            return acc
        }, {})
    return Object.keys(events)
        //.map(key => Object.assign(JSON.parse(key), {count: events[key]}))
        .map(key => Object.assign(JSON.parse(key), {
            count: events[key],
            labels: getLabelsFor(data, JSON.parse(key)),
            users: getUsersFor(data, JSON.parse(key))
        }))
        .sort((a, b) => b.count - a.count)
}

export const handleResponseData = data => {
    const firstAfterView = data
        .filter(i => i.ea === 'view')
        .map(c => data.filter(i => c.cid === i.cid && c.ts < i.ts).sort((a, b) => a.ts - b.ts).shift())

    const lastAfterView = data
        .filter(i => i.ea === 'view')
        .map(c => data.filter(i => c.cid === i.cid && c.ts < i.ts).sort((a, b) => a.ts - b.ts).pop())
        .filter(c => !!c)


    const firstClicksAfterView = firstAfterView.filter(c => !!c)

    const totalUsers = data.map(i => i.cid).reduce((acc, x) => {
        if (acc.indexOf(x) === -1) {
            acc.push(x)
        }
        return acc
    }, []).length

    if (document.getElementById('info')) {
        document.getElementById('info').innerHTML = `<ul>
            <li>${totalUsers} users</li>
            <li>${data.length} events</li>
            <li>${data.filter(i => i.ea === 'view').length} pageviews</li>
            <li>${data.filter(i => i.ea !== 'view').length} clickls</li>
            <li>${firstClicksAfterView.length} first clicks</li>
            <li>${firstAfterView.length - firstClicksAfterView.length} exits</li>
        </ul>`
    }

    const events = countEvents(firstClicksAfterView)
    const rows = events
        .filter(({ea}) => ea !== 'view')
        .slice(0, 10)
        .map(({ea, labels, count, users}) => `<tr><td><details><summary>${ea} <button onclick="clickly.demo.highlight('${ea}')">highlight</button><button onclick="clickly.demo.click('${ea}')">click</button></summary><small><ul>${labels.map(x => `<li>${x}</li>`)}</ul><small></details></td><td>${count}</td><td>${users}</td></tr>`)
        .join('')

    const table = `<table cellpadding="5" cellspacing="0" border="1" style="font-size:80%">
        <caption>Top first clicks after view</caption>
        <thead>
            <tr>
                <th>ea</th>
                <th>count</th>
                <th>users</th>
            </tr>
        <thead>
        <tbody>${rows}</tbody>
    </table>`


    const rows2 = countEvents(lastAfterView)
        .filter(({ea}) => ea !== 'view')
        .slice(0, 10)
        .map(({ea, labels, count, users}) => `<tr><td><details><summary>${ea} <button onclick="clickly.demo.highlight('${ea}')">highlight</button><button onclick="clickly.demo.click('${ea}')">click</button></summary><small><ul>${labels.map(x => `<li>${x}</li>`)}</ul><small></details></td><td>${count}</td><td>${users}</td></tr>`)
        .join('')

    const table2 = `<table cellpadding="5" cellspacing="0" border="1" style="font-size:80%">
        <caption>Top last clicks after view</caption>
        <thead>
            <tr>
                <th>ea</th>
                <th>count</th>
                <th>users</th>
            </tr>
        <thead>
        <tbody>${rows2}</tbody>
    </table>`

    if (document.getElementById('topevents')) {
        document.getElementById('topevents').innerHTML = table + table2
    }
}

export const highlight = ea => {
    const data = {
        iframer: {
            highlight: {
                ea
            }
        }
    }
    parent.postMessage(data, '*')
}

export const click = ea => {
    handleClick(data, {ea})
}

export const handleClick = (data, click) => {
    const events = data.filter(({ea}) => ea.indexOf(click.ea) === 0)
    const users = Object.values(events.map(({cid}) => cid).reduce((acc, x) => Object.assign(acc, {[x]: x}), {}))
    const items = events.map(event => {
        event.prev = data.filter(({cid, ts}) => event.cid === cid && event.ts > ts).sort((a, b) => a.ts - b.ts).pop() || {ec: 'exit', ea: 'exit', el: 'exit', cid: event.cid, ts: event.ts + 1}
        event.next = data.filter(({cid, ts}) => event.cid === cid && event.ts < ts).sort((a, b) => a.ts - b.ts).shift() || {ec: 'exit', ea: 'exit', el: 'exit', cid: event.cid, ts: event.ts + 1}
        return event
    })
    window.items = items

    const prev = countEvents(items.map(({prev}) => prev))
    const next = countEvents(items.map(({next}) => next))


    if (document.getElementById('info')) {
        document.getElementById('info').innerHTML = `<ul>
            <li>${events.length} events</li>
            <li>${users.length} users</li>
        </ul>`

        document.getElementById('prev').innerHTML = `<details>
        <summary>prev (${prev.length})</summary>
        <table cellpadding="5" cellspacing="0" border="1" style="font-size:80%">
            <caption>Prev events</caption>
            <thead>
                <tr>
                    <th>ea</th>
                    <th>count</th>
                    <th>users</th>
                </tr>
            <thead>
            <tbody>${prev
                .map(({ec, ea, labels, count, users}) => `<tr><td><details><summary>${ea} <button onclick="clickly.demo.highlight('${ea}')">highlight</button><button onclick="clickly.demo.click('${ea}')">click</button></summary><small><ul>${labels.map(x => `<li>${x}</li>`)}</ul><small></details></td><td>${count}</td><td>${users}</td></tr>`)
                .join('')}</tbody>
        </table>
        </details>`

        document.getElementById('next').innerHTML = `<details>
        <summary>next (${next.length})</summary>
        <table cellpadding="5" cellspacing="0" border="1" style="font-size:80%">
        <caption>Next events</caption>
        <thead>
            <tr>
                <th>ea</th>
                <th>count</th>
                <th>users</th>
            </tr>
        <thead>
        <tbody>${prev
            .map(({ec, ea, labels, count, users}) => `<tr><td><details><summary>${ea} <button onclick="clickly.demo.highlight('${ea}')">highlight</button><button onclick="clickly.demo.click('${ea}')">click</button></summary><small><ul>${labels.map(x => `<li>${x}</li>`)}</ul><small></details></td><td>${count}</td><td>${users}</td></tr>`)
            .join('')}</tbody>
        </table>
        </details>`
    }
}