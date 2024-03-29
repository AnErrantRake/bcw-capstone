import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import AuthService from './AuthService'

import './registerServiceWorker'

Vue.config.productionTip = false

async function init() {
  let user = await AuthService.Authenticate()
  if (user) {
    store.commit("setUser", user)
  } else {
    router.push({ name: 'login' })
  }
  new Vue({
    router,
    store,
    render: function (h) { return h(App) }
  }).$mount('#app')
}

store.dispatch("initializeSocket")


init()