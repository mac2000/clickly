import {getTrackingId, getClientId, getDebug, buildCollector} from './utils'

export const tid = getTrackingId()
export const cid = getClientId()
export const debug = getDebug()

const collect = buildCollector(tid, cid, debug)

document.body.addEventListener('mousedown', collect, true);
collect()

// TODO: iframer code

/*
var style = document.createElement('style');
style.innerText = 'body.capture *:hover {outline: 2px solid blue}'
document.head.appendChild(style);

const capturer = event => {
    event.preventDefault()
    event.stopPropagation()
    if (event.type !== 'click') return
    const data = {
        type: 'click',
        id: event.target.id,
        css: [].map.call(event.target.classList, cls => '.' + cls).join(''),
    }
    parent.postMessage({iframer: {click: data}}, '*')
    console.log('CATCHED', event.target)
}

window.addEventListener('message', event => {
    if (!event || !event.data) return
    if (!event.data.hasOwnProperty('iframer')) return

    const data = event.data.iframer
    console.log('site catch message', data)

    if (data.hasOwnProperty('mode')) {
        console.log('Switching mode to', data.mode)
        if (data.mode === 'capture') {
            document.body.classList.add('capture')
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
}, false)
*/