(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/loading.b832be75.gif"},20:function(e,t,a){e.exports=a(33)},29:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(17),i=a.n(o),s=(a(29),a(6)),c=a(7),l=a(9),u=a(5),p=a(8),h=(a(31),a(11)),m=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark "},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(h.b,{className:"navbar-brand",to:"/"},"NewsApp"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(h.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(h.b,{className:"nav-link",to:"/business"},"Business")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(h.b,{className:"nav-link",to:"/entertainment"},"Entertainment")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(h.b,{className:"nav-link",to:"/general"},"General")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(h.b,{className:"nav-link",to:"/health"},"Health")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(h.b,{className:"nav-link",to:"/science"},"science")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(h.b,{className:"nav-link",to:"/sports"},"Sports")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(h.b,{className:"nav-link",to:"/technology"},"Technology")))))))}}]),t}(r.Component),f=a(4),g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.description,r=e.imageurl,o=e.newsUrl,i=e.author,s=e.date,c=e.source;return n.a.createElement("div",{className:"my-2"},n.a.createElement("div",{className:"card"},n.a.createElement("span",{className:"position-absolute top-0  translate-middle badge rounded-pill bg-danger",style:{left:"90%",zindex:"1"}},c,n.a.createElement("span",{className:"visually-hidden"},"unread messages")),n.a.createElement("img",{src:null==r?"https://i.ytimg.com/vi/zdhCB3LpP9g/maxresdefault.jpg":r,className:"card-img-top",alt:"cricket News"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},t," "),n.a.createElement("p",{className:"card-text"},a),n.a.createElement("p",{className:"card-text"},n.a.createElement("small",{className:"text-muted"},"By ",i||"Unknown"," on ",s," ")),n.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm btn-dark"},"ReadMore"))))}}]),t}(r.Component),d=a(18),y=a.n(d),v=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"text-center"},n.a.createElement("img",{src:y.a,alt:"loading"}))}}]),t}(r.Component);function b(){b=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r=Object.defineProperty||function(e,t,a){e[t]=a.value},n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,a){return e[t]=a}}function l(e,t,a,n){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),s=new O(n||[]);return r(i,"_invoke",{value:k(e,a,s)}),i}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(L){return{type:"throw",arg:L}}}e.wrap=l;var p={};function h(){}function m(){}function f(){}var g={};c(g,o,function(){return this});var d=Object.getPrototypeOf,y=d&&d(d(S([])));y&&y!==t&&a.call(y,o)&&(g=y);var v=f.prototype=h.prototype=Object.create(g);function E(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var n;r(this,"_invoke",{value:function(r,o){function i(){return new t(function(n,i){!function r(n,o,i,s){var c=u(e[n],e,o);if("throw"!==c.type){var l=c.arg,p=l.value;return p&&"object"==typeof p&&a.call(p,"__await")?t.resolve(p.__await).then(function(e){r("next",e,i,s)},function(e){r("throw",e,i,s)}):t.resolve(p).then(function(e){l.value=e,i(l)},function(e){return r("throw",e,i,s)})}s(c.arg)}(r,o,n,i)})}return n=n?n.then(i,i):i()}})}function k(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return P()}for(a.method=n,a.arg=o;;){var i=a.delegate;if(i){var s=x(i,a);if(s){if(s===p)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var c=u(e,t,a);if("normal"===c.type){if(r=a.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r="completed",a.method="throw",a.arg=c.arg)}}}function x(e,t){var a=t.method,r=e.iterator[a];if(void 0===r)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),p;var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,p;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return m.prototype=f,r(v,"constructor",{value:f,configurable:!0}),r(f,"constructor",{value:m,configurable:!0}),m.displayName=c(f,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,s,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},E(w.prototype),c(w.prototype,i,function(){return this}),e.AsyncIterator=w,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var i=new w(l(t,a,r,n),o);return e.isGeneratorFunction(a)?i:i.next().then(function(e){return e.done?e.value:i.next()})},E(v),c(v,s,"Generator"),c(v,o,function(){return this}),c(v,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),a=[];for(var r in t)a.push(r);return a.reverse(),function e(){for(;a.length;){var r=a.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=S,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return i.type="throw",i.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),j(a),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;j(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:S(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),p}},e}var E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).capitalized=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},a.handlePreviousClick=Object(f.a)(b().mark(function e(){return b().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({page:a.state.page-1}),a.updateNews();case 2:case"end":return e.stop()}},e)})),a.handleNextClick=Object(f.a)(b().mark(function e(){return b().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({page:a.state.page+1}),a.updateNews();case 2:case"end":return e.stop()}},e)})),a.fetchMoreData=Object(f.a)(b().mark(function e(){var t,r,n;return b().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({page:a.state.page+1}),t="https://newsapi.org/v2/top-headlines?country=".concat(a.props.country,"&category=").concat(a.props.category,"&apiKey={this.props.apikey}&page=").concat(a.state.page,"&pageSize=").concat(a.props.pageSize),a.setState({loading:!0}),e.next=5,fetch(t);case 5:return r=e.sent,e.next=8,r.json();case 8:n=e.sent,a.setState({articles:a.state.articles.concat(n.articles),totalResults:n.totalResults,loading:!1});case 10:case"end":return e.stop()}},e)})),a.state={articles:[],loading:!1,page:1,totalResults:0},document.title="".concat(a.capitalized(a.props.category)," - News Monkey"),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"updateNews",value:function(){var e=Object(f.a)(b().mark(function e(){var t,a,r;return b().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.setProgress(10),t="https://newsapi.org/v2/top-headlines?country=".concat(this.props.country,"&category=").concat(this.props.category,"&apiKey=fe3756b87044464fa638642f23c38bd6&page=").concat(this.state.page,"&pageSize=").concat(this.props.pageSize),this.setState({loading:!0}),e.next=5,fetch(t);case 5:return a=e.sent,this.props.setProgress(30),e.next=9,a.json();case 9:r=e.sent,this.props.setProgress(70),this.setState({articles:r.articles,totalResults:r.totalResults,loading:!1}),this.props.setProgress(100);case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(f.a)(b().mark(function e(){return b().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.updateNews();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",{className:"container my-3"},n.a.createElement("h1",{className:"text-center",style:{margin:"35px 0px"}},"NewsMonkey - Top ",this.capitalized(this.props.category)," Headlines"),this.state.loading&&n.a.createElement(v,null),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},this.state.articles.map(function(e){return n.a.createElement("div",{className:"col-md-4 d-flex justify-content-evenly d-flex ",key:e.url},n.a.createElement(g,{title:e.title?e.title:"",description:e.description?e.description:"",imageurl:e.urlToImage,newsUrl:e.url,author:e.author,date:e.publishedAt,source:e.source.name}))}))),n.a.createElement("div",{className:".container d-flex justify-content-between "},n.a.createElement("button",{disabled:this.state.page<=1,type:"button",className:"btn btn-dark",onClick:this.handlePreviousClick}," ","\u2190 Previous"),n.a.createElement("button",{disabled:this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize),type:"button",className:"btn btn-dark",onClick:this.handleNextClick}," ","\u2192 Next")))}}]),t}(r.Component);E.defaultProps={name:"in",pageSize:8,category:"general"};var w=a(19),k=a(0),x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).pageSize=6,a.apikey="fe3756b87044464fa638642f23c38bd6",a.state={progress:0},a.setProgress=function(e){a.setState({progress:e})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(h.a,null,n.a.createElement(m,null),n.a.createElement(w.a,{height:3,color:"#f11946",progress:this.state.progress}),n.a.createElement(k.c,null,n.a.createElement(k.a,{exact:!0,path:"/",element:n.a.createElement(E,{setProgress:this.setProgress,apikey:this.apikey,key:"general",country:"in",pageSize:this.pageSize,category:"general"})}),n.a.createElement(k.a,{exact:!0,path:"/business",element:n.a.createElement(E,{setProgress:this.setProgress,apikey:this.apikey,key:"business",country:"in",pageSize:this.pageSize,category:"business"})}),n.a.createElement(k.a,{exact:!0,path:"/entertainment",element:n.a.createElement(E,{setProgress:this.setProgress,apikey:this.apikey,key:"entertainment",country:"in",pageSize:this.pageSize,category:"entertainment"})}),n.a.createElement(k.a,{exact:!0,path:"/general",element:n.a.createElement(E,{setProgress:this.setProgress,apikey:this.apikey,key:"general",country:"in",pageSize:this.pageSize,category:"general"})}),n.a.createElement(k.a,{exact:!0,path:"/health",element:n.a.createElement(E,{setProgress:this.setProgress,apikey:this.apikey,key:"health",country:"in",pageSize:this.pageSize,category:"health"})}),n.a.createElement(k.a,{exact:!0,path:"/science",element:n.a.createElement(E,{setProgress:this.setProgress,apikey:this.apikey,key:"science",country:"in",pageSize:this.pageSize,category:"science"})}),n.a.createElement(k.a,{exact:!0,path:"/sports",element:n.a.createElement(E,{setProgress:this.setProgress,apikey:this.apikey,key:"sports",country:"in",pageSize:this.pageSize,category:"sports"})}),n.a.createElement(k.a,{exact:!0,path:"/technology",element:n.a.createElement(E,{setProgress:this.setProgress,apikey:this.apikey,key:"technology",country:"in",pageSize:this.pageSize,category:"technology"})}))))}}]),t}(r.Component),N=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,34)).then(function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),o(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(x,null))),N()}},[[20,3,2]]]);
//# sourceMappingURL=main.8cf214ee.chunk.js.map