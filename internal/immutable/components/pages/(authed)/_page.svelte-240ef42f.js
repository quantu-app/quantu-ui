import{S as j,i as K,F as Y,a2 as ae,a3 as re,k as g,q as D,a as w,w as O,l as z,m as k,r as Q,h as p,c as C,x as B,n as v,b as T,K as h,y as I,U as S,a4 as ne,f as A,t as H,z as L,a5 as X,a6 as le,a7 as oe,D as se,B as ie,V as ue,E as ce,u as Z,a8 as fe,L as de}from"../../../chunks/index-5ae55930.js";import{M as pe,c as _e,a as he,S as x,q as me}from"../../../chunks/SortDirection-ba1a904e.js";import{g as $e}from"../../../chunks/navigation-7c3aff51.js";import{c as be}from"../../../chunks/shared-23917130.js";function ge(n){let e,t,a,s,l,u,i,f,m;return{c(){e=g("form"),t=g("input"),a=w(),s=g("div"),l=g("div"),u=g("input"),this.h()},l(c){e=z(c,"FORM",{});var o=k(e);t=z(o,"INPUT",{type:!0,class:!0,placeholder:!0}),a=C(o),s=z(o,"DIV",{class:!0});var d=k(s);l=z(d,"DIV",{class:!0});var $=k(l);u=z($,"INPUT",{type:!0,class:!0}),$.forEach(p),d.forEach(p),o.forEach(p),this.h()},h(){v(t,"type","text"),v(t,"class","mb-1"),v(t,"placeholder","Name"),v(u,"type","submit"),v(u,"class","btn primary"),u.value="Create Quiz",u.disabled=i=!n[0],v(l,"class","flex"),v(s,"class","flex flex-column justify-end")},m(c,o){T(c,e,o),h(e,t),X(t,n[0]),h(e,a),h(e,s),h(s,l),h(l,u),f||(m=[le(he.call(null,t)),S(t,"input",n[4]),S(e,"submit",oe(n[2]))],f=!0)},p(c,o){o&1&&t.value!==c[0]&&X(t,c[0]),o&1&&i!==(i=!c[0])&&(u.disabled=i)},d(c){c&&p(e),f=!1,se(m)}}}function ze(n){let e,t;return{c(){e=g("h3"),t=D("Create a Quiz"),this.h()},l(a){e=z(a,"H3",{slot:!0});var s=k(e);t=Q(s,"Create a Quiz"),s.forEach(p),this.h()},h(){v(e,"slot","title")},m(a,s){T(a,e,s),h(e,t)},p:ie,d(a){a&&p(e)}}}function ve(n){let e,t,a,s,l,u,i,f;function m(o){n[5](o)}let c={$$slots:{title:[ze],default:[ge]},$$scope:{ctx:n}};return n[1]!==void 0&&(c.open=n[1]),s=new pe({props:c}),ae.push(()=>re(s,"open",m)),{c(){e=g("button"),t=D("Create Quiz"),a=w(),O(s.$$.fragment),this.h()},l(o){e=z(o,"BUTTON",{class:!0});var d=k(e);t=Q(d,"Create Quiz"),d.forEach(p),a=C(o),B(s.$$.fragment,o),this.h()},h(){v(e,"class","btn primary")},m(o,d){T(o,e,d),h(e,t),T(o,a,d),I(s,o,d),u=!0,i||(f=S(e,"click",n[3]),i=!0)},p(o,[d]){const $={};d&65&&($.$$scope={dirty:d,ctx:o}),!l&&d&2&&(l=!0,$.open=o[1],ne(()=>l=!1)),s.$set($)},i(o){u||(A(s.$$.fragment,o),u=!0)},o(o){H(s.$$.fragment,o),u=!1},d(o){o&&p(e),o&&p(a),L(s,o),i=!1,f()}}}function ke(n,e,t){let a;async function s(){await _e({name:a}),t(0,a=""),t(1,l=!1)}let l=!1;function u(){t(1,l=!0)}function i(){a=this.value,t(0,a)}function f(m){l=m,t(1,l)}return[a,l,s,u,i,f]}class Ee extends j{constructor(e){super(),K(this,e,ke,ve,Y,{})}}function ee(n,e,t){const a=n.slice();return a[4]=e[t],a}function te(n,e){let t,a,s=e[4].name+"",l,u,i,f=e[4].created_at.toLocaleString()+"",m,c,o,d;return{key:n,first:null,c(){t=g("tr"),a=g("td"),l=D(s),u=w(),i=g("td"),m=D(f),c=w(),this.h()},l($){t=z($,"TR",{class:!0});var b=k(t);a=z(b,"TD",{class:!0});var E=k(a);l=Q(E,s),E.forEach(p),u=C(b),i=z(b,"TD",{class:!0});var N=k(i);m=Q(N,f),N.forEach(p),c=C(b),b.forEach(p),this.h()},h(){v(a,"class","border-b border-slate-100 dark:border-slate-700 p-1"),v(i,"class","border-b border-slate-100 dark:border-slate-700 p-1"),v(t,"class","hover:bg-gray-200 cursor-pointer"),this.first=t},m($,b){T($,t,b),h(t,a),h(a,l),h(t,u),h(t,i),h(i,m),h(t,c),o||(d=S(t,"click",function(){ce(e[3](e[4]))&&e[3](e[4]).apply(this,arguments)}),o=!0)},p($,b){e=$,b&1&&s!==(s=e[4].name+"")&&Z(l,s),b&1&&f!==(f=e[4].created_at.toLocaleString()+"")&&Z(m,f)},d($){$&&p(t),o=!1,d()}}}function ye(n){let e,t,a,s,l,u,i,f,m,c,o,d,$,b,E=[],N=new Map,M,V,G;e=new Ee({}),f=new x({props:{sort:n[1]&&n[1][0]==="name",asc:n[1]&&n[1][1]===1}}),d=new x({props:{sort:n[1]&&n[1][0]==="created_at",asc:n[1]&&n[1][1]===1}});let U=n[0];const J=r=>r[4].local_id;for(let r=0;r<U.length;r+=1){let _=ee(n,U,r),y=J(_);N.set(y,E[r]=te(y,_))}return{c(){O(e.$$.fragment),t=w(),a=g("table"),s=g("thead"),l=g("tr"),u=g("th"),i=D("Name "),O(f.$$.fragment),m=w(),c=g("th"),o=D("Created At "),O(d.$$.fragment),$=w(),b=g("tbody");for(let r=0;r<E.length;r+=1)E[r].c();this.h()},l(r){B(e.$$.fragment,r),t=C(r),a=z(r,"TABLE",{class:!0});var _=k(a);s=z(_,"THEAD",{});var y=k(s);l=z(y,"TR",{});var q=k(l);u=z(q,"TH",{class:!0});var P=k(u);i=Q(P,"Name "),B(f.$$.fragment,P),P.forEach(p),m=C(q),c=z(q,"TH",{class:!0});var R=k(c);o=Q(R,"Created At "),B(d.$$.fragment,R),R.forEach(p),q.forEach(p),y.forEach(p),$=C(_),b=z(_,"TBODY",{});var W=k(b);for(let F=0;F<E.length;F+=1)E[F].l(W);W.forEach(p),_.forEach(p),this.h()},h(){v(u,"class","border-b dark:border-slate-600 cursor-pointer select-none text-left p-1"),v(c,"class","border-b dark:border-slate-600 cursor-pointer select-none text-left p-1"),v(a,"class","table-auto w-full")},m(r,_){I(e,r,_),T(r,t,_),T(r,a,_),h(a,s),h(s,l),h(l,u),h(u,i),I(f,u,null),h(l,m),h(l,c),h(c,o),I(d,c,null),h(a,$),h(a,b);for(let y=0;y<E.length;y+=1)E[y].m(b,null);M=!0,V||(G=[S(u,"click",n[2]("name")),S(c,"click",n[2]("created_at"))],V=!0)},p(r,[_]){const y={};_&2&&(y.sort=r[1]&&r[1][0]==="name"),_&2&&(y.asc=r[1]&&r[1][1]===1),f.$set(y);const q={};_&2&&(q.sort=r[1]&&r[1][0]==="created_at"),_&2&&(q.asc=r[1]&&r[1][1]===1),d.$set(q),_&9&&(U=r[0],E=ue(E,_,J,1,r,U,N,b,fe,te,null,ee))},i(r){M||(A(e.$$.fragment,r),A(f.$$.fragment,r),A(d.$$.fragment,r),M=!0)},o(r){H(e.$$.fragment,r),H(f.$$.fragment,r),H(d.$$.fragment,r),M=!1},d(r){L(e,r),r&&p(t),r&&p(a),L(f),L(d);for(let _=0;_<E.length;_+=1)E[_].d();V=!1,se(G)}}}function qe(n,e,t){let{quizzes:a}=e,s;function l(i){function f(m,c){return s&&s[1]===-1?m[i]<c[i]?-1:1:m[i]>c[i]?-1:1}return()=>{s&&s[0]===i?t(1,s=[i,-s[1]]):t(1,s=[i,1]),t(0,a=[...a].sort(f))}}function u(i){return async()=>{await $e(`${be}/${i.local_id}`)}}return n.$$set=i=>{"quizzes"in i&&t(0,a=i.quizzes)},[a,s,l,u]}class Te extends j{constructor(e){super(),K(this,e,qe,ye,Y,{quizzes:0})}}function we(n){let e,t,a;return t=new Te({props:{quizzes:n[0]}}),{c(){e=g("div"),O(t.$$.fragment),this.h()},l(s){e=z(s,"DIV",{class:!0});var l=k(e);B(t.$$.fragment,l),l.forEach(p),this.h()},h(){v(e,"class","container mx-auto")},m(s,l){T(s,e,l),I(t,e,null),a=!0},p(s,[l]){const u={};l&1&&(u.quizzes=s[0]),t.$set(u)},i(s){a||(A(t.$$.fragment,s),a=!0)},o(s){H(t.$$.fragment,s),a=!1},d(s){s&&p(e),L(t)}}}function Ce(n,e,t){let a;return de(n,me,s=>t(0,a=s)),[a]}class Oe extends j{constructor(e){super(),K(this,e,Ce,we,Y,{})}}export{Oe as default};
