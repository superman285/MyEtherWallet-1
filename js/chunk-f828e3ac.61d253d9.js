(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f828e3ac"],{"408a3":function(e,t,a){},dd4e:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},r=[],i=(a("b680"),a("d3b7"),a("25f0"),a("96cf"),a("c964")),o=a("f3f3"),u=a("2f62"),c=a("901e"),l=a.n(c),d="https://sai-kovan.makerfoundation.com/v1",s=function(e){return new l.a(e)},p={props:{ethPrice:{type:l.a,default:function(){return new l.a(0)}},makerActive:{type:Boolean,default:!1},cdps:{type:Array,default:function(){return[]}},availableCdps:{type:Object,default:function(){return{}}},cdpDetailsLoaded:{type:Boolean,default:!1}},data:function(){return{loaded:!1,serverUrl:d,wethToPethRatio:0,daiPrice:0,priceFloor:0,ethQty:0,daiQty:0,selectedCdp:"",cdp:{},eth:s(0),dai:s(0),debtValue:s(0),collatRatio:s(0),pethCollateral:s(0),usdCollateral:s(0),ethCollateral:s(0),ratio:null,isSafe:!1,maxDaiDraw:s(0),maxPethDraw:s(0),maxEthDraw:s(0)}},computed:Object(o["a"])({},Object(u["c"])("main",["account","gasPrice","web3","network","ens"]),{cdpOptions:function(){return this.availableCdps}}),mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.makerActive||e.$router.push({name:"Maker"});case 1:case"end":return t.stop()}}),t)})))()},methods:{openManage:function(e){this.$router.push({name:"manage",params:{cdpId:e}})},displayPercentValue:function(e){return l.a.isBigNumber(e)||(e=new l.a(e)),e.times(100).toString()},displayFixedValue:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return l.a.isBigNumber(e)||(e=new l.a(e)),e.toFixed(t).toString()}}},f=p,h=(a("e0ef"),a("2877")),m=Object(h["a"])(f,n,r,!1,null,"5e7b209b",null),w=m.exports;t["default"]=w},e0ef:function(e,t,a){"use strict";var n=a("408a3"),r=a.n(n);r.a}}]);
//# sourceMappingURL=chunk-f828e3ac.61d253d9.js.map