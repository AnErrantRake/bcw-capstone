(function(e){function t(t){for(var n,a,i=t[0],l=t[1],c=t[2],u=0,p=[];u<i.length;u++)a=i[u],r[a]&&p.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],n=!0,a=1;a<o.length;a++){var l=o[a];0!==r[l]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={app:0},s=[];function a(e){return i.p+"js/"+({ballotCreation:"ballotCreation"}[e]||e)+"."+{ballotCreation:"994e5d18"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],o=r[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise(function(t,n){o=r[e]=[t,n]});t.push(o[2]=n);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=a(e),s=function(t){l.onerror=l.onload=null,clearTimeout(c);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+n+": "+s+")");a.type=n,a.request=s,o[1](a)}r[e]=void 0}};var c=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"35b2":function(e,t,o){"use strict";var n=o("6c40"),r=o.n(n);r.a},"56d7":function(e,t,o){"use strict";o.r(t);var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},s=[],a={name:"App"},i=a,l=o("2877"),c=Object(l["a"])(i,r,s,!1,null,null,null),u=c.exports,d=o("8c4f"),p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login"},[e.loginForm?o("form",{on:{submit:function(t){return t.preventDefault(),e.loginUser(t)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.creds.username,expression:"creds.username"}],attrs:{type:"text",placeholder:"Enter your name"},domProps:{value:e.creds.username},on:{input:function(t){t.target.composing||e.$set(e.creds,"username",t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.creds.password,expression:"creds.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.creds.password},on:{input:function(t){t.target.composing||e.$set(e.creds,"password",t.target.value)}}}),o("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Login")])]):o("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.username,expression:"newUser.username"}],attrs:{type:"text",placeholder:"name"},domProps:{value:e.newUser.username},on:{input:function(t){t.target.composing||e.$set(e.newUser,"username",t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.password,expression:"newUser.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.newUser.password},on:{input:function(t){t.target.composing||e.$set(e.newUser,"password",t.target.value)}}}),o("button",{staticClass:"btn btn-warning",attrs:{type:"submit"}},[e._v("Create Account")])]),o("div",{staticClass:"action",on:{click:function(t){e.loginForm=!e.loginForm}}},[e.loginForm?o("p",[e._v("No account? Click here to Register")]):o("p",[e._v("Already have an account? Click here to Login")])])])},m=[],h={name:"login",data(){return{loginForm:!0,creds:{username:"",password:""},newUser:{password:"",username:""}}},beforeCreate(){this.$store.state.user._id&&this.$router.push({name:"home"})},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},f=h,g=(o("35b2"),Object(l["a"])(f,p,m,!1,null,"2e386156",null)),w=g.exports,v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("h1",[e._v("Logged in!")]),o("h1",[e._v("Ballots!")]),o("router-link",{attrs:{to:{name:"ballotCreation"}}},[e._v("Create New Ballot")]),o("ul",e._l(e.ballots,function(t){return o("li",[o("span",[e._v("\n        "+e._s(t.name)+"\n      ")]),o("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(o){return e.startElection(t._id)}}},[e._v("Start")]),o("button",{staticClass:"btn btn-danger",attrs:{type:"submit"},on:{click:function(o){return e.deleteBallot(t._id)}}},[e._v("Delete")])])}),0),o("h1",[e._v("Elections")]),o("ul",e._l(e.elections,function(t){return o("li",[o("span",[e._v("\n        "+e._s(t.pin)+"\n      ")]),o("button",{staticClass:"btn btn-danger",attrs:{type:"submit"},on:{click:function(o){return e.deleteElection(t._id)}}},[e._v("Delete")])])}),0)],1)},b=[],y={name:"home",mounted(){this.$store.dispatch("getBallots"),this.$store.dispatch("getElections")},data(){return{}},computed:{ballots(){return this.$store.state.ballots},elections(){return this.$store.state.elections}},methods:{deleteBallot(e){this.$store.dispatch("deleteBallot",e)},deleteElections(e){this.$store.dispatch("deleteElection",e)},startElection(e){this.$store.dispatch("startElection",e)}},components:{}},_=y,E=Object(l["a"])(_,v,b,!1,null,"411a45ab",null),C=E.exports;n["a"].use(d["a"]);var $=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:C},{path:"/login",name:"login",component:w},{path:"/ballot/new",name:"ballotCreation",component:function(){return o.e("ballotCreation").then(o.bind(null,"a2db"))}},{path:"*",redirect:"/"}]}),k=o("2f62"),U=o("bc3a"),x=o.n(U);let B=location.host.includes("localhost")?"//localhost:3000/":"https://bcw-capstone-wafl.herokuapp.com/",j=x.a.create({baseURL:B+"account/",timeout:3e3,withCredentials:!0});class N{static async Login(e){try{let o=await j.post("login",e);return o.data}catch(t){throw new Error(`[login failed] : ${t.response?t.response.data.error:"No response from server"}`)}}static async Register(e){try{let o=await j.post("register",e);return o.data}catch(t){throw new Error(`[registration failed] : ${t.response?t.response.data.error:"No response from server"}`)}}static async Logout(){try{await j.delete("logout");return!0}catch(e){throw new Error(`[logout failed] : ${e.response?e.response.data.error:"No response from server"}`)}}static async Authenticate(){try{let t=await j.get("authenticate");return t.data}catch(e){console.warn(`[Authentication failed] : ${e.response?e.response.data.error:"No response from server"}`)}}}n["a"].use(k["a"]);let O=window.location.host.includes("localhost:8080")?"//localhost:3000/":"https://bcw-capstone-wafl.herokuapp.com/",P=x.a.create({baseURL:O+"api/",timeout:3e3,withCredentials:!0});var A=new k["a"].Store({state:{user:{},ballots:[],elections:[]},mutations:{setUser(e,t){e.user=t},setBallots(e,t){e.ballots=t},addBallot(e,t){e.ballots.push(t)},deleteBallot(e,t){let o=e.ballots.findIndex(e=>e._id===t);o>=0&&e.ballots.splice(o,1)},setElections(e,t){e.elections=t},startElection(e,t){e.elections.push(t)},deleteElections(e,t){let o=e.elections.findIndex(e=>e._id===t);o>=0&&e.elections.splice(o,1)}},actions:{async register({commit:e,dispatch:t},o){try{let t=await N.Register(o);e("setUser",t),$.push({name:"home"})}catch(n){console.warn(n.message)}},async login({commit:e,dispatch:t},o){try{let t=await N.Login(o);e("setUser",t),$.push({name:"home"})}catch(n){console.warn(n.message)}},async logout({commit:e,dispatch:t}){try{await N.Logout();e("resetState"),$.push({name:"login"})}catch(o){console.warn(o.message)}},async getBallots({commit:e,dispatch:t}){await P.get("ballots").then(t=>e("setBallots",t.data)).catch(e=>console.error(e))},async addBallot({commit:e,dispatch:t},o){await P.post("ballots",o).then(t=>e("addBallot",t.data)).catch(e=>console.error(e))},async deleteBallot({commit:e,dispatch:t},o){await P.delete("ballots/"+o).then(t=>e("deleteBallot",o)).catch(e=>console.error(e))},async getElections({commit:e,dispatch:t}){await P.get("elections").then(t=>e("setElections",t.data)).catch(e=>console.error(e))},async startElection({commit:e,dispatch:t},o){let n={pin:12345,timeoutEpoch:0,votes:[],ballotID:o};await P.post("elections",n).then(t=>e("startElection",t.data)).catch(e=>console.error(e))},async deleteElections({commit:e,dispatch:t},o){await P.delete("elections/"+o).then(t=>e("deleteElections",o)).catch(e=>console.error(e))}}}),L=o("9483");async function S(){let e=await N.Authenticate();e?A.commit("setUser",e):$.push({name:"login"}),new n["a"]({router:$,store:A,render:function(e){return e(u)}}).$mount("#app")}Object(L["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),n["a"].config.productionTip=!1,S()},"6c40":function(e,t,o){}});
//# sourceMappingURL=app.a09b6559.js.map