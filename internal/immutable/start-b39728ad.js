import{S as nt,i as at,s as rt,a as it,e as L,c as ot,b as G,g as K,t as I,d as J,f as A,h as q,j as st,o as Ie,k as lt,l as ct,m as ft,n as $e,p as W,q as ut,r as dt,u as pt,v as C,w as z,x,y as F,z as M,A as de}from"./chunks/index-169c4bf0.js";import{S as et,I as Y,g as Ke,f as Je,a as ke,b as pe,s as Z,i as We,c as _e,P as Ye,d as _t}from"./chunks/singletons-9b37aa71.js";import{_ as X}from"./chunks/preload-helper-41c905a7.js";import{R as Xe,H as Ae}from"./chunks/control-e7f5239e.js";import{s as ht,a as mt}from"./chunks/shared-23917130.js";function gt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function wt(r){return r.split("%25").map(decodeURI).join("%25")}function yt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const bt=["href","pathname","search","searchParams","toString","toJSON"];function vt(r,e){const n=new URL(r);for(const i of bt){let a=n[i];Object.defineProperty(n,i,{get(){return e(),a},enumerable:!0,configurable:!0})}return $t(n),n}function $t(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const kt="/__data.json";function Et(r){return r.replace(/\/$/,"")+kt}function Rt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ie.delete(Ne(r)),he(r,e));const ie=new Map;function St(r,e){const n=Ne(r,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:a,...p}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&ie.set(n,{body:a,init:p,ttl:1e3*Number(t)}),Promise.resolve(new Response(a,p))}return he(r,e)}function Lt(r,e,n){if(ie.size>0){const i=Ne(r,n),a=ie.get(i);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);ie.delete(i)}}return he(e,n)}function Ne(r,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${Rt(e.body)}"]`),i}const It=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function At(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${Pt(r).map(i=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const p=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(p)return e.push({name:p[1],matcher:p[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((s,d)=>{if(d%2){if(s.startsWith("x+"))return Ee(String.fromCharCode(parseInt(s.slice(2),16)));if(s.startsWith("u+"))return Ee(String.fromCharCode(...s.slice(2).split("-").map(N=>parseInt(N,16))));const g=It.exec(s);if(!g)throw new Error(`Invalid param: ${s}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,b,D,V,k]=g;return e.push({name:V,matcher:k,optional:!!b,rest:!!D,chained:D?d===1&&t[0]==="":!1}),D?"(.*?)":b?"([^/]*)?":"([^/]+?)"}return Ee(s)}).join("")}).join("")}/?$`),params:e}}function Ot(r){return!/^\([^)]+\)$/.test(r)}function Pt(r){return r.slice(1).split("/").filter(Ot)}function Nt(r,e,n){const i={},a=r.slice(1);let p="";for(let t=0;t<e.length;t+=1){const c=e[t];let s=a[t];if(c.chained&&c.rest&&p&&(s=s?p+"/"+s:p),p="",s===void 0)c.rest&&(i[c.name]="");else{if(c.matcher&&!n[c.matcher](s)){if(c.optional&&c.chained){let d=a.indexOf(void 0,t);if(d===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)p=s;else return}for(;d>=t;)a[d]=a[d-1],d-=1;continue}return}i[c.name]=s}}if(!p)return i}function Ee(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ut(r,e,n,i){const a=new Set(e);return Object.entries(n).map(([c,[s,d,g]])=>{const{pattern:b,params:D}=At(c),V={id:c,exec:k=>{const N=b.exec(k);if(N)return Nt(N,D,i)},errors:[1,...g||[]].map(k=>r[k]),layouts:[0,...d||[]].map(t),leaf:p(s)};return V.errors.length=V.layouts.length=Math.max(V.errors.length,V.layouts.length),V});function p(c){const s=c<0;return s&&(c=~c),[s,r[c]]}function t(c){return c===void 0?c:[a.has(c),r[c]]}}function Tt(r){let e,n,i;var a=r[0][0];function p(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=C(a,p(r))),{c(){e&&z(e.$$.fragment),n=L()},l(t){e&&x(e.$$.fragment,t),n=L()},m(t,c){e&&F(e,t,c),G(t,n,c),i=!0},p(t,c){const s={};if(c&4&&(s.data=t[2]),c&2&&(s.form=t[1]),a!==(a=t[0][0])){if(e){K();const d=e;I(d.$$.fragment,1,0,()=>{M(d,1)}),J()}a?(e=C(a,p(t)),z(e.$$.fragment),A(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}else a&&e.$set(s)},i(t){i||(e&&A(e.$$.fragment,t),i=!0)},o(t){e&&I(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&M(e,t)}}}function Dt(r){let e,n,i;var a=r[0][0];function p(t){return{props:{data:t[2],$$slots:{default:[Mt]},$$scope:{ctx:t}}}}return a&&(e=C(a,p(r))),{c(){e&&z(e.$$.fragment),n=L()},l(t){e&&x(e.$$.fragment,t),n=L()},m(t,c){e&&F(e,t,c),G(t,n,c),i=!0},p(t,c){const s={};if(c&4&&(s.data=t[2]),c&2107&&(s.$$scope={dirty:c,ctx:t}),a!==(a=t[0][0])){if(e){K();const d=e;I(d.$$.fragment,1,0,()=>{M(d,1)}),J()}a?(e=C(a,p(t)),z(e.$$.fragment),A(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}else a&&e.$set(s)},i(t){i||(e&&A(e.$$.fragment,t),i=!0)},o(t){e&&I(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&M(e,t)}}}function jt(r){let e,n,i;var a=r[0][1];function p(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=C(a,p(r))),{c(){e&&z(e.$$.fragment),n=L()},l(t){e&&x(e.$$.fragment,t),n=L()},m(t,c){e&&F(e,t,c),G(t,n,c),i=!0},p(t,c){const s={};if(c&8&&(s.data=t[3]),c&2&&(s.form=t[1]),a!==(a=t[0][1])){if(e){K();const d=e;I(d.$$.fragment,1,0,()=>{M(d,1)}),J()}a?(e=C(a,p(t)),z(e.$$.fragment),A(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}else a&&e.$set(s)},i(t){i||(e&&A(e.$$.fragment,t),i=!0)},o(t){e&&I(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&M(e,t)}}}function Vt(r){let e,n,i;var a=r[0][1];function p(t){return{props:{data:t[3],$$slots:{default:[Ft]},$$scope:{ctx:t}}}}return a&&(e=C(a,p(r))),{c(){e&&z(e.$$.fragment),n=L()},l(t){e&&x(e.$$.fragment,t),n=L()},m(t,c){e&&F(e,t,c),G(t,n,c),i=!0},p(t,c){const s={};if(c&8&&(s.data=t[3]),c&2099&&(s.$$scope={dirty:c,ctx:t}),a!==(a=t[0][1])){if(e){K();const d=e;I(d.$$.fragment,1,0,()=>{M(d,1)}),J()}a?(e=C(a,p(t)),z(e.$$.fragment),A(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}else a&&e.$set(s)},i(t){i||(e&&A(e.$$.fragment,t),i=!0)},o(t){e&&I(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&M(e,t)}}}function qt(r){let e,n,i;var a=r[0][2];function p(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=C(a,p(r))),{c(){e&&z(e.$$.fragment),n=L()},l(t){e&&x(e.$$.fragment,t),n=L()},m(t,c){e&&F(e,t,c),G(t,n,c),i=!0},p(t,c){const s={};if(c&16&&(s.data=t[4]),c&2&&(s.form=t[1]),a!==(a=t[0][2])){if(e){K();const d=e;I(d.$$.fragment,1,0,()=>{M(d,1)}),J()}a?(e=C(a,p(t)),z(e.$$.fragment),A(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}else a&&e.$set(s)},i(t){i||(e&&A(e.$$.fragment,t),i=!0)},o(t){e&&I(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&M(e,t)}}}function Ct(r){let e,n,i;var a=r[0][2];function p(t){return{props:{data:t[4],$$slots:{default:[zt]},$$scope:{ctx:t}}}}return a&&(e=C(a,p(r))),{c(){e&&z(e.$$.fragment),n=L()},l(t){e&&x(e.$$.fragment,t),n=L()},m(t,c){e&&F(e,t,c),G(t,n,c),i=!0},p(t,c){const s={};if(c&16&&(s.data=t[4]),c&2083&&(s.$$scope={dirty:c,ctx:t}),a!==(a=t[0][2])){if(e){K();const d=e;I(d.$$.fragment,1,0,()=>{M(d,1)}),J()}a?(e=C(a,p(t)),z(e.$$.fragment),A(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}else a&&e.$set(s)},i(t){i||(e&&A(e.$$.fragment,t),i=!0)},o(t){e&&I(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&M(e,t)}}}function zt(r){let e,n,i;var a=r[0][3];function p(t){return{props:{data:t[5],form:t[1]}}}return a&&(e=C(a,p(r))),{c(){e&&z(e.$$.fragment),n=L()},l(t){e&&x(e.$$.fragment,t),n=L()},m(t,c){e&&F(e,t,c),G(t,n,c),i=!0},p(t,c){const s={};if(c&32&&(s.data=t[5]),c&2&&(s.form=t[1]),a!==(a=t[0][3])){if(e){K();const d=e;I(d.$$.fragment,1,0,()=>{M(d,1)}),J()}a?(e=C(a,p(t)),z(e.$$.fragment),A(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}else a&&e.$set(s)},i(t){i||(e&&A(e.$$.fragment,t),i=!0)},o(t){e&&I(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&M(e,t)}}}function Ft(r){let e,n,i,a;const p=[Ct,qt],t=[];function c(s,d){return s[0][3]?0:1}return e=c(r),n=t[e]=p[e](r),{c(){n.c(),i=L()},l(s){n.l(s),i=L()},m(s,d){t[e].m(s,d),G(s,i,d),a=!0},p(s,d){let g=e;e=c(s),e===g?t[e].p(s,d):(K(),I(t[g],1,1,()=>{t[g]=null}),J(),n=t[e],n?n.p(s,d):(n=t[e]=p[e](s),n.c()),A(n,1),n.m(i.parentNode,i))},i(s){a||(A(n),a=!0)},o(s){I(n),a=!1},d(s){t[e].d(s),s&&q(i)}}}function Mt(r){let e,n,i,a;const p=[Vt,jt],t=[];function c(s,d){return s[0][2]?0:1}return e=c(r),n=t[e]=p[e](r),{c(){n.c(),i=L()},l(s){n.l(s),i=L()},m(s,d){t[e].m(s,d),G(s,i,d),a=!0},p(s,d){let g=e;e=c(s),e===g?t[e].p(s,d):(K(),I(t[g],1,1,()=>{t[g]=null}),J(),n=t[e],n?n.p(s,d):(n=t[e]=p[e](s),n.c()),A(n,1),n.m(i.parentNode,i))},i(s){a||(A(n),a=!0)},o(s){I(n),a=!1},d(s){t[e].d(s),s&&q(i)}}}function Ze(r){let e,n=r[7]&&Qe(r);return{c(){e=lt("div"),n&&n.c(),this.h()},l(i){e=ct(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=ft(e);n&&n.l(a),a.forEach(q),this.h()},h(){$e(e,"id","svelte-announcer"),$e(e,"aria-live","assertive"),$e(e,"aria-atomic","true"),W(e,"position","absolute"),W(e,"left","0"),W(e,"top","0"),W(e,"clip","rect(0 0 0 0)"),W(e,"clip-path","inset(50%)"),W(e,"overflow","hidden"),W(e,"white-space","nowrap"),W(e,"width","1px"),W(e,"height","1px")},m(i,a){G(i,e,a),n&&n.m(e,null)},p(i,a){i[7]?n?n.p(i,a):(n=Qe(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&q(e),n&&n.d()}}}function Qe(r){let e;return{c(){e=ut(r[8])},l(n){e=dt(n,r[8])},m(n,i){G(n,e,i)},p(n,i){i&256&&pt(e,n[8])},d(n){n&&q(e)}}}function Bt(r){let e,n,i,a,p;const t=[Dt,Tt],c=[];function s(g,b){return g[0][1]?0:1}e=s(r),n=c[e]=t[e](r);let d=r[6]&&Ze(r);return{c(){n.c(),i=it(),d&&d.c(),a=L()},l(g){n.l(g),i=ot(g),d&&d.l(g),a=L()},m(g,b){c[e].m(g,b),G(g,i,b),d&&d.m(g,b),G(g,a,b),p=!0},p(g,[b]){let D=e;e=s(g),e===D?c[e].p(g,b):(K(),I(c[D],1,1,()=>{c[D]=null}),J(),n=c[e],n?n.p(g,b):(n=c[e]=t[e](g),n.c()),A(n,1),n.m(i.parentNode,i)),g[6]?d?d.p(g,b):(d=Ze(g),d.c(),d.m(a.parentNode,a)):d&&(d.d(1),d=null)},i(g){p||(A(n),p=!0)},o(g){I(n),p=!1},d(g){c[e].d(g),g&&q(i),d&&d.d(g),g&&q(a)}}}function Gt(r,e,n){let{stores:i}=e,{page:a}=e,{components:p}=e,{form:t}=e,{data_0:c=null}=e,{data_1:s=null}=e,{data_2:d=null}=e,{data_3:g=null}=e;st(i.page.notify);let b=!1,D=!1,V=null;return Ie(()=>{const k=i.page.subscribe(()=>{b&&(n(7,D=!0),n(8,V=document.title||"untitled page"))});return n(6,b=!0),k}),r.$$set=k=>{"stores"in k&&n(9,i=k.stores),"page"in k&&n(10,a=k.page),"components"in k&&n(0,p=k.components),"form"in k&&n(1,t=k.form),"data_0"in k&&n(2,c=k.data_0),"data_1"in k&&n(3,s=k.data_1),"data_2"in k&&n(4,d=k.data_2),"data_3"in k&&n(5,g=k.data_3)},r.$$.update=()=>{r.$$.dirty&1536&&i.page.set(a)},[p,t,c,s,d,g,b,D,V,i,a]}class Ht extends nt{constructor(e){super(),at(this,e,Gt,Bt,rt,{stores:9,page:10,components:0,form:1,data_0:2,data_1:3,data_2:4,data_3:5})}}const Kt={},me=[()=>X(()=>import("./chunks/0-b85a8ac5.js"),["./chunks/0-b85a8ac5.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-3371d424.js","./chunks/index-169c4bf0.js","./assets/_layout-7cc3e340.css"],import.meta.url),()=>X(()=>import("./chunks/1-913a2e10.js"),["./chunks/1-913a2e10.js","./components/error.svelte-27539858.js","./chunks/index-169c4bf0.js","./chunks/stores-6ae74fc8.js","./chunks/singletons-9b37aa71.js","./chunks/index-779a6bb2.js","./chunks/shared-23917130.js"],import.meta.url),()=>X(()=>import("./chunks/2-80297063.js"),["./chunks/2-80297063.js","./chunks/_layout-61fc56e8.js","./chunks/user-a6a30b9f.js","./chunks/index-779a6bb2.js","./chunks/index-169c4bf0.js","./chunks/control-e7f5239e.js","./chunks/shared-23917130.js","./components/pages/(authed)/_layout.svelte-ffa9efe8.js","./chunks/Layout-5daff0e1.js","./chunks/IconBase-ba450fba.js","./assets/IconBase-6bf551a2.css"],import.meta.url),()=>X(()=>import("./chunks/3-1c4de385.js"),["./chunks/3-1c4de385.js","./chunks/_layout-4039aba4.js","./components/layout.svelte-b7187f6a.js","./chunks/index-169c4bf0.js"],import.meta.url),()=>X(()=>import("./chunks/4-f6bef4ae.js"),["./chunks/4-f6bef4ae.js","./components/pages/(unauthed)/_layout.svelte-ffa9efe8.js","./chunks/index-169c4bf0.js","./chunks/Layout-5daff0e1.js","./chunks/index-779a6bb2.js","./chunks/IconBase-ba450fba.js","./assets/IconBase-6bf551a2.css"],import.meta.url),()=>X(()=>import("./chunks/5-5e140013.js"),["./chunks/5-5e140013.js","./components/pages/(authed)/_page.svelte-d3500818.js","./chunks/index-169c4bf0.js","./chunks/quizzes-f93848c4.js","./chunks/index-779a6bb2.js","./chunks/user-a6a30b9f.js","./chunks/Modal-ede5ece6.js","./chunks/IconBase-ba450fba.js","./assets/IconBase-6bf551a2.css","./chunks/SortDirection-1f1310c1.js","./chunks/navigation-2407bb7d.js","./chunks/singletons-9b37aa71.js","./chunks/shared-23917130.js"],import.meta.url),()=>X(()=>import("./chunks/6-06369e39.js"),["./chunks/6-06369e39.js","./components/pages/(authed)/quizzes/_local_quiz_id_/_page.svelte-0a438d2e.js","./chunks/index-169c4bf0.js","./chunks/SortDirection-1f1310c1.js","./chunks/IconBase-ba450fba.js","./assets/IconBase-6bf551a2.css","./chunks/navigation-2407bb7d.js","./chunks/singletons-9b37aa71.js","./chunks/index-779a6bb2.js","./chunks/shared-23917130.js","./chunks/questions-c37682fa.js","./chunks/user-a6a30b9f.js","./chunks/quizzes-f93848c4.js","./chunks/stores-6ae74fc8.js"],import.meta.url),()=>X(()=>import("./chunks/7-895cf94d.js"),["./chunks/7-895cf94d.js","./components/pages/(authed)/quizzes/_local_quiz_id_/questions/create/_page.svelte-3725dec5.js","./chunks/index-169c4bf0.js","./chunks/navigation-2407bb7d.js","./chunks/singletons-9b37aa71.js","./chunks/index-779a6bb2.js","./chunks/shared-23917130.js","./chunks/stores-6ae74fc8.js","./chunks/questions-c37682fa.js","./chunks/user-a6a30b9f.js","./chunks/quizzes-f93848c4.js","./chunks/IconBase-ba450fba.js","./assets/IconBase-6bf551a2.css","./chunks/Modal-ede5ece6.js","./chunks/preload-helper-41c905a7.js","./assets/_page-66bfafa7.css"],import.meta.url),()=>X(()=>import("./chunks/8-a31095a3.js"),["./chunks/8-a31095a3.js","./components/pages/(unauthed)/login/_page.svelte-a2b6a449.js","./chunks/index-169c4bf0.js","./chunks/navigation-2407bb7d.js","./chunks/singletons-9b37aa71.js","./chunks/index-779a6bb2.js","./chunks/shared-23917130.js","./chunks/user-a6a30b9f.js","./assets/IconBase-6bf551a2.css"],import.meta.url)],Jt=[],Wt={"/(authed)":[5,[2]],"/(unauthed)/login":[8,[4]],"/(authed)/quizzes/[local_quiz_id]":[6,[2,3]],"/(authed)/quizzes/[local_quiz_id]/questions/create":[7,[2,3]]},Yt={handleError:({error:r})=>{console.error(r)}};async function Xt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([i,a])=>[i,await a])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Zt=-1,Qt=-2,xt=-3,en=-4,tn=-5,nn=-6;function an(r){if(typeof r=="number")return i(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function i(a,p=!1){if(a===Zt)return;if(a===xt)return NaN;if(a===en)return 1/0;if(a===tn)return-1/0;if(a===nn)return-0;if(p)throw new Error("Invalid input");if(a in n)return n[a];const t=e[a];if(!t||typeof t!="object")n[a]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[a]=new Date(t[1]);break;case"Set":const s=new Set;n[a]=s;for(let b=1;b<t.length;b+=1)s.add(i(t[b]));break;case"Map":const d=new Map;n[a]=d;for(let b=1;b<t.length;b+=2)d.set(i(t[b]),i(t[b+1]));break;case"RegExp":n[a]=new RegExp(t[1],t[2]);break;case"Object":n[a]=Object(t[1]);break;case"BigInt":n[a]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[a]=g;for(let b=1;b<t.length;b+=2)g[t[b]]=i(t[b+1]);break}else{const c=new Array(t.length);n[a]=c;for(let s=0;s<t.length;s+=1){const d=t[s];d!==Qt&&(c[s]=i(d))}}else{const c={};n[a]=c;for(const s in t){const d=t[s];c[s]=i(d)}}return n[a]}return i(0)}function rn(r){return r.filter(e=>e!=null)}const Re=Ut(me,Jt,Wt,Kt),Oe=me[0],Pe=me[1];Oe();Pe();let oe={};try{oe=JSON.parse(sessionStorage[et])}catch{}function Se(r){oe[r]=_e()}function on({target:r,base:e}){var Be;const n=document.documentElement,i=[];let a=null;const p={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},c=!1,s=!1,d=!0,g=!1,b=!1,D=!1,V=!1,k,N=(Be=history.state)==null?void 0:Be[Y];N||(N=Date.now(),history.replaceState({...history.state,[Y]:N},"",location.href));const ge=oe[N];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let Q,Ue,se;async function Te(){se=se||Promise.resolve(),await se,se=null;const o=new URL(location.href),l=fe(o,!0);a=null,await je(l,o,[])}async function we(o,{noScroll:l=!1,replaceState:u=!1,keepFocus:f=!1,state:h={},invalidateAll:_=!1},m,v){return typeof o=="string"&&(o=new URL(o,Ke(document))),ue({url:o,scroll:l?_e():null,keepfocus:f,redirect_chain:m,details:{state:h,replaceState:u},nav_token:v,accepted:()=>{_&&(V=!0)},blocked:()=>{},type:"goto"})}async function De(o){const l=fe(o,!1);if(!l)throw new Error(`Attempted to preload a URL that does not belong to this app: ${o}`);return a={id:l.id,promise:Ce(l).then(u=>(u.type==="loaded"&&u.state.error&&(a=null),u))},a.promise}async function le(...o){const u=Re.filter(f=>o.some(h=>f.exec(h))).map(f=>Promise.all([...f.layouts,f.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(u)}async function je(o,l,u,f,h={},_){var v,y;Ue=h;let m=o&&await Ce(o);if(m||(m=await Me(l,{id:null},await re(new Error(`Not found: ${l.pathname}`),{url:l,params:{},route:{id:null}}),404)),l=(o==null?void 0:o.url)||l,Ue!==h)return!1;if(m.type==="redirect")if(u.length>10||u.includes(l.pathname))m=await ce({status:500,error:await re(new Error("Redirect loop"),{url:l,params:{},route:{id:null}}),url:l,route:{id:null}});else return we(new URL(m.location,l).href,{},[...u,l.pathname],h),!1;else((y=(v=m.props)==null?void 0:v.page)==null?void 0:y.status)>=400&&await Z.updated.check()&&await ae(l);if(i.length=0,V=!1,g=!0,f&&f.details){const{details:w}=f,E=w.replaceState?0:1;w.state[Y]=N+=E,history[w.replaceState?"replaceState":"pushState"](w.state,"",l)}if(a=null,s?(t=m.state,m.props.page&&(m.props.page.url=l),k.$set(m.props)):Ve(m),f){const{scroll:w,keepfocus:E}=f,{activeElement:U}=document;await de();const H=document.activeElement!==U&&document.activeElement!==document.body;if(!E&&!H&&await Le(),d){const S=l.hash&&document.getElementById(l.hash.slice(1));w?scrollTo(w.x,w.y):S?S.scrollIntoView():scrollTo(0,0)}}else await de();d=!0,m.props.page&&(Q=m.props.page),_&&_(),g=!1}function Ve(o){var f;t=o.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),Q=o.props.page,k=new Ht({target:r,props:{...o.props,stores:Z},hydrate:!0});const u={from:null,to:{params:t.params,route:{id:((f=t.route)==null?void 0:f.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};p.after_navigate.forEach(h=>h(u)),s=!0}async function ne({url:o,params:l,branch:u,status:f,error:h,route:_,form:m}){let v="never";for(const S of u)(S==null?void 0:S.slash)!==void 0&&(v=S.slash);o.pathname=gt(o.pathname,v),o.search=o.search;const y={type:"loaded",state:{url:o,params:l,branch:u,error:h,route:_},props:{components:rn(u).map(S=>S.node.component)}};m!==void 0&&(y.props.form=m);let w={},E=!Q,U=0;for(let S=0;S<Math.max(u.length,t.branch.length);S+=1){const $=u[S],T=t.branch[S];($==null?void 0:$.data)!==(T==null?void 0:T.data)&&(E=!0),$&&(w={...w,...$.data},E&&(y.props[`data_${U}`]=w),U+=1)}return(!t.url||o.href!==t.url.href||t.error!==h||m!==void 0&&m!==Q.form||E)&&(y.props.page={error:h,params:l,route:{id:(_==null?void 0:_.id)??null},status:f,url:new URL(o),form:m??null,data:E?w:Q.data}),y}async function ye({loader:o,parent:l,url:u,params:f,route:h,server_data_node:_}){var w,E,U;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await o();if((w=y.universal)!=null&&w.load){let H=function(...$){for(const T of $){const{href:B}=new URL(T,u);v.dependencies.add(B)}};const S={route:{get id(){return v.route=!0,h.id}},params:new Proxy(f,{get:($,T)=>(v.params.add(T),$[T])}),data:(_==null?void 0:_.data)??null,url:vt(u,()=>{v.url=!0}),async fetch($,T){let B;$ instanceof Request?(B=$.url,T={body:$.method==="GET"||$.method==="HEAD"?void 0:await $.blob(),cache:$.cache,credentials:$.credentials,headers:$.headers,integrity:$.integrity,keepalive:$.keepalive,method:$.method,mode:$.mode,redirect:$.redirect,referrer:$.referrer,referrerPolicy:$.referrerPolicy,signal:$.signal,...T}):B=$;const R=new URL(B,u).href;return H(R),s?Lt(B,R,T):St(B,T)},setHeaders:()=>{},depends:H,parent(){return v.parent=!0,l()}};m=await y.universal.load.call(null,S)??null,m=m?await Xt(m):null}return{node:y,loader:o,server:_,universal:(E=y.universal)!=null&&E.load?{type:"data",data:m,uses:v}:null,data:m??(_==null?void 0:_.data)??null,slash:((U=y.universal)==null?void 0:U.trailingSlash)??(_==null?void 0:_.slash)}}function qe(o,l,u,f,h){if(V)return!0;if(!f)return!1;if(f.parent&&o||f.route&&l||f.url&&u)return!0;for(const _ of f.params)if(h[_]!==t.params[_])return!0;for(const _ of f.dependencies)if(i.some(m=>m(new URL(_))))return!0;return!1}function be(o,l){return(o==null?void 0:o.type)==="data"?{type:"data",data:o.data,uses:{dependencies:new Set(o.uses.dependencies??[]),params:new Set(o.uses.params??[]),parent:!!o.uses.parent,route:!!o.uses.route,url:!!o.uses.url},slash:o.slash}:(o==null?void 0:o.type)==="skip"?l??null:null}async function Ce({id:o,invalidating:l,url:u,params:f,route:h}){if((a==null?void 0:a.id)===o)return a.promise;const{errors:_,layouts:m,leaf:v}=h,y=[...m,v];_.forEach(R=>R==null?void 0:R().catch(()=>{})),y.forEach(R=>R==null?void 0:R[1]().catch(()=>{}));let w=null;const E=t.url?o!==t.url.pathname+t.url.search:!1,U=t.route?h.id!==t.route.id:!1,H=y.reduce((R,P,j)=>{var te;const O=t.branch[j],ee=!!(P!=null&&P[0])&&((O==null?void 0:O.loader)!==P[1]||qe(R.some(Boolean),U,E,(te=O.server)==null?void 0:te.uses,f));return R.push(ee),R},[]);if(H.some(Boolean)){try{w=await xe(u,H)}catch(R){return ce({status:500,error:await re(R,{url:u,params:f,route:{id:h.id}}),url:u,route:h})}if(w.type==="redirect")return w}const S=w==null?void 0:w.nodes;let $=!1;const T=y.map(async(R,P)=>{var te;if(!R)return;const j=t.branch[P],O=S==null?void 0:S[P];if((!O||O.type==="skip")&&R[1]===(j==null?void 0:j.loader)&&!qe($,U,E,(te=j.universal)==null?void 0:te.uses,f))return j;if($=!0,(O==null?void 0:O.type)==="error")throw O;return ye({loader:R[1],url:u,params:f,route:h,parent:async()=>{var He;const Ge={};for(let ve=0;ve<P;ve+=1)Object.assign(Ge,(He=await T[ve])==null?void 0:He.data);return Ge},server_data_node:be(O===void 0&&R[0]?{type:"skip"}:O??null,j==null?void 0:j.server)})});for(const R of T)R.catch(()=>{});const B=[];for(let R=0;R<y.length;R+=1)if(y[R])try{B.push(await T[R])}catch(P){if(P instanceof Xe)return{type:"redirect",location:P.location};let j=500,O;if(S!=null&&S.includes(P))j=P.status??j,O=P.error;else if(P instanceof Ae)j=P.status,O=P.body;else{if(await Z.updated.check())return await ae(u);O=await re(P,{params:f,url:u,route:{id:h.id}})}const ee=await ze(R,B,_);return ee?await ne({url:u,params:f,branch:B.slice(0,ee.idx).concat(ee.node),status:j,error:O,route:h}):await Me(u,{id:h.id},O,j)}else B.push(void 0);return await ne({url:u,params:f,branch:B,status:200,error:null,route:h,form:l?void 0:null})}async function ze(o,l,u){for(;o--;)if(u[o]){let f=o;for(;!l[f];)f-=1;try{return{idx:f+1,node:{node:await u[o](),loader:u[o],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:o,error:l,url:u,route:f}){const h={},_=await Oe();let m=null;if(_.has_server_load)try{const w=await xe(u,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;m=w.nodes[0]??null}catch{(u.origin!==location.origin||u.pathname!==location.pathname||c)&&await ae(u)}const v=await ye({loader:Oe,url:u,params:h,route:f,parent:()=>Promise.resolve({}),server_data_node:be(m)}),y={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await ne({url:u,params:h,branch:[v,y],status:o,error:l,route:null})}function fe(o,l){if(We(o,e))return;const u=wt(o.pathname.slice(e.length)||"/");for(const f of Re){const h=f.exec(u);if(h)return{id:o.pathname+o.search,invalidating:l,route:f,params:yt(h),url:o}}}function Fe({url:o,type:l,intent:u,delta:f}){var v,y;let h=!1;const _={from:{params:t.params,route:{id:((v=t.route)==null?void 0:v.id)??null},url:t.url},to:{params:(u==null?void 0:u.params)??null,route:{id:((y=u==null?void 0:u.route)==null?void 0:y.id)??null},url:o},willUnload:!u,type:l};f!==void 0&&(_.delta=f);const m={..._,cancel:()=>{h=!0}};return b||p.before_navigate.forEach(w=>w(m)),h?null:_}async function ue({url:o,scroll:l,keepfocus:u,redirect_chain:f,details:h,type:_,delta:m,nav_token:v,accepted:y,blocked:w}){const E=fe(o,!1),U=Fe({url:o,type:_,delta:m,intent:E});if(!U){w();return}Se(N),y(),b=!0,s&&Z.navigating.set(U),await je(E,o,f,{scroll:l,keepfocus:u,details:h},v,()=>{b=!1,p.after_navigate.forEach(H=>H(U)),Z.navigating.set(null)})}async function Me(o,l,u,f){return o.origin===location.origin&&o.pathname===location.pathname&&!c?await ce({status:f,error:u,url:o,route:l}):await ae(o)}function ae(o){return location.href=o.href,new Promise(()=>{})}function tt(){let o;n.addEventListener("mousemove",_=>{const m=_.target;clearTimeout(o),o=setTimeout(()=>{f(m,2)},20)});function l(_){f(_.composedPath()[0],1)}n.addEventListener("mousedown",l),n.addEventListener("touchstart",l,{passive:!0});const u=new IntersectionObserver(_=>{for(const m of _)m.isIntersecting&&(le(new URL(m.target.href).pathname),u.unobserve(m.target))},{threshold:0});function f(_,m){const v=Je(_,n);if(!v)return;const{url:y,external:w}=ke(v,e);if(w)return;const E=pe(v);E.reload||(m<=E.preload_data?De(y):m<=E.preload_code&&le(y.pathname))}function h(){u.disconnect();for(const _ of n.querySelectorAll("a")){const{url:m,external:v}=ke(_,e);if(v)continue;const y=pe(_);y.reload||(y.preload_code===Ye.viewport&&u.observe(_),y.preload_code===Ye.eager&&le(m.pathname))}}p.after_navigate.push(h),h()}return{after_navigate:o=>{Ie(()=>(p.after_navigate.push(o),()=>{const l=p.after_navigate.indexOf(o);p.after_navigate.splice(l,1)}))},before_navigate:o=>{Ie(()=>(p.before_navigate.push(o),()=>{const l=p.before_navigate.indexOf(o);p.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(g||!s)&&(d=!1)},goto:(o,l={})=>we(o,l,[]),invalidate:o=>{if(typeof o=="function")i.push(o);else{const{href:l}=new URL(o,location.href);i.push(u=>u.href===l)}return Te()},invalidateAll:()=>(V=!0,Te()),preload_data:async o=>{const l=new URL(o,Ke(document));await De(l)},preload_code:le,apply_action:async o=>{if(o.type==="error"){const l=new URL(location.href),{branch:u,route:f}=t;if(!f)return;const h=await ze(t.branch.length,u,f.errors);if(h){const _=await ne({url:l,params:t.params,branch:u.slice(0,h.idx).concat(h.node),status:o.status??500,error:o.error,route:f});t=_.state,k.$set(_.props),de().then(Le)}}else if(o.type==="redirect")we(o.location,{invalidateAll:!0},[]);else{const l={form:o.data,page:{...Q,form:o.data,status:o.status}};k.$set(l),o.type==="success"&&de().then(Le)}},_start_router:()=>{var o;history.scrollRestoration="manual",addEventListener("beforeunload",l=>{var f;let u=!1;if(!b){const h={from:{params:t.params,route:{id:((f=t.route)==null?void 0:f.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>u=!0};p.before_navigate.forEach(_=>_(h))}u?(l.preventDefault(),l.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(N);try{sessionStorage[et]=JSON.stringify(oe)}catch{}}}),(o=navigator.connection)!=null&&o.saveData||tt(),n.addEventListener("click",l=>{if(l.button||l.which!==1||l.metaKey||l.ctrlKey||l.shiftKey||l.altKey||l.defaultPrevented)return;const u=Je(l.composedPath()[0],n);if(!u)return;const{url:f,external:h,target:_}=ke(u,e);if(!f)return;if(_==="_parent"||_==="_top"){if(window.parent!==window)return}else if(_&&_!=="_self")return;const m=pe(u);if(!(u instanceof SVGAElement)&&f.protocol!==location.protocol&&!(f.protocol==="https:"||f.protocol==="http:"))return;if(h||m.reload){Fe({url:f,type:"link"})||l.preventDefault(),b=!0;return}const[y,w]=f.href.split("#");if(w!==void 0&&y===location.href.split("#")[0]){D=!0,Se(N),t.url=f,Z.page.set({...Q,url:f}),Z.page.notify();return}ue({url:f,scroll:m.noscroll?_e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:f.href===location.href},accepted:()=>l.preventDefault(),blocked:()=>l.preventDefault(),type:"link"})}),n.addEventListener("submit",l=>{if(l.defaultPrevented)return;const u=HTMLFormElement.prototype.cloneNode.call(l.target),f=l.submitter;if(((f==null?void 0:f.formMethod)||u.method)!=="get")return;const _=new URL((f==null?void 0:f.hasAttribute("formaction"))&&(f==null?void 0:f.formAction)||u.action);if(We(_,e))return;const m=l.target,{noscroll:v,reload:y}=pe(m);if(y)return;l.preventDefault(),l.stopPropagation();const w=new FormData(m),E=f==null?void 0:f.getAttribute("name");E&&w.append(E,(f==null?void 0:f.getAttribute("value"))??""),_.search=new URLSearchParams(w).toString(),ue({url:_,scroll:v?_e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",l=>{var u;if((u=l.state)!=null&&u[Y]){if(l.state[Y]===N)return;const f=l.state[Y]-N;ue({url:new URL(location.href),scroll:oe[l.state[Y]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{N=l.state[Y]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{D&&(D=!1,history.replaceState({...history.state,[Y]:++N},"",location.href))});for(const l of document.querySelectorAll("link"))l.rel==="icon"&&(l.href=l.href);addEventListener("pageshow",l=>{l.persisted&&Z.navigating.set(null)})},_hydrate:async({status:o=200,error:l,node_ids:u,params:f,route:h,data:_,form:m})=>{c=!0;const v=new URL(location.href);({params:f={},route:h={id:null}}=fe(v,!1)||{});let y;try{const w=u.map(async(E,U)=>{const H=_[U];return ye({loader:me[E],url:v,params:f,route:h,parent:async()=>{const S={};for(let $=0;$<U;$+=1)Object.assign(S,(await w[$]).data);return S},server_data_node:be(H)})});y=await ne({url:v,params:f,branch:await Promise.all(w),status:o,error:l,form:m,route:Re.find(({id:E})=>E===h.id)??null})}catch(w){if(w instanceof Xe){await ae(new URL(w.location,location.href));return}y=await ce({status:w instanceof Ae?w.status:500,error:await re(w,{url:v,params:f,route:h}),url:v,route:h})}Ve(y)}}}async function xe(r,e){var p;const n=new URL(r);n.pathname=Et(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await he(n.href),a=await i.json();if(!i.ok)throw new Error(a);return(p=a.nodes)==null||p.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=an(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),a}function re(r,e){return r instanceof Ae?r.body:Yt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(i=>{setTimeout(()=>{var a;i((a=getSelection())==null?void 0:a.removeAllRanges())})})}}async function dn({env:r,hydrate:e,paths:n,target:i,version:a}){ht(n),mt(a);const p=on({target:i,base:n.base});_t({client:p}),e?await p._hydrate(e):p.goto(location.href,{replaceState:!0}),p._start_router()}export{dn as start};
