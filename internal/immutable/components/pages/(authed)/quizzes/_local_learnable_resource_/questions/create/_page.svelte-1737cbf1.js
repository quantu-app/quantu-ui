import{S as W,i as X,F as Y,k as b,q as L,a as C,l as g,m as y,r as P,h as p,c as D,n as v,b as N,K as m,a5 as M,a6 as ae,U as O,a7 as le,f as S,g as se,t as B,d as re,D as ie,a2 as ne,a3 as oe,w as Z,x,y as ee,a4 as ue,z as te,V as ce,L as R,u as fe,a8 as _e}from"../../../../../../../chunks/index-169c4bf0.js";import{g as de}from"../../../../../../../chunks/navigation-2407bb7d.js";import{c as U}from"../../../../../../../chunks/shared-23917130.js";import{p as he}from"../../../../../../../chunks/stores-6ae74fc8.js";import{c as pe}from"../../../../../../../chunks/questions-5e754d45.js";import{a as me,q as ve}from"../../../../../../../chunks/quizzes-0da8cae3.js";import{F as be}from"../../../../../../../chunks/FlashCardEditor-e0aca332.js";function K(o){let e,t,s;function u(a){o[6](a)}let c={};return o[2]!==void 0&&(c.data=o[2]),e=new be({props:c}),ne.push(()=>oe(e,"data",u)),{c(){Z(e.$$.fragment)},l(a){x(e.$$.fragment,a)},m(a,l){ee(e,a,l),s=!0},p(a,l){const r={};!t&&l&4&&(t=!0,r.data=a[2],ue(()=>t=!1)),e.$set(r)},i(a){s||(S(e.$$.fragment,a),s=!0)},o(a){B(e.$$.fragment,a),s=!1},d(a){te(e,a)}}}function ge(o){let e,t,s,u,c,a,l,r,Q,z,d,$,w,q,I,E,i,f,h,V,_=o[1]==="flash_card"&&K(o);return{c(){e=b("h3"),t=L("Create a Question"),s=C(),u=b("hr"),c=C(),a=b("form"),l=b("div"),r=b("label"),Q=L("Name"),z=C(),d=b("input"),$=C(),_&&_.c(),w=C(),q=b("div"),I=b("div"),E=b("input"),this.h()},l(n){e=g(n,"H3",{});var k=y(e);t=P(k,"Create a Question"),k.forEach(p),s=D(n),u=g(n,"HR",{}),c=D(n),a=g(n,"FORM",{});var T=y(a);l=g(T,"DIV",{});var F=y(l);r=g(F,"LABEL",{for:!0});var j=y(r);Q=P(j,"Name"),j.forEach(p),z=D(F),d=g(F,"INPUT",{type:!0,class:!0,placeholder:!0,name:!0}),F.forEach(p),$=D(T),_&&_.l(T),w=D(T),q=g(T,"DIV",{class:!0});var A=y(q);I=g(A,"DIV",{class:!0});var H=y(I);E=g(H,"INPUT",{type:!0,class:!0}),H.forEach(p),A.forEach(p),T.forEach(p),this.h()},h(){v(r,"for","name"),v(d,"type","text"),v(d,"class","mb-1"),v(d,"placeholder","Name"),v(d,"name","name"),v(E,"type","submit"),v(E,"class","btn primary"),E.value="Create Question",E.disabled=i=!o[0],v(I,"class","flex"),v(q,"class","flex flex-column justify-end")},m(n,k){N(n,e,k),m(e,t),N(n,s,k),N(n,u,k),N(n,c,k),N(n,a,k),m(a,l),m(l,r),m(r,Q),m(l,z),m(l,d),M(d,o[0]),m(a,$),_&&_.m(a,null),m(a,w),m(a,q),m(q,I),m(I,E),f=!0,h||(V=[ae(me.call(null,d)),O(d,"input",o[5]),O(a,"submit",le(o[3]))],h=!0)},p(n,[k]){k&1&&d.value!==n[0]&&M(d,n[0]),n[1]==="flash_card"?_?(_.p(n,k),k&2&&S(_,1)):(_=K(n),_.c(),S(_,1),_.m(a,w)):_&&(se(),B(_,1,1,()=>{_=null}),re()),(!f||k&1&&i!==(i=!n[0]))&&(E.disabled=i)},i(n){f||(S(_),f=!0)},o(n){B(_),f=!1},d(n){n&&p(e),n&&p(s),n&&p(u),n&&p(c),n&&p(a),_&&_.d(),h=!1,ie(V)}}}function ke(o,e,t){let{localQuizId:s}=e,u,c="flash_card",a={};async function l(){await pe(s,{name:u,question_type:c,data:a}),t(0,u=""),t(1,c="flash_card"),t(2,a={})}function r(){u=this.value,t(0,u)}function Q(z){a=z,t(2,a)}return o.$$set=z=>{"localQuizId"in z&&t(4,s=z.localQuizId)},[u,c,a,l,s,r,Q]}class ze extends W{constructor(e){super(),X(this,e,ke,ge,Y,{localQuizId:4})}}function G(o,e,t){const s=o.slice();return s[4]=e[t],s}function J(o,e){let t,s=e[4].name+"",u,c,a;return{key:o,first:null,c(){t=b("option"),u=L(s),this.h()},l(l){t=g(l,"OPTION",{});var r=y(t);u=P(r,s),r.forEach(p),this.h()},h(){t.__value=c=e[4].local_id,t.value=t.__value,t.selected=a=e[4].local_id===e[0],this.first=t},m(l,r){N(l,t,r),m(t,u)},p(l,r){e=l,r&2&&s!==(s=e[4].name+"")&&fe(u,s),r&2&&c!==(c=e[4].local_id)&&(t.__value=c,t.value=t.__value),r&3&&a!==(a=e[4].local_id===e[0])&&(t.selected=a)},d(l){l&&p(t)}}}function Ie(o){let e,t,s,u,c,a,l,r=[],Q=new Map,z,d,$,w,q,I=o[1];const E=i=>i[4].local_id;for(let i=0;i<I.length;i+=1){let f=G(o,I,i),h=E(f);Q.set(h,r[i]=J(h,f))}return d=new ze({props:{localQuizId:o[0]}}),{c(){e=b("div"),t=b("div"),s=b("a"),u=L("Back"),a=C(),l=b("select");for(let i=0;i<r.length;i+=1)r[i].c();z=C(),Z(d.$$.fragment),this.h()},l(i){e=g(i,"DIV",{class:!0});var f=y(e);t=g(f,"DIV",{class:!0});var h=y(t);s=g(h,"A",{class:!0,href:!0});var V=y(s);u=P(V,"Back"),V.forEach(p),a=D(h),l=g(h,"SELECT",{class:!0});var _=y(l);for(let n=0;n<r.length;n+=1)r[n].l(_);_.forEach(p),h.forEach(p),z=D(f),x(d.$$.fragment,f),f.forEach(p),this.h()},h(){v(s,"class","flex flex-shrink-1"),v(s,"href",c=`${U}/quizzes/${o[0]}`),v(l,"class","flex flex-shrink-1 w-[inherit]"),v(t,"class","flex justify-between"),v(e,"class","container mx-auto")},m(i,f){N(i,e,f),m(e,t),m(t,s),m(s,u),m(t,a),m(t,l);for(let h=0;h<r.length;h+=1)r[h].m(l,null);m(e,z),ee(d,e,null),$=!0,w||(q=O(l,"change",o[2]),w=!0)},p(i,[f]){(!$||f&1&&c!==(c=`${U}/quizzes/${i[0]}`))&&v(s,"href",c),f&3&&(I=i[1],r=ce(r,f,E,1,i,I,Q,l,_e,J,null,G));const h={};f&1&&(h.localQuizId=i[0]),d.$set(h)},i(i){$||(S(d.$$.fragment,i),$=!0)},o(i){B(d.$$.fragment,i),$=!1},d(i){i&&p(e);for(let f=0;f<r.length;f+=1)r[f].d();te(d),w=!1,q()}}}function Ee(o,e,t){let s,u,c;R(o,he,l=>t(3,u=l)),R(o,ve,l=>t(1,c=l));async function a(l){await de(`${U}/quizzes/${l.currentTarget.value}/questions/create`)}return o.$$.update=()=>{o.$$.dirty&8&&t(0,s=parseInt(u.params.local_learnable_resource))},[s,c,a,u]}class Ne extends W{constructor(e){super(),X(this,e,Ee,Ie,Y,{})}}export{Ne as default};
