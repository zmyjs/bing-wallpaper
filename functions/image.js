!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(r,!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const a=r(1),c={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"authorization"};t.handler=function(e,t,r){console.log(process.version),a(e.queryStringParameters).then((function(e){r(null,{statusCode:200,body:e.data,headers:o({"content-type":e.headers["content-type"]},c)})}),(function(e){e.data?r(null,{statusCode:e.statusCode,body:e.data,headers:c}):r(e)}))}},function(e,t,r){const n=r(2),{URL:o}=r(3);e.exports=function(e){const t=new o("https://www.bing.com/HPImageArchive.aspx?format=js&n=1");t.searchParams.set("nc",Date.now());for(const r in e)t.searchParams.set(r,e[r]);return console.log(t),new Promise((function(e,r){n.get(t,(function(n){const o={headers:n.headers,statusCode:n.statusCode};200===n.statusCode?n.on("data",(function(r){const n=r.toString();if("js"===t.searchParams.get("format")){const e=JSON.parse(n);e.base=t.origin,o.data=JSON.stringify(e)}else o.data=n;e(o)})):(o.data=n.statusMessage,r(o),console.warn("warn",o))})).on("error",(function(e){r(e),console.error("error",e)}))}))}},function(e,t){e.exports=require("https")},function(e,t){e.exports=require("url")}]));