import{S as at,i as rt,s as ot,a as it,e as T,c as st,b as F,g as X,t as j,d as Z,f as D,h as V,j as lt,o as Ie,k as ct,l as ft,m as ut,n as ke,p as z,q as dt,r as pt,u as ht,v as M,w as G,x as ie,y as H,z as K,A as de}from"./chunks/index-011766e3.js";import{S as tt,I as J,g as ze,f as Je,a as Ee,b as pe,s as W,i as We,c as he,P as Ye,d as mt}from"./chunks/singletons-1922caa6.js";import{R as Xe,H as Ae}from"./chunks/control-e7f5239e.js";import{s as _t,a as gt}from"./chunks/shared-23917130.js";function wt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function yt(a){return a.split("%25").map(decodeURI).join("%25")}function bt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const vt=["href","pathname","search","searchParams","toString","toJSON"];function kt(a,e){const n=new URL(a);for(const o of vt){let r=n[o];Object.defineProperty(n,o,{get(){return e(),r},enumerable:!0,configurable:!0})}return Et(n),n}function Et(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const $t="/__data.json";function Rt(a){return a.replace(/\/$/,"")+$t}function St(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&re.delete(Ne(a)),me(a,e));const re=new Map;function Lt(a,e){const n=Ne(a,e),o=document.querySelector(n);if(o!=null&&o.textContent){const{body:r,...d}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&re.set(n,{body:r,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(r,d))}return me(a,e)}function It(a,e,n){if(re.size>0){const o=Ne(a,n),r=re.get(o);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(r.body,r.init);re.delete(o)}}return me(e,n)}function Ne(a,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${St(e.body)}"]`),o}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Nt(a).map(o=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(r)return e.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(d)return e.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const t=o.split(/\[(.+?)\](?!\])/);return"/"+t.map((u,p)=>{if(p%2){if(u.startsWith("x+"))return $e(String.fromCharCode(parseInt(u.slice(2),16)));if(u.startsWith("u+"))return $e(String.fromCharCode(...u.slice(2).split("-").map(O=>parseInt(O,16))));const g=At.exec(u);if(!g)throw new Error(`Invalid param: ${u}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,y,N,E,q]=g;return e.push({name:E,matcher:q,optional:!!y,rest:!!N,chained:N?p===1&&t[0]==="":!1}),N?"(.*?)":y?"([^/]*)?":"([^/]+?)"}return $e(u)}).join("")}).join("")}/?$`),params:e}}function Pt(a){return!/^\([^)]+\)$/.test(a)}function Nt(a){return a.slice(1).split("/").filter(Pt)}function Ut(a,e,n){const o={},r=a.slice(1);let d="";for(let t=0;t<e.length;t+=1){const f=e[t];let u=r[t];if(f.chained&&f.rest&&d&&(u=u?d+"/"+u:d),d="",u===void 0)f.rest&&(o[f.name]="");else{if(f.matcher&&!n[f.matcher](u)){if(f.optional&&f.chained){let p=r.indexOf(void 0,t);if(p===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)d=u;else return}for(;p>=t;)r[p]=r[p-1],p-=1;continue}return}o[f.name]=u}}if(!d)return o}function $e(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Tt(a,e,n,o){const r=new Set(e);return Object.entries(n).map(([f,[u,p,g]])=>{const{pattern:y,params:N}=Ot(f),E={id:f,exec:q=>{const O=y.exec(q);if(O)return Ut(O,N,o)},errors:[1,...g||[]].map(q=>a[q]),layouts:[0,...p||[]].map(t),leaf:d(u)};return E.errors.length=E.layouts.length=Math.max(E.errors.length,E.layouts.length),E});function d(f){const u=f<0;return u&&(f=~f),[u,a[f]]}function t(f){return f===void 0?f:[r.has(f),a[f]]}}function jt(a){let e,n,o;var r=a[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return r&&(e=M(r,d(a))),{c(){e&&G(e.$$.fragment),n=T()},l(t){e&&ie(e.$$.fragment,t),n=T()},m(t,f){e&&H(e,t,f),F(t,n,f),o=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&2&&(u.form=t[1]),r!==(r=t[0][0])){if(e){X();const p=e;j(p.$$.fragment,1,0,()=>{K(p,1)}),Z()}r?(e=M(r,d(t)),G(e.$$.fragment),D(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&j(e.$$.fragment,t),o=!1},d(t){t&&V(n),e&&K(e,t)}}}function Dt(a){let e,n,o;var r=a[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[Bt]},$$scope:{ctx:t}}}}return r&&(e=M(r,d(a))),{c(){e&&G(e.$$.fragment),n=T()},l(t){e&&ie(e.$$.fragment,t),n=T()},m(t,f){e&&H(e,t,f),F(t,n,f),o=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&1051&&(u.$$scope={dirty:f,ctx:t}),r!==(r=t[0][0])){if(e){X();const p=e;j(p.$$.fragment,1,0,()=>{K(p,1)}),Z()}r?(e=M(r,d(t)),G(e.$$.fragment),D(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&j(e.$$.fragment,t),o=!1},d(t){t&&V(n),e&&K(e,t)}}}function Ct(a){let e,n,o;var r=a[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return r&&(e=M(r,d(a))),{c(){e&&G(e.$$.fragment),n=T()},l(t){e&&ie(e.$$.fragment,t),n=T()},m(t,f){e&&H(e,t,f),F(t,n,f),o=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&2&&(u.form=t[1]),r!==(r=t[0][1])){if(e){X();const p=e;j(p.$$.fragment,1,0,()=>{K(p,1)}),Z()}r?(e=M(r,d(t)),G(e.$$.fragment),D(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&j(e.$$.fragment,t),o=!1},d(t){t&&V(n),e&&K(e,t)}}}function Vt(a){let e,n,o;var r=a[0][1];function d(t){return{props:{data:t[3],$$slots:{default:[qt]},$$scope:{ctx:t}}}}return r&&(e=M(r,d(a))),{c(){e&&G(e.$$.fragment),n=T()},l(t){e&&ie(e.$$.fragment,t),n=T()},m(t,f){e&&H(e,t,f),F(t,n,f),o=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&1043&&(u.$$scope={dirty:f,ctx:t}),r!==(r=t[0][1])){if(e){X();const p=e;j(p.$$.fragment,1,0,()=>{K(p,1)}),Z()}r?(e=M(r,d(t)),G(e.$$.fragment),D(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&j(e.$$.fragment,t),o=!1},d(t){t&&V(n),e&&K(e,t)}}}function qt(a){let e,n,o;var r=a[0][2];function d(t){return{props:{data:t[4],form:t[1]}}}return r&&(e=M(r,d(a))),{c(){e&&G(e.$$.fragment),n=T()},l(t){e&&ie(e.$$.fragment,t),n=T()},m(t,f){e&&H(e,t,f),F(t,n,f),o=!0},p(t,f){const u={};if(f&16&&(u.data=t[4]),f&2&&(u.form=t[1]),r!==(r=t[0][2])){if(e){X();const p=e;j(p.$$.fragment,1,0,()=>{K(p,1)}),Z()}r?(e=M(r,d(t)),G(e.$$.fragment),D(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&j(e.$$.fragment,t),o=!1},d(t){t&&V(n),e&&K(e,t)}}}function Bt(a){let e,n,o,r;const d=[Vt,Ct],t=[];function f(u,p){return u[0][2]?0:1}return e=f(a),n=t[e]=d[e](a),{c(){n.c(),o=T()},l(u){n.l(u),o=T()},m(u,p){t[e].m(u,p),F(u,o,p),r=!0},p(u,p){let g=e;e=f(u),e===g?t[e].p(u,p):(X(),j(t[g],1,1,()=>{t[g]=null}),Z(),n=t[e],n?n.p(u,p):(n=t[e]=d[e](u),n.c()),D(n,1),n.m(o.parentNode,o))},i(u){r||(D(n),r=!0)},o(u){j(n),r=!1},d(u){t[e].d(u),u&&V(o)}}}function Ze(a){let e,n=a[6]&&Qe(a);return{c(){e=ct("div"),n&&n.c(),this.h()},l(o){e=ft(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=ut(e);n&&n.l(r),r.forEach(V),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),z(e,"position","absolute"),z(e,"left","0"),z(e,"top","0"),z(e,"clip","rect(0 0 0 0)"),z(e,"clip-path","inset(50%)"),z(e,"overflow","hidden"),z(e,"white-space","nowrap"),z(e,"width","1px"),z(e,"height","1px")},m(o,r){F(o,e,r),n&&n.m(e,null)},p(o,r){o[6]?n?n.p(o,r):(n=Qe(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&V(e),n&&n.d()}}}function Qe(a){let e;return{c(){e=dt(a[7])},l(n){e=pt(n,a[7])},m(n,o){F(n,e,o)},p(n,o){o&128&&ht(e,n[7])},d(n){n&&V(e)}}}function Ft(a){let e,n,o,r,d;const t=[Dt,jt],f=[];function u(g,y){return g[0][1]?0:1}e=u(a),n=f[e]=t[e](a);let p=a[5]&&Ze(a);return{c(){n.c(),o=it(),p&&p.c(),r=T()},l(g){n.l(g),o=st(g),p&&p.l(g),r=T()},m(g,y){f[e].m(g,y),F(g,o,y),p&&p.m(g,y),F(g,r,y),d=!0},p(g,[y]){let N=e;e=u(g),e===N?f[e].p(g,y):(X(),j(f[N],1,1,()=>{f[N]=null}),Z(),n=f[e],n?n.p(g,y):(n=f[e]=t[e](g),n.c()),D(n,1),n.m(o.parentNode,o)),g[5]?p?p.p(g,y):(p=Ze(g),p.c(),p.m(r.parentNode,r)):p&&(p.d(1),p=null)},i(g){d||(D(n),d=!0)},o(g){j(n),d=!1},d(g){f[e].d(g),g&&V(o),p&&p.d(g),g&&V(r)}}}function Mt(a,e,n){let{stores:o}=e,{page:r}=e,{components:d}=e,{form:t}=e,{data_0:f=null}=e,{data_1:u=null}=e,{data_2:p=null}=e;lt(o.page.notify);let g=!1,y=!1,N=null;return Ie(()=>{const E=o.page.subscribe(()=>{g&&(n(6,y=!0),n(7,N=document.title||"untitled page"))});return n(5,g=!0),E}),a.$$set=E=>{"stores"in E&&n(8,o=E.stores),"page"in E&&n(9,r=E.page),"components"in E&&n(0,d=E.components),"form"in E&&n(1,t=E.form),"data_0"in E&&n(2,f=E.data_0),"data_1"in E&&n(3,u=E.data_1),"data_2"in E&&n(4,p=E.data_2)},a.$$.update=()=>{a.$$.dirty&768&&o.page.set(r)},[d,t,f,u,p,g,y,N,o,r]}class Gt extends at{constructor(e){super(),rt(this,e,Mt,Ft,ot,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Ht="modulepreload",Kt=function(a,e){return new URL(a,e).href},xe={},ee=function(e,n,o){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(d=>{if(d=Kt(d,o),d in xe)return;xe[d]=!0;const t=d.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!o)for(let g=r.length-1;g>=0;g--){const y=r[g];if(y.href===d&&(!t||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${f}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":Ht,t||(p.as="script",p.crossOrigin=""),p.href=d,document.head.appendChild(p),t)return new Promise((g,y)=>{p.addEventListener("load",g),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>e())},zt={},_e=[()=>ee(()=>import("./chunks/0-f7915509.js"),["./chunks/0-f7915509.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-8813bb08.js","./chunks/index-011766e3.js","./assets/_layout-b9719f7d.css"],import.meta.url),()=>ee(()=>import("./chunks/1-f0ff3754.js"),["./chunks/1-f0ff3754.js","./components/error.svelte-7b85b468.js","./chunks/index-011766e3.js","./chunks/singletons-1922caa6.js","./chunks/index-331858ca.js","./chunks/shared-23917130.js"],import.meta.url),()=>ee(()=>import("./chunks/2-24637165.js"),["./chunks/2-24637165.js","./chunks/_layout-433e33ff.js","./chunks/user-887bebe1.js","./chunks/index-331858ca.js","./chunks/index-011766e3.js","./chunks/control-e7f5239e.js","./chunks/shared-23917130.js","./components/pages/(authed)/_layout.svelte-5649af23.js","./chunks/Layout-58762d2c.js","./chunks/IconBase-0d885742.js","./assets/IconBase-6bf551a2.css"],import.meta.url),()=>ee(()=>import("./chunks/3-f9e5cd9c.js"),["./chunks/3-f9e5cd9c.js","./components/pages/(unauthed)/_layout.svelte-5649af23.js","./chunks/index-011766e3.js","./chunks/Layout-58762d2c.js","./chunks/index-331858ca.js","./chunks/IconBase-0d885742.js","./assets/IconBase-6bf551a2.css"],import.meta.url),()=>ee(()=>import("./chunks/4-f6b4b2a1.js"),["./chunks/4-f6b4b2a1.js","./components/pages/(authed)/_page.svelte-faa5fafd.js","./chunks/index-011766e3.js","./chunks/IconBase-0d885742.js","./assets/IconBase-6bf551a2.css","./chunks/index-331858ca.js","./chunks/user-887bebe1.js"],import.meta.url),()=>ee(()=>import("./chunks/5-015952b1.js"),["./chunks/5-015952b1.js","./components/pages/(unauthed)/login/_page.svelte-c449127e.js","./chunks/index-011766e3.js","./chunks/singletons-1922caa6.js","./chunks/index-331858ca.js","./chunks/shared-23917130.js","./chunks/user-887bebe1.js","./assets/IconBase-6bf551a2.css"],import.meta.url)],Jt=[],Wt={"/(authed)":[4,[2]],"/(unauthed)/login":[5,[3]]},Yt={handleError:({error:a})=>{console.error(a)}};async function Xt(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([o,r])=>[o,await r])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Zt=-1,Qt=-2,xt=-3,en=-4,tn=-5,nn=-6;function an(a){if(typeof a=="number")return o(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const e=a,n=Array(e.length);function o(r,d=!1){if(r===Zt)return;if(r===xt)return NaN;if(r===en)return 1/0;if(r===tn)return-1/0;if(r===nn)return-0;if(d)throw new Error("Invalid input");if(r in n)return n[r];const t=e[r];if(!t||typeof t!="object")n[r]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[r]=new Date(t[1]);break;case"Set":const u=new Set;n[r]=u;for(let y=1;y<t.length;y+=1)u.add(o(t[y]));break;case"Map":const p=new Map;n[r]=p;for(let y=1;y<t.length;y+=2)p.set(o(t[y]),o(t[y+1]));break;case"RegExp":n[r]=new RegExp(t[1],t[2]);break;case"Object":n[r]=Object(t[1]);break;case"BigInt":n[r]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[r]=g;for(let y=1;y<t.length;y+=2)g[t[y]]=o(t[y+1]);break}else{const f=new Array(t.length);n[r]=f;for(let u=0;u<t.length;u+=1){const p=t[u];p!==Qt&&(f[u]=o(p))}}else{const f={};n[r]=f;for(const u in t){const p=t[u];f[u]=o(p)}}return n[r]}return o(0)}function rn(a){return a.filter(e=>e!=null)}const Re=Tt(_e,Jt,Wt,zt),Oe=_e[0],Pe=_e[1];Oe();Pe();let oe={};try{oe=JSON.parse(sessionStorage[tt])}catch{}function Se(a){oe[a]=he()}function on({target:a,base:e}){var Ge;const n=document.documentElement,o=[];let r=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,u=!1,p=!0,g=!1,y=!1,N=!1,E=!1,q,O=(Ge=history.state)==null?void 0:Ge[J];O||(O=Date.now(),history.replaceState({...history.state,[J]:O},"",location.href));const ge=oe[O];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let Y,Ue,se;async function Te(){se=se||Promise.resolve(),await se,se=null;const i=new URL(location.href),s=fe(i,!0);r=null,await De(s,i,[])}async function we(i,{noScroll:s=!1,replaceState:c=!1,keepFocus:l=!1,state:m={},invalidateAll:h=!1},_,v){return typeof i=="string"&&(i=new URL(i,ze(document))),ue({url:i,scroll:s?he():null,keepfocus:l,redirect_chain:_,details:{state:m,replaceState:c},nav_token:v,accepted:()=>{h&&(E=!0)},blocked:()=>{},type:"goto"})}async function je(i){const s=fe(i,!1);if(!s)throw new Error(`Attempted to preload a URL that does not belong to this app: ${i}`);return r={id:s.id,promise:qe(s).then(c=>(c.type==="loaded"&&c.state.error&&(r=null),c))},r.promise}async function le(...i){const c=Re.filter(l=>i.some(m=>l.exec(m))).map(l=>Promise.all([...l.layouts,l.leaf].map(m=>m==null?void 0:m[1]())));await Promise.all(c)}async function De(i,s,c,l,m={},h){var v,b;Ue=m;let _=i&&await qe(i);if(_||(_=await Me(s,{id:null},await ae(new Error(`Not found: ${s.pathname}`),{url:s,params:{},route:{id:null}}),404)),s=(i==null?void 0:i.url)||s,Ue!==m)return!1;if(_.type==="redirect")if(c.length>10||c.includes(s.pathname))_=await ce({status:500,error:await ae(new Error("Redirect loop"),{url:s,params:{},route:{id:null}}),url:s,route:{id:null}});else return we(new URL(_.location,s).href,{},[...c,s.pathname],m),!1;else((b=(v=_.props)==null?void 0:v.page)==null?void 0:b.status)>=400&&await W.updated.check()&&await ne(s);if(o.length=0,E=!1,g=!0,l&&l.details){const{details:w}=l,$=w.replaceState?0:1;w.state[J]=O+=$,history[w.replaceState?"replaceState":"pushState"](w.state,"",s)}if(r=null,u?(t=_.state,_.props.page&&(_.props.page.url=s),q.$set(_.props)):Ce(_),l){const{scroll:w,keepfocus:$}=l;if($||Le(),await de(),p){const I=s.hash&&document.getElementById(s.hash.slice(1));w?scrollTo(w.x,w.y):I?I.scrollIntoView():scrollTo(0,0)}}else await de();p=!0,_.props.page&&(Y=_.props.page),h&&h(),g=!1}function Ce(i){var l;t=i.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),Y=i.props.page,q=new Gt({target:a,props:{...i.props,stores:W},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};d.after_navigate.forEach(m=>m(c)),u=!0}async function te({url:i,params:s,branch:c,status:l,error:m,route:h,form:_}){let v="never";for(const S of c)(S==null?void 0:S.slash)!==void 0&&(v=S.slash);i.pathname=wt(i.pathname,v),i.search=i.search;const b={type:"loaded",state:{url:i,params:s,branch:c,error:m,route:h},props:{components:rn(c).map(S=>S.node.component)}};_!==void 0&&(b.props.form=_);let w={},$=!Y,I=0;for(let S=0;S<Math.max(c.length,t.branch.length);S+=1){const k=c[S],P=t.branch[S];(k==null?void 0:k.data)!==(P==null?void 0:P.data)&&($=!0),k&&(w={...w,...k.data},$&&(b.props[`data_${I}`]=w),I+=1)}return(!t.url||i.href!==t.url.href||t.error!==m||_!==void 0&&_!==Y.form||$)&&(b.props.page={error:m,params:s,route:{id:(h==null?void 0:h.id)??null},status:l,url:new URL(i),form:_??null,data:$?w:Y.data}),b}async function ye({loader:i,parent:s,url:c,params:l,route:m,server_data_node:h}){var w,$,I;let _=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await i();if((w=b.universal)!=null&&w.load){let B=function(...k){for(const P of k){const{href:C}=new URL(P,c);v.dependencies.add(C)}};const S={route:{get id(){return v.route=!0,m.id}},params:new Proxy(l,{get:(k,P)=>(v.params.add(P),k[P])}),data:(h==null?void 0:h.data)??null,url:kt(c,()=>{v.url=!0}),async fetch(k,P){let C;k instanceof Request?(C=k.url,P={body:k.method==="GET"||k.method==="HEAD"?void 0:await k.blob(),cache:k.cache,credentials:k.credentials,headers:k.headers,integrity:k.integrity,keepalive:k.keepalive,method:k.method,mode:k.mode,redirect:k.redirect,referrer:k.referrer,referrerPolicy:k.referrerPolicy,signal:k.signal,...P}):C=k;const R=new URL(C,c).href;return B(R),u?It(C,R,P):Lt(C,P)},setHeaders:()=>{},depends:B,parent(){return v.parent=!0,s()}};_=await b.universal.load.call(null,S)??null,_=_?await Xt(_):null}return{node:b,loader:i,server:h,universal:($=b.universal)!=null&&$.load?{type:"data",data:_,uses:v}:null,data:_??(h==null?void 0:h.data)??null,slash:((I=b.universal)==null?void 0:I.trailingSlash)??(h==null?void 0:h.slash)}}function Ve(i,s,c,l,m){if(E)return!0;if(!l)return!1;if(l.parent&&i||l.route&&s||l.url&&c)return!0;for(const h of l.params)if(m[h]!==t.params[h])return!0;for(const h of l.dependencies)if(o.some(_=>_(new URL(h))))return!0;return!1}function be(i,s){return(i==null?void 0:i.type)==="data"?{type:"data",data:i.data,uses:{dependencies:new Set(i.uses.dependencies??[]),params:new Set(i.uses.params??[]),parent:!!i.uses.parent,route:!!i.uses.route,url:!!i.uses.url},slash:i.slash}:(i==null?void 0:i.type)==="skip"?s??null:null}async function qe({id:i,invalidating:s,url:c,params:l,route:m}){if((r==null?void 0:r.id)===i)return r.promise;const{errors:h,layouts:_,leaf:v}=m,b=[..._,v];h.forEach(R=>R==null?void 0:R().catch(()=>{})),b.forEach(R=>R==null?void 0:R[1]().catch(()=>{}));let w=null;const $=t.url?i!==t.url.pathname+t.url.search:!1,I=t.route?m.id!==t.route.id:!1,B=b.reduce((R,A,U)=>{var x;const L=t.branch[U],Q=!!(A!=null&&A[0])&&((L==null?void 0:L.loader)!==A[1]||Ve(R.some(Boolean),I,$,(x=L.server)==null?void 0:x.uses,l));return R.push(Q),R},[]);if(B.some(Boolean)){try{w=await et(c,B)}catch(R){return ce({status:500,error:await ae(R,{url:c,params:l,route:{id:m.id}}),url:c,route:m})}if(w.type==="redirect")return w}const S=w==null?void 0:w.nodes;let k=!1;const P=b.map(async(R,A)=>{var x;if(!R)return;const U=t.branch[A],L=S==null?void 0:S[A];if((!L||L.type==="skip")&&R[1]===(U==null?void 0:U.loader)&&!Ve(k,I,$,(x=U.universal)==null?void 0:x.uses,l))return U;if(k=!0,(L==null?void 0:L.type)==="error")throw L;return ye({loader:R[1],url:c,params:l,route:m,parent:async()=>{var Ke;const He={};for(let ve=0;ve<A;ve+=1)Object.assign(He,(Ke=await P[ve])==null?void 0:Ke.data);return He},server_data_node:be(L===void 0&&R[0]?{type:"skip"}:L??null,U==null?void 0:U.server)})});for(const R of P)R.catch(()=>{});const C=[];for(let R=0;R<b.length;R+=1)if(b[R])try{C.push(await P[R])}catch(A){if(A instanceof Xe)return{type:"redirect",location:A.location};let U=500,L;if(S!=null&&S.includes(A))U=A.status??U,L=A.error;else if(A instanceof Ae)U=A.status,L=A.body;else{if(await W.updated.check())return await ne(c);L=await ae(A,{params:l,url:c,route:{id:m.id}})}const Q=await Be(R,C,h);return Q?await te({url:c,params:l,branch:C.slice(0,Q.idx).concat(Q.node),status:U,error:L,route:m}):await Me(c,{id:m.id},L,U)}else C.push(void 0);return await te({url:c,params:l,branch:C,status:200,error:null,route:m,form:s?void 0:null})}async function Be(i,s,c){for(;i--;)if(c[i]){let l=i;for(;!s[l];)l-=1;try{return{idx:l+1,node:{node:await c[i](),loader:c[i],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:i,error:s,url:c,route:l}){const m={},h=await Oe();let _=null;if(h.has_server_load)try{const w=await et(c,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;_=w.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ne(c)}const v=await ye({loader:Oe,url:c,params:m,route:l,parent:()=>Promise.resolve({}),server_data_node:be(_)}),b={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await te({url:c,params:m,branch:[v,b],status:i,error:s,route:null})}function fe(i,s){if(We(i,e))return;const c=yt(i.pathname.slice(e.length)||"/");for(const l of Re){const m=l.exec(c);if(m)return{id:i.pathname+i.search,invalidating:s,route:l,params:bt(m),url:i}}}function Fe({url:i,type:s,intent:c,delta:l}){var v,b;let m=!1;const h={from:{params:t.params,route:{id:((v=t.route)==null?void 0:v.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((b=c==null?void 0:c.route)==null?void 0:b.id)??null},url:i},willUnload:!c,type:s};l!==void 0&&(h.delta=l);const _={...h,cancel:()=>{m=!0}};return y||d.before_navigate.forEach(w=>w(_)),m?null:h}async function ue({url:i,scroll:s,keepfocus:c,redirect_chain:l,details:m,type:h,delta:_,nav_token:v,accepted:b,blocked:w}){const $=fe(i,!1),I=Fe({url:i,type:h,delta:_,intent:$});if(!I){w();return}Se(O),b(),y=!0,u&&W.navigating.set(I),await De($,i,l,{scroll:s,keepfocus:c,details:m},v,()=>{y=!1,d.after_navigate.forEach(B=>B(I)),W.navigating.set(null)})}async function Me(i,s,c,l){return i.origin===location.origin&&i.pathname===location.pathname&&!f?await ce({status:l,error:c,url:i,route:s}):await ne(i)}function ne(i){return location.href=i.href,new Promise(()=>{})}function nt(){let i;n.addEventListener("mousemove",h=>{const _=h.target;clearTimeout(i),i=setTimeout(()=>{l(_,2)},20)});function s(h){l(h.composedPath()[0],1)}n.addEventListener("mousedown",s),n.addEventListener("touchstart",s,{passive:!0});const c=new IntersectionObserver(h=>{for(const _ of h)_.isIntersecting&&(le(new URL(_.target.href).pathname),c.unobserve(_.target))},{threshold:0});function l(h,_){const v=Je(h,n);if(!v)return;const{url:b,external:w}=Ee(v,e);if(w)return;const $=pe(v);$.reload||(_<=$.preload_data?je(b):_<=$.preload_code&&le(b.pathname))}function m(){c.disconnect();for(const h of n.querySelectorAll("a")){const{url:_,external:v}=Ee(h,e);if(v)continue;const b=pe(h);b.reload||(b.preload_code===Ye.viewport&&c.observe(h),b.preload_code===Ye.eager&&le(_.pathname))}}d.after_navigate.push(m),m()}return{after_navigate:i=>{Ie(()=>(d.after_navigate.push(i),()=>{const s=d.after_navigate.indexOf(i);d.after_navigate.splice(s,1)}))},before_navigate:i=>{Ie(()=>(d.before_navigate.push(i),()=>{const s=d.before_navigate.indexOf(i);d.before_navigate.splice(s,1)}))},disable_scroll_handling:()=>{(g||!u)&&(p=!1)},goto:(i,s={})=>we(i,s,[]),invalidate:i=>{if(typeof i=="function")o.push(i);else{const{href:s}=new URL(i,location.href);o.push(c=>c.href===s)}return Te()},invalidateAll:()=>(E=!0,Te()),preload_data:async i=>{const s=new URL(i,ze(document));await je(s)},preload_code:le,apply_action:async i=>{if(i.type==="error"){const s=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const m=await Be(t.branch.length,c,l.errors);if(m){const h=await te({url:s,params:t.params,branch:c.slice(0,m.idx).concat(m.node),status:i.status??500,error:i.error,route:l});t=h.state,q.$set(h.props),de().then(Le)}}else if(i.type==="redirect")we(i.location,{invalidateAll:!0},[]);else{const s={form:i.data,page:{...Y,form:i.data,status:i.status}};q.$set(s),i.type==="success"&&de().then(Le)}},_start_router:()=>{var i;history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var l;let c=!1;if(!y){const m={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};d.before_navigate.forEach(h=>h(m))}c?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(O);try{sessionStorage[tt]=JSON.stringify(oe)}catch{}}}),(i=navigator.connection)!=null&&i.saveData||nt(),n.addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const c=Je(s.composedPath()[0],n);if(!c)return;const{url:l,external:m,target:h}=Ee(c,e);if(!l)return;if(h==="_parent"||h==="_top"){if(window.parent!==window)return}else if(h&&h!=="_self")return;const _=pe(c);if(!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(m||_.reload){Fe({url:l,type:"link"})||s.preventDefault(),y=!0;return}const[b,w]=l.href.split("#");if(w!==void 0&&b===location.href.split("#")[0]){N=!0,Se(O),t.url=l,W.page.set({...Y,url:l}),W.page.notify();return}ue({url:l,scroll:_.noscroll?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),n.addEventListener("submit",s=>{if(s.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(s.target),l=s.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const h=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(h,e))return;const _=s.target,{noscroll:v,reload:b}=pe(_);if(b)return;s.preventDefault(),s.stopPropagation();const w=new FormData(_),$=l==null?void 0:l.getAttribute("name");$&&w.append($,(l==null?void 0:l.getAttribute("value"))??""),h.search=new URLSearchParams(w).toString(),ue({url:h,scroll:v?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",s=>{var c;if((c=s.state)!=null&&c[J]){if(s.state[J]===O)return;const l=s.state[J]-O;ue({url:new URL(location.href),scroll:oe[s.state[J]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=s.state[J]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{N&&(N=!1,history.replaceState({...history.state,[J]:++O},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&W.navigating.set(null)})},_hydrate:async({status:i=200,error:s,node_ids:c,params:l,route:m,data:h,form:_})=>{f=!0;const v=new URL(location.href);({params:l={},route:m={id:null}}=fe(v,!1)||{});let b;try{const w=c.map(async($,I)=>{const B=h[I];return ye({loader:_e[$],url:v,params:l,route:m,parent:async()=>{const S={};for(let k=0;k<I;k+=1)Object.assign(S,(await w[k]).data);return S},server_data_node:be(B)})});b=await te({url:v,params:l,branch:await Promise.all(w),status:i,error:s,form:_,route:Re.find(({id:$})=>$===m.id)??null})}catch(w){if(w instanceof Xe){await ne(new URL(w.location,location.href));return}b=await ce({status:w instanceof Ae?w.status:500,error:await ae(w,{url:v,params:l,route:m}),url:v,route:m})}Ce(b)}}}async function et(a,e){var d;const n=new URL(a);n.pathname=Rt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const o=await me(n.href),r=await o.json();if(!o.ok)throw new Error(r);return(d=r.nodes)==null||d.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=an(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),r}function ae(a,e){return a instanceof Ae?a.body:Yt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var o;(o=getSelection())==null||o.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function un({env:a,hydrate:e,paths:n,target:o,version:r}){_t(n),gt(r);const d=on({target:o,base:n.base});mt({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{un as start};