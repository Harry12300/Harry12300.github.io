(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba3f8ba6"],{"058a":function(r,e,t){"use strict";t.d(e,"h",(function(){return s})),t.d(e,"j",(function(){return n})),t.d(e,"k",(function(){return o})),t.d(e,"l",(function(){return c})),t.d(e,"i",(function(){return i})),t.d(e,"d",(function(){return u})),t.d(e,"a",(function(){return d})),t.d(e,"g",(function(){return l})),t.d(e,"f",(function(){return p})),t.d(e,"c",(function(){return f})),t.d(e,"e",(function(){return w})),t.d(e,"b",(function(){return m}));var a="http://60qb8761xi36.vicp.fun",s=a+"/api/users/getAll",n=a+"/api/users/register",o=a+"/api/users/register_application/approve",c=a+"/api/users",i=a+"/api/users/login",u=a+"/api/questions/categories",d=a+"/api/records/user",l=a+"/api/users/register_application",p=a+"/api/records",f=a+"/api/questions/batch",w=a+"/api/questions/category",m=a+"/api/questions/category"},"8c47":function(r,e,t){"use strict";t.r(e);var a=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"dashboard-container"},[t("el-card",{staticClass:"dashboard-card",attrs:{shadow:"hover"}},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",{staticClass:"card-title"},[r._v("修改密碼")])]),t("el-form",{ref:"passwordForm",attrs:{model:r.passwordForm,rules:r.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"帳號"}},[t("el-input",{attrs:{disabled:""},model:{value:r.name,callback:function(e){r.name=e},expression:"name"}})],1),t("el-form-item",{attrs:{label:"新密碼",prop:"newPassword"}},[t("el-input",{attrs:{type:"password"},model:{value:r.passwordForm.newPassword,callback:function(e){r.$set(r.passwordForm,"newPassword",e)},expression:"passwordForm.newPassword"}})],1),t("el-form-item",{attrs:{label:"確認密碼",prop:"confirmPassword"}},[t("el-input",{attrs:{type:"password"},model:{value:r.passwordForm.confirmPassword,callback:function(e){r.$set(r.passwordForm,"confirmPassword",e)},expression:"passwordForm.confirmPassword"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(e){return r.submitForm("passwordForm")}}},[r._v("修改密碼")])],1)],1)],1)],1)},s=[],n=t("5530"),o=t("c7eb"),c=t("1da1"),i=(t("99af"),t("7db0"),t("b0c0"),t("e9c4"),t("d3b7"),t("2f62")),u=t("058a"),d={name:"ChangePassword",data:function(){var r=this,e=function(e,t,a){""===t?a(new Error("請輸入密碼")):(""!==r.passwordForm.confirmPassword&&r.$refs.passwordForm.validateField("confirmPassword"),a())},t=function(e,t,a){""===t?a(new Error("請再次輸入密碼")):t!==r.passwordForm.newPassword?a(new Error("兩次輸入密碼不一致!")):a()};return{Uname:"",Urole:"",Uaccount:"",Uid:"",passwordForm:{newPassword:"",confirmPassword:""},rules:{newPassword:[{validator:e,trigger:"blur"}],confirmPassword:[{validator:t,trigger:"blur"}]}}},created:function(){var r=this;return Object(c["a"])(Object(o["a"])().mark((function e(){var t,a,s;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(u["h"]);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,1===a.code&&a.data&&(s=a.data.find((function(e){return e.account===r.name})),s&&(r.Uname=s.name,r.Uaccount=s.account,r.Urole=s.role,r.Uid=s.userId)),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.error("獲取用戶資料時發生錯誤:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},methods:{submitForm:function(r){var e=this;return Object(c["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs[r].validate(function(){var r=Object(c["a"])(Object(o["a"])().mark((function r(t){var a,s;return Object(o["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!t){r.next=17;break}return r.prev=1,r.next=4,fetch("".concat(u["l"],"/").concat(e.Uid),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.Uname,account:e.name,password:e.passwordForm.newPassword,role:e.Urole})});case 4:return a=r.sent,r.next=7,a.json();case 7:s=r.sent,1===s.code?(e.$message.success("密碼修改成功"),e.passwordForm.newPassword="",e.passwordForm.confirmPassword=""):e.$message.error(s.msg||"密碼修改失敗"),r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](1),console.error("修改密碼時發生錯誤:",r.t0),e.$message.error("修改密碼失敗，請稍後再試");case 15:r.next=19;break;case 17:return console.log("表單驗證失敗"),r.abrupt("return",!1);case 19:case"end":return r.stop()}}),r,null,[[1,11]])})));return function(e){return r.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})))()}},computed:Object(n["a"])({},Object(i["b"])(["name"]))},l=d,p=(t("d480"),t("2877")),f=Object(p["a"])(l,a,s,!1,null,"d031cfda",null);e["default"]=f.exports},c631:function(r,e,t){},d480:function(r,e,t){"use strict";t("c631")},e9c4:function(r,e,t){var a=t("23e7"),s=t("d066"),n=t("d039"),o=s("JSON","stringify"),c=/[\uD800-\uDFFF]/g,i=/^[\uD800-\uDBFF]$/,u=/^[\uDC00-\uDFFF]$/,d=function(r,e,t){var a=t.charAt(e-1),s=t.charAt(e+1);return i.test(r)&&!u.test(s)||u.test(r)&&!i.test(a)?"\\u"+r.charCodeAt(0).toString(16):r},l=n((function(){return'"\\udf06\\ud834"'!==o("\udf06\ud834")||'"\\udead"'!==o("\udead")}));o&&a({target:"JSON",stat:!0,forced:l},{stringify:function(r,e,t){var a=o.apply(null,arguments);return"string"==typeof a?a.replace(c,d):a}})}}]);