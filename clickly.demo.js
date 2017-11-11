var clickly=clickly||{};clickly.demo=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(t.getTrackingId=function(){return document.querySelector("script[data-clickly-tid]").getAttribute("data-clickly-tid")},t.getClientId=function(){var e=window.document.cookie.split(";").map(function(e){return e.trim()}).find(function(e){return 0===e.indexOf("_ga=")});return e?parseInt(e.replace(/_ga=GA\d\.\d\./,"").split(".").shift()):null},t.getDebug=function(){return!!localStorage.getItem("debug")},t.addDays=function(e,t){var n=new Date(e);return n.setDate(n.getDate()+t),n}),o=(t.dateDaysAgo=function(e){return r(new Date,e)},t.dateToAnalyticsFormat=function(e){return e.toISOString().split("T").shift()},t.dateFromAnalyticsFormat=function(e){return new Date(e.replace(/(\d{4})(\d{2})(\d{2})/,"$1-$2-$3"))},function(e){return Object.keys(e).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")}),a=function(e){return e.tagName.toLowerCase()+(e.id?"#"+e.id:"")+(e.className?"."+e.className.trim().replace(/\s+/g,"."):"")},i=function(e){var t=[];do{t.push(e),e=e.parentNode}while(e&&-1===["html","body"].indexOf(e.tagName.toLowerCase()));return t.reverse()},s=function(e){return i(e).map(a).join(" > ")},c=function(e){var t=e&&e.innerText.trim()||e.getAttribute("alt")||e.getAttribute("title")||e&&e.value||"";return t.length>250?t.substring(0,247)+"...":t},u=function(){return"/"===window.location.pathname?"home":document.querySelectorAll(".subcategoryName").length>0?"category":document.querySelectorAll(".product-grid").length>0&&window.location.pathname.split("/").length>3?"products":document.querySelectorAll('input[name="product_id"]').length>0?"product":"other"},d=(t.buildCollector=function(e,t,n){return function(r){var a={v:1,tid:e,cid:t||"",t:"event",cd1:t||"",cd2:Date.now(),cd3:Date.now()+"."+Math.random().toString(36).substring(5),cd4:u(),ec:window.location.toString(),ea:r?s(r.target):"view",el:r?c(r.target):document.title},i="https://www.google-analytics.com/collect?"+o(a);navigator.sendBeacon?navigator.sendBeacon(i):fetch(i),n&&console.table([a])}},t.buildIFramerStylesheet=function(){var e=document.createElement("style");return e.innerText="body.capture *:hover {outline: 2px solid blue}",e},function(e){if(e.preventDefault(),e.stopPropagation(),"click"===e.type){var t={iframer:{click:{ec:window.location.toString(),ea:s(e.target),el:c(e.target),cd4:u()}}};parent.postMessage(t,"*")}});t.iframer=function(e){if(e&&e.data&&e.data.hasOwnProperty("iframer")){var t=e.data.iframer;if(t.hasOwnProperty("mode")){"capture"===t.mode?(document.body.classList.add("capture"),parent&&parent.postMessage({iframer:{load:{url:window.location.toString(),cd4:u()}}},"*")):document.body.classList.remove("capture");var n="capture"===t.mode?document.body.addEventListener:document.body.removeEventListener;n("mousedown",d,!0),n("mouseup",d,!0),n("click",d,!0)}}}},,function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.handleClick=t.handleResponseData=t.countEvents=t.getUsersFor=t.getLabelsFor=t.retrieveEventsForPageType=t.retrieveEventsFor=t.run=t.viewId=void 0;var o=n(0),a=t.viewId="160451249",i=(t.run=function(){gapi.client.request({path:"/v4/reports:batchGet",root:"https://analyticsreporting.googleapis.com/",method:"POST",body:{reportRequests:[{pageSize:1e4,viewId:a,dateRanges:[{startDate:(0,o.dateToAnalyticsFormat)((0,o.dateDaysAgo)(-7)),endDate:(0,o.dateToAnalyticsFormat)((0,o.dateDaysAgo)(-1))}],metrics:[{expression:"ga:pageviews"}],dimensions:[{name:"ga:date"}]}]}}).then(function(e){window.response=e;var t=e.result.reports[0].data.rows.map(function(e){return{date:(0,o.dateFromAnalyticsFormat)(e.dimensions[0]).toDateString(),pageviews:parseInt(e.metrics[0].values[0])}}).map(function(e){return"<tr><td>"+e.date+"</td><td>"+e.pageviews+"</td><tr>"}).join("");demo.hidden=!1,demo.querySelector("tbody").innerHTML=t},console.error.bind(console))},t.retrieveEventsFor=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://monitex.com.ua/";return new Promise(function(t,n){gapi.client.request({path:"/v4/reports:batchGet",root:"https://analyticsreporting.googleapis.com/",method:"POST",body:{reportRequests:[{pageSize:1e4,viewId:a,dateRanges:[{startDate:(0,o.dateToAnalyticsFormat)((0,o.dateDaysAgo)(-1)),endDate:(0,o.dateToAnalyticsFormat)((0,o.dateDaysAgo)(-1))}],metrics:[{expression:"ga:totalEvents"}],dimensions:[{name:"ga:eventCategory"},{name:"ga:eventAction"},{name:"ga:eventLabel"},{name:"ga:dimension1"},{name:"ga:dimension2"}],filtersExpression:"ga:eventCategory=="+e}]}}).then(function(e){var n=e.result.reports[0].data.rows.map(function(e){return{ec:e.dimensions[0],ea:e.dimensions[1],el:e.dimensions[2],cid:parseInt(e.dimensions[3]),ts:parseInt(e.dimensions[4])}}).filter(function(e){return!isNaN(e.cid)}).sort(function(e,t){return e.ts-t.ts});window.data=n,t(n)},n)})},t.retrieveEventsForPageType=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"home";return new Promise(function(t,n){gapi.client.request({path:"/v4/reports:batchGet",root:"https://analyticsreporting.googleapis.com/",method:"POST",body:{reportRequests:[{pageSize:1e4,viewId:a,dateRanges:[{startDate:(0,o.dateToAnalyticsFormat)((0,o.dateDaysAgo)(-8)),endDate:(0,o.dateToAnalyticsFormat)((0,o.dateDaysAgo)(0))}],metrics:[{expression:"ga:totalEvents"}],dimensions:[{name:"ga:eventCategory"},{name:"ga:eventAction"},{name:"ga:eventLabel"},{name:"ga:dimension1"},{name:"ga:dimension2"}],filtersExpression:"ga:dimension4=="+e}]}}).then(function(e){var n=e.result.reports[0].data.rows.map(function(e){return{ec:e.dimensions[0],ea:e.dimensions[1],el:e.dimensions[2],cid:parseInt(e.dimensions[3]),ts:parseInt(e.dimensions[4])}}).filter(function(e){return!isNaN(e.cid)}).sort(function(e,t){return e.ts-t.ts});window.data=n,t(n)},n)})},t.getLabelsFor=function(e,t){var n=t.ec,r=t.ea;return e.filter(function(e){return e.ec===n&&e.ea===r}).map(function(e){return e.el}).reduce(function(e,t){return-1===e.indexOf(t)&&e.push(t),e},[])}),s=t.getUsersFor=function(e,t){var n=t.ec,r=t.ea;return e.filter(function(e){return e.ec===n&&e.ea===r}).map(function(e){return e.cid}).reduce(function(e,t){return-1===e.indexOf(t)&&e.push(t),e},[]).length},c=t.countEvents=function(e){var t=e.map(function(e){return{ec:e.ec,ea:e.ea}}).reduce(function(e,t){var n=JSON.stringify(t);return e[n]=(e[n]||0)+1,e},{});return Object.keys(t).map(function(n){return Object.assign(JSON.parse(n),{count:t[n],labels:i(e,JSON.parse(n)),users:s(e,JSON.parse(n))})}).sort(function(e,t){return t.count-e.count})};t.handleResponseData=function(e){document.getElementById("info")&&(document.getElementById("info").innerHTML="<ul>\n            <li>"+e.length+" events</li>\n            <li>"+e.filter(function(e){return"view"===e.ea}).length+" pageviews</li>\n            <li>"+e.filter(function(e){return"view"!==e.ea}).length+" clickls</li>\n        </ul>");var t=c(e),n=t.filter(function(e){return"view"!==e.ea}).slice(0,10).map(function(e){var t=e.ea,n=e.labels,r=e.count,o=e.users;return"<tr><td>"+t+"<small><ul>"+n.map(function(e){return"<li>"+e+"</li>"})+"</ul><small></td><td>"+r+"</td><td>"+o+"</td></tr>"}).join(""),r='<table cellpadding="5" cellspacing="0" border="1" style="font-size:80%">\n        <caption>Top events on this page</caption>\n        <thead>\n            <tr>\n                <th>ea</th>\n                <th>count</th>\n                <th>users</th>\n            </tr>\n        <thead>\n        <tbody>'+n+"</tbody>\n    </table>";document.getElementById("topevents")&&(document.getElementById("topevents").innerHTML=r)},t.handleClick=function(e,t){var n=e.filter(function(e){return 0===e.ea.indexOf(t.ea)}),o=Object.values(n.map(function(e){return e.cid}).reduce(function(e,t){return Object.assign(e,r({},t,t))},{}));console.log("EVENTS",n);var a=n.map(function(t){return t.prev=e.filter(function(e){var n=e.cid,r=e.ts;return t.cid===n&&t.ts>r}).sort(function(e,t){return e.ts-t.ts}).pop()||{ec:"exit",ea:"exit",el:"exit",cid:t.cid,ts:t.ts+1},t.next=e.filter(function(e){var n=e.cid,r=e.ts;return t.cid===n&&t.ts<r}).sort(function(e,t){return e.ts-t.ts}).shift()||{ec:"exit",ea:"exit",el:"exit",cid:t.cid,ts:t.ts+1},t});console.log("ITEMS",a),window.items=a;var i=c(a.map(function(e){return e.prev})),s=c(a.map(function(e){return e.next}));console.log("PREV",i),console.log("NEXT",s),document.getElementById("info")&&(document.getElementById("info").innerHTML="<ul>\n            <li>"+n.length+" events</li>\n            <li>"+o.length+" users</li>\n        </ul>",document.getElementById("prev").innerHTML="<details>\n        <summary>prev ("+i.length+')</summary>\n        <table cellpadding="5" cellspacing="0" border="1" style="font-size:80%">\n            <caption>Prev events</caption>\n            <thead>\n                <tr>\n                    <th>ea</th>\n                    <th>count</th>\n                    <th>users</th>\n                </tr>\n            <thead>\n            <tbody>'+i.map(function(e){var t=(e.ec,e.ea),n=e.labels,r=e.count,o=e.users;return"<tr><td>"+t+"<small><ul>"+n.map(function(e){return"<li>"+e+"</li>"})+"</ul><small></td><td>"+r+"</td><td>"+o+"</td></tr>"}).join("")+"</tbody>\n        </table>\n        </details>",document.getElementById("next").innerHTML="<details>\n        <summary>next ("+s.length+')</summary>\n        <table cellpadding="5" cellspacing="0" border="1" style="font-size:80%">\n        <caption>Next events</caption>\n        <thead>\n            <tr>\n                <th>ea</th>\n                <th>count</th>\n                <th>users</th>\n            </tr>\n        <thead>\n        <tbody>'+i.map(function(e){var t=(e.ec,e.ea),n=e.labels,r=e.count,o=e.users;return"<tr><td>"+t+"<small><ul>"+n.map(function(e){return"<li>"+e+"</li>"})+"</ul><small></td><td>"+r+"</td><td>"+o+"</td></tr>"}).join("")+"</tbody>\n        </table>\n        </details>")}}]);
//# sourceMappingURL=clickly.demo.js.map