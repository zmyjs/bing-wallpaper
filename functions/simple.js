!function(t,e){for(var n in e)t[n]=e[n]}(exports,function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){const r=n(1),{URL:o}=n(2);t.exports=function(t){const e=new o("https://www.bing.com/HPImageArchive.aspx?format=js&n=1");e.searchParams.set("nc",Date.now());for(const n in t)e.searchParams.set(n,t[n]);return new Promise((function(t,n){r.get(e,(function(r){const o={statusCode:r.statusCode,headers:{"content-type":r.headers["content-type"],"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"authorization"},url:e};200===r.statusCode?r.on("data",(function(e){const n=e.toString();o.data=n,t(o),console.info("success",o)})):(o.data=r.statusMessage,n(o),console.warn("warn",o))})).on("error",(function(t){n(t),console.error("error",t)}))}))}},function(t,e){t.exports=require("https")},function(t,e){t.exports=require("url")},,function(t,e,n){function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}const o=n(0);e.handler=function(t,e,n){const s=r({},t.queryStringParameters,{format:"js"});o(s).then((function(t){const{origin:e}=t.url;let r=JSON.parse(t.data);r=r.images.map((function(t){return{title:t.title||t.copyright,href:`${e}${t.url}`,date:t.enddate,color:1===t.drk?"dark":"light"}})),n(null,{statusCode:t.statusCode,headers:t.headers,body:JSON.stringify(r)})}),(function(t){t.statusCode?n(null,{statusCode:t.statusCode,headers:t.headers,body:t.data}):n(t)}))}}]));