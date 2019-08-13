import { api } from '../../api'
import router from '../../router'

export default {

  state: {
    elections: [],
    activeElection: {}
  },
  mutations: {
    setElections(state, elections) {
      state.elections = elections
    },
    startElection(state, election) {
      state.elections.push(election);
    },
    deleteElections(state, electionID) {
      let index = state.elections.findIndex(curr => curr._id === electionID);
      if (index >= 0) {
        state.elections.splice(index, 1);
      }
    },
    setActiveElection(state, election) {
      state.activeElection = election;
    }
  },
  actions: {
    //#region -- Elections --
    async getElections({ commit, dispatch }) {
      api.get('elections')
        .then(res => commit('setElections', res.data))
        .catch(error => console.error(error));
    },
    async getElectionByID({ commit, dispatch }, electionID) {
      api.get('elections/' + electionID)
        .then(res => {
          commit('setActiveElection', res.data);
          dispatch("joinRoom", electionID);
        })
        .catch(error => console.error(error));
    },
    async getElectionByPin({ commit, dispatch }, electionPin) {
      api.get('elections/vote/' + electionPin)
        .then(res => {
          commit('setActiveElection', res.data);
          router.push({ name: 'election', params: { electionPin: electionPin } });
        })
        .catch(error => console.error(error));
    },
    async startElection({ commit, dispatch }, election) {
      api.post('elections', election)
        .then(res => commit('startElection', res.data))
        .catch(error => console.error(error));
    },
    async deleteElection({ commit, dispatch }, electionID) {
      api.delete('elections/' + electionID)
        .then(res => commit('deleteElections', electionID))
        .catch(error => console.error(error));
    },
    //#endregion

    //#region -- Votes --
    async getActiveElection({ commit, dispatch }, electionID) {
      api.get('elections/' + electionID)
        .then(res => commit('setActiveElection', res.data))
        .catch(error => console.error(error));
    },
    // async getActiveBallot({ commit, dispatch }, ballotID) {
    //   api.get('ballots/' + ballotID)
    //     .then(res => commit('setActiveBallot', res.data))
    //     .catch(error => console.error(error));
    // },
    async submitVotes({ commit, dispatch, state, rootState }, votes) {
      api.put('elections/vote/' + state.activeElection.pin, votes)
        .then(res => {
          if (rootState.userStore.user._id) {
            router.push({ name: 'electionStatus', params: { electionID: state.activeElection._id } })
          }
        })
        .catch(error => console.error(error));
    },
  }
}