var Q=Object.defineProperty;var l=(e,t)=>Q(e,"name",{value:t,configurable:!0});import{a as M,r as h}from"./index.0289cf33.js";import{j as S}from"./jsx-runtime.03207dd2.js";/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},E.apply(this,arguments)}l(E,"_extends");var y;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(y||(y={}));function X(e){e===void 0&&(e={});let{initialEntries:t=["/"],initialIndex:r,v5Compat:n=!1}=e,a;a=t.map((c,d)=>m(c,typeof c=="string"?null:c.state,d===0?"default":void 0));let i=u(r==null?a.length-1:r),o=y.Pop,s=null;function u(c){return Math.min(Math.max(c,0),a.length-1)}l(u,"clampIndex");function f(){return a[i]}l(f,"getCurrentLocation");function m(c,d,p){d===void 0&&(d=null);let v=_(a?f().pathname:"/",c,d,p);return Y(v.pathname.charAt(0)==="/","relative pathnames are not supported in memory history: "+JSON.stringify(c)),v}return l(m,"createMemoryLocation"),{get index(){return i},get action(){return o},get location(){return f()},createHref(c){return typeof c=="string"?c:j(c)},encodeLocation(c){return c},push(c,d){o=y.Push;let p=m(c,d);i+=1,a.splice(i,a.length,p),n&&s&&s({action:o,location:p})},replace(c,d){o=y.Replace;let p=m(c,d);a[i]=p,n&&s&&s({action:o,location:p})},go(c){o=y.Pop,i=u(i+c),s&&s({action:o,location:f()})},listen(c){return s=c,()=>{s=null}}}}l(X,"createMemoryHistory");function Y(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}l(Y,"warning$1");function Z(){return Math.random().toString(36).substr(2,8)}l(Z,"createKey");function _(e,t,r,n){return r===void 0&&(r=null),E({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?b(t):t,{state:r,key:t&&t.key||n||Z()})}l(_,"createLocation");function j(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}l(j,"createPath");function b(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}l(b,"parsePath");var D;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(D||(D={}));function ee(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}l(ee,"stripBasename");function C(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}l(C,"invariant");function te(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?b(e):e;return{pathname:r?r.startsWith("/")?r:ne(r,t):t,search:re(n),hash:ae(a)}}l(te,"resolvePath");function ne(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}l(ne,"resolvePathname");function N(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}l(N,"getInvalidPathError");function B(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}l(B,"getPathContributingMatches");function F(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=b(e):(a=E({},e),C(!a.pathname||!a.pathname.includes("?"),N("?","pathname","search",a)),C(!a.pathname||!a.pathname.includes("#"),N("#","pathname","hash",a)),C(!a.search||!a.search.includes("#"),N("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,s;if(n||o==null)s=r;else{let g=t.length-1;if(o.startsWith("..")){let c=o.split("/");for(;c[0]==="..";)c.shift(),g-=1;a.pathname=c.join("/")}s=g>=0?t[g]:"/"}let u=te(a,s),f=o&&o!=="/"&&o.endsWith("/"),m=(i||o===".")&&r.endsWith("/");return!u.pathname.endsWith("/")&&(f||m)&&(u.pathname+="/"),u}l(F,"resolveTo");const H=l(e=>e.join("/").replace(/\/\/+/g,"/"),"joinPaths"),re=l(e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,"normalizeSearch"),ae=l(e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,"normalizeHash"),ie=new Set(["POST","PUT","PATCH","DELETE"]);[...ie];/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oe(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}l(oe,"isPolyfill");const le=typeof Object.is=="function"?Object.is:oe,{useState:se,useEffect:ce,useLayoutEffect:ue,useDebugValue:fe}=M;function he(e,t,r){const n=t(),[{inst:a},i]=se({inst:{value:n,getSnapshot:t}});return ue(()=>{a.value=n,a.getSnapshot=t,U(a)&&i({inst:a})},[e,n,t]),ce(()=>(U(a)&&i({inst:a}),e(l(()=>{U(a)&&i({inst:a})},"handleStoreChange"))),[e]),fe(n),n}l(he,"useSyncExternalStore$2");function U(e){const t=e.getSnapshot,r=e.value;try{const n=t();return!le(r,n)}catch{return!0}}l(U,"checkIfSnapshotChanged");function pe(e,t,r){return t()}l(pe,"useSyncExternalStore$1");const de=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",me=!de,ve=me?pe:he;"useSyncExternalStore"in M&&(e=>e.useSyncExternalStore)(M);const ge=h.exports.createContext(null),k=h.exports.createContext(null),W=h.exports.createContext(null),V=h.exports.createContext({outlet:null,matches:[]});function xe(e,t){let{relative:r}=t===void 0?{}:t;w()||C(!1);let{basename:n,navigator:a}=h.exports.useContext(k),{hash:i,pathname:o,search:s}=I(e,{relative:r}),u=o;return n!=="/"&&(u=o==="/"?n:H([n,o])),a.createHref({pathname:u,search:s,hash:i})}l(xe,"useHref");function w(){return h.exports.useContext(W)!=null}l(w,"useInRouterContext");function O(){return w()||C(!1),h.exports.useContext(W).location}l(O,"useLocation");function ye(){w()||C(!1);let{basename:e,navigator:t}=h.exports.useContext(k),{matches:r}=h.exports.useContext(V),{pathname:n}=O(),a=JSON.stringify(B(r).map(s=>s.pathnameBase)),i=h.exports.useRef(!1);return h.exports.useEffect(()=>{i.current=!0}),h.exports.useCallback(function(s,u){if(u===void 0&&(u={}),!i.current)return;if(typeof s=="number"){t.go(s);return}let f=F(s,JSON.parse(a),n,u.relative==="path");e!=="/"&&(f.pathname=f.pathname==="/"?e:H([e,f.pathname])),(u.replace?t.replace:t.push)(f,u.state,u)},[e,t,a,n])}l(ye,"useNavigate");function I(e,t){let{relative:r}=t===void 0?{}:t,{matches:n}=h.exports.useContext(V),{pathname:a}=O(),i=JSON.stringify(B(n).map(o=>o.pathnameBase));return h.exports.useMemo(()=>F(e,JSON.parse(i),a,r==="path"),[e,i,a,r])}l(I,"useResolvedPath");var J;(function(e){e.UseRevalidator="useRevalidator"})(J||(J={}));var T;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(T||(T={}));function Ue(e){let{basename:t,children:r,initialEntries:n,initialIndex:a}=e,i=h.exports.useRef();i.current==null&&(i.current=X({initialEntries:n,initialIndex:a,v5Compat:!0}));let o=i.current,[s,u]=h.exports.useState({action:o.action,location:o.location});return h.exports.useLayoutEffect(()=>o.listen(u),[o]),S(Ce,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:o})}l(Ue,"MemoryRouter");function Ce(e){let{basename:t="/",children:r=null,location:n,navigationType:a=y.Pop,navigator:i,static:o=!1}=e;w()&&C(!1);let s=t.replace(/^\/*/,"/"),u=h.exports.useMemo(()=>({basename:s,navigator:i,static:o}),[s,i,o]);typeof n=="string"&&(n=b(n));let{pathname:f="/",search:m="",hash:g="",state:c=null,key:d="default"}=n,p=h.exports.useMemo(()=>{let v=ee(f,s);return v==null?null:{pathname:v,search:m,hash:g,state:c,key:d}},[s,f,m,g,c,d]);return p==null?null:S(k.Provider,{value:u,children:S(W.Provider,{children:r,value:{location:p,navigationType:a}})})}l(Ce,"Router");var A;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(A||(A={}));new Promise(()=>{});/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function z(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}l(z,"_objectWithoutPropertiesLoose");function Pe(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}l(Pe,"isModifiedEvent");function Se(e,t){return e.button===0&&(!t||t==="_self")&&!Pe(e)}l(Se,"shouldProcessLinkClick");const Le=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Ee=["aria-current","caseSensitive","className","end","style","to","children"],be=h.exports.forwardRef(l(function(t,r){let{onClick:n,relative:a,reloadDocument:i,replace:o,state:s,target:u,to:f,preventScrollReset:m}=t,g=z(t,Le),c=xe(f,{relative:a}),d=we(f,{replace:o,state:s,target:u,preventScrollReset:m,relative:a});function p(v){n&&n(v),v.defaultPrevented||d(v)}return l(p,"handleClick"),S("a",{...g,href:c,onClick:i?n:p,ref:r,target:u})},"LinkWithRef")),Me=h.exports.forwardRef(l(function(t,r){let{"aria-current":n="page",caseSensitive:a=!1,className:i="",end:o=!1,style:s,to:u,children:f}=t,m=z(t,Ee),g=I(u,{relative:m.relative}),c=O(),d=h.exports.useContext(ge),p=g.pathname,v=c.pathname,x=d&&d.navigation&&d.navigation.location?d.navigation.location.pathname:null;a||(v=v.toLowerCase(),x=x?x.toLowerCase():null,p=p.toLowerCase());let P=v===p||!o&&v.startsWith(p)&&v.charAt(p.length)==="/",L=x!=null&&(x===p||!o&&x.startsWith(p)&&x.charAt(p.length)==="/"),G=P?n:void 0,R;typeof i=="function"?R=i({isActive:P,isPending:L}):R=[i,P?"active":null,L?"pending":null].filter(Boolean).join(" ");let q=typeof s=="function"?s({isActive:P,isPending:L}):s;return S(be,{...m,"aria-current":G,className:R,ref:r,style:q,to:u,children:typeof f=="function"?f({isActive:P,isPending:L}):f})},"NavLinkWithRef"));var K;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(K||(K={}));var $;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($||($={}));function we(e,t){let{target:r,replace:n,state:a,preventScrollReset:i,relative:o}=t===void 0?{}:t,s=ye(),u=O(),f=I(e,{relative:o});return h.exports.useCallback(m=>{if(Se(m,r)){m.preventDefault();let g=n!==void 0?n:j(u)===j(f);s(e,{replace:g,state:a,preventScrollReset:i,relative:o})}},[u,s,f,n,a,r,e,i,o])}l(we,"useLinkClickHandler");export{be as L,Ue as M,Me as N};
//# sourceMappingURL=index.f901d620.js.map
