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
      path: '/election/:electionPin',
      name: 'election',
      props: true,
      component: function () {
        return import(/* webpackChunkName: "election" */ './views/Election.vue')
      }
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
      path: '/ballot/:ballotID',
      name: 'ballot',
      props: true,
      component: function () {
        return import(/* webpackChunkName: "ballot" */ './views/Ballot.vue')
      }
    },
    {
      path: '/election/status/:electionID',
      name: 'electionStatus',
      props: true,
      component: function () {
        return import(/* webpackChunkName: "electionStatus" */ './views/ElectionStatus.vue')
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
