(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{51:function(t,n,e){},57:function(t,n,e){"use strict";e.r(n);var o=e(39),c=e.n(o),r=e(40),a=e(13),s=e(38),i=e.n(s),u=e(0),d=(e(51),e(74));function l(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var f=e(76),b=e(4),j=Object(u.memo)((function(t){var n=t.goods;return Object(b.jsx)("ul",{children:n.map((function(t){return Object(b.jsx)(f.a,{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})})),m=function(){var t=Object(u.useState)([]),n=Object(a.a)(t,2),e=n[0],o=n[1],c=function(){var t=Object(r.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=o,t.next=3,n;case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Dynamic list of Goods"}),Object(b.jsx)(d.a,{variant:"contained",color:"secondary",className:"button",type:"button","data-cy":"all-button",onClick:function(){return c(l())},children:"Load all goods"}),Object(b.jsx)(d.a,{variant:"contained",color:"secondary",className:"button",type:"button","data-cy":"first-five-button",onClick:function(){return c(l().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})))},children:"Load 5 first goods"}),Object(b.jsx)(d.a,{variant:"contained",color:"secondary",className:"button",type:"button","data-cy":"red-button",onClick:function(){return c(l().then((function(t){return t.filter((function(t){return"red"===t.color}))})))},children:"Load red goods"}),Object(b.jsx)(j,{goods:e})]})};c.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.4fa565e9.chunk.js.map