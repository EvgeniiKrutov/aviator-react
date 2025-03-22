var mS=Object.defineProperty;var gS=(o,t,i)=>t in o?mS(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var on=(o,t,i)=>gS(o,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Tf={exports:{}},xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function _S(){if(bg)return xo;bg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return xo.Fragment=t,xo.jsx=i,xo.jsxs=i,xo}var Ag;function vS(){return Ag||(Ag=1,Tf.exports=_S()),Tf.exports}var pu=vS(),bf={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function SS(){if(Rg)return se;Rg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,w={};function M(L,it,Et){this.props=L,this.context=it,this.refs=w,this.updater=Et||y}M.prototype.isReactComponent={},M.prototype.setState=function(L,it){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,it,"setState")},M.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function g(){}g.prototype=M.prototype;function P(L,it,Et){this.props=L,this.context=it,this.refs=w,this.updater=Et||y}var O=P.prototype=new g;O.constructor=P,C(O,M.prototype),O.isPureReactComponent=!0;var D=Array.isArray,H={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function B(L,it,Et,At,Y,pt){return Et=pt.ref,{$$typeof:o,type:L,key:it,ref:Et!==void 0?Et:null,props:pt}}function q(L,it){return B(L.type,it,void 0,void 0,void 0,L.props)}function R(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function T(L){var it={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Et){return it[Et]})}var F=/\/+/g;function rt(L,it){return typeof L=="object"&&L!==null&&L.key!=null?T(""+L.key):it.toString(36)}function et(){}function ut(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(et,et):(L.status="pending",L.then(function(it){L.status==="pending"&&(L.status="fulfilled",L.value=it)},function(it){L.status==="pending"&&(L.status="rejected",L.reason=it)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ft(L,it,Et,At,Y){var pt=typeof L;(pt==="undefined"||pt==="boolean")&&(L=null);var St=!1;if(L===null)St=!0;else switch(pt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(L.$$typeof){case o:case t:St=!0;break;case _:return St=L._init,ft(St(L._payload),it,Et,At,Y)}}if(St)return Y=Y(L),St=At===""?"."+rt(L,0):At,D(Y)?(Et="",St!=null&&(Et=St.replace(F,"$&/")+"/"),ft(Y,it,Et,"",function(Kt){return Kt})):Y!=null&&(R(Y)&&(Y=q(Y,Et+(Y.key==null||L&&L.key===Y.key?"":(""+Y.key).replace(F,"$&/")+"/")+St)),it.push(Y)),1;St=0;var Tt=At===""?".":At+":";if(D(L))for(var Rt=0;Rt<L.length;Rt++)At=L[Rt],pt=Tt+rt(At,Rt),St+=ft(At,it,Et,pt,Y);else if(Rt=S(L),typeof Rt=="function")for(L=Rt.call(L),Rt=0;!(At=L.next()).done;)At=At.value,pt=Tt+rt(At,Rt++),St+=ft(At,it,Et,pt,Y);else if(pt==="object"){if(typeof L.then=="function")return ft(ut(L),it,Et,At,Y);throw it=String(L),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return St}function V(L,it,Et){if(L==null)return L;var At=[],Y=0;return ft(L,At,"","",function(pt){return it.call(Et,pt,Y++)}),At}function st(L){if(L._status===-1){var it=L._result;it=it(),it.then(function(Et){(L._status===0||L._status===-1)&&(L._status=1,L._result=Et)},function(Et){(L._status===0||L._status===-1)&&(L._status=2,L._result=Et)}),L._status===-1&&(L._status=0,L._result=it)}if(L._status===1)return L._result.default;throw L._result}var j=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function xt(){}return se.Children={map:V,forEach:function(L,it,Et){V(L,function(){it.apply(this,arguments)},Et)},count:function(L){var it=0;return V(L,function(){it++}),it},toArray:function(L){return V(L,function(it){return it})||[]},only:function(L){if(!R(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},se.Component=M,se.Fragment=i,se.Profiler=l,se.PureComponent=P,se.StrictMode=r,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,se.act=function(){throw Error("act(...) is not supported in production builds of React.")},se.cache=function(L){return function(){return L.apply(null,arguments)}},se.cloneElement=function(L,it,Et){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var At=C({},L.props),Y=L.key,pt=void 0;if(it!=null)for(St in it.ref!==void 0&&(pt=void 0),it.key!==void 0&&(Y=""+it.key),it)!I.call(it,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&it.ref===void 0||(At[St]=it[St]);var St=arguments.length-2;if(St===1)At.children=Et;else if(1<St){for(var Tt=Array(St),Rt=0;Rt<St;Rt++)Tt[Rt]=arguments[Rt+2];At.children=Tt}return B(L.type,Y,void 0,void 0,pt,At)},se.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},se.createElement=function(L,it,Et){var At,Y={},pt=null;if(it!=null)for(At in it.key!==void 0&&(pt=""+it.key),it)I.call(it,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Y[At]=it[At]);var St=arguments.length-2;if(St===1)Y.children=Et;else if(1<St){for(var Tt=Array(St),Rt=0;Rt<St;Rt++)Tt[Rt]=arguments[Rt+2];Y.children=Tt}if(L&&L.defaultProps)for(At in St=L.defaultProps,St)Y[At]===void 0&&(Y[At]=St[At]);return B(L,pt,void 0,void 0,null,Y)},se.createRef=function(){return{current:null}},se.forwardRef=function(L){return{$$typeof:d,render:L}},se.isValidElement=R,se.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:st}},se.memo=function(L,it){return{$$typeof:p,type:L,compare:it===void 0?null:it}},se.startTransition=function(L){var it=H.T,Et={};H.T=Et;try{var At=L(),Y=H.S;Y!==null&&Y(Et,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(xt,j)}catch(pt){j(pt)}finally{H.T=it}},se.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},se.use=function(L){return H.H.use(L)},se.useActionState=function(L,it,Et){return H.H.useActionState(L,it,Et)},se.useCallback=function(L,it){return H.H.useCallback(L,it)},se.useContext=function(L){return H.H.useContext(L)},se.useDebugValue=function(){},se.useDeferredValue=function(L,it){return H.H.useDeferredValue(L,it)},se.useEffect=function(L,it){return H.H.useEffect(L,it)},se.useId=function(){return H.H.useId()},se.useImperativeHandle=function(L,it,Et){return H.H.useImperativeHandle(L,it,Et)},se.useInsertionEffect=function(L,it){return H.H.useInsertionEffect(L,it)},se.useLayoutEffect=function(L,it){return H.H.useLayoutEffect(L,it)},se.useMemo=function(L,it){return H.H.useMemo(L,it)},se.useOptimistic=function(L,it){return H.H.useOptimistic(L,it)},se.useReducer=function(L,it,Et){return H.H.useReducer(L,it,Et)},se.useRef=function(L){return H.H.useRef(L)},se.useState=function(L){return H.H.useState(L)},se.useSyncExternalStore=function(L,it,Et){return H.H.useSyncExternalStore(L,it,Et)},se.useTransition=function(){return H.H.useTransition()},se.version="19.0.0",se}var Cg;function Zh(){return Cg||(Cg=1,bf.exports=SS()),bf.exports}var L_=Zh(),Af={exports:{}},Mo={},Rf={exports:{}},Cf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function xS(){return wg||(wg=1,function(o){function t(V,st){var j=V.length;V.push(st);t:for(;0<j;){var xt=j-1>>>1,L=V[xt];if(0<l(L,st))V[xt]=st,V[j]=L,j=xt;else break t}}function i(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var st=V[0],j=V.pop();if(j!==st){V[0]=j;t:for(var xt=0,L=V.length,it=L>>>1;xt<it;){var Et=2*(xt+1)-1,At=V[Et],Y=Et+1,pt=V[Y];if(0>l(At,j))Y<L&&0>l(pt,At)?(V[xt]=pt,V[Y]=j,xt=Y):(V[xt]=At,V[Et]=j,xt=Et);else if(Y<L&&0>l(pt,j))V[xt]=pt,V[Y]=j,xt=Y;else break t}}return st}function l(V,st){var j=V.sortIndex-st.sortIndex;return j!==0?j:V.id-st.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,x=null,S=3,y=!1,C=!1,w=!1,M=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function O(V){for(var st=i(p);st!==null;){if(st.callback===null)r(p);else if(st.startTime<=V)r(p),st.sortIndex=st.expirationTime,t(m,st);else break;st=i(p)}}function D(V){if(w=!1,O(V),!C)if(i(m)!==null)C=!0,ut();else{var st=i(p);st!==null&&ft(D,st.startTime-V)}}var H=!1,I=-1,B=5,q=-1;function R(){return!(o.unstable_now()-q<B)}function T(){if(H){var V=o.unstable_now();q=V;var st=!0;try{t:{C=!1,w&&(w=!1,g(I),I=-1),y=!0;var j=S;try{e:{for(O(V),x=i(m);x!==null&&!(x.expirationTime>V&&R());){var xt=x.callback;if(typeof xt=="function"){x.callback=null,S=x.priorityLevel;var L=xt(x.expirationTime<=V);if(V=o.unstable_now(),typeof L=="function"){x.callback=L,O(V),st=!0;break e}x===i(m)&&r(m),O(V)}else r(m);x=i(m)}if(x!==null)st=!0;else{var it=i(p);it!==null&&ft(D,it.startTime-V),st=!1}}break t}finally{x=null,S=j,y=!1}st=void 0}}finally{st?F():H=!1}}}var F;if(typeof P=="function")F=function(){P(T)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,et=rt.port2;rt.port1.onmessage=T,F=function(){et.postMessage(null)}}else F=function(){M(T,0)};function ut(){H||(H=!0,F())}function ft(V,st){I=M(function(){V(o.unstable_now())},st)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(V){V.callback=null},o.unstable_continueExecution=function(){C||y||(C=!0,ut())},o.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<V?Math.floor(1e3/V):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_getFirstCallbackNode=function(){return i(m)},o.unstable_next=function(V){switch(S){case 1:case 2:case 3:var st=3;break;default:st=S}var j=S;S=st;try{return V()}finally{S=j}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(V,st){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var j=S;S=V;try{return st()}finally{S=j}},o.unstable_scheduleCallback=function(V,st,j){var xt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?xt+j:xt):j=xt,V){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=j+L,V={id:_++,callback:st,priorityLevel:V,startTime:j,expirationTime:L,sortIndex:-1},j>xt?(V.sortIndex=j,t(p,V),i(m)===null&&V===i(p)&&(w?(g(I),I=-1):w=!0,ft(D,j-xt))):(V.sortIndex=L,t(m,V),C||y||(C=!0,ut())),V},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(V){var st=S;return function(){var j=S;S=st;try{return V.apply(this,arguments)}finally{S=j}}}}(Cf)),Cf}var Dg;function MS(){return Dg||(Dg=1,Rf.exports=xS()),Rf.exports}var wf={exports:{}},En={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function yS(){if(Ug)return En;Ug=1;var o=Zh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return En.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,En.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},En.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},En.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},En.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},En.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:y}):_==="script"&&r.d.X(m,{crossOrigin:x,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},En.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},En.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},En.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},En.requestFormReset=function(m){r.d.r(m)},En.unstable_batchedUpdates=function(m,p){return m(p)},En.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},En.useFormStatus=function(){return h.H.useHostTransitionStatus()},En.version="19.0.0",En}var Lg;function ES(){if(Lg)return wf.exports;Lg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),wf.exports=yS(),wf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function TS(){if(Ng)return Mo;Ng=1;var o=MS(),t=Zh(),i=ES();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var c=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),S=Symbol.for("react.consumer"),y=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),D=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function I(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var B=Symbol.for("react.client.reference");function q(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===B?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case d:return"Portal";case _:return"Profiler";case p:return"StrictMode";case w:return"Suspense";case M:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case y:return(e.displayName||"Context")+".Provider";case S:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case g:return n=e.displayName||null,n!==null?n:q(e.type)||"Memo";case P:n=e._payload,e=e._init;try{return q(e(n))}catch{}}return null}var R=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=Object.assign,F,rt;function et(e){if(F===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);F=n&&n[1]||"",rt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+F+e+rt}var ut=!1;function ft(e,n){if(!e||ut)return"";ut=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(lt){var nt=lt}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(lt){nt=lt}e.call(_t.prototype)}}else{try{throw Error()}catch(lt){nt=lt}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(lt){if(lt&&nt&&typeof lt.stack=="string")return[lt.stack,nt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),v=f[0],b=f[1];if(v&&b){var N=v.split(`
`),k=b.split(`
`);for(u=s=0;s<N.length&&!N[s].includes("DetermineComponentFrameRoot");)s++;for(;u<k.length&&!k[u].includes("DetermineComponentFrameRoot");)u++;if(s===N.length||u===k.length)for(s=N.length-1,u=k.length-1;1<=s&&0<=u&&N[s]!==k[u];)u--;for(;1<=s&&0<=u;s--,u--)if(N[s]!==k[u]){if(s!==1||u!==1)do if(s--,u--,0>u||N[s]!==k[u]){var ct=`
`+N[s].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=s&&0<=u);break}}}finally{ut=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?et(a):""}function V(e){switch(e.tag){case 26:case 27:case 5:return et(e.type);case 16:return et("Lazy");case 13:return et("Suspense");case 19:return et("SuspenseList");case 0:case 15:return e=ft(e.type,!1),e;case 11:return e=ft(e.type.render,!1),e;case 1:return e=ft(e.type,!0),e;default:return""}}function st(e){try{var n="";do n+=V(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function j(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function xt(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function L(e){if(j(e)!==e)throw Error(r(188))}function it(e){var n=e.alternate;if(!n){if(n=j(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return L(u),e;if(f===s)return L(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var v=!1,b=u.child;b;){if(b===a){v=!0,a=u,s=f;break}if(b===s){v=!0,s=u,a=f;break}b=b.sibling}if(!v){for(b=f.child;b;){if(b===a){v=!0,a=f,s=u;break}if(b===s){v=!0,s=f,a=u;break}b=b.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function Et(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=Et(e),n!==null)return n;e=e.sibling}return null}var At=Array.isArray,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pt={pending:!1,data:null,method:null,action:null},St=[],Tt=-1;function Rt(e){return{current:e}}function Kt(e){0>Tt||(e.current=St[Tt],St[Tt]=null,Tt--)}function Pt(e,n){Tt++,St[Tt]=e.current,e.current=n}var Me=Rt(null),Ce=Rt(null),ie=Rt(null),z=Rt(null);function mn(e,n){switch(Pt(ie,n),Pt(Ce,e),Pt(Me,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?tg(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=tg(e),n=eg(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Kt(Me),Pt(Me,n)}function re(){Kt(Me),Kt(Ce),Kt(ie)}function ce(e){e.memoizedState!==null&&Pt(z,e);var n=Me.current,a=eg(n,e.type);n!==a&&(Pt(Ce,e),Pt(Me,a))}function kt(e){Ce.current===e&&(Kt(Me),Kt(Ce)),z.current===e&&(Kt(z),mo._currentValue=pt)}var we=Object.prototype.hasOwnProperty,Xt=o.unstable_scheduleCallback,U=o.unstable_cancelCallback,E=o.unstable_shouldYield,tt=o.unstable_requestPaint,ht=o.unstable_now,vt=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,Ht=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,zt=o.unstable_LowPriority,de=o.unstable_IdlePriority,yt=o.log,Bt=o.unstable_setDisableYieldValue,qt=null,Gt=null;function Ft(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(qt,e,void 0,(e.current.flags&128)===128)}catch{}}function ae(e){if(typeof yt=="function"&&Bt(e),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(qt,e)}catch{}}var Zt=Math.clz32?Math.clz32:Lt,De=Math.log,X=Math.LN2;function Lt(e){return e>>>=0,e===0?32:31-(De(e)/X|0)|0}var ot=128,gt=4194304;function Ct(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dt(e,n){var a=e.pendingLanes;if(a===0)return 0;var s=0,u=e.suspendedLanes,f=e.pingedLanes,v=e.warmLanes;e=e.finishedLanes!==0;var b=a&134217727;return b!==0?(a=b&~u,a!==0?s=Ct(a):(f&=b,f!==0?s=Ct(f):e||(v=b&~v,v!==0&&(s=Ct(v))))):(b=a&~u,b!==0?s=Ct(b):f!==0?s=Ct(f):e||(v=a&~v,v!==0&&(s=Ct(v)))),s===0?0:n!==0&&n!==s&&!(n&u)&&(u=s&-s,v=n&-n,u>=v||u===32&&(v&4194176)!==0)?n:s}function Jt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ie(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tn(){var e=ot;return ot<<=1,!(ot&4194176)&&(ot=128),e}function ye(){var e=gt;return gt<<=1,!(gt&62914560)&&(gt=4194304),e}function An(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Rn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Oo(e,n,a,s,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,N=e.expirationTimes,k=e.hiddenUpdates;for(a=v&~a;0<a;){var ct=31-Zt(a),_t=1<<ct;b[ct]=0,N[ct]=-1;var nt=k[ct];if(nt!==null)for(k[ct]=null,ct=0;ct<nt.length;ct++){var lt=nt[ct];lt!==null&&(lt.lane&=-536870913)}a&=~_t}s!==0&&bs(e,s,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function bs(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Zt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194218}function xi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Zt(a),u=1<<s;u&n|e[s]&n&&(e[s]|=n),a&=~u}}function Sr(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function As(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Sg(e.type))}function Po(e,n){var a=Y.p;try{return Y.p=e,n()}finally{Y.p=a}}var Hn=Math.random().toString(36).slice(2),en="__reactFiber$"+Hn,nn="__reactProps$"+Hn,Ui="__reactContainer$"+Hn,xr="__reactEvents$"+Hn,Mu="__reactListeners$"+Hn,yu="__reactHandles$"+Hn,zo="__reactResources$"+Hn,Ia="__reactMarker$"+Hn;function Rs(e){delete e[en],delete e[nn],delete e[xr],delete e[Mu],delete e[yu]}function Li(e){var n=e[en];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ui]||a[en]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=ag(e);e!==null;){if(a=e[en])return a;e=ag(e)}return n}e=a,a=e.parentNode}return null}function A(e){if(e=e[en]||e[Ui]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function W(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function $(e){var n=e[zo];return n||(n=e[zo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Q(e){e[Ia]=!0}var Z=new Set,Mt={};function bt(e,n){Ot(e,n),Ot(e+"Capture",n)}function Ot(e,n){for(Mt[e]=n,e=0;e<n.length;e++)Z.add(n[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$t=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),te={},Yt={};function pe(e){return we.call(Yt,e)?!0:we.call(te,e)?!1:$t.test(e)?Yt[e]=!0:(te[e]=!0,!1)}function me(e,n,a){if(pe(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Fe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ee(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function ee(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function an(e){var n=jt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){s=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(v){s=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ge(e){e._valueTracker||(e._valueTracker=an(e))}function Nn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=jt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Cn=/[\n"\\]/g;function cn(e){return e.replace(Cn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ue(e,n,a,s,u,f,v,b){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ee(n)):e.value!==""+ee(n)&&(e.value=""+ee(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Mn(e,v,ee(n)):a!=null?Mn(e,v,ee(a)):s!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+ee(b):e.removeAttribute("name")}function wn(e,n,a,s,u,f,v,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ee(a):"",n=n!=null?""+ee(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=b?e.checked:!!s,e.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function Mn(e,n,a){n==="number"&&li(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ke(e,n,a,s){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+ee(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function gn(e,n,a){if(n!=null&&(n=""+ee(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ee(a):""}function Mr(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(At(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ee(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function On(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var hv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ld(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||hv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ud(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&ld(e,u,s)}else for(var f in n)n.hasOwnProperty(f)&&ld(e,f,n[f])}function Eu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bo(e){return pv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Tu=null;function bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yr=null,Er=null;function cd(e){var n=A(e);if(n&&(e=n.stateNode)){var a=e[nn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ue(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+cn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var u=s[nn]||null;if(!u)throw Error(r(90));Ue(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Nn(s)}break t;case"textarea":gn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ke(e,!!a.multiple,n,!1)}}}var Au=!1;function fd(e,n,a){if(Au)return e(n,a);Au=!0;try{var s=e(n);return s}finally{if(Au=!1,(yr!==null||Er!==null)&&(xl(),yr&&(n=yr,e=Er,Er=yr=null,cd(n),e)))for(n=0;n<e.length;n++)cd(e[n])}}function Cs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[nn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ru=!1;if(Nt)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){Ru=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{Ru=!1}var ra=null,Cu=null,Fo=null;function hd(){if(Fo)return Fo;var e,n=Cu,a=n.length,s,u="value"in ra?ra.value:ra.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(s=1;s<=v&&n[a-s]===u[f-s];s++);return Fo=u.slice(e,1<s?1-s:void 0)}function Io(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ho(){return!0}function dd(){return!1}function Pn(e){function n(a,s,u,f,v){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ho:dd,this.isPropagationStopped=dd,this}return T(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),n}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Go=Pn(Ha),Ds=T({},Ha,{view:0,detail:0}),mv=Pn(Ds),wu,Du,Us,Vo=T({},Ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Us&&(Us&&e.type==="mousemove"?(wu=e.screenX-Us.screenX,Du=e.screenY-Us.screenY):Du=wu=0,Us=e),wu)},movementY:function(e){return"movementY"in e?e.movementY:Du}}),pd=Pn(Vo),gv=T({},Vo,{dataTransfer:0}),_v=Pn(gv),vv=T({},Ds,{relatedTarget:0}),Uu=Pn(vv),Sv=T({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),xv=Pn(Sv),Mv=T({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yv=Pn(Mv),Ev=T({},Ha,{data:0}),md=Pn(Ev),Tv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Av={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Av[e])?!!n[e]:!1}function Lu(){return Rv}var Cv=T({},Ds,{key:function(e){if(e.key){var n=Tv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Io(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lu,charCode:function(e){return e.type==="keypress"?Io(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Io(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wv=Pn(Cv),Dv=T({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gd=Pn(Dv),Uv=T({},Ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lu}),Lv=Pn(Uv),Nv=T({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ov=Pn(Nv),Pv=T({},Vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zv=Pn(Pv),Bv=T({},Ha,{newState:0,oldState:0}),Fv=Pn(Bv),Iv=[9,13,27,32],Nu=Nt&&"CompositionEvent"in window,Ls=null;Nt&&"documentMode"in document&&(Ls=document.documentMode);var Hv=Nt&&"TextEvent"in window&&!Ls,_d=Nt&&(!Nu||Ls&&8<Ls&&11>=Ls),vd=" ",Sd=!1;function xd(e,n){switch(e){case"keyup":return Iv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Md(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function Gv(e,n){switch(e){case"compositionend":return Md(n);case"keypress":return n.which!==32?null:(Sd=!0,vd);case"textInput":return e=n.data,e===vd&&Sd?null:e;default:return null}}function Vv(e,n){if(Tr)return e==="compositionend"||!Nu&&xd(e,n)?(e=hd(),Fo=Cu=ra=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return _d&&n.locale!=="ko"?null:n.data;default:return null}}var kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!kv[e.type]:n==="textarea"}function Ed(e,n,a,s){yr?Er?Er.push(s):Er=[s]:yr=s,n=bl(n,"onChange"),0<n.length&&(a=new Go("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Ns=null,Os=null;function Xv(e){jm(e,0)}function ko(e){var n=W(e);if(Nn(n))return e}function Td(e,n){if(e==="change")return n}var bd=!1;if(Nt){var Ou;if(Nt){var Pu="oninput"in document;if(!Pu){var Ad=document.createElement("div");Ad.setAttribute("oninput","return;"),Pu=typeof Ad.oninput=="function"}Ou=Pu}else Ou=!1;bd=Ou&&(!document.documentMode||9<document.documentMode)}function Rd(){Ns&&(Ns.detachEvent("onpropertychange",Cd),Os=Ns=null)}function Cd(e){if(e.propertyName==="value"&&ko(Os)){var n=[];Ed(n,Os,e,bu(e)),fd(Xv,n)}}function Wv(e,n,a){e==="focusin"?(Rd(),Ns=n,Os=a,Ns.attachEvent("onpropertychange",Cd)):e==="focusout"&&Rd()}function qv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ko(Os)}function Yv(e,n){if(e==="click")return ko(n)}function Zv(e,n){if(e==="input"||e==="change")return ko(n)}function jv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Gn=typeof Object.is=="function"?Object.is:jv;function Ps(e,n){if(Gn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!we.call(n,u)||!Gn(e[u],n[u]))return!1}return!0}function wd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dd(e,n){var a=wd(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=wd(a)}}function Ud(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ud(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ld(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=li(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=li(e.document)}return n}function zu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Kv(e,n){var a=Ld(n);n=e.focusedElem;var s=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&Ud(n.ownerDocument.documentElement,n)){if(s!==null&&zu(n)){if(e=s.start,a=s.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var u=n.textContent.length,f=Math.min(s.start,u);s=s.end===void 0?f:Math.min(s.end,u),!a.extend&&f>s&&(u=s,s=f,f=u),u=Dd(n,f);var v=Dd(n,s);u&&v&&(a.rangeCount!==1||a.anchorNode!==u.node||a.anchorOffset!==u.offset||a.focusNode!==v.node||a.focusOffset!==v.offset)&&(e=e.createRange(),e.setStart(u.node,u.offset),a.removeAllRanges(),f>s?(a.addRange(e),a.extend(v.node,v.offset)):(e.setEnd(v.node,v.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var Qv=Nt&&"documentMode"in document&&11>=document.documentMode,br=null,Bu=null,zs=null,Fu=!1;function Nd(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fu||br==null||br!==li(s)||(s=br,"selectionStart"in s&&zu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),zs&&Ps(zs,s)||(zs=s,s=bl(Bu,"onSelect"),0<s.length&&(n=new Go("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=br)))}function Ga(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ar={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},Iu={},Od={};Nt&&(Od=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function Va(e){if(Iu[e])return Iu[e];if(!Ar[e])return e;var n=Ar[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Od)return Iu[e]=n[a];return e}var Pd=Va("animationend"),zd=Va("animationiteration"),Bd=Va("animationstart"),Jv=Va("transitionrun"),$v=Va("transitionstart"),t0=Va("transitioncancel"),Fd=Va("transitionend"),Id=new Map,Hd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ui(e,n){Id.set(e,n),bt(n,[e])}var Zn=[],Rr=0,Hu=0;function Xo(){for(var e=Rr,n=Hu=Rr=0;n<e;){var a=Zn[n];Zn[n++]=null;var s=Zn[n];Zn[n++]=null;var u=Zn[n];Zn[n++]=null;var f=Zn[n];if(Zn[n++]=null,s!==null&&u!==null){var v=s.pending;v===null?u.next=u:(u.next=v.next,v.next=u),s.pending=u}f!==0&&Gd(a,u,f)}}function Wo(e,n,a,s){Zn[Rr++]=e,Zn[Rr++]=n,Zn[Rr++]=a,Zn[Rr++]=s,Hu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Gu(e,n,a,s){return Wo(e,n,a,s),qo(e)}function sa(e,n){return Wo(e,null,null,n),qo(e)}function Gd(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;u&&n!==null&&e.tag===3&&(f=e.stateNode,u=31-Zt(a),f=f.hiddenUpdates,e=f[u],e===null?f[u]=[n]:e.push(n),n.lane=a|536870912)}function qo(e){if(50<oo)throw oo=0,Yc=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Cr={},Vd=new WeakMap;function jn(e,n){if(typeof e=="object"&&e!==null){var a=Vd.get(e);return a!==void 0?a:(n={value:e,source:n,stack:st(n)},Vd.set(e,n),n)}return{value:e,source:n,stack:st(n)}}var wr=[],Dr=0,Yo=null,Zo=0,Kn=[],Qn=0,ka=null,Ni=1,Oi="";function Xa(e,n){wr[Dr++]=Zo,wr[Dr++]=Yo,Yo=e,Zo=n}function kd(e,n,a){Kn[Qn++]=Ni,Kn[Qn++]=Oi,Kn[Qn++]=ka,ka=e;var s=Ni;e=Oi;var u=32-Zt(s)-1;s&=~(1<<u),a+=1;var f=32-Zt(n)+u;if(30<f){var v=u-u%5;f=(s&(1<<v)-1).toString(32),s>>=v,u-=v,Ni=1<<32-Zt(n)+u|a<<u|s,Oi=f+e}else Ni=1<<f|a<<u|s,Oi=e}function Vu(e){e.return!==null&&(Xa(e,1),kd(e,1,0))}function ku(e){for(;e===Yo;)Yo=wr[--Dr],wr[Dr]=null,Zo=wr[--Dr],wr[Dr]=null;for(;e===ka;)ka=Kn[--Qn],Kn[Qn]=null,Oi=Kn[--Qn],Kn[Qn]=null,Ni=Kn[--Qn],Kn[Qn]=null}var Dn=null,_n=null,Te=!1,ci=null,Mi=!1,Xu=Error(r(519));function Wa(e){var n=Error(r(418,""));throw Is(jn(n,e)),Xu}function Xd(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[en]=e,n[nn]=s,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<uo.length;a++)_e(uo[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),wn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),ge(n);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),Mr(n,s.value,s.defaultValue,s.children),ge(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||$m(n.textContent,a)?(s.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),s.onScroll!=null&&_e("scroll",n),s.onScrollEnd!=null&&_e("scrollend",n),s.onClick!=null&&(n.onclick=Al),n=!0):n=!1,n||Wa(e)}function Wd(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 3:case 27:Mi=!0;return;case 5:case 13:Mi=!1;return;default:Dn=Dn.return}}function Bs(e){if(e!==Dn)return!1;if(!Te)return Wd(e),Te=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ff(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&_n&&Wa(e),Wd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){_n=hi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}_n=null}}else _n=Dn?hi(e.stateNode.nextSibling):null;return!0}function Fs(){_n=Dn=null,Te=!1}function Is(e){ci===null?ci=[e]:ci.push(e)}var Hs=Error(r(460)),qd=Error(r(474)),Wu={then:function(){}};function Yd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function jo(){}function Zd(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(jo,jo),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Hs?Error(r(483)):e;default:if(typeof n.status=="string")n.then(jo,jo);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Hs?Error(r(483)):e}throw Gs=n,Hs}}var Gs=null;function jd(){if(Gs===null)throw Error(r(459));var e=Gs;return Gs=null,e}var Ur=null,Vs=0;function Ko(e){var n=Vs;return Vs+=1,Ur===null&&(Ur=[]),Zd(Ur,e,n)}function ks(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Qo(e,n){throw n.$$typeof===c?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Kd(e){var n=e._init;return n(e._payload)}function Qd(e){function n(K,G){if(e){var J=K.deletions;J===null?(K.deletions=[G],K.flags|=16):J.push(G)}}function a(K,G){if(!e)return null;for(;G!==null;)n(K,G),G=G.sibling;return null}function s(K){for(var G=new Map;K!==null;)K.key!==null?G.set(K.key,K):G.set(K.index,K),K=K.sibling;return G}function u(K,G){return K=va(K,G),K.index=0,K.sibling=null,K}function f(K,G,J){return K.index=J,e?(J=K.alternate,J!==null?(J=J.index,J<G?(K.flags|=33554434,G):J):(K.flags|=33554434,G)):(K.flags|=1048576,G)}function v(K){return e&&K.alternate===null&&(K.flags|=33554434),K}function b(K,G,J,mt){return G===null||G.tag!==6?(G=Ic(J,K.mode,mt),G.return=K,G):(G=u(G,J),G.return=K,G)}function N(K,G,J,mt){var It=J.type;return It===m?ct(K,G,J.props.children,mt,J.key):G!==null&&(G.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===P&&Kd(It)===G.type)?(G=u(G,J.props),ks(G,J),G.return=K,G):(G=ml(J.type,J.key,J.props,null,K.mode,mt),ks(G,J),G.return=K,G)}function k(K,G,J,mt){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=Hc(J,K.mode,mt),G.return=K,G):(G=u(G,J.children||[]),G.return=K,G)}function ct(K,G,J,mt,It){return G===null||G.tag!==7?(G=er(J,K.mode,mt,It),G.return=K,G):(G=u(G,J),G.return=K,G)}function _t(K,G,J){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Ic(""+G,K.mode,J),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case h:return J=ml(G.type,G.key,G.props,null,K.mode,J),ks(J,G),J.return=K,J;case d:return G=Hc(G,K.mode,J),G.return=K,G;case P:var mt=G._init;return G=mt(G._payload),_t(K,G,J)}if(At(G)||I(G))return G=er(G,K.mode,J,null),G.return=K,G;if(typeof G.then=="function")return _t(K,Ko(G),J);if(G.$$typeof===y)return _t(K,hl(K,G),J);Qo(K,G)}return null}function nt(K,G,J,mt){var It=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return It!==null?null:b(K,G,""+J,mt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case h:return J.key===It?N(K,G,J,mt):null;case d:return J.key===It?k(K,G,J,mt):null;case P:return It=J._init,J=It(J._payload),nt(K,G,J,mt)}if(At(J)||I(J))return It!==null?null:ct(K,G,J,mt,null);if(typeof J.then=="function")return nt(K,G,Ko(J),mt);if(J.$$typeof===y)return nt(K,G,hl(K,J),mt);Qo(K,J)}return null}function lt(K,G,J,mt,It){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return K=K.get(J)||null,b(G,K,""+mt,It);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case h:return K=K.get(mt.key===null?J:mt.key)||null,N(G,K,mt,It);case d:return K=K.get(mt.key===null?J:mt.key)||null,k(G,K,mt,It);case P:var fe=mt._init;return mt=fe(mt._payload),lt(K,G,J,mt,It)}if(At(mt)||I(mt))return K=K.get(J)||null,ct(G,K,mt,It,null);if(typeof mt.then=="function")return lt(K,G,J,Ko(mt),It);if(mt.$$typeof===y)return lt(K,G,J,hl(G,mt),It);Qo(G,mt)}return null}function Vt(K,G,J,mt){for(var It=null,fe=null,Wt=G,Qt=G=0,dn=null;Wt!==null&&Qt<J.length;Qt++){Wt.index>Qt?(dn=Wt,Wt=null):dn=Wt.sibling;var be=nt(K,Wt,J[Qt],mt);if(be===null){Wt===null&&(Wt=dn);break}e&&Wt&&be.alternate===null&&n(K,Wt),G=f(be,G,Qt),fe===null?It=be:fe.sibling=be,fe=be,Wt=dn}if(Qt===J.length)return a(K,Wt),Te&&Xa(K,Qt),It;if(Wt===null){for(;Qt<J.length;Qt++)Wt=_t(K,J[Qt],mt),Wt!==null&&(G=f(Wt,G,Qt),fe===null?It=Wt:fe.sibling=Wt,fe=Wt);return Te&&Xa(K,Qt),It}for(Wt=s(Wt);Qt<J.length;Qt++)dn=lt(Wt,K,Qt,J[Qt],mt),dn!==null&&(e&&dn.alternate!==null&&Wt.delete(dn.key===null?Qt:dn.key),G=f(dn,G,Qt),fe===null?It=dn:fe.sibling=dn,fe=dn);return e&&Wt.forEach(function(ba){return n(K,ba)}),Te&&Xa(K,Qt),It}function ne(K,G,J,mt){if(J==null)throw Error(r(151));for(var It=null,fe=null,Wt=G,Qt=G=0,dn=null,be=J.next();Wt!==null&&!be.done;Qt++,be=J.next()){Wt.index>Qt?(dn=Wt,Wt=null):dn=Wt.sibling;var ba=nt(K,Wt,be.value,mt);if(ba===null){Wt===null&&(Wt=dn);break}e&&Wt&&ba.alternate===null&&n(K,Wt),G=f(ba,G,Qt),fe===null?It=ba:fe.sibling=ba,fe=ba,Wt=dn}if(be.done)return a(K,Wt),Te&&Xa(K,Qt),It;if(Wt===null){for(;!be.done;Qt++,be=J.next())be=_t(K,be.value,mt),be!==null&&(G=f(be,G,Qt),fe===null?It=be:fe.sibling=be,fe=be);return Te&&Xa(K,Qt),It}for(Wt=s(Wt);!be.done;Qt++,be=J.next())be=lt(Wt,K,Qt,be.value,mt),be!==null&&(e&&be.alternate!==null&&Wt.delete(be.key===null?Qt:be.key),G=f(be,G,Qt),fe===null?It=be:fe.sibling=be,fe=be);return e&&Wt.forEach(function(pS){return n(K,pS)}),Te&&Xa(K,Qt),It}function qe(K,G,J,mt){if(typeof J=="object"&&J!==null&&J.type===m&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case h:t:{for(var It=J.key;G!==null;){if(G.key===It){if(It=J.type,It===m){if(G.tag===7){a(K,G.sibling),mt=u(G,J.props.children),mt.return=K,K=mt;break t}}else if(G.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===P&&Kd(It)===G.type){a(K,G.sibling),mt=u(G,J.props),ks(mt,J),mt.return=K,K=mt;break t}a(K,G);break}else n(K,G);G=G.sibling}J.type===m?(mt=er(J.props.children,K.mode,mt,J.key),mt.return=K,K=mt):(mt=ml(J.type,J.key,J.props,null,K.mode,mt),ks(mt,J),mt.return=K,K=mt)}return v(K);case d:t:{for(It=J.key;G!==null;){if(G.key===It)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){a(K,G.sibling),mt=u(G,J.children||[]),mt.return=K,K=mt;break t}else{a(K,G);break}else n(K,G);G=G.sibling}mt=Hc(J,K.mode,mt),mt.return=K,K=mt}return v(K);case P:return It=J._init,J=It(J._payload),qe(K,G,J,mt)}if(At(J))return Vt(K,G,J,mt);if(I(J)){if(It=I(J),typeof It!="function")throw Error(r(150));return J=It.call(J),ne(K,G,J,mt)}if(typeof J.then=="function")return qe(K,G,Ko(J),mt);if(J.$$typeof===y)return qe(K,G,hl(K,J),mt);Qo(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,G!==null&&G.tag===6?(a(K,G.sibling),mt=u(G,J),mt.return=K,K=mt):(a(K,G),mt=Ic(J,K.mode,mt),mt.return=K,K=mt),v(K)):a(K,G)}return function(K,G,J,mt){try{Vs=0;var It=qe(K,G,J,mt);return Ur=null,It}catch(Wt){if(Wt===Hs)throw Wt;var fe=ei(29,Wt,null,K.mode);return fe.lanes=mt,fe.return=K,fe}finally{}}}var qa=Qd(!0),Jd=Qd(!1),Lr=Rt(null),Jo=Rt(0);function $d(e,n){e=Wi,Pt(Jo,e),Pt(Lr,n),Wi=e|n.baseLanes}function qu(){Pt(Jo,Wi),Pt(Lr,Lr.current)}function Yu(){Wi=Jo.current,Kt(Lr),Kt(Jo)}var Jn=Rt(null),yi=null;function oa(e){var n=e.alternate;Pt(rn,rn.current&1),Pt(Jn,e),yi===null&&(n===null||Lr.current!==null||n.memoizedState!==null)&&(yi=e)}function tp(e){if(e.tag===22){if(Pt(rn,rn.current),Pt(Jn,e),yi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(yi=e)}}else la()}function la(){Pt(rn,rn.current),Pt(Jn,Jn.current)}function Pi(e){Kt(Jn),yi===e&&(yi=null),Kt(rn)}var rn=Rt(0);function $o(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var e0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},n0=o.unstable_scheduleCallback,i0=o.unstable_NormalPriority,sn={$$typeof:y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zu(){return{controller:new e0,data:new Map,refCount:0}}function Xs(e){e.refCount--,e.refCount===0&&n0(i0,function(){e.controller.abort()})}var Ws=null,ju=0,Nr=0,Or=null;function a0(e,n){if(Ws===null){var a=Ws=[];ju=0,Nr=ef(),Or={status:"pending",value:void 0,then:function(s){a.push(s)}}}return ju++,n.then(ep,ep),n}function ep(){if(--ju===0&&Ws!==null){Or!==null&&(Or.status="fulfilled");var e=Ws;Ws=null,Nr=0,Or=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function r0(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var np=R.S;R.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&a0(e,n),np!==null&&np(e,n)};var Ya=Rt(null);function Ku(){var e=Ya.current;return e!==null?e:ze.pooledCache}function tl(e,n){n===null?Pt(Ya,Ya.current):Pt(Ya,n.pool)}function ip(){var e=Ku();return e===null?null:{parent:sn._currentValue,pool:e}}var ua=0,ue=null,Le=null,je=null,el=!1,Pr=!1,Za=!1,nl=0,qs=0,zr=null,s0=0;function Ze(){throw Error(r(321))}function Qu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Gn(e[a],n[a]))return!1;return!0}function Ju(e,n,a,s,u,f){return ua=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,R.H=e===null||e.memoizedState===null?ja:ca,Za=!1,f=a(s,u),Za=!1,Pr&&(f=rp(n,a,s,u)),ap(e),f}function ap(e){R.H=Ei;var n=Le!==null&&Le.next!==null;if(ua=0,je=Le=ue=null,el=!1,qs=0,zr=null,n)throw Error(r(300));e===null||fn||(e=e.dependencies,e!==null&&fl(e)&&(fn=!0))}function rp(e,n,a,s){ue=e;var u=0;do{if(Pr&&(zr=null),qs=0,Pr=!1,25<=u)throw Error(r(301));if(u+=1,je=Le=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}R.H=Ka,f=n(a,s)}while(Pr);return f}function o0(){var e=R.H,n=e.useState()[0];return n=typeof n.then=="function"?Ys(n):n,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(ue.flags|=1024),n}function $u(){var e=nl!==0;return nl=0,e}function tc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ec(e){if(el){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}el=!1}ua=0,je=Le=ue=null,Pr=!1,qs=nl=0,zr=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?ue.memoizedState=je=e:je=je.next=e,je}function Ke(){if(Le===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var n=je===null?ue.memoizedState:je.next;if(n!==null)je=n,Le=e;else{if(e===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},je===null?ue.memoizedState=je=e:je=je.next=e}return je}var il;il=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Ys(e){var n=qs;return qs+=1,zr===null&&(zr=[]),e=Zd(zr,e,n),n=ue,(je===null?n.memoizedState:je.next)===null&&(n=n.alternate,R.H=n===null||n.memoizedState===null?ja:ca),e}function al(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ys(e);if(e.$$typeof===y)return yn(e)}throw Error(r(438,String(e)))}function nc(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ue.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=il(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=D;return n.index++,a}function zi(e,n){return typeof n=="function"?n(e):n}function rl(e){var n=Ke();return ic(n,Le,e)}function ic(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=e.baseQueue,f=s.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,s.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var b=v=null,N=null,k=n,ct=!1;do{var _t=k.lane&-536870913;if(_t!==k.lane?(Se&_t)===_t:(ua&_t)===_t){var nt=k.revertLane;if(nt===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),_t===Nr&&(ct=!0);else if((ua&nt)===nt){k=k.next,nt===Nr&&(ct=!0);continue}else _t={lane:0,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},N===null?(b=N=_t,v=f):N=N.next=_t,ue.lanes|=nt,Sa|=nt;_t=k.action,Za&&a(f,_t),f=k.hasEagerState?k.eagerState:a(f,_t)}else nt={lane:_t,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},N===null?(b=N=nt,v=f):N=N.next=nt,ue.lanes|=_t,Sa|=_t;k=k.next}while(k!==null&&k!==n);if(N===null?v=f:N.next=b,!Gn(f,e.memoizedState)&&(fn=!0,ct&&(a=Or,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=N,s.lastRenderedState=f}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function ac(e){var n=Ke(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);Gn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function sp(e,n,a){var s=ue,u=Ke(),f=Te;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!Gn((Le||u).memoizedState,a);if(v&&(u.memoizedState=a,fn=!0),u=u.queue,oc(up.bind(null,s,u,e),[e]),u.getSnapshot!==n||v||je!==null&&je.memoizedState.tag&1){if(s.flags|=2048,Br(9,lp.bind(null,s,u,a,n),{destroy:void 0},null),ze===null)throw Error(r(349));f||ua&60||op(s,n,a)}return a}function op(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=il(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function lp(e,n,a,s){n.value=a,n.getSnapshot=s,cp(n)&&fp(e)}function up(e,n,a){return a(function(){cp(n)&&fp(e)})}function cp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Gn(e,a)}catch{return!0}}function fp(e){var n=sa(e,2);n!==null&&Un(n,e,2)}function rc(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),Za){ae(!0);try{a()}finally{ae(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:e},n}function hp(e,n,a,s){return e.baseState=a,ic(e,Le,typeof s=="function"?s:zi)}function l0(e,n,a,s,u){if(ll(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};R.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,dp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function dp(e,n){var a=n.action,s=n.payload,u=e.state;if(n.isTransition){var f=R.T,v={};R.T=v;try{var b=a(u,s),N=R.S;N!==null&&N(v,b),pp(e,n,b)}catch(k){sc(e,n,k)}finally{R.T=f}}else try{f=a(u,s),pp(e,n,f)}catch(k){sc(e,n,k)}}function pp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){mp(e,n,s)},function(s){return sc(e,n,s)}):mp(e,n,a)}function mp(e,n,a){n.status="fulfilled",n.value=a,gp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,dp(e,a)))}function sc(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,gp(n),n=n.next;while(n!==s)}e.action=null}function gp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function _p(e,n){return n}function vp(e,n){if(Te){var a=ze.formState;if(a!==null){t:{var s=ue;if(Te){if(_n){e:{for(var u=_n,f=Mi;u.nodeType!==8;){if(!f){u=null;break e}if(u=hi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){_n=hi(u.nextSibling),s=u.data==="F!";break t}}Wa(s)}s=!1}s&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_p,lastRenderedState:n},a.queue=s,a=zp.bind(null,ue,s),s.dispatch=a,s=rc(!1),f=hc.bind(null,ue,!1,s.queue),s=zn(),u={state:n,dispatch:null,action:e,pending:null},s.queue=u,a=l0.bind(null,ue,u,f,a),u.dispatch=a,s.memoizedState=e,[n,a,!1]}function Sp(e){var n=Ke();return xp(n,Le,e)}function xp(e,n,a){n=ic(e,n,_p)[0],e=rl(zi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Ys(n):n;var s=Ke(),u=s.queue,f=u.dispatch;return a!==s.memoizedState&&(ue.flags|=2048,Br(9,u0.bind(null,u,a),{destroy:void 0},null)),[n,f,e]}function u0(e,n){e.action=n}function Mp(e){var n=Ke(),a=Le;if(a!==null)return xp(n,a,e);Ke(),n=n.memoizedState,a=Ke();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Br(e,n,a,s){return e={tag:e,create:n,inst:a,deps:s,next:null},n=ue.updateQueue,n===null&&(n=il(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function yp(){return Ke().memoizedState}function sl(e,n,a,s){var u=zn();ue.flags|=e,u.memoizedState=Br(1|n,a,{destroy:void 0},s===void 0?null:s)}function ol(e,n,a,s){var u=Ke();s=s===void 0?null:s;var f=u.memoizedState.inst;Le!==null&&s!==null&&Qu(s,Le.memoizedState.deps)?u.memoizedState=Br(n,a,f,s):(ue.flags|=e,u.memoizedState=Br(1|n,a,f,s))}function Ep(e,n){sl(8390656,8,e,n)}function oc(e,n){ol(2048,8,e,n)}function Tp(e,n){return ol(4,2,e,n)}function bp(e,n){return ol(4,4,e,n)}function Ap(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Rp(e,n,a){a=a!=null?a.concat([e]):null,ol(4,4,Ap.bind(null,n,e),a)}function lc(){}function Cp(e,n){var a=Ke();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Qu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function wp(e,n){var a=Ke();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Qu(n,s[1]))return s[0];if(s=e(),Za){ae(!0);try{e()}finally{ae(!1)}}return a.memoizedState=[s,n],s}function uc(e,n,a){return a===void 0||ua&1073741824?e.memoizedState=n:(e.memoizedState=a,e=Um(),ue.lanes|=e,Sa|=e,a)}function Dp(e,n,a,s){return Gn(a,n)?a:Lr.current!==null?(e=uc(e,a,s),Gn(e,n)||(fn=!0),e):ua&42?(e=Um(),ue.lanes|=e,Sa|=e,n):(fn=!0,e.memoizedState=a)}function Up(e,n,a,s,u){var f=Y.p;Y.p=f!==0&&8>f?f:8;var v=R.T,b={};R.T=b,hc(e,!1,n,a);try{var N=u(),k=R.S;if(k!==null&&k(b,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var ct=r0(N,s);Zs(e,n,ct,Wn(e))}else Zs(e,n,s,Wn(e))}catch(_t){Zs(e,n,{then:function(){},status:"rejected",reason:_t},Wn())}finally{Y.p=f,R.T=v}}function c0(){}function cc(e,n,a,s){if(e.tag!==5)throw Error(r(476));var u=Lp(e).queue;Up(e,u,n,pt,a===null?c0:function(){return Np(e),a(s)})}function Lp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:pt,baseState:pt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:pt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Np(e){var n=Lp(e).next.queue;Zs(e,n,{},Wn())}function fc(){return yn(mo)}function Op(){return Ke().memoizedState}function Pp(){return Ke().memoizedState}function f0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Wn();e=da(a);var s=pa(n,e,a);s!==null&&(Un(s,n,a),Qs(s,n,a)),n={cache:Zu()},e.payload=n;return}n=n.return}}function h0(e,n,a){var s=Wn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ll(e)?Bp(n,a):(a=Gu(e,n,a,s),a!==null&&(Un(a,e,s),Fp(a,n,s)))}function zp(e,n,a){var s=Wn();Zs(e,n,a,s)}function Zs(e,n,a,s){var u={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ll(e))Bp(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,b=f(v,a);if(u.hasEagerState=!0,u.eagerState=b,Gn(b,v))return Wo(e,n,u,0),ze===null&&Xo(),!1}catch{}finally{}if(a=Gu(e,n,u,s),a!==null)return Un(a,e,s),Fp(a,n,s),!0}return!1}function hc(e,n,a,s){if(s={lane:2,revertLane:ef(),action:s,hasEagerState:!1,eagerState:null,next:null},ll(e)){if(n)throw Error(r(479))}else n=Gu(e,a,s,2),n!==null&&Un(n,e,2)}function ll(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function Bp(e,n){Pr=el=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Fp(e,n,a){if(a&4194176){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,xi(e,a)}}var Ei={readContext:yn,use:al,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze};Ei.useCacheRefresh=Ze,Ei.useMemoCache=Ze,Ei.useHostTransitionStatus=Ze,Ei.useFormState=Ze,Ei.useActionState=Ze,Ei.useOptimistic=Ze;var ja={readContext:yn,use:al,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:yn,useEffect:Ep,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,sl(4194308,4,Ap.bind(null,n,e),a)},useLayoutEffect:function(e,n){return sl(4194308,4,e,n)},useInsertionEffect:function(e,n){sl(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var s=e();if(Za){ae(!0);try{e()}finally{ae(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=zn();if(a!==void 0){var u=a(n);if(Za){ae(!0);try{a(n)}finally{ae(!1)}}}else u=n;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=h0.bind(null,ue,e),[s.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=rc(e);var n=e.queue,a=zp.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:lc,useDeferredValue:function(e,n){var a=zn();return uc(a,e,n)},useTransition:function(){var e=rc(!1);return e=Up.bind(null,ue,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ue,u=zn();if(Te){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ze===null)throw Error(r(349));Se&60||op(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Ep(up.bind(null,s,f,e),[e]),s.flags|=2048,Br(9,lp.bind(null,s,f,a,n),{destroy:void 0},null),a},useId:function(){var e=zn(),n=ze.identifierPrefix;if(Te){var a=Oi,s=Ni;a=(s&~(1<<32-Zt(s)-1)).toString(32)+a,n=":"+n+"R"+a,a=nl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=s0++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return zn().memoizedState=f0.bind(null,ue)}};ja.useMemoCache=nc,ja.useHostTransitionStatus=fc,ja.useFormState=vp,ja.useActionState=vp,ja.useOptimistic=function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=hc.bind(null,ue,!0,a),a.dispatch=n,[e,n]};var ca={readContext:yn,use:al,useCallback:Cp,useContext:yn,useEffect:oc,useImperativeHandle:Rp,useInsertionEffect:Tp,useLayoutEffect:bp,useMemo:wp,useReducer:rl,useRef:yp,useState:function(){return rl(zi)},useDebugValue:lc,useDeferredValue:function(e,n){var a=Ke();return Dp(a,Le.memoizedState,e,n)},useTransition:function(){var e=rl(zi)[0],n=Ke().memoizedState;return[typeof e=="boolean"?e:Ys(e),n]},useSyncExternalStore:sp,useId:Op};ca.useCacheRefresh=Pp,ca.useMemoCache=nc,ca.useHostTransitionStatus=fc,ca.useFormState=Sp,ca.useActionState=Sp,ca.useOptimistic=function(e,n){var a=Ke();return hp(a,Le,e,n)};var Ka={readContext:yn,use:al,useCallback:Cp,useContext:yn,useEffect:oc,useImperativeHandle:Rp,useInsertionEffect:Tp,useLayoutEffect:bp,useMemo:wp,useReducer:ac,useRef:yp,useState:function(){return ac(zi)},useDebugValue:lc,useDeferredValue:function(e,n){var a=Ke();return Le===null?uc(a,e,n):Dp(a,Le.memoizedState,e,n)},useTransition:function(){var e=ac(zi)[0],n=Ke().memoizedState;return[typeof e=="boolean"?e:Ys(e),n]},useSyncExternalStore:sp,useId:Op};Ka.useCacheRefresh=Pp,Ka.useMemoCache=nc,Ka.useHostTransitionStatus=fc,Ka.useFormState=Mp,Ka.useActionState=Mp,Ka.useOptimistic=function(e,n){var a=Ke();return Le!==null?hp(a,Le,e,n):(a.baseState=e,[e,a.queue.dispatch])};function dc(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:T({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var pc={isMounted:function(e){return(e=e._reactInternals)?j(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Wn(),u=da(s);u.payload=n,a!=null&&(u.callback=a),n=pa(e,u,s),n!==null&&(Un(n,e,s),Qs(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Wn(),u=da(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=pa(e,u,s),n!==null&&(Un(n,e,s),Qs(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Wn(),s=da(a);s.tag=2,n!=null&&(s.callback=n),n=pa(e,s,a),n!==null&&(Un(n,e,a),Qs(n,e,a))}};function Ip(e,n,a,s,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,v):n.prototype&&n.prototype.isPureReactComponent?!Ps(a,s)||!Ps(u,f):!0}function Hp(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&pc.enqueueReplaceState(n,n.state,null)}function Qa(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=T({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var ul=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Gp(e){ul(e)}function Vp(e){console.error(e)}function kp(e){ul(e)}function cl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Xp(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function mc(e,n,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){cl(e,n)},a}function Wp(e){return e=da(e),e.tag=3,e}function qp(e,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;e.payload=function(){return u(f)},e.callback=function(){Xp(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Xp(n,a,s),typeof u!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function d0(e,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ks(n,a,u,!0),a=Jn.current,a!==null){switch(a.tag){case 13:return yi===null?Kc():a.alternate===null&&We===0&&(We=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Wu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Jc(e,s,u)),!1;case 22:return a.flags|=65536,s===Wu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Jc(e,s,u)),!1}throw Error(r(435,a.tag))}return Jc(e,s,u),Kc(),!1}if(Te)return n=Jn.current,n!==null?(!(n.flags&65536)&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Xu&&(e=Error(r(422),{cause:s}),Is(jn(e,a)))):(s!==Xu&&(n=Error(r(423),{cause:s}),Is(jn(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=jn(s,a),u=mc(e.stateNode,s,u),Dc(e,u),We!==4&&(We=2)),!1;var f=Error(r(520),{cause:s});if(f=jn(f,a),ro===null?ro=[f]:ro.push(f),We!==4&&(We=2),n===null)return!0;s=jn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=mc(a.stateNode,s,e),Dc(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(xa===null||!xa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Wp(u),qp(u,e,a,s),Dc(a,u),!1}a=a.return}while(a!==null);return!1}var Yp=Error(r(461)),fn=!1;function vn(e,n,a,s){n.child=e===null?Jd(n,null,a,s):qa(n,e.child,a,s)}function Zp(e,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var v={};for(var b in s)b!=="ref"&&(v[b]=s[b])}else v=s;return $a(n),s=Ju(e,n,a,v,f,u),b=$u(),e!==null&&!fn?(tc(e,n,u),Bi(e,n,u)):(Te&&b&&Vu(n),n.flags|=1,vn(e,n,s,u),n.child)}function jp(e,n,a,s,u){if(e===null){var f=a.type;return typeof f=="function"&&!Fc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Kp(e,n,f,s,u)):(e=ml(a.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Tc(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ps,a(v,s)&&e.ref===n.ref)return Bi(e,n,u)}return n.flags|=1,e=va(f,s),e.ref=n.ref,e.return=n,n.child=e}function Kp(e,n,a,s,u){if(e!==null){var f=e.memoizedProps;if(Ps(f,s)&&e.ref===n.ref)if(fn=!1,n.pendingProps=s=f,Tc(e,u))e.flags&131072&&(fn=!0);else return n.lanes=e.lanes,Bi(e,n,u)}return gc(e,n,a,s,u)}function Qp(e,n,a){var s=n.pendingProps,u=s.children,f=(n.stateNode._pendingVisibility&2)!==0,v=e!==null?e.memoizedState:null;if(js(e,n),s.mode==="hidden"||f){if(n.flags&128){if(s=v!==null?v.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Jp(e,n,s,a)}if(a&536870912)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&tl(n,v!==null?v.cachePool:null),v!==null?$d(n,v):qu(),tp(n);else return n.lanes=n.childLanes=536870912,Jp(e,n,v!==null?v.baseLanes|a:a,a)}else v!==null?(tl(n,v.cachePool),$d(n,v),la(),n.memoizedState=null):(e!==null&&tl(n,null),qu(),la());return vn(e,n,u,a),n.child}function Jp(e,n,a,s){var u=Ku();return u=u===null?null:{parent:sn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&tl(n,null),qu(),tp(n),e!==null&&Ks(e,n,s,!0),null}function js(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function gc(e,n,a,s,u){return $a(n),a=Ju(e,n,a,s,void 0,u),s=$u(),e!==null&&!fn?(tc(e,n,u),Bi(e,n,u)):(Te&&s&&Vu(n),n.flags|=1,vn(e,n,a,u),n.child)}function $p(e,n,a,s,u,f){return $a(n),n.updateQueue=null,a=rp(n,s,a,u),ap(e),s=$u(),e!==null&&!fn?(tc(e,n,f),Bi(e,n,f)):(Te&&s&&Vu(n),n.flags|=1,vn(e,n,a,f),n.child)}function tm(e,n,a,s,u){if($a(n),n.stateNode===null){var f=Cr,v=a.contextType;typeof v=="object"&&v!==null&&(f=yn(v)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=pc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Cc(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?yn(v):Cr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(dc(n,a,v,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&pc.enqueueReplaceState(f,f.state,null),$s(n,s,f,u),Js(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,N=Qa(a,b);f.props=N;var k=f.context,ct=a.contextType;v=Cr,typeof ct=="object"&&ct!==null&&(v=yn(ct));var _t=a.getDerivedStateFromProps;ct=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||k!==v)&&Hp(n,f,s,v),ha=!1;var nt=n.memoizedState;f.state=nt,$s(n,s,f,u),Js(),k=n.memoizedState,b||nt!==k||ha?(typeof _t=="function"&&(dc(n,a,_t,s),k=n.memoizedState),(N=ha||Ip(n,a,N,s,nt,k,v))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=k),f.props=s,f.state=k,f.context=v,s=N):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,wc(e,n),v=n.memoizedProps,ct=Qa(a,v),f.props=ct,_t=n.pendingProps,nt=f.context,k=a.contextType,N=Cr,typeof k=="object"&&k!==null&&(N=yn(k)),b=a.getDerivedStateFromProps,(k=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==_t||nt!==N)&&Hp(n,f,s,N),ha=!1,nt=n.memoizedState,f.state=nt,$s(n,s,f,u),Js();var lt=n.memoizedState;v!==_t||nt!==lt||ha||e!==null&&e.dependencies!==null&&fl(e.dependencies)?(typeof b=="function"&&(dc(n,a,b,s),lt=n.memoizedState),(ct=ha||Ip(n,a,ct,s,nt,lt,N)||e!==null&&e.dependencies!==null&&fl(e.dependencies))?(k||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,lt,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,lt,N)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=lt),f.props=s,f.state=lt,f.context=N,s=ct):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,js(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=qa(n,e.child,null,u),n.child=qa(n,null,a,u)):vn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Bi(e,n,u),e}function em(e,n,a,s){return Fs(),n.flags|=256,vn(e,n,a,s),n.child}var _c={dehydrated:null,treeContext:null,retryLane:0};function vc(e){return{baseLanes:e,cachePool:ip()}}function Sc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ni),e}function nm(e,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(u?oa(n):la(),Te){var b=_n,N;if(N=b){t:{for(N=b,b=Mi;N.nodeType!==8;){if(!b){b=null;break t}if(N=hi(N.nextSibling),N===null){b=null;break t}}b=N}b!==null?(n.memoizedState={dehydrated:b,treeContext:ka!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912},N=ei(18,null,null,0),N.stateNode=b,N.return=n,n.child=N,Dn=n,_n=null,N=!0):N=!1}N||Wa(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return b.data==="$!"?n.lanes=16:n.lanes=536870912,null;Pi(n)}return b=s.children,s=s.fallback,u?(la(),u=n.mode,b=Mc({mode:"hidden",children:b},u),s=er(s,u,a,null),b.return=n,s.return=n,b.sibling=s,n.child=b,u=n.child,u.memoizedState=vc(a),u.childLanes=Sc(e,v,a),n.memoizedState=_c,s):(oa(n),xc(n,b))}if(N=e.memoizedState,N!==null&&(b=N.dehydrated,b!==null)){if(f)n.flags&256?(oa(n),n.flags&=-257,n=yc(e,n,a)):n.memoizedState!==null?(la(),n.child=e.child,n.flags|=128,n=null):(la(),u=s.fallback,b=n.mode,s=Mc({mode:"visible",children:s.children},b),u=er(u,b,a,null),u.flags|=2,s.return=n,u.return=n,s.sibling=u,n.child=s,qa(n,e.child,null,a),s=n.child,s.memoizedState=vc(a),s.childLanes=Sc(e,v,a),n.memoizedState=_c,n=u);else if(oa(n),b.data==="$!"){if(v=b.nextSibling&&b.nextSibling.dataset,v)var k=v.dgst;v=k,s=Error(r(419)),s.stack="",s.digest=v,Is({value:s,source:null,stack:null}),n=yc(e,n,a)}else if(fn||Ks(e,n,a,!1),v=(a&e.childLanes)!==0,fn||v){if(v=ze,v!==null){if(s=a&-a,s&42)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=s&(v.suspendedLanes|a)?0:s,s!==0&&s!==N.retryLane)throw N.retryLane=s,sa(e,s),Un(v,e,s),Yp}b.data==="$?"||Kc(),n=yc(e,n,a)}else b.data==="$?"?(n.flags|=128,n.child=e.child,n=C0.bind(null,e),b._reactRetry=n,n=null):(e=N.treeContext,_n=hi(b.nextSibling),Dn=n,Te=!0,ci=null,Mi=!1,e!==null&&(Kn[Qn++]=Ni,Kn[Qn++]=Oi,Kn[Qn++]=ka,Ni=e.id,Oi=e.overflow,ka=n),n=xc(n,s.children),n.flags|=4096);return n}return u?(la(),u=s.fallback,b=n.mode,N=e.child,k=N.sibling,s=va(N,{mode:"hidden",children:s.children}),s.subtreeFlags=N.subtreeFlags&31457280,k!==null?u=va(k,u):(u=er(u,b,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,s=u,u=n.child,b=e.child.memoizedState,b===null?b=vc(a):(N=b.cachePool,N!==null?(k=sn._currentValue,N=N.parent!==k?{parent:k,pool:k}:N):N=ip(),b={baseLanes:b.baseLanes|a,cachePool:N}),u.memoizedState=b,u.childLanes=Sc(e,v,a),n.memoizedState=_c,s):(oa(n),a=e.child,e=a.sibling,a=va(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function xc(e,n){return n=Mc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Mc(e,n){return Cm(e,n,0,null)}function yc(e,n,a){return qa(n,e.child,null,a),e=xc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function im(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Ac(e.return,n,a)}function Ec(e,n,a,s,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=u)}function am(e,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;if(vn(e,n,s.children,a),s=rn.current,s&2)s=s&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&im(e,a,n);else if(e.tag===19)im(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(Pt(rn,s),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&$o(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ec(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&$o(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Ec(n,!0,a,null,f);break;case"together":Ec(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Bi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Sa|=n.lanes,!(a&n.childLanes))if(e!==null){if(Ks(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=va(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=va(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Tc(e,n){return e.lanes&n?!0:(e=e.dependencies,!!(e!==null&&fl(e)))}function p0(e,n,a){switch(n.tag){case 3:mn(n,n.stateNode.containerInfo),fa(n,sn,e.memoizedState.cache),Fs();break;case 27:case 5:ce(n);break;case 4:mn(n,n.stateNode.containerInfo);break;case 10:fa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(oa(n),n.flags|=128,null):a&n.child.childLanes?nm(e,n,a):(oa(n),e=Bi(e,n,a),e!==null?e.sibling:null);oa(n);break;case 19:var u=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ks(e,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return am(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Pt(rn,rn.current),s)break;return null;case 22:case 23:return n.lanes=0,Qp(e,n,a);case 24:fa(n,sn,e.memoizedState.cache)}return Bi(e,n,a)}function rm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Tc(e,a)&&!(n.flags&128))return fn=!1,p0(e,n,a);fn=!!(e.flags&131072)}else fn=!1,Te&&n.flags&1048576&&kd(n,Zo,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,u=s._init;if(s=u(s._payload),n.type=s,typeof s=="function")Fc(s)?(e=Qa(s,e),n.tag=1,n=tm(null,n,s,e,a)):(n.tag=0,n=gc(null,n,s,e,a));else{if(s!=null){if(u=s.$$typeof,u===C){n.tag=11,n=Zp(null,n,s,e,a);break t}else if(u===g){n.tag=14,n=jp(null,n,s,e,a);break t}}throw n=q(s)||s,Error(r(306,n,""))}}return n;case 0:return gc(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Qa(s,n.pendingProps),tm(e,n,s,u,a);case 3:t:{if(mn(n,n.stateNode.containerInfo),e===null)throw Error(r(387));var f=n.pendingProps;u=n.memoizedState,s=u.element,wc(e,n),$s(n,f,null,a);var v=n.memoizedState;if(f=v.cache,fa(n,sn,f),f!==u.cache&&Rc(n,[sn],a,!0),Js(),f=v.element,u.isDehydrated)if(u={element:f,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=em(e,n,f,a);break t}else if(f!==s){s=jn(Error(r(424)),n),Is(s),n=em(e,n,f,a);break t}else for(_n=hi(n.stateNode.containerInfo.firstChild),Dn=n,Te=!0,ci=null,Mi=!0,a=Jd(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Fs(),f===s){n=Bi(e,n,a);break t}vn(e,n,f,a)}n=n.child}return n;case 26:return js(e,n),e===null?(a=lg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,e=n.pendingProps,s=Rl(ie.current).createElement(a),s[en]=n,s[nn]=e,Sn(s,a,e),Q(s),n.stateNode=s):n.memoizedState=lg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ce(n),e===null&&Te&&(s=n.stateNode=rg(n.type,n.pendingProps,ie.current),Dn=n,Mi=!0,_n=hi(s.firstChild)),s=n.pendingProps.children,e!==null||Te?vn(e,n,s,a):n.child=qa(n,null,s,a),js(e,n),n.child;case 5:return e===null&&Te&&((u=s=_n)&&(s=X0(s,n.type,n.pendingProps,Mi),s!==null?(n.stateNode=s,Dn=n,_n=hi(s.firstChild),Mi=!1,u=!0):u=!1),u||Wa(n)),ce(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,s=f.children,ff(u,f)?s=null:v!==null&&ff(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Ju(e,n,o0,null,null,a),mo._currentValue=u),js(e,n),vn(e,n,s,a),n.child;case 6:return e===null&&Te&&((e=a=_n)&&(a=W0(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Dn=n,_n=null,e=!0):e=!1),e||Wa(n)),null;case 13:return nm(e,n,a);case 4:return mn(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=qa(n,null,s,a):vn(e,n,s,a),n.child;case 11:return Zp(e,n,n.type,n.pendingProps,a);case 7:return vn(e,n,n.pendingProps,a),n.child;case 8:return vn(e,n,n.pendingProps.children,a),n.child;case 12:return vn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,fa(n,n.type,s.value),vn(e,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,$a(n),u=yn(u),s=s(u),n.flags|=1,vn(e,n,s,a),n.child;case 14:return jp(e,n,n.type,n.pendingProps,a);case 15:return Kp(e,n,n.type,n.pendingProps,a);case 19:return am(e,n,a);case 22:return Qp(e,n,a);case 24:return $a(n),s=yn(sn),e===null?(u=Ku(),u===null&&(u=ze,f=Zu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Cc(n),fa(n,sn,u)):(e.lanes&a&&(wc(e,n),$s(n,null,null,a),Js()),u=e.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),fa(n,sn,s)):(s=f.cache,fa(n,sn,s),s!==u.cache&&Rc(n,[sn],a,!0))),vn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var bc=Rt(null),Ja=null,Fi=null;function fa(e,n,a){Pt(bc,n._currentValue),n._currentValue=a}function Ii(e){e._currentValue=bc.current,Kt(bc)}function Ac(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Rc(e,n,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=u;for(var N=0;N<n.length;N++)if(b.context===n[N]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Ac(f.return,a,e),s||(v=null);break t}f=b.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Ac(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Ks(e,n,a,s){e=null;for(var u=n,f=!1;u!==null;){if(!f){if(u.flags&524288)f=!0;else if(u.flags&262144)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var b=u.type;Gn(u.pendingProps.value,v.value)||(e!==null?e.push(b):e=[b])}}else if(u===z.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(mo):e=[mo])}u=u.return}e!==null&&Rc(n,e,a,s),n.flags|=262144}function fl(e){for(e=e.firstContext;e!==null;){if(!Gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $a(e){Ja=e,Fi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yn(e){return sm(Ja,e)}function hl(e,n){return Ja===null&&$a(e),sm(e,n)}function sm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(e===null)throw Error(r(308));Fi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Fi=Fi.next=n;return a}var ha=!1;function Cc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,Ge&2){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=qo(e),Gd(e,null,a),n}return Wo(e,s,n,a),qo(e)}function Qs(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,xi(e,a)}}function Dc(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Uc=!1;function Js(){if(Uc){var e=Or;if(e!==null)throw e}}function $s(e,n,a,s){Uc=!1;var u=e.updateQueue;ha=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var N=b,k=N.next;N.next=null,v===null?f=k:v.next=k,v=N;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,b=ct.lastBaseUpdate,b!==v&&(b===null?ct.firstBaseUpdate=k:b.next=k,ct.lastBaseUpdate=N))}if(f!==null){var _t=u.baseState;v=0,ct=k=N=null,b=f;do{var nt=b.lane&-536870913,lt=nt!==b.lane;if(lt?(Se&nt)===nt:(s&nt)===nt){nt!==0&&nt===Nr&&(Uc=!0),ct!==null&&(ct=ct.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Vt=e,ne=b;nt=n;var qe=a;switch(ne.tag){case 1:if(Vt=ne.payload,typeof Vt=="function"){_t=Vt.call(qe,_t,nt);break t}_t=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=ne.payload,nt=typeof Vt=="function"?Vt.call(qe,_t,nt):Vt,nt==null)break t;_t=T({},_t,nt);break t;case 2:ha=!0}}nt=b.callback,nt!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[nt]:lt.push(nt))}else lt={lane:nt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ct===null?(k=ct=lt,N=_t):ct=ct.next=lt,v|=nt;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;lt=b,b=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);ct===null&&(N=_t),u.baseState=N,u.firstBaseUpdate=k,u.lastBaseUpdate=ct,f===null&&(u.shared.lanes=0),Sa|=v,e.lanes=v,e.memoizedState=_t}}function om(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function lm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)om(a[e],n)}function to(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var f=a.create,v=a.inst;s=f(),v.destroy=s}a=a.next}while(a!==u)}}catch(b){Pe(n,n.return,b)}}function ma(e,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&e)===e){var v=s.inst,b=v.destroy;if(b!==void 0){v.destroy=void 0,u=n;var N=a;try{b()}catch(k){Pe(u,N,k)}}}s=s.next}while(s!==f)}}catch(k){Pe(n,n.return,k)}}function um(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{lm(n,a)}catch(s){Pe(e,e.return,s)}}}function cm(e,n,a){a.props=Qa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Pe(e,n,s)}}function tr(e,n){try{var a=e.ref;if(a!==null){var s=e.stateNode;switch(e.tag){case 26:case 27:case 5:var u=s;break;default:u=s}typeof a=="function"?e.refCleanup=a(u):a.current=u}}catch(f){Pe(e,n,f)}}function Vn(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Pe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Pe(e,n,u)}else a.current=null}function fm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Pe(e,e.return,u)}}function hm(e,n,a){try{var s=e.stateNode;I0(s,e.type,a,n),s[nn]=n}catch(u){Pe(e,e.return,u)}}function dm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Lc(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||dm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nc(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Al));else if(s!==4&&s!==27&&(e=e.child,e!==null))for(Nc(e,n,a),e=e.sibling;e!==null;)Nc(e,n,a),e=e.sibling}function dl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&s!==27&&(e=e.child,e!==null))for(dl(e,n,a),e=e.sibling;e!==null;)dl(e,n,a),e=e.sibling}var Hi=!1,Xe=!1,Oc=!1,pm=typeof WeakSet=="function"?WeakSet:Set,hn=null,mm=!1;function m0(e,n){if(e=e.containerInfo,uf=Nl,e=Ld(e),zu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,b=-1,N=-1,k=0,ct=0,_t=e,nt=null;e:for(;;){for(var lt;_t!==a||u!==0&&_t.nodeType!==3||(b=v+u),_t!==f||s!==0&&_t.nodeType!==3||(N=v+s),_t.nodeType===3&&(v+=_t.nodeValue.length),(lt=_t.firstChild)!==null;)nt=_t,_t=lt;for(;;){if(_t===e)break e;if(nt===a&&++k===u&&(b=v),nt===f&&++ct===s&&(N=v),(lt=_t.nextSibling)!==null)break;_t=nt,nt=_t.parentNode}_t=lt}a=b===-1||N===-1?null:{start:b,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(cf={focusedElem:e,selectionRange:a},Nl=!1,hn=n;hn!==null;)if(n=hn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,hn=e;else for(;hn!==null;){switch(n=hn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Vt=Qa(a.type,u,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(Vt,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Pe(a,a.return,ne)}}break;case 3:if(e&1024){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)pf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":pf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,hn=e;break}hn=n.return}return Vt=mm,mm=!1,Vt}function gm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Vi(e,a),s&4&&to(5,a);break;case 1:if(Vi(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(b){Pe(a,a.return,b)}else{var u=Qa(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(b){Pe(a,a.return,b)}}s&64&&um(a),s&512&&tr(a,a.return);break;case 3:if(Vi(e,a),s&64&&(s=a.updateQueue,s!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{lm(s,e)}catch(b){Pe(a,a.return,b)}}break;case 26:Vi(e,a),s&512&&tr(a,a.return);break;case 27:case 5:Vi(e,a),n===null&&s&4&&fm(a),s&512&&tr(a,a.return);break;case 12:Vi(e,a);break;case 13:Vi(e,a),s&4&&Sm(e,a);break;case 22:if(u=a.memoizedState!==null||Hi,!u){n=n!==null&&n.memoizedState!==null||Xe;var f=Hi,v=Xe;Hi=u,(Xe=n)&&!v?ga(e,a,(a.subtreeFlags&8772)!==0):Vi(e,a),Hi=f,Xe=v}s&512&&(a.memoizedProps.mode==="manual"?tr(a,a.return):Vn(a,a.return));break;default:Vi(e,a)}}function _m(e){var n=e.alternate;n!==null&&(e.alternate=null,_m(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Rs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,kn=!1;function Gi(e,n,a){for(a=a.child;a!==null;)vm(e,n,a),a=a.sibling}function vm(e,n,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(qt,a)}catch{}switch(a.tag){case 26:Xe||Vn(a,n),Gi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xe||Vn(a,n);var s=Qe,u=kn;for(Qe=a.stateNode,Gi(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Rs(a),Qe=s,kn=u;break;case 5:Xe||Vn(a,n);case 6:u=Qe;var f=kn;if(Qe=null,Gi(e,n,a),Qe=u,kn=f,Qe!==null)if(kn)try{e=Qe,s=a.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)}catch(v){Pe(a,n,v)}else try{Qe.removeChild(a.stateNode)}catch(v){Pe(a,n,v)}break;case 18:Qe!==null&&(kn?(n=Qe,a=a.stateNode,n.nodeType===8?df(n.parentNode,a):n.nodeType===1&&df(n,a),So(n)):df(Qe,a.stateNode));break;case 4:s=Qe,u=kn,Qe=a.stateNode.containerInfo,kn=!0,Gi(e,n,a),Qe=s,kn=u;break;case 0:case 11:case 14:case 15:Xe||ma(2,a,n),Xe||ma(4,a,n),Gi(e,n,a);break;case 1:Xe||(Vn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&cm(a,n,s)),Gi(e,n,a);break;case 21:Gi(e,n,a);break;case 22:Xe||Vn(a,n),Xe=(s=Xe)||a.memoizedState!==null,Gi(e,n,a),Xe=s;break;default:Gi(e,n,a)}}function Sm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{So(e)}catch(a){Pe(n,n.return,a)}}function g0(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new pm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new pm),n;default:throw Error(r(435,e.tag))}}function Pc(e,n){var a=g0(e);n.forEach(function(s){var u=w0.bind(null,e,s);a.has(s)||(a.add(s),s.then(u,u))})}function $n(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=e,v=n,b=v;t:for(;b!==null;){switch(b.tag){case 27:case 5:Qe=b.stateNode,kn=!1;break t;case 3:Qe=b.stateNode.containerInfo,kn=!0;break t;case 4:Qe=b.stateNode.containerInfo,kn=!0;break t}b=b.return}if(Qe===null)throw Error(r(160));vm(f,v,u),Qe=null,kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)xm(n,e),n=n.sibling}var fi=null;function xm(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$n(n,e),ti(e),s&4&&(ma(3,e,e.return),to(3,e),ma(5,e,e.return));break;case 1:$n(n,e),ti(e),s&512&&(Xe||a===null||Vn(a,a.return)),s&64&&Hi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=fi;if($n(n,e),ti(e),s&512&&(Xe||a===null||Vn(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ia]||f[en]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),Sn(f,s,a),f[en]=e,Q(f),s=f;break t;case"link":var v=fg("link","href",u).get(s+(a.href||""));if(v){for(var b=0;b<v.length;b++)if(f=v[b],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(b,1);break e}}f=u.createElement(s),Sn(f,s,a),u.head.appendChild(f);break;case"meta":if(v=fg("meta","content",u).get(s+(a.content||""))){for(b=0;b<v.length;b++)if(f=v[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(b,1);break e}}f=u.createElement(s),Sn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[en]=e,Q(f),s=f}e.stateNode=s}else hg(u,e.type,e.stateNode);else e.stateNode=cg(u,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?hg(u,e.type,e.stateNode):cg(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&hm(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(s&4&&e.alternate===null){u=e.stateNode,f=e.memoizedProps;try{for(var N=u.firstChild;N;){var k=N.nextSibling,ct=N.nodeName;N[Ia]||ct==="HEAD"||ct==="BODY"||ct==="SCRIPT"||ct==="STYLE"||ct==="LINK"&&N.rel.toLowerCase()==="stylesheet"||u.removeChild(N),N=k}for(var _t=e.type,nt=u.attributes;nt.length;)u.removeAttributeNode(nt[0]);Sn(u,_t,f),u[en]=e,u[nn]=f}catch(Vt){Pe(e,e.return,Vt)}}case 5:if($n(n,e),ti(e),s&512&&(Xe||a===null||Vn(a,a.return)),e.flags&32){u=e.stateNode;try{On(u,"")}catch(Vt){Pe(e,e.return,Vt)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,hm(e,u,a!==null?a.memoizedProps:u)),s&1024&&(Oc=!0);break;case 6:if($n(n,e),ti(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(Vt){Pe(e,e.return,Vt)}}break;case 3:if(Dl=null,u=fi,fi=Cl(n.containerInfo),$n(n,e),fi=u,ti(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{So(n.containerInfo)}catch(Vt){Pe(e,e.return,Vt)}Oc&&(Oc=!1,Mm(e));break;case 4:s=fi,fi=Cl(e.stateNode.containerInfo),$n(n,e),ti(e),fi=s;break;case 12:$n(n,e),ti(e);break;case 13:$n(n,e),ti(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xc=ht()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Pc(e,s)));break;case 22:if(s&512&&(Xe||a===null||Vn(a,a.return)),N=e.memoizedState!==null,k=a!==null&&a.memoizedState!==null,ct=Hi,_t=Xe,Hi=ct||N,Xe=_t||k,$n(n,e),Xe=_t,Hi=ct,ti(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,s&8192&&(n._visibility=N?n._visibility&-2:n._visibility|1,N&&(n=Hi||Xe,a===null||k||n||Fr(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){k=a=n;try{if(u=k.stateNode,N)f=u.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{v=k.stateNode,b=k.memoizedProps.style;var lt=b!=null&&b.hasOwnProperty("display")?b.display:null;v.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(Vt){Pe(k,k.return,Vt)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=N?"":k.memoizedProps}catch(Vt){Pe(k,k.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Pc(e,a))));break;case 19:$n(n,e),ti(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Pc(e,s)));break;case 21:break;default:$n(n,e),ti(e)}}function ti(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(dm(a)){var s=a;break t}a=a.return}throw Error(r(160))}switch(s.tag){case 27:var u=s.stateNode,f=Lc(e);dl(e,f,u);break;case 5:var v=s.stateNode;s.flags&32&&(On(v,""),s.flags&=-33);var b=Lc(e);dl(e,b,v);break;case 3:case 4:var N=s.stateNode.containerInfo,k=Lc(e);Nc(e,k,N);break;default:throw Error(r(161))}}}catch(ct){Pe(e,e.return,ct)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Mm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Mm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Vi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)gm(e,n.alternate,n),n=n.sibling}function Fr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ma(4,n,n.return),Fr(n);break;case 1:Vn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&cm(n,n.return,a),Fr(n);break;case 26:case 27:case 5:Vn(n,n.return),Fr(n);break;case 22:Vn(n,n.return),n.memoizedState===null&&Fr(n);break;default:Fr(n)}e=e.sibling}}function ga(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:ga(u,f,a),to(4,f);break;case 1:if(ga(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(k){Pe(s,s.return,k)}if(s=f,u=s.updateQueue,u!==null){var b=s.stateNode;try{var N=u.shared.hiddenCallbacks;if(N!==null)for(u.shared.hiddenCallbacks=null,u=0;u<N.length;u++)om(N[u],b)}catch(k){Pe(s,s.return,k)}}a&&v&64&&um(f),tr(f,f.return);break;case 26:case 27:case 5:ga(u,f,a),a&&s===null&&v&4&&fm(f),tr(f,f.return);break;case 12:ga(u,f,a);break;case 13:ga(u,f,a),a&&v&4&&Sm(u,f);break;case 22:f.memoizedState===null&&ga(u,f,a),tr(f,f.return);break;default:ga(u,f,a)}n=n.sibling}}function zc(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Xs(a))}function Bc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xs(e))}function _a(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ym(e,n,a,s),n=n.sibling}function ym(e,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:_a(e,n,a,s),u&2048&&to(9,n);break;case 3:_a(e,n,a,s),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xs(e)));break;case 12:if(u&2048){_a(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,b=f.onPostCommit;typeof b=="function"&&b(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){Pe(n,n.return,N)}}else _a(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?_a(e,n,a,s):eo(e,n):f._visibility&4?_a(e,n,a,s):(f._visibility|=4,Ir(e,n,a,s,(n.subtreeFlags&10256)!==0)),u&2048&&zc(n.alternate,n);break;case 24:_a(e,n,a,s),u&2048&&Bc(n.alternate,n);break;default:_a(e,n,a,s)}}function Ir(e,n,a,s,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,v=n,b=a,N=s,k=v.flags;switch(v.tag){case 0:case 11:case 15:Ir(f,v,b,N,u),to(8,v);break;case 23:break;case 22:var ct=v.stateNode;v.memoizedState!==null?ct._visibility&4?Ir(f,v,b,N,u):eo(f,v):(ct._visibility|=4,Ir(f,v,b,N,u)),u&&k&2048&&zc(v.alternate,v);break;case 24:Ir(f,v,b,N,u),u&&k&2048&&Bc(v.alternate,v);break;default:Ir(f,v,b,N,u)}n=n.sibling}}function eo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,u=s.flags;switch(s.tag){case 22:eo(a,s),u&2048&&zc(s.alternate,s);break;case 24:eo(a,s),u&2048&&Bc(s.alternate,s);break;default:eo(a,s)}n=n.sibling}}var no=8192;function Hr(e){if(e.subtreeFlags&no)for(e=e.child;e!==null;)Em(e),e=e.sibling}function Em(e){switch(e.tag){case 26:Hr(e),e.flags&no&&e.memoizedState!==null&&aS(fi,e.memoizedState,e.memoizedProps);break;case 5:Hr(e);break;case 3:case 4:var n=fi;fi=Cl(e.stateNode.containerInfo),Hr(e),fi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=no,no=16777216,Hr(e),no=n):Hr(e));break;default:Hr(e)}}function Tm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function io(e){var n=e.deletions;if(e.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];hn=s,Am(s,e)}Tm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bm(e),e=e.sibling}function bm(e){switch(e.tag){case 0:case 11:case 15:io(e),e.flags&2048&&ma(9,e,e.return);break;case 3:io(e);break;case 12:io(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,pl(e)):io(e);break;default:io(e)}}function pl(e){var n=e.deletions;if(e.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];hn=s,Am(s,e)}Tm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ma(8,n,n.return),pl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,pl(n));break;default:pl(n)}e=e.sibling}}function Am(e,n){for(;hn!==null;){var a=hn;switch(a.tag){case 0:case 11:case 15:ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Xs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,hn=s;else t:for(a=e;hn!==null;){s=hn;var u=s.sibling,f=s.return;if(_m(s),s===a){hn=null;break t}if(u!==null){u.return=f,hn=u;break t}hn=f}}}function _0(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,n,a,s){return new _0(e,n,a,s)}function Fc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function va(e,n){var a=e.alternate;return a===null?(a=ei(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Rm(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ml(e,n,a,s,u,f){var v=0;if(s=e,typeof e=="function")Fc(e)&&(v=1);else if(typeof e=="string")v=nS(e,a,Me.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case m:return er(a.children,u,f,n);case p:v=8,u|=24;break;case _:return e=ei(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case w:return e=ei(13,a,n,u),e.elementType=w,e.lanes=f,e;case M:return e=ei(19,a,n,u),e.elementType=M,e.lanes=f,e;case O:return Cm(a,u,f,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case y:v=10;break t;case S:v=9;break t;case C:v=11;break t;case g:v=14;break t;case P:v=16,s=null;break t}v=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=ei(v,a,n,u),n.elementType=e,n.type=s,n.lanes=f,n}function er(e,n,a,s){return e=ei(7,e,s,n),e.lanes=a,e}function Cm(e,n,a,s){e=ei(22,e,s,n),e.elementType=O,e.lanes=a;var u={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=u._current;if(f===null)throw Error(r(456));if(!(u._pendingVisibility&2)){var v=sa(f,2);v!==null&&(u._pendingVisibility|=2,Un(v,f,2))}},attach:function(){var f=u._current;if(f===null)throw Error(r(456));if(u._pendingVisibility&2){var v=sa(f,2);v!==null&&(u._pendingVisibility&=-3,Un(v,f,2))}}};return e.stateNode=u,e}function Ic(e,n,a){return e=ei(6,e,null,n),e.lanes=a,e}function Hc(e,n,a){return n=ei(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function ki(e){e.flags|=4}function wm(e,n){if(n.type!=="stylesheet"||n.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!dg(n)){if(n=Jn.current,n!==null&&((Se&4194176)===Se?yi!==null:(Se&62914560)!==Se&&!(Se&536870912)||n!==yi))throw Gs=Wu,qd;e.flags|=8192}}function gl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ye():536870912,e.lanes|=n,Vr|=n)}function ao(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function He(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&31457280,s|=u.flags&31457280,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function v0(e,n,a){var s=n.pendingProps;switch(ku(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(n),null;case 1:return He(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ii(sn),re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Bs(n)?ki(n):e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,ci!==null&&(Zc(ci),ci=null))),He(n),null;case 26:return a=n.memoizedState,e===null?(ki(n),a!==null?(He(n),wm(n,a)):(He(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ki(n),He(n),wm(n,a)):(He(n),n.flags&=-16777217):(e.memoizedProps!==s&&ki(n),He(n),n.flags&=-16777217),null;case 27:kt(n),a=ie.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return He(n),null}e=Me.current,Bs(n)?Xd(n):(e=rg(u,s,a),n.stateNode=e,ki(n))}return He(n),null;case 5:if(kt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return He(n),null}if(e=Me.current,Bs(n))Xd(n);else{switch(u=Rl(ie.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?u.createElement(a,{is:s.is}):u.createElement(a)}}e[en]=n,e[nn]=s;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Sn(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ki(n)}}return He(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&ki(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=ie.current,Bs(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[en]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||$m(e.nodeValue,a)),e||Wa(n)}else e=Rl(e).createTextNode(s),e[en]=n,n.stateNode=e}return He(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Bs(n),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[en]=n}else Fs(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;He(n),u=!1}else ci!==null&&(Zc(ci),ci=null),u=!0;if(!u)return n.flags&256?(Pi(n),n):(Pi(n),null)}if(Pi(n),n.flags&128)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),gl(n,n.updateQueue),He(n),null;case 4:return re(),e===null&&sf(n.stateNode.containerInfo),He(n),null;case 10:return Ii(n.type),He(n),null;case 19:if(Kt(rn),u=n.memoizedState,u===null)return He(n),null;if(s=(n.flags&128)!==0,f=u.rendering,f===null)if(s)ao(u,!1);else{if(We!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(f=$o(e),f!==null){for(n.flags|=128,ao(u,!1),e=f.updateQueue,n.updateQueue=e,gl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Rm(a,e),a=a.sibling;return Pt(rn,rn.current&1|2),n.child}e=e.sibling}u.tail!==null&&ht()>_l&&(n.flags|=128,s=!0,ao(u,!1),n.lanes=4194304)}else{if(!s)if(e=$o(f),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,gl(n,e),ao(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Te)return He(n),null}else 2*ht()-u.renderingStartTime>_l&&a!==536870912&&(n.flags|=128,s=!0,ao(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=ht(),n.sibling=null,e=rn.current,Pt(rn,s?e&1|2:e&1),n):(He(n),null);case 22:case 23:return Pi(n),Yu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?a&536870912&&!(n.flags&128)&&(He(n),n.subtreeFlags&6&&(n.flags|=8192)):He(n),a=n.updateQueue,a!==null&&gl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&Kt(Ya),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ii(sn),He(n),null;case 25:return null}throw Error(r(156,n.tag))}function S0(e,n){switch(ku(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ii(sn),re(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return kt(n),null;case 13:if(Pi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Fs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Kt(rn),null;case 4:return re(),null;case 10:return Ii(n.type),null;case 22:case 23:return Pi(n),Yu(),e!==null&&Kt(Ya),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ii(sn),null;case 25:return null;default:return null}}function Dm(e,n){switch(ku(n),n.tag){case 3:Ii(sn),re();break;case 26:case 27:case 5:kt(n);break;case 4:re();break;case 13:Pi(n);break;case 19:Kt(rn);break;case 10:Ii(n.type);break;case 22:case 23:Pi(n),Yu(),e!==null&&Kt(Ya);break;case 24:Ii(sn)}}var x0={getCacheForType:function(e){var n=yn(sn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},M0=typeof WeakMap=="function"?WeakMap:Map,Ge=0,ze=null,he=null,Se=0,Be=0,Xn=null,Xi=!1,Gr=!1,Gc=!1,Wi=0,We=0,Sa=0,nr=0,Vc=0,ni=0,Vr=0,ro=null,Ti=null,kc=!1,Xc=0,_l=1/0,vl=null,xa=null,Sl=!1,ir=null,so=0,Wc=0,qc=null,oo=0,Yc=null;function Wn(){if(Ge&2&&Se!==0)return Se&-Se;if(R.T!==null){var e=Nr;return e!==0?e:ef()}return As()}function Um(){ni===0&&(ni=!(Se&536870912)||Te?tn():536870912);var e=Jn.current;return e!==null&&(e.flags|=32),ni}function Un(e,n,a){(e===ze&&Be===2||e.cancelPendingCommit!==null)&&(kr(e,0),qi(e,Se,ni,!1)),Rn(e,a),(!(Ge&2)||e!==ze)&&(e===ze&&(!(Ge&2)&&(nr|=a),We===4&&qi(e,Se,ni,!1)),bi(e))}function Lm(e,n,a){if(Ge&6)throw Error(r(327));var s=!a&&(n&60)===0&&(n&e.expiredLanes)===0||Jt(e,n),u=s?T0(e,n):Qc(e,n,!0),f=s;do{if(u===0){Gr&&!s&&qi(e,n,0,!1);break}else if(u===6)qi(e,n,0,!Xi);else{if(a=e.current.alternate,f&&!y0(a)){u=Qc(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var b=e;u=ro;var N=b.current.memoizedState.isDehydrated;if(N&&(kr(b,v).flags|=256),v=Qc(b,v,!1),v!==2){if(Gc&&!N){b.errorRecoveryDisabledLanes|=f,nr|=f,u=4;break t}f=Ti,Ti=u,f!==null&&Zc(f)}u=v}if(f=!1,u!==2)continue}}if(u===1){kr(e,0),qi(e,n,0,!0);break}t:{switch(s=e,u){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){qi(s,n,ni,!Xi);break t}break;case 2:Ti=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=a,s.finishedLanes=n,(n&62914560)===n&&(f=Xc+300-ht(),10<f)){if(qi(s,n,ni,!Xi),Dt(s,0)!==0)break t;s.timeoutHandle=ng(Nm.bind(null,s,a,Ti,vl,kc,n,ni,nr,Vr,Xi,2,-0,0),f);break t}Nm(s,a,Ti,vl,kc,n,ni,nr,Vr,Xi,0,-0,0)}}break}while(!0);bi(e)}function Zc(e){Ti===null?Ti=e:Ti.push.apply(Ti,e)}function Nm(e,n,a,s,u,f,v,b,N,k,ct,_t,nt){var lt=n.subtreeFlags;if((lt&8192||(lt&16785408)===16785408)&&(po={stylesheets:null,count:0,unsuspend:iS},Em(n),n=rS(),n!==null)){e.cancelPendingCommit=n(Hm.bind(null,e,a,s,u,v,b,N,1,_t,nt)),qi(e,f,v,!k);return}Hm(e,a,s,u,v,b,N,ct,_t,nt)}function y0(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Gn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qi(e,n,a,s){n&=~Vc,n&=~nr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var u=n;0<u;){var f=31-Zt(u),v=1<<f;s[f]=-1,u&=~v}a!==0&&bs(e,a,n)}function xl(){return Ge&6?!0:(lo(0),!1)}function jc(){if(he!==null){if(Be===0)var e=he.return;else e=he,Fi=Ja=null,ec(e),Ur=null,Vs=0,e=he;for(;e!==null;)Dm(e.alternate,e),e=e.return;he=null}}function kr(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,G0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),jc(),ze=e,he=a=va(e.current,null),Se=n,Be=0,Xn=null,Xi=!1,Gr=Jt(e,n),Gc=!1,Vr=ni=Vc=nr=Sa=We=0,Ti=ro=null,kc=!1,n&8&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var u=31-Zt(s),f=1<<u;n|=e[u],s&=~f}return Wi=n,Xo(),a}function Om(e,n){ue=null,R.H=Ei,n===Hs?(n=jd(),Be=3):n===qd?(n=jd(),Be=4):Be=n===Yp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Xn=n,he===null&&(We=1,cl(e,jn(n,e.current)))}function Pm(){var e=R.H;return R.H=Ei,e===null?Ei:e}function zm(){var e=R.A;return R.A=x0,e}function Kc(){We=4,Xi||(Se&4194176)!==Se&&Jn.current!==null||(Gr=!0),!(Sa&134217727)&&!(nr&134217727)||ze===null||qi(ze,Se,ni,!1)}function Qc(e,n,a){var s=Ge;Ge|=2;var u=Pm(),f=zm();(ze!==e||Se!==n)&&(vl=null,kr(e,n)),n=!1;var v=We;t:do try{if(Be!==0&&he!==null){var b=he,N=Xn;switch(Be){case 8:jc(),v=6;break t;case 3:case 2:case 6:Jn.current===null&&(n=!0);var k=Be;if(Be=0,Xn=null,Xr(e,b,N,k),a&&Gr){v=0;break t}break;default:k=Be,Be=0,Xn=null,Xr(e,b,N,k)}}E0(),v=We;break}catch(ct){Om(e,ct)}while(!0);return n&&e.shellSuspendCounter++,Fi=Ja=null,Ge=s,R.H=u,R.A=f,he===null&&(ze=null,Se=0,Xo()),v}function E0(){for(;he!==null;)Bm(he)}function T0(e,n){var a=Ge;Ge|=2;var s=Pm(),u=zm();ze!==e||Se!==n?(vl=null,_l=ht()+500,kr(e,n)):Gr=Jt(e,n);t:do try{if(Be!==0&&he!==null){n=he;var f=Xn;e:switch(Be){case 1:Be=0,Xn=null,Xr(e,n,f,1);break;case 2:if(Yd(f)){Be=0,Xn=null,Fm(n);break}n=function(){Be===2&&ze===e&&(Be=7),bi(e)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Yd(f)?(Be=0,Xn=null,Fm(n)):(Be=0,Xn=null,Xr(e,n,f,7));break;case 5:var v=null;switch(he.tag){case 26:v=he.memoizedState;case 5:case 27:var b=he;if(!v||dg(v)){Be=0,Xn=null;var N=b.sibling;if(N!==null)he=N;else{var k=b.return;k!==null?(he=k,Ml(k)):he=null}break e}}Be=0,Xn=null,Xr(e,n,f,5);break;case 6:Be=0,Xn=null,Xr(e,n,f,6);break;case 8:jc(),We=6;break t;default:throw Error(r(462))}}b0();break}catch(ct){Om(e,ct)}while(!0);return Fi=Ja=null,R.H=s,R.A=u,Ge=a,he!==null?0:(ze=null,Se=0,Xo(),We)}function b0(){for(;he!==null&&!E();)Bm(he)}function Bm(e){var n=rm(e.alternate,e,Wi);e.memoizedProps=e.pendingProps,n===null?Ml(e):he=n}function Fm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=$p(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=$p(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:ec(n);default:Dm(a,n),n=he=Rm(n,Wi),n=rm(a,n,Wi)}e.memoizedProps=e.pendingProps,n===null?Ml(e):he=n}function Xr(e,n,a,s){Fi=Ja=null,ec(n),Ur=null,Vs=0;var u=n.return;try{if(d0(e,u,n,a,Se)){We=1,cl(e,jn(a,e.current)),he=null;return}}catch(f){if(u!==null)throw he=u,f;We=1,cl(e,jn(a,e.current)),he=null;return}n.flags&32768?(Te||s===1?e=!0:Gr||Se&536870912?e=!1:(Xi=e=!0,(s===2||s===3||s===6)&&(s=Jn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Im(n,e)):Ml(n)}function Ml(e){var n=e;do{if(n.flags&32768){Im(n,Xi);return}e=n.return;var a=v0(n.alternate,n,Wi);if(a!==null){he=a;return}if(n=n.sibling,n!==null){he=n;return}he=n=e}while(n!==null);We===0&&(We=5)}function Im(e,n){do{var a=S0(e.alternate,e);if(a!==null){a.flags&=32767,he=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){he=e;return}he=e=a}while(e!==null);We=6,he=null}function Hm(e,n,a,s,u,f,v,b,N,k){var ct=R.T,_t=Y.p;try{Y.p=2,R.T=null,A0(e,n,a,s,_t,u,f,v,b,N,k)}finally{R.T=ct,Y.p=_t}}function A0(e,n,a,s,u,f,v,b){do Wr();while(ir!==null);if(Ge&6)throw Error(r(327));var N=e.finishedWork;if(s=e.finishedLanes,N===null)return null;if(e.finishedWork=null,e.finishedLanes=0,N===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var k=N.lanes|N.childLanes;if(k|=Hu,Oo(e,s,k,f,v,b),e===ze&&(he=ze=null,Se=0),!(N.subtreeFlags&10256)&&!(N.flags&10256)||Sl||(Sl=!0,Wc=k,qc=a,D0(wt,function(){return Wr(),null})),a=(N.flags&15990)!==0,N.subtreeFlags&15990||a?(a=R.T,R.T=null,f=Y.p,Y.p=2,v=Ge,Ge|=4,m0(e,N),xm(N,e),Kv(cf,e.containerInfo),Nl=!!uf,cf=uf=null,e.current=N,gm(e,N.alternate,N),tt(),Ge=v,Y.p=f,R.T=a):e.current=N,Sl?(Sl=!1,ir=e,so=s):Gm(e,k),k=e.pendingLanes,k===0&&(xa=null),Ft(N.stateNode),bi(e),n!==null)for(u=e.onRecoverableError,N=0;N<n.length;N++)k=n[N],u(k.value,{componentStack:k.stack});return so&3&&Wr(),k=e.pendingLanes,s&4194218&&k&42?e===Yc?oo++:(oo=0,Yc=e):oo=0,lo(0),null}function Gm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Xs(n)))}function Wr(){if(ir!==null){var e=ir,n=Wc;Wc=0;var a=Sr(so),s=R.T,u=Y.p;try{if(Y.p=32>a?32:a,R.T=null,ir===null)var f=!1;else{a=qc,qc=null;var v=ir,b=so;if(ir=null,so=0,Ge&6)throw Error(r(331));var N=Ge;if(Ge|=4,bm(v.current),ym(v,v.current,b,a),Ge=N,lo(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(qt,v)}catch{}f=!0}return f}finally{Y.p=u,R.T=s,Gm(e,n)}}return!1}function Vm(e,n,a){n=jn(a,n),n=mc(e.stateNode,n,2),e=pa(e,n,2),e!==null&&(Rn(e,2),bi(e))}function Pe(e,n,a){if(e.tag===3)Vm(e,e,a);else for(;n!==null;){if(n.tag===3){Vm(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(xa===null||!xa.has(s))){e=jn(a,e),a=Wp(2),s=pa(n,a,2),s!==null&&(qp(a,s,n,e),Rn(s,2),bi(s));break}}n=n.return}}function Jc(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new M0;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Gc=!0,u.add(a),e=R0.bind(null,e,n,a),n.then(e,e))}function R0(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ze===e&&(Se&a)===a&&(We===4||We===3&&(Se&62914560)===Se&&300>ht()-Xc?!(Ge&2)&&kr(e,0):Vc|=a,Vr===Se&&(Vr=0)),bi(e)}function km(e,n){n===0&&(n=ye()),e=sa(e,n),e!==null&&(Rn(e,n),bi(e))}function C0(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),km(e,a)}function w0(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),km(e,a)}function D0(e,n){return Xt(e,n)}var yl=null,qr=null,$c=!1,El=!1,tf=!1,ar=0;function bi(e){e!==qr&&e.next===null&&(qr===null?yl=qr=e:qr=qr.next=e),El=!0,$c||($c=!0,L0(U0))}function lo(e,n){if(!tf&&El){tf=!0;do for(var a=!1,s=yl;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var v=s.suspendedLanes,b=s.pingedLanes;f=(1<<31-Zt(42|e)+1)-1,f&=u&~(v&~b),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,qm(s,f))}else f=Se,f=Dt(s,s===ze?f:0),!(f&3)||Jt(s,f)||(a=!0,qm(s,f));s=s.next}while(a);tf=!1}}function U0(){El=$c=!1;var e=0;ar!==0&&(H0()&&(e=ar),ar=0);for(var n=ht(),a=null,s=yl;s!==null;){var u=s.next,f=Xm(s,n);f===0?(s.next=null,a===null?yl=u:a.next=u,u===null&&(qr=a)):(a=s,(e!==0||f&3)&&(El=!0)),s=u}lo(e)}function Xm(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Zt(f),b=1<<v,N=u[v];N===-1?(!(b&a)||b&s)&&(u[v]=Ie(b,n)):N<=n&&(e.expiredLanes|=b),f&=~b}if(n=ze,a=Se,a=Dt(e,e===n?a:0),s=e.callbackNode,a===0||e===n&&Be===2||e.cancelPendingCommit!==null)return s!==null&&s!==null&&U(s),e.callbackNode=null,e.callbackPriority=0;if(!(a&3)||Jt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&U(s),Sr(a)){case 2:case 8:a=Ht;break;case 32:a=wt;break;case 268435456:a=de;break;default:a=wt}return s=Wm.bind(null,e),a=Xt(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&U(s),e.callbackPriority=2,e.callbackNode=null,2}function Wm(e,n){var a=e.callbackNode;if(Wr()&&e.callbackNode!==a)return null;var s=Se;return s=Dt(e,e===ze?s:0),s===0?null:(Lm(e,s,n),Xm(e,ht()),e.callbackNode!=null&&e.callbackNode===a?Wm.bind(null,e):null)}function qm(e,n){if(Wr())return null;Lm(e,n,!0)}function L0(e){V0(function(){Ge&6?Xt(dt,e):e()})}function ef(){return ar===0&&(ar=tn()),ar}function Ym(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Bo(""+e)}function Zm(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function N0(e,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Ym((u[nn]||null).action),v=s.submitter;v&&(n=(n=v[nn]||null)?Ym(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var b=new Go("action","action",null,s,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ar!==0){var N=v?Zm(u,v):new FormData(u);cc(a,{pending:!0,data:N,method:u.method,action:f},null,N)}}else typeof f=="function"&&(b.preventDefault(),N=v?Zm(u,v):new FormData(u),cc(a,{pending:!0,data:N,method:u.method,action:f},f,N))},currentTarget:u}]})}}for(var nf=0;nf<Hd.length;nf++){var af=Hd[nf],O0=af.toLowerCase(),P0=af[0].toUpperCase()+af.slice(1);ui(O0,"on"+P0)}ui(Pd,"onAnimationEnd"),ui(zd,"onAnimationIteration"),ui(Bd,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(Jv,"onTransitionRun"),ui($v,"onTransitionStart"),ui(t0,"onTransitionCancel"),ui(Fd,"onTransitionEnd"),Ot("onMouseEnter",["mouseout","mouseover"]),Ot("onMouseLeave",["mouseout","mouseover"]),Ot("onPointerEnter",["pointerout","pointerover"]),Ot("onPointerLeave",["pointerout","pointerover"]),bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uo));function jm(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var v=s.length-1;0<=v;v--){var b=s[v],N=b.instance,k=b.currentTarget;if(b=b.listener,N!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=k;try{f(u)}catch(ct){ul(ct)}u.currentTarget=null,f=N}else for(v=0;v<s.length;v++){if(b=s[v],N=b.instance,k=b.currentTarget,b=b.listener,N!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=k;try{f(u)}catch(ct){ul(ct)}u.currentTarget=null,f=N}}}}function _e(e,n){var a=n[xr];a===void 0&&(a=n[xr]=new Set);var s=e+"__bubble";a.has(s)||(Km(n,e,2,!1),a.add(s))}function rf(e,n,a){var s=0;n&&(s|=4),Km(a,e,s,n)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function sf(e){if(!e[Tl]){e[Tl]=!0,Z.forEach(function(a){a!=="selectionchange"&&(z0.has(a)||rf(a,!1,e),rf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Tl]||(n[Tl]=!0,rf("selectionchange",!1,n))}}function Km(e,n,a,s){switch(Sg(n)){case 2:var u=lS;break;case 8:u=uS;break;default:u=Sf}a=u.bind(null,n,a,e),u=void 0,!Ru||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function of(e,n,a,s,u){var f=s;if(!(n&1)&&!(n&2)&&s!==null)t:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var b=s.stateNode.containerInfo;if(b===u||b.nodeType===8&&b.parentNode===u)break;if(v===4)for(v=s.return;v!==null;){var N=v.tag;if((N===3||N===4)&&(N=v.stateNode.containerInfo,N===u||N.nodeType===8&&N.parentNode===u))return;v=v.return}for(;b!==null;){if(v=Li(b),v===null)return;if(N=v.tag,N===5||N===6||N===26||N===27){s=f=v;continue t}b=b.parentNode}}s=s.return}fd(function(){var k=f,ct=bu(a),_t=[];t:{var nt=Id.get(e);if(nt!==void 0){var lt=Go,Vt=e;switch(e){case"keypress":if(Io(a)===0)break t;case"keydown":case"keyup":lt=wv;break;case"focusin":Vt="focus",lt=Uu;break;case"focusout":Vt="blur",lt=Uu;break;case"beforeblur":case"afterblur":lt=Uu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=_v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Lv;break;case Pd:case zd:case Bd:lt=xv;break;case Fd:lt=Ov;break;case"scroll":case"scrollend":lt=mv;break;case"wheel":lt=zv;break;case"copy":case"cut":case"paste":lt=yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=gd;break;case"toggle":case"beforetoggle":lt=Fv}var ne=(n&4)!==0,qe=!ne&&(e==="scroll"||e==="scrollend"),K=ne?nt!==null?nt+"Capture":null:nt;ne=[];for(var G=k,J;G!==null;){var mt=G;if(J=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||J===null||K===null||(mt=Cs(G,K),mt!=null&&ne.push(co(G,mt,J))),qe)break;G=G.return}0<ne.length&&(nt=new lt(nt,Vt,null,a,ct),_t.push({event:nt,listeners:ne}))}}if(!(n&7)){t:{if(nt=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",nt&&a!==Tu&&(Vt=a.relatedTarget||a.fromElement)&&(Li(Vt)||Vt[Ui]))break t;if((lt||nt)&&(nt=ct.window===ct?ct:(nt=ct.ownerDocument)?nt.defaultView||nt.parentWindow:window,lt?(Vt=a.relatedTarget||a.toElement,lt=k,Vt=Vt?Li(Vt):null,Vt!==null&&(qe=j(Vt),ne=Vt.tag,Vt!==qe||ne!==5&&ne!==27&&ne!==6)&&(Vt=null)):(lt=null,Vt=k),lt!==Vt)){if(ne=pd,mt="onMouseLeave",K="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(ne=gd,mt="onPointerLeave",K="onPointerEnter",G="pointer"),qe=lt==null?nt:W(lt),J=Vt==null?nt:W(Vt),nt=new ne(mt,G+"leave",lt,a,ct),nt.target=qe,nt.relatedTarget=J,mt=null,Li(ct)===k&&(ne=new ne(K,G+"enter",Vt,a,ct),ne.target=J,ne.relatedTarget=qe,mt=ne),qe=mt,lt&&Vt)e:{for(ne=lt,K=Vt,G=0,J=ne;J;J=Yr(J))G++;for(J=0,mt=K;mt;mt=Yr(mt))J++;for(;0<G-J;)ne=Yr(ne),G--;for(;0<J-G;)K=Yr(K),J--;for(;G--;){if(ne===K||K!==null&&ne===K.alternate)break e;ne=Yr(ne),K=Yr(K)}ne=null}else ne=null;lt!==null&&Qm(_t,nt,lt,ne,!1),Vt!==null&&qe!==null&&Qm(_t,qe,Vt,ne,!0)}}t:{if(nt=k?W(k):window,lt=nt.nodeName&&nt.nodeName.toLowerCase(),lt==="select"||lt==="input"&&nt.type==="file")var It=Td;else if(yd(nt))if(bd)It=Zv;else{It=qv;var fe=Wv}else lt=nt.nodeName,!lt||lt.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?k&&Eu(k.elementType)&&(It=Td):It=Yv;if(It&&(It=It(e,k))){Ed(_t,It,a,ct);break t}fe&&fe(e,nt,k),e==="focusout"&&k&&nt.type==="number"&&k.memoizedProps.value!=null&&Mn(nt,"number",nt.value)}switch(fe=k?W(k):window,e){case"focusin":(yd(fe)||fe.contentEditable==="true")&&(br=fe,Bu=k,zs=null);break;case"focusout":zs=Bu=br=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,Nd(_t,a,ct);break;case"selectionchange":if(Qv)break;case"keydown":case"keyup":Nd(_t,a,ct)}var Wt;if(Nu)t:{switch(e){case"compositionstart":var Qt="onCompositionStart";break t;case"compositionend":Qt="onCompositionEnd";break t;case"compositionupdate":Qt="onCompositionUpdate";break t}Qt=void 0}else Tr?xd(e,a)&&(Qt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Qt="onCompositionStart");Qt&&(_d&&a.locale!=="ko"&&(Tr||Qt!=="onCompositionStart"?Qt==="onCompositionEnd"&&Tr&&(Wt=hd()):(ra=ct,Cu="value"in ra?ra.value:ra.textContent,Tr=!0)),fe=bl(k,Qt),0<fe.length&&(Qt=new md(Qt,e,null,a,ct),_t.push({event:Qt,listeners:fe}),Wt?Qt.data=Wt:(Wt=Md(a),Wt!==null&&(Qt.data=Wt)))),(Wt=Hv?Gv(e,a):Vv(e,a))&&(Qt=bl(k,"onBeforeInput"),0<Qt.length&&(fe=new md("onBeforeInput","beforeinput",null,a,ct),_t.push({event:fe,listeners:Qt}),fe.data=Wt)),N0(_t,e,k,a,ct)}jm(_t,n)})}function co(e,n,a){return{instance:e,listener:n,currentTarget:a}}function bl(e,n){for(var a=n+"Capture",s=[];e!==null;){var u=e,f=u.stateNode;u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Cs(e,a),u!=null&&s.unshift(co(e,u,f)),u=Cs(e,n),u!=null&&s.push(co(e,u,f))),e=e.return}return s}function Yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qm(e,n,a,s,u){for(var f=n._reactName,v=[];a!==null&&a!==s;){var b=a,N=b.alternate,k=b.stateNode;if(b=b.tag,N!==null&&N===s)break;b!==5&&b!==26&&b!==27||k===null||(N=k,u?(k=Cs(a,f),k!=null&&v.unshift(co(a,k,N))):u||(k=Cs(a,f),k!=null&&v.push(co(a,k,N)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var B0=/\r\n?/g,F0=/\u0000|\uFFFD/g;function Jm(e){return(typeof e=="string"?e:""+e).replace(B0,`
`).replace(F0,"")}function $m(e,n){return n=Jm(n),Jm(e)===n}function Al(){}function Ne(e,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||On(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&On(e,""+s);break;case"className":Fe(e,"class",s);break;case"tabIndex":Fe(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Fe(e,a,s);break;case"style":ud(e,s,f);break;case"data":if(n!=="object"){Fe(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Bo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ne(e,n,"name",u.name,u,null),Ne(e,n,"formEncType",u.formEncType,u,null),Ne(e,n,"formMethod",u.formMethod,u,null),Ne(e,n,"formTarget",u.formTarget,u,null)):(Ne(e,n,"encType",u.encType,u,null),Ne(e,n,"method",u.method,u,null),Ne(e,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Bo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Al);break;case"onScroll":s!=null&&_e("scroll",e);break;case"onScrollEnd":s!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Bo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":_e("beforetoggle",e),_e("toggle",e),me(e,"popover",s);break;case"xlinkActuate":Ee(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ee(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ee(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ee(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ee(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ee(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ee(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ee(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ee(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":me(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=dv.get(a)||a,me(e,a,s))}}function lf(e,n,a,s,u,f){switch(a){case"style":ud(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?On(e,s):(typeof s=="number"||typeof s=="bigint")&&On(e,""+s);break;case"onScroll":s!=null&&_e("scroll",e);break;case"onScrollEnd":s!=null&&_e("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Al);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[nn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,u);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):me(e,a,s)}}}function Sn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(e,n,f,v,a,null)}}u&&Ne(e,n,"srcSet",a.srcSet,a,null),s&&Ne(e,n,"src",a.src,a,null);return;case"input":_e("invalid",e);var b=f=v=u=null,N=null,k=null;for(s in a)if(a.hasOwnProperty(s)){var ct=a[s];if(ct!=null)switch(s){case"name":u=ct;break;case"type":v=ct;break;case"checked":N=ct;break;case"defaultChecked":k=ct;break;case"value":f=ct;break;case"defaultValue":b=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:Ne(e,n,s,ct,a,null)}}wn(e,f,b,N,k,v,u,!1),ge(e);return;case"select":_e("invalid",e),s=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":v=b;break;case"multiple":s=b;default:Ne(e,n,u,b,a,null)}n=f,a=v,e.multiple=!!s,n!=null?ke(e,!!s,n,!1):a!=null&&ke(e,!!s,a,!0);return;case"textarea":_e("invalid",e),f=u=s=null;for(v in a)if(a.hasOwnProperty(v)&&(b=a[v],b!=null))switch(v){case"value":s=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Ne(e,n,v,b,a,null)}Mr(e,s,u,f),ge(e);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(s=a[N],s!=null))switch(N){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ne(e,n,N,s,a,null)}return;case"dialog":_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(s=0;s<uo.length;s++)_e(uo[s],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in a)if(a.hasOwnProperty(k)&&(s=a[k],s!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(e,n,k,s,a,null)}return;default:if(Eu(n)){for(ct in a)a.hasOwnProperty(ct)&&(s=a[ct],s!==void 0&&lf(e,n,ct,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&Ne(e,n,b,s,a,null))}function I0(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,b=null,N=null,k=null,ct=null;for(lt in a){var _t=a[lt];if(a.hasOwnProperty(lt)&&_t!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":N=_t;default:s.hasOwnProperty(lt)||Ne(e,n,lt,null,s,_t)}}for(var nt in s){var lt=s[nt];if(_t=a[nt],s.hasOwnProperty(nt)&&(lt!=null||_t!=null))switch(nt){case"type":f=lt;break;case"name":u=lt;break;case"checked":k=lt;break;case"defaultChecked":ct=lt;break;case"value":v=lt;break;case"defaultValue":b=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==_t&&Ne(e,n,nt,lt,s,_t)}}Ue(e,v,b,N,k,ct,f,u);return;case"select":lt=v=b=nt=null;for(f in a)if(N=a[f],a.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":lt=N;default:s.hasOwnProperty(f)||Ne(e,n,f,null,s,N)}for(u in s)if(f=s[u],N=a[u],s.hasOwnProperty(u)&&(f!=null||N!=null))switch(u){case"value":nt=f;break;case"defaultValue":b=f;break;case"multiple":v=f;default:f!==N&&Ne(e,n,u,f,s,N)}n=b,a=v,s=lt,nt!=null?ke(e,!!a,nt,!1):!!s!=!!a&&(n!=null?ke(e,!!a,n,!0):ke(e,!!a,a?[]:"",!1));return;case"textarea":lt=nt=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ne(e,n,b,null,s,u)}for(v in s)if(u=s[v],f=a[v],s.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":nt=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ne(e,n,v,u,s,f)}gn(e,nt,lt);return;case"option":for(var Vt in a)if(nt=a[Vt],a.hasOwnProperty(Vt)&&nt!=null&&!s.hasOwnProperty(Vt))switch(Vt){case"selected":e.selected=!1;break;default:Ne(e,n,Vt,null,s,nt)}for(N in s)if(nt=s[N],lt=a[N],s.hasOwnProperty(N)&&nt!==lt&&(nt!=null||lt!=null))switch(N){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Ne(e,n,N,nt,s,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)nt=a[ne],a.hasOwnProperty(ne)&&nt!=null&&!s.hasOwnProperty(ne)&&Ne(e,n,ne,null,s,nt);for(k in s)if(nt=s[k],lt=a[k],s.hasOwnProperty(k)&&nt!==lt&&(nt!=null||lt!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Ne(e,n,k,nt,s,lt)}return;default:if(Eu(n)){for(var qe in a)nt=a[qe],a.hasOwnProperty(qe)&&nt!==void 0&&!s.hasOwnProperty(qe)&&lf(e,n,qe,void 0,s,nt);for(ct in s)nt=s[ct],lt=a[ct],!s.hasOwnProperty(ct)||nt===lt||nt===void 0&&lt===void 0||lf(e,n,ct,nt,s,lt);return}}for(var K in a)nt=a[K],a.hasOwnProperty(K)&&nt!=null&&!s.hasOwnProperty(K)&&Ne(e,n,K,null,s,nt);for(_t in s)nt=s[_t],lt=a[_t],!s.hasOwnProperty(_t)||nt===lt||nt==null&&lt==null||Ne(e,n,_t,nt,s,lt)}var uf=null,cf=null;function Rl(e){return e.nodeType===9?e:e.ownerDocument}function tg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function eg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ff(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hf=null;function H0(){var e=window.event;return e&&e.type==="popstate"?e===hf?!1:(hf=e,!0):(hf=null,!1)}var ng=typeof setTimeout=="function"?setTimeout:void 0,G0=typeof clearTimeout=="function"?clearTimeout:void 0,ig=typeof Promise=="function"?Promise:void 0,V0=typeof queueMicrotask=="function"?queueMicrotask:typeof ig<"u"?function(e){return ig.resolve(null).then(e).catch(k0)}:ng;function k0(e){setTimeout(function(){throw e})}function df(e,n){var a=n,s=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(s===0){e.removeChild(u),So(n);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=u}while(a);So(n)}function pf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":pf(a),Rs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function X0(e,n,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ia])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function W0(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function ag(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function rg(e,n,a){switch(n=Rl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var ii=new Map,sg=new Set;function Cl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Yi=Y.d;Y.d={f:q0,r:Y0,D:Z0,C:j0,L:K0,m:Q0,X:$0,S:J0,M:tS};function q0(){var e=Yi.f(),n=xl();return e||n}function Y0(e){var n=A(e);n!==null&&n.tag===5&&n.type==="form"?Np(n):Yi.r(e)}var Zr=typeof document>"u"?null:document;function og(e,n,a){var s=Zr;if(s&&typeof n=="string"&&n){var u=cn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),sg.has(u)||(sg.add(u),e={rel:e,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Sn(n,"link",e),Q(n),s.head.appendChild(n)))}}function Z0(e){Yi.D(e),og("dns-prefetch",e,null)}function j0(e,n){Yi.C(e,n),og("preconnect",e,n)}function K0(e,n,a){Yi.L(e,n,a);var s=Zr;if(s&&e&&n){var u='link[rel="preload"][as="'+cn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+cn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+cn(a.imageSizes)+'"]')):u+='[href="'+cn(e)+'"]';var f=u;switch(n){case"style":f=jr(e);break;case"script":f=Kr(e)}ii.has(f)||(e=T({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ii.set(f,e),s.querySelector(u)!==null||n==="style"&&s.querySelector(fo(f))||n==="script"&&s.querySelector(ho(f))||(n=s.createElement("link"),Sn(n,"link",e),Q(n),s.head.appendChild(n)))}}function Q0(e,n){Yi.m(e,n);var a=Zr;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+cn(s)+'"][href="'+cn(e)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Kr(e)}if(!ii.has(f)&&(e=T({rel:"modulepreload",href:e},n),ii.set(f,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ho(f)))return}s=a.createElement("link"),Sn(s,"link",e),Q(s),a.head.appendChild(s)}}}function J0(e,n,a){Yi.S(e,n,a);var s=Zr;if(s&&e){var u=$(s).hoistableStyles,f=jr(e);n=n||"default";var v=u.get(f);if(!v){var b={loading:0,preload:null};if(v=s.querySelector(fo(f)))b.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ii.get(f))&&mf(e,a);var N=v=s.createElement("link");Q(N),Sn(N,"link",e),N._p=new Promise(function(k,ct){N.onload=k,N.onerror=ct}),N.addEventListener("load",function(){b.loading|=1}),N.addEventListener("error",function(){b.loading|=2}),b.loading|=4,wl(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:b},u.set(f,v)}}}function $0(e,n){Yi.X(e,n);var a=Zr;if(a&&e){var s=$(a).hoistableScripts,u=Kr(e),f=s.get(u);f||(f=a.querySelector(ho(u)),f||(e=T({src:e,async:!0},n),(n=ii.get(u))&&gf(e,n),f=a.createElement("script"),Q(f),Sn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function tS(e,n){Yi.M(e,n);var a=Zr;if(a&&e){var s=$(a).hoistableScripts,u=Kr(e),f=s.get(u);f||(f=a.querySelector(ho(u)),f||(e=T({src:e,async:!0,type:"module"},n),(n=ii.get(u))&&gf(e,n),f=a.createElement("script"),Q(f),Sn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function lg(e,n,a,s){var u=(u=ie.current)?Cl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=jr(a.href),a=$(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=jr(a.href);var f=$(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(fo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),ii.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ii.set(e,a),f||eS(u,e,a,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Kr(a),a=$(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function jr(e){return'href="'+cn(e)+'"'}function fo(e){return'link[rel="stylesheet"]['+e+"]"}function ug(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function eS(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Sn(n,"link",a),Q(n),e.head.appendChild(n))}function Kr(e){return'[src="'+cn(e)+'"]'}function ho(e){return"script[async]"+e}function cg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+cn(a.href)+'"]');if(s)return n.instance=s,Q(s),s;var u=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Q(s),Sn(s,"style",u),wl(s,a.precedence,e),n.instance=s;case"stylesheet":u=jr(a.href);var f=e.querySelector(fo(u));if(f)return n.state.loading|=4,n.instance=f,Q(f),f;s=ug(a),(u=ii.get(u))&&mf(s,u),f=(e.ownerDocument||e).createElement("link"),Q(f);var v=f;return v._p=new Promise(function(b,N){v.onload=b,v.onerror=N}),Sn(f,"link",s),n.state.loading|=4,wl(f,a.precedence,e),n.instance=f;case"script":return f=Kr(a.src),(u=e.querySelector(ho(f)))?(n.instance=u,Q(u),u):(s=a,(u=ii.get(f))&&(s=T({},a),gf(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),Q(u),Sn(u,"link",s),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&!(n.state.loading&4)&&(s=n.instance,n.state.loading|=4,wl(s,a.precedence,e));return n.instance}function wl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,v=0;v<s.length;v++){var b=s[v];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function mf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function gf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Dl=null;function fg(e,n,a){if(Dl===null){var s=new Map,u=Dl=new Map;u.set(a,s)}else u=Dl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ia]||f[en]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var b=s.get(v);b?b.push(f):s.set(v,[f])}}return s}function hg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function nS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function dg(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var po=null;function iS(){}function aS(e,n,a){if(po===null)throw Error(r(475));var s=po;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var u=jr(a.href),f=e.querySelector(fo(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=Ul.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=f,Q(f);return}f=e.ownerDocument||e,a=ug(a),(u=ii.get(u))&&mf(a,u),f=f.createElement("link"),Q(f);var v=f;v._p=new Promise(function(b,N){v.onload=b,v.onerror=N}),Sn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(s.count++,n=Ul.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function rS(){if(po===null)throw Error(r(475));var e=po;return e.stylesheets&&e.count===0&&_f(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&_f(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Ul(){if(this.count--,this.count===0){if(this.stylesheets)_f(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ll=null;function _f(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ll=new Map,n.forEach(sS,e),Ll=null,Ul.call(e))}function sS(e,n){if(!(n.state.loading&4)){var a=Ll.get(e);if(a)var s=a.get(null);else{a=new Map,Ll.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||s,f===s&&a.set(null,u),a.set(v,u),this.count++,s=Ul.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var mo={$$typeof:y,Provider:null,Consumer:null,_currentValue:pt,_currentValue2:pt,_threadCount:0};function oS(e,n,a,s,u,f,v,b){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=An(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=An(0),this.hiddenUpdates=An(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function pg(e,n,a,s,u,f,v,b,N,k,ct,_t){return e=new oS(e,n,a,v,b,N,k,_t),n=1,f===!0&&(n|=24),f=ei(3,null,null,n),e.current=f,f.stateNode=e,n=Zu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Cc(f),e}function mg(e){return e?(e=Cr,e):Cr}function gg(e,n,a,s,u,f){u=mg(u),s.context===null?s.context=u:s.pendingContext=u,s=da(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=pa(e,s,n),a!==null&&(Un(a,e,n),Qs(a,e,n))}function _g(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function vf(e,n){_g(e,n),(e=e.alternate)&&_g(e,n)}function vg(e){if(e.tag===13){var n=sa(e,67108864);n!==null&&Un(n,e,67108864),vf(e,67108864)}}var Nl=!0;function lS(e,n,a,s){var u=R.T;R.T=null;var f=Y.p;try{Y.p=2,Sf(e,n,a,s)}finally{Y.p=f,R.T=u}}function uS(e,n,a,s){var u=R.T;R.T=null;var f=Y.p;try{Y.p=8,Sf(e,n,a,s)}finally{Y.p=f,R.T=u}}function Sf(e,n,a,s){if(Nl){var u=xf(s);if(u===null)of(e,n,s,Ol,a),xg(e,s);else if(fS(u,e,n,a,s))s.stopPropagation();else if(xg(e,s),n&4&&-1<cS.indexOf(e)){for(;u!==null;){var f=A(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Ct(f.pendingLanes);if(v!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;v;){var N=1<<31-Zt(v);b.entanglements[1]|=N,v&=~N}bi(f),!(Ge&6)&&(_l=ht()+500,lo(0))}}break;case 13:b=sa(f,2),b!==null&&Un(b,f,2),xl(),vf(f,2)}if(f=xf(s),f===null&&of(e,n,s,Ol,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else of(e,n,s,null,a)}}function xf(e){return e=bu(e),Mf(e)}var Ol=null;function Mf(e){if(Ol=null,e=Li(e),e!==null){var n=j(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=xt(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ol=e,null}function Sg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vt()){case dt:return 2;case Ht:return 8;case wt:case zt:return 32;case de:return 268435456;default:return 32}default:return 32}}var yf=!1,Ma=null,ya=null,Ea=null,go=new Map,_o=new Map,Ta=[],cS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xg(e,n){switch(e){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":Ea=null;break;case"pointerover":case"pointerout":go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(n.pointerId)}}function vo(e,n,a,s,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=A(n),n!==null&&vg(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function fS(e,n,a,s,u){switch(n){case"focusin":return Ma=vo(Ma,e,n,a,s,u),!0;case"dragenter":return ya=vo(ya,e,n,a,s,u),!0;case"mouseover":return Ea=vo(Ea,e,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return go.set(f,vo(go.get(f)||null,e,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,_o.set(f,vo(_o.get(f)||null,e,n,a,s,u)),!0}return!1}function Mg(e){var n=Li(e.target);if(n!==null){var a=j(n);if(a!==null){if(n=a.tag,n===13){if(n=xt(a),n!==null){e.blockedOn=n,Po(e.priority,function(){if(a.tag===13){var s=Wn(),u=sa(a,s);u!==null&&Un(u,a,s),vf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=xf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Tu=s,a.target.dispatchEvent(s),Tu=null}else return n=A(a),n!==null&&vg(n),e.blockedOn=a,!1;n.shift()}return!0}function yg(e,n,a){Pl(e)&&a.delete(n)}function hS(){yf=!1,Ma!==null&&Pl(Ma)&&(Ma=null),ya!==null&&Pl(ya)&&(ya=null),Ea!==null&&Pl(Ea)&&(Ea=null),go.forEach(yg),_o.forEach(yg)}function zl(e,n){e.blockedOn===n&&(e.blockedOn=null,yf||(yf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,hS)))}var Bl=null;function Eg(e){Bl!==e&&(Bl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Bl===e&&(Bl=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],u=e[n+2];if(typeof s!="function"){if(Mf(s||a)===null)continue;break}var f=A(a);f!==null&&(e.splice(n,3),n-=3,cc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function So(e){function n(N){return zl(N,e)}Ma!==null&&zl(Ma,e),ya!==null&&zl(ya,e),Ea!==null&&zl(Ea,e),go.forEach(n),_o.forEach(n);for(var a=0;a<Ta.length;a++){var s=Ta[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ta.length&&(a=Ta[0],a.blockedOn===null);)Mg(a),a.blockedOn===null&&Ta.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],v=u[nn]||null;if(typeof f=="function")v||Eg(a);else if(v){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[nn]||null)b=v.formAction;else if(Mf(u)!==null)continue}else b=v.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),Eg(a)}}}function Ef(e){this._internalRoot=e}Fl.prototype.render=Ef.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Wn();gg(a,s,e,n,null,null)},Fl.prototype.unmount=Ef.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&Wr(),gg(e.current,2,null,e,null,null),xl(),n[Ui]=null}};function Fl(e){this._internalRoot=e}Fl.prototype.unstable_scheduleHydration=function(e){if(e){var n=As();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ta.length&&n!==0&&n<Ta[a].priority;a++);Ta.splice(a,0,e),a===0&&Mg(e)}};var Tg=t.version;if(Tg!=="19.0.0")throw Error(r(527,Tg,"19.0.0"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=it(n),e=e!==null?Et(e):null,e=e===null?null:e.stateNode,e};var dS={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:R,findFiberByHostInstance:Li,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Il.isDisabled&&Il.supportsFiber)try{qt=Il.inject(dS),Gt=Il}catch{}}return Mo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",u=Gp,f=Vp,v=kp,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=pg(e,1,!1,null,null,a,s,u,f,v,b,null),e[Ui]=n.current,sf(e.nodeType===8?e.parentNode:e),new Ef(n)},Mo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,u="",f=Gp,v=Vp,b=kp,N=null,k=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&(k=a.formState)),n=pg(e,1,!0,n,a??null,s,u,f,v,b,N,k),n.context=mg(null),a=n.current,s=Wn(),u=da(s),u.callback=null,pa(a,u,s),n.current.lanes=s,Rn(n,s),bi(n),e[Ui]=n.current,sf(e),new Fl(n)},Mo.version="19.0.0",Mo}var Og;function bS(){if(Og)return Af.exports;Og=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Af.exports=TS(),Af.exports}var AS=bS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jh="173",RS=0,Pg=1,CS=2,N_=1,wS=2,$i=3,za=0,Fn=1,ta=2,Oa=0,ds=1,zg=2,Bg=3,Fg=4,DS=5,dr=100,US=101,LS=102,NS=103,OS=104,PS=200,zS=201,BS=202,FS=203,oh=204,lh=205,IS=206,HS=207,GS=208,VS=209,kS=210,XS=211,WS=212,qS=213,YS=214,uh=0,ch=1,fh=2,gs=3,hh=4,dh=5,ph=6,mh=7,Kh=0,ZS=1,jS=2,Pa=0,KS=1,QS=2,JS=3,$S=4,tx=5,ex=6,nx=7,O_=300,_s=301,vs=302,gh=303,_h=304,vu=306,vh=1e3,mr=1001,Sh=1002,Si=1003,ix=1004,Hl=1005,Ri=1006,Df=1007,gr=1008,aa=1009,P_=1010,z_=1011,Co=1012,Qh=1013,_r=1014,ea=1015,wo=1016,Jh=1017,$h=1018,Ss=1020,B_=35902,F_=1021,I_=1022,vi=1023,H_=1024,G_=1025,ps=1026,xs=1027,V_=1028,td=1029,k_=1030,ed=1031,nd=1033,lu=33776,uu=33777,cu=33778,fu=33779,xh=35840,Mh=35841,yh=35842,Eh=35843,Th=36196,bh=37492,Ah=37496,Rh=37808,Ch=37809,wh=37810,Dh=37811,Uh=37812,Lh=37813,Nh=37814,Oh=37815,Ph=37816,zh=37817,Bh=37818,Fh=37819,Ih=37820,Hh=37821,hu=36492,Gh=36494,Vh=36495,X_=36283,kh=36284,Xh=36285,Wh=36286,ax=3200,rx=3201,W_=0,sx=1,Na="",ri="srgb",Ms="srgb-linear",mu="linear",Oe="srgb",Qr=7680,Ig=519,ox=512,lx=513,ux=514,q_=515,cx=516,fx=517,hx=518,dx=519,Hg=35044,Gg="300 es",na=2e3,gu=2001;class Es{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uf=Math.PI/180,qh=180/Math.PI;function Do(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tn[o&255]+Tn[o>>8&255]+Tn[o>>16&255]+Tn[o>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[i&63|128]+Tn[i>>8&255]+"-"+Tn[i>>16&255]+Tn[i>>24&255]+Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]).toLowerCase()}function ve(o,t,i){return Math.max(t,Math.min(i,o))}function px(o,t){return(o%t+t)%t}function Lf(o,t,i){return(1-i)*o+i*t}function yo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Re{constructor(t=0,i=0){Re.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ve(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,i,r,l,c,h,d,m,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p)}set(t,i,r,l,c,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],x=r[7],S=r[2],y=r[5],C=r[8],w=l[0],M=l[3],g=l[6],P=l[1],O=l[4],D=l[7],H=l[2],I=l[5],B=l[8];return c[0]=h*w+d*P+m*H,c[3]=h*M+d*O+m*I,c[6]=h*g+d*D+m*B,c[1]=p*w+_*P+x*H,c[4]=p*M+_*O+x*I,c[7]=p*g+_*D+x*B,c[2]=S*w+y*P+C*H,c[5]=S*M+y*O+C*I,c[8]=S*g+y*D+C*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-r*c*_+r*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=_*h-d*p,S=d*m-_*c,y=p*c-h*m,C=i*x+r*S+l*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/C;return t[0]=x*w,t[1]=(l*p-_*r)*w,t[2]=(d*r-l*h)*w,t[3]=S*w,t[4]=(_*i-l*m)*w,t[5]=(l*c-d*i)*w,t[6]=y*w,t[7]=(r*m-p*i)*w,t[8]=(h*i-r*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Nf.makeScale(t,i)),this}rotate(t){return this.premultiply(Nf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Nf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Nf=new oe;function Y_(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function _u(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function mx(){const o=_u("canvas");return o.style.display="block",o}const Vg={};function fs(o){o in Vg||(Vg[o]=!0,console.warn(o))}function gx(o,t,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function _x(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function vx(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const kg=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xg=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sx(){const o={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Oe&&(l.r=ia(l.r),l.g=ia(l.g),l.b=ia(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Oe&&(l.r=ms(l.r),l.g=ms(l.g),l.b=ms(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Na?mu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ms]:{primaries:t,whitePoint:r,transfer:mu,toXYZ:kg,fromXYZ:Xg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:t,whitePoint:r,transfer:Oe,toXYZ:kg,fromXYZ:Xg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),o}const Ae=Sx();function ia(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ms(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Jr;class xx{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Jr===void 0&&(Jr=_u("canvas")),Jr.width=t.width,Jr.height=t.height;const r=Jr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Jr}return i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=_u("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ia(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ia(i[r]/255)*255):i[r]=ia(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Mx=0;class Z_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Do(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Of(l[h].image)):c.push(Of(l[h]))}else c=Of(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Of(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?xx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yx=0;class In extends Es{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,r=mr,l=mr,c=Ri,h=gr,d=vi,m=aa,p=In.DEFAULT_ANISOTROPY,_=Na){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=Do(),this.name="",this.source=new Z_(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==O_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vh:t.x=t.x-Math.floor(t.x);break;case mr:t.x=t.x<0?0:1;break;case Sh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vh:t.y=t.y-Math.floor(t.y);break;case mr:t.y=t.y<0?0:1;break;case Sh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=O_;In.DEFAULT_ANISOTROPY=1;class Ye{constructor(t=0,i=0,r=0,l=1){Ye.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],_=m[4],x=m[8],S=m[1],y=m[5],C=m[9],w=m[2],M=m[6],g=m[10];if(Math.abs(_-S)<.01&&Math.abs(x-w)<.01&&Math.abs(C-M)<.01){if(Math.abs(_+S)<.1&&Math.abs(x+w)<.1&&Math.abs(C+M)<.1&&Math.abs(p+y+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,D=(y+1)/2,H=(g+1)/2,I=(_+S)/4,B=(x+w)/4,q=(C+M)/4;return O>D&&O>H?O<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(O),l=I/r,c=B/r):D>H?D<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),r=I/l,c=q/l):H<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),r=B/c,l=q/c),this.set(r,l,c,i),this}let P=Math.sqrt((M-C)*(M-C)+(x-w)*(x-w)+(S-_)*(S-_));return Math.abs(P)<.001&&(P=1),this.x=(M-C)/P,this.y=(x-w)/P,this.z=(S-_)/P,this.w=Math.acos((p+y+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this.w=ve(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this.w=ve(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ex extends Es{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Ye(0,0,t,i),this.scissorTest=!1,this.viewport=new Ye(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new In(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let r=0,l=t.textures.length;r<l;r++)this.textures[r]=t.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const i=Object.assign({},t.texture.image);return this.texture.source=new Z_(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vr extends Ex{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class j_ extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tx extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],x=r[l+3];const S=c[h+0],y=c[h+1],C=c[h+2],w=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x;return}if(d===1){t[i+0]=S,t[i+1]=y,t[i+2]=C,t[i+3]=w;return}if(x!==w||m!==S||p!==y||_!==C){let M=1-d;const g=m*S+p*y+_*C+x*w,P=g>=0?1:-1,O=1-g*g;if(O>Number.EPSILON){const H=Math.sqrt(O),I=Math.atan2(H,g*P);M=Math.sin(M*I)/H,d=Math.sin(d*I)/H}const D=d*P;if(m=m*M+S*D,p=p*M+y*D,_=_*M+C*D,x=x*M+w*D,M===1-d){const H=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=H,p*=H,_*=H,x*=H}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],x=c[h],S=c[h+1],y=c[h+2],C=c[h+3];return t[i]=d*C+_*x+m*y-p*S,t[i+1]=m*C+_*S+p*x-d*y,t[i+2]=p*C+_*y+d*S-m*x,t[i+3]=_*C-d*x-m*S-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),x=d(c/2),S=m(r/2),y=m(l/2),C=m(c/2);switch(h){case"XYZ":this._x=S*_*x+p*y*C,this._y=p*y*x-S*_*C,this._z=p*_*C+S*y*x,this._w=p*_*x-S*y*C;break;case"YXZ":this._x=S*_*x+p*y*C,this._y=p*y*x-S*_*C,this._z=p*_*C-S*y*x,this._w=p*_*x+S*y*C;break;case"ZXY":this._x=S*_*x-p*y*C,this._y=p*y*x+S*_*C,this._z=p*_*C+S*y*x,this._w=p*_*x-S*y*C;break;case"ZYX":this._x=S*_*x-p*y*C,this._y=p*y*x+S*_*C,this._z=p*_*C-S*y*x,this._w=p*_*x+S*y*C;break;case"YZX":this._x=S*_*x+p*y*C,this._y=p*y*x+S*_*C,this._z=p*_*C-S*y*x,this._w=p*_*x-S*y*C;break;case"XZY":this._x=S*_*x-p*y*C,this._y=p*y*x-S*_*C,this._z=p*_*C+S*y*x,this._w=p*_*x+S*y*C;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],x=i[10],S=r+d+x;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(r>d&&r>x){const y=2*Math.sqrt(1+r-d-x);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>x){const y=2*Math.sqrt(1+d-r-x);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+x-r-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-r*p,this._z=c*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),x=Math.sin((1-i)*_)/p,S=Math.sin(i*_)/p;return this._w=h*x+this._w*S,this._x=r*x+this._x*S,this._y=l*x+this._y*S,this._z=c*x+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class at{constructor(t=0,i=0,r=0){at.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Wg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Wg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),_=2*(d*i-c*l),x=2*(c*r-h*i);return this.x=i+m*p+h*x-d*_,this.y=r+m*_+d*p-c*x,this.z=l+m*x+c*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Pf.copy(this).projectOnVector(t),this.sub(Pf)}reflect(t){return this.sub(Pf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ve(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pf=new at,Wg=new Uo;class Lo{constructor(t=new at(1/0,1/0,1/0),i=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(di.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(di.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=di.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,di):di.fromBufferAttribute(c,h),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gl.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Gl.copy(r.boundingBox)),Gl.applyMatrix4(t.matrixWorld),this.union(Gl)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Eo),Vl.subVectors(this.max,Eo),$r.subVectors(t.a,Eo),ts.subVectors(t.b,Eo),es.subVectors(t.c,Eo),Aa.subVectors(ts,$r),Ra.subVectors(es,ts),rr.subVectors($r,es);let i=[0,-Aa.z,Aa.y,0,-Ra.z,Ra.y,0,-rr.z,rr.y,Aa.z,0,-Aa.x,Ra.z,0,-Ra.x,rr.z,0,-rr.x,-Aa.y,Aa.x,0,-Ra.y,Ra.x,0,-rr.y,rr.x,0];return!zf(i,$r,ts,es,Vl)||(i=[1,0,0,0,1,0,0,0,1],!zf(i,$r,ts,es,Vl))?!1:(kl.crossVectors(Aa,Ra),i=[kl.x,kl.y,kl.z],zf(i,$r,ts,es,Vl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Zi=[new at,new at,new at,new at,new at,new at,new at,new at],di=new at,Gl=new Lo,$r=new at,ts=new at,es=new at,Aa=new at,Ra=new at,rr=new at,Eo=new at,Vl=new at,kl=new at,sr=new at;function zf(o,t,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){sr.fromArray(o,c);const d=l.x*Math.abs(sr.x)+l.y*Math.abs(sr.y)+l.z*Math.abs(sr.z),m=t.dot(sr),p=i.dot(sr),_=r.dot(sr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const bx=new Lo,To=new at,Bf=new at;class id{constructor(t=new at,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):bx.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;To.subVectors(t,this.center);const i=To.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(To,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(To.copy(t.center).add(Bf)),this.expandByPoint(To.copy(t.center).sub(Bf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ji=new at,Ff=new at,Xl=new at,Ca=new at,If=new at,Wl=new at,Hf=new at;class Ax{constructor(t=new at,i=new at(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ji)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ji.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ji.copy(this.origin).addScaledVector(this.direction,i),ji.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Ff.copy(t).add(i).multiplyScalar(.5),Xl.copy(i).sub(t).normalize(),Ca.copy(this.origin).sub(Ff);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Xl),d=Ca.dot(this.direction),m=-Ca.dot(Xl),p=Ca.lengthSq(),_=Math.abs(1-h*h);let x,S,y,C;if(_>0)if(x=h*m-d,S=h*d-m,C=c*_,x>=0)if(S>=-C)if(S<=C){const w=1/_;x*=w,S*=w,y=x*(x+h*S+2*d)+S*(h*x+S+2*m)+p}else S=c,x=Math.max(0,-(h*S+d)),y=-x*x+S*(S+2*m)+p;else S=-c,x=Math.max(0,-(h*S+d)),y=-x*x+S*(S+2*m)+p;else S<=-C?(x=Math.max(0,-(-h*c+d)),S=x>0?-c:Math.min(Math.max(-c,-m),c),y=-x*x+S*(S+2*m)+p):S<=C?(x=0,S=Math.min(Math.max(-c,-m),c),y=S*(S+2*m)+p):(x=Math.max(0,-(h*c+d)),S=x>0?c:Math.min(Math.max(-c,-m),c),y=-x*x+S*(S+2*m)+p);else S=h>0?-c:c,x=Math.max(0,-(h*S+d)),y=-x*x+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Ff).addScaledVector(Xl,S),y}intersectSphere(t,i){ji.subVectors(t.center,this.origin);const r=ji.dot(this.direction),l=ji.dot(ji)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),_>=0?(c=(t.min.y-S.y)*_,h=(t.max.y-S.y)*_):(c=(t.max.y-S.y)*_,h=(t.min.y-S.y)*_),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-S.z)*x,m=(t.max.z-S.z)*x):(d=(t.max.z-S.z)*x,m=(t.min.z-S.z)*x),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ji)!==null}intersectTriangle(t,i,r,l,c){If.subVectors(i,t),Wl.subVectors(r,t),Hf.crossVectors(If,Wl);let h=this.direction.dot(Hf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ca.subVectors(this.origin,t);const m=d*this.direction.dot(Wl.crossVectors(Ca,Wl));if(m<0)return null;const p=d*this.direction.dot(If.cross(Ca));if(p<0||m+p>h)return null;const _=-d*Ca.dot(Hf);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(t,i,r,l,c,h,d,m,p,_,x,S,y,C,w,M){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p,_,x,S,y,C,w,M)}set(t,i,r,l,c,h,d,m,p,_,x,S,y,C,w,M){const g=this.elements;return g[0]=t,g[4]=i,g[8]=r,g[12]=l,g[1]=c,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=_,g[10]=x,g[14]=S,g[3]=y,g[7]=C,g[11]=w,g[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/ns.setFromMatrixColumn(t,0).length(),c=1/ns.setFromMatrixColumn(t,1).length(),h=1/ns.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const S=h*_,y=h*x,C=d*_,w=d*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=y+C*p,i[5]=S-w*p,i[9]=-d*m,i[2]=w-S*p,i[6]=C+y*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*_,y=m*x,C=p*_,w=p*x;i[0]=S+w*d,i[4]=C*d-y,i[8]=h*p,i[1]=h*x,i[5]=h*_,i[9]=-d,i[2]=y*d-C,i[6]=w+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*_,y=m*x,C=p*_,w=p*x;i[0]=S-w*d,i[4]=-h*x,i[8]=C+y*d,i[1]=y+C*d,i[5]=h*_,i[9]=w-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*_,y=h*x,C=d*_,w=d*x;i[0]=m*_,i[4]=C*p-y,i[8]=S*p+w,i[1]=m*x,i[5]=w*p+S,i[9]=y*p-C,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,y=h*p,C=d*m,w=d*p;i[0]=m*_,i[4]=w-S*x,i[8]=C*x+y,i[1]=x,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*x+C,i[10]=S-w*x}else if(t.order==="XZY"){const S=h*m,y=h*p,C=d*m,w=d*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=S*x+w,i[5]=h*_,i[9]=y*x-C,i[2]=C*x-y,i[6]=d*_,i[10]=w*x+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rx,t,Cx)}lookAt(t,i,r){const l=this.elements;return qn.subVectors(t,i),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),wa.crossVectors(r,qn),wa.lengthSq()===0&&(Math.abs(r.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),wa.crossVectors(r,qn)),wa.normalize(),ql.crossVectors(qn,wa),l[0]=wa.x,l[4]=ql.x,l[8]=qn.x,l[1]=wa.y,l[5]=ql.y,l[9]=qn.y,l[2]=wa.z,l[6]=ql.z,l[10]=qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],x=r[5],S=r[9],y=r[13],C=r[2],w=r[6],M=r[10],g=r[14],P=r[3],O=r[7],D=r[11],H=r[15],I=l[0],B=l[4],q=l[8],R=l[12],T=l[1],F=l[5],rt=l[9],et=l[13],ut=l[2],ft=l[6],V=l[10],st=l[14],j=l[3],xt=l[7],L=l[11],it=l[15];return c[0]=h*I+d*T+m*ut+p*j,c[4]=h*B+d*F+m*ft+p*xt,c[8]=h*q+d*rt+m*V+p*L,c[12]=h*R+d*et+m*st+p*it,c[1]=_*I+x*T+S*ut+y*j,c[5]=_*B+x*F+S*ft+y*xt,c[9]=_*q+x*rt+S*V+y*L,c[13]=_*R+x*et+S*st+y*it,c[2]=C*I+w*T+M*ut+g*j,c[6]=C*B+w*F+M*ft+g*xt,c[10]=C*q+w*rt+M*V+g*L,c[14]=C*R+w*et+M*st+g*it,c[3]=P*I+O*T+D*ut+H*j,c[7]=P*B+O*F+D*ft+H*xt,c[11]=P*q+O*rt+D*V+H*L,c[15]=P*R+O*et+D*st+H*it,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],x=t[6],S=t[10],y=t[14],C=t[3],w=t[7],M=t[11],g=t[15];return C*(+c*m*x-l*p*x-c*d*S+r*p*S+l*d*y-r*m*y)+w*(+i*m*y-i*p*S+c*h*S-l*h*y+l*p*_-c*m*_)+M*(+i*p*x-i*d*y-c*h*x+r*h*y+c*d*_-r*p*_)+g*(-l*d*_-i*m*x+i*d*S+l*h*x-r*h*S+r*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=t[9],S=t[10],y=t[11],C=t[12],w=t[13],M=t[14],g=t[15],P=x*M*p-w*S*p+w*m*y-d*M*y-x*m*g+d*S*g,O=C*S*p-_*M*p-C*m*y+h*M*y+_*m*g-h*S*g,D=_*w*p-C*x*p+C*d*y-h*w*y-_*d*g+h*x*g,H=C*x*m-_*w*m-C*d*S+h*w*S+_*d*M-h*x*M,I=i*P+r*O+l*D+c*H;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/I;return t[0]=P*B,t[1]=(w*S*c-x*M*c-w*l*y+r*M*y+x*l*g-r*S*g)*B,t[2]=(d*M*c-w*m*c+w*l*p-r*M*p-d*l*g+r*m*g)*B,t[3]=(x*m*c-d*S*c-x*l*p+r*S*p+d*l*y-r*m*y)*B,t[4]=O*B,t[5]=(_*M*c-C*S*c+C*l*y-i*M*y-_*l*g+i*S*g)*B,t[6]=(C*m*c-h*M*c-C*l*p+i*M*p+h*l*g-i*m*g)*B,t[7]=(h*S*c-_*m*c+_*l*p-i*S*p-h*l*y+i*m*y)*B,t[8]=D*B,t[9]=(C*x*c-_*w*c-C*r*y+i*w*y+_*r*g-i*x*g)*B,t[10]=(h*w*c-C*d*c+C*r*p-i*w*p-h*r*g+i*d*g)*B,t[11]=(_*d*c-h*x*c-_*r*p+i*x*p+h*r*y-i*d*y)*B,t[12]=H*B,t[13]=(_*w*l-C*x*l+C*r*S-i*w*S-_*r*M+i*x*M)*B,t[14]=(C*d*l-h*w*l-C*r*m+i*w*m+h*r*M-i*d*M)*B,t[15]=(h*x*l-_*d*l+_*r*m-i*x*m-h*r*S+i*d*S)*B,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,m=t.z,p=c*h,_=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,x=d+d,S=c*p,y=c*_,C=c*x,w=h*_,M=h*x,g=d*x,P=m*p,O=m*_,D=m*x,H=r.x,I=r.y,B=r.z;return l[0]=(1-(w+g))*H,l[1]=(y+D)*H,l[2]=(C-O)*H,l[3]=0,l[4]=(y-D)*I,l[5]=(1-(S+g))*I,l[6]=(M+P)*I,l[7]=0,l[8]=(C+O)*B,l[9]=(M-P)*B,l[10]=(1-(S+w))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=ns.set(l[0],l[1],l[2]).length();const h=ns.set(l[4],l[5],l[6]).length(),d=ns.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],pi.copy(this);const p=1/c,_=1/h,x=1/d;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=_,pi.elements[5]*=_,pi.elements[6]*=_,pi.elements[8]*=x,pi.elements[9]*=x,pi.elements[10]*=x,i.setFromRotationMatrix(pi),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=na){const m=this.elements,p=2*c/(i-t),_=2*c/(r-l),x=(i+t)/(i-t),S=(r+l)/(r-l);let y,C;if(d===na)y=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===gu)y=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=_,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=na){const m=this.elements,p=1/(i-t),_=1/(r-l),x=1/(h-c),S=(i+t)*p,y=(r+l)*_;let C,w;if(d===na)C=(h+c)*x,w=-2*x;else if(d===gu)C=c*x,w=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=w,m[14]=-C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const ns=new at,pi=new Ve,Rx=new at(0,0,0),Cx=new at(1,1,1),wa=new at,ql=new at,qn=new at,qg=new Ve,Yg=new Uo;class Di{constructor(t=0,i=0,r=0,l=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],x=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(ve(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ve(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return qg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qg,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Yg.setFromEuler(this),this.setFromQuaternion(Yg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class K_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wx=0;const Zg=new at,is=new Uo,Ki=new Ve,Yl=new at,bo=new at,Dx=new at,Ux=new Uo,jg=new at(1,0,0),Kg=new at(0,1,0),Qg=new at(0,0,1),Jg={type:"added"},Lx={type:"removed"},as={type:"childadded",child:null},Gf={type:"childremoved",child:null};class $e extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=Do(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const t=new at,i=new Di,r=new Uo,l=new at(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ve},normalMatrix:{value:new oe}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new K_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return is.setFromAxisAngle(t,i),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,i){return is.setFromAxisAngle(t,i),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(jg,t)}rotateY(t){return this.rotateOnAxis(Kg,t)}rotateZ(t){return this.rotateOnAxis(Qg,t)}translateOnAxis(t,i){return Zg.copy(t).applyQuaternion(this.quaternion),this.position.add(Zg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(jg,t)}translateY(t){return this.translateOnAxis(Kg,t)}translateZ(t){return this.translateOnAxis(Qg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Yl.copy(t):Yl.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(bo,Yl,this.up):Ki.lookAt(Yl,bo,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),is.setFromRotationMatrix(Ki),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jg),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Lx),Gf.child=t,this.dispatchEvent(Gf),Gf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jg),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,t,Dx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,Ux,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),x=h(t.shapes),S=h(t.skeletons),y=h(t.animations),C=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),C.length>0&&(r.nodes=C)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}$e.DEFAULT_UP=new at(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new at,Qi=new at,Vf=new at,Ji=new at,rs=new at,ss=new at,$g=new at,kf=new at,Xf=new at,Wf=new at,qf=new Ye,Yf=new Ye,Zf=new Ye;class _i{constructor(t=new at,i=new at,r=new at){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),mi.subVectors(t,i),l.cross(mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){mi.subVectors(l,i),Qi.subVectors(r,i),Vf.subVectors(t,i);const h=mi.dot(mi),d=mi.dot(Qi),m=mi.dot(Vf),p=Qi.dot(Qi),_=Qi.dot(Vf),x=h*p-d*d;if(x===0)return c.set(0,0,0),null;const S=1/x,y=(p*m-d*_)*S,C=(h*_-d*m)*S;return c.set(1-y-C,C,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,i,r,l,c,h,d,m){return this.getBarycoord(t,i,r,l,Ji)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ji.x),m.addScaledVector(h,Ji.y),m.addScaledVector(d,Ji.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return qf.setScalar(0),Yf.setScalar(0),Zf.setScalar(0),qf.fromBufferAttribute(t,i),Yf.fromBufferAttribute(t,r),Zf.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(qf,c.x),h.addScaledVector(Yf,c.y),h.addScaledVector(Zf,c.z),h}static isFrontFacing(t,i,r,l){return mi.subVectors(r,i),Qi.subVectors(t,i),mi.cross(Qi).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),mi.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return _i.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;rs.subVectors(l,r),ss.subVectors(c,r),kf.subVectors(t,r);const m=rs.dot(kf),p=ss.dot(kf);if(m<=0&&p<=0)return i.copy(r);Xf.subVectors(t,l);const _=rs.dot(Xf),x=ss.dot(Xf);if(_>=0&&x<=_)return i.copy(l);const S=m*x-_*p;if(S<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(rs,h);Wf.subVectors(t,c);const y=rs.dot(Wf),C=ss.dot(Wf);if(C>=0&&y<=C)return i.copy(c);const w=y*p-m*C;if(w<=0&&p>=0&&C<=0)return d=p/(p-C),i.copy(r).addScaledVector(ss,d);const M=_*C-y*x;if(M<=0&&x-_>=0&&y-C>=0)return $g.subVectors(c,l),d=(x-_)/(x-_+(y-C)),i.copy(l).addScaledVector($g,d);const g=1/(M+w+S);return h=w*g,d=S*g,i.copy(r).addScaledVector(rs,h).addScaledVector(ss,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Q_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Da={h:0,s:0,l:0},Zl={h:0,s:0,l:0};function jf(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class xe{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ri){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Ae.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ae.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Ae.workingColorSpace){if(t=px(t,1),i=ve(i,0,1),r=ve(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=jf(h,c,t+1/3),this.g=jf(h,c,t),this.b=jf(h,c,t-1/3)}return Ae.toWorkingColorSpace(this,l),this}setStyle(t,i=ri){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ri){const r=Q_[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ia(t.r),this.g=ia(t.g),this.b=ia(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ri){return Ae.fromWorkingColorSpace(bn.copy(this),t),Math.round(ve(bn.r*255,0,255))*65536+Math.round(ve(bn.g*255,0,255))*256+Math.round(ve(bn.b*255,0,255))}getHexString(t=ri){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ae.workingColorSpace){Ae.fromWorkingColorSpace(bn.copy(this),i);const r=bn.r,l=bn.g,c=bn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=_<=.5?x/(h+d):x/(2-h-d),h){case r:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-r)/x+2;break;case c:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(bn.copy(this),i),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=ri){Ae.fromWorkingColorSpace(bn.copy(this),t);const i=bn.r,r=bn.g,l=bn.b;return t!==ri?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Da),this.setHSL(Da.h+t,Da.s+i,Da.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Da),t.getHSL(Zl);const r=Lf(Da.h,Zl.h,i),l=Lf(Da.s,Zl.s,i),c=Lf(Da.l,Zl.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new xe;xe.NAMES=Q_;let Nx=0;class No extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=Do(),this.name="",this.type="Material",this.blending=ds,this.side=za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=lh,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(r.blending=this.blending),this.side!==za&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==oh&&(r.blendSrc=this.blendSrc),this.blendDst!==lh&&(r.blendDst=this.blendDst),this.blendEquation!==dr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ig&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class J_ extends No{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Je=new at,jl=new Re;let Ox=0;class Ci{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ox++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Hg,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)jl.fromBufferAttribute(this,i),jl.applyMatrix3(t),this.setXY(i,jl.x,jl.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.applyMatrix3(t),this.setXYZ(i,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.applyMatrix4(t),this.setXYZ(i,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.applyNormalMatrix(t),this.setXYZ(i,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.transformDirection(t),this.setXYZ(i,Je.x,Je.y,Je.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=yo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Bn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=yo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=yo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=yo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=yo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array),c=Bn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hg&&(t.usage=this.usage),t}}class $_ extends Ci{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class tv extends Ci{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class wi extends Ci{constructor(t,i,r){super(new Float32Array(t),i,r)}}let Px=0;const ai=new Ve,Kf=new $e,os=new at,Yn=new Lo,Ao=new Lo,pn=new at;class Fa extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=Do(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Y_(t)?tv:$_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new oe().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ai.makeRotationFromQuaternion(t),this.applyMatrix4(ai),this}rotateX(t){return ai.makeRotationX(t),this.applyMatrix4(ai),this}rotateY(t){return ai.makeRotationY(t),this.applyMatrix4(ai),this}rotateZ(t){return ai.makeRotationZ(t),this.applyMatrix4(ai),this}translate(t,i,r){return ai.makeTranslation(t,i,r),this.applyMatrix4(ai),this}scale(t,i,r){return ai.makeScale(t,i,r),this.applyMatrix4(ai),this}lookAt(t){return Kf.lookAt(t),Kf.updateMatrix(),this.applyMatrix4(Kf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new wi(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Yn.setFromBufferAttribute(c),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new id);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(t){const r=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Ao.setFromBufferAttribute(d),this.morphTargetsRelative?(pn.addVectors(Yn.min,Ao.min),Yn.expandByPoint(pn),pn.addVectors(Yn.max,Ao.max),Yn.expandByPoint(pn)):(Yn.expandByPoint(Ao.min),Yn.expandByPoint(Ao.max))}Yn.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)pn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(pn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)pn.fromBufferAttribute(d,p),m&&(os.fromBufferAttribute(t,p),pn.add(os)),l=Math.max(l,r.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let q=0;q<r.count;q++)d[q]=new at,m[q]=new at;const p=new at,_=new at,x=new at,S=new Re,y=new Re,C=new Re,w=new at,M=new at;function g(q,R,T){p.fromBufferAttribute(r,q),_.fromBufferAttribute(r,R),x.fromBufferAttribute(r,T),S.fromBufferAttribute(c,q),y.fromBufferAttribute(c,R),C.fromBufferAttribute(c,T),_.sub(p),x.sub(p),y.sub(S),C.sub(S);const F=1/(y.x*C.y-C.x*y.y);isFinite(F)&&(w.copy(_).multiplyScalar(C.y).addScaledVector(x,-y.y).multiplyScalar(F),M.copy(x).multiplyScalar(y.x).addScaledVector(_,-C.x).multiplyScalar(F),d[q].add(w),d[R].add(w),d[T].add(w),m[q].add(M),m[R].add(M),m[T].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let q=0,R=P.length;q<R;++q){const T=P[q],F=T.start,rt=T.count;for(let et=F,ut=F+rt;et<ut;et+=3)g(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const O=new at,D=new at,H=new at,I=new at;function B(q){H.fromBufferAttribute(l,q),I.copy(H);const R=d[q];O.copy(R),O.sub(H.multiplyScalar(H.dot(R))).normalize(),D.crossVectors(I,R);const F=D.dot(m[q])<0?-1:1;h.setXYZW(q,O.x,O.y,O.z,F)}for(let q=0,R=P.length;q<R;++q){const T=P[q],F=T.start,rt=T.count;for(let et=F,ut=F+rt;et<ut;et+=3)B(t.getX(et+0)),B(t.getX(et+1)),B(t.getX(et+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ci(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new at,c=new at,h=new at,d=new at,m=new at,p=new at,_=new at,x=new at;if(t)for(let S=0,y=t.count;S<y;S+=3){const C=t.getX(S+0),w=t.getX(S+1),M=t.getX(S+2);l.fromBufferAttribute(i,C),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),d.fromBufferAttribute(r,C),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,M),d.add(_),m.add(_),p.add(_),r.setXYZ(C,d.x,d.y,d.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)pn.fromBufferAttribute(t,i),pn.normalize(),t.setXYZ(i,pn.x,pn.y,pn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,x=d.normalized,S=new p.constructor(m.length*_);let y=0,C=0;for(let w=0,M=m.length;w<M;w++){d.isInterleavedBufferAttribute?y=m[w]*d.data.stride+d.offset:y=m[w]*_;for(let g=0;g<_;g++)S[C++]=p[y++]}return new Ci(S,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Fa,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,x=p.length;_<x;_++){const S=p[_],y=t(S,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,S=p.length;x<S;x++){const y=p[x];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],x=c[p];for(let S=0,y=x.length;S<y;S++)_.push(x[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const t_=new Ve,or=new Ax,Kl=new id,e_=new at,Ql=new at,Jl=new at,$l=new at,Qf=new at,tu=new at,n_=new at,eu=new at;class xn extends $e{constructor(t=new Fa,i=new J_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){tu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],x=c[m];_!==0&&(Qf.fromBufferAttribute(x,t),h?tu.addScaledVector(Qf,_):tu.addScaledVector(Qf.sub(i),_))}i.add(tu)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Kl.copy(r.boundingSphere),Kl.applyMatrix4(c),or.copy(t.ray).recast(t.near),!(Kl.containsPoint(or.origin)===!1&&(or.intersectSphere(Kl,e_)===null||or.origin.distanceToSquared(e_)>(t.far-t.near)**2))&&(t_.copy(c).invert(),or.copy(t.ray).applyMatrix4(t_),!(r.boundingBox!==null&&or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,or)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,S=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let C=0,w=S.length;C<w;C++){const M=S[C],g=h[M.materialIndex],P=Math.max(M.start,y.start),O=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let D=P,H=O;D<H;D+=3){const I=d.getX(D),B=d.getX(D+1),q=d.getX(D+2);l=nu(this,g,t,r,p,_,x,I,B,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const C=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let M=C,g=w;M<g;M+=3){const P=d.getX(M),O=d.getX(M+1),D=d.getX(M+2);l=nu(this,h,t,r,p,_,x,P,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let C=0,w=S.length;C<w;C++){const M=S[C],g=h[M.materialIndex],P=Math.max(M.start,y.start),O=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let D=P,H=O;D<H;D+=3){const I=D,B=D+1,q=D+2;l=nu(this,g,t,r,p,_,x,I,B,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const C=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let M=C,g=w;M<g;M+=3){const P=M,O=M+1,D=M+2;l=nu(this,h,t,r,p,_,x,P,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function zx(o,t,i,r,l,c,h,d){let m;if(t.side===Fn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,t.side===za,d),m===null)return null;eu.copy(d),eu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(eu);return p<i.near||p>i.far?null:{distance:p,point:eu.clone(),object:o}}function nu(o,t,i,r,l,c,h,d,m,p){o.getVertexPosition(d,Ql),o.getVertexPosition(m,Jl),o.getVertexPosition(p,$l);const _=zx(o,t,i,r,Ql,Jl,$l,n_);if(_){const x=new at;_i.getBarycoord(n_,Ql,Jl,$l,x),l&&(_.uv=_i.getInterpolatedAttribute(l,d,m,p,x,new Re)),c&&(_.uv1=_i.getInterpolatedAttribute(c,d,m,p,x,new Re)),h&&(_.normal=_i.getInterpolatedAttribute(h,d,m,p,x,new at),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new at,materialIndex:0};_i.getNormal(Ql,Jl,$l,S.normal),_.face=S,_.barycoord=x}return _}class si extends Fa{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],x=[];let S=0,y=0;C("z","y","x",-1,-1,r,i,t,h,c,0),C("z","y","x",1,-1,r,i,-t,h,c,1),C("x","z","y",1,1,t,r,i,l,h,2),C("x","z","y",1,-1,t,r,-i,l,h,3),C("x","y","z",1,-1,t,i,r,l,c,4),C("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new wi(p,3)),this.setAttribute("normal",new wi(_,3)),this.setAttribute("uv",new wi(x,2));function C(w,M,g,P,O,D,H,I,B,q,R){const T=D/B,F=H/q,rt=D/2,et=H/2,ut=I/2,ft=B+1,V=q+1;let st=0,j=0;const xt=new at;for(let L=0;L<V;L++){const it=L*F-et;for(let Et=0;Et<ft;Et++){const At=Et*T-rt;xt[w]=At*P,xt[M]=it*O,xt[g]=ut,p.push(xt.x,xt.y,xt.z),xt[w]=0,xt[M]=0,xt[g]=I>0?1:-1,_.push(xt.x,xt.y,xt.z),x.push(Et/B),x.push(1-L/q),st+=1}}for(let L=0;L<q;L++)for(let it=0;it<B;it++){const Et=S+it+ft*L,At=S+it+ft*(L+1),Y=S+(it+1)+ft*(L+1),pt=S+(it+1)+ft*L;m.push(Et,At,pt),m.push(At,Y,pt),j+=6}d.addGroup(y,j,R),y+=j,S+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ys(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Ln(o){const t={};for(let i=0;i<o.length;i++){const r=ys(o[i]);for(const l in r)t[l]=r[l]}return t}function Bx(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function ev(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const Fx={clone:ys,merge:Ln};var Ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ba extends No{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ix,this.fragmentShader=Hx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=Bx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class nv extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=na}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ua=new at,i_=new Re,a_=new Re;class oi extends nv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=qh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Uf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qh*2*Math.atan(Math.tan(Uf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ua.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ua.x,Ua.y).multiplyScalar(-t/Ua.z),Ua.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ua.x,Ua.y).multiplyScalar(-t/Ua.z)}getViewSize(t,i){return this.getViewBounds(t,i_,a_),i.subVectors(a_,i_)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Uf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ls=-90,us=1;class Gx extends $e{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oi(ls,us,t,i);l.layers=this.layers,this.add(l);const c=new oi(ls,us,t,i);c.layers=this.layers,this.add(c);const h=new oi(ls,us,t,i);h.layers=this.layers,this.add(h);const d=new oi(ls,us,t,i);d.layers=this.layers,this.add(d);const m=new oi(ls,us,t,i);m.layers=this.layers,this.add(m);const p=new oi(ls,us,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===na)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===gu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,x=t.getRenderTarget(),S=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),C=t.xr.enabled;t.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=w,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(x,S,y),t.xr.enabled=C,r.texture.needsPMREMUpdate=!0}}class iv extends In{constructor(t,i,r,l,c,h,d,m,p,_){t=t!==void 0?t:[],i=i!==void 0?i:_s,super(t,i,r,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vx extends vr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new iv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ri}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new si(5,5,5),c=new Ba({name:"CubemapFromEquirect",uniforms:ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Oa});c.uniforms.tEquirect.value=i;const h=new xn(l,c),d=i.minFilter;return i.minFilter===gr&&(i.minFilter=Ri),new Gx(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,r,l){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class iu extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kx={type:"move"};class Jf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new iu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new iu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new iu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,r),g=this._getHandJoint(p,w);M!==null&&(g.matrix.fromArray(M.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=M.radius),g.visible=M!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],S=_.position.distanceTo(x.position),y=.02,C=.005;p.inputState.pinching&&S>y+C?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=y-C&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(kx)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new iu;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class ad{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new xe(t),this.near=i,this.far=r}clone(){return new ad(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Xx extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const $f=new at,Wx=new at,qx=new oe;class fr{constructor(t=new at(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=$f.subVectors(r,i).cross(Wx.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta($f),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||qx.getNormalMatrix(t),l=this.coplanarPoint($f).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new id,au=new at;class rd{constructor(t=new fr,i=new fr,r=new fr,l=new fr,c=new fr,h=new fr){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=na){const r=this.planes,l=t.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],_=l[5],x=l[6],S=l[7],y=l[8],C=l[9],w=l[10],M=l[11],g=l[12],P=l[13],O=l[14],D=l[15];if(r[0].setComponents(m-c,S-p,M-y,D-g).normalize(),r[1].setComponents(m+c,S+p,M+y,D+g).normalize(),r[2].setComponents(m+h,S+_,M+C,D+P).normalize(),r[3].setComponents(m-h,S-_,M-C,D-P).normalize(),r[4].setComponents(m-d,S-x,M-w,D-O).normalize(),i===na)r[5].setComponents(m+d,S+x,M+w,D+O).normalize();else if(i===gu)r[5].setComponents(d,x,w,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),lr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(t){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(t.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(au.x=l.normal.x>0?t.max.x:t.min.x,au.y=l.normal.y>0?t.max.y:t.min.y,au.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(au)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class av extends In{constructor(t,i,r,l,c,h,d,m,p,_=ps){if(_!==ps&&_!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===ps&&(r=_r),r===void 0&&_===xs&&(r=Ss),super(null,l,c,h,d,m,_,r,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Si,this.minFilter=m!==void 0?m:Si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class sd extends Fa{constructor(t=1,i=1,r=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const _=[],x=[],S=[],y=[];let C=0;const w=[],M=r/2;let g=0;P(),h===!1&&(t>0&&O(!0),i>0&&O(!1)),this.setIndex(_),this.setAttribute("position",new wi(x,3)),this.setAttribute("normal",new wi(S,3)),this.setAttribute("uv",new wi(y,2));function P(){const D=new at,H=new at;let I=0;const B=(i-t)/r;for(let q=0;q<=c;q++){const R=[],T=q/c,F=T*(i-t)+t;for(let rt=0;rt<=l;rt++){const et=rt/l,ut=et*m+d,ft=Math.sin(ut),V=Math.cos(ut);H.x=F*ft,H.y=-T*r+M,H.z=F*V,x.push(H.x,H.y,H.z),D.set(ft,B,V).normalize(),S.push(D.x,D.y,D.z),y.push(et,1-T),R.push(C++)}w.push(R)}for(let q=0;q<l;q++)for(let R=0;R<c;R++){const T=w[R][q],F=w[R+1][q],rt=w[R+1][q+1],et=w[R][q+1];(t>0||R!==0)&&(_.push(T,F,et),I+=3),(i>0||R!==c-1)&&(_.push(F,rt,et),I+=3)}p.addGroup(g,I,0),g+=I}function O(D){const H=C,I=new Re,B=new at;let q=0;const R=D===!0?t:i,T=D===!0?1:-1;for(let rt=1;rt<=l;rt++)x.push(0,M*T,0),S.push(0,T,0),y.push(.5,.5),C++;const F=C;for(let rt=0;rt<=l;rt++){const ut=rt/l*m+d,ft=Math.cos(ut),V=Math.sin(ut);B.x=R*V,B.y=M*T,B.z=R*ft,x.push(B.x,B.y,B.z),S.push(0,T,0),I.x=ft*.5+.5,I.y=V*.5*T+.5,y.push(I.x,I.y),C++}for(let rt=0;rt<l;rt++){const et=H+rt,ut=F+rt;D===!0?_.push(ut,ut+1,et):_.push(ut+1,ut,et),q+=3}p.addGroup(g,q,D===!0?1:2),g+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sd(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Su extends Fa{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,x=t/d,S=i/m,y=[],C=[],w=[],M=[];for(let g=0;g<_;g++){const P=g*S-h;for(let O=0;O<p;O++){const D=O*x-c;C.push(D,-P,0),w.push(0,0,1),M.push(O/d),M.push(1-g/m)}}for(let g=0;g<m;g++)for(let P=0;P<d;P++){const O=P+p*g,D=P+p*(g+1),H=P+1+p*(g+1),I=P+1+p*g;y.push(O,D,I),y.push(D,H,I)}this.setIndex(y),this.setAttribute("position",new wi(C,3)),this.setAttribute("normal",new wi(w,3)),this.setAttribute("uv",new wi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Su(t.width,t.height,t.widthSegments,t.heightSegments)}}class La extends No{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xe(16777215),this.specular=new xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=W_,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yx extends No{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ax,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zx extends No{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class rv extends $e{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class jx extends rv{constructor(t,i,r){super(t,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const th=new Ve,r_=new at,s_=new at;class Kx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rd,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;r_.setFromMatrixPosition(t.matrixWorld),i.position.copy(r_),s_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(s_),i.updateMatrixWorld(),th.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(th),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(th)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class sv extends nv{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Qx extends Kx{constructor(){super(new sv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jx extends rv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new Qx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $x extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function o_(o,t,i,r){const l=tM(r);switch(i){case F_:return o*t;case H_:return o*t;case G_:return o*t*2;case V_:return o*t/l.components*l.byteLength;case td:return o*t/l.components*l.byteLength;case k_:return o*t*2/l.components*l.byteLength;case ed:return o*t*2/l.components*l.byteLength;case I_:return o*t*3/l.components*l.byteLength;case vi:return o*t*4/l.components*l.byteLength;case nd:return o*t*4/l.components*l.byteLength;case lu:case uu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case cu:case fu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Mh:case Eh:return Math.max(o,16)*Math.max(t,8)/4;case xh:case yh:return Math.max(o,8)*Math.max(t,8)/2;case Th:case bh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ah:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Rh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ch:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case wh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Dh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Uh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Lh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Nh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Oh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Ph:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case zh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Bh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Fh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Ih:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Hh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case hu:case Gh:case Vh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case X_:case kh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Xh:case Wh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function tM(o){switch(o){case aa:case P_:return{byteLength:1,components:1};case Co:case z_:case wo:return{byteLength:2,components:1};case Jh:case $h:return{byteLength:2,components:4};case _r:case Qh:case ea:return{byteLength:4,components:1};case B_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ov(){let o=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function eM(o){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,x=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,m,p){const _=m.array,x=m.updateRanges;if(o.bindBuffer(p,d),x.length===0)o.bufferSubData(p,0,_);else{x.sort((y,C)=>y.start-C.start);let S=0;for(let y=1;y<x.length;y++){const C=x[S],w=x[y];w.start<=C.start+C.count+1?C.count=Math.max(C.count,w.start+w.count-C.start):(++S,x[S]=w)}x.length=S+1;for(let y=0,C=x.length;y<C;y++){const w=x[y];o.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var nM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,aM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,AM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,RM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,CM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LM="gl_FragColor = linearToOutputTexel( gl_FragColor );",NM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,BM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,IM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,XM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ZM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$M=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ty=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ey=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ny=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ay=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ry=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ly=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,py=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,my=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_y=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,My=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ty=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,by=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ay=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ry=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Uy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ly=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ny=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Oy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Py=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,By=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Iy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ky=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ky=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_E=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ME=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,EE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,AE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,DE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,NE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:nM,alphahash_pars_fragment:iM,alphamap_fragment:aM,alphamap_pars_fragment:rM,alphatest_fragment:sM,alphatest_pars_fragment:oM,aomap_fragment:lM,aomap_pars_fragment:uM,batching_pars_vertex:cM,batching_vertex:fM,begin_vertex:hM,beginnormal_vertex:dM,bsdfs:pM,iridescence_fragment:mM,bumpmap_pars_fragment:gM,clipping_planes_fragment:_M,clipping_planes_pars_fragment:vM,clipping_planes_pars_vertex:SM,clipping_planes_vertex:xM,color_fragment:MM,color_pars_fragment:yM,color_pars_vertex:EM,color_vertex:TM,common:bM,cube_uv_reflection_fragment:AM,defaultnormal_vertex:RM,displacementmap_pars_vertex:CM,displacementmap_vertex:wM,emissivemap_fragment:DM,emissivemap_pars_fragment:UM,colorspace_fragment:LM,colorspace_pars_fragment:NM,envmap_fragment:OM,envmap_common_pars_fragment:PM,envmap_pars_fragment:zM,envmap_pars_vertex:BM,envmap_physical_pars_fragment:ZM,envmap_vertex:FM,fog_vertex:IM,fog_pars_vertex:HM,fog_fragment:GM,fog_pars_fragment:VM,gradientmap_pars_fragment:kM,lightmap_pars_fragment:XM,lights_lambert_fragment:WM,lights_lambert_pars_fragment:qM,lights_pars_begin:YM,lights_toon_fragment:jM,lights_toon_pars_fragment:KM,lights_phong_fragment:QM,lights_phong_pars_fragment:JM,lights_physical_fragment:$M,lights_physical_pars_fragment:ty,lights_fragment_begin:ey,lights_fragment_maps:ny,lights_fragment_end:iy,logdepthbuf_fragment:ay,logdepthbuf_pars_fragment:ry,logdepthbuf_pars_vertex:sy,logdepthbuf_vertex:oy,map_fragment:ly,map_pars_fragment:uy,map_particle_fragment:cy,map_particle_pars_fragment:fy,metalnessmap_fragment:hy,metalnessmap_pars_fragment:dy,morphinstance_vertex:py,morphcolor_vertex:my,morphnormal_vertex:gy,morphtarget_pars_vertex:_y,morphtarget_vertex:vy,normal_fragment_begin:Sy,normal_fragment_maps:xy,normal_pars_fragment:My,normal_pars_vertex:yy,normal_vertex:Ey,normalmap_pars_fragment:Ty,clearcoat_normal_fragment_begin:by,clearcoat_normal_fragment_maps:Ay,clearcoat_pars_fragment:Ry,iridescence_pars_fragment:Cy,opaque_fragment:wy,packing:Dy,premultiplied_alpha_fragment:Uy,project_vertex:Ly,dithering_fragment:Ny,dithering_pars_fragment:Oy,roughnessmap_fragment:Py,roughnessmap_pars_fragment:zy,shadowmap_pars_fragment:By,shadowmap_pars_vertex:Fy,shadowmap_vertex:Iy,shadowmask_pars_fragment:Hy,skinbase_vertex:Gy,skinning_pars_vertex:Vy,skinning_vertex:ky,skinnormal_vertex:Xy,specularmap_fragment:Wy,specularmap_pars_fragment:qy,tonemapping_fragment:Yy,tonemapping_pars_fragment:Zy,transmission_fragment:jy,transmission_pars_fragment:Ky,uv_pars_fragment:Qy,uv_pars_vertex:Jy,uv_vertex:$y,worldpos_vertex:tE,background_vert:eE,background_frag:nE,backgroundCube_vert:iE,backgroundCube_frag:aE,cube_vert:rE,cube_frag:sE,depth_vert:oE,depth_frag:lE,distanceRGBA_vert:uE,distanceRGBA_frag:cE,equirect_vert:fE,equirect_frag:hE,linedashed_vert:dE,linedashed_frag:pE,meshbasic_vert:mE,meshbasic_frag:gE,meshlambert_vert:_E,meshlambert_frag:vE,meshmatcap_vert:SE,meshmatcap_frag:xE,meshnormal_vert:ME,meshnormal_frag:yE,meshphong_vert:EE,meshphong_frag:TE,meshphysical_vert:bE,meshphysical_frag:AE,meshtoon_vert:RE,meshtoon_frag:CE,points_vert:wE,points_frag:DE,shadow_vert:UE,shadow_frag:LE,sprite_vert:NE,sprite_frag:OE},Ut={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ai={basic:{uniforms:Ln([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Ln([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new xe(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Ln([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Ln([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Ln([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new xe(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Ln([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Ln([Ut.points,Ut.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Ln([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Ln([Ut.common,Ut.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Ln([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Ln([Ut.sprite,Ut.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Ln([Ut.common,Ut.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Ln([Ut.lights,Ut.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Ai.physical={uniforms:Ln([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const ru={r:0,b:0,g:0},ur=new Di,PE=new Ve;function zE(o,t,i,r,l,c,h){const d=new xe(0);let m=c===!0?0:1,p,_,x=null,S=0,y=null;function C(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:t).get(D)),D}function w(O){let D=!1;const H=C(O);H===null?g(d,m):H&&H.isColor&&(g(H,1),D=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(O,D){const H=C(D);H&&(H.isCubeTexture||H.mapping===vu)?(_===void 0&&(_=new xn(new si(1,1,1),new Ba({name:"BackgroundCubeMaterial",uniforms:ys(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(I,B,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),ur.copy(D.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),_.material.uniforms.envMap.value=H,_.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(PE.makeRotationFromEuler(ur)),_.material.toneMapped=Ae.getTransfer(H.colorSpace)!==Oe,(x!==H||S!==H.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,x=H,S=H.version,y=o.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new xn(new Su(2,2),new Ba({name:"BackgroundMaterial",uniforms:ys(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:za,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(H.colorSpace)!==Oe,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(x!==H||S!==H.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,x=H,S=H.version,y=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function g(O,D){O.getRGB(ru,ev(o)),r.buffers.color.setClear(ru.r,ru.g,ru.b,D,h)}function P(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,D=1){d.set(O),m=D,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,g(d,m)},render:w,addToRenderList:M,dispose:P}}function BE(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let c=l,h=!1;function d(T,F,rt,et,ut){let ft=!1;const V=x(et,rt,F);c!==V&&(c=V,p(c.object)),ft=y(T,et,rt,ut),ft&&C(T,et,rt,ut),ut!==null&&t.update(ut,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,D(T,F,rt,et),ut!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function m(){return o.createVertexArray()}function p(T){return o.bindVertexArray(T)}function _(T){return o.deleteVertexArray(T)}function x(T,F,rt){const et=rt.wireframe===!0;let ut=r[T.id];ut===void 0&&(ut={},r[T.id]=ut);let ft=ut[F.id];ft===void 0&&(ft={},ut[F.id]=ft);let V=ft[et];return V===void 0&&(V=S(m()),ft[et]=V),V}function S(T){const F=[],rt=[],et=[];for(let ut=0;ut<i;ut++)F[ut]=0,rt[ut]=0,et[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:rt,attributeDivisors:et,object:T,attributes:{},index:null}}function y(T,F,rt,et){const ut=c.attributes,ft=F.attributes;let V=0;const st=rt.getAttributes();for(const j in st)if(st[j].location>=0){const L=ut[j];let it=ft[j];if(it===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(it=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(it=T.instanceColor)),L===void 0||L.attribute!==it||it&&L.data!==it.data)return!0;V++}return c.attributesNum!==V||c.index!==et}function C(T,F,rt,et){const ut={},ft=F.attributes;let V=0;const st=rt.getAttributes();for(const j in st)if(st[j].location>=0){let L=ft[j];L===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(L=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(L=T.instanceColor));const it={};it.attribute=L,L&&L.data&&(it.data=L.data),ut[j]=it,V++}c.attributes=ut,c.attributesNum=V,c.index=et}function w(){const T=c.newAttributes;for(let F=0,rt=T.length;F<rt;F++)T[F]=0}function M(T){g(T,0)}function g(T,F){const rt=c.newAttributes,et=c.enabledAttributes,ut=c.attributeDivisors;rt[T]=1,et[T]===0&&(o.enableVertexAttribArray(T),et[T]=1),ut[T]!==F&&(o.vertexAttribDivisor(T,F),ut[T]=F)}function P(){const T=c.newAttributes,F=c.enabledAttributes;for(let rt=0,et=F.length;rt<et;rt++)F[rt]!==T[rt]&&(o.disableVertexAttribArray(rt),F[rt]=0)}function O(T,F,rt,et,ut,ft,V){V===!0?o.vertexAttribIPointer(T,F,rt,ut,ft):o.vertexAttribPointer(T,F,rt,et,ut,ft)}function D(T,F,rt,et){w();const ut=et.attributes,ft=rt.getAttributes(),V=F.defaultAttributeValues;for(const st in ft){const j=ft[st];if(j.location>=0){let xt=ut[st];if(xt===void 0&&(st==="instanceMatrix"&&T.instanceMatrix&&(xt=T.instanceMatrix),st==="instanceColor"&&T.instanceColor&&(xt=T.instanceColor)),xt!==void 0){const L=xt.normalized,it=xt.itemSize,Et=t.get(xt);if(Et===void 0)continue;const At=Et.buffer,Y=Et.type,pt=Et.bytesPerElement,St=Y===o.INT||Y===o.UNSIGNED_INT||xt.gpuType===Qh;if(xt.isInterleavedBufferAttribute){const Tt=xt.data,Rt=Tt.stride,Kt=xt.offset;if(Tt.isInstancedInterleavedBuffer){for(let Pt=0;Pt<j.locationSize;Pt++)g(j.location+Pt,Tt.meshPerAttribute);T.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Pt=0;Pt<j.locationSize;Pt++)M(j.location+Pt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Pt=0;Pt<j.locationSize;Pt++)O(j.location+Pt,it/j.locationSize,Y,L,Rt*pt,(Kt+it/j.locationSize*Pt)*pt,St)}else{if(xt.isInstancedBufferAttribute){for(let Tt=0;Tt<j.locationSize;Tt++)g(j.location+Tt,xt.meshPerAttribute);T.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Tt=0;Tt<j.locationSize;Tt++)M(j.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Tt=0;Tt<j.locationSize;Tt++)O(j.location+Tt,it/j.locationSize,Y,L,it*pt,it/j.locationSize*Tt*pt,St)}}else if(V!==void 0){const L=V[st];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(j.location,L);break;case 3:o.vertexAttrib3fv(j.location,L);break;case 4:o.vertexAttrib4fv(j.location,L);break;default:o.vertexAttrib1fv(j.location,L)}}}}P()}function H(){q();for(const T in r){const F=r[T];for(const rt in F){const et=F[rt];for(const ut in et)_(et[ut].object),delete et[ut];delete F[rt]}delete r[T]}}function I(T){if(r[T.id]===void 0)return;const F=r[T.id];for(const rt in F){const et=F[rt];for(const ut in et)_(et[ut].object),delete et[ut];delete F[rt]}delete r[T.id]}function B(T){for(const F in r){const rt=r[F];if(rt[T.id]===void 0)continue;const et=rt[T.id];for(const ut in et)_(et[ut].object),delete et[ut];delete rt[T.id]}}function q(){R(),h=!0,c!==l&&(c=l,p(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:R,dispose:H,releaseStatesOfGeometry:I,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:M,disableUnusedAttributes:P}}function FE(o,t,i){let r;function l(p){r=p}function c(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,x){x!==0&&(o.drawArraysInstanced(r,p,_,x),i.update(_,r,x))}function d(p,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,x);let y=0;for(let C=0;C<x;C++)y+=_[C];i.update(y,r,1)}function m(p,_,x,S){if(x===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let C=0;C<p.length;C++)h(p[C],_[C],S[C]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,_,0,S,0,x);let C=0;for(let w=0;w<x;w++)C+=_[w]*S[w];i.update(C,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function IE(o,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==vi&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const q=B===wo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==aa&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ea&&!q)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=C>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:S,maxTextures:y,maxVertexTextures:C,maxTextureSize:w,maxCubemapSize:M,maxAttributes:g,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:H,maxSamples:I}}function HE(o){const t=this;let i=null,r=0,l=!1,c=!1;const h=new fr,d=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const y=x.length!==0||S||r!==0||l;return l=S,r=x.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,S){i=_(x,S,0)},this.setState=function(x,S,y){const C=x.clippingPlanes,w=x.clipIntersection,M=x.clipShadows,g=o.get(x);if(!l||C===null||C.length===0||c&&!M)c?_(null):p();else{const P=c?0:r,O=P*4;let D=g.clippingState||null;m.value=D,D=_(C,S,O,y);for(let H=0;H!==O;++H)D[H]=i[H];g.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(x,S,y,C){const w=x!==null?x.length:0;let M=null;if(w!==0){if(M=m.value,C!==!0||M===null){const g=y+w*4,P=S.matrixWorldInverse;d.getNormalMatrix(P),(M===null||M.length<g)&&(M=new Float32Array(g));for(let O=0,D=y;O!==w;++O,D+=4)h.copy(x[O]).applyMatrix4(P,d),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}function GE(o){let t=new WeakMap;function i(h,d){return d===gh?h.mapping=_s:d===_h&&(h.mapping=vs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===gh||d===_h)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Vx(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const hs=4,l_=[.125,.215,.35,.446,.526,.582],pr=20,eh=new sv,u_=new xe;let nh=null,ih=0,ah=0,rh=!1;const hr=(1+Math.sqrt(5))/2,cs=1/hr,c_=[new at(-hr,cs,0),new at(hr,cs,0),new at(-cs,0,hr),new at(cs,0,hr),new at(0,hr,-cs),new at(0,hr,cs),new at(-1,1,-1),new at(1,1,-1),new at(-1,1,1),new at(1,1,1)];class f_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100){nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,r,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=p_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=d_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nh,ih,ah),this._renderer.xr.enabled=rh,t.scissorTest=!1,su(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===_s||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:wo,format:vi,colorSpace:Ms,depthBuffer:!1},l=h_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h_(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VE(c)),this._blurMaterial=kE(c,t,i)}return l}_compileMaterial(t){const i=new xn(this._lodPlanes[0],t);this._renderer.compile(i,eh)}_sceneToCubeUV(t,i,r,l){const d=new oi(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,S=_.toneMapping;_.getClearColor(u_),_.toneMapping=Pa,_.autoClear=!1;const y=new J_({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),C=new xn(new si,y);let w=!1;const M=t.background;M?M.isColor&&(y.color.copy(M),t.background=null,w=!0):(y.color.copy(u_),w=!0);for(let g=0;g<6;g++){const P=g%3;P===0?(d.up.set(0,m[g],0),d.lookAt(p[g],0,0)):P===1?(d.up.set(0,0,m[g]),d.lookAt(0,p[g],0)):(d.up.set(0,m[g],0),d.lookAt(0,0,p[g]));const O=this._cubeSize;su(l,P*O,g>2?O:0,O,O),_.setRenderTarget(l),w&&_.render(C,d),_.render(t,d)}C.geometry.dispose(),C.material.dispose(),_.toneMapping=S,_.autoClear=x,t.background=M}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===_s||t.mapping===vs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=p_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=d_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new xn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;su(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,eh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=c_[(l-c-1)%c_.length];this._blur(t,c-1,c,h,d)}i.autoClear=r}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new xn(this._lodPlanes[l],p),S=p.uniforms,y=this._sizeLods[r]-1,C=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*pr-1),w=c/C,M=isFinite(c)?1+Math.floor(_*w):pr;M>pr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${pr}`);const g=[];let P=0;for(let B=0;B<pr;++B){const q=B/w,R=Math.exp(-q*q/2);g.push(R),B===0?P+=R:B<M&&(P+=2*R)}for(let B=0;B<g.length;B++)g[B]=g[B]/P;S.envMap.value=t.texture,S.samples.value=M,S.weights.value=g,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:O}=this;S.dTheta.value=C,S.mipInt.value=O-r;const D=this._sizeLods[l],H=3*D*(l>O-hs?l-O+hs:0),I=4*(this._cubeSize-D);su(i,H,I,3*D,2*D),m.setRenderTarget(i),m.render(x,eh)}}function VE(o){const t=[],i=[],r=[];let l=o;const c=o-hs+1+l_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-hs?m=l_[h-o+hs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),_=-p,x=1+p,S=[_,_,x,_,x,x,_,_,x,x,_,x],y=6,C=6,w=3,M=2,g=1,P=new Float32Array(w*C*y),O=new Float32Array(M*C*y),D=new Float32Array(g*C*y);for(let I=0;I<y;I++){const B=I%3*2/3-1,q=I>2?0:-1,R=[B,q,0,B+2/3,q,0,B+2/3,q+1,0,B,q,0,B+2/3,q+1,0,B,q+1,0];P.set(R,w*C*I),O.set(S,M*C*I);const T=[I,I,I,I,I,I];D.set(T,g*C*I)}const H=new Fa;H.setAttribute("position",new Ci(P,w)),H.setAttribute("uv",new Ci(O,M)),H.setAttribute("faceIndex",new Ci(D,g)),t.push(H),l>hs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function h_(o,t,i){const r=new vr(o,t,i);return r.texture.mapping=vu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function su(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function kE(o,t,i){const r=new Float32Array(pr),l=new at(0,1,0);return new Ba({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function d_(){return new Ba({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function p_(){return new Ba({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function od(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function XE(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===gh||m===_h,_=m===_s||m===vs;if(p||_){let x=t.get(d);const S=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new f_(o)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const y=d.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new f_(o)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",c),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function WE(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&fs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function qE(o,t,i,r){const l={},c=new WeakMap;function h(x){const S=x.target;S.index!==null&&t.remove(S.index);for(const C in S.attributes)t.remove(S.attributes[C]);S.removeEventListener("dispose",h),delete l[S.id];const y=c.get(S);y&&(t.remove(y),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(x,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(x){const S=x.attributes;for(const y in S)t.update(S[y],o.ARRAY_BUFFER)}function p(x){const S=[],y=x.index,C=x.attributes.position;let w=0;if(y!==null){const P=y.array;w=y.version;for(let O=0,D=P.length;O<D;O+=3){const H=P[O+0],I=P[O+1],B=P[O+2];S.push(H,I,I,B,B,H)}}else if(C!==void 0){const P=C.array;w=C.version;for(let O=0,D=P.length/3-1;O<D;O+=3){const H=O+0,I=O+1,B=O+2;S.push(H,I,I,B,B,H)}}else return;const M=new(Y_(S)?tv:$_)(S,1);M.version=w;const g=c.get(x);g&&t.remove(g),c.set(x,M)}function _(x){const S=c.get(x);if(S){const y=x.index;y!==null&&S.version<y.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:_}}function YE(o,t,i){let r;function l(S){r=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,y){o.drawElements(r,y,c,S*h),i.update(y,r,1)}function p(S,y,C){C!==0&&(o.drawElementsInstanced(r,y,c,S*h,C),i.update(y,r,C))}function _(S,y,C){if(C===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,S,0,C);let M=0;for(let g=0;g<C;g++)M+=y[g];i.update(M,r,1)}function x(S,y,C,w){if(C===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let g=0;g<S.length;g++)p(S[g]/h,y[g],w[g]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,S,0,w,0,C);let g=0;for(let P=0;P<C;P++)g+=y[P]*w[P];i.update(g,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function ZE(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function jE(o,t,i){const r=new WeakMap,l=new Ye;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let S=r.get(d);if(S===void 0||S.count!==x){let T=function(){q.dispose(),r.delete(d),d.removeEventListener("dispose",T)};var y=T;S!==void 0&&S.texture.dispose();const C=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let D=0;C===!0&&(D=1),w===!0&&(D=2),M===!0&&(D=3);let H=d.attributes.position.count*D,I=1;H>t.maxTextureSize&&(I=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const B=new Float32Array(H*I*4*x),q=new j_(B,H,I,x);q.type=ea,q.needsUpdate=!0;const R=D*4;for(let F=0;F<x;F++){const rt=g[F],et=P[F],ut=O[F],ft=H*I*4*F;for(let V=0;V<rt.count;V++){const st=V*R;C===!0&&(l.fromBufferAttribute(rt,V),B[ft+st+0]=l.x,B[ft+st+1]=l.y,B[ft+st+2]=l.z,B[ft+st+3]=0),w===!0&&(l.fromBufferAttribute(et,V),B[ft+st+4]=l.x,B[ft+st+5]=l.y,B[ft+st+6]=l.z,B[ft+st+7]=0),M===!0&&(l.fromBufferAttribute(ut,V),B[ft+st+8]=l.x,B[ft+st+9]=l.y,B[ft+st+10]=l.z,B[ft+st+11]=ut.itemSize===4?l.w:1)}}S={count:x,texture:q,size:new Re(H,I)},r.set(d,S),d.addEventListener("dispose",T)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let C=0;for(let M=0;M<p.length;M++)C+=p[M];const w=d.morphTargetsRelative?1:1-C;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function KE(o,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,x=t.get(m,_);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const lv=new In,m_=new av(1,1),uv=new j_,cv=new Tx,fv=new iv,g_=[],__=[],v_=new Float32Array(16),S_=new Float32Array(9),x_=new Float32Array(4);function Ts(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let c=g_[l];if(c===void 0&&(c=new Float32Array(l),g_[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function ln(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function un(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function xu(o,t){let i=__[t];i===void 0&&(i=new Int32Array(t),__[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function QE(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function JE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;o.uniform2fv(this.addr,t),un(i,t)}}function $E(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(ln(i,t))return;o.uniform3fv(this.addr,t),un(i,t)}}function tT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;o.uniform4fv(this.addr,t),un(i,t)}}function eT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(ln(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),un(i,t)}else{if(ln(i,r))return;x_.set(r),o.uniformMatrix2fv(this.addr,!1,x_),un(i,r)}}function nT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(ln(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),un(i,t)}else{if(ln(i,r))return;S_.set(r),o.uniformMatrix3fv(this.addr,!1,S_),un(i,r)}}function iT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(ln(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),un(i,t)}else{if(ln(i,r))return;v_.set(r),o.uniformMatrix4fv(this.addr,!1,v_),un(i,r)}}function aT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function rT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;o.uniform2iv(this.addr,t),un(i,t)}}function sT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ln(i,t))return;o.uniform3iv(this.addr,t),un(i,t)}}function oT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;o.uniform4iv(this.addr,t),un(i,t)}}function lT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function uT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;o.uniform2uiv(this.addr,t),un(i,t)}}function cT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ln(i,t))return;o.uniform3uiv(this.addr,t),un(i,t)}}function fT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;o.uniform4uiv(this.addr,t),un(i,t)}}function hT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(m_.compareFunction=q_,c=m_):c=lv,i.setTexture2D(t||c,l)}function dT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||cv,l)}function pT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||fv,l)}function mT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||uv,l)}function gT(o){switch(o){case 5126:return QE;case 35664:return JE;case 35665:return $E;case 35666:return tT;case 35674:return eT;case 35675:return nT;case 35676:return iT;case 5124:case 35670:return aT;case 35667:case 35671:return rT;case 35668:case 35672:return sT;case 35669:case 35673:return oT;case 5125:return lT;case 36294:return uT;case 36295:return cT;case 36296:return fT;case 35678:case 36198:case 36298:case 36306:case 35682:return hT;case 35679:case 36299:case 36307:return dT;case 35680:case 36300:case 36308:case 36293:return pT;case 36289:case 36303:case 36311:case 36292:return mT}}function _T(o,t){o.uniform1fv(this.addr,t)}function vT(o,t){const i=Ts(t,this.size,2);o.uniform2fv(this.addr,i)}function ST(o,t){const i=Ts(t,this.size,3);o.uniform3fv(this.addr,i)}function xT(o,t){const i=Ts(t,this.size,4);o.uniform4fv(this.addr,i)}function MT(o,t){const i=Ts(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function yT(o,t){const i=Ts(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ET(o,t){const i=Ts(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function TT(o,t){o.uniform1iv(this.addr,t)}function bT(o,t){o.uniform2iv(this.addr,t)}function AT(o,t){o.uniform3iv(this.addr,t)}function RT(o,t){o.uniform4iv(this.addr,t)}function CT(o,t){o.uniform1uiv(this.addr,t)}function wT(o,t){o.uniform2uiv(this.addr,t)}function DT(o,t){o.uniform3uiv(this.addr,t)}function UT(o,t){o.uniform4uiv(this.addr,t)}function LT(o,t,i){const r=this.cache,l=t.length,c=xu(i,l);ln(r,c)||(o.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||lv,c[h])}function NT(o,t,i){const r=this.cache,l=t.length,c=xu(i,l);ln(r,c)||(o.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||cv,c[h])}function OT(o,t,i){const r=this.cache,l=t.length,c=xu(i,l);ln(r,c)||(o.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||fv,c[h])}function PT(o,t,i){const r=this.cache,l=t.length,c=xu(i,l);ln(r,c)||(o.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||uv,c[h])}function zT(o){switch(o){case 5126:return _T;case 35664:return vT;case 35665:return ST;case 35666:return xT;case 35674:return MT;case 35675:return yT;case 35676:return ET;case 5124:case 35670:return TT;case 35667:case 35671:return bT;case 35668:case 35672:return AT;case 35669:case 35673:return RT;case 5125:return CT;case 36294:return wT;case 36295:return DT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return LT;case 35679:case 36299:case 36307:return NT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return PT}}class BT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=gT(i.type)}}class FT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=zT(i.type)}}class IT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const sh=/(\w+)(\])?(\[|\.)?/g;function M_(o,t){o.seq.push(t),o.map[t.id]=t}function HT(o,t,i){const r=o.name,l=r.length;for(sh.lastIndex=0;;){const c=sh.exec(r),h=sh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){M_(i,p===void 0?new BT(d,o,t):new FT(d,o,t));break}else{let x=i.map[d];x===void 0&&(x=new IT(d),M_(i,x)),i=x}}}class du{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);HT(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function y_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const GT=37297;let VT=0;function kT(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const E_=new oe;function XT(o){Ae._getMatrix(E_,Ae.workingColorSpace,o);const t=`mat3( ${E_.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case mu:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function T_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+kT(o.getShaderSource(t),h)}else return l}function WT(o,t){const i=XT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function qT(o,t){let i;switch(t){case KS:i="Linear";break;case QS:i="Reinhard";break;case JS:i="Cineon";break;case $S:i="ACESFilmic";break;case ex:i="AgX";break;case nx:i="Neutral";break;case tx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const ou=new at;function YT(){Ae.getLuminanceCoefficients(ou);const o=ou.x.toFixed(4),t=ou.y.toFixed(4),i=ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function jT(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function KT(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Ro(o){return o!==""}function b_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function A_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const QT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yh(o){return o.replace(QT,$T)}const JT=new Map;function $T(o,t){let i=le[t];if(i===void 0){const r=JT.get(t);if(r!==void 0)i=le[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Yh(i)}const tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function R_(o){return o.replace(tb,eb)}function eb(o,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function C_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function nb(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===N_?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===wS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===$i&&(t="SHADOWMAP_TYPE_VSM"),t}function ib(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case _s:case vs:t="ENVMAP_TYPE_CUBE";break;case vu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ab(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function rb(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Kh:t="ENVMAP_BLENDING_MULTIPLY";break;case ZS:t="ENVMAP_BLENDING_MIX";break;case jS:t="ENVMAP_BLENDING_ADD";break}return t}function sb(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function ob(o,t,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=nb(i),p=ib(i),_=ab(i),x=rb(i),S=sb(i),y=ZT(i),C=jT(c),w=l.createProgram();let M,g,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(Ro).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(Ro).join(`
`),g.length>0&&(g+=`
`)):(M=[C_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),g=[C_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Pa?"#define TONE_MAPPING":"",i.toneMapping!==Pa?le.tonemapping_pars_fragment:"",i.toneMapping!==Pa?qT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,WT("linearToOutputTexel",i.outputColorSpace),YT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ro).join(`
`)),h=Yh(h),h=b_(h,i),h=A_(h,i),d=Yh(d),d=b_(d,i),d=A_(d,i),h=R_(h),d=R_(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",i.glslVersion===Gg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Gg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const O=P+M+h,D=P+g+d,H=y_(l,l.VERTEX_SHADER,O),I=y_(l,l.FRAGMENT_SHADER,D);l.attachShader(w,H),l.attachShader(w,I),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function B(F){if(o.debug.checkShaderErrors){const rt=l.getProgramInfoLog(w).trim(),et=l.getShaderInfoLog(H).trim(),ut=l.getShaderInfoLog(I).trim();let ft=!0,V=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ft=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,H,I);else{const st=T_(l,H,"vertex"),j=T_(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+rt+`
`+st+`
`+j)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(et===""||ut==="")&&(V=!1);V&&(F.diagnostics={runnable:ft,programLog:rt,vertexShader:{log:et,prefix:M},fragmentShader:{log:ut,prefix:g}})}l.deleteShader(H),l.deleteShader(I),q=new du(l,w),R=KT(l,w)}let q;this.getUniforms=function(){return q===void 0&&B(this),q};let R;this.getAttributes=function(){return R===void 0&&B(this),R};let T=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=l.getProgramParameter(w,GT)),T},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=VT++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=I,this}let lb=0;class ub{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new cb(t),i.set(t,r)),r}}class cb{constructor(t){this.id=lb++,this.code=t,this.usedTimes=0}}function fb(o,t,i,r,l,c,h){const d=new K_,m=new ub,p=new Set,_=[],x=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R){return p.add(R),R===0?"uv":`uv${R}`}function M(R,T,F,rt,et){const ut=rt.fog,ft=et.geometry,V=R.isMeshStandardMaterial?rt.environment:null,st=(R.isMeshStandardMaterial?i:t).get(R.envMap||V),j=st&&st.mapping===vu?st.image.height:null,xt=C[R.type];R.precision!==null&&(y=l.getMaxPrecision(R.precision),y!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const L=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,it=L!==void 0?L.length:0;let Et=0;ft.morphAttributes.position!==void 0&&(Et=1),ft.morphAttributes.normal!==void 0&&(Et=2),ft.morphAttributes.color!==void 0&&(Et=3);let At,Y,pt,St;if(xt){const ye=Ai[xt];At=ye.vertexShader,Y=ye.fragmentShader}else At=R.vertexShader,Y=R.fragmentShader,m.update(R),pt=m.getVertexShaderID(R),St=m.getFragmentShaderID(R);const Tt=o.getRenderTarget(),Rt=o.state.buffers.depth.getReversed(),Kt=et.isInstancedMesh===!0,Pt=et.isBatchedMesh===!0,Me=!!R.map,Ce=!!R.matcap,ie=!!st,z=!!R.aoMap,mn=!!R.lightMap,re=!!R.bumpMap,ce=!!R.normalMap,kt=!!R.displacementMap,we=!!R.emissiveMap,Xt=!!R.metalnessMap,U=!!R.roughnessMap,E=R.anisotropy>0,tt=R.clearcoat>0,ht=R.dispersion>0,vt=R.iridescence>0,dt=R.sheen>0,Ht=R.transmission>0,wt=E&&!!R.anisotropyMap,zt=tt&&!!R.clearcoatMap,de=tt&&!!R.clearcoatNormalMap,yt=tt&&!!R.clearcoatRoughnessMap,Bt=vt&&!!R.iridescenceMap,qt=vt&&!!R.iridescenceThicknessMap,Gt=dt&&!!R.sheenColorMap,Ft=dt&&!!R.sheenRoughnessMap,ae=!!R.specularMap,Zt=!!R.specularColorMap,De=!!R.specularIntensityMap,X=Ht&&!!R.transmissionMap,Lt=Ht&&!!R.thicknessMap,ot=!!R.gradientMap,gt=!!R.alphaMap,Ct=R.alphaTest>0,Dt=!!R.alphaHash,Jt=!!R.extensions;let Ie=Pa;R.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(Ie=o.toneMapping);const tn={shaderID:xt,shaderType:R.type,shaderName:R.name,vertexShader:At,fragmentShader:Y,defines:R.defines,customVertexShaderID:pt,customFragmentShaderID:St,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,batching:Pt,batchingColor:Pt&&et._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&et.instanceColor!==null,instancingMorph:Kt&&et.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Tt===null?o.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Ms,alphaToCoverage:!!R.alphaToCoverage,map:Me,matcap:Ce,envMap:ie,envMapMode:ie&&st.mapping,envMapCubeUVHeight:j,aoMap:z,lightMap:mn,bumpMap:re,normalMap:ce,displacementMap:S&&kt,emissiveMap:we,normalMapObjectSpace:ce&&R.normalMapType===sx,normalMapTangentSpace:ce&&R.normalMapType===W_,metalnessMap:Xt,roughnessMap:U,anisotropy:E,anisotropyMap:wt,clearcoat:tt,clearcoatMap:zt,clearcoatNormalMap:de,clearcoatRoughnessMap:yt,dispersion:ht,iridescence:vt,iridescenceMap:Bt,iridescenceThicknessMap:qt,sheen:dt,sheenColorMap:Gt,sheenRoughnessMap:Ft,specularMap:ae,specularColorMap:Zt,specularIntensityMap:De,transmission:Ht,transmissionMap:X,thicknessMap:Lt,gradientMap:ot,opaque:R.transparent===!1&&R.blending===ds&&R.alphaToCoverage===!1,alphaMap:gt,alphaTest:Ct,alphaHash:Dt,combine:R.combine,mapUv:Me&&w(R.map.channel),aoMapUv:z&&w(R.aoMap.channel),lightMapUv:mn&&w(R.lightMap.channel),bumpMapUv:re&&w(R.bumpMap.channel),normalMapUv:ce&&w(R.normalMap.channel),displacementMapUv:kt&&w(R.displacementMap.channel),emissiveMapUv:we&&w(R.emissiveMap.channel),metalnessMapUv:Xt&&w(R.metalnessMap.channel),roughnessMapUv:U&&w(R.roughnessMap.channel),anisotropyMapUv:wt&&w(R.anisotropyMap.channel),clearcoatMapUv:zt&&w(R.clearcoatMap.channel),clearcoatNormalMapUv:de&&w(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&w(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&w(R.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&w(R.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&w(R.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&w(R.sheenRoughnessMap.channel),specularMapUv:ae&&w(R.specularMap.channel),specularColorMapUv:Zt&&w(R.specularColorMap.channel),specularIntensityMapUv:De&&w(R.specularIntensityMap.channel),transmissionMapUv:X&&w(R.transmissionMap.channel),thicknessMapUv:Lt&&w(R.thicknessMap.channel),alphaMapUv:gt&&w(R.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(ce||E),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!ft.attributes.uv&&(Me||gt),fog:!!ut,useFog:R.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Rt,skinning:et.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Et,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Me&&R.map.isVideoTexture===!0&&Ae.getTransfer(R.map.colorSpace)===Oe,decodeVideoTextureEmissive:we&&R.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(R.emissiveMap.colorSpace)===Oe,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ta,flipSided:R.side===Fn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Jt&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&R.extensions.multiDraw===!0||Pt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return tn.vertexUv1s=p.has(1),tn.vertexUv2s=p.has(2),tn.vertexUv3s=p.has(3),p.clear(),tn}function g(R){const T=[];if(R.shaderID?T.push(R.shaderID):(T.push(R.customVertexShaderID),T.push(R.customFragmentShaderID)),R.defines!==void 0)for(const F in R.defines)T.push(F),T.push(R.defines[F]);return R.isRawShaderMaterial===!1&&(P(T,R),O(T,R),T.push(o.outputColorSpace)),T.push(R.customProgramCacheKey),T.join()}function P(R,T){R.push(T.precision),R.push(T.outputColorSpace),R.push(T.envMapMode),R.push(T.envMapCubeUVHeight),R.push(T.mapUv),R.push(T.alphaMapUv),R.push(T.lightMapUv),R.push(T.aoMapUv),R.push(T.bumpMapUv),R.push(T.normalMapUv),R.push(T.displacementMapUv),R.push(T.emissiveMapUv),R.push(T.metalnessMapUv),R.push(T.roughnessMapUv),R.push(T.anisotropyMapUv),R.push(T.clearcoatMapUv),R.push(T.clearcoatNormalMapUv),R.push(T.clearcoatRoughnessMapUv),R.push(T.iridescenceMapUv),R.push(T.iridescenceThicknessMapUv),R.push(T.sheenColorMapUv),R.push(T.sheenRoughnessMapUv),R.push(T.specularMapUv),R.push(T.specularColorMapUv),R.push(T.specularIntensityMapUv),R.push(T.transmissionMapUv),R.push(T.thicknessMapUv),R.push(T.combine),R.push(T.fogExp2),R.push(T.sizeAttenuation),R.push(T.morphTargetsCount),R.push(T.morphAttributeCount),R.push(T.numDirLights),R.push(T.numPointLights),R.push(T.numSpotLights),R.push(T.numSpotLightMaps),R.push(T.numHemiLights),R.push(T.numRectAreaLights),R.push(T.numDirLightShadows),R.push(T.numPointLightShadows),R.push(T.numSpotLightShadows),R.push(T.numSpotLightShadowsWithMaps),R.push(T.numLightProbes),R.push(T.shadowMapType),R.push(T.toneMapping),R.push(T.numClippingPlanes),R.push(T.numClipIntersection),R.push(T.depthPacking)}function O(R,T){d.disableAll(),T.supportsVertexTextures&&d.enable(0),T.instancing&&d.enable(1),T.instancingColor&&d.enable(2),T.instancingMorph&&d.enable(3),T.matcap&&d.enable(4),T.envMap&&d.enable(5),T.normalMapObjectSpace&&d.enable(6),T.normalMapTangentSpace&&d.enable(7),T.clearcoat&&d.enable(8),T.iridescence&&d.enable(9),T.alphaTest&&d.enable(10),T.vertexColors&&d.enable(11),T.vertexAlphas&&d.enable(12),T.vertexUv1s&&d.enable(13),T.vertexUv2s&&d.enable(14),T.vertexUv3s&&d.enable(15),T.vertexTangents&&d.enable(16),T.anisotropy&&d.enable(17),T.alphaHash&&d.enable(18),T.batching&&d.enable(19),T.dispersion&&d.enable(20),T.batchingColor&&d.enable(21),R.push(d.mask),d.disableAll(),T.fog&&d.enable(0),T.useFog&&d.enable(1),T.flatShading&&d.enable(2),T.logarithmicDepthBuffer&&d.enable(3),T.reverseDepthBuffer&&d.enable(4),T.skinning&&d.enable(5),T.morphTargets&&d.enable(6),T.morphNormals&&d.enable(7),T.morphColors&&d.enable(8),T.premultipliedAlpha&&d.enable(9),T.shadowMapEnabled&&d.enable(10),T.doubleSided&&d.enable(11),T.flipSided&&d.enable(12),T.useDepthPacking&&d.enable(13),T.dithering&&d.enable(14),T.transmission&&d.enable(15),T.sheen&&d.enable(16),T.opaque&&d.enable(17),T.pointsUvs&&d.enable(18),T.decodeVideoTexture&&d.enable(19),T.decodeVideoTextureEmissive&&d.enable(20),T.alphaToCoverage&&d.enable(21),R.push(d.mask)}function D(R){const T=C[R.type];let F;if(T){const rt=Ai[T];F=Fx.clone(rt.uniforms)}else F=R.uniforms;return F}function H(R,T){let F;for(let rt=0,et=_.length;rt<et;rt++){const ut=_[rt];if(ut.cacheKey===T){F=ut,++F.usedTimes;break}}return F===void 0&&(F=new ob(o,T,R,c),_.push(F)),F}function I(R){if(--R.usedTimes===0){const T=_.indexOf(R);_[T]=_[_.length-1],_.pop(),R.destroy()}}function B(R){m.remove(R)}function q(){m.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:D,acquireProgram:H,releaseProgram:I,releaseShaderCache:B,programs:_,dispose:q}}function hb(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function db(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function w_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function D_(){const o=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(x,S,y,C,w,M){let g=o[t];return g===void 0?(g={id:x.id,object:x,geometry:S,material:y,groupOrder:C,renderOrder:x.renderOrder,z:w,group:M},o[t]=g):(g.id=x.id,g.object=x,g.geometry=S,g.material=y,g.groupOrder=C,g.renderOrder=x.renderOrder,g.z=w,g.group=M),t++,g}function d(x,S,y,C,w,M){const g=h(x,S,y,C,w,M);y.transmission>0?r.push(g):y.transparent===!0?l.push(g):i.push(g)}function m(x,S,y,C,w,M){const g=h(x,S,y,C,w,M);y.transmission>0?r.unshift(g):y.transparent===!0?l.unshift(g):i.unshift(g)}function p(x,S){i.length>1&&i.sort(x||db),r.length>1&&r.sort(S||w_),l.length>1&&l.sort(S||w_)}function _(){for(let x=t,S=o.length;x<S;x++){const y=o[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function pb(){let o=new WeakMap;function t(r,l){const c=o.get(r);let h;return c===void 0?(h=new D_,o.set(r,[h])):l>=c.length?(h=new D_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function mb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new at,color:new xe};break;case"SpotLight":i={position:new at,direction:new at,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new at,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new at,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new at,halfWidth:new at,halfHeight:new at};break}return o[t.id]=i,i}}}function gb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let _b=0;function vb(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Sb(o){const t=new mb,i=gb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new at);const l=new at,c=new Ve,h=new Ve;function d(p){let _=0,x=0,S=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let y=0,C=0,w=0,M=0,g=0,P=0,O=0,D=0,H=0,I=0,B=0;p.sort(vb);for(let R=0,T=p.length;R<T;R++){const F=p[R],rt=F.color,et=F.intensity,ut=F.distance,ft=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)_+=rt.r*et,x+=rt.g*et,S+=rt.b*et;else if(F.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(F.sh.coefficients[V],et);B++}else if(F.isDirectionalLight){const V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const st=F.shadow,j=i.get(F);j.shadowIntensity=st.intensity,j.shadowBias=st.bias,j.shadowNormalBias=st.normalBias,j.shadowRadius=st.radius,j.shadowMapSize=st.mapSize,r.directionalShadow[y]=j,r.directionalShadowMap[y]=ft,r.directionalShadowMatrix[y]=F.shadow.matrix,P++}r.directional[y]=V,y++}else if(F.isSpotLight){const V=t.get(F);V.position.setFromMatrixPosition(F.matrixWorld),V.color.copy(rt).multiplyScalar(et),V.distance=ut,V.coneCos=Math.cos(F.angle),V.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),V.decay=F.decay,r.spot[w]=V;const st=F.shadow;if(F.map&&(r.spotLightMap[H]=F.map,H++,st.updateMatrices(F),F.castShadow&&I++),r.spotLightMatrix[w]=st.matrix,F.castShadow){const j=i.get(F);j.shadowIntensity=st.intensity,j.shadowBias=st.bias,j.shadowNormalBias=st.normalBias,j.shadowRadius=st.radius,j.shadowMapSize=st.mapSize,r.spotShadow[w]=j,r.spotShadowMap[w]=ft,D++}w++}else if(F.isRectAreaLight){const V=t.get(F);V.color.copy(rt).multiplyScalar(et),V.halfWidth.set(F.width*.5,0,0),V.halfHeight.set(0,F.height*.5,0),r.rectArea[M]=V,M++}else if(F.isPointLight){const V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),V.distance=F.distance,V.decay=F.decay,F.castShadow){const st=F.shadow,j=i.get(F);j.shadowIntensity=st.intensity,j.shadowBias=st.bias,j.shadowNormalBias=st.normalBias,j.shadowRadius=st.radius,j.shadowMapSize=st.mapSize,j.shadowCameraNear=st.camera.near,j.shadowCameraFar=st.camera.far,r.pointShadow[C]=j,r.pointShadowMap[C]=ft,r.pointShadowMatrix[C]=F.shadow.matrix,O++}r.point[C]=V,C++}else if(F.isHemisphereLight){const V=t.get(F);V.skyColor.copy(F.color).multiplyScalar(et),V.groundColor.copy(F.groundColor).multiplyScalar(et),r.hemi[g]=V,g++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=S;const q=r.hash;(q.directionalLength!==y||q.pointLength!==C||q.spotLength!==w||q.rectAreaLength!==M||q.hemiLength!==g||q.numDirectionalShadows!==P||q.numPointShadows!==O||q.numSpotShadows!==D||q.numSpotMaps!==H||q.numLightProbes!==B)&&(r.directional.length=y,r.spot.length=w,r.rectArea.length=M,r.point.length=C,r.hemi.length=g,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=D+H-I,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=B,q.directionalLength=y,q.pointLength=C,q.spotLength=w,q.rectAreaLength=M,q.hemiLength=g,q.numDirectionalShadows=P,q.numPointShadows=O,q.numSpotShadows=D,q.numSpotMaps=H,q.numLightProbes=B,r.version=_b++)}function m(p,_){let x=0,S=0,y=0,C=0,w=0;const M=_.matrixWorldInverse;for(let g=0,P=p.length;g<P;g++){const O=p[g];if(O.isDirectionalLight){const D=r.directional[x];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),x++}else if(O.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(O.isRectAreaLight){const D=r.rectArea[C];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),h.identity(),c.copy(O.matrixWorld),c.premultiply(M),h.extractRotation(c),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),C++}else if(O.isPointLight){const D=r.point[S];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),S++}else if(O.isHemisphereLight){const D=r.hemi[w];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(M),w++}}}return{setup:d,setupView:m,state:r}}function U_(o){const t=new Sb(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function h(_){r.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function xb(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new U_(o),t.set(l,[d])):c>=h.length?(d=new U_(o),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const Mb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Eb(o,t,i){let r=new rd;const l=new Re,c=new Re,h=new Ye,d=new Yx({depthPacking:rx}),m=new Zx,p={},_=i.maxTextureSize,x={[za]:Fn,[Fn]:za,[ta]:ta},S=new Ba({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:Mb,fragmentShader:yb}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const C=new Fa;C.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new xn(C,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N_;let g=this.type;this.render=function(I,B,q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;const R=o.getRenderTarget(),T=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),rt=o.state;rt.setBlending(Oa),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const et=g!==$i&&this.type===$i,ut=g===$i&&this.type!==$i;for(let ft=0,V=I.length;ft<V;ft++){const st=I[ft],j=st.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const xt=j.getFrameExtents();if(l.multiply(xt),c.copy(j.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/xt.x),l.x=c.x*xt.x,j.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/xt.y),l.y=c.y*xt.y,j.mapSize.y=c.y)),j.map===null||et===!0||ut===!0){const it=this.type!==$i?{minFilter:Si,magFilter:Si}:{};j.map!==null&&j.map.dispose(),j.map=new vr(l.x,l.y,it),j.map.texture.name=st.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const L=j.getViewportCount();for(let it=0;it<L;it++){const Et=j.getViewport(it);h.set(c.x*Et.x,c.y*Et.y,c.x*Et.z,c.y*Et.w),rt.viewport(h),j.updateMatrices(st,it),r=j.getFrustum(),D(B,q,j.camera,st,this.type)}j.isPointLightShadow!==!0&&this.type===$i&&P(j,q),j.needsUpdate=!1}g=this.type,M.needsUpdate=!1,o.setRenderTarget(R,T,F)};function P(I,B){const q=t.update(w);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new vr(l.x,l.y)),S.uniforms.shadow_pass.value=I.map.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(B,null,q,S,w,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(B,null,q,y,w,null)}function O(I,B,q,R){let T=null;const F=q.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(F!==void 0)T=F;else if(T=q.isPointLight===!0?m:d,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const rt=T.uuid,et=B.uuid;let ut=p[rt];ut===void 0&&(ut={},p[rt]=ut);let ft=ut[et];ft===void 0&&(ft=T.clone(),ut[et]=ft,B.addEventListener("dispose",H)),T=ft}if(T.visible=B.visible,T.wireframe=B.wireframe,R===$i?T.side=B.shadowSide!==null?B.shadowSide:B.side:T.side=B.shadowSide!==null?B.shadowSide:x[B.side],T.alphaMap=B.alphaMap,T.alphaTest=B.alphaTest,T.map=B.map,T.clipShadows=B.clipShadows,T.clippingPlanes=B.clippingPlanes,T.clipIntersection=B.clipIntersection,T.displacementMap=B.displacementMap,T.displacementScale=B.displacementScale,T.displacementBias=B.displacementBias,T.wireframeLinewidth=B.wireframeLinewidth,T.linewidth=B.linewidth,q.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const rt=o.properties.get(T);rt.light=q}return T}function D(I,B,q,R,T){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&T===$i)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,I.matrixWorld);const et=t.update(I),ut=I.material;if(Array.isArray(ut)){const ft=et.groups;for(let V=0,st=ft.length;V<st;V++){const j=ft[V],xt=ut[j.materialIndex];if(xt&&xt.visible){const L=O(I,xt,R,T);I.onBeforeShadow(o,I,B,q,et,L,j),o.renderBufferDirect(q,null,et,L,I,j),I.onAfterShadow(o,I,B,q,et,L,j)}}}else if(ut.visible){const ft=O(I,ut,R,T);I.onBeforeShadow(o,I,B,q,et,ft,null),o.renderBufferDirect(q,null,et,ft,I,null),I.onAfterShadow(o,I,B,q,et,ft,null)}}const rt=I.children;for(let et=0,ut=rt.length;et<ut;et++)D(rt[et],B,q,R,T)}function H(I){I.target.removeEventListener("dispose",H);for(const q in p){const R=p[q],T=I.target.uuid;T in R&&(R[T].dispose(),delete R[T])}}}const Tb={[uh]:ch,[fh]:ph,[hh]:mh,[gs]:dh,[ch]:uh,[ph]:fh,[mh]:hh,[dh]:gs};function bb(o,t){function i(){let X=!1;const Lt=new Ye;let ot=null;const gt=new Ye(0,0,0,0);return{setMask:function(Ct){ot!==Ct&&!X&&(o.colorMask(Ct,Ct,Ct,Ct),ot=Ct)},setLocked:function(Ct){X=Ct},setClear:function(Ct,Dt,Jt,Ie,tn){tn===!0&&(Ct*=Ie,Dt*=Ie,Jt*=Ie),Lt.set(Ct,Dt,Jt,Ie),gt.equals(Lt)===!1&&(o.clearColor(Ct,Dt,Jt,Ie),gt.copy(Lt))},reset:function(){X=!1,ot=null,gt.set(-1,0,0,0)}}}function r(){let X=!1,Lt=!1,ot=null,gt=null,Ct=null;return{setReversed:function(Dt){if(Lt!==Dt){const Jt=t.get("EXT_clip_control");Lt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT);const Ie=Ct;Ct=null,this.setClear(Ie)}Lt=Dt},getReversed:function(){return Lt},setTest:function(Dt){Dt?Tt(o.DEPTH_TEST):Rt(o.DEPTH_TEST)},setMask:function(Dt){ot!==Dt&&!X&&(o.depthMask(Dt),ot=Dt)},setFunc:function(Dt){if(Lt&&(Dt=Tb[Dt]),gt!==Dt){switch(Dt){case uh:o.depthFunc(o.NEVER);break;case ch:o.depthFunc(o.ALWAYS);break;case fh:o.depthFunc(o.LESS);break;case gs:o.depthFunc(o.LEQUAL);break;case hh:o.depthFunc(o.EQUAL);break;case dh:o.depthFunc(o.GEQUAL);break;case ph:o.depthFunc(o.GREATER);break;case mh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}gt=Dt}},setLocked:function(Dt){X=Dt},setClear:function(Dt){Ct!==Dt&&(Lt&&(Dt=1-Dt),o.clearDepth(Dt),Ct=Dt)},reset:function(){X=!1,ot=null,gt=null,Ct=null,Lt=!1}}}function l(){let X=!1,Lt=null,ot=null,gt=null,Ct=null,Dt=null,Jt=null,Ie=null,tn=null;return{setTest:function(ye){X||(ye?Tt(o.STENCIL_TEST):Rt(o.STENCIL_TEST))},setMask:function(ye){Lt!==ye&&!X&&(o.stencilMask(ye),Lt=ye)},setFunc:function(ye,An,Rn){(ot!==ye||gt!==An||Ct!==Rn)&&(o.stencilFunc(ye,An,Rn),ot=ye,gt=An,Ct=Rn)},setOp:function(ye,An,Rn){(Dt!==ye||Jt!==An||Ie!==Rn)&&(o.stencilOp(ye,An,Rn),Dt=ye,Jt=An,Ie=Rn)},setLocked:function(ye){X=ye},setClear:function(ye){tn!==ye&&(o.clearStencil(ye),tn=ye)},reset:function(){X=!1,Lt=null,ot=null,gt=null,Ct=null,Dt=null,Jt=null,Ie=null,tn=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},x={},S=new WeakMap,y=[],C=null,w=!1,M=null,g=null,P=null,O=null,D=null,H=null,I=null,B=new xe(0,0,0),q=0,R=!1,T=null,F=null,rt=null,et=null,ut=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,st=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(j)[1]),V=st>=1):j.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),V=st>=2);let xt=null,L={};const it=o.getParameter(o.SCISSOR_BOX),Et=o.getParameter(o.VIEWPORT),At=new Ye().fromArray(it),Y=new Ye().fromArray(Et);function pt(X,Lt,ot,gt){const Ct=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(X,Dt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<ot;Jt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,gt,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Lt+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Dt}const St={};St[o.TEXTURE_2D]=pt(o.TEXTURE_2D,o.TEXTURE_2D,1),St[o.TEXTURE_CUBE_MAP]=pt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[o.TEXTURE_2D_ARRAY]=pt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),St[o.TEXTURE_3D]=pt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Tt(o.DEPTH_TEST),h.setFunc(gs),re(!1),ce(Pg),Tt(o.CULL_FACE),z(Oa);function Tt(X){_[X]!==!0&&(o.enable(X),_[X]=!0)}function Rt(X){_[X]!==!1&&(o.disable(X),_[X]=!1)}function Kt(X,Lt){return x[X]!==Lt?(o.bindFramebuffer(X,Lt),x[X]=Lt,X===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Lt),X===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Pt(X,Lt){let ot=y,gt=!1;if(X){ot=S.get(Lt),ot===void 0&&(ot=[],S.set(Lt,ot));const Ct=X.textures;if(ot.length!==Ct.length||ot[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,Jt=Ct.length;Dt<Jt;Dt++)ot[Dt]=o.COLOR_ATTACHMENT0+Dt;ot.length=Ct.length,gt=!0}}else ot[0]!==o.BACK&&(ot[0]=o.BACK,gt=!0);gt&&o.drawBuffers(ot)}function Me(X){return C!==X?(o.useProgram(X),C=X,!0):!1}const Ce={[dr]:o.FUNC_ADD,[US]:o.FUNC_SUBTRACT,[LS]:o.FUNC_REVERSE_SUBTRACT};Ce[NS]=o.MIN,Ce[OS]=o.MAX;const ie={[PS]:o.ZERO,[zS]:o.ONE,[BS]:o.SRC_COLOR,[oh]:o.SRC_ALPHA,[kS]:o.SRC_ALPHA_SATURATE,[GS]:o.DST_COLOR,[IS]:o.DST_ALPHA,[FS]:o.ONE_MINUS_SRC_COLOR,[lh]:o.ONE_MINUS_SRC_ALPHA,[VS]:o.ONE_MINUS_DST_COLOR,[HS]:o.ONE_MINUS_DST_ALPHA,[XS]:o.CONSTANT_COLOR,[WS]:o.ONE_MINUS_CONSTANT_COLOR,[qS]:o.CONSTANT_ALPHA,[YS]:o.ONE_MINUS_CONSTANT_ALPHA};function z(X,Lt,ot,gt,Ct,Dt,Jt,Ie,tn,ye){if(X===Oa){w===!0&&(Rt(o.BLEND),w=!1);return}if(w===!1&&(Tt(o.BLEND),w=!0),X!==DS){if(X!==M||ye!==R){if((g!==dr||D!==dr)&&(o.blendEquation(o.FUNC_ADD),g=dr,D=dr),ye)switch(X){case ds:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case zg:o.blendFunc(o.ONE,o.ONE);break;case Bg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Fg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ds:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case zg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Bg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Fg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}P=null,O=null,H=null,I=null,B.set(0,0,0),q=0,M=X,R=ye}return}Ct=Ct||Lt,Dt=Dt||ot,Jt=Jt||gt,(Lt!==g||Ct!==D)&&(o.blendEquationSeparate(Ce[Lt],Ce[Ct]),g=Lt,D=Ct),(ot!==P||gt!==O||Dt!==H||Jt!==I)&&(o.blendFuncSeparate(ie[ot],ie[gt],ie[Dt],ie[Jt]),P=ot,O=gt,H=Dt,I=Jt),(Ie.equals(B)===!1||tn!==q)&&(o.blendColor(Ie.r,Ie.g,Ie.b,tn),B.copy(Ie),q=tn),M=X,R=!1}function mn(X,Lt){X.side===ta?Rt(o.CULL_FACE):Tt(o.CULL_FACE);let ot=X.side===Fn;Lt&&(ot=!ot),re(ot),X.blending===ds&&X.transparent===!1?z(Oa):z(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const gt=X.stencilWrite;d.setTest(gt),gt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),we(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Tt(o.SAMPLE_ALPHA_TO_COVERAGE):Rt(o.SAMPLE_ALPHA_TO_COVERAGE)}function re(X){T!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),T=X)}function ce(X){X!==RS?(Tt(o.CULL_FACE),X!==F&&(X===Pg?o.cullFace(o.BACK):X===CS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Rt(o.CULL_FACE),F=X}function kt(X){X!==rt&&(V&&o.lineWidth(X),rt=X)}function we(X,Lt,ot){X?(Tt(o.POLYGON_OFFSET_FILL),(et!==Lt||ut!==ot)&&(o.polygonOffset(Lt,ot),et=Lt,ut=ot)):Rt(o.POLYGON_OFFSET_FILL)}function Xt(X){X?Tt(o.SCISSOR_TEST):Rt(o.SCISSOR_TEST)}function U(X){X===void 0&&(X=o.TEXTURE0+ft-1),xt!==X&&(o.activeTexture(X),xt=X)}function E(X,Lt,ot){ot===void 0&&(xt===null?ot=o.TEXTURE0+ft-1:ot=xt);let gt=L[ot];gt===void 0&&(gt={type:void 0,texture:void 0},L[ot]=gt),(gt.type!==X||gt.texture!==Lt)&&(xt!==ot&&(o.activeTexture(ot),xt=ot),o.bindTexture(X,Lt||St[X]),gt.type=X,gt.texture=Lt)}function tt(){const X=L[xt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ht(){try{o.compressedTexImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function vt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function dt(){try{o.texSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ht(){try{o.texSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function de(){try{o.texStorage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function yt(){try{o.texStorage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(){try{o.texImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(){try{o.texImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Gt(X){At.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),At.copy(X))}function Ft(X){Y.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Y.copy(X))}function ae(X,Lt){let ot=p.get(Lt);ot===void 0&&(ot=new WeakMap,p.set(Lt,ot));let gt=ot.get(X);gt===void 0&&(gt=o.getUniformBlockIndex(Lt,X.name),ot.set(X,gt))}function Zt(X,Lt){const gt=p.get(Lt).get(X);m.get(Lt)!==gt&&(o.uniformBlockBinding(Lt,gt,X.__bindingPointIndex),m.set(Lt,gt))}function De(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},xt=null,L={},x={},S=new WeakMap,y=[],C=null,w=!1,M=null,g=null,P=null,O=null,D=null,H=null,I=null,B=new xe(0,0,0),q=0,R=!1,T=null,F=null,rt=null,et=null,ut=null,At.set(0,0,o.canvas.width,o.canvas.height),Y.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Tt,disable:Rt,bindFramebuffer:Kt,drawBuffers:Pt,useProgram:Me,setBlending:z,setMaterial:mn,setFlipSided:re,setCullFace:ce,setLineWidth:kt,setPolygonOffset:we,setScissorTest:Xt,activeTexture:U,bindTexture:E,unbindTexture:tt,compressedTexImage2D:ht,compressedTexImage3D:vt,texImage2D:Bt,texImage3D:qt,updateUBOMapping:ae,uniformBlockBinding:Zt,texStorage2D:de,texStorage3D:yt,texSubImage2D:dt,texSubImage3D:Ht,compressedTexSubImage2D:wt,compressedTexSubImage3D:zt,scissor:Gt,viewport:Ft,reset:De}}function Ab(o,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Re,_=new WeakMap;let x;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(U,E){return y?new OffscreenCanvas(U,E):_u("canvas")}function w(U,E,tt){let ht=1;const vt=Xt(U);if((vt.width>tt||vt.height>tt)&&(ht=tt/Math.max(vt.width,vt.height)),ht<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const dt=Math.floor(ht*vt.width),Ht=Math.floor(ht*vt.height);x===void 0&&(x=C(dt,Ht));const wt=E?C(dt,Ht):x;return wt.width=dt,wt.height=Ht,wt.getContext("2d").drawImage(U,0,0,dt,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+dt+"x"+Ht+")."),wt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),U;return U}function M(U){return U.generateMipmaps}function g(U){o.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(U,E,tt,ht,vt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let dt=E;if(E===o.RED&&(tt===o.FLOAT&&(dt=o.R32F),tt===o.HALF_FLOAT&&(dt=o.R16F),tt===o.UNSIGNED_BYTE&&(dt=o.R8)),E===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(dt=o.R8UI),tt===o.UNSIGNED_SHORT&&(dt=o.R16UI),tt===o.UNSIGNED_INT&&(dt=o.R32UI),tt===o.BYTE&&(dt=o.R8I),tt===o.SHORT&&(dt=o.R16I),tt===o.INT&&(dt=o.R32I)),E===o.RG&&(tt===o.FLOAT&&(dt=o.RG32F),tt===o.HALF_FLOAT&&(dt=o.RG16F),tt===o.UNSIGNED_BYTE&&(dt=o.RG8)),E===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(dt=o.RG8UI),tt===o.UNSIGNED_SHORT&&(dt=o.RG16UI),tt===o.UNSIGNED_INT&&(dt=o.RG32UI),tt===o.BYTE&&(dt=o.RG8I),tt===o.SHORT&&(dt=o.RG16I),tt===o.INT&&(dt=o.RG32I)),E===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),tt===o.UNSIGNED_INT&&(dt=o.RGB32UI),tt===o.BYTE&&(dt=o.RGB8I),tt===o.SHORT&&(dt=o.RGB16I),tt===o.INT&&(dt=o.RGB32I)),E===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),tt===o.UNSIGNED_INT&&(dt=o.RGBA32UI),tt===o.BYTE&&(dt=o.RGBA8I),tt===o.SHORT&&(dt=o.RGBA16I),tt===o.INT&&(dt=o.RGBA32I)),E===o.RGB&&tt===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),E===o.RGBA){const Ht=vt?mu:Ae.getTransfer(ht);tt===o.FLOAT&&(dt=o.RGBA32F),tt===o.HALF_FLOAT&&(dt=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(dt=Ht===Oe?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function D(U,E){let tt;return U?E===null||E===_r||E===Ss?tt=o.DEPTH24_STENCIL8:E===ea?tt=o.DEPTH32F_STENCIL8:E===Co&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===_r||E===Ss?tt=o.DEPTH_COMPONENT24:E===ea?tt=o.DEPTH_COMPONENT32F:E===Co&&(tt=o.DEPTH_COMPONENT16),tt}function H(U,E){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==Si&&U.minFilter!==Ri?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function I(U){const E=U.target;E.removeEventListener("dispose",I),q(E),E.isVideoTexture&&_.delete(E)}function B(U){const E=U.target;E.removeEventListener("dispose",B),T(E)}function q(U){const E=r.get(U);if(E.__webglInit===void 0)return;const tt=U.source,ht=S.get(tt);if(ht){const vt=ht[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&R(U),Object.keys(ht).length===0&&S.delete(tt)}r.remove(U)}function R(U){const E=r.get(U);o.deleteTexture(E.__webglTexture);const tt=U.source,ht=S.get(tt);delete ht[E.__cacheKey],h.memory.textures--}function T(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let vt=0;vt<E.__webglFramebuffer[ht].length;vt++)o.deleteFramebuffer(E.__webglFramebuffer[ht][vt]);else o.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)o.deleteFramebuffer(E.__webglFramebuffer[ht]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const tt=U.textures;for(let ht=0,vt=tt.length;ht<vt;ht++){const dt=r.get(tt[ht]);dt.__webglTexture&&(o.deleteTexture(dt.__webglTexture),h.memory.textures--),r.remove(tt[ht])}r.remove(U)}let F=0;function rt(){F=0}function et(){const U=F;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),F+=1,U}function ut(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ft(U,E){const tt=r.get(U);if(U.isVideoTexture&&kt(U),U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){const ht=U.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(tt,U,E);return}}i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+E)}function V(U,E){const tt=r.get(U);if(U.version>0&&tt.__version!==U.version){Y(tt,U,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+E)}function st(U,E){const tt=r.get(U);if(U.version>0&&tt.__version!==U.version){Y(tt,U,E);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+E)}function j(U,E){const tt=r.get(U);if(U.version>0&&tt.__version!==U.version){pt(tt,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+E)}const xt={[vh]:o.REPEAT,[mr]:o.CLAMP_TO_EDGE,[Sh]:o.MIRRORED_REPEAT},L={[Si]:o.NEAREST,[ix]:o.NEAREST_MIPMAP_NEAREST,[Hl]:o.NEAREST_MIPMAP_LINEAR,[Ri]:o.LINEAR,[Df]:o.LINEAR_MIPMAP_NEAREST,[gr]:o.LINEAR_MIPMAP_LINEAR},it={[ox]:o.NEVER,[dx]:o.ALWAYS,[lx]:o.LESS,[q_]:o.LEQUAL,[ux]:o.EQUAL,[hx]:o.GEQUAL,[cx]:o.GREATER,[fx]:o.NOTEQUAL};function Et(U,E){if(E.type===ea&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ri||E.magFilter===Df||E.magFilter===Hl||E.magFilter===gr||E.minFilter===Ri||E.minFilter===Df||E.minFilter===Hl||E.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,xt[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,xt[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,xt[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,L[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,L[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,it[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Si||E.minFilter!==Hl&&E.minFilter!==gr||E.type===ea&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function At(U,E){let tt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",I));const ht=E.source;let vt=S.get(ht);vt===void 0&&(vt={},S.set(ht,vt));const dt=ut(E);if(dt!==U.__cacheKey){vt[dt]===void 0&&(vt[dt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),vt[dt].usedTimes++;const Ht=vt[U.__cacheKey];Ht!==void 0&&(vt[U.__cacheKey].usedTimes--,Ht.usedTimes===0&&R(E)),U.__cacheKey=dt,U.__webglTexture=vt[dt].texture}return tt}function Y(U,E,tt){let ht=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=o.TEXTURE_3D);const vt=At(U,E),dt=E.source;i.bindTexture(ht,U.__webglTexture,o.TEXTURE0+tt);const Ht=r.get(dt);if(dt.version!==Ht.__version||vt===!0){i.activeTexture(o.TEXTURE0+tt);const wt=Ae.getPrimaries(Ae.workingColorSpace),zt=E.colorSpace===Na?null:Ae.getPrimaries(E.colorSpace),de=E.colorSpace===Na||wt===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let yt=w(E.image,!1,l.maxTextureSize);yt=we(E,yt);const Bt=c.convert(E.format,E.colorSpace),qt=c.convert(E.type);let Gt=O(E.internalFormat,Bt,qt,E.colorSpace,E.isVideoTexture);Et(ht,E);let Ft;const ae=E.mipmaps,Zt=E.isVideoTexture!==!0,De=Ht.__version===void 0||vt===!0,X=dt.dataReady,Lt=H(E,yt);if(E.isDepthTexture)Gt=D(E.format===xs,E.type),De&&(Zt?i.texStorage2D(o.TEXTURE_2D,1,Gt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Gt,yt.width,yt.height,0,Bt,qt,null));else if(E.isDataTexture)if(ae.length>0){Zt&&De&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,ae[0].width,ae[0].height);for(let ot=0,gt=ae.length;ot<gt;ot++)Ft=ae[ot],Zt?X&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Ft.width,Ft.height,Bt,qt,Ft.data):i.texImage2D(o.TEXTURE_2D,ot,Gt,Ft.width,Ft.height,0,Bt,qt,Ft.data);E.generateMipmaps=!1}else Zt?(De&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,yt.width,yt.height),X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,yt.width,yt.height,Bt,qt,yt.data)):i.texImage2D(o.TEXTURE_2D,0,Gt,yt.width,yt.height,0,Bt,qt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Zt&&De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Gt,ae[0].width,ae[0].height,yt.depth);for(let ot=0,gt=ae.length;ot<gt;ot++)if(Ft=ae[ot],E.format!==vi)if(Bt!==null)if(Zt){if(X)if(E.layerUpdates.size>0){const Ct=o_(Ft.width,Ft.height,E.format,E.type);for(const Dt of E.layerUpdates){const Jt=Ft.data.subarray(Dt*Ct/Ft.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,Dt,Ft.width,Ft.height,1,Bt,Jt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Ft.width,Ft.height,yt.depth,Bt,Ft.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ot,Gt,Ft.width,Ft.height,yt.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?X&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Ft.width,Ft.height,yt.depth,Bt,qt,Ft.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ot,Gt,Ft.width,Ft.height,yt.depth,0,Bt,qt,Ft.data)}else{Zt&&De&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,ae[0].width,ae[0].height);for(let ot=0,gt=ae.length;ot<gt;ot++)Ft=ae[ot],E.format!==vi?Bt!==null?Zt?X&&i.compressedTexSubImage2D(o.TEXTURE_2D,ot,0,0,Ft.width,Ft.height,Bt,Ft.data):i.compressedTexImage2D(o.TEXTURE_2D,ot,Gt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?X&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Ft.width,Ft.height,Bt,qt,Ft.data):i.texImage2D(o.TEXTURE_2D,ot,Gt,Ft.width,Ft.height,0,Bt,qt,Ft.data)}else if(E.isDataArrayTexture)if(Zt){if(De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Gt,yt.width,yt.height,yt.depth),X)if(E.layerUpdates.size>0){const ot=o_(yt.width,yt.height,E.format,E.type);for(const gt of E.layerUpdates){const Ct=yt.data.subarray(gt*ot/yt.data.BYTES_PER_ELEMENT,(gt+1)*ot/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,yt.width,yt.height,1,Bt,qt,Ct)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Bt,qt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Gt,yt.width,yt.height,yt.depth,0,Bt,qt,yt.data);else if(E.isData3DTexture)Zt?(De&&i.texStorage3D(o.TEXTURE_3D,Lt,Gt,yt.width,yt.height,yt.depth),X&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Bt,qt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Gt,yt.width,yt.height,yt.depth,0,Bt,qt,yt.data);else if(E.isFramebufferTexture){if(De)if(Zt)i.texStorage2D(o.TEXTURE_2D,Lt,Gt,yt.width,yt.height);else{let ot=yt.width,gt=yt.height;for(let Ct=0;Ct<Lt;Ct++)i.texImage2D(o.TEXTURE_2D,Ct,Gt,ot,gt,0,Bt,qt,null),ot>>=1,gt>>=1}}else if(ae.length>0){if(Zt&&De){const ot=Xt(ae[0]);i.texStorage2D(o.TEXTURE_2D,Lt,Gt,ot.width,ot.height)}for(let ot=0,gt=ae.length;ot<gt;ot++)Ft=ae[ot],Zt?X&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Bt,qt,Ft):i.texImage2D(o.TEXTURE_2D,ot,Gt,Bt,qt,Ft);E.generateMipmaps=!1}else if(Zt){if(De){const ot=Xt(yt);i.texStorage2D(o.TEXTURE_2D,Lt,Gt,ot.width,ot.height)}X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,qt,yt)}else i.texImage2D(o.TEXTURE_2D,0,Gt,Bt,qt,yt);M(E)&&g(ht),Ht.__version=dt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function pt(U,E,tt){if(E.image.length!==6)return;const ht=At(U,E),vt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+tt);const dt=r.get(vt);if(vt.version!==dt.__version||ht===!0){i.activeTexture(o.TEXTURE0+tt);const Ht=Ae.getPrimaries(Ae.workingColorSpace),wt=E.colorSpace===Na?null:Ae.getPrimaries(E.colorSpace),zt=E.colorSpace===Na||Ht===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const de=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,Bt=[];for(let gt=0;gt<6;gt++)!de&&!yt?Bt[gt]=w(E.image[gt],!0,l.maxCubemapSize):Bt[gt]=yt?E.image[gt].image:E.image[gt],Bt[gt]=we(E,Bt[gt]);const qt=Bt[0],Gt=c.convert(E.format,E.colorSpace),Ft=c.convert(E.type),ae=O(E.internalFormat,Gt,Ft,E.colorSpace),Zt=E.isVideoTexture!==!0,De=dt.__version===void 0||ht===!0,X=vt.dataReady;let Lt=H(E,qt);Et(o.TEXTURE_CUBE_MAP,E);let ot;if(de){Zt&&De&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,ae,qt.width,qt.height);for(let gt=0;gt<6;gt++){ot=Bt[gt].mipmaps;for(let Ct=0;Ct<ot.length;Ct++){const Dt=ot[Ct];E.format!==vi?Gt!==null?Zt?X&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,0,0,Dt.width,Dt.height,Gt,Dt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,ae,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,0,0,Dt.width,Dt.height,Gt,Ft,Dt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,ae,Dt.width,Dt.height,0,Gt,Ft,Dt.data)}}}else{if(ot=E.mipmaps,Zt&&De){ot.length>0&&Lt++;const gt=Xt(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,ae,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(yt){Zt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Bt[gt].width,Bt[gt].height,Gt,Ft,Bt[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ae,Bt[gt].width,Bt[gt].height,0,Gt,Ft,Bt[gt].data);for(let Ct=0;Ct<ot.length;Ct++){const Jt=ot[Ct].image[gt].image;Zt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,0,0,Jt.width,Jt.height,Gt,Ft,Jt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,ae,Jt.width,Jt.height,0,Gt,Ft,Jt.data)}}else{Zt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Gt,Ft,Bt[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ae,Gt,Ft,Bt[gt]);for(let Ct=0;Ct<ot.length;Ct++){const Dt=ot[Ct];Zt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,0,0,Gt,Ft,Dt.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,ae,Gt,Ft,Dt.image[gt])}}}M(E)&&g(o.TEXTURE_CUBE_MAP),dt.__version=vt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function St(U,E,tt,ht,vt,dt){const Ht=c.convert(tt.format,tt.colorSpace),wt=c.convert(tt.type),zt=O(tt.internalFormat,Ht,wt,tt.colorSpace),de=r.get(E),yt=r.get(tt);if(yt.__renderTarget=E,!de.__hasExternalTextures){const Bt=Math.max(1,E.width>>dt),qt=Math.max(1,E.height>>dt);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,dt,zt,Bt,qt,E.depth,0,Ht,wt,null):i.texImage2D(vt,dt,zt,Bt,qt,0,Ht,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),ce(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,vt,yt.__webglTexture,0,re(E)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,vt,yt.__webglTexture,dt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Tt(U,E,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const ht=E.depthTexture,vt=ht&&ht.isDepthTexture?ht.type:null,dt=D(E.stencilBuffer,vt),Ht=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=re(E);ce(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,dt,E.width,E.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,dt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,dt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ht,o.RENDERBUFFER,U)}else{const ht=E.textures;for(let vt=0;vt<ht.length;vt++){const dt=ht[vt],Ht=c.convert(dt.format,dt.colorSpace),wt=c.convert(dt.type),zt=O(dt.internalFormat,Ht,wt,dt.colorSpace),de=re(E);tt&&ce(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,de,zt,E.width,E.height):ce(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,de,zt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,zt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Rt(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=r.get(E.depthTexture);ht.__renderTarget=E,(!ht.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ft(E.depthTexture,0);const vt=ht.__webglTexture,dt=re(E);if(E.depthTexture.format===ps)ce(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(E.depthTexture.format===xs)ce(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Kt(U){const E=r.get(U),tt=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ht=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",vt)};ht.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=ht}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");Rt(E.__webglFramebuffer,U)}else if(tt){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=o.createRenderbuffer(),Tt(E.__webglDepthbuffer[ht],U,!1);else{const vt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,dt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Tt(E.__webglDepthbuffer,U,!1);else{const ht=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,vt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,vt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,vt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Pt(U,E,tt){const ht=r.get(U);E!==void 0&&St(ht.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&Kt(U)}function Me(U){const E=U.texture,tt=r.get(U),ht=r.get(E);U.addEventListener("dispose",B);const vt=U.textures,dt=U.isWebGLCubeRenderTarget===!0,Ht=vt.length>1;if(Ht||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=E.version,h.memory.textures++),dt){tt.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[wt]=[];for(let zt=0;zt<E.mipmaps.length;zt++)tt.__webglFramebuffer[wt][zt]=o.createFramebuffer()}else tt.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let wt=0;wt<E.mipmaps.length;wt++)tt.__webglFramebuffer[wt]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Ht)for(let wt=0,zt=vt.length;wt<zt;wt++){const de=r.get(vt[wt]);de.__webglTexture===void 0&&(de.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&ce(U)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let wt=0;wt<vt.length;wt++){const zt=vt[wt];tt.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[wt]);const de=c.convert(zt.format,zt.colorSpace),yt=c.convert(zt.type),Bt=O(zt.internalFormat,de,yt,zt.colorSpace,U.isXRRenderTarget===!0),qt=re(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Bt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,tt.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),Tt(tt.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(dt){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),Et(o.TEXTURE_CUBE_MAP,E);for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0)for(let zt=0;zt<E.mipmaps.length;zt++)St(tt.__webglFramebuffer[wt][zt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,zt);else St(tt.__webglFramebuffer[wt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(E)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ht){for(let wt=0,zt=vt.length;wt<zt;wt++){const de=vt[wt],yt=r.get(de);i.bindTexture(o.TEXTURE_2D,yt.__webglTexture),Et(o.TEXTURE_2D,de),St(tt.__webglFramebuffer,U,de,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,0),M(de)&&g(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,ht.__webglTexture),Et(wt,E),E.mipmaps&&E.mipmaps.length>0)for(let zt=0;zt<E.mipmaps.length;zt++)St(tt.__webglFramebuffer[zt],U,E,o.COLOR_ATTACHMENT0,wt,zt);else St(tt.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,wt,0);M(E)&&g(wt),i.unbindTexture()}U.depthBuffer&&Kt(U)}function Ce(U){const E=U.textures;for(let tt=0,ht=E.length;tt<ht;tt++){const vt=E[tt];if(M(vt)){const dt=P(U),Ht=r.get(vt).__webglTexture;i.bindTexture(dt,Ht),g(dt),i.unbindTexture()}}}const ie=[],z=[];function mn(U){if(U.samples>0){if(ce(U)===!1){const E=U.textures,tt=U.width,ht=U.height;let vt=o.COLOR_BUFFER_BIT;const dt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ht=r.get(U),wt=E.length>1;if(wt)for(let zt=0;zt<E.length;zt++)i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let zt=0;zt<E.length;zt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const de=r.get(E[zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,de,0)}o.blitFramebuffer(0,0,tt,ht,0,0,tt,ht,vt,o.NEAREST),m===!0&&(ie.length=0,z.length=0,ie.push(o.COLOR_ATTACHMENT0+zt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ie.push(dt),z.push(dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,z)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let zt=0;zt<E.length;zt++){i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const de=r.get(E[zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,de,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function re(U){return Math.min(l.maxSamples,U.samples)}function ce(U){const E=r.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function kt(U){const E=h.render.frame;_.get(U)!==E&&(_.set(U,E),U.update())}function we(U,E){const tt=U.colorSpace,ht=U.format,vt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||tt!==Ms&&tt!==Na&&(Ae.getTransfer(tt)===Oe?(ht!==vi||vt!==aa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),E}function Xt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=et,this.resetTextureUnits=rt,this.setTexture2D=ft,this.setTexture2DArray=V,this.setTexture3D=st,this.setTextureCube=j,this.rebindTextures=Pt,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ce}function Rb(o,t){function i(r,l=Na){let c;const h=Ae.getTransfer(l);if(r===aa)return o.UNSIGNED_BYTE;if(r===Jh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===$h)return o.UNSIGNED_SHORT_5_5_5_1;if(r===B_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===P_)return o.BYTE;if(r===z_)return o.SHORT;if(r===Co)return o.UNSIGNED_SHORT;if(r===Qh)return o.INT;if(r===_r)return o.UNSIGNED_INT;if(r===ea)return o.FLOAT;if(r===wo)return o.HALF_FLOAT;if(r===F_)return o.ALPHA;if(r===I_)return o.RGB;if(r===vi)return o.RGBA;if(r===H_)return o.LUMINANCE;if(r===G_)return o.LUMINANCE_ALPHA;if(r===ps)return o.DEPTH_COMPONENT;if(r===xs)return o.DEPTH_STENCIL;if(r===V_)return o.RED;if(r===td)return o.RED_INTEGER;if(r===k_)return o.RG;if(r===ed)return o.RG_INTEGER;if(r===nd)return o.RGBA_INTEGER;if(r===lu||r===uu||r===cu||r===fu)if(h===Oe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===lu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===lu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===uu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===cu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xh||r===Mh||r===yh||r===Eh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===xh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Eh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Th||r===bh||r===Ah)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Th||r===bh)return h===Oe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Ah)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Rh||r===Ch||r===wh||r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph||r===zh||r===Bh||r===Fh||r===Ih||r===Hh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Rh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ch)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Uh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Oh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ph)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ih)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hh)return h===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===hu||r===Gh||r===Vh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===hu)return h===Oe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Gh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===X_||r===kh||r===Xh||r===Wh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===hu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===kh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ss?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const Cb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Db{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new In,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ba({vertexShader:Cb,fragmentShader:wb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new xn(new Su(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ub extends Es{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,x=null,S=null,y=null,C=null;const w=new Db,M=i.getContextAttributes();let g=null,P=null;const O=[],D=[],H=new Re;let I=null;const B=new oi;B.viewport=new Ye;const q=new oi;q.viewport=new Ye;const R=[B,q],T=new $x;let F=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let pt=O[Y];return pt===void 0&&(pt=new Jf,O[Y]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Y){let pt=O[Y];return pt===void 0&&(pt=new Jf,O[Y]=pt),pt.getGripSpace()},this.getHand=function(Y){let pt=O[Y];return pt===void 0&&(pt=new Jf,O[Y]=pt),pt.getHandSpace()};function et(Y){const pt=D.indexOf(Y.inputSource);if(pt===-1)return;const St=O[pt];St!==void 0&&(St.update(Y.inputSource,Y.frame,p||h),St.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ut(){l.removeEventListener("select",et),l.removeEventListener("selectstart",et),l.removeEventListener("selectend",et),l.removeEventListener("squeeze",et),l.removeEventListener("squeezestart",et),l.removeEventListener("squeezeend",et),l.removeEventListener("end",ut),l.removeEventListener("inputsourceschange",ft);for(let Y=0;Y<O.length;Y++){const pt=D[Y];pt!==null&&(D[Y]=null,O[Y].disconnect(pt))}F=null,rt=null,w.reset(),t.setRenderTarget(g),y=null,S=null,x=null,l=null,P=null,At.stop(),r.isPresenting=!1,t.setPixelRatio(I),t.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){c=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return x},this.getFrame=function(){return C},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",et),l.addEventListener("selectstart",et),l.addEventListener("selectend",et),l.addEventListener("squeeze",et),l.addEventListener("squeezestart",et),l.addEventListener("squeezeend",et),l.addEventListener("end",ut),l.addEventListener("inputsourceschange",ft),M.xrCompatible!==!0&&await i.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Tt=null,Rt=null;M.depth&&(Rt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=M.stencil?xs:ps,Tt=M.stencil?Ss:_r);const Kt={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:c};x=new XRWebGLBinding(l,i),S=x.createProjectionLayer(Kt),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),P=new vr(S.textureWidth,S.textureHeight,{format:vi,type:aa,depthTexture:new av(S.textureWidth,S.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}else{const St={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,St),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new vr(y.framebufferWidth,y.framebufferHeight,{format:vi,type:aa,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),At.setContext(l),At.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ft(Y){for(let pt=0;pt<Y.removed.length;pt++){const St=Y.removed[pt],Tt=D.indexOf(St);Tt>=0&&(D[Tt]=null,O[Tt].disconnect(St))}for(let pt=0;pt<Y.added.length;pt++){const St=Y.added[pt];let Tt=D.indexOf(St);if(Tt===-1){for(let Kt=0;Kt<O.length;Kt++)if(Kt>=D.length){D.push(St),Tt=Kt;break}else if(D[Kt]===null){D[Kt]=St,Tt=Kt;break}if(Tt===-1)break}const Rt=O[Tt];Rt&&Rt.connect(St)}}const V=new at,st=new at;function j(Y,pt,St){V.setFromMatrixPosition(pt.matrixWorld),st.setFromMatrixPosition(St.matrixWorld);const Tt=V.distanceTo(st),Rt=pt.projectionMatrix.elements,Kt=St.projectionMatrix.elements,Pt=Rt[14]/(Rt[10]-1),Me=Rt[14]/(Rt[10]+1),Ce=(Rt[9]+1)/Rt[5],ie=(Rt[9]-1)/Rt[5],z=(Rt[8]-1)/Rt[0],mn=(Kt[8]+1)/Kt[0],re=Pt*z,ce=Pt*mn,kt=Tt/(-z+mn),we=kt*-z;if(pt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(we),Y.translateZ(kt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Rt[10]===-1)Y.projectionMatrix.copy(pt.projectionMatrix),Y.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Xt=Pt+kt,U=Me+kt,E=re-we,tt=ce+(Tt-we),ht=Ce*Me/U*Xt,vt=ie*Me/U*Xt;Y.projectionMatrix.makePerspective(E,tt,ht,vt,Xt,U),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function xt(Y,pt){pt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(pt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let pt=Y.near,St=Y.far;w.texture!==null&&(w.depthNear>0&&(pt=w.depthNear),w.depthFar>0&&(St=w.depthFar)),T.near=q.near=B.near=pt,T.far=q.far=B.far=St,(F!==T.near||rt!==T.far)&&(l.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,rt=T.far),B.layers.mask=Y.layers.mask|2,q.layers.mask=Y.layers.mask|4,T.layers.mask=B.layers.mask|q.layers.mask;const Tt=Y.parent,Rt=T.cameras;xt(T,Tt);for(let Kt=0;Kt<Rt.length;Kt++)xt(Rt[Kt],Tt);Rt.length===2?j(T,B,q):T.projectionMatrix.copy(B.projectionMatrix),L(Y,T,Tt)};function L(Y,pt,St){St===null?Y.matrix.copy(pt.matrixWorld):(Y.matrix.copy(St.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(pt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(pt.projectionMatrix),Y.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=qh*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(Y){m=Y,S!==null&&(S.fixedFoveation=Y),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Y)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(T)};let it=null;function Et(Y,pt){if(_=pt.getViewerPose(p||h),C=pt,_!==null){const St=_.views;y!==null&&(t.setRenderTargetFramebuffer(P,y.framebuffer),t.setRenderTarget(P));let Tt=!1;St.length!==T.cameras.length&&(T.cameras.length=0,Tt=!0);for(let Pt=0;Pt<St.length;Pt++){const Me=St[Pt];let Ce=null;if(y!==null)Ce=y.getViewport(Me);else{const z=x.getViewSubImage(S,Me);Ce=z.viewport,Pt===0&&(t.setRenderTargetTextures(P,z.colorTexture,S.ignoreDepthValues?void 0:z.depthStencilTexture),t.setRenderTarget(P))}let ie=R[Pt];ie===void 0&&(ie=new oi,ie.layers.enable(Pt),ie.viewport=new Ye,R[Pt]=ie),ie.matrix.fromArray(Me.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Me.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Pt===0&&(T.matrix.copy(ie.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Tt===!0&&T.cameras.push(ie)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const Pt=x.getDepthInformation(St[0]);Pt&&Pt.isValid&&Pt.texture&&w.init(t,Pt,l.renderState)}}for(let St=0;St<O.length;St++){const Tt=D[St],Rt=O[St];Tt!==null&&Rt!==void 0&&Rt.update(Tt,pt,p||h)}it&&it(Y,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),C=null}const At=new ov;At.setAnimationLoop(Et),this.setAnimationLoop=function(Y){it=Y},this.dispose=function(){}}}const cr=new Di,Lb=new Ve;function Nb(o,t){function i(M,g){M.matrixAutoUpdate===!0&&M.updateMatrix(),g.value.copy(M.matrix)}function r(M,g){g.color.getRGB(M.fogColor.value,ev(o)),g.isFog?(M.fogNear.value=g.near,M.fogFar.value=g.far):g.isFogExp2&&(M.fogDensity.value=g.density)}function l(M,g,P,O,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(M,g):g.isMeshToonMaterial?(c(M,g),x(M,g)):g.isMeshPhongMaterial?(c(M,g),_(M,g)):g.isMeshStandardMaterial?(c(M,g),S(M,g),g.isMeshPhysicalMaterial&&y(M,g,D)):g.isMeshMatcapMaterial?(c(M,g),C(M,g)):g.isMeshDepthMaterial?c(M,g):g.isMeshDistanceMaterial?(c(M,g),w(M,g)):g.isMeshNormalMaterial?c(M,g):g.isLineBasicMaterial?(h(M,g),g.isLineDashedMaterial&&d(M,g)):g.isPointsMaterial?m(M,g,P,O):g.isSpriteMaterial?p(M,g):g.isShadowMaterial?(M.color.value.copy(g.color),M.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(M,g){M.opacity.value=g.opacity,g.color&&M.diffuse.value.copy(g.color),g.emissive&&M.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.bumpMap&&(M.bumpMap.value=g.bumpMap,i(g.bumpMap,M.bumpMapTransform),M.bumpScale.value=g.bumpScale,g.side===Fn&&(M.bumpScale.value*=-1)),g.normalMap&&(M.normalMap.value=g.normalMap,i(g.normalMap,M.normalMapTransform),M.normalScale.value.copy(g.normalScale),g.side===Fn&&M.normalScale.value.negate()),g.displacementMap&&(M.displacementMap.value=g.displacementMap,i(g.displacementMap,M.displacementMapTransform),M.displacementScale.value=g.displacementScale,M.displacementBias.value=g.displacementBias),g.emissiveMap&&(M.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,M.emissiveMapTransform)),g.specularMap&&(M.specularMap.value=g.specularMap,i(g.specularMap,M.specularMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest);const P=t.get(g),O=P.envMap,D=P.envMapRotation;O&&(M.envMap.value=O,cr.copy(D),cr.x*=-1,cr.y*=-1,cr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),M.envMapRotation.value.setFromMatrix4(Lb.makeRotationFromEuler(cr)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=g.reflectivity,M.ior.value=g.ior,M.refractionRatio.value=g.refractionRatio),g.lightMap&&(M.lightMap.value=g.lightMap,M.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,M.lightMapTransform)),g.aoMap&&(M.aoMap.value=g.aoMap,M.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,M.aoMapTransform))}function h(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform))}function d(M,g){M.dashSize.value=g.dashSize,M.totalSize.value=g.dashSize+g.gapSize,M.scale.value=g.scale}function m(M,g,P,O){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.size.value=g.size*P,M.scale.value=O*.5,g.map&&(M.map.value=g.map,i(g.map,M.uvTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function p(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.rotation.value=g.rotation,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function _(M,g){M.specular.value.copy(g.specular),M.shininess.value=Math.max(g.shininess,1e-4)}function x(M,g){g.gradientMap&&(M.gradientMap.value=g.gradientMap)}function S(M,g){M.metalness.value=g.metalness,g.metalnessMap&&(M.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,M.metalnessMapTransform)),M.roughness.value=g.roughness,g.roughnessMap&&(M.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,M.roughnessMapTransform)),g.envMap&&(M.envMapIntensity.value=g.envMapIntensity)}function y(M,g,P){M.ior.value=g.ior,g.sheen>0&&(M.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),M.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(M.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,M.sheenColorMapTransform)),g.sheenRoughnessMap&&(M.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,M.sheenRoughnessMapTransform))),g.clearcoat>0&&(M.clearcoat.value=g.clearcoat,M.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(M.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,M.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(M.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Fn&&M.clearcoatNormalScale.value.negate())),g.dispersion>0&&(M.dispersion.value=g.dispersion),g.iridescence>0&&(M.iridescence.value=g.iridescence,M.iridescenceIOR.value=g.iridescenceIOR,M.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(M.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,M.iridescenceMapTransform)),g.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),g.transmission>0&&(M.transmission.value=g.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(M.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,M.transmissionMapTransform)),M.thickness.value=g.thickness,g.thicknessMap&&(M.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=g.attenuationDistance,M.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(M.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(M.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=g.specularIntensity,M.specularColor.value.copy(g.specularColor),g.specularColorMap&&(M.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,M.specularColorMapTransform)),g.specularIntensityMap&&(M.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,M.specularIntensityMapTransform))}function C(M,g){g.matcap&&(M.matcap.value=g.matcap)}function w(M,g){const P=t.get(g).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Ob(o,t,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,O){const D=O.program;r.uniformBlockBinding(P,D)}function p(P,O){let D=l[P.id];D===void 0&&(C(P),D=_(P),l[P.id]=D,P.addEventListener("dispose",M));const H=O.program;r.updateUBOMapping(P,H);const I=t.render.frame;c[P.id]!==I&&(S(P),c[P.id]=I)}function _(P){const O=x();P.__bindingPointIndex=O;const D=o.createBuffer(),H=P.__size,I=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,H,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,D),D}function x(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const O=l[P.id],D=P.uniforms,H=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let I=0,B=D.length;I<B;I++){const q=Array.isArray(D[I])?D[I]:[D[I]];for(let R=0,T=q.length;R<T;R++){const F=q[R];if(y(F,I,R,H)===!0){const rt=F.__offset,et=Array.isArray(F.value)?F.value:[F.value];let ut=0;for(let ft=0;ft<et.length;ft++){const V=et[ft],st=w(V);typeof V=="number"||typeof V=="boolean"?(F.__data[0]=V,o.bufferSubData(o.UNIFORM_BUFFER,rt+ut,F.__data)):V.isMatrix3?(F.__data[0]=V.elements[0],F.__data[1]=V.elements[1],F.__data[2]=V.elements[2],F.__data[3]=0,F.__data[4]=V.elements[3],F.__data[5]=V.elements[4],F.__data[6]=V.elements[5],F.__data[7]=0,F.__data[8]=V.elements[6],F.__data[9]=V.elements[7],F.__data[10]=V.elements[8],F.__data[11]=0):(V.toArray(F.__data,ut),ut+=st.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,rt,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(P,O,D,H){const I=P.value,B=O+"_"+D;if(H[B]===void 0)return typeof I=="number"||typeof I=="boolean"?H[B]=I:H[B]=I.clone(),!0;{const q=H[B];if(typeof I=="number"||typeof I=="boolean"){if(q!==I)return H[B]=I,!0}else if(q.equals(I)===!1)return q.copy(I),!0}return!1}function C(P){const O=P.uniforms;let D=0;const H=16;for(let B=0,q=O.length;B<q;B++){const R=Array.isArray(O[B])?O[B]:[O[B]];for(let T=0,F=R.length;T<F;T++){const rt=R[T],et=Array.isArray(rt.value)?rt.value:[rt.value];for(let ut=0,ft=et.length;ut<ft;ut++){const V=et[ut],st=w(V),j=D%H,xt=j%st.boundary,L=j+xt;D+=xt,L!==0&&H-L<st.storage&&(D+=H-L),rt.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=D,D+=st.storage}}}const I=D%H;return I>0&&(D+=H-I),P.__size=D,P.__cache={},this}function w(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),O}function M(P){const O=P.target;O.removeEventListener("dispose",M);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function g(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},c={}}return{bind:m,update:p,dispose:g}}class Pb{constructor(t={}){const{canvas:i=mx(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const C=new Uint32Array(4),w=new Int32Array(4);let M=null,g=null;const P=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ri,this.toneMapping=Pa,this.toneMappingExposure=1;const D=this;let H=!1,I=0,B=0,q=null,R=-1,T=null;const F=new Ye,rt=new Ye;let et=null;const ut=new xe(0);let ft=0,V=i.width,st=i.height,j=1,xt=null,L=null;const it=new Ye(0,0,V,st),Et=new Ye(0,0,V,st);let At=!1;const Y=new rd;let pt=!1,St=!1;this.transmissionResolutionScale=1;const Tt=new Ve,Rt=new Ve,Kt=new at,Pt=new Ye,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function ie(){return q===null?j:1}let z=r;function mn(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${jh}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),z===null){const W="webgl2";if(z=mn(W,A),z===null)throw mn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let re,ce,kt,we,Xt,U,E,tt,ht,vt,dt,Ht,wt,zt,de,yt,Bt,qt,Gt,Ft,ae,Zt,De,X;function Lt(){re=new WE(z),re.init(),Zt=new Rb(z,re),ce=new IE(z,re,t,Zt),kt=new bb(z,re),ce.reverseDepthBuffer&&S&&kt.buffers.depth.setReversed(!0),we=new ZE(z),Xt=new hb,U=new Ab(z,re,kt,Xt,ce,Zt,we),E=new GE(D),tt=new XE(D),ht=new eM(z),De=new BE(z,ht),vt=new qE(z,ht,we,De),dt=new KE(z,vt,ht,we),Gt=new jE(z,ce,U),yt=new HE(Xt),Ht=new fb(D,E,tt,re,ce,De,yt),wt=new Nb(D,Xt),zt=new pb,de=new xb(re),qt=new zE(D,E,tt,kt,dt,y,m),Bt=new Eb(D,dt,ce),X=new Ob(z,we,ce,kt),Ft=new FE(z,re,we),ae=new YE(z,re,we),we.programs=Ht.programs,D.capabilities=ce,D.extensions=re,D.properties=Xt,D.renderLists=zt,D.shadowMap=Bt,D.state=kt,D.info=we}Lt();const ot=new Ub(D,z);this.xr=ot,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=re.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=re.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(V,st,!1))},this.getSize=function(A){return A.set(V,st)},this.setSize=function(A,W,$=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,st=W,i.width=Math.floor(A*j),i.height=Math.floor(W*j),$===!0&&(i.style.width=A+"px",i.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(V*j,st*j).floor()},this.setDrawingBufferSize=function(A,W,$){V=A,st=W,j=$,i.width=Math.floor(A*$),i.height=Math.floor(W*$),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(it)},this.setViewport=function(A,W,$,Q){A.isVector4?it.set(A.x,A.y,A.z,A.w):it.set(A,W,$,Q),kt.viewport(F.copy(it).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(Et)},this.setScissor=function(A,W,$,Q){A.isVector4?Et.set(A.x,A.y,A.z,A.w):Et.set(A,W,$,Q),kt.scissor(rt.copy(Et).multiplyScalar(j).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(A){kt.setScissorTest(At=A)},this.setOpaqueSort=function(A){xt=A},this.setTransparentSort=function(A){L=A},this.getClearColor=function(A){return A.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(A=!0,W=!0,$=!0){let Q=0;if(A){let Z=!1;if(q!==null){const Mt=q.texture.format;Z=Mt===nd||Mt===ed||Mt===td}if(Z){const Mt=q.texture.type,bt=Mt===aa||Mt===_r||Mt===Co||Mt===Ss||Mt===Jh||Mt===$h,Ot=qt.getClearColor(),Nt=qt.getClearAlpha(),$t=Ot.r,te=Ot.g,Yt=Ot.b;bt?(C[0]=$t,C[1]=te,C[2]=Yt,C[3]=Nt,z.clearBufferuiv(z.COLOR,0,C)):(w[0]=$t,w[1]=te,w[2]=Yt,w[3]=Nt,z.clearBufferiv(z.COLOR,0,w))}else Q|=z.COLOR_BUFFER_BIT}W&&(Q|=z.DEPTH_BUFFER_BIT),$&&(Q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),qt.dispose(),zt.dispose(),de.dispose(),Xt.dispose(),E.dispose(),tt.dispose(),dt.dispose(),De.dispose(),X.dispose(),Ht.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Oo),ot.removeEventListener("sessionend",bs),xi.stop()};function gt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const A=we.autoReset,W=Bt.enabled,$=Bt.autoUpdate,Q=Bt.needsUpdate,Z=Bt.type;Lt(),we.autoReset=A,Bt.enabled=W,Bt.autoUpdate=$,Bt.needsUpdate=Q,Bt.type=Z}function Dt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Jt(A){const W=A.target;W.removeEventListener("dispose",Jt),Ie(W)}function Ie(A){tn(A),Xt.remove(A)}function tn(A){const W=Xt.get(A).programs;W!==void 0&&(W.forEach(function($){Ht.releaseProgram($)}),A.isShaderMaterial&&Ht.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,$,Q,Z,Mt){W===null&&(W=Me);const bt=Z.isMesh&&Z.matrixWorld.determinant()<0,Ot=Mu(A,W,$,Q,Z);kt.setMaterial(Q,bt);let Nt=$.index,$t=1;if(Q.wireframe===!0){if(Nt=vt.getWireframeAttribute($),Nt===void 0)return;$t=2}const te=$.drawRange,Yt=$.attributes.position;let pe=te.start*$t,me=(te.start+te.count)*$t;Mt!==null&&(pe=Math.max(pe,Mt.start*$t),me=Math.min(me,(Mt.start+Mt.count)*$t)),Nt!==null?(pe=Math.max(pe,0),me=Math.min(me,Nt.count)):Yt!=null&&(pe=Math.max(pe,0),me=Math.min(me,Yt.count));const Fe=me-pe;if(Fe<0||Fe===1/0)return;De.setup(Z,Q,Ot,$,Nt);let Ee,ee=Ft;if(Nt!==null&&(Ee=ht.get(Nt),ee=ae,ee.setIndex(Ee)),Z.isMesh)Q.wireframe===!0?(kt.setLineWidth(Q.wireframeLinewidth*ie()),ee.setMode(z.LINES)):ee.setMode(z.TRIANGLES);else if(Z.isLine){let jt=Q.linewidth;jt===void 0&&(jt=1),kt.setLineWidth(jt*ie()),Z.isLineSegments?ee.setMode(z.LINES):Z.isLineLoop?ee.setMode(z.LINE_LOOP):ee.setMode(z.LINE_STRIP)}else Z.isPoints?ee.setMode(z.POINTS):Z.isSprite&&ee.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ee.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))ee.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const jt=Z._multiDrawStarts,an=Z._multiDrawCounts,ge=Z._multiDrawCount,Nn=Nt?ht.get(Nt).bytesPerElement:1,li=Xt.get(Q).currentProgram.getUniforms();for(let Cn=0;Cn<ge;Cn++)li.setValue(z,"_gl_DrawID",Cn),ee.render(jt[Cn]/Nn,an[Cn])}else if(Z.isInstancedMesh)ee.renderInstances(pe,Fe,Z.count);else if($.isInstancedBufferGeometry){const jt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,an=Math.min($.instanceCount,jt);ee.renderInstances(pe,Fe,an)}else ee.render(pe,Fe)};function ye(A,W,$){A.transparent===!0&&A.side===ta&&A.forceSinglePass===!1?(A.side=Fn,A.needsUpdate=!0,nn(A,W,$),A.side=za,A.needsUpdate=!0,nn(A,W,$),A.side=ta):nn(A,W,$)}this.compile=function(A,W,$=null){$===null&&($=A),g=de.get($),g.init(W),O.push(g),$.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),A!==$&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),g.setupLights();const Q=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Mt=Z.material;if(Mt)if(Array.isArray(Mt))for(let bt=0;bt<Mt.length;bt++){const Ot=Mt[bt];ye(Ot,$,Z),Q.add(Ot)}else ye(Mt,$,Z),Q.add(Mt)}),O.pop(),g=null,Q},this.compileAsync=function(A,W,$=null){const Q=this.compile(A,W,$);return new Promise(Z=>{function Mt(){if(Q.forEach(function(bt){Xt.get(bt).currentProgram.isReady()&&Q.delete(bt)}),Q.size===0){Z(A);return}setTimeout(Mt,10)}re.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let An=null;function Rn(A){An&&An(A)}function Oo(){xi.stop()}function bs(){xi.start()}const xi=new ov;xi.setAnimationLoop(Rn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(A){An=A,ot.setAnimationLoop(A),A===null?xi.stop():xi.start()},ot.addEventListener("sessionstart",Oo),ot.addEventListener("sessionend",bs),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(W),W=ot.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,W,q),g=de.get(A,O.length),g.init(W),O.push(g),Rt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Y.setFromProjectionMatrix(Rt),St=this.localClippingEnabled,pt=yt.init(this.clippingPlanes,St),M=zt.get(A,P.length),M.init(),P.push(M),ot.enabled===!0&&ot.isPresenting===!0){const Mt=D.xr.getDepthSensingMesh();Mt!==null&&Sr(Mt,W,-1/0,D.sortObjects)}Sr(A,W,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(xt,L),Ce=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ce&&qt.addToRenderList(M,A),this.info.render.frame++,pt===!0&&yt.beginShadows();const $=g.state.shadowsArray;Bt.render($,A,W),pt===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=M.opaque,Z=M.transmissive;if(g.setupLights(),W.isArrayCamera){const Mt=W.cameras;if(Z.length>0)for(let bt=0,Ot=Mt.length;bt<Ot;bt++){const Nt=Mt[bt];Po(Q,Z,A,Nt)}Ce&&qt.render(A);for(let bt=0,Ot=Mt.length;bt<Ot;bt++){const Nt=Mt[bt];As(M,A,Nt,Nt.viewport)}}else Z.length>0&&Po(Q,Z,A,W),Ce&&qt.render(A),As(M,A,W);q!==null&&B===0&&(U.updateMultisampleRenderTarget(q),U.updateRenderTargetMipmap(q)),A.isScene===!0&&A.onAfterRender(D,A,W),De.resetDefaultState(),R=-1,T=null,O.pop(),O.length>0?(g=O[O.length-1],pt===!0&&yt.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,P.pop(),P.length>0?M=P[P.length-1]:M=null};function Sr(A,W,$,Q){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){Q&&Pt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Rt);const bt=dt.update(A),Ot=A.material;Ot.visible&&M.push(A,bt,Ot,$,Pt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const bt=dt.update(A),Ot=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pt.copy(A.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Pt.copy(bt.boundingSphere.center)),Pt.applyMatrix4(A.matrixWorld).applyMatrix4(Rt)),Array.isArray(Ot)){const Nt=bt.groups;for(let $t=0,te=Nt.length;$t<te;$t++){const Yt=Nt[$t],pe=Ot[Yt.materialIndex];pe&&pe.visible&&M.push(A,bt,pe,$,Pt.z,Yt)}}else Ot.visible&&M.push(A,bt,Ot,$,Pt.z,null)}}const Mt=A.children;for(let bt=0,Ot=Mt.length;bt<Ot;bt++)Sr(Mt[bt],W,$,Q)}function As(A,W,$,Q){const Z=A.opaque,Mt=A.transmissive,bt=A.transparent;g.setupLightsView($),pt===!0&&yt.setGlobalState(D.clippingPlanes,$),Q&&kt.viewport(F.copy(Q)),Z.length>0&&Hn(Z,W,$),Mt.length>0&&Hn(Mt,W,$),bt.length>0&&Hn(bt,W,$),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Po(A,W,$,Q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Q.id]===void 0&&(g.state.transmissionRenderTarget[Q.id]=new vr(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?wo:aa,minFilter:gr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const Mt=g.state.transmissionRenderTarget[Q.id],bt=Q.viewport||F;Mt.setSize(bt.z*D.transmissionResolutionScale,bt.w*D.transmissionResolutionScale);const Ot=D.getRenderTarget();D.setRenderTarget(Mt),D.getClearColor(ut),ft=D.getClearAlpha(),ft<1&&D.setClearColor(16777215,.5),D.clear(),Ce&&qt.render($);const Nt=D.toneMapping;D.toneMapping=Pa;const $t=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),g.setupLightsView(Q),pt===!0&&yt.setGlobalState(D.clippingPlanes,Q),Hn(A,$,Q),U.updateMultisampleRenderTarget(Mt),U.updateRenderTargetMipmap(Mt),re.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Yt=0,pe=W.length;Yt<pe;Yt++){const me=W[Yt],Fe=me.object,Ee=me.geometry,ee=me.material,jt=me.group;if(ee.side===ta&&Fe.layers.test(Q.layers)){const an=ee.side;ee.side=Fn,ee.needsUpdate=!0,en(Fe,$,Q,Ee,ee,jt),ee.side=an,ee.needsUpdate=!0,te=!0}}te===!0&&(U.updateMultisampleRenderTarget(Mt),U.updateRenderTargetMipmap(Mt))}D.setRenderTarget(Ot),D.setClearColor(ut,ft),$t!==void 0&&(Q.viewport=$t),D.toneMapping=Nt}function Hn(A,W,$){const Q=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,Mt=A.length;Z<Mt;Z++){const bt=A[Z],Ot=bt.object,Nt=bt.geometry,$t=Q===null?bt.material:Q,te=bt.group;Ot.layers.test($.layers)&&en(Ot,W,$,Nt,$t,te)}}function en(A,W,$,Q,Z,Mt){A.onBeforeRender(D,W,$,Q,Z,Mt),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(D,W,$,Q,A,Mt),Z.transparent===!0&&Z.side===ta&&Z.forceSinglePass===!1?(Z.side=Fn,Z.needsUpdate=!0,D.renderBufferDirect($,W,Q,Z,A,Mt),Z.side=za,Z.needsUpdate=!0,D.renderBufferDirect($,W,Q,Z,A,Mt),Z.side=ta):D.renderBufferDirect($,W,Q,Z,A,Mt),A.onAfterRender(D,W,$,Q,Z,Mt)}function nn(A,W,$){W.isScene!==!0&&(W=Me);const Q=Xt.get(A),Z=g.state.lights,Mt=g.state.shadowsArray,bt=Z.state.version,Ot=Ht.getParameters(A,Z.state,Mt,W,$),Nt=Ht.getProgramCacheKey(Ot);let $t=Q.programs;Q.environment=A.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(A.isMeshStandardMaterial?tt:E).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",Jt),$t=new Map,Q.programs=$t);let te=$t.get(Nt);if(te!==void 0){if(Q.currentProgram===te&&Q.lightsStateVersion===bt)return xr(A,Ot),te}else Ot.uniforms=Ht.getUniforms(A),A.onBeforeCompile(Ot,D),te=Ht.acquireProgram(Ot,Nt),$t.set(Nt,te),Q.uniforms=Ot.uniforms;const Yt=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Yt.clippingPlanes=yt.uniform),xr(A,Ot),Q.needsLights=zo(A),Q.lightsStateVersion=bt,Q.needsLights&&(Yt.ambientLightColor.value=Z.state.ambient,Yt.lightProbe.value=Z.state.probe,Yt.directionalLights.value=Z.state.directional,Yt.directionalLightShadows.value=Z.state.directionalShadow,Yt.spotLights.value=Z.state.spot,Yt.spotLightShadows.value=Z.state.spotShadow,Yt.rectAreaLights.value=Z.state.rectArea,Yt.ltc_1.value=Z.state.rectAreaLTC1,Yt.ltc_2.value=Z.state.rectAreaLTC2,Yt.pointLights.value=Z.state.point,Yt.pointLightShadows.value=Z.state.pointShadow,Yt.hemisphereLights.value=Z.state.hemi,Yt.directionalShadowMap.value=Z.state.directionalShadowMap,Yt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Yt.spotShadowMap.value=Z.state.spotShadowMap,Yt.spotLightMatrix.value=Z.state.spotLightMatrix,Yt.spotLightMap.value=Z.state.spotLightMap,Yt.pointShadowMap.value=Z.state.pointShadowMap,Yt.pointShadowMatrix.value=Z.state.pointShadowMatrix),Q.currentProgram=te,Q.uniformsList=null,te}function Ui(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=du.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function xr(A,W){const $=Xt.get(A);$.outputColorSpace=W.outputColorSpace,$.batching=W.batching,$.batchingColor=W.batchingColor,$.instancing=W.instancing,$.instancingColor=W.instancingColor,$.instancingMorph=W.instancingMorph,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}function Mu(A,W,$,Q,Z){W.isScene!==!0&&(W=Me),U.resetTextureUnits();const Mt=W.fog,bt=Q.isMeshStandardMaterial?W.environment:null,Ot=q===null?D.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Ms,Nt=(Q.isMeshStandardMaterial?tt:E).get(Q.envMap||bt),$t=Q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,te=!!$.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Yt=!!$.morphAttributes.position,pe=!!$.morphAttributes.normal,me=!!$.morphAttributes.color;let Fe=Pa;Q.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Fe=D.toneMapping);const Ee=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ee=Ee!==void 0?Ee.length:0,jt=Xt.get(Q),an=g.state.lights;if(pt===!0&&(St===!0||A!==T)){const ke=A===T&&Q.id===R;yt.setState(Q,A,ke)}let ge=!1;Q.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==an.state.version||jt.outputColorSpace!==Ot||Z.isBatchedMesh&&jt.batching===!1||!Z.isBatchedMesh&&jt.batching===!0||Z.isBatchedMesh&&jt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&jt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&jt.instancing===!1||!Z.isInstancedMesh&&jt.instancing===!0||Z.isSkinnedMesh&&jt.skinning===!1||!Z.isSkinnedMesh&&jt.skinning===!0||Z.isInstancedMesh&&jt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&jt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&jt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&jt.instancingMorph===!1&&Z.morphTexture!==null||jt.envMap!==Nt||Q.fog===!0&&jt.fog!==Mt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==yt.numPlanes||jt.numIntersection!==yt.numIntersection)||jt.vertexAlphas!==$t||jt.vertexTangents!==te||jt.morphTargets!==Yt||jt.morphNormals!==pe||jt.morphColors!==me||jt.toneMapping!==Fe||jt.morphTargetsCount!==ee)&&(ge=!0):(ge=!0,jt.__version=Q.version);let Nn=jt.currentProgram;ge===!0&&(Nn=nn(Q,W,Z));let li=!1,Cn=!1,cn=!1;const Ue=Nn.getUniforms(),wn=jt.uniforms;if(kt.useProgram(Nn.program)&&(li=!0,Cn=!0,cn=!0),Q.id!==R&&(R=Q.id,Cn=!0),li||T!==A){kt.buffers.depth.getReversed()?(Tt.copy(A.projectionMatrix),_x(Tt),vx(Tt),Ue.setValue(z,"projectionMatrix",Tt)):Ue.setValue(z,"projectionMatrix",A.projectionMatrix),Ue.setValue(z,"viewMatrix",A.matrixWorldInverse);const gn=Ue.map.cameraPosition;gn!==void 0&&gn.setValue(z,Kt.setFromMatrixPosition(A.matrixWorld)),ce.logarithmicDepthBuffer&&Ue.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ue.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,Cn=!0,cn=!0)}if(Z.isSkinnedMesh){Ue.setOptional(z,Z,"bindMatrix"),Ue.setOptional(z,Z,"bindMatrixInverse");const ke=Z.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),Ue.setValue(z,"boneTexture",ke.boneTexture,U))}Z.isBatchedMesh&&(Ue.setOptional(z,Z,"batchingTexture"),Ue.setValue(z,"batchingTexture",Z._matricesTexture,U),Ue.setOptional(z,Z,"batchingIdTexture"),Ue.setValue(z,"batchingIdTexture",Z._indirectTexture,U),Ue.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ue.setValue(z,"batchingColorTexture",Z._colorsTexture,U));const Mn=$.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Gt.update(Z,$,Nn),(Cn||jt.receiveShadow!==Z.receiveShadow)&&(jt.receiveShadow=Z.receiveShadow,Ue.setValue(z,"receiveShadow",Z.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(wn.envMap.value=Nt,wn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(wn.envMapIntensity.value=W.environmentIntensity),Cn&&(Ue.setValue(z,"toneMappingExposure",D.toneMappingExposure),jt.needsLights&&yu(wn,cn),Mt&&Q.fog===!0&&wt.refreshFogUniforms(wn,Mt),wt.refreshMaterialUniforms(wn,Q,j,st,g.state.transmissionRenderTarget[A.id]),du.upload(z,Ui(jt),wn,U)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(du.upload(z,Ui(jt),wn,U),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ue.setValue(z,"center",Z.center),Ue.setValue(z,"modelViewMatrix",Z.modelViewMatrix),Ue.setValue(z,"normalMatrix",Z.normalMatrix),Ue.setValue(z,"modelMatrix",Z.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const ke=Q.uniformsGroups;for(let gn=0,Mr=ke.length;gn<Mr;gn++){const On=ke[gn];X.update(On,Nn),X.bind(On,Nn)}}return Nn}function yu(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function zo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,W,$){Xt.get(A.texture).__webglTexture=W,Xt.get(A.depthTexture).__webglTexture=$;const Q=Xt.get(A);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=$===void 0,Q.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const $=Xt.get(A);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0};const Ia=z.createFramebuffer();this.setRenderTarget=function(A,W=0,$=0){q=A,I=W,B=$;let Q=!0,Z=null,Mt=!1,bt=!1;if(A){const Nt=Xt.get(A);if(Nt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(z.FRAMEBUFFER,null),Q=!1;else if(Nt.__webglFramebuffer===void 0)U.setupRenderTarget(A);else if(Nt.__hasExternalTextures)U.rebindTextures(A,Xt.get(A.texture).__webglTexture,Xt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Yt=A.depthTexture;if(Nt.__boundDepthTexture!==Yt){if(Yt!==null&&Xt.has(Yt)&&(A.width!==Yt.image.width||A.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(A)}}const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(bt=!0);const te=Xt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(te[W])?Z=te[W][$]:Z=te[W],Mt=!0):A.samples>0&&U.useMultisampledRTT(A)===!1?Z=Xt.get(A).__webglMultisampledFramebuffer:Array.isArray(te)?Z=te[$]:Z=te,F.copy(A.viewport),rt.copy(A.scissor),et=A.scissorTest}else F.copy(it).multiplyScalar(j).floor(),rt.copy(Et).multiplyScalar(j).floor(),et=At;if($!==0&&(Z=Ia),kt.bindFramebuffer(z.FRAMEBUFFER,Z)&&Q&&kt.drawBuffers(A,Z),kt.viewport(F),kt.scissor(rt),kt.setScissorTest(et),Mt){const Nt=Xt.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+W,Nt.__webglTexture,$)}else if(bt){const Nt=Xt.get(A.texture),$t=W;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Nt.__webglTexture,$,$t)}else if(A!==null&&$!==0){const Nt=Xt.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Nt.__webglTexture,$)}R=-1},this.readRenderTargetPixels=function(A,W,$,Q,Z,Mt,bt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(Ot=Ot[bt]),Ot){kt.bindFramebuffer(z.FRAMEBUFFER,Ot);try{const Nt=A.texture,$t=Nt.format,te=Nt.type;if(!ce.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-Q&&$>=0&&$<=A.height-Z&&z.readPixels(W,$,Q,Z,Zt.convert($t),Zt.convert(te),Mt)}finally{const Nt=q!==null?Xt.get(q).__webglFramebuffer:null;kt.bindFramebuffer(z.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(A,W,$,Q,Z,Mt,bt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(Ot=Ot[bt]),Ot){const Nt=A.texture,$t=Nt.format,te=Nt.type;if(!ce.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-Q&&$>=0&&$<=A.height-Z){kt.bindFramebuffer(z.FRAMEBUFFER,Ot);const Yt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Yt),z.bufferData(z.PIXEL_PACK_BUFFER,Mt.byteLength,z.STREAM_READ),z.readPixels(W,$,Q,Z,Zt.convert($t),Zt.convert(te),0);const pe=q!==null?Xt.get(q).__webglFramebuffer:null;kt.bindFramebuffer(z.FRAMEBUFFER,pe);const me=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await gx(z,me,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Yt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Mt),z.deleteBuffer(Yt),z.deleteSync(me),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,$=0){A.isTexture!==!0&&(fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const Q=Math.pow(2,-$),Z=Math.floor(A.image.width*Q),Mt=Math.floor(A.image.height*Q),bt=W!==null?W.x:0,Ot=W!==null?W.y:0;U.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,bt,Ot,Z,Mt),kt.unbindTexture()};const Rs=z.createFramebuffer(),Li=z.createFramebuffer();this.copyTextureToTexture=function(A,W,$=null,Q=null,Z=0,Mt=null){A.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,A=arguments[1],W=arguments[2],Mt=arguments[3]||0,$=null),Mt===null&&(Z!==0?(fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Mt=Z,Z=0):Mt=0);let bt,Ot,Nt,$t,te,Yt,pe,me,Fe;const Ee=A.isCompressedTexture?A.mipmaps[Mt]:A.image;if($!==null)bt=$.max.x-$.min.x,Ot=$.max.y-$.min.y,Nt=$.isBox3?$.max.z-$.min.z:1,$t=$.min.x,te=$.min.y,Yt=$.isBox3?$.min.z:0;else{const Mn=Math.pow(2,-Z);bt=Math.floor(Ee.width*Mn),Ot=Math.floor(Ee.height*Mn),A.isDataArrayTexture?Nt=Ee.depth:A.isData3DTexture?Nt=Math.floor(Ee.depth*Mn):Nt=1,$t=0,te=0,Yt=0}Q!==null?(pe=Q.x,me=Q.y,Fe=Q.z):(pe=0,me=0,Fe=0);const ee=Zt.convert(W.format),jt=Zt.convert(W.type);let an;W.isData3DTexture?(U.setTexture3D(W,0),an=z.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(U.setTexture2DArray(W,0),an=z.TEXTURE_2D_ARRAY):(U.setTexture2D(W,0),an=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const ge=z.getParameter(z.UNPACK_ROW_LENGTH),Nn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),li=z.getParameter(z.UNPACK_SKIP_PIXELS),Cn=z.getParameter(z.UNPACK_SKIP_ROWS),cn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ee.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ee.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$t),z.pixelStorei(z.UNPACK_SKIP_ROWS,te),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Yt);const Ue=A.isDataArrayTexture||A.isData3DTexture,wn=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Mn=Xt.get(A),ke=Xt.get(W),gn=Xt.get(Mn.__renderTarget),Mr=Xt.get(ke.__renderTarget);kt.bindFramebuffer(z.READ_FRAMEBUFFER,gn.__webglFramebuffer),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Mr.__webglFramebuffer);for(let On=0;On<Nt;On++)Ue&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xt.get(A).__webglTexture,Z,Yt+On),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xt.get(W).__webglTexture,Mt,Fe+On)),z.blitFramebuffer($t,te,bt,Ot,pe,me,bt,Ot,z.DEPTH_BUFFER_BIT,z.NEAREST);kt.bindFramebuffer(z.READ_FRAMEBUFFER,null),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||Xt.has(A)){const Mn=Xt.get(A),ke=Xt.get(W);kt.bindFramebuffer(z.READ_FRAMEBUFFER,Rs),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Li);for(let gn=0;gn<Nt;gn++)Ue?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Mn.__webglTexture,Z,Yt+gn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Mn.__webglTexture,Z),wn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.__webglTexture,Mt,Fe+gn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ke.__webglTexture,Mt),Z!==0?z.blitFramebuffer($t,te,bt,Ot,pe,me,bt,Ot,z.COLOR_BUFFER_BIT,z.NEAREST):wn?z.copyTexSubImage3D(an,Mt,pe,me,Fe+gn,$t,te,bt,Ot):z.copyTexSubImage2D(an,Mt,pe,me,$t,te,bt,Ot);kt.bindFramebuffer(z.READ_FRAMEBUFFER,null),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else wn?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(an,Mt,pe,me,Fe,bt,Ot,Nt,ee,jt,Ee.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(an,Mt,pe,me,Fe,bt,Ot,Nt,ee,Ee.data):z.texSubImage3D(an,Mt,pe,me,Fe,bt,Ot,Nt,ee,jt,Ee):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Mt,pe,me,bt,Ot,ee,jt,Ee.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Mt,pe,me,Ee.width,Ee.height,ee,Ee.data):z.texSubImage2D(z.TEXTURE_2D,Mt,pe,me,bt,Ot,ee,jt,Ee);z.pixelStorei(z.UNPACK_ROW_LENGTH,ge),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Nn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,li),z.pixelStorei(z.UNPACK_SKIP_ROWS,Cn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,cn),Mt===0&&W.generateMipmaps&&z.generateMipmap(an),kt.unbindTexture()},this.copyTextureToTexture3D=function(A,W,$=null,Q=null,Z=0){return A.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Q=arguments[1]||null,A=arguments[2],W=arguments[3],Z=arguments[4]||0),fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,$,Q,Z)},this.initRenderTarget=function(A){Xt.get(A).__webglFramebuffer===void 0&&U.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?U.setTextureCube(A,0):A.isData3DTexture?U.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?U.setTexture2DArray(A,0):U.setTexture2D(A,0),kt.unbindTexture()},this.resetState=function(){I=0,B=0,q=null,kt.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const gi={red:15881030,lightGray:14209233,brown:5845806,brownDark:2300175,blue:6865856,white:16777215,black:0,gray:11184810};class zb{constructor(t){on(this,"scene");on(this,"camera");on(this,"renderer");on(this,"fov",60);on(this,"canvasId");on(this,"hemisphereLight");on(this,"directionalLight");on(this,"gameObjects");on(this,"position",{x:0,y:0});this.canvasId=t,this.initialize()}initialize(){if(!this.canvasId)return;this.scene=new Xx,this.scene.fog=new ad(16243114,100,950),this.camera=new oi(this.fov,window.innerWidth/window.innerHeight,1,1e3),this.camera.position.x=0,this.camera.position.z=200,this.camera.position.y=100;const t=document.getElementById(this.canvasId);t&&(this.renderer=new Pb({canvas:t,alpha:!0,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,document.body.appendChild(this.renderer.domElement),this.createLights(),window.addEventListener("resize",()=>this.onWindowResize(),!1))}createLights(){this.hemisphereLight=new jx(gi.gray,gi.black,.9),this.directionalLight=new Jx(gi.white,5),this.directionalLight.position.set(150,350,350),this.directionalLight.castShadow=!0,this.directionalLight.shadow.camera.left=-400,this.directionalLight.shadow.camera.right=400,this.directionalLight.shadow.camera.top=400,this.directionalLight.shadow.camera.bottom=-400,this.directionalLight.shadow.camera.near=1,this.directionalLight.shadow.camera.far=1e3,this.directionalLight.shadow.mapSize.width=2048,this.directionalLight.shadow.mapSize.height=2048,this.scene&&(this.scene.add(this.hemisphereLight),this.scene.add(this.directionalLight))}animate(){var t,i,r,l,c,h;this.gameObjects&&((i=(t=this.gameObjects)==null?void 0:t.sea)==null||i.animate(),(l=(r=this.gameObjects)==null?void 0:r.sky)==null||l.animate(),(h=(c=this.gameObjects)==null?void 0:c.airplane)==null||h.animate(this.position)),window.requestAnimationFrame(this.animate.bind(this)),this.render()}render(){var t;!this.renderer||!this.scene||!this.camera||(t=this.renderer)==null||t.render(this.scene,this.camera)}onWindowResize(){this.camera&&(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()),this.renderer&&this.renderer.setSize(window.innerWidth,window.innerHeight)}getScene(){return this.scene}setGameObjects(t){this.gameObjects=t}setPosition(t){this.position=t}}class Bb{constructor(){on(this,"geometry");on(this,"material");on(this,"mesh");this.initSeaMesh()}getMesh(){return this.mesh}initSeaMesh(){this.geometry=new sd(600,600,800,40,10),this.geometry.applyMatrix4(new Ve().makeRotationX(-Math.PI/2)),this.material=new La({color:gi.blue,transparent:!0,opacity:.6,flatShading:!0}),this.mesh=new xn(this.geometry,this.material),this.mesh.receiveShadow=!0,this.mesh.position.y=-600}animate(){this.mesh&&(this.mesh.rotation.z+=5e-4)}}class Fb{constructor(){on(this,"geometry");on(this,"material");on(this,"mesh");this.initCloudMesh()}initCloudMesh(){this.mesh=new $e,this.geometry=new si(20,20,20),this.material=new La({color:gi.lightGray});const t=3+Math.floor(Math.random()*3);for(let r=0;r<t;r++){const l=new xn(this.geometry,this.material);l.position.x=r*15,l.position.y=Math.random()*10,l.position.z=Math.random()*10,l.rotation.z=Math.random()*Math.PI*2,l.rotation.y=Math.random()*Math.PI*2;var i=.1+Math.random()*.9;l.scale.set(i,i,i),l.castShadow=!0,l.receiveShadow=!0,this.mesh.add(l)}}}class Ib{constructor(t){on(this,"mesh");this.initSkyMesh(t)}getMesh(){return this.mesh}initSkyMesh(t){this.mesh=new $e;const i=Math.PI*2/t;for(let c=0;c<t;c++){const h=new Fb,d=i*c;var r=750+Math.random()*200,l=1+Math.random()*2;h.mesh.position.y=Math.sin(d)*r,h.mesh.position.x=Math.cos(d)*r,h.mesh.position.z=-400-Math.random()*400,h.mesh.rotation.z=d+Math.PI/2,h.mesh.scale.set(l,l,l),this.mesh.add(h.mesh)}this.mesh.position.y=-600}animate(){this.mesh&&(this.mesh.rotation.z+=.004)}}class Hb{constructor(){on(this,"mesh");on(this,"propeller");this.initAirplaneMesh()}initAirplaneMesh(){this.mesh=new $e;const t=new si(60,50,50,1,1,1),i=new La({color:gi.red,flatShading:!0}),r=new xn(t,i);r.castShadow=!0,r.receiveShadow=!0,this.mesh.add(r);var l=new si(20,50,50,1,1,1),c=new La({color:gi.lightGray,flatShading:!0}),h=new xn(l,c);h.position.x=40,h.castShadow=!0,h.receiveShadow=!0,this.mesh.add(h);var d=new si(15,20,5,1,1,1),m=new La({color:gi.red,flatShading:!0}),p=new xn(d,m);p.position.set(-35,25,0),p.castShadow=!0,p.receiveShadow=!0,this.mesh.add(p);var _=new si(40,8,150,1,1,1),x=new La({color:gi.red,flatShading:!0}),S=new xn(_,x);S.castShadow=!0,S.receiveShadow=!0,this.mesh.add(S);var y=new si(20,10,10,1,1,1),C=new La({color:gi.brown,flatShading:!0});this.propeller=new xn(y,C),this.propeller.castShadow=!0,this.propeller.receiveShadow=!0;var w=new si(1,100,20,1,1,1),M=new La({color:gi.brownDark,flatShading:!0}),g=new xn(w,M);g.position.set(8,0,0),g.castShadow=!0,g.receiveShadow=!0,this.propeller.add(g),this.propeller.position.set(50,0,0),this.mesh.add(this.propeller),this.mesh.scale.set(.25,.25,.25),this.mesh.position.y=100}animate(t){if(!this.propeller||!this.mesh)return;this.propeller.rotation.x+=.06;const i=this.normalize(t.x,-1,1,-100,100),r=this.normalize(t.y,-1,1,25,175);this.mesh.position.x=i,this.mesh.position.y=r}normalize(t,i,r,l,c){const h=Math.max(Math.min(t,r),i),d=r-i,m=(h-i)/d,p=c-l;return l+m*p}}const Gb=o=>{if(!o)return;const t=new Bb,i=new Ib(20),r=new Hb;return o.add(t.getMesh()),o.add(i.getMesh()),o.add(r.mesh),{sea:t,sky:i,airplane:r}};function Vb(o,t){const i=-1+o.clientX/window.innerWidth*2,r=1-o.clientY/window.innerHeight*2;t.setPosition({x:i,y:r})}function kb(){return L_.useEffect(()=>{const o=new zb("mainGameCanvas"),t=o.getScene(),i=Gb(t);document.addEventListener("mousemove",r=>Vb(r,o)),i&&o.setGameObjects(i),o.animate()},[]),pu.jsx("div",{children:pu.jsx("canvas",{id:"mainGameCanvas"})})}AS.createRoot(document.getElementById("root")).render(pu.jsx(L_.StrictMode,{children:pu.jsx(kb,{})}));
