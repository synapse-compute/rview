(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d22c0ff"],{f241:function(e,a,n){"use strict";n.r(a);var r=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("q-layout",{attrs:{view:"hHh lpR fFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"",to:"/",icon:"folder"},on:{click:function(a){e.leftDrawerOpen=!1}}}),n("q-btn",{attrs:{flat:"",dense:"",round:"",to:"viewer",icon:"layers",disable:!e.viewmodel.docExists},on:{click:function(a){e.leftDrawerOpen=!e.leftDrawerOpen}}}),n("q-toolbar-title",[e._v("\n        "+e._s(e.viewmodel.filename)+"\n      ")]),n("div",[e._v("rview WIP")]),n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"keyboard_arrow_up"},on:{click:function(a){e.leftDrawerOpen=!e.leftDrawerOpen}}})],1)],1),n("q-drawer",{attrs:{bordered:"",overlay:"","content-class":"bg-grey-2"},model:{value:e.leftDrawerOpen,callback:function(a){e.leftDrawerOpen=a},expression:"leftDrawerOpen"}},[n("q-tree",{attrs:{nodes:e.viewmodel.layers,expanded:e.viewmodel.expanded,"node-key":"label"},on:{"update:expanded":function(a){return e.$set(e.viewmodel,"expanded",a)}}})],1),n("q-page-container",[n("router-view")],1)],1)},t=[],o=n("1bee"),l={data:function(){var e=o["a"].viewModel();return{leftDrawerOpen:!1,viewmodel:e}}},d=l,i=n("2877"),c=n("eebe"),s=n.n(c),f=n("4d5a"),w=n("e359"),u=n("65c6"),p=n("9c40"),v=n("6ac5"),b=n("9404"),m=n("7f41"),q=n("09e3"),D=Object(i["a"])(d,r,t,!1,null,null,null);a["default"]=D.exports;s()(D,"components",{QLayout:f["a"],QHeader:w["a"],QToolbar:u["a"],QBtn:p["a"],QToolbarTitle:v["a"],QDrawer:b["a"],QTree:m["a"],QPageContainer:q["a"]})}}]);