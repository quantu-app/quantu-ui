import{S as le,b as ne,G as ie,m as $,w as L,c as I,C as F,p as k,q,x as O,k as m,d as D,D as G,u as v,f as V,L as f,E as P,V as U,z as ue,W as fe,a8 as de,h as he,j,g as R,F as W,r as ce,i as ee,y as te,M as re}from"../chunks/index.18be049c.js";import{S as se}from"../chunks/SortDirection.f70f5f76.js";import{g as _e}from"../chunks/navigation.ffb432dc.js";import{b as Y}from"../chunks/paths.345d5cb6.js";import{d as me,q as pe}from"../chunks/questions.a31173fd.js";import{M as be}from"../chunks/MdDelete.6097f399.js";import{p as ge}from"../chunks/stores.cef66231.js";function ae(l,e,r){const a=l.slice();return a[6]=e[r],a}function oe(l,e){let r,a,h=e[6].name+"",o,d,c,n=e[6].created_at.toLocaleString()+"",s,_,g,p,z,y,Q,w,B;return z=new be({}),{key:l,first:null,c(){r=$("tr"),a=$("td"),o=L(h),d=I(),c=$("td"),s=L(n),_=I(),g=$("td"),p=$("button"),F(z.$$.fragment),y=I(),this.h()},l(b){r=k(b,"TR",{class:!0});var u=q(r);a=k(u,"TD",{class:!0});var H=q(a);o=O(H,h),H.forEach(m),d=D(u),c=k(u,"TD",{class:!0});var T=q(c);s=O(T,n),T.forEach(m),_=D(u),g=k(u,"TD",{class:!0});var A=q(g);p=k(A,"BUTTON",{class:!0});var M=q(p);G(z.$$.fragment,M),M.forEach(m),A.forEach(m),y=D(u),u.forEach(m),this.h()},h(){v(a,"class","border-b border-slate-100 dark:border-slate-700 p-1"),v(c,"class","border-b border-slate-100 dark:border-slate-700 p-1"),v(p,"class","btn danger p-1 w-8 h-8"),v(g,"class","border-b border-slate-100 dark:border-slate-700 p-1"),v(r,"class","hover:bg-gray-200 cursor-pointer"),this.first=r},m(b,u){V(b,r,u),f(r,a),f(a,o),f(r,d),f(r,c),f(c,s),f(r,_),f(r,g),f(g,p),P(z,p,null),f(r,y),Q=!0,w||(B=[U(p,"click",function(){ee(e[5](e[6].local_id))&&e[5](e[6].local_id).apply(this,arguments)}),U(r,"click",function(){ee(e[4](e[6]))&&e[4](e[6]).apply(this,arguments)})],w=!0)},p(b,u){e=b,(!Q||u&1)&&h!==(h=e[6].name+"")&&te(o,h),(!Q||u&1)&&n!==(n=e[6].created_at.toLocaleString()+"")&&te(s,n)},i(b){Q||(j(z.$$.fragment,b),Q=!0)},o(b){R(z.$$.fragment,b),Q=!1},d(b){b&&m(r),W(z),w=!1,ce(B)}}}function $e(l){let e,r,a,h,o,d,c,n,s,_,g,p,z,y,Q,w,B,b,u=[],H=new Map,T,A,M;_=new se({props:{sort:l[2]&&l[2][0]==="name",asc:l[2]&&l[2][1]===1}}),y=new se({props:{sort:l[2]&&l[2][0]==="created_at",asc:l[2]&&l[2][1]===1}});let N=l[0];const Z=t=>t[6].local_id;for(let t=0;t<N.length;t+=1){let i=ae(l,N,t),E=Z(i);H.set(E,u[t]=oe(E,i))}return{c(){e=$("a"),r=L("Create Question"),h=I(),o=$("table"),d=$("thead"),c=$("tr"),n=$("th"),s=L("Name "),F(_.$$.fragment),g=I(),p=$("th"),z=L("Created At "),F(y.$$.fragment),Q=I(),w=$("th"),B=I(),b=$("tbody");for(let t=0;t<u.length;t+=1)u[t].c();this.h()},l(t){e=k(t,"A",{class:!0,href:!0});var i=q(e);r=O(i,"Create Question"),i.forEach(m),h=D(t),o=k(t,"TABLE",{class:!0});var E=q(o);d=k(E,"THEAD",{});var S=q(d);c=k(S,"TR",{});var C=q(c);n=k(C,"TH",{class:!0});var J=q(n);s=O(J,"Name "),G(_.$$.fragment,J),J.forEach(m),g=D(C),p=k(C,"TH",{class:!0});var K=q(p);z=O(K,"Created At "),G(y.$$.fragment,K),K.forEach(m),Q=D(C),w=k(C,"TH",{class:!0}),q(w).forEach(m),C.forEach(m),S.forEach(m),B=D(E),b=k(E,"TBODY",{});var x=q(b);for(let X=0;X<u.length;X+=1)u[X].l(x);x.forEach(m),E.forEach(m),this.h()},h(){v(e,"class","btn primary"),v(e,"href",a=`${Y}/quizzes/${l[1]}/questions/create`),v(n,"class","border-b dark:border-slate-600 cursor-pointer select-none text-left p-1"),v(p,"class","border-b dark:border-slate-600 cursor-pointer select-none text-left p-1"),v(w,"class","border-b dark:border-slate-600 cursor-pointer select-none text-left p-1"),v(o,"class","table-auto w-full")},m(t,i){V(t,e,i),f(e,r),V(t,h,i),V(t,o,i),f(o,d),f(d,c),f(c,n),f(n,s),P(_,n,null),f(c,g),f(c,p),f(p,z),P(y,p,null),f(c,Q),f(c,w),f(o,B),f(o,b);for(let E=0;E<u.length;E+=1)u[E].m(b,null);T=!0,A||(M=[U(n,"click",l[3]("name")),U(p,"click",l[3]("created_at"))],A=!0)},p(t,[i]){(!T||i&2&&a!==(a=`${Y}/quizzes/${t[1]}/questions/create`))&&v(e,"href",a);const E={};i&4&&(E.sort=t[2]&&t[2][0]==="name"),i&4&&(E.asc=t[2]&&t[2][1]===1),_.$set(E);const S={};i&4&&(S.sort=t[2]&&t[2][0]==="created_at"),i&4&&(S.asc=t[2]&&t[2][1]===1),y.$set(S),i&49&&(N=t[0],ue(),u=fe(u,i,Z,1,t,N,H,b,de,oe,null,ae),he())},i(t){if(!T){j(_.$$.fragment,t),j(y.$$.fragment,t);for(let i=0;i<N.length;i+=1)j(u[i]);T=!0}},o(t){R(_.$$.fragment,t),R(y.$$.fragment,t);for(let i=0;i<u.length;i+=1)R(u[i]);T=!1},d(t){t&&m(e),t&&m(h),t&&m(o),W(_),W(y);for(let i=0;i<u.length;i+=1)u[i].d();A=!1,ce(M)}}}function ke(l,e,r){let{localQuizId:a}=e,{questions:h}=e,o;function d(s){function _(g,p){return o&&o[1]===-1?g[s]<p[s]?-1:1:g[s]>p[s]?-1:1}return()=>{o&&o[0]===s?r(2,o=[s,-o[1]]):r(2,o=[s,1]),r(0,h=[...h].sort(_))}}function c(s){return async()=>{await _e(`${Y}/quizzes/${a}/questions/${s.local_id}`)}}function n(s){return async()=>{window.confirm("Are you sure?")&&await me(a,s)}}return l.$$set=s=>{"localQuizId"in s&&r(1,a=s.localQuizId),"questions"in s&&r(0,h=s.questions)},[h,a,o,d,c,n]}class qe extends le{constructor(e){super(),ne(this,e,ke,$e,ie,{localQuizId:1,questions:0})}}function ve(l){let e,r,a,h,o,d,c;return d=new qe({props:{localQuizId:l[0],questions:l[1]}}),{c(){e=$("div"),r=$("div"),a=$("a"),h=L("Back"),o=I(),F(d.$$.fragment),this.h()},l(n){e=k(n,"DIV",{class:!0});var s=q(e);r=k(s,"DIV",{class:!0});var _=q(r);a=k(_,"A",{class:!0,href:!0});var g=q(a);h=O(g,"Back"),g.forEach(m),_.forEach(m),o=D(s),G(d.$$.fragment,s),s.forEach(m),this.h()},h(){v(a,"class","flex flex-shrink-1"),v(a,"href",`${Y}/`),v(r,"class","flex justify-between"),v(e,"class","container mx-auto")},m(n,s){V(n,e,s),f(e,r),f(r,a),f(a,h),f(e,o),P(d,e,null),c=!0},p(n,[s]){const _={};s&1&&(_.localQuizId=n[0]),s&2&&(_.questions=n[1]),d.$set(_)},i(n){c||(j(d.$$.fragment,n),c=!0)},o(n){R(d.$$.fragment,n),c=!1},d(n){n&&m(e),W(d)}}}function Ee(l,e,r){let a,h,o,d;return re(l,pe,c=>r(2,o=c)),re(l,ge,c=>r(3,d=c)),l.$$.update=()=>{l.$$.dirty&8&&r(0,a=parseInt(d.params.local_learnable_resource)),l.$$.dirty&5&&r(1,h=o[a]||[])},[a,h,o,d]}class Be extends le{constructor(e){super(),ne(this,e,Ee,ve,ie,{})}}export{Be as default};