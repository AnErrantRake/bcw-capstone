import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/ballot/new',
      name: 'ballotCreation',
      component: function () {
        return import(/* webpackChunkName: "ballotCreation" */ './views/BallotCreation.vue')
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
