import{S as K,b as X,G as Z,A as ie,a3 as fe,m as b,w as F,c as I,C as H,p as g,q as v,x as G,k as h,d as D,D as V,u as _,f as N,L as p,E as L,V as R,a4 as ce,j as S,g as A,F as P,a5 as J,a6 as de,a7 as se,r as x,n as me,z as _e,W as be,a8 as ge,h as ze,i as re,y as ne,M as $e}from"../chunks/index.18be049c.js";import{c as ve,u as Ee,M as ke,d as Te,q as we}from"../chunks/MdDelete.9825590a.js";import{a as pe}from"../chunks/IconBase.cecb7b67.js";import{M as he,a as Qe}from"../chunks/MdEdit.4d8b1722.js";import{S as le}from"../chunks/SortDirection.c8b11d09.js";function qe(n){let e,t,a,s,l,r,c,m,$;return{c(){e=b("form"),t=b("input"),a=I(),s=b("div"),l=b("div"),r=b("input"),this.h()},l(u){e=g(u,"FORM",{});var i=v(e);t=g(i,"INPUT",{type:!0,class:!0,placeholder:!0}),a=D(i),s=g(i,"DIV",{class:!0});var f=v(s);l=g(f,"DIV",{class:!0});var z=v(l);r=g(z,"INPUT",{type:!0,class:!0}),z.forEach(h),f.forEach(h),i.forEach(h),this.h()},h(){_(t,"type","text"),_(t,"class","mb-1"),_(t,"placeholder","Name"),_(r,"type","submit"),_(r,"class","btn primary"),r.value="Create Quiz",r.disabled=c=!n[0],_(l,"class","flex"),_(s,"class","flex flex-column justify-end")},m(u,i){N(u,e,i),p(e,t),J(t,n[0]),p(e,a),p(e,s),p(s,l),p(l,r),m||($=[de(pe.call(null,t)),R(t,"input",n[4]),R(e,"submit",se(n[2]))],m=!0)},p(u,i){i&1&&t.value!==u[0]&&J(t,u[0]),i&1&&c!==(c=!u[0])&&(r.disabled=c)},d(u){u&&h(e),m=!1,x($)}}}function ye(n){let e,t;return{c(){e=b("h3"),t=F("Create a Quiz"),this.h()},l(a){e=g(a,"H3",{slot:!0});var s=v(e);t=G(s,"Create a Quiz"),s.forEach(h),this.h()},h(){_(e,"slot","title")},m(a,s){N(a,e,s),p(e,t)},p:me,d(a){a&&h(e)}}}function Ce(n){let e,t,a,s,l,r,c,m;function $(i){n[5](i)}let u={$$slots:{title:[ye],default:[qe]},$$scope:{ctx:n}};return n[1]!==void 0&&(u.open=n[1]),s=new he({props:u}),ie.push(()=>fe(s,"open",$)),{c(){e=b("button"),t=F("Create Quiz"),a=I(),H(s.$$.fragment),this.h()},l(i){e=g(i,"BUTTON",{class:!0});var f=v(e);t=G(f,"Create Quiz"),f.forEach(h),a=D(i),V(s.$$.fragment,i),this.h()},h(){_(e,"class","btn primary")},m(i,f){N(i,e,f),p(e,t),N(i,a,f),L(s,i,f),r=!0,c||(m=R(e,"click",n[3]),c=!0)},p(i,[f]){const z={};f&65&&(z.$$scope={dirty:f,ctx:i}),!l&&f&2&&(l=!0,z.open=i[1],ce(()=>l=!1)),s.$set(z)},i(i){r||(S(s.$$.fragment,i),r=!0)},o(i){A(s.$$.fragment,i),r=!1},d(i){i&&h(e),i&&h(a),P(s,i),c=!1,m()}}}function Ie(n,e,t){let a;async function s(){await ve({name:a}),t(0,a=""),t(1,l=!1)}let l=!1;function r(){t(1,l=!0)}function c(){a=this.value,t(0,a)}function m($){l=$,t(1,l)}return[a,l,s,r,c,m]}class De extends K{constructor(e){super(),X(this,e,Ie,Ce,Z,{})}}function Ue(n){let e,t,a,s,l,r,c,m,$;return{c(){e=b("form"),t=b("input"),a=I(),s=b("div"),l=b("div"),r=b("input"),this.h()},l(u){e=g(u,"FORM",{});var i=v(e);t=g(i,"INPUT",{type:!0,class:!0,placeholder:!0}),a=D(i),s=g(i,"DIV",{class:!0});var f=v(s);l=g(f,"DIV",{class:!0});var z=v(l);r=g(z,"INPUT",{type:!0,class:!0}),z.forEach(h),f.forEach(h),i.forEach(h),this.h()},h(){_(t,"type","text"),_(t,"class","mb-1"),_(t,"placeholder","Name"),_(r,"type","submit"),_(r,"class","btn primary"),r.value="Update Quiz",r.disabled=c=!n[0],_(l,"class","flex"),_(s,"class","flex flex-column justify-end")},m(u,i){N(u,e,i),p(e,t),J(t,n[0]),p(e,a),p(e,s),p(s,l),p(l,r),m||($=[de(pe.call(null,t)),R(t,"input",n[5]),R(e,"submit",se(n[3]))],m=!0)},p(u,i){i&1&&t.value!==u[0]&&J(t,u[0]),i&1&&c!==(c=!u[0])&&(r.disabled=c)},d(u){u&&h(e),m=!1,x($)}}}function Ne(n){let e,t;return{c(){e=b("h3"),t=F("Update a Quiz"),this.h()},l(a){e=g(a,"H3",{slot:!0});var s=v(e);t=G(s,"Update a Quiz"),s.forEach(h),this.h()},h(){_(e,"slot","title")},m(a,s){N(a,e,s),p(e,t)},p:me,d(a){a&&h(e)}}}function Oe(n){let e,t,a;function s(r){n[6](r)}let l={onClose:n[2],$$slots:{title:[Ne],default:[Ue]},$$scope:{ctx:n}};return n[1]!==void 0&&(l.open=n[1]),e=new he({props:l}),ie.push(()=>fe(e,"open",s)),{c(){H(e.$$.fragment)},l(r){V(e.$$.fragment,r)},m(r,c){L(e,r,c),a=!0},p(r,[c]){const m={};c&4&&(m.onClose=r[2]),c&129&&(m.$$scope={dirty:c,ctx:r}),!t&&c&2&&(t=!0,m.open=r[1],ce(()=>t=!1)),e.$set(m)},i(r){a||(S(e.$$.fragment,r),a=!0)},o(r){A(e.$$.fragment,r),a=!1},d(r){P(e,r)}}}function Me(n,e,t){let{name:a}=e,{localId:s}=e,{open:l=!1}=e,{onClose:r=()=>{}}=e;async function c(){await Ee(s,{name:a}),t(0,a=""),t(1,l=!1)}function m(){a=this.value,t(0,a)}function $(u){l=u,t(1,l)}return n.$$set=u=>{"name"in u&&t(0,a=u.name),"localId"in u&&t(4,s=u.localId),"open"in u&&t(1,l=u.open),"onClose"in u&&t(2,r=u.onClose)},[a,l,r,c,s,m,$]}class Se extends K{constructor(e){super(),X(this,e,Me,Oe,Z,{name:0,localId:4,open:1,onClose:2})}}function oe(n,e,t){const a=n.slice();return a[9]=e[t],a}function ue(n,e){let t,a,s,l=e[9].name+"",r,c,m,$,u=e[9].created_at.toLocaleString()+"",i,f,z,E,q,B,U,y,w,O,j,W;return q=new ke({}),y=new Qe({}),{key:n,first:null,c(){t=b("tr"),a=b("td"),s=b("a"),r=F(l),m=I(),$=b("td"),i=F(u),f=I(),z=b("td"),E=b("button"),H(q.$$.fragment),B=I(),U=b("button"),H(y.$$.fragment),w=I(),this.h()},l(Q){t=g(Q,"TR",{class:!0});var k=v(t);a=g(k,"TD",{class:!0});var Y=v(a);s=g(Y,"A",{href:!0});var o=v(s);r=G(o,l),o.forEach(h),Y.forEach(h),m=D(k),$=g(k,"TD",{class:!0});var d=v($);i=G(d,u),d.forEach(h),f=D(k),z=g(k,"TD",{class:!0});var T=v(z);E=g(T,"BUTTON",{class:!0});var C=v(E);V(q.$$.fragment,C),C.forEach(h),B=D(T),U=g(T,"BUTTON",{class:!0});var M=v(U);V(y.$$.fragment,M),M.forEach(h),T.forEach(h),w=D(k),k.forEach(h),this.h()},h(){_(s,"href",c="/quizzes/"+e[9].local_id),_(a,"class","border-b border-slate-100 dark:border-slate-700 p-1"),_($,"class","border-b border-slate-100 dark:border-slate-700 p-1"),_(E,"class","btn danger p-1 w-8 h-8"),_(U,"class","btn primary p-1 w-8 h-8"),_(z,"class","border-b border-slate-100 dark:border-slate-700 p-1"),_(t,"class","hover:bg-gray-200 cursor-pointer"),this.first=t},m(Q,k){N(Q,t,k),p(t,a),p(a,s),p(s,r),p(t,m),p(t,$),p($,i),p(t,f),p(t,z),p(z,E),L(q,E,null),p(z,B),p(z,U),L(y,U,null),p(t,w),O=!0,j||(W=[R(E,"click",function(){re(e[7](e[9].local_id))&&e[7](e[9].local_id).apply(this,arguments)}),R(U,"click",se(function(){re(e[8](e[9].local_id,e[9].name))&&e[8](e[9].local_id,e[9].name).apply(this,arguments)}))],j=!0)},p(Q,k){e=Q,(!O||k&1)&&l!==(l=e[9].name+"")&&ne(r,l),(!O||k&1&&c!==(c="/quizzes/"+e[9].local_id))&&_(s,"href",c),(!O||k&1)&&u!==(u=e[9].created_at.toLocaleString()+"")&&ne(i,u)},i(Q){O||(S(q.$$.fragment,Q),S(y.$$.fragment,Q),O=!0)},o(Q){A(q.$$.fragment,Q),A(y.$$.fragment,Q),O=!1},d(Q){Q&&h(t),P(q),P(y),j=!1,x(W)}}}function Ae(n){let e,t,a,s,l,r,c,m,$,u,i,f,z,E,q,B,U,y,w=[],O=new Map,j,W,Q;e=new De({}),a=new Se({props:{name:n[3],localId:n[2],open:n[4],onClose:n[6]}}),u=new le({props:{sort:n[1]&&n[1][0]==="name",asc:n[1]&&n[1][1]===1}}),E=new le({props:{sort:n[1]&&n[1][0]==="created_at",asc:n[1]&&n[1][1]===1}});let k=n[0];const Y=o=>o[9].local_id;for(let o=0;o<k.length;o+=1){let d=oe(n,k,o),T=Y(d);O.set(T,w[o]=ue(T,d))}return{c(){H(e.$$.fragment),t=I(),H(a.$$.fragment),s=I(),l=b("table"),r=b("thead"),c=b("tr"),m=b("th"),$=F("Name "),H(u.$$.fragment),i=I(),f=b("th"),z=F("Created At "),H(E.$$.fragment),q=I(),B=b("th"),U=I(),y=b("tbody");for(let o=0;o<w.length;o+=1)w[o].c();this.h()},l(o){V(e.$$.fragment,o),t=D(o),V(a.$$.fragment,o),s=D(o),l=g(o,"TABLE",{class:!0});var d=v(l);r=g(d,"THEAD",{});var T=v(r);c=g(T,"TR",{});var C=v(c);m=g(C,"TH",{class:!0});var M=v(m);$=G(M,"Name "),V(u.$$.fragment,M),M.forEach(h),i=D(C),f=g(C,"TH",{class:!0});var ee=v(f);z=G(ee,"Created At "),V(E.$$.fragment,ee),ee.forEach(h),q=D(C),B=g(C,"TH",{class:!0}),v(B).forEach(h),C.forEach(h),T.forEach(h),U=D(d),y=g(d,"TBODY",{});var ae=v(y);for(let te=0;te<w.length;te+=1)w[te].l(ae);ae.forEach(h),d.forEach(h),this.h()},h(){_(m,"class","border-b dark:border-slate-600 cursor-pointer select-none text-left p-1"),_(f,"class","border-b dark:border-slate-600 cursor-pointer select-none text-left p-1"),_(B,"class","border-b dark:border-slate-600 cursor-pointer select-none text-left p-1"),_(l,"class","table-auto w-full")},m(o,d){L(e,o,d),N(o,t,d),L(a,o,d),N(o,s,d),N(o,l,d),p(l,r),p(r,c),p(c,m),p(m,$),L(u,m,null),p(c,i),p(c,f),p(f,z),L(E,f,null),p(c,q),p(c,B),p(l,U),p(l,y);for(let T=0;T<w.length;T+=1)w[T].m(y,null);j=!0,W||(Q=[R(m,"click",n[5]("name")),R(f,"click",n[5]("created_at"))],W=!0)},p(o,[d]){const T={};d&8&&(T.name=o[3]),d&4&&(T.localId=o[2]),d&16&&(T.open=o[4]),a.$set(T);const C={};d&2&&(C.sort=o[1]&&o[1][0]==="name"),d&2&&(C.asc=o[1]&&o[1][1]===1),u.$set(C);const M={};d&2&&(M.sort=o[1]&&o[1][0]==="created_at"),d&2&&(M.asc=o[1]&&o[1][1]===1),E.$set(M),d&385&&(k=o[0],_e(),w=be(w,d,Y,1,o,k,O,y,ge,ue,null,oe),ze())},i(o){if(!j){S(e.$$.fragment,o),S(a.$$.fragment,o),S(u.$$.fragment,o),S(E.$$.fragment,o);for(let d=0;d<k.length;d+=1)S(w[d]);j=!0}},o(o){A(e.$$.fragment,o),A(a.$$.fragment,o),A(u.$$.fragment,o),A(E.$$.fragment,o);for(let d=0;d<w.length;d+=1)A(w[d]);j=!1},d(o){P(e,o),o&&h(t),P(a,o),o&&h(s),o&&h(l),P(u),P(E);for(let d=0;d<w.length;d+=1)w[d].d();W=!1,x(Q)}}}function Be(n,e,t){let{quizzes:a}=e,s;function l(f){function z(E,q){return s&&s[1]===-1?E[f]<q[f]?-1:1:E[f]>q[f]?-1:1}return()=>{s&&s[0]===f?t(1,s=[f,-s[1]]):t(1,s=[f,1]),t(0,a=[...a].sort(z))}}function r(){t(3,$=""),t(2,m=-1),t(4,u=!1)}function c(f){return async()=>{window.confirm("Are you sure?")&&await Te(f)}}let m,$,u=!1;function i(f,z){return()=>{t(3,$=z),t(2,m=f),t(4,u=!0)}}return n.$$set=f=>{"quizzes"in f&&t(0,a=f.quizzes)},[a,s,m,$,u,l,r,c,i]}class He extends K{constructor(e){super(),X(this,e,Be,Ae,Z,{quizzes:0})}}function Ve(n){let e,t,a;return t=new He({props:{quizzes:n[0]}}),{c(){e=b("div"),H(t.$$.fragment),this.h()},l(s){e=g(s,"DIV",{class:!0});var l=v(e);V(t.$$.fragment,l),l.forEach(h),this.h()},h(){_(e,"class","container mx-auto")},m(s,l){N(s,e,l),L(t,e,null),a=!0},p(s,[l]){const r={};l&1&&(r.quizzes=s[0]),t.$set(r)},i(s){a||(S(t.$$.fragment,s),a=!0)},o(s){A(t.$$.fragment,s),a=!1},d(s){s&&h(e),P(t)}}}function Le(n,e,t){let a;return $e(n,we,s=>t(0,a=s)),[a]}class We extends K{constructor(e){super(),X(this,e,Le,Ve,Z,{})}}export{We as default};
