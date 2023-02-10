var X=Object.defineProperty;var Y=(t,e,i)=>e in t?X(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var I=(t,e,i)=>(Y(t,typeof e!="symbol"?e+"":e,i),i);import{w as U,d as M}from"./index-779a6bb2.js";import{a1 as _}from"./index-169c4bf0.js";const O={};function Z(t){return t}function j(t){return t}function x(t,e,i={}){const n=typeof window<"u"&&typeof window.localStorage<"u",o=i.toJSON||j,r=i.fromJSON||Z;function c(h,p){return n&&window.localStorage.setItem(h,JSON.stringify(o(p))),p}if(!O[t]){let u=function(s){c(t,s),a(s)};const h=U(e,s=>{const y=n?window.localStorage.getItem(t):null;if(y&&s(r(JSON.parse(y))),n){let w=function(l){l.key===t&&s(l.newValue?r(JSON.parse(l.newValue)):null)};return window.addEventListener("storage",w),()=>{window.removeEventListener("storage",w)}}}),{subscribe:p,set:a}=h;O[t]={set:u,update(s){u(s(_(h)))},subscribe:p}}return O[t]}var E={},ee={get exports(){return E},set exports(t){E=t}};(function(t){var e=Object.prototype.hasOwnProperty,i="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(i=!1));function o(p,a,u){this.fn=p,this.context=a,this.once=u||!1}function r(p,a,u,s,y){if(typeof u!="function")throw new TypeError("The listener must be a function");var w=new o(u,s||p,y),l=i?i+a:a;return p._events[l]?p._events[l].fn?p._events[l]=[p._events[l],w]:p._events[l].push(w):(p._events[l]=w,p._eventsCount++),p}function c(p,a){--p._eventsCount===0?p._events=new n:delete p._events[a]}function h(){this._events=new n,this._eventsCount=0}h.prototype.eventNames=function(){var a=[],u,s;if(this._eventsCount===0)return a;for(s in u=this._events)e.call(u,s)&&a.push(i?s.slice(1):s);return Object.getOwnPropertySymbols?a.concat(Object.getOwnPropertySymbols(u)):a},h.prototype.listeners=function(a){var u=i?i+a:a,s=this._events[u];if(!s)return[];if(s.fn)return[s.fn];for(var y=0,w=s.length,l=new Array(w);y<w;y++)l[y]=s[y].fn;return l},h.prototype.listenerCount=function(a){var u=i?i+a:a,s=this._events[u];return s?s.fn?1:s.length:0},h.prototype.emit=function(a,u,s,y,w,l){var m=i?i+a:a;if(!this._events[m])return!1;var d=this._events[m],z=arguments.length,v,f;if(d.fn){switch(d.once&&this.removeListener(a,d.fn,void 0,!0),z){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,u),!0;case 3:return d.fn.call(d.context,u,s),!0;case 4:return d.fn.call(d.context,u,s,y),!0;case 5:return d.fn.call(d.context,u,s,y,w),!0;case 6:return d.fn.call(d.context,u,s,y,w,l),!0}for(f=1,v=new Array(z-1);f<z;f++)v[f-1]=arguments[f];d.fn.apply(d.context,v)}else{var H=d.length,Q;for(f=0;f<H;f++)switch(d[f].once&&this.removeListener(a,d[f].fn,void 0,!0),z){case 1:d[f].fn.call(d[f].context);break;case 2:d[f].fn.call(d[f].context,u);break;case 3:d[f].fn.call(d[f].context,u,s);break;case 4:d[f].fn.call(d[f].context,u,s,y);break;default:if(!v)for(Q=1,v=new Array(z-1);Q<z;Q++)v[Q-1]=arguments[Q];d[f].fn.apply(d[f].context,v)}}return!0},h.prototype.on=function(a,u,s){return r(this,a,u,s,!1)},h.prototype.once=function(a,u,s){return r(this,a,u,s,!0)},h.prototype.removeListener=function(a,u,s,y){var w=i?i+a:a;if(!this._events[w])return this;if(!u)return c(this,w),this;var l=this._events[w];if(l.fn)l.fn===u&&(!y||l.once)&&(!s||l.context===s)&&c(this,w);else{for(var m=0,d=[],z=l.length;m<z;m++)(l[m].fn!==u||y&&!l[m].once||s&&l[m].context!==s)&&d.push(l[m]);d.length?this._events[w]=d.length===1?d[0]:d:c(this,w)}return this},h.prototype.removeAllListeners=function(a){var u;return a?(u=i?i+a:a,this._events[u]&&c(this,u)):(this._events=new n,this._eventsCount=0),this},h.prototype.off=h.prototype.removeListener,h.prototype.addListener=h.prototype.on,h.prefixed=i,h.EventEmitter=h,t.exports=h})(ee);const D=E,F=new D,K=U(typeof navigator=="object"?navigator.onLine:!1),te=M(K,t=>t);function ie(){return _(te)}function ne(){K.set(!0),F.emit("online")}function oe(){K.set(!1),F.emit("offline")}typeof window=="object"&&(window.addEventListener("online",ne),window.addEventListener("offline",oe));const re="http://localhost:3000".replace(/\/+$/,"");class S{constructor(e={}){this.configuration=e}set config(e){this.configuration=e}get basePath(){return this.configuration.basePath!=null?this.configuration.basePath:re}get fetchApi(){return this.configuration.fetchApi}get middleware(){return this.configuration.middleware||[]}get queryParamsStringify(){return this.configuration.queryParamsStringify||$}get username(){return this.configuration.username}get password(){return this.configuration.password}get apiKey(){const e=this.configuration.apiKey;if(e)return typeof e=="function"?e:()=>e}get accessToken(){const e=this.configuration.accessToken;if(e)return typeof e=="function"?e:async()=>e}get headers(){return this.configuration.headers}get credentials(){return this.configuration.credentials}}const se=new S;class N{constructor(e=se){I(this,"middleware");I(this,"fetchApi",async(e,i)=>{let n={url:e,init:i};for(const r of this.middleware)r.pre&&(n=await r.pre({fetch:this.fetchApi,...n})||n);let o;try{o=await(this.configuration.fetchApi||fetch)(n.url,n.init)}catch(r){for(const c of this.middleware)c.onError&&(o=await c.onError({fetch:this.fetchApi,url:n.url,init:n.init,error:r,response:o?o.clone():void 0})||o);if(o===void 0)throw r instanceof Error?new ce(r,"The request failed and the interceptors did not return an alternative response"):r}for(const r of this.middleware)r.post&&(o=await r.post({fetch:this.fetchApi,url:n.url,init:n.init,response:o.clone()})||o);return o});this.configuration=e,this.middleware=e.middleware}withMiddleware(...e){const i=this.clone();return i.middleware=i.middleware.concat(...e),i}withPreMiddleware(...e){const i=e.map(n=>({pre:n}));return this.withMiddleware(...i)}withPostMiddleware(...e){const i=e.map(n=>({post:n}));return this.withMiddleware(...i)}async request(e,i){const{url:n,init:o}=await this.createFetchParams(e,i),r=await this.fetchApi(n,o);if(r&&r.status>=200&&r.status<300)return r;throw new de(r,"Response returned an error code")}async createFetchParams(e,i){let n=this.configuration.basePath+e.path;e.query!==void 0&&Object.keys(e.query).length!==0&&(n+="?"+this.configuration.queryParamsStringify(e.query));const o=Object.assign({},this.configuration.headers,e.headers);Object.keys(o).forEach(a=>o[a]===void 0?delete o[a]:{});const r=typeof i=="function"?i:async()=>i,c={method:e.method,headers:o,body:e.body,credentials:this.configuration.credentials},h={...c,...await r({init:c,context:e})},p={...h,body:ue(h.body)||h.body instanceof URLSearchParams||ae(h.body)?h.body:JSON.stringify(h.body)};return{url:n,init:p}}clone(){const e=this.constructor,i=new e(this.configuration);return i.middleware=this.middleware.slice(),i}}function ae(t){return typeof Blob<"u"&&t instanceof Blob}function ue(t){return typeof FormData<"u"&&t instanceof FormData}class de extends Error{constructor(i,n){super(n);I(this,"name","ResponseError");this.response=i}}class ce extends Error{constructor(i,n){super(n);I(this,"name","FetchError");this.cause=i}}class g extends Error{constructor(i,n){super(n);I(this,"name","RequiredError");this.field=i}}function P(t,e){const i=t[e];return i!=null}function $(t,e=""){return Object.keys(t).map(i=>k(i,t[i],e)).filter(i=>i.length>0).join("&")}function k(t,e,i=""){const n=i+(i.length?`[${t}]`:t);if(e instanceof Array){const o=e.map(r=>encodeURIComponent(String(r))).join(`&${encodeURIComponent(n)}=`);return`${encodeURIComponent(n)}=${o}`}if(e instanceof Set){const o=Array.from(e);return k(t,o,i)}return e instanceof Date?`${encodeURIComponent(n)}=${encodeURIComponent(e.toISOString())}`:e instanceof Object?$(e,n):`${encodeURIComponent(n)}=${encodeURIComponent(String(e))}`}class A{constructor(e,i=n=>n){this.raw=e,this.transformer=i}async value(){return this.transformer(await this.raw.json())}}class B{constructor(e){this.raw=e}async value(){}}function q(t){return pe(t)}function pe(t,e){return t==null?t:{id:t.id,user_id:t.user_id,name:P(t,"name")?t.name:void 0,uri:P(t,"uri")?t.uri:void 0,learnable_resource_type:t.learnable_resource_type,learnable_resource:t.learnable_resource,question_type:t.question_type,item_order:t.item_order,data:t.data,created_at:new Date(t.created_at),updated_at:new Date(t.updated_at)}}function he(t){return le(t)}function le(t,e){return t==null?t:{moved_question:q(t.moved_question),other_questions:t.other_questions.map(q)}}function fe(t){if(t!==void 0)return t===null?null:{name:t.name,item_order_position:t.item_order_position,data:t.data,question_type:t.question_type}}function we(t){if(t!==void 0)return t===null?null:{item_order_position:t.item_order_position}}function ge(t){if(t!==void 0)return t===null?null:{name:t.name}}function ye(t){if(t!==void 0)return t===null?null:{email:t.email,password:t.password}}function Ae(t){if(t!==void 0)return t===null?null:{name:t.name,item_order_position:t.item_order_position,data:t.data,question_type:t.question_type}}function me(t){if(t!==void 0)return t===null?null:{name:t.name}}function b(t){return ze(t)}function ze(t,e){return t==null?t:{id:t.id,user_id:t.user_id,learnable_resource_type:t.learnable_resource_type,name:t.name,uri:t.uri,created_at:new Date(t.created_at),updated_at:new Date(t.updated_at)}}function ve(t){return Ie(t)}function Ie(t,e){return t==null?t:{token:t.token,expires_at:new Date(t.expires_at)}}function qe(t){return _e(t)}function _e(t,e){return t==null?t:{id:t.id,email:t.email,username:t.username,created_at:new Date(t.created_at),updated_at:new Date(t.updated_at)}}class Qe extends N{async getApiAuthMeRaw(e){const i={},n={};this.configuration&&this.configuration.apiKey&&(n.Authorization=this.configuration.apiKey("Authorization"));const o=await this.request({path:"/api/auth/me",method:"GET",headers:n,query:i},e);return new A(o,r=>qe(r))}async getApiAuthMe(e){return await(await this.getApiAuthMeRaw(e)).value()}async postApiAuthLoginRaw(e,i){if(e.postApiAuthLogin===null||e.postApiAuthLogin===void 0)throw new g("postApiAuthLogin","Required parameter requestParameters.postApiAuthLogin was null or undefined when calling postApiAuthLogin.");const n={},o={};o["Content-Type"]="application/json",this.configuration&&this.configuration.apiKey&&(o.Authorization=this.configuration.apiKey("Authorization"));const r=await this.request({path:"/api/auth/login",method:"POST",headers:o,query:n,body:ye(e.postApiAuthLogin)},i);return new A(r,c=>ve(c))}async postApiAuthLogin(e,i){return await(await this.postApiAuthLoginRaw(e,i)).value()}}class Re extends N{async deleteApiQuestionsIdRaw(e,i){if(e.quizId===null||e.quizId===void 0)throw new g("quizId","Required parameter requestParameters.quizId was null or undefined when calling deleteApiQuestionsId.");if(e.id===null||e.id===void 0)throw new g("id","Required parameter requestParameters.id was null or undefined when calling deleteApiQuestionsId.");const n={};e.quizId!==void 0&&(n.learnable_resource=e.quizId);const o={};this.configuration&&this.configuration.apiKey&&(o.Authorization=this.configuration.apiKey("Authorization"));const r=await this.request({path:"/api/questions/{id}".replace("{id}",encodeURIComponent(String(e.id))),method:"DELETE",headers:o,query:n},i);return new B(r)}async deleteApiQuestionsId(e,i){await this.deleteApiQuestionsIdRaw(e,i)}async getApiQuestionsRaw(e,i){if(e.quizId===null||e.quizId===void 0)throw new g("quizId","Required parameter requestParameters.quizId was null or undefined when calling getApiQuestions.");const n={};e.quizId!==void 0&&(n.learnable_resource=e.quizId);const o={};this.configuration&&this.configuration.apiKey&&(o.Authorization=this.configuration.apiKey("Authorization"));const r=await this.request({path:"/api/questions",method:"GET",headers:o,query:n},i);return new A(r,c=>c.map(q))}async getApiQuestions(e,i){return await(await this.getApiQuestionsRaw(e,i)).value()}async getApiQuestionsIdRaw(e,i){if(e.quizId===null||e.quizId===void 0)throw new g("quizId","Required parameter requestParameters.quizId was null or undefined when calling getApiQuestionsId.");if(e.id===null||e.id===void 0)throw new g("id","Required parameter requestParameters.id was null or undefined when calling getApiQuestionsId.");const n={};e.quizId!==void 0&&(n.learnable_resource=e.quizId);const o={};this.configuration&&this.configuration.apiKey&&(o.Authorization=this.configuration.apiKey("Authorization"));const r=await this.request({path:"/api/questions/{id}".replace("{id}",encodeURIComponent(String(e.id))),method:"GET",headers:o,query:n},i);return new A(r,c=>q(c))}async getApiQuestionsId(e,i){return await(await this.getApiQuestionsIdRaw(e,i)).value()}async patchApiQuestionsIdRaw(e,i){if(e.quizId===null||e.quizId===void 0)throw new g("quizId","Required parameter requestParameters.quizId was null or undefined when calling patchApiQuestionsId.");if(e.id===null||e.id===void 0)throw new g("id","Required parameter requestParameters.id was null or undefined when calling patchApiQuestionsId.");if(e.patchApiQuestionsId===null||e.patchApiQuestionsId===void 0)throw new g("patchApiQuestionsId","Required parameter requestParameters.patchApiQuestionsId was null or undefined when calling patchApiQuestionsId.");const n={};e.quizId!==void 0&&(n.learnable_resource=e.quizId);const o={};o["Content-Type"]="application/json",this.configuration&&this.configuration.apiKey&&(o.Authorization=this.configuration.apiKey("Authorization"));const r=await this.request({path:"/api/questions/{id}".replace("{id}",encodeURIComponent(String(e.id))),method:"PATCH",headers:o,query:n,body:fe(e.patchApiQuestionsId)},i);return new A(r,c=>q(c))}async patchApiQuestionsId(e,i){return await(await this.patchApiQuestionsIdRaw(e,i)).value()}async patchApiQuestionsIdMoveRaw(e,i){if(e.quizId===null||e.quizId===void 0)throw new g("quizId","Required parameter requestParameters.quizId was null or undefined when calling patchApiQuestionsIdMove.");if(e.id===null||e.id===void 0)throw new g("id","Required parameter requestParameters.id was null or undefined when calling patchApiQuestionsIdMove.");if(e.patchApiQuestionsIdMove===null||e.patchApiQuestionsIdMove===void 0)throw new g("patchApiQuestionsIdMove","Required parameter requestParameters.patchApiQuestionsIdMove was null or undefined when calling patchApiQuestionsIdMove.");const n={};e.quizId!==void 0&&(n.learnable_resource=e.quizId);const o={};o["Content-Type"]="application/json",this.configuration&&this.configuration.apiKey&&(o.Authorization=this.configuration.apiKey("Authorization"));const r=await this.request({path:"/api/questions/{id}/move".replace("{id}",encodeURIComponent(String(e.id))),method:"PATCH",headers:o,query:n,body:we(e.patchApiQuestionsIdMove)},i);return new A(r,c=>he(c))}async patchApiQuestionsIdMove(e,i){return await(await this.patchApiQuestionsIdMoveRaw(e,i)).value()}async postApiQuestionsRaw(e,i){if(e.quizId===null||e.quizId===void 0)throw new g("quizId","Required parameter requestParameters.quizId was null or undefined when calling postApiQuestions.");if(e.postApiQuestions===null||e.postApiQuestions===void 0)throw new g("postApiQuestions","Required parameter requestParameters.postApiQuestions was null or undefined when calling postApiQuestions.");const n={};e.quizId!==void 0&&(n.learnable_resource=e.quizId);const o={};o["Content-Type"]="application/json",this.configuration&&this.configuration.apiKey&&(o.Authorization=this.configuration.apiKey("Authorization"));const r=await this.request({path:"/api/questions",method:"POST",headers:o,query:n,body:Ae(e.postApiQuestions)},i);return new A(r,c=>q(c))}async postApiQuestions(e,i){return await(await this.postApiQuestionsRaw(e,i)).value()}}class be extends N{async deleteApiQuizzesIdRaw(e,i){if(e.id===null||e.id===void 0)throw new g("id","Required parameter requestParameters.id was null or undefined when calling deleteApiQuizzesId.");const n={},o={};this.configuration&&this.configuration.apiKey&&(o.Authorization=this.configuration.apiKey("Authorization"));const r=await this.request({path:"/api/quizzes/{id}".replace("{id}",encodeURIComponent(String(e.id))),method:"DELETE",headers:o,query:n},i);return new B(r)}async deleteApiQuizzesId(e,i){await this.deleteApiQuizzesIdRaw(e,i)}async getApiQuizzesRaw(e){const i={},n={};this.configuration&&this.configuration.apiKey&&(n.Authorization=this.configuration.apiKey("Authorization"));const o=await this.request({path:"/api/quizzes",method:"GET",headers:n,query:i},e);return new A(o,r=>r.map(b))}async getApiQuizzes(e){return await(await this.getApiQuizzesRaw(e)).value()}async getApiQuizzesIdRaw(e,i){if(e.id===null||e.id===void 0)throw new g("id","Required parameter requestParameters.id was null or undefined when calling getApiQuizzesId.");const n={},o={};this.configuration&&this.configuration.apiKey&&(o.Authorization=this.configuration.apiKey("Authorization"));const r=await this.request({path:"/api/quizzes/{id}".replace("{id}",encodeURIComponent(String(e.id))),method:"GET",headers:o,query:n},i);return new A(r,c=>b(c))}async getApiQuizzesId(e,i){return await(await this.getApiQuizzesIdRaw(e,i)).value()}async patchApiQuizzesIdRaw(e,i){if(e.id===null||e.id===void 0)throw new g("id","Required parameter requestParameters.id was null or undefined when calling patchApiQuizzesId.");if(e.patchApiQuizzesId===null||e.patchApiQuizzesId===void 0)throw new g("patchApiQuizzesId","Required parameter requestParameters.patchApiQuizzesId was null or undefined when calling patchApiQuizzesId.");const n={},o={};o["Content-Type"]="application/json",this.configuration&&this.configuration.apiKey&&(o.Authorization=this.configuration.apiKey("Authorization"));const r=await this.request({path:"/api/quizzes/{id}".replace("{id}",encodeURIComponent(String(e.id))),method:"PATCH",headers:o,query:n,body:ge(e.patchApiQuizzesId)},i);return new A(r,c=>b(c))}async patchApiQuizzesId(e,i){return await(await this.patchApiQuizzesIdRaw(e,i)).value()}async postApiQuizzesRaw(e,i){if(e.postApiQuizzes===null||e.postApiQuizzes===void 0)throw new g("postApiQuizzes","Required parameter requestParameters.postApiQuizzes was null or undefined when calling postApiQuizzes.");const n={},o={};o["Content-Type"]="application/json",this.configuration&&this.configuration.apiKey&&(o.Authorization=this.configuration.apiKey("Authorization"));const r=await this.request({path:"/api/quizzes",method:"POST",headers:o,query:n,body:me(e.postApiQuizzes)},i);return new A(r,c=>b(c))}async postApiQuizzes(e,i){return await(await this.postApiQuizzesRaw(e,i)).value()}}const L={basePath:{}.VITE_QUANTU_API_URL},R=new S(L),Ce=new be(R),Ke=new Re(R),T=new Qe(R),G=x("jwt",null),V=x("user",null,{fromJSON(t){return{...t,updated_at:new Date(t.updated_at),created_at:new Date(t.created_at)}}}),J=M(V,t=>t);function Ne(){return _(J)}function Se(t){G.set(t),R.config=new S({...L,apiKey:t.token})}async function Le(t,e){const i=await T.postApiAuthLogin({postApiAuthLogin:{email:t,password:e}});Se(i);const n=await T.getApiAuthMe();return V.set(n),n}async function Je(){if(C){const t=_(J);if(t)return t}return new Promise(t=>W.once("user",t))}const W=new D;let C=!1;async function Pe(){let t=_(J);if(ie()&&!C){const e=_(G);C=!0,e&&(R.config=new S({...L,apiKey:e.token}),t=await T.getApiAuthMe())}return t&&W.emit("user",t),t}export{D as E,ie as a,Ke as b,Ne as g,Pe as i,F as o,Ce as q,Le as s,Je as w};
