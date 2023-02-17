import{d as G,w as K}from"./index-3f2a2081.js";import{E as x,o as X,w as j,a as h,q as p,g as q}from"./user-226865bb.js";import{b as N,I as H}from"./IconBase-bfd10f6f.js";import{a1 as V,S as J,i as Y,s as Z,M as I,w as ee,x as te,y as ne,N as ie,O as se,f as oe,t as ae,z as re,P as M,Q as ce,R as ue,m as de,h as v,n as le,b as fe,B as ze}from"./index-6abebcc6.js";const pe=(e,t)=>t.some(n=>e instanceof n);let P,L;function _e(){return P||(P=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function me(){return L||(L=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const C=new WeakMap,E=new WeakMap,$=new WeakMap,y=new WeakMap,S=new WeakMap;function he(e){const t=new Promise((n,i)=>{const o=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(l(e.result)),o()},a=()=>{i(e.error),o()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&C.set(n,e)}).catch(()=>{}),S.set(t,e),t}function we(e){if(E.has(e))return;const t=new Promise((n,i)=>{const o=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),o()},a=()=>{i(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});E.set(e,t)}let g={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return E.get(e);if(t==="objectStoreNames")return e.objectStoreNames||$.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return l(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ye(e){g=e(g)}function be(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(b(this),t,...n);return $.set(i,t.sort?t.sort():[t]),l(i)}:me().includes(e)?function(...t){return e.apply(b(this),t),l(C.get(this))}:function(...t){return l(e.apply(b(this),t))}}function De(e){return typeof e=="function"?be(e):(e instanceof IDBTransaction&&we(e),pe(e,_e())?new Proxy(e,g):e)}function l(e){if(e instanceof IDBRequest)return he(e);if(y.has(e))return y.get(e);const t=De(e);return t!==e&&(y.set(e,t),S.set(t,e)),t}const b=e=>S.get(e);function Qe(e,t,{blocked:n,upgrade:i,blocking:o,terminated:s}={}){const a=indexedDB.open(e,t),d=l(a);return i&&a.addEventListener("upgradeneeded",u=>{i(l(a.result),u.oldVersion,u.newVersion,l(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),d.then(u=>{s&&u.addEventListener("close",()=>s()),o&&u.addEventListener("versionchange",r=>o(r.oldVersion,r.newVersion,r))}).catch(()=>{}),d}const Ie=["get","getKey","getAll","getAllKeys","count"],Ee=["put","add","delete","clear"],D=new Map;function T(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(D.get(t))return D.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,o=Ee.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(o||Ie.includes(n)))return;const s=async function(a,...d){const u=this.transaction(a,o?"readwrite":"readonly");let r=u.store;return i&&(r=r.index(d.shift())),(await Promise.all([r[n](...d),o&&u.done]))[0]};return D.set(t,s),s}ye(e=>({...e,get:(t,n,i)=>T(t,n)||e.get(t,n,i),has:(t,n)=>!!T(t,n)||e.has(t,n)}));const ge="quantu",Be=1,Ae={upgrade(e,t,n){n===1&&(e.createObjectStore("quizzes",{keyPath:"local_id",autoIncrement:!0}).createIndex("user_id","user_id"),e.createObjectStore("questions",{keyPath:"local_id",autoIncrement:!0}).createIndex("user_id","user_id"))}};function _(){return qe(ge,Be,Ae)}let m,Q=!1;const O=new x;function qe(e,t,n={}){return m?Promise.resolve(m):Q?new Promise(i=>O.once("db",i)):(Q=!0,Qe(e,t,n).then(i=>(i.addEventListener("close",()=>{m=void 0}),m=i,O.emit("db",i),i)).finally(()=>{Q=!1}))}async function Se(e){return await(await _()).getAllFromIndex("quizzes","user_id",e)}async function k(e){return await(await _()).get("quizzes",e)}async function F(e,t){const n=await _(),i={...w(e),...t,uri:N(t.name)},o=await n.put("quizzes",i);return{...i,local_id:o}}async function R(e,t,n){const i=await _(),o=await i.get("quizzes",t)||w(e),s={...o,...n,user_id:e,local_id:t,uri:n.name?N(n.name):o.uri,updated_at:new Date};return await i.put("quizzes",s),s}async function Me(e,t,n){const i=await _(),s={...await i.get("quizzes",t)||w(e),...n,user_id:e,local_id:t};return await i.put("quizzes",s),s}async function ve(e,t){const n=await _(),o={...await n.get("quizzes",t)||w(e),local_id:t,updated_at:new Date,local_deleted:1};await n.put("quizzes",o)}async function B(e){await(await _()).delete("quizzes",e)}function w(e){return{id:0,local_deleted:0,user_id:e,name:"",uri:"",created_at:new Date,updated_at:new Date}}const f=K({}),Ve=G(f,e=>Object.values(e));async function Ce(e){var o;const t=(o=q())==null?void 0:o.id;let n={};h()&&(n=await p.postApiQuizzes({postApiQuizzes:e}));const i=await F(t,{...e,...n});return f.update(s=>({...s,[i.local_id]:i})),i}async function $e(e,t){var o;const n=(o=q())==null?void 0:o.id,i=await k(e);if(i){let s={};h()&&(s=await p.patchApiQuizzesId({id:i.id,patchApiQuizzesId:t}));const a=await R(n,e,{...i,...s});return f.update(d=>({...d,[a.local_id]:a})),a}}async function ke(e){var n;const t=(n=q())==null?void 0:n.id;if(h()){const i=await k(e);i&&(await p.deleteApiQuizzesId({id:i.id}),await B(e))}else await ve(t,e);f.update(i=>(i={...i},delete i[e],i))}function Fe(){return A?new Promise(e=>W.once("quizzes",e)):Promise.resolve(V(f))}const W=new x;let A=!1;async function U(e){A=!0;try{const t=await Se(e),n={},i={},o=[];for(const s of t)s.id===0?o.push(s):i[s.id]=s,s.local_deleted===0&&(n[s.local_id]=s);if(f.update(s=>({...s,...n})),h()){const s=await p.getApiQuizzes(),a={},d=new Set,u=[];for(const r of s){const c=i[r.id];c?c.updated_at>r.updated_at?c.local_deleted===1?u.push(p.deleteApiQuizzesId({id:r.id}).then(()=>B(c.local_id)).then(()=>{d.add(c.local_id)})):u.push(p.patchApiQuizzesId({id:r.id,patchApiQuizzesId:{...r,...c}}).then(z=>{a[c.id]={...c,...z}})):c.updated_at<r.updated_at?u.push(R(e,c.local_id,{...c,...r}).then(z=>{a[z.local_id]=z})):a[c.local_id]={...c,...r}:u.push(F(e,r).then(z=>{a[z.local_id]=z}))}for(const r of o)u.push(p.postApiQuizzes({postApiQuizzes:r}).then(c=>Me(e,r.local_id,c)).then(c=>{a[c.local_id]=c}));await Promise.all(u),await Promise.all(Object.values(i).map(async r=>{a[r.local_id]||(d.add(r.local_id),await B(r.local_id))})),f.update(r=>{r={...r,...a};for(const c of d)delete r[c];return r})}}finally{A=!1,W.emit("quizzes",V(f))}}X.on("online",async()=>{const e=await j();U(e.id)});j().then(e=>U(e.id));function Pe(e){let t;return{c(){t=ce("path"),this.h()},l(n){t=ue(n,"path",{d:!0}),de(t).forEach(v),this.h()},h(){le(t,"d","M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z")},m(n,i){fe(n,t,i)},p:ze,d(n){n&&v(t)}}}function Le(e){let t,n;const i=[{viewBox:"0 0 24 24"},e[0]];let o={$$slots:{default:[Pe]},$$scope:{ctx:e}};for(let s=0;s<i.length;s+=1)o=I(o,i[s]);return t=new H({props:o}),{c(){ee(t.$$.fragment)},l(s){te(t.$$.fragment,s)},m(s,a){ne(t,s,a),n=!0},p(s,[a]){const d=a&1?ie(i,[i[0],se(s[0])]):{};a&2&&(d.$$scope={dirty:a,ctx:s}),t.$set(d)},i(s){n||(oe(t.$$.fragment,s),n=!0)},o(s){ae(t.$$.fragment,s),n=!1},d(s){re(t,s)}}}function Te(e,t,n){return e.$$set=i=>{n(0,t=I(I({},t),M(i)))},t=M(t),[t]}class Re extends J{constructor(t){super(),Y(this,t,Te,Le,Z,{})}}export{Re as M,Fe as a,Ce as c,ke as d,_ as g,k as i,Ve as q,$e as u};
