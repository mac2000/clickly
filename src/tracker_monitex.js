 document.body.addEventListener('mousedown', processClickEvent, true);

function getClientId () {
    var value = window.document.cookie
        .split(';')
        .map(function (c) {return c.trim()})
        .find(function (c) {return c.indexOf('_ga=') === 0})
    return value ? parseInt(value.replace(/_ga=GA\d\.\d\./, '').split('.').shift()) : null
}

function getNodeData (node, deep) {
    if (!node) return null;

    var data = { tag: node.nodeName };

    if (node.id) { data.id = node.id; }

    if (node.classList) {
        data.cl = [].map.call(node.classList, function (x) { return x; });
    }

    if (node.nodeName === 'INPUT' || node.nodeName === 'SELECT' || node.nodeName === 'TEXTAREA') {
        data.val = node.value;

        if (node.nodeName === 'SELECT') {
            data.opts = [].map.call(node.querySelectorAll('OPTION'), function (option) {
                return {
                    val: option.value,
                    lbl: option.label
                };
            });
        }

        if (node.type === 'checkbox' || node.type === 'radio') {
            data.chk = node.checked;
        }
    } else {
        if (!deep) {
            data.it = node.innerText.trim().replace(/[\s+]/gi, ' ').substring(0, 100);
            data.ih = node.innerHTML.trim().replace(/[\s+]/gi, ' ').substring(0, 100);
        }
    }

    if (node.parentNode && node.parentNode.nodeType === 1) {
        data.p = getNodeData(node.parentNode, true);
    }

    return data;
}

function getEventData (event) {
    var data = {
        ts: Date.now(),
        cid: getClientId(),
        t: getNodeData(event.target),
        xy: {
            sx: event.screenX,
            sy: event.screenY,
            cx: event.clientX,
            cy: event.clientY,
        },
        inputs: [].map.call(document.querySelectorAll('input, select, textarea'), getNodeData),
        dt: document.title,
        dr: document.referer,
        dl: window.location.toString(),
        monitor: {
            w: window.screen.availWidth,
            h: window.screen.availHeight
        },
        window: {
            sx: window.scrollX,
            sy: window.scrollY,
            iw: window.innerWidth,
            ih: window.innerHeight,
            ow: window.outerWidth,
            oh: window.outerHeight
        },
        ua: navigator.userAgent,
        saved: false
    }

    return data;
}

function removeClick(data) {
    var clicks = JSON.parse(sessionStorage.getItem('clicks') || '[]')
    clicks = clicks.filter(function (click) {
        return click.timestamp !== data.timestamp && click.clientId !== data.clientId;
    });
    sessionStorage.setItem('clicks', JSON.stringify(clicks));
}

function tmp1 (node) {
    return node.tag.toLowerCase() + (node.id ? '#' + node.id : '') + (node.cl.length ? '.' + node.cl.join('.') : '')
}

function tmp2 (node, res) {
    res = res || [];
    res.push(tmp1(node));
    if (node.p) {
        tmp2(node.p, res);
    }
    return res.slice(0, 3).reverse().join(' > ').slice(-100);
}

function saveClick(data) {
    var qs = {
        v: 1,
        tid: 'UA-54488251-2',
      	cd1: data.cid,
      	cd2: Date.now(),
      	cd3: Date.now() + '.' + Math.random().toString(36).substring(5),
        cid: data.cid,
        t: 'event',
        ec: data.dl,
        ea: tmp2(data.t),
        el: data.t.it || data.t.val
    }

    var qs2 = Object.keys(qs).map(function (k) { return k + '=' + encodeURIComponent(qs[k]); }).join('&')
    fetch('https://www.google-analytics.com/collect?' + qs2)
}

function processClickEvent (event) {
    saveClick(getEventData(event));
}
  var pv = {
    v: 1,
    tid: 'UA-54488251-2',
    cd1: getClientId(),
    cd2: Date.now(),
    cd3: Date.now() + '.' + Math.random().toString(36).substring(5),
    cid: getClientId(),
    t: 'event',
    ec: window.location.pathname,
    ea: 'view'
}

var pv2 = Object.keys(pv).map(function (k) { return k + '=' + encodeURIComponent(pv[k]); }).join('&')
fetch('https://www.google-analytics.com/collect?' + pv2)
