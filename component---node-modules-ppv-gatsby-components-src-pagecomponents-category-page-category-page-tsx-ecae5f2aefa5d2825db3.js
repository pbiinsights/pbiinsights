(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ckV0:function(e,t,a){"use strict";a.r(t),a.d(t,"Category",(function(){return h})),a.d(t,"pageQuery",(function(){return f}));a("Vd3H");var n=a("q1tI"),r=a.n(n),o=a("b36i"),c=a("nq06"),i=a("Lasv"),s=a("1Czm"),l=a("B9z/"),p=a("zYU4"),u=a("EYOX"),m=a("7s2E"),d=a("biaj");var h=function(e){var t,a;function n(t){return e.call(this,t)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){for(var e=this.props.data.posts.edges.map((function(e){return e.node})).sort((function(e,t){return e.fields.timestamp>t.fields.timestamp?-1:1})),t=Object(i.h)(this.props.data.categories.edges.map((function(e){return e.node}))),a=this.props.data.authors.edges.map((function(e){return e.node})),n=Object(i.c)(this.props.context.cat,t),h=n.friendlyname,f=n.slug,g=n.parent,y=[n.friendlyname];null!=g;)h=g.friendlyname+" / "+h,f=Object(i.k)(g.slug,f),y.push(g.friendlyname),g=g.parent;var b={url:Object(i.k)("category",f),description:"Posts about "+n.friendlyname,type:"object",title:n.friendlyname+" Archive | Powerpivot Insights | Durchblick durch Daten",tags:y};return r.a.createElement(o.b,{header:b,sidebar:r.a.createElement(c.a,{isFixed:!0},r.a.createElement(s.a,null),r.a.createElement(l.a,null),r.a.createElement(p.a,null),r.a.createElement(u.a,null))},r.a.createElement(m.a,{title:"Kategorie / "+h}),r.a.createElement(d.a,{posts:e,categories:t,authors:a}))},n}(r.a.Component);t.default=function(e){var t=e.pageContext,a=e.data,n=e.location;return r.a.createElement(h,{data:a,location:n,context:t})};var f="2299299968"},zYU4:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),r=a.n(n);a("XdKL");var o=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",{className:"sidebar-component"},r.a.createElement("div",{className:"sidebar-header"},"Artikel mit Google durchsuchen"),r.a.createElement("div",{className:"sidebar-content"},r.a.createElement("div",{className:"sidebar-content-pad"},r.a.createElement("div",{style:{marginBottom:"5px"}},r.a.createElement("form",{action:"https://www.google.com/search",className:"searchform",method:"get",name:"searchform",target:"_blank"},r.a.createElement("input",{name:"sitesearch",type:"hidden",value:"powerpivotinsights.de"}),r.a.createElement("div",{style:{textAlign:"center",marginTop:"5px"}},r.a.createElement("input",{autoComplete:"on",className:"form-control search",name:"q",placeholder:"",required:!0,type:"text"})),r.a.createElement("div",{style:{textAlign:"center",marginTop:"5px"}},r.a.createElement("button",{className:"button action-button",type:"submit"},"Suchen")))))))},n}(r.a.Component)}}]);
//# sourceMappingURL=component---node-modules-ppv-gatsby-components-src-pagecomponents-category-page-category-page-tsx-ecae5f2aefa5d2825db3.js.map