(function(n){function t(t){for(var r,u,s=t[0],a=t[1],c=t[2],l=0,d=[];l<s.length;l++)u=s[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var n,t=0;t<i.length;t++){for(var e=i[t],r=!0,s=1;s<e.length;s++){var a=e[s];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),n=u(u.s=e[0]))}return n}var r={},o={app:0},i=[];function u(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=n,u.c=r,u.d=function(n,t,e){u.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},u.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,t){if(1&t&&(n=u(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)u.d(e,r,function(t){return n[t]}.bind(null,r));return e},u.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return u.d(t,"a",t),t},u.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},u.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var f=a;i.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},"034f":function(n,t,e){"use strict";e("64a9")},"56d7":function(n,t,e){"use strict";e.r(t);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"liff-data"},[e("table",[e("tr",[e("th",[n._v("OS")]),e("td",[n._v(n._s(n.os))])]),e("tr",[e("th",[n._v("Language")]),e("td",[n._v(n._s(n.language))])]),e("tr",[e("th",[n._v("LIFF SDK Version")]),e("td",[n._v(n._s(n.sdkVersion))])]),e("tr",[e("th",[n._v("LINE Version")]),e("td",[n._v(n._s(n.lineVersion))])]),e("tr",[e("th",[n._v("isInClient")]),e("td",[n._v(n._s(n.isInClient))])]),e("tr",[e("th",[n._v("isLoggedIn")]),e("td",[n._v(n._s(n.isLoggedIn))])])])])])},i=[],u=window.liff,s={name:"app",components:{},data:function(){return{}},created:function(){var n=this;console.log(u),u.init({liffId:"1655189215-9ejqWwgd"}).then((function(){n.loggedIn=u.isLoggedIn()})).catch((function(n){}))},computed:{os:function(){return u.getOS()},language:function(){return u.getLanguage()},lineVersion:function(){return u.getLineVersion()},sdkVersion:function(){return u.getVersion()},isInClient:function(){return u.isInClient()},isLoggedIn:function(){return u.isLoggedIn()}},methods:{}},a=s,c=(e("034f"),e("2877")),f=Object(c["a"])(a,o,i,!1,null,null,null),l=f.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(n){return n(l)}}).$mount("#app")},"64a9":function(n,t,e){}});
//# sourceMappingURL=app.94fec9b8.js.map