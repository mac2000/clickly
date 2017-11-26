import {getTrackingId, getClientId, getDebug, buildCollector, buildIFramerStylesheet, iframer} from './utils'
//,iframer
// import iframer from './iframer'

// Collector

export const tid = getTrackingId()
export const cid = getClientId()
export const debug = getDebug()

const collect = buildCollector(tid, cid, debug)

document.body.addEventListener('mousedown', collect, true);
collect()

// iFramer

document.head.appendChild(buildIFramerStylesheet())
window.addEventListener('message', iframer, false)

// iframer.onMessage('ping', () => {
//     console.log('NEW IFRAMER GOT ping MESSAGE, SENDING PONG RESPONSE')
//     iframer.postMessage('pong' ,'pong')
// })