!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){const r=n(1);t.handler=async function(e,t){return r(e.queryStringParameters,{headers:e.headers})}},function(e,t,n){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const o=n(2),{URL:s}=n(3),a={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"authorization"};e.exports=function(e,t){const n=new s("https://www.bing.com/HPImageArchive.aspx?format=js&n=1");n.searchParams.set("nc",Date.now());for(const t in e)n.searchParams.set(t,e[t]);return new Promise((function(e,t){o.get(n,(function(o){const s=r({"content-type":o.headers["content-type"]},a);200===o.statusCode?o.on("data",(function(t){const r=t.toString(),o=JSON.parse(r);o.base=n.origin,e({statusCode:200,headers:s,body:JSON.stringify(o)}),console.info(n)})):(t({statusCode:o.statusCode,headers:s,body:o.statusMessage}),console.warn("warn",o.statusCode,o.statusMessage))})).on("error",(function(e){t({statusCode:500,body:JSON.stringify(e)}),console.error("error",e)}))}))}},function(e,t){e.exports=require("https")},function(e,t){e.exports=require("url")}]));