(this["webpackJsonpbing-wallpaper"]=this["webpackJsonpbing-wallpaper"]||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(13),l=a.n(n),c=a(0),r=a.n(c),i=a(17),o=a(5),m=(a(27),a(14)),s=a(15),g=a(20),u=a(16),h=a(21);var p="https://bing-wallpaper.netlify.com/.netlify/functions",f="https://www.bing.com",b=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={images:[],index:0},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.images[e.index],a={},n="bg-dark";return t&&(a.backgroundImage="url(".concat(f).concat(t.url,")"),1!==t.drk&&(n="bg-light")),r.a.createElement("div",{className:"view-home ".concat(n),style:a},r.a.createElement("main",{className:"masking"},r.a.createElement("h1",null,"Bing\u6bcf\u65e5\u58c1\u7eb8"),r.a.createElement("h2",null,"\u4ee5\u652f\u6301\u8de8\u57df\u7684\u65b9\u5f0f\u4f7f\u7528Bing\u6bcf\u65e5\u58c1\u7eb8API\u3002"),r.a.createElement("h3",null,r.a.createElement("a",{href:"https://github.com/kobezhu/bing-wallpaper#readme"},"\u6587\u6863\uff08GitHub\uff09")),r.a.createElement("p",null,"\u5b8c\u6574\u7248\uff1a",r.a.createElement("a",{href:"/archive"},p,"/archive")),r.a.createElement("p",null,"\u7cbe\u7b80\u7248\uff1a",r.a.createElement("a",{href:"/simple"},p,"/simple"))),r.a.createElement("footer",{className:"masking"},r.a.createElement("p",null,"\u7f51\u7ad9\u6258\u7ba1\u81ea",r.a.createElement("a",{href:"https://www.netlify.com/"},"Netlify"),"\u3002 \u63a5\u53e3\u6240\u6709\u6570\u636e\u6765\u81ea",r.a.createElement("a",{href:f},"Microsoft Bing"),"\uff0c\u672c\u7ad9\u53ea\u589e\u52a0\u8de8\u57df\u652f\u6301\u3002"),r.a.createElement("p",{className:"logo"},r.a.createElement("img",{src:"https://cn.bing.com/sa/simg/bing_p_rr_teal_min.ico",alt:"Bing-logo"}),r.a.createElement("img",{src:"https://www.netlify.com/img/global/favicon/favicon-32x32.png",alt:"Netlify-logo"})),r.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," ZMY")))}},{key:"componentDidMount",value:function(){var e=this;(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=new URL("/bing",window.location),n={n:e,idx:t,mkt:"zh-CN",nc:Date.now(),format:"js"};for(var l in n)a.searchParams.append(l,n[l]);return fetch(a).then((function(e){return e.json()}))})().then((function(t){e.setState({images:t.images})}))}}]),t}(r.a.Component),w=r.a.createElement(i.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",component:b,exact:!0})));l.a.render(w,document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.fe65ff1f.chunk.js.map