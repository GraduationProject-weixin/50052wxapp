(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"3f74":function(t,e,n){"use strict";n.r(e);var r=n("acd5"),i=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=i.a},5749:function(t,e,n){"use strict";n.r(e);var r=n("9e60"),i=n("3f74");for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n("eb13");var a,s=n("f0c5"),o=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"761d2e0f",null,!1,r["a"],a);e["default"]=o.exports},"7b05":function(t,e,n){"use strict";(function(t){n("9b73"),n("921b");r(n("66fd"));var e=r(n("5749"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"9e60":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}))},"9fcc":function(t,e,n){},acd5:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,r,i,u,a){try{var s=t[u](a),o=s.value}catch(c){return void n(c)}s.done?e(o):Promise.resolve(o).then(r,i)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function s(t){u(a,r,i,s,o,"next",t)}function o(t){u(a,r,i,s,o,"throw",t)}s(void 0)}))}}var s={data:function(){return{ruleForm:{},tableName:""}},onLoad:function(){var e=t.getStorageSync("loginTable");this.tableName=e,this.styleChange()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var t=a(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.zhanghao||"yonghu"!=this.tableName){t.next=3;break}return this.$utils.msg("账号不能为空"),t.abrupt("return");case 3:if(this.ruleForm.mima||"yonghu"!=this.tableName){t.next=6;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(this.ruleForm.xingming||"yonghu"!=this.tableName){t.next=9;break}return this.$utils.msg("姓名不能为空"),t.abrupt("return");case 9:if("yonghu"!=this.tableName||!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){t.next=12;break}return this.$utils.msg("年龄应输入整数"),t.abrupt("return");case 12:if("yonghu"!=this.tableName||!this.ruleForm.dianhua||this.$validate.isMobile(this.ruleForm.dianhua)){t.next=15;break}return this.$utils.msg("电话应输入手机格式"),t.abrupt("return");case 15:if("yonghu"!=this.tableName||!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){t.next=18;break}return this.$utils.msg("邮箱应输入邮件格式"),t.abrupt("return");case 18:return t.next=20,this.$api.register("".concat(this.tableName),this.ruleForm);case 20:this.$utils.msgBack("注册成功");case 22:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=s}).call(this,n("543d")["default"])},eb13:function(t,e,n){"use strict";var r=n("9fcc"),i=n.n(r);i.a}},[["7b05","common/runtime","common/vendor"]]]);