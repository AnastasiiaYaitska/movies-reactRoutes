"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{626:function(n,t,e){e.d(t,{Ai:function(){return p},Mc:function(){return s},US:function(){return f},oJ:function(){return l},wr:function(){return i}});var r=e(683),u=e(861),a=e(757),c=e.n(a),o=e(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTljNGVmNDAyODAwODUxODhjZWZjMmU4N2FmNmEwYyIsInN1YiI6IjY0MTk3YmI2MzEwMzI1MDA4NmY5OTkzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q-ovqu-7T5oRDliML0kPyxUZJ15bJ1hjveunlXRTE9s";var i=function(){var n=(0,u.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/movie/week",t);case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,u.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t),e);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,u.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/credits"),e);case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,u.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/reviews"),e);case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,u.Z)(c().mark((function n(t,e){var u;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie",(0,r.Z)({params:{language:"en-US",query:t,include_adult:!1}},e));case 2:return u=n.sent,n.abrupt("return",u.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()},249:function(n,t,e){e.d(t,{O:function(){return l}});var r,u,a=e(168),c=e(444),o=e(87),i=c.ZP.ul(r||(r=(0,a.Z)(["\n  list-style: none;\n  padding-left: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),s=(0,c.ZP)(o.rU)(u||(u=(0,a.Z)(["\n  text-decoration: none;\n  color: black;\n  &:hover,\n  &:focus {\n    color: orangered;\n  }\n"]))),f=e(184),l=function(n){var t=n.movies,e=n.location,r=n.to;return(0,f.jsx)(i,{children:t.map((function(n){var t=n.title,u=n.id;return(0,f.jsx)("li",{children:(0,f.jsx)(s,{to:"string"===typeof r?r:r(u),state:{from:e},children:t})},u)}))})}},278:function(n,t,e){e.r(t);var r=e(861),u=e(439),a=e(757),c=e.n(a),o=e(791),i=e(87),s=e(689),f=e(626),l=e(249),p=e(184);t.default=function(){var n,t=(0,o.useState)([]),e=(0,u.Z)(t,2),a=e[0],v=e[1],d=(0,o.useState)(),h=(0,u.Z)(d,2),m=h[0],x=h[1],Z=(0,i.lr)(),w=(0,u.Z)(Z,2),g=w[0],y=w[1],b=null!==(n=g.get("query"))&&void 0!==n?n:"",k=(0,s.TH)();(0,o.useEffect)((function(){var n=new AbortController;if(""!==b){var t=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.Ai)(b,{signal:n.signal});case 3:e=t.sent,v(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){return n.abort()}}}),[b]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),void 0===m||""===m)return y({});y({query:m}),x("")},children:[(0,p.jsxs)("label",{htmlFor:"",children:[" ",(0,p.jsx)("input",{type:"text",value:m,name:"movie",onChange:function(n){var t=n.target.value;x(t)}})]}),(0,p.jsx)("button",{type:"submit",children:"Search"})]}),(0,p.jsx)(l.O,{movies:a,to:function(n){return"".concat(n)},location:k})]})}}}]);
//# sourceMappingURL=278.120b6add.chunk.js.map