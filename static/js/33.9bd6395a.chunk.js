"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{626:function(n,e,r){r.d(e,{Ai:function(){return d},Mc:function(){return o},US:function(){return l},oJ:function(){return p},wr:function(){return u}});var t=r(683),a=r(861),s=r(757),c=r.n(s),i=r(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTljNGVmNDAyODAwODUxODhjZWZjMmU4N2FmNmEwYyIsInN1YiI6IjY0MTk3YmI2MzEwMzI1MDA4NmY5OTkzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q-ovqu-7T5oRDliML0kPyxUZJ15bJ1hjveunlXRTE9s";var u=function(){var n=(0,a.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/week",e);case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)(c().mark((function n(e,r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e),r);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)(c().mark((function n(e,r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/credits"),r);case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)(c().mark((function n(e,r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/reviews"),r);case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)(c().mark((function n(e,r){var a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie",(0,t.Z)({params:{language:"en-US",query:e,include_adult:!1}},r));case 2:return a=n.sent,n.abrupt("return",a.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()},33:function(n,e,r){r.r(e),r.d(e,{default:function(){return y}});var t,a,s,c,i=r(861),u=r(439),o=r(757),l=r.n(o),p=r(791),d=r(87),f=r(689),h=r(626),v=r(168),x=r(444),m=x.ZP.div(t||(t=(0,v.Z)(["\n  margin-top: 15px;\n  display: flex;\n"]))),j=x.ZP.div(a||(a=(0,v.Z)(["\n  padding-left: 25px;\n"]))),g=(0,x.ZP)(d.rU)(s||(s=(0,v.Z)(["\n  /* margin-bottom: 30px; */\n  text-decoration: none;\n  padding: 3px 5px;\n  margin-left: 10px;\n  border-radius: 5px;\n  border: 1px solid black;\n  color: black;\n  &:hover,\n  &:focus {\n    color: orangered;\n  }\n"]))),w=x.ZP.h1(c||(c=(0,v.Z)(["\n  margin-top: 0;\n"]))),Z=r(185),b=r(521),k=r(184),y=function(){var n,e,r=(0,p.useState)({}),t=(0,u.Z)(r,2),a=t[0],s=t[1],c=(0,f.UO)().movieId,o=(0,f.TH)(),v=(0,p.useRef)(null!==(n=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");(0,p.useEffect)((function(){var n=new AbortController,e=function(){var e=(0,i.Z)(l().mark((function e(){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.Mc)(+c,{signal:n.signal});case 3:r=e.sent,s(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){n.abort()}}),[c]);var x=a.title,y=a.vote_average,I=a.overview,U=a.genres,J=a.poster_path,O=a.tagline;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("span",{children:(0,k.jsx)(Z.And,{})}),(0,k.jsx)(g,{to:v.current,children:"Go back"}),(0,k.jsxs)(m,{children:[(0,k.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(J),width:"300",alt:O}),(0,k.jsxs)(j,{children:[(0,k.jsx)(w,{children:x}),(0,k.jsxs)("p",{children:[" User Score: ",(10*y).toFixed()," %"]}),(0,k.jsx)("h2",{children:"Overview"}),(0,k.jsx)("p",{children:I}),(0,k.jsx)("h3",{children:"Genres"}),(0,k.jsx)("p",{children:U&&U.map((function(n){return n.name+" "}))})]})]}),(0,k.jsxs)("ul",{children:[" ","Additional information",(0,k.jsx)("li",{children:(0,k.jsx)(d.rU,{to:"cast",children:"Cast"})}),(0,k.jsx)("li",{children:(0,k.jsx)(d.rU,{to:"reviews",children:"Reviews"})})]}),(0,k.jsx)(p.Suspense,{fallback:(0,k.jsx)(b.a,{}),children:(0,k.jsx)(f.j3,{})})]})}}}]);
//# sourceMappingURL=33.9bd6395a.chunk.js.map