function $(){}const V=t=>t;function vt(t,e){for(const n in e)t[n]=e[n];return t}function ct(t){return t()}function st(){return Object.create(null)}function A(t){t.forEach(ct)}function O(t){return typeof t=="function"}function Kt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let B;function Qt(t,e){return B||(B=document.createElement("a")),B.href=e,t===B.href}function Vt(t,e){return t!=t?e==e:t!==e}function kt(t){return Object.keys(t).length===0}function at(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Xt(t){let e;return at(t,n=>e=n)(),e}function Yt(t,e,n){t.$$.on_destroy.push(at(e,n))}function Zt(t,e,n,i){if(t){const s=lt(t,e,n,i);return t[0](s)}}function lt(t,e,n,i){return t[1]&&i?vt(n.ctx.slice(),t[1](i(e))):n.ctx}function te(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let a=0;a<r;a+=1)o[a]=e.dirty[a]|s[a];return o}return e.dirty|s}return e.dirty}function ee(t,e,n,i,s,o){if(s){const r=lt(e,n,i,o);t.p(r,s)}}function ne(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ie(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function se(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function re(t){return t??""}function oe(t){return t&&O(t.destroy)?t.destroy:$}const ut=typeof window<"u";let X=ut?()=>window.performance.now():()=>Date.now(),Y=ut?t=>requestAnimationFrame(t):$;const N=new Set;function ft(t){N.forEach(e=>{e.c(t)||(N.delete(e),e.f())}),N.size!==0&&Y(ft)}function Z(t){let e;return N.size===0&&Y(ft),{promise:new Promise(n=>{N.add(e={c:t,f:n})}),abort(){N.delete(e)}}}let U=!1;function Et(){U=!0}function Ct(){U=!1}function St(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Nt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:St(1,s,d=>e[n[d]].claim_order,l))-1;i[c]=n[f]+1;const u=f+1;n[u]=c,s=Math.max(u,s)}const o=[],r=[];let a=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);a>=c;a--)r.push(e[a]);a--}for(;a>=0;a--)r.push(e[a]);o.reverse(),r.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<r.length;c++){for(;l<o.length&&r[c].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(r[c],f)}}function dt(t,e){t.appendChild(e)}function _t(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function At(t){const e=et("style");return jt(_t(t),e),e.sheet}function jt(t,e){return dt(t.head||t,e),e.sheet}function Mt(t,e){if(U){for(Nt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ce(t,e,n){U&&!n?Mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode&&t.parentNode.removeChild(t)}function ae(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function Dt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function nt(t){return document.createTextNode(t)}function le(){return nt(" ")}function ue(){return nt("")}function rt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function fe(t){return function(e){return e.preventDefault(),t.call(this,e)}}function de(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Pt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _e(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:Pt(t,i,e[i])}function zt(t){return Array.from(t.childNodes)}function Ot(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ht(t,e,n,i,s=!1){Ot(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const a=t[r];if(e(a)){const c=n(a);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),a}}for(let r=t.claim_info.last_index-1;r>=0;r--){const a=t[r];if(e(a)){const c=n(a);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,a}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function mt(t,e,n,i){return ht(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const a=s.attributes[r];n[a.name]||o.push(a.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function he(t,e,n){return mt(t,e,n,et)}function me(t,e,n){return mt(t,e,n,Dt)}function Rt(t,e){return ht(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>nt(e),!0)}function pe(t){return Rt(t," ")}function ye(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ge(t,e){t.value=e??""}function $e(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function we(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}let q;function Bt(){if(q===void 0){q=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{q=!0}}return q}function be(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=et("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Bt();let o;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=rt(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=rt(i.contentWindow,"resize",e)}),dt(t,i),()=>{(s||o&&i.contentWindow)&&o(),tt(i)}}function xe(t,e,n){t.classList[n?"add":"remove"](e)}function pt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ve(t,e){return new t(e)}const W=new Map;let I=0;function qt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Tt(t,e){const n={stylesheet:At(e),rules:{}};return W.set(t,n),n}function it(t,e,n,i,s,o,r,a=0){const c=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=c){const y=e+(n-e)*o(m);l+=m*100+`%{${r(y,1-y)}}
`}const f=l+`100% {${r(n,1-n)}}
}`,u=`__svelte_${qt(f)}_${a}`,d=_t(t),{stylesheet:_,rules:h}=W.get(d)||Tt(d,t);h[u]||(h[u]=!0,_.insertRule(`@keyframes ${u} ${f}`,_.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${u} ${i}ms linear ${s}ms 1 both`,I+=1,u}function F(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),I-=s,I||Lt())}function Lt(){Y(()=>{I||(W.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&tt(e)}),W.clear())})}function ke(t,e,n,i){if(!e)return $;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return $;const{delay:o=0,duration:r=300,easing:a=V,start:c=X()+o,end:l=c+r,tick:f=$,css:u}=n(t,{from:e,to:s},i);let d=!0,_=!1,h;function g(){u&&(h=it(t,0,1,r,o,a,u)),o||(_=!0)}function m(){u&&F(t,h),d=!1}return Z(y=>{if(!_&&y>=c&&(_=!0),_&&y>=l&&(f(1,0),m()),!d)return!1;if(_){const k=y-c,x=0+1*a(k/r);f(x,1-x)}return!0}),g(),f(0,1),m}function Ee(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Wt(t,s)}}function Wt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let P;function D(t){P=t}function E(){if(!P)throw new Error("Function called outside component initialization");return P}function Ce(t){E().$$.before_update.push(t)}function Se(t){E().$$.on_mount.push(t)}function Ne(t){E().$$.after_update.push(t)}function Ae(t){E().$$.on_destroy.push(t)}function je(){const t=E();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=pt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function Me(t,e){return E().$$.context.set(t,e),e}function De(t){return E().$$.context.get(t)}function Pe(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const S=[],ot=[],T=[],K=[],yt=Promise.resolve();let Q=!1;function gt(){Q||(Q=!0,yt.then($t))}function ze(){return gt(),yt}function z(t){T.push(t)}function Oe(t){K.push(t)}const J=new Set;let C=0;function $t(){if(C!==0)return;const t=P;do{try{for(;C<S.length;){const e=S[C];C++,D(e),It(e.$$)}}catch(e){throw S.length=0,C=0,e}for(D(null),S.length=0,C=0;ot.length;)ot.pop()();for(let e=0;e<T.length;e+=1){const n=T[e];J.has(n)||(J.add(n),n())}T.length=0}while(S.length);for(;K.length;)K.pop()();Q=!1,J.clear(),D(t)}function It(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}let M;function wt(){return M||(M=Promise.resolve(),M.then(()=>{M=null})),M}function H(t,e,n){t.dispatchEvent(pt(`${e?"intro":"outro"}${n}`))}const L=new Set;let v;function Re(){v={r:0,c:[],p:v}}function Be(){v.r||A(v.c),v=v.p}function bt(t,e){t&&t.i&&(L.delete(t),t.i(e))}function Ft(t,e,n,i){if(t&&t.o){if(L.has(t))return;L.add(t),v.c.push(()=>{L.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const xt={duration:0};function qe(t,e,n){const i={direction:"in"};let s=e(t,n,i),o=!1,r,a,c=0;function l(){r&&F(t,r)}function f(){const{delay:d=0,duration:_=300,easing:h=V,tick:g=$,css:m}=s||xt;m&&(r=it(t,0,1,_,d,h,m,c++)),g(0,1);const y=X()+d,k=y+_;a&&a.abort(),o=!0,z(()=>H(t,!0,"start")),a=Z(x=>{if(o){if(x>=k)return g(1,0),H(t,!0,"end"),l(),o=!1;if(x>=y){const j=h((x-y)/_);g(j,1-j)}}return o})}let u=!1;return{start(){u||(u=!0,F(t),O(s)?(s=s(i),wt().then(f)):f())},invalidate(){u=!1},end(){o&&(l(),o=!1)}}}function Te(t,e,n){const i={direction:"out"};let s=e(t,n,i),o=!0,r;const a=v;a.r+=1;function c(){const{delay:l=0,duration:f=300,easing:u=V,tick:d=$,css:_}=s||xt;_&&(r=it(t,1,0,f,l,u,_));const h=X()+l,g=h+f;z(()=>H(t,!1,"start")),Z(m=>{if(o){if(m>=g)return d(0,1),H(t,!1,"end"),--a.r||A(a.c),!1;if(m>=h){const y=u((m-h)/f);d(1-y,y)}}return o})}return O(s)?wt().then(()=>{s=s(i),c()}):c(),{end(l){l&&s.tick&&s.tick(1,0),o&&(r&&F(t,r),o=!1)}}}function Le(t,e){t.d(1),e.delete(t.key)}function Ht(t,e){Ft(t,1,1,()=>{e.delete(t.key)})}function We(t,e){t.f(),Ht(t,e)}function Ie(t,e,n,i,s,o,r,a,c,l,f,u){let d=t.length,_=o.length,h=d;const g={};for(;h--;)g[t[h].key]=h;const m=[],y=new Map,k=new Map;for(h=_;h--;){const p=u(s,o,h),w=n(p);let b=r.get(w);b?i&&b.p(p,e):(b=l(w,p),b.c()),y.set(w,m[h]=b),w in g&&k.set(w,Math.abs(h-g[w]))}const x=new Set,j=new Set;function G(p){bt(p,1),p.m(a,f),r.set(p.key,p),f=p.first,_--}for(;d&&_;){const p=m[_-1],w=t[d-1],b=p.key,R=w.key;p===w?(f=p.first,d--,_--):y.has(R)?!r.has(b)||x.has(b)?G(p):j.has(R)?d--:k.get(b)>k.get(R)?(j.add(b),G(p)):(x.add(R),d--):(c(w,r),d--)}for(;d--;){const p=t[d];y.has(p.key)||c(p,r)}for(;_;)G(m[_-1]);return m}function Fe(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],a=e[o];if(a){for(const c in r)c in a||(i[c]=1);for(const c in a)s[c]||(n[c]=a[c],s[c]=1);t[o]=a}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function He(t){return typeof t=="object"&&t!==null?t:{}}function Ue(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ge(t){t&&t.c()}function Je(t,e){t&&t.l(e)}function Ut(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||z(()=>{const r=t.$$.on_mount.map(ct).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...r):A(r),t.$$.on_mount=[]}),o.forEach(z)}function Gt(t,e){const n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Jt(t,e){t.$$.dirty[0]===-1&&(S.push(t),gt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ke(t,e,n,i,s,o,r,a=[-1]){const c=P;D(t);const l=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:s,bound:st(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:st(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(u,d,..._)=>{const h=_.length?_[0]:d;return l.ctx&&s(l.ctx[u],l.ctx[u]=h)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](h),f&&Jt(t,u)),d}):[],l.update(),f=!0,A(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){Et();const u=zt(e.target);l.fragment&&l.fragment.l(u),u.forEach(tt)}else l.fragment&&l.fragment.c();e.intro&&bt(t.$$.fragment),Ut(t,e.target,e.anchor,e.customElement),Ct(),$t()}D(c)}class Qe{$destroy(){Gt(this,1),this.$destroy=$}$on(e,n){if(!O(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!kt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{qe as $,ze as A,$ as B,at as C,A as D,O as E,Vt as F,Zt as G,ee as H,ne as I,te as J,Mt as K,Yt as L,vt as M,Fe as N,He as O,ie as P,Dt as Q,me as R,Qe as S,xe as T,rt as U,Ie as V,We as W,Ee as X,Wt as Y,ke as Z,z as _,le as a,Te as a0,Xt as a1,ot as a2,Ue as a3,Oe as a4,ge as a5,oe as a6,fe as a7,Le as a8,Me as a9,De as aa,je as ab,be as ac,Ce as ad,Ae as ae,Ht as af,_e as ag,se as ah,Qt as ai,we as aj,de as ak,ae as al,Pe as am,re as an,ce as b,pe as c,Be as d,ue as e,bt as f,Re as g,tt as h,Ke as i,Ne as j,et as k,he as l,zt as m,Pt as n,Se as o,$e as p,nt as q,Rt as r,Kt as s,Ft as t,ye as u,ve as v,Ge as w,Je as x,Ut as y,Gt as z};