(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e946e"],{"8d9e":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[a("template",{slot:"default"},[a("img",{attrs:{src:s("333e"),alt:""}})])],2),a("div",{staticClass:"productdetails container"},[a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb bg-white mb-0 mt-3"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{staticClass:"text-funOrange",attrs:{to:"/"}},[t._v("首頁")])],1),a("li",{staticClass:"breadcrumb-item"},[a("router-link",{staticClass:"text-funOrange",attrs:{to:{path:"/product",query:{productCategory:""}}}},[t._v("商品")])],1),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(" "+t._s(t.product.title)+" ")])])]),a("div",{staticClass:"row mb-5"},[a("div",{staticClass:"col-lg-6 mb-5"},[a("div",{staticClass:"rounded shadow h-100 p-3"},[a("div",{staticClass:"border-bottom mb-3",staticStyle:{height:"200px","background-repeat":"no-repeat","background-position":"center"},style:{backgroundImage:"url("+t.product.imageUrl+")"}}),a("div",{staticClass:"description "},[a("h3",{staticClass:"text-funDarkOrange h5"},[t._v("【商品規格】")]),a("p",[t._v(t._s(t.product.description))])]),a("div",{staticClass:"content"},[a("h3",{staticClass:"text-funDarkOrange h5"},[t._v("【商品詳情】")]),a("p",[t._v(t._s(t.product.content))])])])]),a("div",{staticClass:"col-lg-6 mb-5"},[a("div",{staticClass:"rounded shadow p-3"},[a("div",{staticClass:"title border-bottom d-flex justify-content-between mb-3"},[a("h3",{staticClass:"font-weight-bold"},[t._v(t._s(t.product.title))]),a("p",{staticClass:"badge badge-secondary p-2"},[t._v(t._s(t.product.category))])]),a("div",{staticClass:"price border-bottom mb-3"},[t.product.price==t.product.origin_price?a("div",{staticClass:"h5 text-funOrange font-weight-bold"},[t._v(" NT$"+t._s(t.product.origin_price)+" ")]):t._e(),t.product.price!==t.product.origin_price?a("del",{staticClass:"h6 text-funOrange"},[t._v(" 原價NT$"+t._s(t.product.origin_price))]):t._e(),t.product.price!==t.product.origin_price?a("div",{staticClass:"h4 text-funDarkOrange font-weight-bold"},[t._v(" 特價NT$"+t._s(t.product.price)+" ")]):t._e(),a("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control my-3",attrs:{name:""},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.product,"num",e.target.multiple?s:s[0])}}},t._l(10,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(" 選購 "+t._s(e)+" "+t._s(t.product.unit)+" ")])})),0),a("button",{staticClass:"btn btn-funDarkOrange w-100 mb-3",on:{click:function(e){return t.addtoCart(t.product.id,t.product.num)}}},[t._v(" 加到購物車 ")])]),t._m(0)])])]),a("div",{staticClass:"relatedproducts container px-0 mb-5"},[a("h3",{staticClass:"h4 font-weight-bolder mb-4"},[t._v("你可能會喜歡")]),t.relatedproducts.length?a("swiper",{staticClass:"swiper",attrs:{options:t.gamesOptions}},t._l(t.relatedproducts,(function(e){return a("swiper-slide",{key:e.id},[a("div",{staticClass:"card shadow-sm m-2"},[a("div",{staticStyle:{height:"180px","background-repeat":"no-repeat","background-position":"center"},style:{backgroundImage:"url("+e.imageUrl+")"}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(" "+t._s(e.title)+" ")]),a("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[e.price==e.origin_price?a("div",{staticClass:"h4 text-funOrange"},[t._v(" $"+t._s(e.origin_price)+" 元 ")]):t._e(),e.price!==e.origin_price?a("del",{staticClass:"h6 text-funOrange"},[t._v(t._s(e.origin_price)+" 元")]):t._e(),e.price!==e.origin_price?a("div",{staticClass:"h4 text-funDarkOrange"},[t._v(" $"+t._s(e.price)+" 元 ")]):t._e()])]),a("div",{staticClass:"card-footer d-flex"},[a("button",{staticClass:"btn btn-funOrange w-100 btn-sm text-light ",attrs:{type:"button","data-id":e.id},on:{click:function(s){return t.toProduct(e.id)}}},[t._v(" 馬上看看 ")])])])])})),1):t._e()],1)])],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"deliverynote"},[s("h3",{staticClass:"text-funDarkOrange h5"},[t._v("【配送及相關說明】")]),s("p",[t._v(" 線上購物的消費者，都可以依照消費者保護法的規定，享有商品貨到次日起七天猶豫期的權益。但猶豫期並非試用期，請留意，您所退回的商品必須回復原狀。 ")]),s("dl",{staticClass:"row"},[s("dt",{staticClass:"col-sm-3"},[t._v("寄送時間 :")]),s("dd",{staticClass:"col-sm-9"},[t._v(" 全島24h到貨，遲到提供100元現金積點。全年無休，週末假日照常出貨。 ")]),s("dt",{staticClass:"col-sm-3"},[t._v("送貨方式 :")]),s("dd",{staticClass:"col-sm-9"},[t._v(" 透過宅配送達。除網頁另有特別標示外，均為常溫配送。 消費者訂購之商品若經配送兩次無法送達，再經本公司以電話與Email均無法聯繫逾三天者，本公司將取消該筆訂單，並且全額退款。 ")]),s("dt",{staticClass:"col-sm-3"},[t._v("送貨範圍 :")]),s("dd",{staticClass:"col-sm-9"},[t._v(" 限台灣本島與離島地區註，部分離島地區包括連江馬祖、綠島、蘭嶼、琉球鄉…等貨件，將送至到岸船公司碼頭，需請收貨人自行至碼頭取貨。注意！收件地址請勿為郵政信箱。 ")]),s("dt",{staticClass:"col-sm-3"},[t._v("售後服務 :")]),s("dd",{staticClass:"col-sm-9"},[t._v(" 非人為損壞，均享一年保固。 ")])])])}],r=(s("99af"),s("4de4"),s("7212")),c={inject:["reload"],components:{Swiper:r["Swiper"],SwiperSlide:r["SwiperSlide"]},data:function(){return{product:{},isLoading:!1,relatedproducts:[],gamesOptions:{observer:!0,observeParents:!0,autoplay:{disableOnInteraction:!1,delay:3500},breakpoints:{1024:{slidesPerView:4,spaceBetween:5},768:{slidesPerView:3,spaceBetween:10},640:{slidesPerView:2,spaceBetween:10},430:{slidesPerView:1,spaceBetween:20}}}}},watch:{$route:function(){this.reload()}},methods:{getProduct:function(){var t=this,e=this.$route.params.id,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("yurong77","/product/").concat(e);t.$http.get(s).then((function(e){t.product=e.data.product,t.product.num=1})),t.getProducts()},getProducts:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("yurong77","/products/all");t.$http.get(e).then((function(e){t.relatedproducts=e.data.products.filter((function(e){return e.category===t.product.category&&e.title!==t.product.title}))}))},addtoCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("yurong77","/cart"),i={product_id:t,qty:e};s.isLoading=!0,s.$http.post(a,{data:i}).then((function(){s.isLoading=!1,s.$bus.$emit("message:push","加入成功","funOrange")}))},toProduct:function(t){this.$router.push("/product/".concat(t)),this.reload()}},mounted:function(){this.getProduct(),this.getProducts()}},o=c,n=s("2877"),d=Object(n["a"])(o,a,i,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0e946e.10710573.js.map