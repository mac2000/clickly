var clickly=clickly||{};clickly.client=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(t.getTrackingId=function(){return document.querySelector("script[data-clickly-tid]").getAttribute("data-clickly-tid")},t.getClientId=function(){var e=window.document.cookie.split(";").map(function(e){return e.trim()}).find(function(e){return 0===e.indexOf("_ga=")});return e?parseInt(e.replace(/_ga=GA\d\.\d\./,"").split(".").shift()):null},t.getDebug=function(){return!!localStorage.getItem("debug")},t.addDays=function(e,t){var n=new Date(e);return n.setDate(n.getDate()+t),n}),o=(t.dateDaysAgo=function(e){return r(new Date,e)},t.dateToAnalyticsFormat=function(e){return e.toISOString().split("T").shift()},t.dateFromAnalyticsFormat=function(e){return new Date(e.replace(/(\d{4})(\d{2})(\d{2})/,"$1-$2-$3"))},function(e){return Object.keys(e).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")}),a=function(e){return e.tagName.toLowerCase()+(e.id?"#"+e.id:"")+(e.className?"."+e.className.trim().replace(/\s+/g,"."):"")},i=function(e){var t=[];do{t.push(e),e=e.parentNode}while(e&&-1===["html","body"].indexOf(e.tagName.toLowerCase()));return t.reverse()},c=function(e){return i(e).map(a).join(" > ")},u=function(e){var t=e&&e.innerText.trim()||e&&e.value||"";return t.length>250?t.substring(0,247)+"...":t},d=(t.buildCollector=function(e,t,n){return function(r){var a={v:1,tid:e,cid:t||"",t:"event",cd1:t||"",cd2:Date.now(),cd3:Date.now()+"."+Math.random().toString(36).substring(5),ec:window.location.toString(),ea:r?c(r.target):"view",el:r?u(r.target):document.title},i="https://www.google-analytics.com/collect?"+o(a);navigator.sendBeacon?navigator.sendBeacon(i):fetch(i),n&&console.table([a])}},t.buildIFramerStylesheet=function(){var e=document.createElement("style");return e.innerText="body.capture *:hover {outline: 2px solid blue}",e},function(e){if(e.preventDefault(),e.stopPropagation(),"click"===e.type){var t={iframer:{click:{ec:window.location.toString(),ea:c(e.target),el:u(e.target)}}};parent.postMessage(t,"*")}});t.iframer=function(e){if(e&&e.data&&e.data.hasOwnProperty("iframer")){var t=e.data.iframer;if(t.hasOwnProperty("mode")){"capture"===t.mode?document.body.classList.add("capture"):document.body.classList.remove("capture");var n="capture"===t.mode?document.body.addEventListener:document.body.removeEventListener;n("mousedown",d,!0),n("mouseup",d,!0),n("click",d,!0)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.debug=t.cid=t.tid=void 0;var r=n(0),o=t.tid=(0,r.getTrackingId)(),a=t.cid=(0,r.getClientId)(),i=t.debug=(0,r.getDebug)(),c=(0,r.buildCollector)(o,a,i);document.body.addEventListener("mousedown",c,!0),c(),document.head.appendChild((0,r.buildIFramerStylesheet)()),window.addEventListener("message",r.iframer,!1)}]);
//# sourceMappingURL=clickly.client.js.map