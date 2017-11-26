const isIframerEvent = event => event
    && event.data
    && event.data.iframer
    && event.data.iframer.action

export const initMessageBroadcaster = () => window.addEventListener('message', event => {
    if (!isIframerEvent(event)) return
    document.querySelectorAll('frame').forEach(frame => {
        return frame.contentWindow.postMessage(event.data, '*')
    })
}, false)

export const postMessage = (action, payload = null) => parent && parent.postMessage({
    iframer: {
        action,
        payload
    }
}, '*')

export const onMessage = (action, cb) => window.addEventListener('message', event => {
    if (!isIframerEvent(event)) return
    if (event.data.iframer.action !== action) return
    cb(event.data.iframer.payload)
}, false)

export default {
    postMessage,
    onMessage
}