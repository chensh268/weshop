(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{MQEk:function(e,t,a){"use strict";var r=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("SeLb")),s=r(a("fh3l")),u=a("dCQc"),c={namespace:"searchHistory",state:{data:{list:[],pagination:{}}},effects:{list:s.default.mark(function e(t,a){var r,n,c,i;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,c=a.put,e.next=4,n(u.querySearchHistory,r);case 4:return i=e.sent,e.next=7,c({type:"queryList",payload:i});case 7:case"end":return e.stop()}},e,this)})},reducers:{queryList:function(e,t){return(0,n.default)({},e,{data:t.payload.data})}}};t.default=c}}]);