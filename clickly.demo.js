var clickly=clickly||{};clickly.demo=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var o=(t.getTrackingId=function(){return document.querySelector("script[data-clickly-tid]").getAttribute("data-clickly-tid")},t.getClientId=function(){var e=window.document.cookie.split(";").map(function(e){return e.trim()}).find(function(e){return 0===e.indexOf("_ga=")});return e?parseInt(e.replace(/_ga=GA\d\.\d\./,"").split(".").shift()):null},t.getDebug=function(){return!!localStorage.getItem("debug")},t.addDays=function(e,t){var n=new Date(e);return n.setDate(n.getDate()+t),n}),a=(t.dateDaysAgo=function(e){return o(new Date,e)},t.dateToAnalyticsFormat=function(e){return e.toISOString().split("T").shift()},t.dateFromAnalyticsFormat=function(e){return new Date(e.replace(/(\d{4})(\d{2})(\d{2})/,"$1-$2-$3"))},function(e){return Object.keys(e).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")}),i=function(e){return e.tagName.toLowerCase()+(e.id?"#"+e.id:"")+(e.className?"."+e.className.trim().replace(/\s+/g,"."):"")},c=function(e){var t=[];do{t.push(e),e=e.parentNode}while(e&&-1===["html","body"].indexOf(e.tagName.toLowerCase()));return t},u=function(e){return c(e).map(i).join(" > ")},d=function(e){var t=e&&e.innerText||e&&e.value||"";return t.length>250?t.substring(0,247)+"...":t},s=(t.buildCollector=function(e,t,n){return function(o){var i=r({v:1,tid:e,cid:t||"",t:"event",cd1:t||"",cd2:Date.now(),cd3:Date.now()+"."+Math.random().toString(36).substring(5),ec:window.location.toString(),ea:o?u(o.target):"view"},"ec",o?d(o.target):document.title),c="https://www.google-analytics.com/collect?"+a(i);navigator.sendBeacon?navigator.sendBeacon(c):fetch(c),n&&console.table([i])}},t.buildIFramerStylesheet=function(){var e=document.createElement("style");return e.innerText="body.capture *:hover {outline: 2px solid blue}",e},function(e){if(e.preventDefault(),e.stopPropagation(),"click"===e.type){var t={type:"click",ea:u(e.target),ec:d(e.target)};parent.postMessage({iframer:{click:t}},"*")}});t.iframer=function(e){if(e&&e.data&&e.data.hasOwnProperty("iframer")){var t=e.data.iframer;if(t.hasOwnProperty("mode")){"capture"===t.mode?document.body.classList.add("capture"):document.body.classList.remove("capture");var n="capture"===t.mode?document.body.addEventListener:document.body.removeEventListener;n("mousedown",s,!0),n("mouseup",s,!0),n("click",s,!0)}}}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.run=t.viewId=void 0;var r=n(0);console.log("Hello from demo.js");var o=t.viewId="160451249";t.run=function(){gapi.client.request({path:"/v4/reports:batchGet",root:"https://analyticsreporting.googleapis.com/",method:"POST",body:{reportRequests:[{pageSize:1e4,viewId:o,dateRanges:[{startDate:(0,r.dateToAnalyticsFormat)((0,r.dateDaysAgo)(-7)),endDate:(0,r.dateToAnalyticsFormat)((0,r.dateDaysAgo)(-1))}],metrics:[{expression:"ga:pageviews"}],dimensions:[{name:"ga:date"}]}]}}).then(function(e){window.response=e;var t=e.result.reports[0].data.rows.map(function(e){return{date:(0,r.dateFromAnalyticsFormat)(e.dimensions[0]).toDateString(),pageviews:parseInt(e.metrics[0].values[0])}}).map(function(e){return"<tr><td>"+e.date+"</td><td>"+e.pageviews+"</td><tr>"}).join("");demo.hidden=!1,demo.querySelector("tbody").innerHTML=t},console.error.bind(console))}}]);
//# sourceMappingURL=clickly.demo.js.map