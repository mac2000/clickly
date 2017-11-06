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
    return items.reverse()
}

const getNodeSelector = node => traverseUp(node).map(getNodeSelectorString).join(' > ')

const getNodeText = node => {
    const txt = node && node.innerText.trim() || node.getAttribute('alt') || node.getAttribute('title') || node && node.value || ''
    return txt.length > 250 ? txt.substring(0, 247) + '...' : txt
}

const getPageType = () => {
    if (window.location.pathname === '/') return 'home'
    else if (document.querySelectorAll('.subcategoryName').length > 0) return 'category'
    else if (document.querySelectorAll('.product-grid').length > 0 && window.location.pathname.split('/').length > 3) return 'products'
    else if (document.querySelectorAll('input[name="product_id"]').length > 0) return 'product'
    else return 'other'
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
        cd4: getPageType(),
        ec: window.location.toString(),
        ea: event ? getNodeSelector(event.target) : 'view',
        el: event ? getNodeText(event.target) : document.title
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

export const buildIFramerStylesheet = () => {
    const style = document.createElement('style')
    style.innerText = 'body.capture *:hover {outline: 2px solid blue}'
    return style
}

const capturer = event => {
    event.preventDefault()
    event.stopPropagation()
    if (event.type !== 'click') return
    const data = {
        iframer: {
            click: {
                ec: window.location.toString(),
                ea: getNodeSelector(event.target),
                el: getNodeText(event.target)
            }
        }
    }
    parent.postMessage(data, '*')
}

export const iframer = event => {
    if (!event || !event.data) return
    if (!event.data.hasOwnProperty('iframer')) return

    const data = event.data.iframer

    if (data.hasOwnProperty('mode')) {
        if (data.mode === 'capture') {
            document.body.classList.add('capture')
            if (parent) {
                parent.postMessage({
                    iframer: {
                        load: {
                            url: window.location.toString()
                        }
                    }
                }, '*')
            }
        } else {
            document.body.classList.remove('capture')
        }
        const eventAction = data.mode === 'capture'
            ? document.body.addEventListener
            : document.body.removeEventListener

        eventAction('mousedown', capturer, true)
        eventAction('mouseup', capturer, true)
        eventAction('click', capturer, true)
    }
}