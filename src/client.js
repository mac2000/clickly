import {getTrackingId, getClientId, getDebug, buildCollector, buildIFramerStylesheet, iframer} from './utils'

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
