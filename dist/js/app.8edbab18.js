(function(e){function n(n){for(var c,r,o=n[0],i=n[1],d=n[2],l=0,h=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);f&&f(n);while(h.length)h.shift()();return u.push.apply(u,d||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,r=1;r<t.length;r++){var o=t[r];0!==a[o]&&(c=!1)}c&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},r={app:0},a={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-002b59d3":"1f2c873f","chunk-0fa28c54":"ed58715d","chunk-242a643f":"5d0d616f","chunk-39c2e732":"7b22df61","chunk-43cfc694":"f45dae70","chunk-573d9622":"5c086d0d","chunk-80be6260":"51e501e6","chunk-a119db82":"1e6fa5c2","chunk-ab106c6a":"77a4a12b","chunk-cadc0a2c":"a0f1e42f","chunk-2d207e9a":"4c2c2c08","chunk-31768acc":"9a279a9b","chunk-4d40d756":"4533fd51"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-002b59d3":1,"chunk-0fa28c54":1,"chunk-242a643f":1,"chunk-39c2e732":1,"chunk-43cfc694":1,"chunk-573d9622":1,"chunk-80be6260":1,"chunk-ab106c6a":1,"chunk-31768acc":1,"chunk-4d40d756":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-002b59d3":"78f470c2","chunk-0fa28c54":"dc674d76","chunk-242a643f":"0f1ac590","chunk-39c2e732":"ade86e3b","chunk-43cfc694":"adedd826","chunk-573d9622":"9ba80224","chunk-80be6260":"5d93d44e","chunk-a119db82":"31d6cfe0","chunk-ab106c6a":"6746c385","chunk-cadc0a2c":"31d6cfe0","chunk-2d207e9a":"31d6cfe0","chunk-31768acc":"b2b7b423","chunk-4d40d756":"1f5399c4"}[e]+".css",a=i.p+c,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var d=u[o],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===c||l===a))return n()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){d=h[o],l=d.getAttribute("data-href");if(l===c||l===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var c=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete r[e],f.parentNode.removeChild(f),t(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var c=a[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=a[e]=[n,t]}));n.push(c[2]=u);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var h=new Error;d=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",h.name="ChunkLoadError",h.type=c,h.request=r,t[1](h)}a[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=n,d=d.slice();for(var h=0;h<d.length;h++)n(d[h]);var f=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("4de4");var c=t("5530"),r=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("2b0e")),a=t("bc3a"),u=t.n(a),o=t("a7fe"),i=t.n(o),d=(t("4989"),t("9062")),l=t.n(d);t("e40d");r["default"].prototype.$bus=new r["default"];var h=t("7bb1"),f=t("4c93"),p=t("60d4"),s=function(e){var n=new Date(1e3*e);return n.toLocaleDateString()},m=(t("a9e3"),t("b680"),t("ac1f"),t("5319"),function(e){var n=Number(e);return"$".concat(n.toFixed(0).replace(/./g,(function(e,n,t){var c=n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e;return c})))}),b=(t("a7a3"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),k=[],v={data:function(){return{}},watch:{$route:function(e){var n=e.meta.title||"Fun桌遊 - 線上購物";document.title=n}}},g=v,y=(t("5c0b"),t("2877")),w=Object(y["a"])(g,b,k,!1,null,null,null),O=w.exports,j=(t("d3b7"),t("8c4f"));r["default"].use(j["a"]);var P=[{path:"*",redirect:"/"},{path:"/",name:"Index",component:function(){return t.e("chunk-80be6260").then(t.bind(null,"b8eb"))},children:[{path:"",name:"Home",component:function(){return Promise.all([t.e("chunk-cadc0a2c"),t.e("chunk-31768acc")]).then(t.bind(null,"ec2e"))}},{path:"product",name:"Product",component:function(){return Promise.all([t.e("chunk-cadc0a2c"),t.e("chunk-4d40d756")]).then(t.bind(null,"fede"))},meta:{title:"Fun桌遊 - 商品"}},{path:"product/:id",name:"ProductDetails",component:function(){return Promise.all([t.e("chunk-cadc0a2c"),t.e("chunk-2d207e9a")]).then(t.bind(null,"a30b"))},meta:{title:"Fun桌遊 - 商品"}},{path:"shoppingcart",name:"ShoppingCart",component:function(){return t.e("chunk-002b59d3").then(t.bind(null,"8c6c"))},meta:{title:"Fun桌遊 - 購物車"}},{path:"customer_form",name:"CustomerForm",component:function(){return t.e("chunk-242a643f").then(t.bind(null,"0e89"))},meta:{title:"Fun桌遊 - 商品結帳"}},{path:"customer_checkout/:orderId",name:"CustomerCheckout",component:function(){return t.e("chunk-a119db82").then(t.bind(null,"81d9"))},meta:{title:"Fun桌遊 - 商品結帳"}}]},{path:"/login",name:"Login",component:function(){return t.e("chunk-ab106c6a").then(t.bind(null,"eb40"))}},{path:"/admin",name:"Dashboard",component:function(){return t.e("chunk-0fa28c54").then(t.bind(null,"b470"))},children:[{path:"adminproduct",name:"AdminProduct",meta:{requiresAuth:!0},component:function(){return t.e("chunk-573d9622").then(t.bind(null,"9daa"))}},{path:"order",name:"Order",meta:{requiresAuth:!0},component:function(){return t.e("chunk-43cfc694").then(t.bind(null,"78cd"))}},{path:"coupon",name:"Coupon",meta:{requiresAuth:!0},component:function(){return t.e("chunk-39c2e732").then(t.bind(null,"7dc6"))}}]}],_=new j["a"]({routes:P,scrollBehavior:function(){return{x:0,y:0}}}),C=_;r["default"].config.productionTip=!1,r["default"].use(i.a,u.a),u.a.defaults.withCredentials=!0,r["default"].filter("currency",m),r["default"].filter("date",s),r["default"].component("Loading",l.a),r["default"].component("ValidationProvider",h["a"]),Object(h["c"])("zh_TW",p),Object(h["b"])("email",f["a"]),Object(h["b"])("required",Object(c["a"])(Object(c["a"])({},f["b"]),{},{message:"必須輸入資料"})),new r["default"]({router:C,render:function(e){return e(O)}}).$mount("#app"),C.beforeEach((function(e,n,t){if(e.meta.requiresAuth){var c="".concat("https://vue-course-api.hexschool.io","/api/user/check");u.a.post(c).then((function(e){e.data.success?t():t({path:"/login"})}))}else t()}))},"5c0b":function(e,n,t){"use strict";var c=t("9c0c"),r=t.n(c);r.a},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.8edbab18.js.map