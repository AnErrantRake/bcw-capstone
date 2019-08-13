import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//module imports
import socketStore from './modules/socketStore'
import searchStore from './modules/searchStore'
import userStore from './modules/userStore'
import ballotStore from './modules/ballotStore'
import electionStore from './modules/electionStore'

export default new Vuex.Store({
  modules: {
    socketStore,
    searchStore,
    userStore,
    ballotStore,
    electionStore
  },

  mutations: {
    resetState(state) {
      state.electionStore.elections = []
      state.electionStore.activeElection = {}

      //state.ballotStore.activeBallot = {}
      state.ballotStore.ballots = []

      state.userStore.user = {}

      state.searchStore.searchResults = []
    }
  }
})