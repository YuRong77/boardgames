(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22840612"],{"027a":function(t,s,e){"use strict";var a=e("1817"),n=e.n(a);n.a},1817:function(t,s,e){},"27af":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fluid bg-funGray vh-100 d-flex justify-content-center"},[e("div",{staticClass:"login"},[t._m(0),e("form",{staticClass:"login_form p-4",on:{submit:function(s){return s.preventDefault(),t.signin(s)}}},[e("h3",{staticClass:"h6 text-secondary mb-3"},[t._v("管理員登入")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control mb-3",attrs:{type:"email",id:"inputEmail",placeholder:"輸入電子信箱",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(s){s.target.composing||t.$set(t.user,"username",s.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control mb-3",attrs:{type:"password",id:"inputPassword",placeholder:"輸入密碼",required:""},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}}),e("button",{staticClass:"btn btn-md btn-funOrange btn-block text-light",attrs:{type:"submit"}},[t._v(" 確認 ")])])]),e("div",{staticClass:"previous"},[e("router-link",{staticClass:"btn",attrs:{to:"/"}},[e("i",{staticClass:"fas fa-undo-alt bg-funDarkOrange text-white rounded-circle p-2"})])],1)])},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"login_logo mb-3"},[a("img",{attrs:{src:e("65e0"),alt:""}})])}],r={data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/admin/signin");t.$http.post(s,this.user).then((function(s){s.data.success&&t.$router.push("/admin/adminproduct")}))}}},i=r,o=(e("027a"),e("2877")),u=Object(o["a"])(i,a,n,!1,null,"3fa66d03",null);s["default"]=u.exports},"65e0":function(t,s,e){t.exports=e.p+"img/logo2.04157db0.svg"}}]);
//# sourceMappingURL=chunk-22840612.7b919a60.js.map