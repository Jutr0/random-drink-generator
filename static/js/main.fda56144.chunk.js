(this.webpackJsonpframework=this.webpackJsonpframework||[]).push([[0],{32:function(t,e,n){},62:function(t,e,n){},63:function(t,e,n){},64:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){},67:function(t,e,n){},68:function(t,e,n){},69:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),r=n(25),i=n.n(r),a=n(6),o=n(2),j=(n(32),n.p+"static/media/logo.3a96b926.svg"),l=n.p+"static/media/hamburger.970c7a6f.svg",d=n(0),u=function(){return Object(d.jsxs)("div",{className:"menu",children:[Object(d.jsx)("img",{src:j,alt:"logo"}),Object(d.jsx)("img",{src:l,alt:"hamburger"})]})},b=n(7),h=n.n(b),m=n(9),O=n(11),x=n(10),p=n.n(x),f=function(){var t=Object(c.useState)([]),e=Object(O.a)(t,2),n=e[0],s=e[1];return{drink:n,getDrink:function(){var t=Object(m.a)(h.a.mark((function t(e){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(e)).then((function(t){return console.log(t),t.data.drinks[0]})).then((function(t){return{idDrink:t.idDrink,strDrink:t.strDrink,strCategory:t.strCategory,strAlcoholic:t.strAlcoholic,strGlass:t.strGlass,strInstructions:t.strInstructions,strDrinkThumb:t.strDrinkThumb}})).catch((function(t){return console.error(t),[]}));case 2:n=t.sent,s(n),console.log(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},g=Object(o.f)((function(t){var e=f(),n=e.drink,s=e.getDrink;return Object(c.useEffect)((function(){s(t.match.params.id),console.log(n)}),[]),Object(d.jsxs)("div",{className:"detailsBackground",children:[Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:n.idDrink}),Object(d.jsx)("div",{children:n.strDrink}),Object(d.jsx)("div",{children:n.strCategory}),Object(d.jsx)("div",{children:n.strAlcoholic}),Object(d.jsx)("div",{children:n.strGlass}),Object(d.jsx)("img",{src:n.strDrinkThumb}),Object(d.jsx)("div",{children:n.strInstructions})]})})),k=function(){var t=Object(c.useState)([]),e=Object(O.a)(t,2),n=e[0],s=e[1];return{randomDrink:n,getRandomDrink:function(){var t=Object(m.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((function(t){return console.log(t),t.data.drinks[0]})).then((function(t){return{idDrink:t.idDrink,strDrink:t.strDrink,strCategory:t.strCategory,strAlcoholic:t.strAlcoholic,strGlass:t.strGlass,strInstructions:t.strInstructions,strDrinkThumb:t.strDrinkThumb}})).catch((function(t){return console.error(t),[]}));case 2:e=t.sent,s(e),console.log(e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}},v=(n(62),function(){var t=k(),e=t.randomDrink,n=t.getRandomDrink;Object(c.useEffect)((function(){n()}),[]);return Object(d.jsxs)("section",{className:"ds-background",children:[Object(d.jsx)("button",{className:"ds-randomButton",onClick:function(){n()},children:"Losuj"}),Object(d.jsxs)(a.b,{to:"/details/"+e.idDrink,children:[Object(d.jsx)("div",{className:"ds-image",style:{backgroundImage:"url(".concat(e.strDrinkThumb,")")}}),Object(d.jsx)("div",{className:"ds-name",children:e.strDrink})]})]})}),w=(n(63),function(t){var e=t.width,n=void 0===e?40:e,c=t.direction,s=void 0===c?"right":c,r=t.thickness,i=void 0===r?"normal":r;return Object(d.jsx)("div",{className:"arrowContainer",children:Object(d.jsx)("div",{className:"arrow arrow-".concat(s," arrow-").concat(i," arrow-w").concat(n)})})}),D=n.p+"static/media/gallery1.f372eb80.jpg",N=n.p+"static/media/gallery2.dd7d9bb6.jpg",y=n.p+"static/media/gallery3.006f4abd.jpg",C=n.p+"static/media/gallery4.143e8746.jpg",I=n.p+"static/media/gallery5.d98dd90f.jpg",T=(n(64),function(t){var e=t.img;return Object(d.jsx)("div",{className:"galleryPhoto",style:{backgroundImage:"url(".concat(e,")")}})}),G=[D,N,y,C,I],A=function(){return Object(d.jsxs)("section",{className:"gallery",children:[Object(d.jsx)("h1",{className:"galleryHeader",children:"Dbamy o twoje zdrowie"}),Object(d.jsxs)("div",{className:"galleryInfoContainer",children:[Object(d.jsx)("p",{className:"galleryInfo",children:"Club local is where craftpeople and expert figures meet to combine their knowledge and their voice to create inspiring projects."}),Object(d.jsx)(w,{thickness:"thin",width:56})]}),Object(d.jsx)("div",{className:"photosContainer",children:G.map((function(t){return Object(d.jsx)(T,{img:t})}))}),Object(d.jsx)("div",{style:{clear:"both"}})]})},S=function(){return Object(d.jsxs)("div",{className:"op-product",children:[Object(d.jsx)("div",{className:"op-image"}),Object(d.jsx)(w,{thickness:"thin",width:64})]})},z=(n(65),function(){return Object(d.jsxs)("section",{className:"op-background",children:[Object(d.jsx)("span",{className:"op-text",children:"Poznaj nasze inne produkty"}),Object(d.jsxs)("div",{className:"op-productsContainer",children:[Object(d.jsx)(S,{}),Object(d.jsx)(S,{}),Object(d.jsx)(S,{}),Object(d.jsx)(S,{})]})]})}),B=(n(66),function(){return Object(d.jsx)("div",{className:"imagePreview"})}),E=(n(67),function(){return Object(d.jsx)("section",{className:"slideshow",children:Object(d.jsxs)("div",{className:"ss-bottomInfo",children:[Object(d.jsxs)("div",{className:"ss-left",children:[Object(d.jsx)(B,{}),Object(d.jsxs)("div",{className:"tryDrinkGroup",children:[Object(d.jsx)("div",{className:"tryDrinkText",children:"Spr\xf3buj Spritz Les Iles"}),Object(d.jsx)(w,{thickness:"thin"})]})]}),Object(d.jsx)("button",{className:"goDownButton",children:Object(d.jsx)(w,{thickness:"thin",direction:"down",width:32})})]})})}),P=Object(o.f)((function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(E,{}),Object(d.jsx)(A,{}),Object(d.jsx)(v,{}),Object(d.jsx)(z,{})]})}));var J=function(){return Object(d.jsxs)("main",{className:"appContainer",children:[Object(d.jsx)(u,{}),Object(d.jsx)(a.a,{children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/details/:id",exact:!0,component:g}),Object(d.jsx)(o.a,{path:"/",exact:!0,component:P})]})})]})};n(68);i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(J,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.fda56144.chunk.js.map