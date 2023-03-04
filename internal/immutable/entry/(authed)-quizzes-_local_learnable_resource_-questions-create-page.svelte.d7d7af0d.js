import{S as K,b as X,G as Y,m as b,w as L,c as C,p as g,q as y,x as P,k as p,d as N,u as v,f as D,L as h,a5 as R,a6 as ae,V as A,a7 as le,j as V,z as se,g as j,h as re,r as ie,A as oe,a3 as ne,C as Z,D as x,E as ee,a4 as ue,F as te,W as ce,M as U,y as fe,an as _e}from"../chunks/index.18be049c.js";import{g as de}from"../chunks/navigation.570f4c74.js";import{b as B}from"../chunks/paths.6dfb4be2.js";import{p as me}from"../chunks/stores.55d41dd8.js";import{c as pe}from"../chunks/notifications.034aa45b.js";import{c as he}from"../chunks/questions.b01bcfad.js";import{a as ve}from"../chunks/IconBase.cecb7b67.js";import{F as be}from"../chunks/FlashCardEditor.eccdfa76.js";import{q as ge}from"../chunks/MdDelete.9825590a.js";function G(n){let e,t,s;function u(a){n[6](a)}let c={};return n[2]!==void 0&&(c.data=n[2]),e=new be({props:c}),oe.push(()=>ne(e,"data",u)),{c(){Z(e.$$.fragment)},l(a){x(e.$$.fragment,a)},m(a,l){ee(e,a,l),s=!0},p(a,l){const r={};!t&&l&4&&(t=!0,r.data=a[2],ue(()=>t=!1)),e.$set(r)},i(a){s||(V(e.$$.fragment,a),s=!0)},o(a){j(e.$$.fragment,a),s=!1},d(a){te(e,a)}}}function ke(n){let e,t,s,u,c,a,l,r,Q,z,d,$,w,q,E,I,i,f,m,T,_=n[1]==="flash_card"&&G(n);return{c(){e=b("h3"),t=L("Create a Question"),s=C(),u=b("hr"),c=C(),a=b("form"),l=b("div"),r=b("label"),Q=L("Name"),z=C(),d=b("input"),$=C(),_&&_.c(),w=C(),q=b("div"),E=b("div"),I=b("input"),this.h()},l(o){e=g(o,"H3",{});var k=y(e);t=P(k,"Create a Question"),k.forEach(p),s=N(o),u=g(o,"HR",{}),c=N(o),a=g(o,"FORM",{});var S=y(a);l=g(S,"DIV",{});var F=y(l);r=g(F,"LABEL",{for:!0});var M=y(r);Q=P(M,"Name"),M.forEach(p),z=N(F),d=g(F,"INPUT",{type:!0,class:!0,placeholder:!0,name:!0}),F.forEach(p),$=N(S),_&&_.l(S),w=N(S),q=g(S,"DIV",{class:!0});var O=y(q);E=g(O,"DIV",{class:!0});var H=y(E);I=g(H,"INPUT",{type:!0,class:!0}),H.forEach(p),O.forEach(p),S.forEach(p),this.h()},h(){v(r,"for","name"),v(d,"type","text"),v(d,"class","mb-1"),v(d,"placeholder","Name"),v(d,"name","name"),v(I,"type","submit"),v(I,"class","btn primary"),I.value="Create Question",I.disabled=i=!n[0],v(E,"class","flex"),v(q,"class","flex flex-column justify-end")},m(o,k){D(o,e,k),h(e,t),D(o,s,k),D(o,u,k),D(o,c,k),D(o,a,k),h(a,l),h(l,r),h(r,Q),h(l,z),h(l,d),R(d,n[0]),h(a,$),_&&_.m(a,null),h(a,w),h(a,q),h(q,E),h(E,I),f=!0,m||(T=[ae(ve.call(null,d)),A(d,"input",n[5]),A(a,"submit",le(n[3]))],m=!0)},p(o,[k]){k&1&&d.value!==o[0]&&R(d,o[0]),o[1]==="flash_card"?_?(_.p(o,k),k&2&&V(_,1)):(_=G(o),_.c(),V(_,1),_.m(a,w)):_&&(se(),j(_,1,1,()=>{_=null}),re()),(!f||k&1&&i!==(i=!o[0]))&&(I.disabled=i)},i(o){f||(V(_),f=!0)},o(o){j(_),f=!1},d(o){o&&p(e),o&&p(s),o&&p(u),o&&p(c),o&&p(a),_&&_.d(),m=!1,ie(T)}}}function ze(n,e,t){let{localQuizId:s}=e,u,c="flash_card",a={};async function l(){await he(s,{name:u,question_type:c,data:a}),pe(`Successfully created ${u||"Question"}`,"success"),t(0,u=""),t(1,c="flash_card"),t(2,a={})}function r(){u=this.value,t(0,u)}function Q(z){a=z,t(2,a)}return n.$$set=z=>{"localQuizId"in z&&t(4,s=z.localQuizId)},[u,c,a,l,s,r,Q]}class Ee extends K{constructor(e){super(),X(this,e,ze,ke,Y,{localQuizId:4})}}function W(n,e,t){const s=n.slice();return s[4]=e[t],s}function J(n,e){let t,s=e[4].name+"",u,c,a;return{key:n,first:null,c(){t=b("option"),u=L(s),this.h()},l(l){t=g(l,"OPTION",{});var r=y(t);u=P(r,s),r.forEach(p),this.h()},h(){t.__value=c=e[4].local_id,t.value=t.__value,t.selected=a=e[4].local_id===e[0],this.first=t},m(l,r){D(l,t,r),h(t,u)},p(l,r){e=l,r&2&&s!==(s=e[4].name+"")&&fe(u,s),r&2&&c!==(c=e[4].local_id)&&(t.__value=c,t.value=t.__value),r&3&&a!==(a=e[4].local_id===e[0])&&(t.selected=a)},d(l){l&&p(t)}}}function Ie(n){let e,t,s,u,c,a,l,r=[],Q=new Map,z,d,$,w,q,E=n[1];const I=i=>i[4].local_id;for(let i=0;i<E.length;i+=1){let f=W(n,E,i),m=I(f);Q.set(m,r[i]=J(m,f))}return d=new Ee({props:{localQuizId:n[0]}}),{c(){e=b("div"),t=b("div"),s=b("a"),u=L("Back"),a=C(),l=b("select");for(let i=0;i<r.length;i+=1)r[i].c();z=C(),Z(d.$$.fragment),this.h()},l(i){e=g(i,"DIV",{class:!0});var f=y(e);t=g(f,"DIV",{class:!0});var m=y(t);s=g(m,"A",{class:!0,href:!0});var T=y(s);u=P(T,"Back"),T.forEach(p),a=N(m),l=g(m,"SELECT",{class:!0});var _=y(l);for(let o=0;o<r.length;o+=1)r[o].l(_);_.forEach(p),m.forEach(p),z=N(f),x(d.$$.fragment,f),f.forEach(p),this.h()},h(){v(s,"class","flex flex-shrink-1"),v(s,"href",c=`${B}/quizzes/${n[0]}`),v(l,"class","flex flex-shrink-1 w-[inherit]"),v(t,"class","flex justify-between"),v(e,"class","container mx-auto")},m(i,f){D(i,e,f),h(e,t),h(t,s),h(s,u),h(t,a),h(t,l);for(let m=0;m<r.length;m+=1)r[m].m(l,null);h(e,z),ee(d,e,null),$=!0,w||(q=A(l,"change",n[2]),w=!0)},p(i,[f]){(!$||f&1&&c!==(c=`${B}/quizzes/${i[0]}`))&&v(s,"href",c),f&3&&(E=i[1],r=ce(r,f,I,1,i,E,Q,l,_e,J,null,W));const m={};f&1&&(m.localQuizId=i[0]),d.$set(m)},i(i){$||(V(d.$$.fragment,i),$=!0)},o(i){j(d.$$.fragment,i),$=!1},d(i){i&&p(e);for(let f=0;f<r.length;f+=1)r[f].d();te(d),w=!1,q()}}}function ye(n,e,t){let s,u,c;U(n,me,l=>t(3,u=l)),U(n,ge,l=>t(1,c=l));async function a(l){await de(`${B}/quizzes/${l.currentTarget.value}/questions/create`)}return n.$$.update=()=>{n.$$.dirty&8&&t(0,s=parseInt(u.params.local_learnable_resource))},[s,c,a,u]}class Ve extends K{constructor(e){super(),X(this,e,ye,Ie,Y,{})}}export{Ve as default};
