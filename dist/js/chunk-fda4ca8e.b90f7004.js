(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fda4ca8e"],{"99af":function(t,e,a){"use strict";var s=a("23e7"),r=a("d039"),o=a("e8b5"),i=a("861d"),n=a("7b0b"),c=a("50c4"),d=a("8418"),l=a("65f0"),u=a("1dde"),p=a("b622"),m=a("2d00"),f=p("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",_=m>=51||!r((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),h=u("concat"),C=function(t){if(!i(t))return!1;var e=t[f];return void 0!==e?!!e:o(t)},b=!_||!h;s({target:"Array",proto:!0,forced:b},{concat:function(t){var e,a,s,r,o,i=n(this),u=l(i,0),p=0;for(e=-1,s=arguments.length;e<s;e++)if(o=-1===e?i:arguments[e],C(o)){if(r=c(o.length),p+r>v)throw TypeError(g);for(a=0;a<r;a++,p++)a in o&&d(u,p,o[a])}else{if(p>=v)throw TypeError(g);d(u,p++,o)}return u.length=p,u}})},fda8:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"row mt-4"},t._l(t.products,(function(e){return a("div",{key:e.id,staticClass:"col-md-6 col-lg-4 col-xl-3 mb-4"},[a("div",{staticClass:"card border-1 shadow-sm"},[a("div",{staticStyle:{height:"150px","background-repeat":"no-repeat","background-position":"center"},style:{backgroundImage:"url("+e.imageUrl+")"}}),a("div",{staticClass:"card-body"},[a("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(e.category))]),a("h5",{staticClass:"card-title"},[a("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(e.title))])]),a("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[e.price==e.origin_price?a("div",{staticClass:"h4 text-funOrange"},[t._v(" $"+t._s(e.origin_price)+" 元 ")]):t._e(),e.price!==e.origin_price?a("del",{staticClass:"h6 text-funOrange"},[t._v("原價 "+t._s(e.origin_price)+" 元")]):t._e(),e.price!==e.origin_price?a("div",{staticClass:"h4 text-funDarkOrange"},[t._v(" $"+t._s(e.price)+" 元 ")]):t._e()])]),a("div",{staticClass:"card-footer d-flex"},[a("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:function(a){return t.getProduct(e.id)}}},[t.loadingItem===e.id?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v(" 查看更多 ")]),a("button",{staticClass:"btn btn-funOrange btn-sm ml-auto text-light",attrs:{type:"button"},on:{click:function(a){return t.addtoCart(e.id)}}},[t.loadingItem===e.id?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v(" 加入購物車 ")])])])])})),0),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header bg-funOrange"},[a("h5",{staticClass:"modal-title text-light"},[t._v(" "+t._s(t.product.title)+" ")]),t._m(0)]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"text-center"},[a("img",{staticClass:"img-fluid text-center",attrs:{src:t.product.imageUrl,alt:""}})]),a("blockquote",{staticClass:"blockquote mt-3"},[a("p",{staticClass:"mb-0"},[t._v(t._s(t.product.content))]),a("footer",{staticClass:"blockquote-footer text-right"},[t._v(" "+t._s(t.product.description)+" ")])]),a("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[t.product.price==t.product.origin_price?a("div",{staticClass:"h4 text-funOrange"},[t._v(" "+t._s(t.product.origin_price)+" 元 ")]):t._e(),t.product.price!==t.product.origin_price?a("del",{staticClass:"h6 text-funOrange"},[t._v("原價 "+t._s(t.product.origin_price)+" 元")]):t._e(),t.product.price!==t.product.origin_price?a("div",{staticClass:"h4 text-funDarkOrange"},[t._v(" 特價 "+t._s(t.product.price)+" 元 ")]):t._e()]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.product,"num",e.target.multiple?a:a[0])}}},t._l(10,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(" 選購 "+t._s(e)+" "+t._s(t.product.unit)+" ")])})),0)]),a("div",{staticClass:"modal-footer"},[a("div",{staticClass:"text-muted text-nowrap mr-3"},[t._v(" 小計 "),a("strong",[t._v(t._s(t.product.num*t.product.price))]),t._v(" 元 ")]),a("button",{staticClass:"btn btn-funOrange text-light",attrs:{type:"button"},on:{click:function(e){return t.addtoCart(t.product.id,t.product.num)}}},[t.product.id===t.loadingItem?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v(" 加到購物車 ")])])])])]),a("div",{staticClass:"row justify-content-center mt-5"},[a("div",{staticClass:"col-md-9"},[a("table",{staticClass:"table"},[t._m(1),a("tbody",t._l(t.cart.carts,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"align-middle"},[a("button",{staticClass:"btn btn-outline-funDarkOrange btn-sm",attrs:{type:"button"},on:{click:function(a){return t.removeCartItem(e.id)}}},[a("i",{staticClass:"far fa-trash-alt"})])]),a("td",{staticClass:"align-middle"},[t._v(" "+t._s(e.product.title)+" "),e.coupon&&t.coupon_mseeage.success?a("div",{staticClass:"text-success"},[t._v(" 已套用優惠券 ")]):t._e()]),a("td",{staticClass:"align-middle"},[t._v(" "+t._s(e.qty)+"/"+t._s(e.product.unit)+" ")]),a("td",{staticClass:"align-middle text-right"},[t._v(" "+t._s(t._f("currency")(e.final_total))+" ")])])})),0),a("tfoot",[a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("總計")]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.cart.total)))])]),t.cart.final_total!==t.cart.total&&t.coupon_mseeage.success?a("tr",[a("td",{staticClass:"text-right text-success",attrs:{colspan:"3"}},[t._v("折扣價")]),a("td",{staticClass:"text-right text-success"},[t._v(" "+t._s(t._f("currency")(t.cart.final_total))+" ")])]):t._e()])]),a("div",{staticClass:"text-success",class:{"text-danger":!t.coupon_mseeage.success}},[t._v(" "+t._s(t.coupon_mseeage.msg)+" ")]),a("div",{staticClass:"input-group input-group-sm mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-funOrange text-light",attrs:{type:"button"},on:{click:t.addCouponCode}},[t._v(" 套用優惠碼 ")])])])])]),a("div",{staticClass:"my-5 row justify-content-center"},[a("form",{staticClass:"col-md-6",on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}}},[a("div",{staticClass:"form-group"},[a("ValidationProvider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("label",{attrs:{for:"useremail"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",class:{"is-invalid":s[0]},attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入 Email",required:""},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}])})],1),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),a("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:{"is-invalid":s[0]},attrs:{type:"text",name:"name",id:"username",placeholder:"輸入姓名",required:""},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}])})],1),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"usertel"}},[t._v("收件人電話")]),a("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:{"is-invalid":s[0]},attrs:{type:"tel",id:"usertel",placeholder:"請輸入電話",required:""},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}])})],1),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useraddress"}},[t._v("收件人地址")]),a("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",class:{"is-invalid":s[0]},attrs:{type:"text",name:"address",id:"useraddress",placeholder:"請輸入地址",required:""},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}])})],1),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"comment"}},[t._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),t._m(2)])])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"bg-funGray"},[a("th"),a("th",[t._v("品名")]),a("th",[t._v("數量")]),a("th",[t._v("單價")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-funOrange text-light"},[t._v("送出訂單")])])}],o=(a("99af"),a("1157")),i=a.n(o),n={data:function(){return{products:[],product:{},loadingItem:"",isLoading:!1,cart:{},coupon_code:"",coupon_mseeage:{msg:"",success:!0},form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getProducts:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("yurong77","/products/all");t.isLoading=!0,t.$http.get(e).then((function(e){t.products=e.data.products,t.isLoading=!1}))},getProduct:function(t){var e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("yurong77","/product/").concat(t);e.loadingItem=t,e.$http.get(a).then((function(t){e.product=t.data.product,i()("#productModal").modal("show"),e.loadingItem="",e.product.num=1}))},addtoCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("yurong77","/cart");a.loadingItem=t;var r={product_id:t,qty:e};a.$http.post(s,{data:r}).then((function(){a.loadingItem="",a.getCart(),i()("#productModal").modal("hide")}))},getCart:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("yurong77","/cart");t.isLoading=!0,t.$http.get(e).then((function(e){t.cart=e.data.data,t.isLoading=!1}))},removeCartItem:function(t){var e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("yurong77","/cart/").concat(t);e.isLoading=!0,e.$http.delete(a).then((function(){e.isLoading=!1,e.getCart()}))},addCouponCode:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("yurong77","/coupon"),a={code:t.coupon_code};t.isLoading=!0,t.$http.post(e,{data:a}).then((function(e){e.data.success?t.coupon_mseeage.success=!0:t.coupon_mseeage.success=!1,t.coupon_mseeage.msg=e.data.message,t.isLoading=!1,t.getCart()}))},createOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("yurong77","/order");t.isLoading=!0;var a=t.form;t.$http.post(e,{data:a}).then((function(e){e.data.success&&t.$router.push("/customer_checkout/".concat(e.data.orderId)),t.isLoading=!1}))}},created:function(){this.getProducts(),this.getCart()}},c=n,d=a("2877"),l=Object(d["a"])(c,s,r,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-fda4ca8e.b90f7004.js.map