import{S as W,i as X,F as Y,k as b,q as L,a as C,l as g,m as E,r as P,h,c as N,n as v,b as D,K as p,a5 as M,a6 as ae,U as O,a7 as le,f as V,g as se,t as B,d as re,D as ie,a2 as oe,a3 as ne,w as Z,x,y as ee,a4 as ue,z as te,V as ce,L as R,u as fe,an as _e}from"../../../../../../../chunks/index-6abebcc6.js";import{g as de}from"../../../../../../../chunks/navigation-91360e40.js";import{c as U}from"../../../../../../../chunks/shared-23917130.js";import{p as me}from"../../../../../../../chunks/stores-8e6ca413.js";import{c as he}from"../../../../../../../chunks/notifications-5c139557.js";import{c as pe}from"../../../../../../../chunks/questions-eb346cd7.js";import{a as ve}from"../../../../../../../chunks/IconBase-bfd10f6f.js";import{F as be}from"../../../../../../../chunks/FlashCardEditor-fe3dd8dd.js";import{q as ge}from"../../../../../../../chunks/MdDelete-1a68d2e8.js";function K(n){let e,t,s;function u(a){n[6](a)}let c={};return n[2]!==void 0&&(c.data=n[2]),e=new be({props:c}),oe.push(()=>ne(e,"data",u)),{c(){Z(e.$$.fragment)},l(a){x(e.$$.fragment,a)},m(a,l){ee(e,a,l),s=!0},p(a,l){const r={};!t&&l&4&&(t=!0,r.data=a[2],ue(()=>t=!1)),e.$set(r)},i(a){s||(V(e.$$.fragment,a),s=!0)},o(a){B(e.$$.fragment,a),s=!1},d(a){te(e,a)}}}function ke(n){let e,t,s,u,c,a,l,r,Q,z,d,$,w,q,I,y,i,f,m,T,_=n[1]==="flash_card"&&K(n);return{c(){e=b("h3"),t=L("Create a Question"),s=C(),u=b("hr"),c=C(),a=b("form"),l=b("div"),r=b("label"),Q=L("Name"),z=C(),d=b("input"),$=C(),_&&_.c(),w=C(),q=b("div"),I=b("div"),y=b("input"),this.h()},l(o){e=g(o,"H3",{});var k=E(e);t=P(k,"Create a Question"),k.forEach(h),s=N(o),u=g(o,"HR",{}),c=N(o),a=g(o,"FORM",{});var S=E(a);l=g(S,"DIV",{});var F=E(l);r=g(F,"LABEL",{for:!0});var j=E(r);Q=P(j,"Name"),j.forEach(h),z=N(F),d=g(F,"INPUT",{type:!0,class:!0,placeholder:!0,name:!0}),F.forEach(h),$=N(S),_&&_.l(S),w=N(S),q=g(S,"DIV",{class:!0});var A=E(q);I=g(A,"DIV",{class:!0});var H=E(I);y=g(H,"INPUT",{type:!0,class:!0}),H.forEach(h),A.forEach(h),S.forEach(h),this.h()},h(){v(r,"for","name"),v(d,"type","text"),v(d,"class","mb-1"),v(d,"placeholder","Name"),v(d,"name","name"),v(y,"type","submit"),v(y,"class","btn primary"),y.value="Create Question",y.disabled=i=!n[0],v(I,"class","flex"),v(q,"class","flex flex-column justify-end")},m(o,k){D(o,e,k),p(e,t),D(o,s,k),D(o,u,k),D(o,c,k),D(o,a,k),p(a,l),p(l,r),p(r,Q),p(l,z),p(l,d),M(d,n[0]),p(a,$),_&&_.m(a,null),p(a,w),p(a,q),p(q,I),p(I,y),f=!0,m||(T=[ae(ve.call(null,d)),O(d,"input",n[5]),O(a,"submit",le(n[3]))],m=!0)},p(o,[k]){k&1&&d.value!==o[0]&&M(d,o[0]),o[1]==="flash_card"?_?(_.p(o,k),k&2&&V(_,1)):(_=K(o),_.c(),V(_,1),_.m(a,w)):_&&(se(),B(_,1,1,()=>{_=null}),re()),(!f||k&1&&i!==(i=!o[0]))&&(y.disabled=i)},i(o){f||(V(_),f=!0)},o(o){B(_),f=!1},d(o){o&&h(e),o&&h(s),o&&h(u),o&&h(c),o&&h(a),_&&_.d(),m=!1,ie(T)}}}function ze(n,e,t){let{localQuizId:s}=e,u,c="flash_card",a={};async function l(){await pe(s,{name:u,question_type:c,data:a}),he(`Successfully created ${u||"Question"}`,"success"),t(0,u=""),t(1,c="flash_card"),t(2,a={})}function r(){u=this.value,t(0,u)}function Q(z){a=z,t(2,a)}return n.$$set=z=>{"localQuizId"in z&&t(4,s=z.localQuizId)},[u,c,a,l,s,r,Q]}class Ie extends W{constructor(e){super(),X(this,e,ze,ke,Y,{localQuizId:4})}}function G(n,e,t){const s=n.slice();return s[4]=e[t],s}function J(n,e){let t,s=e[4].name+"",u,c,a;return{key:n,first:null,c(){t=b("option"),u=L(s),this.h()},l(l){t=g(l,"OPTION",{});var r=E(t);u=P(r,s),r.forEach(h),this.h()},h(){t.__value=c=e[4].local_id,t.value=t.__value,t.selected=a=e[4].local_id===e[0],this.first=t},m(l,r){D(l,t,r),p(t,u)},p(l,r){e=l,r&2&&s!==(s=e[4].name+"")&&fe(u,s),r&2&&c!==(c=e[4].local_id)&&(t.__value=c,t.value=t.__value),r&3&&a!==(a=e[4].local_id===e[0])&&(t.selected=a)},d(l){l&&h(t)}}}function ye(n){let e,t,s,u,c,a,l,r=[],Q=new Map,z,d,$,w,q,I=n[1];const y=i=>i[4].local_id;for(let i=0;i<I.length;i+=1){let f=G(n,I,i),m=y(f);Q.set(m,r[i]=J(m,f))}return d=new Ie({props:{localQuizId:n[0]}}),{c(){e=b("div"),t=b("div"),s=b("a"),u=L("Back"),a=C(),l=b("select");for(let i=0;i<r.length;i+=1)r[i].c();z=C(),Z(d.$$.fragment),this.h()},l(i){e=g(i,"DIV",{class:!0});var f=E(e);t=g(f,"DIV",{class:!0});var m=E(t);s=g(m,"A",{class:!0,href:!0});var T=E(s);u=P(T,"Back"),T.forEach(h),a=N(m),l=g(m,"SELECT",{class:!0});var _=E(l);for(let o=0;o<r.length;o+=1)r[o].l(_);_.forEach(h),m.forEach(h),z=N(f),x(d.$$.fragment,f),f.forEach(h),this.h()},h(){v(s,"class","flex flex-shrink-1"),v(s,"href",c=`${U}/quizzes/${n[0]}`),v(l,"class","flex flex-shrink-1 w-[inherit]"),v(t,"class","flex justify-between"),v(e,"class","container mx-auto")},m(i,f){D(i,e,f),p(e,t),p(t,s),p(s,u),p(t,a),p(t,l);for(let m=0;m<r.length;m+=1)r[m].m(l,null);p(e,z),ee(d,e,null),$=!0,w||(q=O(l,"change",n[2]),w=!0)},p(i,[f]){(!$||f&1&&c!==(c=`${U}/quizzes/${i[0]}`))&&v(s,"href",c),f&3&&(I=i[1],r=ce(r,f,y,1,i,I,Q,l,_e,J,null,G));const m={};f&1&&(m.localQuizId=i[0]),d.$set(m)},i(i){$||(V(d.$$.fragment,i),$=!0)},o(i){B(d.$$.fragment,i),$=!1},d(i){i&&h(e);for(let f=0;f<r.length;f+=1)r[f].d();te(d),w=!1,q()}}}function Ee(n,e,t){let s,u,c;R(n,me,l=>t(3,u=l)),R(n,ge,l=>t(1,c=l));async function a(l){await de(`${U}/quizzes/${l.currentTarget.value}/questions/create`)}return n.$$.update=()=>{n.$$.dirty&8&&t(0,s=parseInt(u.params.local_learnable_resource))},[s,c,a,u]}class Ve extends W{constructor(e){super(),X(this,e,Ee,ye,Y,{})}}export{Ve as default};
