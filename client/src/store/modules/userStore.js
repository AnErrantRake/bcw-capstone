import router from '../../router'
import AuthService from '../../AuthService'

export default {
  state: {
    user: {},
    duplicateUserName: false
  },
  mutations: {
    setUser(state, user) {
      state.user = user
      state.duplicateUserName = false
    },
    isDuplicateUserName(state, status) {
      state.duplicateUserName = status;
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    async register({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Register(creds)
        commit('setUser', user)
        router.push({ name: "home" })
      } catch (e) {
        if (e.message.includes("E11000")) {
          commit("isDuplicateUserName", true);
        }
        console.warn(e.message)
      }
    },
    async login({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Login(creds)
        commit('setUser', user)
        router.push({ name: "home" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async logout({ commit, dispatch }) {
      try {
        let success = await AuthService.Logout()
        if (!success) { }
        commit('resetState')
        router.push({ name: "login" })
      } catch (e) {
        console.warn(e.message)
      }
    }
    //#endregion

  }
}