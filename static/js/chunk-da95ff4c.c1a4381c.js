(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da95ff4c"],{"058a":function(e,t,s){"use strict";s.d(t,"h",(function(){return i})),s.d(t,"j",(function(){return r})),s.d(t,"k",(function(){return o})),s.d(t,"l",(function(){return a})),s.d(t,"i",(function(){return c})),s.d(t,"d",(function(){return u})),s.d(t,"a",(function(){return l})),s.d(t,"g",(function(){return d})),s.d(t,"f",(function(){return b})),s.d(t,"c",(function(){return f})),s.d(t,"e",(function(){return p})),s.d(t,"b",(function(){return g}));var n="http://60qb8761xi36.vicp.fun",i=n+"/api/users/getAll",r=n+"/api/users/register",o=n+"/api/users/register_application/approve",a=n+"/api/users",c=n+"/api/users/login",u=n+"/api/questions/categories",l=n+"/api/records/user",d=n+"/api/users/register_application",b=n+"/api/records",f=n+"/api/questions/batch",p=n+"/api/questions/category",g=n+"/api/questions/category"},"711a":function(e,t,s){},"941b":function(e,t,s){"use strict";s("711a")},a15b:function(e,t,s){"use strict";var n=s("23e7"),i=s("44ad"),r=s("fc6a"),o=s("a640"),a=[].join,c=i!=Object,u=o("join",",");n({target:"Array",proto:!0,forced:c||!u},{join:function(e){return a.call(r(this),void 0===e?",":e)}})},e9c4:function(e,t,s){var n=s("23e7"),i=s("d066"),r=s("d039"),o=i("JSON","stringify"),a=/[\uD800-\uDFFF]/g,c=/^[\uD800-\uDBFF]$/,u=/^[\uDC00-\uDFFF]$/,l=function(e,t,s){var n=s.charAt(t-1),i=s.charAt(t+1);return c.test(e)&&!u.test(i)||u.test(e)&&!c.test(n)?"\\u"+e.charCodeAt(0).toString(16):e},d=r((function(){return'"\\udf06\\ud834"'!==o("\udf06\ud834")||'"\\udead"'!==o("\udead")}));o&&n({target:"JSON",stat:!0,forced:d},{stringify:function(e,t,s){var n=o.apply(null,arguments);return"string"==typeof n?n.replace(a,l):n}})},feda:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{padding:"10px"}},[e.tableLoading?s("div",{staticClass:"loading-overlay"},[e._m(0)]):e._e(),e.outerVisible||e.innerVisible||e.resultDialogVisible||e.testStarted?e._e():s("el-button",{on:{click:function(t){e.outerVisible=!0}}},[e._v("選擇類別")]),s("el-dialog",{attrs:{title:"選擇類別",visible:e.outerVisible,width:"80%"},on:{"update:visible":function(t){e.outerVisible=t}}},[s("el-row",e._l(e.uniqueCategories,(function(t){return s("el-col",{key:t,staticStyle:{padding:"5px"},attrs:{span:100}},[s("el-button",{on:{click:function(s){return e.startTest(t)}}},[e._v(" "+e._s(t)+" ")])],1)})),1),s("el-dialog",{attrs:{title:"提示",visible:e.innerVisible,width:"60%","before-close":e.handleClose,"append-to-body":""},on:{"update:visible":function(t){e.innerVisible=t}}},[s("span",[e._v("開始測驗 "+e._s(e.selectedCategory))]),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.confirmTest}},[e._v("確認")])],1)]),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.outerVisible=!1}}},[e._v("取消")])],1)],1),e.testStarted?s("div",[e._l(e.questions,(function(t,n){return s("div",{key:t.questionId},[s("p",[e._v(e._s(n+1)+". "+e._s(t.question_text))]),s("el-radio",{attrs:{label:"A",disabled:e.answersSubmitted},model:{value:e.answers[t.questionId],callback:function(s){e.$set(e.answers,t.questionId,s)},expression:"answers[question.questionId]"}},[s("span",{class:{"correct-answer":e.isCorrectAnswer(t,"A")}},[e._v("A")])]),s("el-radio",{attrs:{label:"B",disabled:e.answersSubmitted},model:{value:e.answers[t.questionId],callback:function(s){e.$set(e.answers,t.questionId,s)},expression:"answers[question.questionId]"}},[s("span",{class:{"correct-answer":e.isCorrectAnswer(t,"B")}},[e._v("B")])]),s("el-radio",{attrs:{label:"C",disabled:e.answersSubmitted},model:{value:e.answers[t.questionId],callback:function(s){e.$set(e.answers,t.questionId,s)},expression:"answers[question.questionId]"}},[s("span",{class:{"correct-answer":e.isCorrectAnswer(t,"C")}},[e._v("C")])]),s("el-radio",{attrs:{label:"D",disabled:e.answersSubmitted},model:{value:e.answers[t.questionId],callback:function(s){e.$set(e.answers,t.questionId,s)},expression:"answers[question.questionId]"}},[s("span",{class:{"correct-answer":e.isCorrectAnswer(t,"D")}},[e._v("D")])])],1)})),s("el-divider"),e.answersSubmitted?e._e():s("el-button",{on:{click:e.submitAnswers}},[e._v("提交")]),e.answersSubmitted?s("el-button",{on:{click:e.continueTest}},[e._v("繼續做題")]):e._e()],2):e._e(),s("el-dialog",{attrs:{title:"結果",visible:e.resultDialogVisible,width:"80%","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},on:{"update:visible":function(t){e.resultDialogVisible=t}}},[s("span",[e._v("對 "+e._s(e.correctCount)+" 題，錯 "+e._s(e.incorrectCount)+" 題")]),s("p",[e._v("錯題題號: "+e._s(e.incorrectQuestions.join(", ")))]),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.closeResultDialog}},[e._v("確認")])],1)])],1)},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"loading-content"},[s("img",{staticClass:"loading-gif",attrs:{src:"https://media.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif",alt:"Loading"}}),s("p",{staticClass:"loading-text"},[e._v("載入中..")])])}],r=s("c7eb"),o=s("1da1"),a=s("5530"),c=(s("99af"),s("a15b"),s("b0c0"),s("e9c4"),s("d3b7"),s("159b"),s("058a")),u=s("2f62"),l={data:function(){return{questions:[],uniqueCategories:[],outerVisible:!0,innerVisible:!1,selectedCategory:"",answers:{},resultDialogVisible:!1,correctCount:0,incorrectCount:0,incorrectQuestions:[],testStarted:!1,answersSubmitted:!1,tableLoading:!1}},computed:Object(a["a"])({},Object(u["b"])(["name"])),methods:{fetchQuestions:function(){var e=this;return Object(o["a"])(Object(r["a"])().mark((function t(){var s,n;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.tableLoading=!0,t.next=4,fetch(c["d"]);case 4:return s=t.sent,t.next=7,s.json();case 7:n=t.sent,1===n.code&&n.data?(e.uniqueCategories=n.data,console.log(e.uniqueCategories)):console.error("獲取問題失敗:",n.msg),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.error("獲取問題時發生錯誤:",t.t0);case 14:return t.prev=14,e.tableLoading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,11,14,17]])})))()},startTest:function(e){this.selectedCategory=e,this.innerVisible=!0},handleClose:function(e){this.innerVisible=!1,e()},confirmTest:function(){var e=this;return Object(o["a"])(Object(r["a"])().mark((function t(){var s,n;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.innerVisible=!1,e.outerVisible=!1,e.tableLoading=!0,t.prev=3,t.next=6,fetch("".concat(c["e"],"/").concat(e.selectedCategory,"/random/5"));case 6:return s=t.sent,t.next=9,s.json();case 9:n=t.sent,1===n.code&&n.data?(e.questions=n.data,e.answers={},e.testStarted=!0,e.answersSubmitted=!1,console.log(e.questions)):console.error("獲取問題失敗:",n.msg),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](3),console.error("獲取問題時發生錯誤:",t.t0);case 16:return t.prev=16,e.tableLoading=!1,t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[3,13,16,19]])})))()},submitAnswers:function(){var e=this;this.correctCount=0,this.incorrectCount=0,this.incorrectQuestions=[],this.questions.forEach((function(t){e.answers[t.questionId]===t.answer?e.correctCount++:(e.incorrectCount++,e.incorrectQuestions.push(t.categoryQuestionId))})),this.resultDialogVisible=!0,this.answersSubmitted=!0,this.saveTestResult()},saveTestResult:function(){var e=this;return Object(o["a"])(Object(r["a"])().mark((function t(){var s,n;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,s={account:e.name,category:e.selectedCategory,score:10*e.correctCount,wrong_questions:e.incorrectQuestions.join(",")},console.log(s),t.next=5,fetch(c["f"],{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 5:n=t.sent,n.ok?console.log("測驗結果已儲存"):console.error("儲存測驗結果失敗:",n.statusText),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.error("儲存測驗結果時發生錯誤:",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},isCorrectAnswer:function(e,t){return this.answersSubmitted&&e.answer===t},closeResultDialog:function(){this.resultDialogVisible=!1},continueTest:function(){this.testStarted=!1,this.answersSubmitted=!1,this.outerVisible=!0}},mounted:function(){this.fetchQuestions()}},d=l,b=(s("941b"),s("2877")),f=Object(b["a"])(d,n,i,!1,null,"0da24b1c",null);t["default"]=f.exports}}]);