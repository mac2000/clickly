var clickly=clickly||{};clickly.demo=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(t.getTrackingId=function(){return document.querySelector("script[data-clickly-tid]").getAttribute("data-clickly-tid")},t.getClientId=function(){var e=window.document.cookie.split(";").map(function(e){return e.trim()}).find(function(e){return 0===e.indexOf("_ga=")});return e?parseInt(e.replace(/_ga=GA\d\.\d\./,"").split(".").shift()):null},t.getDebug=function(){return!!localStorage.getItem("debug")},t.addDays=function(e,t){var n=new Date(e);return n.setDate(n.getDate()+t),n}),o=(t.dateDaysAgo=function(e){return r(new Date,e)},t.dateToAnalyticsFormat=function(e){return e.toISOString().split("T").shift()},t.dateFromAnalyticsFormat=function(e){return new Date(e.replace(/(\d{4})(\d{2})(\d{2})/,"$1-$2-$3"))},function(e){return Object.keys(e).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")}),i=function(e){return e.tagName.toLowerCase()+(e.id?"#"+e.id:"")+(e.className?"."+e.className.trim().replace(/\s+/g,"."):"")},a=function(e){var t=[];do{t.push(e),e=e.parentNode}while(e&&-1===["html","body"].indexOf(e.tagName.toLowerCase()));return t.reverse()},c=function(e){return a(e).map(i).join(" > ")},s=function(e){var t=e&&e.innerText.trim()||e&&e.value||"";return t.length>250?t.substring(0,247)+"...":t},u=(t.buildCollector=function(e,t,n){return function(r){var i={v:1,tid:e,cid:t||"",t:"event",cd1:t||"",cd2:Date.now(),cd3:Date.now()+"."+Math.random().toString(36).substring(5),ec:window.location.toString(),ea:r?c(r.target):"view",el:r?s(r.target):document.title},a="https://www.google-analytics.com/collect?"+o(i);navigator.sendBeacon?navigator.sendBeacon(a):fetch(a),n&&console.table([i])}},t.buildIFramerStylesheet=function(){var e=document.createElement("style");return e.innerText="body.capture *:hover {outline: 2px solid blue}",e},function(e){if(e.preventDefault(),e.stopPropagation(),"click"===e.type){var t={iframer:{click:{ec:window.location.toString(),ea:c(e.target),el:s(e.target)}}};parent.postMessage(t,"*")}});t.iframer=function(e){if(e&&e.data&&e.data.hasOwnProperty("iframer")){var t=e.data.iframer;if(t.hasOwnProperty("mode")){"capture"===t.mode?(document.body.classList.add("capture"),parent&&parent.postMessage({iframer:{load:{url:window.location.toString()}}},"*")):document.body.classList.remove("capture");var n="capture"===t.mode?document.body.addEventListener:document.body.removeEventListener;n("mousedown",u,!0),n("mouseup",u,!0),n("click",u,!0)}}}},,function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.handleClick=t.countEvents=t.handleResponseData=t.retrieveEventsFor=t.run=t.viewId=void 0;var o=n(0),i=t.viewId="160451249",a=(t.run=function(){gapi.client.request({path:"/v4/reports:batchGet",root:"https://analyticsreporting.googleapis.com/",method:"POST",body:{reportRequests:[{pageSize:1e4,viewId:i,dateRanges:[{startDate:(0,o.dateToAnalyticsFormat)((0,o.dateDaysAgo)(-7)),endDate:(0,o.dateToAnalyticsFormat)((0,o.dateDaysAgo)(-1))}],metrics:[{expression:"ga:pageviews"}],dimensions:[{name:"ga:date"}]}]}}).then(function(e){window.response=e;var t=e.result.reports[0].data.rows.map(function(e){return{date:(0,o.dateFromAnalyticsFormat)(e.dimensions[0]).toDateString(),pageviews:parseInt(e.metrics[0].values[0])}}).map(function(e){return"<tr><td>"+e.date+"</td><td>"+e.pageviews+"</td><tr>"}).join("");demo.hidden=!1,demo.querySelector("tbody").innerHTML=t},console.error.bind(console))},t.retrieveEventsFor=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://monitex.com.ua/";return new Promise(function(t,n){gapi.client.request({path:"/v4/reports:batchGet",root:"https://analyticsreporting.googleapis.com/",method:"POST",body:{reportRequests:[{pageSize:1e4,viewId:i,dateRanges:[{startDate:(0,o.dateToAnalyticsFormat)((0,o.dateDaysAgo)(-1)),endDate:(0,o.dateToAnalyticsFormat)((0,o.dateDaysAgo)(-1))}],metrics:[{expression:"ga:totalEvents"}],dimensions:[{name:"ga:eventCategory"},{name:"ga:eventAction"},{name:"ga:eventLabel"},{name:"ga:dimension1"},{name:"ga:dimension2"}],filtersExpression:"ga:eventCategory=="+e}]}}).then(function(e){var n=e.result.reports[0].data.rows.map(function(e){return{ec:e.dimensions[0],ea:e.dimensions[1],el:e.dimensions[2],cid:parseInt(e.dimensions[3]),ts:parseInt(e.dimensions[4])}}).filter(function(e){return!isNaN(e.cid)}).sort(function(e,t){return e.ts-t.ts});window.data=n,t(n)},n)})},t.handleResponseData=function(e){document.getElementById("info")&&(document.getElementById("info").innerHTML="<ul>\n            <li>"+e.length+" events</li>\n            <li>"+e.filter(function(e){return"view"===e.ea}).length+" pageviews</li>\n            <li>"+e.filter(function(e){return"view"!==e.ea}).length+" clickls</li>\n        </ul>");var t=a(e),n=t.filter(function(e){return"view"!==e.ea}).slice(0,10).map(function(e){return'<tr><td title="'+e.ea+'">'+e.el+"</td><td>"+e.count+"</td></tr>"}).join(""),r='<table cellpadding="5" cellspacing="0" border="1" style="font-size:80%">\n        <caption>Top events on this page</caption>\n        <thead>\n            <tr>\n                <th>el</th>\n                <th>count</th>\n            </tr>\n        <thead>\n        <tbody>'+n+"</tbody>\n    </table>";document.getElementById("topevents")&&(document.getElementById("topevents").innerHTML=r)},t.countEvents=function(e){var t=e.map(function(e){return{ec:e.ec,ea:e.ea,el:e.el}}).reduce(function(e,t){var n=JSON.stringify(t);return e[n]=(e[n]||0)+1,e},{});return Object.keys(t).map(function(e){return Object.assign(JSON.parse(e),{count:t[e]})}).sort(function(e,t){return t.count-e.count})});t.handleClick=function(e,t){var n=e.filter(function(e){var n=e.ec,r=e.ea,o=e.el;return t.ec==n&&t.ea===r&&t.el===o}),o=Object.values(n.map(function(e){return e.cid}).reduce(function(e,t){return Object.assign(e,r({},t,t))},{}));console.log("EVENTS",n);var i=n.map(function(t){return t.prev=e.filter(function(e){var n=e.cid,r=e.ts;return t.cid===n&&t.ts>r}).sort(function(e,t){return e.ts-t.ts}).pop()||{ec:"exit",ea:"exit",el:"exit",cid:t.cid,ts:t.ts+1},t.next=e.filter(function(e){var n=e.cid,r=e.ts;return t.cid===n&&t.ts<r}).sort(function(e,t){return e.ts-t.ts}).shift()||{ec:"exit",ea:"exit",el:"exit",cid:t.cid,ts:t.ts+1},t});console.log("ITEMS",i),window.items=i;var c=a(i.map(function(e){return e.prev})),s=a(i.map(function(e){return e.next}));console.log("PREV",c),console.log("NEXT",s),document.getElementById("info")&&(document.getElementById("info").innerHTML="<ul>\n            <li>"+n.length+" events</li>\n            <li>"+o.length+" users</li>\n        </ul>",document.getElementById("prev").innerHTML='<table cellpadding="5" cellspacing="0" border="1" style="font-size:80%">\n            <caption>Prev events</caption>\n            <thead>\n                <tr>\n                    <th>el</th>\n                    <th>count</th>\n                </tr>\n            <thead>\n            <tbody>'+c.map(function(e){var t=e.ec,n=e.ea,r=e.el,o=e.count;return'<tr><td title="'+("view"===n?t:n)+'">'+("view"===n?n:r)+"</td><td>"+o+"</td></tr>"}).join("")+"</tbody>\n        </table>",document.getElementById("next").innerHTML='<table cellpadding="5" cellspacing="0" border="1" style="font-size:80%">\n        <caption>Next events</caption>\n        <thead>\n            <tr>\n                <th>el</th>\n                <th>count</th>\n            </tr>\n        <thead>\n        <tbody>'+c.map(function(e){var t=e.ec,n=e.ea,r=e.el,o=e.count;return'<tr><td title="'+("view"===n?t:n)+'">'+("view"===n?n:r)+"</td><td>"+o+"</td></tr>"}).join("")+"</tbody>\n    </table>")}}]);
//# sourceMappingURL=clickly.demo.js.map