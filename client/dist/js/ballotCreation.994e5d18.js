(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ballotCreation"],{a2db:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ballotCreation"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.addBallot(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBallot.name,expression:"newBallot.name"}],attrs:{type:"text",placeholder:"Ballot Name",required:""},domProps:{value:t.newBallot.name},on:{input:function(e){e.target.composing||t.$set(t.newBallot,"name",e.target.value)}}}),a("ul",t._l(t.newBallot.noms,function(e){return a("li",[t._v(t._s(e))])}),0),a("form",{on:{submit:function(e){return e.preventDefault(),t.addNom(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newRestaurant,expression:"newRestaurant"}],attrs:{type:"text",placeholder:"Restaurant Name",required:""},domProps:{value:t.newRestaurant},on:{input:function(e){e.target.composing||(t.newRestaurant=e.target.value)}}}),a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Add Restaurant")])]),a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Add Ballot")])])])},o=[],s={name:"ballotCreation",data(){return{newBallot:{name:"",noms:[]},newRestaurant:""}},computed:{},methods:{addBallot(){this.$store.dispatch("addBallot",this.newBallot),this.newBallot={name:"",noms:[]},this.$router.push({name:"home"})},addNom(){this.newBallot.noms.push(this.newRestaurant),this.newRestaurant=""}},components:{}},l=s,r=a("2877"),u=Object(r["a"])(l,n,o,!1,null,"12d074d0",null);e["default"]=u.exports}}]);
//# sourceMappingURL=ballotCreation.994e5d18.js.map