"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[544],{1656:function(t,n,e){var r=e(5861),c=e(4687),a=e.n(c),i=e(2388),u={API:{KEY:"2c56ca605d93fc994eb0f57dccfe3295",URL:"https://api.themoviedb.org"},getMovieList:function(){var t=(0,r.Z)(a().mark((function t(){var n,e,r,c,u;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.API,e=n.KEY,r=n.URL,c="".concat(r,"/3/trending/movie/day?api_key=").concat(e),t.next=4,i.Z.get(c);case 4:return u=t.sent,t.abrupt("return",u.data.results);case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),getMovie:function(){var t=(0,r.Z)(a().mark((function t(n){var e,r,c,u,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.API,r=e.KEY,c=e.URL,u="".concat(c,"/3/movie/").concat(n,"?api_key=").concat(r),t.next=4,i.Z.get(u);case 4:return o=t.sent,t.abrupt("return",o.data);case 6:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}(),getActors:function(){var t=(0,r.Z)(a().mark((function t(n){var e,r,c,u,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.API,r=e.KEY,c=e.URL,u="".concat(c,"/3/movie/").concat(n,"/credits?api_key=").concat(r),t.next=4,i.Z.get(u);case 4:return o=t.sent,t.abrupt("return",o.data.cast);case 6:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}(),getReview:function(){var t=(0,r.Z)(a().mark((function t(n){var e,r,c,u,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.API,r=e.KEY,c=e.URL,u="".concat(c,"/3/movie/").concat(n,"/reviews?api_key=").concat(r),t.next=4,i.Z.get(u);case 4:return o=t.sent,t.abrupt("return",o.data.results);case 6:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}(),searchMovie:function(t){var n=this.API,e=n.KEY,r=n.URL,c="".concat(r,"/3/search/movie/?api_key=").concat(e,"&query=").concat(t);return fetch(c).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))}};n.Z=u},9544:function(t,n,e){e.r(n);var r=e(5861),c=e(9439),a=e(4687),i=e.n(a),u=e(2791),o=e(8125),s=e(1656),f=e(184);n.default=function(){var t=(0,u.useState)([]),n=(0,c.Z)(t,2),e=n[0],a=n[1];return(0,u.useEffect)((function(){var t=function(){var t=(0,r.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.getMovieList();case 2:n=t.sent,a(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,f.jsx)(o.$,{children:(0,f.jsx)("ul",{children:e.map((function(t){return(0,f.jsx)(o.r,{to:"movies/".concat(t.id),children:t.title},t.id)}))})})}},8125:function(t,n,e){e.d(n,{$:function(){return o},r:function(){return s}});var r,c,a=e(168),i=e(1087),u=e(7691),o=u.ZP.section(r||(r=(0,a.Z)(["\npadding: 50px;\n"]))),s=(0,u.ZP)(i.OL)(c||(c=(0,a.Z)(["\ndisplay: flex;\nflex-direction: column;\npadding: 5px;\n"])))}}]);
//# sourceMappingURL=544.d92a53f7.chunk.js.map