(function(e){function t(t){for(var r,s,i=t[0],l=t[1],c=t[2],u=0,d=[];u<i.length;u++)s=i[u],n[s]&&d.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,s=1;s<o.length;s++){var l=o[s];0!==n[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},n={app:0},a=[];function s(e){return i.p+"js/"+({ballotCreation:"ballotCreation"}[e]||e)+"."+{ballotCreation:"994e5d18"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],o=n[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise(function(t,r){o=n[e]=[t,r]});t.push(o[2]=r);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e),a=function(t){l.onerror=l.onload=null,clearTimeout(c);var o=n[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");s.type=r,s.request=a,o[1](s)}n[e]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=c;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"35b2":function(e,t,o){"use strict";var r=o("6c40"),n=o.n(r);n.a},"56d7":function(e,t,o){"use strict";o.r(t);var r=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},a=[],s={name:"App"},i=s,l=o("2877"),c=Object(l["a"])(i,n,a,!1,null,null,null),u=c.exports,p=o("8c4f"),d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login"},[e.loginForm?o("form",{on:{submit:function(t){return t.preventDefault(),e.loginUser(t)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.creds.username,expression:"creds.username"}],attrs:{type:"text",placeholder:"Enter your name"},domProps:{value:e.creds.username},on:{input:function(t){t.target.composing||e.$set(e.creds,"username",t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.creds.password,expression:"creds.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.creds.password},on:{input:function(t){t.target.composing||e.$set(e.creds,"password",t.target.value)}}}),o("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Login")])]):o("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.username,expression:"newUser.username"}],attrs:{type:"text",placeholder:"name"},domProps:{value:e.newUser.username},on:{input:function(t){t.target.composing||e.$set(e.newUser,"username",t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.password,expression:"newUser.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.newUser.password},on:{input:function(t){t.target.composing||e.$set(e.newUser,"password",t.target.value)}}}),o("button",{staticClass:"btn btn-warning",attrs:{type:"submit"}},[e._v("Create Account")])]),o("div",{staticClass:"action",on:{click:function(t){e.loginForm=!e.loginForm}}},[e.loginForm?o("p",[e._v("No account? Click here to Register")]):o("p",[e._v("Already have an account? Click here to Login")])])])},m=[],h={name:"login",data(){return{loginForm:!0,creds:{username:"",password:""},newUser:{password:"",username:""}}},beforeCreate(){this.$store.state.user._id&&this.$router.push({name:"home"})},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},f=h,g=(o("35b2"),Object(l["a"])(f,d,m,!1,null,"2e386156",null)),w=g.exports,v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("h1",[e._v("Logged in!")]),o("router-link",{attrs:{to:{name:"ballotCreation"}}},[e._v("Create New Ballot")]),o("ul",e._l(e.ballots,function(t){return o("li",[o("span",[e._v("\n        "+e._s(t.name)+"\n      ")]),o("button",{staticClass:"btn btn-danger",attrs:{type:"submit"},on:{click:function(o){return e.deleteBallot(t._id)}}},[e._v("Delete")])])}),0)],1)},b=[],y={name:"home",mounted(){this.$store.dispatch("getBallots")},data(){return{}},computed:{ballots(){return this.$store.state.ballots}},methods:{deleteBallot(e){this.$store.dispatch("deleteBallot",e)}},components:{}},_=y,C=Object(l["a"])(_,v,b,!1,null,"5a9bfb0f",null),$=C.exports;r["a"].use(p["a"]);var U=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:$},{path:"/login",name:"login",component:w},{path:"/ballot/new",name:"ballotCreation",component:function(){return o.e("ballotCreation").then(o.bind(null,"a2db"))}},{path:"*",redirect:"/"}]}),k=o("2f62"),x=o("bc3a"),j=o.n(x);let B=location.host.includes("localhost")?"//localhost:3000/":"https://bcw-capstone-wafl.herokuapp.com/",N=j.a.create({baseURL:B+"account/",timeout:3e3,withCredentials:!0});class O{static async Login(e){try{let o=await N.post("login",e);return o.data}catch(t){throw new Error(`[login failed] : ${t.response?t.response.data.error:"No response from server"}`)}}static async Register(e){try{let o=await N.post("register",e);return o.data}catch(t){throw new Error(`[registration failed] : ${t.response?t.response.data.error:"No response from server"}`)}}static async Logout(){try{await N.delete("logout");return!0}catch(e){throw new Error(`[logout failed] : ${e.response?e.response.data.error:"No response from server"}`)}}static async Authenticate(){try{let t=await N.get("authenticate");return t.data}catch(e){console.warn(`[Authentication failed] : ${e.response?e.response.data.error:"No response from server"}`)}}}r["a"].use(k["a"]);let P=window.location.host.includes("localhost:8080")?"//localhost:3000/":"https://bcw-capstone-wafl.herokuapp.com/",A=j.a.create({baseURL:P+"api/",timeout:3e3,withCredentials:!0});var E=new k["a"].Store({state:{user:{},ballots:[]},mutations:{setUser(e,t){e.user=t},setBallots(e,t){e.ballots=t},addBallot(e,t){e.ballots.push(t)},deleteBallot(e,t){let o=e.ballots.findIndex(e=>e._id===t);o>=0&&e.ballots.splice(o,1)}},actions:{async register({commit:e,dispatch:t},o){try{let t=await O.Register(o);e("setUser",t),U.push({name:"home"})}catch(r){console.warn(r.message)}},async login({commit:e,dispatch:t},o){try{let t=await O.Login(o);e("setUser",t),U.push({name:"home"})}catch(r){console.warn(r.message)}},async logout({commit:e,dispatch:t}){try{await O.Logout();e("resetState"),U.push({name:"login"})}catch(o){console.warn(o.message)}},async getBallots({commit:e,dispatch:t}){await A.get("ballots").then(t=>e("setBallots",t.data)).catch(e=>console.error(e))},async addBallot({commit:e,dispatch:t},o){await A.post("ballots",o).then(t=>e("addBallot",t.data)).catch(e=>console.error(e))},async deleteBallot({commit:e,dispatch:t},o){await A.delete("ballots/"+o).then(t=>e("deleteBallot",o)).catch(e=>console.error(e))}}}),L=o("9483");async function S(){let e=await O.Authenticate();e?E.commit("setUser",e):U.push({name:"login"}),new r["a"]({router:U,store:E,render:function(e){return e(u)}}).$mount("#app")}Object(L["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,S()},"6c40":function(e,t,o){}});
//# sourceMappingURL=app.f1578da7.js.map