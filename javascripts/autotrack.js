!function(){function t(){t=function(){},vt.Symbol||(vt.Symbol=e)}function e(t){return"jscomp_symbol_"+(t||"")+bt++}function i(){t();var e=vt.Symbol.iterator;e||(e=vt.Symbol.iterator=vt.Symbol("iterator")),"function"!=typeof Array.prototype[e]&&ft(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return n(this)}}),i=function(){}}function n(t){var e=0;return o(function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}})}function o(t){return i(),t={next:t},t[vt.Symbol.iterator]=function(){return this},t}function s(e){i(),t(),i();var o=e[Symbol.iterator];return o?o.call(e):n(e)}function r(t){if(!(t instanceof Array)){t=s(t);for(var e,i=[];!(e=t.next()).done;)i.push(e.value);t=i}return t}function a(t,e){function i(){}i.prototype=e.prototype,t.ha=e.prototype,t.prototype=new i,t.prototype.constructor=t;for(var n in e)if(Object.defineProperties){var o=Object.getOwnPropertyDescriptor(e,n);o&&Object.defineProperty(t,n,o)}else t[n]=e[n]}function h(t,e){if(t&&1==t.nodeType&&e){if("string"==typeof e||1==e.nodeType)return t==e||c(t,e);if("length"in e)for(var i,n=0;i=e[n];n++)if(t==i||c(t,i))return!0}return!1}function c(t,e){if("string"!=typeof e)return!1;if(mt)return mt.call(t,e);e=t.parentNode.querySelectorAll(e);for(var i,n=0;i=e[n];n++)if(i==t)return!0;return!1}function u(t){for(var e=[];t&&t.parentNode&&1==t.parentNode.nodeType;)t=t.parentNode,e.push(t);return e}function l(t,e,i){function n(t){var n;if(s.composed&&"function"==typeof t.composedPath)for(var o,r=t.composedPath(),a=0;o=r[a];a++)1==o.nodeType&&h(o,e)&&(n=o);else t:{if((n=t.target)&&1==n.nodeType&&e)for(n=[n].concat(u(n)),r=0;a=n[r];r++)if(h(a,e)){n=a;break t}n=void 0}n&&i.call(n,t,n)}var o=document,s={composed:!0,S:!0},s=void 0===s?{}:s;return o.addEventListener(t,n,s.S),{j:function(){o.removeEventListener(t,n,s.S)}}}function d(t){var e={};if(!t||1!=t.nodeType)return e;if(t=t.attributes,!t.length)return{};for(var i,n=0;i=t[n];n++)e[i.name]=i.value;return e}function f(t){if(t=t&&"."!=t?t:location.href,yt[t])return yt[t];if(wt.href=t,"."==t.charAt(0)||"/"==t.charAt(0))return f(wt.href);var e="80"==wt.port||"443"==wt.port?"":wt.port,e="0"==e?"":e,i=wt.host.replace(gt,"");return yt[t]={hash:wt.hash,host:i,hostname:wt.hostname,href:wt.href,origin:wt.origin?wt.origin:wt.protocol+"//"+i,pathname:"/"==wt.pathname.charAt(0)?wt.pathname:"/"+wt.pathname,port:e,protocol:wt.protocol,search:wt.search}}function v(t,e){var i=this;this.context=t,this.P=e,this.f=(this.c=/Task$/.test(e))?t.get(e):t[e],this.b=[],this.a=[],this.g=function(){for(var t=[],e=0;e<arguments.length;++e)t[e-0]=arguments[e];return i.a[i.a.length-1].apply(null,[].concat(r(t)))},this.c?t.set(e,this.g):t[e]=this.g}function b(t,e,i){t=g(t,e),t.b.push(i),m(t)}function p(t,e,i){t=g(t,e),-1<(i=t.b.indexOf(i))&&(t.b.splice(i,1),0<t.b.length?m(t):t.j())}function m(t){t.a=[];for(var e,i=0;e=t.b[i];i++){var n=t.a[i-1]||t.f.bind(t.context);t.a.push(e(n))}}function g(t,e){var i=kt.filter(function(i){return i.context==t&&i.P==e})[0];return i||(i=new v(t,e),kt.push(i)),i}function w(t,e,i,n,o,s){if("function"==typeof n){var r=i.get("buildHitTask");return{buildHitTask:function(i){i.set(t,null,!0),i.set(e,null,!0),n(i,o,s),r(i)}}}return Ot({},t,e)}function y(t,e){var i=d(t),n={};return Object.keys(i).forEach(function(t){if(!t.indexOf(e)&&t!=e+"on"){var o=i[t];"true"==o&&(o=!0),"false"==o&&(o=!1),t=I(t.slice(e.length)),n[t]=o}}),n}function k(t){"loading"==document.readyState?document.addEventListener("DOMContentLoaded",function e(){document.removeEventListener("DOMContentLoaded",e),t()}):t()}function T(t,e){var i;return function(){for(var n=[],o=0;o<arguments.length;++o)n[o-0]=arguments[o];clearTimeout(i),i=setTimeout(function(){return t.apply(null,[].concat(r(n)))},e)}}function O(t){function e(){i||(i=!0,t())}var i=!1;return setTimeout(e,2e3),e}function E(t,e){function i(){clearTimeout(o.timeout),o.send&&p(t,"send",o.send),delete Tt[n],o.R.forEach(function(t){return t()})}var n=t.get("trackingId"),o=Tt[n]=Tt[n]||{};clearTimeout(o.timeout),o.timeout=setTimeout(i,0),o.R=o.R||[],o.R.push(e),o.send||(o.send=function(t){return function(){for(var e=[],n=0;n<arguments.length;++n)e[n-0]=arguments[n];i(),t.apply(null,[].concat(r(e)))}},b(t,"send",o.send))}function I(t){return t.replace(/[\-\_]+(\w?)/g,function(t,e){return e.toUpperCase()})}function S(t){return"object"==typeof t&&null!==t}function x(t,e){var i=window.GoogleAnalyticsObject||"ga";window[i]=window[i]||function(){for(var t=[],e=0;e<arguments.length;++e)t[e-0]=arguments[e];(window[i].q=window[i].q||[]).push(t)},window.gaDevIds=window.gaDevIds||[],0>window.gaDevIds.indexOf("i5iSjo")&&window.gaDevIds.push("i5iSjo"),window[i]("provide",t,e),window.gaplugins=window.gaplugins||{},window.gaplugins[t.charAt(0).toUpperCase()+t.slice(1)]=e}function j(t,e){t.set("&_av","2.4.1");var i=t.get("&_au"),i=parseInt(i||"0",16).toString(2);if(i.length<St)for(var n=St-i.length;n;)i="0"+i,n--;e=St-e,i=i.substr(0,e)+1+i.substr(e+1),t.set("&_au",parseInt(i||"0",2).toString(16))}function L(t,e){j(t,It.T),this.a=Ot({},e),this.g=t,this.b=this.a.stripQuery&&this.a.queryDimensionIndex?"dimension"+this.a.queryDimensionIndex:null,this.f=this.f.bind(this),this.c=this.c.bind(this),b(t,"get",this.f),b(t,"buildHitTask",this.c)}function F(t,e){var i=f(e.page||e.location),n=i.pathname;if(t.a.indexFilename){var o=n.split("/");t.a.indexFilename==o[o.length-1]&&(o[o.length-1]="",n=o.join("/"))}return"remove"==t.a.trailingSlash?n=n.replace(/\/+$/,""):"add"==t.a.trailingSlash&&(/\.\w+$/.test(n)||"/"==n.substr(-1)||(n+="/")),n={page:n+(t.a.stripQuery?A(t,i.search):i.search)},e.location&&(n.location=e.location),t.b&&(n[t.b]=i.search.slice(1)||"(not set)"),"function"==typeof t.a.urlFieldsFilter?(e=t.a.urlFieldsFilter(n,f),i={page:e.page,location:e.location},t.b&&(i[t.b]=e[t.b]),i):n}function A(t,e){if(Array.isArray(t.a.queryParamsWhitelist)){var i=[];return e.slice(1).split("&").forEach(function(e){var n=s(e.split("="));e=n.next().value,n=n.next().value,-1<t.a.queryParamsWhitelist.indexOf(e)&&n&&i.push([e,n])}),i.length?"?"+i.map(function(t){return t.join("=")}).join("&"):""}return""}function M(t,e){var i=this;if(j(t,It.U),window.addEventListener){this.a=Ot({events:["click"],fieldsObj:{},attributePrefix:"ga-"},e),this.f=t,this.c=this.c.bind(this);var n="["+this.a.attributePrefix+"on]";this.b={},this.a.events.forEach(function(t){i.b[t]=l(t,n,i.c)})}}function P(t,e){var i=this;j(t,It.V),window.IntersectionObserver&&window.MutationObserver&&(this.a=Ot({rootMargin:"0px",fieldsObj:{},attributePrefix:"ga-"},e),this.c=t,this.M=this.M.bind(this),this.O=this.O.bind(this),this.K=this.K.bind(this),this.L=this.L.bind(this),this.b=null,this.items=[],this.i={},this.h={},k(function(){i.a.elements&&i.observeElements(i.a.elements)}))}function C(t,e){var i=[],n={},o={};return e.length&&e.forEach(function(e){e=N(e),i.push(e),o[e.id]=t.i[e.id]||null,n[e.threshold]=t.h[e.threshold]||null}),{items:i,i:o,h:n}}function D(t,e,i){1==e.nodeType&&e.id in t.i&&i(e.id);for(var n,o=0;n=e.childNodes[o];o++)D(t,n,i)}function N(t){return"string"==typeof t&&(t={id:t}),Ot({threshold:0,trackFirstImpressionOnly:!0},t)}function H(){this.a={}}function B(t,e){(t.a.externalSet=t.a.externalSet||[]).push(e)}function q(t,e){e=void 0===e?{}:e,this.a={},this.b=t,this.w=e,this.l=null}function U(t,e,i){return t=["autotrack",t,e].join(":"),jt[t]||(jt[t]=new q(t,i),Lt||(window.addEventListener("storage",R),Lt=!0)),jt[t]}function V(){if(null!=xt)return xt;try{window.localStorage.setItem("autotrack","autotrack"),window.localStorage.removeItem("autotrack"),xt=!0}catch(t){xt=!1}return xt}function K(t){if(t.l={},V())try{window.localStorage.removeItem(t.b)}catch(t){}}function R(t){var e=jt[t.key];if(e){var i=Ot({},e.w,_(t.oldValue));t=Ot({},e.w,_(t.newValue)),e.l=t,e.ca("externalSet",t,i)}}function _(t){var e={};if(t)try{e=JSON.parse(t)}catch(t){}return e}function Z(t,e,i){this.f=t,this.timeout=e||At,this.timeZone=i,this.b=this.b.bind(this),b(t,"sendHitTask",this.b);try{this.c=new Intl.DateTimeFormat("en-US",{timeZone:this.timeZone})}catch(t){}this.a=U(t.get("trackingId"),"session",{hitTime:0,isExpired:!1}),this.a.get().id||this.a.set({id:Et()})}function G(t,e,i){var n=t.get("trackingId");return Ft[n]?Ft[n]:Ft[n]=new Z(t,e,i)}function J(t){return t.a.get().id}function $(t,e){j(t,It.W),window.addEventListener&&(this.b=Ot({increaseThreshold:20,sessionTimeout:At,fieldsObj:{}},e),this.f=t,this.c=Q(this),this.g=T(this.g.bind(this),500),this.o=this.o.bind(this),this.a=U(t.get("trackingId"),"plugins/max-scroll-tracker"),this.m=G(t,this.b.sessionTimeout,this.b.timeZone),b(t,"set",this.o),W(this))}function W(t){100>(t.a.get()[t.c]||0)&&window.addEventListener("scroll",t.g)}function Q(t){return t=f(t.f.get("page")||t.f.get("location")),t.pathname+t.search}function Y(t,e){j(t,It.X),window.matchMedia&&(this.a=Ot({changeTemplate:this.changeTemplate,changeTimeout:1e3,fieldsObj:{}},e),S(this.a.definitions)&&(e=this.a.definitions,this.a.definitions=Array.isArray(e)?e:[e],this.b=t,this.c=[],X(this)))}function X(t){t.a.definitions.forEach(function(e){if(e.name&&e.dimensionIndex){var i=z(e);t.b.set("dimension"+e.dimensionIndex,i),tt(t,e)}})}function z(t){var e;return t.items.forEach(function(t){et(t.media).matches&&(e=t)}),e?e.name:"(not set)"}function tt(t,e){e.items.forEach(function(i){i=et(i.media);var n=T(function(){var i=z(e),n=t.b.get("dimension"+e.dimensionIndex);i!==n&&(t.b.set("dimension"+e.dimensionIndex,i),i={transport:"beacon",eventCategory:e.name,eventAction:"change",eventLabel:t.a.changeTemplate(n,i),nonInteraction:!0},t.b.send("event",w(i,t.a.fieldsObj,t.b,t.a.hitFilter)))},t.a.changeTimeout);i.addListener(n),t.c.push({fa:i,da:n})})}function et(t){return Mt[t]||(Mt[t]=window.matchMedia(t))}function it(t,e){j(t,It.Y),window.addEventListener&&(this.a=Ot({formSelector:"form",shouldTrackOutboundForm:this.shouldTrackOutboundForm,fieldsObj:{},attributePrefix:"ga-"},e),this.b=t,this.c=l("submit",this.a.formSelector,this.f.bind(this)))}function nt(t,e){var i=this;j(t,It.Z),window.addEventListener&&(this.a=Ot({events:["click"],linkSelector:"a, area",shouldTrackOutboundLink:this.shouldTrackOutboundLink,fieldsObj:{},attributePrefix:"ga-"},e),this.c=t,this.f=this.f.bind(this),this.b={},this.a.events.forEach(function(t){i.b[t]=l(t,i.a.linkSelector,i.f)}))}function ot(t,e){var i=this;j(t,It.$),document.visibilityState&&(this.a=Ot({sessionTimeout:At,visibleThreshold:5e3,sendInitialPageview:!1,fieldsObj:{}},e),this.b=t,this.g=document.visibilityState,this.m=null,this.o=!1,this.v=this.v.bind(this),this.s=this.s.bind(this),this.G=this.G.bind(this),this.N=this.N.bind(this),this.c=U(t.get("trackingId"),"plugins/page-visibility-tracker"),B(this.c,this.N),this.f=G(t,this.a.sessionTimeout,this.a.timeZone),b(t,"set",this.v),window.addEventListener("unload",this.G),document.addEventListener("visibilitychange",this.s),E(this.b,function(){if("visible"==document.visibilityState)i.a.sendInitialPageview&&(at(i,{ea:!0}),i.o=!0),i.c.set({time:+new Date,state:"visible",pageId:Pt,sessionId:J(i.f)});else if(i.a.sendInitialPageview&&i.a.pageLoadsMetricIndex){var t={},t=(t.transport="beacon",t.eventCategory="Page Visibility",t.eventAction="page load",t.eventLabel="(not set)",t["metric"+i.a.pageLoadsMetricIndex]=1,t.nonInteraction=!0,t);i.b.send("event",w(t,i.a.fieldsObj,i.b,i.a.hitFilter))}}))}function st(t){var e=t.c.get();return"visible"==t.g&&"hidden"==e.state&&e.pageId!=Pt&&(e.state="visible",e.pageId=Pt,t.c.set(e)),e}function rt(t,e,i){i=(i||{}).hitTime;var n={hitTime:i},n=(n||{}).hitTime;(e=e.time?(n||+new Date)-e.time:0)&&e>=t.a.visibleThreshold&&(e=Math.round(e/1e3),n={transport:"beacon",nonInteraction:!0,eventCategory:"Page Visibility",eventAction:"track",eventValue:e,eventLabel:"(not set)"},i&&(n.queueTime=+new Date-i),t.a.visibleMetricIndex&&(n["metric"+t.a.visibleMetricIndex]=e),t.b.send("event",w(n,t.a.fieldsObj,t.b,t.a.hitFilter)))}function at(t,e){var i=e||{};e=i.hitTime;var i=i.ea,n={transport:"beacon"};e&&(n.queueTime=+new Date-e),i&&t.a.pageLoadsMetricIndex&&(n["metric"+t.a.pageLoadsMetricIndex]=1),t.b.send("pageview",w(n,t.a.fieldsObj,t.b,t.a.hitFilter))}function ht(t,e){j(t,It.aa),window.addEventListener&&(this.a=Ot({fieldsObj:{},hitFilter:null},e),this.b=t,this.u=this.u.bind(this),this.J=this.J.bind(this),this.D=this.D.bind(this),this.A=this.A.bind(this),this.B=this.B.bind(this),this.F=this.F.bind(this),"complete"!=document.readyState?window.addEventListener("load",this.u):this.u())}function ct(t){try{window.twttr.ready(function(){window.twttr.events.unbind("tweet",t.D),window.twttr.events.unbind("follow",t.A)})}catch(t){}}function ut(t,e){j(t,It.ba),history.pushState&&window.addEventListener&&(this.a=Ot({shouldTrackUrlChange:this.shouldTrackUrlChange,trackReplaceState:!1,fieldsObj:{},hitFilter:null},e),this.b=t,this.c=location.pathname+location.search,this.H=this.H.bind(this),this.I=this.I.bind(this),this.C=this.C.bind(this),b(history,"pushState",this.H),b(history,"replaceState",this.I),window.addEventListener("popstate",this.C))}function lt(t,e){setTimeout(function(){var i=t.c,n=location.pathname+location.search;i!=n&&t.a.shouldTrackUrlChange.call(t,n,i)&&(t.c=n,t.b.set({page:n,title:document.title}),(e||t.a.trackReplaceState)&&t.b.send("pageview",w({transport:"beacon"},t.a.fieldsObj,t.b,t.a.hitFilter)))},0)}var dt,ft="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,i){if(i.get||i.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[e]=i.value)},vt="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,bt=0,pt=window.Element.prototype,mt=pt.matches||pt.matchesSelector||pt.webkitMatchesSelector||pt.mozMatchesSelector||pt.msMatchesSelector||pt.oMatchesSelector,gt=/:(80|443)$/,wt=document.createElement("a"),yt={},kt=[];v.prototype.j=function(){var t=kt.indexOf(this);-1<t&&(kt.splice(t,1),this.c?this.context.set(this.P,this.f):this.context[this.P]=this.f)};var Tt={},Ot=Object.assign||function(t){for(var e=[],i=1;i<arguments.length;++i)e[i-1]=arguments[i];for(var i=0,n=e.length;i<n;i++){var o,s=Object(e[i]);for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o])}return t},Et=function t(e){return e?(e^16*Math.random()>>e/4).toString(16):"10000000-1000-4000-8000-100000000000".replace(/[018]/g,t)},It={T:1,U:2,V:3,X:4,Y:5,Z:6,$:7,aa:8,ba:9,W:10},St=Object.keys(It).length;L.prototype.f=function(t){var e=this;return function(i){if("page"==i||i==e.b){var n={location:t("location"),page:t("page")};return F(e,n)[i]}return t(i)}},L.prototype.c=function(t){var e=this;return function(i){var n=F(e,{location:i.get("location"),page:i.get("page")});i.set(n,null,!0),t(i)}},L.prototype.remove=function(){p(this.g,"get",this.f),p(this.g,"buildHitTask",this.c)},x("cleanUrlTracker",L),M.prototype.c=function(t,e){var i=this.a.attributePrefix;if(!(0>e.getAttribute(i+"on").split(/\s*,\s*/).indexOf(t.type))){var i=y(e,i),n=Ot({},this.a.fieldsObj,i);this.f.send(i.hitType||"event",w({transport:"beacon"},n,this.f,this.a.hitFilter,e,t))}},M.prototype.remove=function(){var t=this;Object.keys(this.b).forEach(function(e){t.b[e].j()})},x("eventTracker",M),dt=P.prototype,dt.observeElements=function(t){var e=this;t=C(this,t),this.items=this.items.concat(t.items),this.i=Ot({},t.i,this.i),this.h=Ot({},t.h,this.h),t.items.forEach(function(t){var i=e.h[t.threshold]=e.h[t.threshold]||new IntersectionObserver(e.O,{rootMargin:e.a.rootMargin,threshold:[+t.threshold]});(t=e.i[t.id]||(e.i[t.id]=document.getElementById(t.id)))&&i.observe(t)}),this.b||(this.b=new MutationObserver(this.M),this.b.observe(document.body,{childList:!0,subtree:!0})),requestAnimationFrame(function(){})},dt.unobserveElements=function(t){var e=[],i=[];if(this.items.forEach(function(n){t.some(function(t){return t=N(t),t.id===n.id&&t.threshold===n.threshold&&t.trackFirstImpressionOnly===n.trackFirstImpressionOnly})?i.push(n):e.push(n)}),e.length){var n=C(this,e),o=C(this,i);this.items=n.items,this.i=n.i,this.h=n.h,i.forEach(function(t){if(!n.i[t.id]){var e=o.h[t.threshold],i=o.i[t.id];i&&e.unobserve(i),n.h[t.threshold]||o.h[t.threshold].disconnect()}})}else this.unobserveAllElements()},dt.unobserveAllElements=function(){var t=this;Object.keys(this.h).forEach(function(e){t.h[e].disconnect()}),this.b.disconnect(),this.b=null,this.items=[],this.i={},this.h={}},dt.M=function(t){for(var e,i=0;e=t[i];i++){for(var n,o=0;n=e.removedNodes[o];o++)D(this,n,this.L);for(o=0;n=e.addedNodes[o];o++)D(this,n,this.K)}},dt.O=function(t){for(var e,i=[],n=0;e=t[n];n++)for(var o,s=0;o=this.items[s];s++){var r;if((r=e.target.id===o.id)&&((r=o.threshold)?r=e.intersectionRatio>=r:(r=e.intersectionRect,r=0<r.top||0<r.bottom||0<r.left||0<r.right)),r){var a=o.id;r=document.getElementById(a);var a={transport:"beacon",eventCategory:"Viewport",eventAction:"impression",eventLabel:a,nonInteraction:!0},h=Ot({},this.a.fieldsObj,y(r,this.a.attributePrefix));this.c.send("event",w(a,h,this.c,this.a.hitFilter,r)),o.trackFirstImpressionOnly&&i.push(o)}}i.length&&this.unobserveElements(i)},dt.K=function(t){var e=this,i=this.i[t]=document.getElementById(t);this.items.forEach(function(n){t==n.id&&e.h[n.threshold].observe(i)})},dt.L=function(t){var e=this,i=this.i[t];this.items.forEach(function(n){t==n.id&&e.h[n.threshold].unobserve(i)}),this.i[t]=null},dt.remove=function(){this.unobserveAllElements()},x("impressionTracker",P),H.prototype.ca=function(t){for(var e=[],i=1;i<arguments.length;++i)e[i-1]=arguments[i];(this.a[t]=this.a[t]||[]).forEach(function(t){return t.apply(null,[].concat(r(e)))})};var xt,jt={},Lt=!1;a(q,H),q.prototype.get=function(){if(this.l)return this.l;if(V())try{this.l=_(window.localStorage.getItem(this.b))}catch(t){}return this.l=Ot({},this.w,this.l)},q.prototype.set=function(t){if(this.l=Ot({},this.w,this.l,t),V())try{var e=JSON.stringify(this.l);window.localStorage.setItem(this.b,e)}catch(t){}},q.prototype.j=function(){delete jt[this.b],Object.keys(jt).length||(window.removeEventListener("storage",R),Lt=!1)};var Ft={};Z.prototype.isExpired=function(t){if((t=void 0===t?J(this):t)!=J(this))return!0;if(t=this.a.get(),t.isExpired)return!0;var e=t.hitTime;return!!(e&&(t=new Date,e=new Date(e),t-e>6e4*this.timeout||this.c&&this.c.format(t)!=this.c.format(e)))},Z.prototype.b=function(t){var e=this;return function(i){t(i);var n=i.get("sessionControl");i="start"==n||e.isExpired();var n="end"==n,o=e.a.get();o.hitTime=+new Date,i&&(o.isExpired=!1,o.id=Et()),n&&(o.isExpired=!0),e.a.set(o)}},Z.prototype.j=function(){p(this.f,"sendHitTask",this.b),this.a.j(),delete Ft[this.f.get("trackingId")]};var At=30;$.prototype.g=function(){var t=document.documentElement,e=document.body,t=Math.min(100,Math.max(0,Math.round(window.pageYOffset/(Math.max(t.offsetHeight,t.scrollHeight,e.offsetHeight,e.scrollHeight)-window.innerHeight)*100))),e=J(this.m);if(e!=this.a.get().sessionId&&(K(this.a),this.a.set({sessionId:e})),this.m.isExpired(this.a.get().sessionId))K(this.a);else if(e=this.a.get()[this.c]||0,t>e&&(100!=t&&100!=e||window.removeEventListener("scroll",this.g),e=t-e,100==t||e>=this.b.increaseThreshold)){var i={};this.a.set((i[this.c]=t,i.sessionId=J(this.m),i)),t={transport:"beacon",eventCategory:"Max Scroll",eventAction:"increase",eventValue:e,eventLabel:String(t),nonInteraction:!0},this.b.maxScrollMetricIndex&&(t["metric"+this.b.maxScrollMetricIndex]=e),this.f.send("event",w(t,this.b.fieldsObj,this.f,this.b.hitFilter))}},$.prototype.o=function(t){var e=this;return function(i,n){t(i,n);var o={};(S(i)?i:(o[i]=n,o)).page&&(i=e.c,e.c=Q(e),e.c!=i&&W(e))}},$.prototype.remove=function(){this.m.j(),window.removeEventListener("scroll",this.g),p(this.f,"set",this.o)},x("maxScrollTracker",$);var Mt={};Y.prototype.remove=function(){for(var t,e=0;t=this.c[e];e++)t.fa.removeListener(t.da)},Y.prototype.changeTemplate=function(t,e){return t+" => "+e},x("mediaQueryTracker",Y),it.prototype.f=function(t,e){var i={transport:"beacon",eventCategory:"Outbound Form",eventAction:"submit",eventLabel:f(e.action).href};if(this.a.shouldTrackOutboundForm(e,f)){navigator.sendBeacon||(t.preventDefault(),i.hitCallback=O(function(){e.submit()}));var n=Ot({},this.a.fieldsObj,y(e,this.a.attributePrefix));this.b.send("event",w(i,n,this.b,this.a.hitFilter,e,t))}},it.prototype.shouldTrackOutboundForm=function(t,e){return t=e(t.action),t.hostname!=location.hostname&&"http"==t.protocol.slice(0,4)},it.prototype.remove=function(){this.c.j()},x("outboundFormTracker",it),nt.prototype.f=function(t,e){var i=this;if(this.a.shouldTrackOutboundLink(e,f)){var n=e.getAttribute("href")||e.getAttribute("xlink:href"),o=f(n),o={transport:"beacon",eventCategory:"Outbound Link",eventAction:t.type,eventLabel:o.href},s=Ot({},this.a.fieldsObj,y(e,this.a.attributePrefix)),r=w(o,s,this.c,this.a.hitFilter,e,t);if(navigator.sendBeacon||"click"!=t.type||"_blank"==e.target||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||1<t.which)this.c.send("event",r);else{var a=function(){if(window.removeEventListener("click",a),!t.defaultPrevented){t.preventDefault();var e=r.hitCallback;r.hitCallback=O(function(){"function"==typeof e&&e(),location.href=n})}i.c.send("event",r)};window.addEventListener("click",a)}}},nt.prototype.shouldTrackOutboundLink=function(t,e){return t=t.getAttribute("href")||t.getAttribute("xlink:href"),e=e(t),e.hostname!=location.hostname&&"http"==e.protocol.slice(0,4)},nt.prototype.remove=function(){var t=this;Object.keys(this.b).forEach(function(e){t.b[e].j()})},x("outboundLinkTracker",nt);var Pt=Et();dt=ot.prototype,dt.s=function(){var t=this;if("visible"==document.visibilityState||"hidden"==document.visibilityState){var e=st(this),i={time:+new Date,state:document.visibilityState,pageId:Pt,sessionId:J(this.f)};"visible"==document.visibilityState&&this.a.sendInitialPageview&&!this.o&&(at(this),this.o=!0),"hidden"==document.visibilityState&&this.m&&clearTimeout(this.m),this.f.isExpired(e.sessionId)?(K(this.c),"hidden"==this.g&&"visible"==document.visibilityState&&(clearTimeout(this.m),this.m=setTimeout(function(){t.c.set(i),at(t,{hitTime:i.time})},this.a.visibleThreshold))):(e.pageId==Pt&&"visible"==e.state&&rt(this,e),this.c.set(i)),this.g=document.visibilityState}},dt.v=function(t){var e=this;return function(i,n){var o={},o=S(i)?i:(o[i]=n,o);o.page&&o.page!==e.b.get("page")&&"visible"==e.g&&e.s(),t(i,n)}},dt.N=function(t,e){t.time!=e.time&&(e.pageId!=Pt||"visible"!=e.state||this.f.isExpired(e.sessionId)||rt(this,e,{hitTime:t.time}))},dt.G=function(){"hidden"!=this.g&&this.s()},dt.remove=function(){this.c.j(),this.f.j(),p(this.b,"set",this.v),window.removeEventListener("unload",this.G),document.removeEventListener("visibilitychange",this.s)},x("pageVisibilityTracker",ot),dt=ht.prototype,dt.u=function(){if(window.FB)try{window.FB.Event.subscribe("edge.create",this.B),window.FB.Event.subscribe("edge.remove",this.F)}catch(t){}window.twttr&&this.J()},dt.J=function(){var t=this;try{window.twttr.ready(function(){window.twttr.events.bind("tweet",t.D),window.twttr.events.bind("follow",t.A)})}catch(t){}},dt.D=function(t){if("tweet"==t.region){var e={transport:"beacon",socialNetwork:"Twitter",socialAction:"tweet",socialTarget:t.data.url||t.target.getAttribute("data-url")||location.href};this.b.send("social",w(e,this.a.fieldsObj,this.b,this.a.hitFilter,t.target,t))}},dt.A=function(t){if("follow"==t.region){var e={transport:"beacon",socialNetwork:"Twitter",socialAction:"follow",socialTarget:t.data.screen_name||t.target.getAttribute("data-screen-name")};this.b.send("social",w(e,this.a.fieldsObj,this.b,this.a.hitFilter,t.target,t))}},dt.B=function(t){this.b.send("social",w({transport:"beacon",socialNetwork:"Facebook",socialAction:"like",socialTarget:t},this.a.fieldsObj,this.b,this.a.hitFilter))},dt.F=function(t){this.b.send("social",w({transport:"beacon",socialNetwork:"Facebook",socialAction:"unlike",socialTarget:t},this.a.fieldsObj,this.b,this.a.hitFilter))},dt.remove=function(){window.removeEventListener("load",this.u);try{window.FB.Event.unsubscribe("edge.create",this.B),window.FB.Event.unsubscribe("edge.remove",this.F)}catch(t){}ct(this)},x("socialWidgetTracker",ht),dt=ut.prototype,dt.H=function(t){var e=this;return function(){for(var i=[],n=0;n<arguments.length;++n)i[n-0]=arguments[n];t.apply(null,[].concat(r(i))),lt(e,!0)}},dt.I=function(t){var e=this;return function(){for(var i=[],n=0;n<arguments.length;++n)i[n-0]=arguments[n];t.apply(null,[].concat(r(i))),lt(e,!1)}},dt.C=function(){lt(this,!0)},dt.shouldTrackUrlChange=function(t,e){return!(!t||!e)},dt.remove=function(){p(history,"pushState",this.H),p(history,"replaceState",this.I),window.removeEventListener("popstate",this.C)},x("urlChangeTracker",ut)}();