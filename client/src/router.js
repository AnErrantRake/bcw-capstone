import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Login from '@/views/Login.vue'
// @ts-ignore
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
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
        // @ts-ignore
        return import(/* webpackChunkName: "election" */ '@/views/Election.vue')
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
        // @ts-ignore
        return import(/* webpackChunkName: "ballotCreation" */ '@/views/BallotCreation.vue')
      }
    },

    {
      path: '/election/status/:electionID',
      name: 'electionStatus',
      props: true,
      component: function () {
        // @ts-ignore
        return import(/* webpackChunkName: "electionStatus" */ '@/views/ElectionStatus.vue')
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
