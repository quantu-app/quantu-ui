function $(){}const J=t=>t;function gt(t,e){for(const n in e)t[n]=e[n];return t}function et(t){return t()}function Y(){return Object.create(null)}function S(t){t.forEach(et)}function F(t){return typeof t=="function"}function It(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e}function xt(t){return Object.keys(t).length===0}function nt(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t){let e;return nt(t,n=>e=n)(),e}function Jt(t,e,n){t.$$.on_destroy.push(nt(e,n))}function Kt(t,e,n,s){if(t){const i=it(t,e,n,s);return t[0](i)}}function it(t,e,n,s){return t[1]&&s?gt(n.ctx.slice(),t[1](s(e))):n.ctx}function Qt(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const c=[],r=Math.max(e.dirty.length,i.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|i[l];return c}return e.dirty|i}return e.dirty}function Ut(t,e,n,s,i,c){if(i){const r=it(e,n,s,c);t.p(r,i)}}function Vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Xt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}const st=typeof window<"u";let K=st?()=>window.performance.now():()=>Date.now(),Q=st?t=>requestAnimationFrame(t):$;const C=new Set;function rt(t){C.forEach(e=>{e.c(t)||(C.delete(e),e.f())}),C.size!==0&&Q(rt)}function U(t){let e;return C.size===0&&Q(rt),{promise:new Promise(n=>{C.add(e={c:t,f:n})}),abort(){C.delete(e)}}}let H=!1;function wt(){H=!0}function $t(){H=!1}function bt(t,e,n,s){for(;t<e;){const i=t+(e-t>>1);n(i)<=s?t=i+1:e=i}return t}function vt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let i=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,f=(i>0&&e[n[i]].claim_order<=u?i+1:bt(1,i,_=>e[n[_]].claim_order,u))-1;s[o]=n[f]+1;const a=f+1;n[a]=o,i=Math.max(a,i)}const c=[],r=[];let l=e.length-1;for(let o=n[i]+1;o!=0;o=s[o-1]){for(c.push(e[o-1]);l>=o;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<r.length;o++){for(;u<c.length&&r[o].claim_order>=c[u].claim_order;)u++;const f=u<c.length?c[u]:null;t.insertBefore(r[o],f)}}function kt(t,e){t.appendChild(e)}function ot(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=lt("style");return Nt(ot(t),e),e.sheet}function Nt(t,e){return kt(t.head||t,e),e.sheet}function Ct(t,e){if(H){for(vt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Yt(t,e,n){H&&!n?Ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ct(t){t.parentNode&&t.parentNode.removeChild(t)}function lt(t){return document.createElement(t)}function St(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function V(t){return document.createTextNode(t)}function Zt(){return V(" ")}function te(){return V("")}function ee(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function ne(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function jt(t){return Array.from(t.childNodes)}function At(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ut(t,e,n,s,i=!1){At(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,i||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,i?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return s()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function at(t,e,n,s){return ut(t,i=>i.nodeName===e,i=>{const c=[];for(let r=0;r<i.attributes.length;r++){const l=i.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>i.removeAttribute(r))},()=>s(e))}function ie(t,e,n){return at(t,e,n,lt)}function se(t,e,n){return at(t,e,n,St)}function Mt(t,e){return ut(t,n=>n.nodeType===3,n=>{const s=""+e;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>V(e),!0)}function re(t){return Mt(t," ")}function oe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ce(t,e){t.value=e??""}function le(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function ue(t,e,n){t.classList[n?"add":"remove"](e)}function Rt(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}function ae(t,e){return new t(e)}const L=new Map;let T=0;function Bt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ot(t,e){const n={stylesheet:Et(e),rules:{}};return L.set(t,n),n}function X(t,e,n,s,i,c,r,l=0){const o=16.666/s;let u=`{
`;for(let m=0;m<=1;m+=o){const y=e+(n-e)*c(m);u+=m*100+`%{${r(y,1-y)}}
`}const f=u+`100% {${r(n,1-n)}}
}`,a=`__svelte_${Bt(f)}_${l}`,_=ot(t),{stylesheet:d,rules:h}=L.get(_)||Ot(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${a} ${s}ms linear ${i}ms 1 both`,T+=1,a}function q(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),T-=i,T||Pt())}function Pt(){Q(()=>{T||(L.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ct(e)}),L.clear())})}function fe(t,e,n,s){if(!e)return $;const i=t.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return $;const{delay:c=0,duration:r=300,easing:l=J,start:o=K()+c,end:u=o+r,tick:f=$,css:a}=n(t,{from:e,to:i},s);let _=!0,d=!1,h;function g(){a&&(h=X(t,0,1,r,c,l,a)),c||(d=!0)}function m(){a&&q(t,h),_=!1}return U(y=>{if(!d&&y>=o&&(d=!0),d&&y>=u&&(f(1,0),m()),!_)return!1;if(d){const k=y-o,b=0+1*l(k/r);f(b,1-b)}return!0}),g(),f(0,1),m}function _e(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:s}=e,i=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=s,Dt(t,i)}}function Dt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const s=getComputedStyle(t),i=s.transform==="none"?"":s.transform;t.style.transform=`${i} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let R;function M(t){R=t}function ft(){if(!R)throw new Error("Function called outside component initialization");return R}function de(t){ft().$$.on_mount.push(t)}function he(t){ft().$$.after_update.push(t)}const N=[],Z=[],P=[],tt=[],_t=Promise.resolve();let G=!1;function dt(){G||(G=!0,_t.then(ht))}function me(){return dt(),_t}function B(t){P.push(t)}const W=new Set;let E=0;function ht(){if(E!==0)return;const t=R;do{try{for(;E<N.length;){const e=N[E];E++,M(e),Lt(e.$$)}}catch(e){throw N.length=0,E=0,e}for(M(null),N.length=0,E=0;Z.length;)Z.pop()();for(let e=0;e<P.length;e+=1){const n=P[e];W.has(n)||(W.add(n),n())}P.length=0}while(N.length);for(;tt.length;)tt.pop()();G=!1,W.clear(),M(t)}function Lt(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}let A;function mt(){return A||(A=Promise.resolve(),A.then(()=>{A=null})),A}function z(t,e,n){t.dispatchEvent(Rt(`${e?"intro":"outro"}${n}`))}const D=new Set;let v;function pe(){v={r:0,c:[],p:v}}function ye(){v.r||S(v.c),v=v.p}function pt(t,e){t&&t.i&&(D.delete(t),t.i(e))}function Tt(t,e,n,s){if(t&&t.o){if(D.has(t))return;D.add(t),v.c.push(()=>{D.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const yt={duration:0};function ge(t,e,n){const s={direction:"in"};let i=e(t,n,s),c=!1,r,l,o=0;function u(){r&&q(t,r)}function f(){const{delay:_=0,duration:d=300,easing:h=J,tick:g=$,css:m}=i||yt;m&&(r=X(t,0,1,d,_,h,m,o++)),g(0,1);const y=K()+_,k=y+d;l&&l.abort(),c=!0,B(()=>z(t,!0,"start")),l=U(b=>{if(c){if(b>=k)return g(1,0),z(t,!0,"end"),u(),c=!1;if(b>=y){const j=h((b-y)/d);g(j,1-j)}}return c})}let a=!1;return{start(){a||(a=!0,q(t),F(i)?(i=i(s),mt().then(f)):f())},invalidate(){a=!1},end(){c&&(u(),c=!1)}}}function xe(t,e,n){const s={direction:"out"};let i=e(t,n,s),c=!0,r;const l=v;l.r+=1;function o(){const{delay:u=0,duration:f=300,easing:a=J,tick:_=$,css:d}=i||yt;d&&(r=X(t,1,0,f,u,a,d));const h=K()+u,g=h+f;B(()=>z(t,!1,"start")),U(m=>{if(c){if(m>=g)return _(0,1),z(t,!1,"end"),--l.r||S(l.c),!1;if(m>=h){const y=a((m-h)/f);_(1-y,y)}}return c})}return F(i)?mt().then(()=>{i=i(s),o()}):o(),{end(u){u&&i.tick&&i.tick(1,0),c&&(r&&q(t,r),c=!1)}}}function qt(t,e){Tt(t,1,1,()=>{e.delete(t.key)})}function we(t,e){t.f(),qt(t,e)}function $e(t,e,n,s,i,c,r,l,o,u,f,a){let _=t.length,d=c.length,h=_;const g={};for(;h--;)g[t[h].key]=h;const m=[],y=new Map,k=new Map;for(h=d;h--;){const p=a(i,c,h),x=n(p);let w=r.get(x);w?s&&w.p(p,e):(w=u(x,p),w.c()),y.set(x,m[h]=w),x in g&&k.set(x,Math.abs(h-g[x]))}const b=new Set,j=new Set;function I(p){pt(p,1),p.m(l,f),r.set(p.key,p),f=p.first,d--}for(;_&&d;){const p=m[d-1],x=t[_-1],w=p.key,O=x.key;p===x?(f=p.first,_--,d--):y.has(O)?!r.has(w)||b.has(w)?I(p):j.has(O)?_--:k.get(w)>k.get(O)?(j.add(w),I(p)):(b.add(O),_--):(o(x,r),_--)}for(;_--;){const p=t[_];y.has(p.key)||o(p,r)}for(;d;)I(m[d-1]);return m}function be(t,e){const n={},s={},i={$$scope:1};let c=t.length;for(;c--;){const r=t[c],l=e[c];if(l){for(const o in r)o in l||(s[o]=1);for(const o in l)i[o]||(n[o]=l[o],i[o]=1);t[c]=l}else for(const o in r)i[o]=1}for(const r in s)r in n||(n[r]=void 0);return n}function ve(t){return typeof t=="object"&&t!==null?t:{}}function ke(t){t&&t.c()}function Ee(t,e){t&&t.l(e)}function zt(t,e,n,s){const{fragment:i,after_update:c}=t.$$;i&&i.m(e,n),s||B(()=>{const r=t.$$.on_mount.map(et).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...r):S(r),t.$$.on_mount=[]}),c.forEach(B)}function Ft(t,e){const n=t.$$;n.fragment!==null&&(S(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ht(t,e){t.$$.dirty[0]===-1&&(N.push(t),dt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ne(t,e,n,s,i,c,r,l=[-1]){const o=R;M(t);const u=t.$$={fragment:null,ctx:[],props:c,update:$,not_equal:i,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:Y(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};r&&r(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return u.ctx&&i(u.ctx[a],u.ctx[a]=h)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](h),f&&Ht(t,a)),_}):[],u.update(),f=!0,S(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){wt();const a=jt(e.target);u.fragment&&u.fragment.l(a),a.forEach(ct)}else u.fragment&&u.fragment.c();e.intro&&pt(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),$t(),ht()}M(o)}class Ce{$destroy(){Ft(this,1),this.$destroy=$}$on(e,n){if(!F(n))return $;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ge as $,me as A,$ as B,nt as C,S as D,F as E,Wt as F,Kt as G,Ut as H,Vt as I,Qt as J,Ct as K,Jt as L,gt as M,be as N,ve as O,Xt as P,St as Q,se as R,Ce as S,ue as T,ee as U,$e as V,we as W,_e as X,Dt as Y,fe as Z,B as _,Zt as a,xe as a0,Gt as a1,qt as a2,ce as a3,Yt as b,re as c,ye as d,te as e,pt as f,pe as g,ct as h,Ne as i,he as j,lt as k,ie as l,jt as m,ne as n,de as o,le as p,V as q,Mt as r,It as s,Tt as t,oe as u,ae as v,ke as w,Ee as x,zt as y,Ft as z};
