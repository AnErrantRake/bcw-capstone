import { api } from '../../api/'

export default {
  state: {
    searchResults: []
  },
  mutations: {
    setSearchResults(state, results) {
      state.searchResults = results;
    },
    resetSearchResults(state, results) {
      state.searchResults = [];
    },
    removeResult(state, resultID) {
      let index = state.searchResults.findIndex(curr => curr.id === resultID);
      if (index >= 0) {
        state.searchResults.splice(index, 1);
      }
    }
  },
  actions: {
    async searchByCoords({ commit, dispatch }, location) {
      api.get(`search/google/?lat=${location.latitude}&lon=${location.longitude}&keyword=${location.query}`)
        .then(res => commit('setSearchResults', res.data))
        .catch(error => console.error(error));
    },
    async searchByAddress({ commit, dispatch }, location) {
      api.get(`search/google/?address=${location.address}&keyword=${location.query}`)
        .then(res => commit('setSearchResults', res.data))
        .catch(error => console.error(error));
    },
    resetSearchResults({ commit, dispatch }) {
      commit('resetSearchResults');
    },
    removeResult({ commit, dispatch }, resultID) {
      commit('removeResult', resultID);
    },
  }
}