export const getTrackingId = () => document.querySelector('script[data-clickly-tid]').getAttribute('data-clickly-tid')

export const getClientId = () => {
    var value = window.document.cookie
        .split(';')
        .map(c => c.trim())
        .find(c => c.indexOf('_ga=') === 0)
    return value ? parseInt(value.replace(/_ga=GA\d\.\d\./, '').split('.').shift()) : null
}

export const getDebug = () => !!localStorage.getItem('debug')

export const addDays = (date, days) => {
    const result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
}

export const dateDaysAgo = days => addDays(new Date(), days)

export const dateToAnalyticsFormat = date => date.toISOString().split('T').shift()

export const dateFromAnalyticsFormat = str => new Date(str.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3'))

const buildQueryString = obj => Object.keys(obj).map(k => k + '=' + encodeURIComponent(obj[k])).join('&')

const getNodeSelectorString = node => node.tagName.toLowerCase() + (node.id ? '#' + node.id : '') + (!!node.className ? '.' + node.className.trim().replace(/\s+/g, '.') : '')

const traverseUp = node => {
    const items = []
    do {
        items.push(node)
        node = node.parentNode
    } while(node && ['html', 'body'].indexOf(node.tagName.toLowerCase()) === -1)
    return items
}

const getNodeSelector = node => traverseUp(node).map(getNodeSelectorString).join(' > ')

const getNodeText = node => {
    const txt = node.innerText || node.value
    return txt.length > 250 ? txt.substring(0, 247) + '...' : txt
}

export const buildCollector = (tid, cid, debug) => event => {
    const data = {
        v: 1,
        tid,
        cid: cid || '',
        t: 'event',
        cd1: cid || '',
        cd2: Date.now(),
        cd3: Date.now() + '.' + Math.random().toString(36).substring(5),
        ec: window.location.toString(),
        ea: event ? getNodeSelector(event.target) : 'view',
        ec: event ? getNodeText(event.target) : document.title
    }

    const url = 'https://www.google-analytics.com/collect?' + buildQueryString(data)

    if (navigator.sendBeacon) {
        navigator.sendBeacon(url)
    } else {
        fetch(url)
    }

    if (debug) {
        console.table([data])
    }
}