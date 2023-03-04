import{S as K,b as W,G as X,m as I,w as j,c as U,p as Q,q as b,x as P,k as _,d as D,u as h,f as w,L as p,a6 as ae,V as R,a7 as le,j as g,z as Y,g as N,h as Z,r as ne,C as x,D as $,E as ee,F as te,M as G}from"../chunks/index.18be049c.js";import{g as se}from"../chunks/navigation.570f4c74.js";import{b as S}from"../chunks/paths.6dfb4be2.js";import{p as oe}from"../chunks/stores.55d41dd8.js";import{u as ie,a as re}from"../chunks/questions.b01bcfad.js";import{a as ue}from"../chunks/IconBase.cecb7b67.js";import{F as fe}from"../chunks/FlashCardEditor.eccdfa76.js";function O(s){let t,a;return t=new fe({props:{data:s[0].data}}),t.$on("change",s[3]),{c(){x(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,i){ee(t,e,i),a=!0},p(e,i){const o={};i&1&&(o.data=e[0].data),t.$set(o)},i(e){a||(g(t.$$.fragment,e),a=!0)},o(e){N(t.$$.fragment,e),a=!1},d(e){te(t,e)}}}function ce(s){let t,a,e,i,o,r,c,l,f,n,m,q,L,B,E,y,z,V,F,T,d=s[0].question_type==="flash_card"&&O(s);return{c(){t=I("h3"),a=j("Edit a Question"),e=U(),i=I("hr"),o=U(),r=I("form"),c=I("div"),l=I("label"),f=j("Name"),n=U(),m=I("input"),L=U(),d&&d.c(),B=U(),E=I("div"),y=I("div"),z=I("input"),this.h()},l(u){t=Q(u,"H3",{});var v=b(t);a=P(v,"Edit a Question"),v.forEach(_),e=D(u),i=Q(u,"HR",{}),o=D(u),r=Q(u,"FORM",{});var k=b(r);c=Q(k,"DIV",{});var C=b(c);l=Q(C,"LABEL",{for:!0});var A=b(l);f=P(A,"Name"),A.forEach(_),n=D(C),m=Q(C,"INPUT",{type:!0,class:!0,placeholder:!0,name:!0}),C.forEach(_),L=D(k),d&&d.l(k),B=D(k),E=Q(k,"DIV",{class:!0});var H=b(E);y=Q(H,"DIV",{class:!0});var M=b(y);z=Q(M,"INPUT",{type:!0,class:!0}),M.forEach(_),H.forEach(_),k.forEach(_),this.h()},h(){h(l,"for","name"),h(m,"type","text"),h(m,"class","mb-1"),h(m,"placeholder","Name"),h(m,"name","name"),m.value=q=s[0].name,h(z,"type","submit"),h(z,"class","btn primary"),z.value="Update Question",h(y,"class","flex"),h(E,"class","flex flex-column justify-end")},m(u,v){w(u,t,v),p(t,a),w(u,e,v),w(u,i,v),w(u,o,v),w(u,r,v),p(r,c),p(c,l),p(l,f),p(c,n),p(c,m),p(r,L),d&&d.m(r,null),p(r,B),p(r,E),p(E,y),p(y,z),V=!0,F||(T=[ae(ue.call(null,m)),R(m,"change",s[2]),R(r,"submit",le(s[1]))],F=!0)},p(u,[v]){(!V||v&1&&q!==(q=u[0].name)&&m.value!==q)&&(m.value=q),u[0].question_type==="flash_card"?d?(d.p(u,v),v&1&&g(d,1)):(d=O(u),d.c(),g(d,1),d.m(r,B)):d&&(Y(),N(d,1,1,()=>{d=null}),Z())},i(u){V||(g(d),V=!0)},o(u){N(d),V=!1},d(u){u&&_(t),u&&_(e),u&&_(i),u&&_(o),u&&_(r),d&&d.d(),F=!1,ne(T)}}}function de(s,t,a){let{localQuizId:e}=t,{localQuestionId:i}=t,{question:o}=t,{onUpdate:r}=t;async function c(){const n=await ie(e,i,o);r(n)}function l(n){a(0,o={...o,name:n.currentTarget.value})}function f(n){a(0,o={...o,data:n.detail})}return s.$$set=n=>{"localQuizId"in n&&a(4,e=n.localQuizId),"localQuestionId"in n&&a(5,i=n.localQuestionId),"question"in n&&a(0,o=n.question),"onUpdate"in n&&a(6,r=n.onUpdate)},[o,c,l,f,e,i,r]}class me extends K{constructor(t){super(),W(this,t,de,ce,X,{localQuizId:4,localQuestionId:5,question:0,onUpdate:6})}}function J(s){let t,a;return t=new me({props:{localQuizId:s[1],localQuestionId:s[0],question:s[2],onUpdate:s[3]}}),{c(){x(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,i){ee(t,e,i),a=!0},p(e,i){const o={};i&2&&(o.localQuizId=e[1]),i&1&&(o.localQuestionId=e[0]),i&4&&(o.question=e[2]),t.$set(o)},i(e){a||(g(t.$$.fragment,e),a=!0)},o(e){N(t.$$.fragment,e),a=!1},d(e){te(t,e)}}}function _e(s){let t,a,e,i,o,r,c,l=s[2]&&J(s);return{c(){t=I("div"),a=I("div"),e=I("a"),i=j("Back"),r=U(),l&&l.c(),this.h()},l(f){t=Q(f,"DIV",{class:!0});var n=b(t);a=Q(n,"DIV",{class:!0});var m=b(a);e=Q(m,"A",{class:!0,href:!0});var q=b(e);i=P(q,"Back"),q.forEach(_),m.forEach(_),r=D(n),l&&l.l(n),n.forEach(_),this.h()},h(){h(e,"class","flex flex-shrink-1"),h(e,"href",o=`${S}/quizzes/${s[1]}`),h(a,"class","flex justify-between"),h(t,"class","container mx-auto")},m(f,n){w(f,t,n),p(t,a),p(a,e),p(e,i),p(t,r),l&&l.m(t,null),c=!0},p(f,[n]){(!c||n&2&&o!==(o=`${S}/quizzes/${f[1]}`))&&h(e,"href",o),f[2]?l?(l.p(f,n),n&4&&g(l,1)):(l=J(f),l.c(),g(l,1),l.m(t,null)):l&&(Y(),N(l,1,1,()=>{l=null}),Z())},i(f){c||(g(l),c=!0)},o(f){N(l),c=!1},d(f){f&&_(t),l&&l.d()}}}function pe(s,t,a){let e,i,o,r,c;G(s,re,f=>a(4,r=f)),G(s,oe,f=>a(5,c=f));async function l(){await se(`${S}/quizzes/${e}`)}return s.$$.update=()=>{s.$$.dirty&32&&a(1,e=parseInt(c.params.local_learnable_resource)),s.$$.dirty&32&&a(0,i=parseInt(c.params.local_question_id)),s.$$.dirty&17&&a(2,o=r[i])},[i,e,o,l,r,c]}class Ee extends K{constructor(t){super(),W(this,t,pe,_e,X,{})}}export{Ee as default};
