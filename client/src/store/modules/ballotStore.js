import { api } from '../../api'

export default {
  state: {
    ballots: [],
    // activeBallot: {},
  },
  mutations: {
    setBallots(state, ballots) {
      state.ballots = ballots;
    },
    addBallot(state, ballot) {
      state.ballots.push(ballot);
    },
    deleteBallot(state, ballotID) {
      let index = state.ballots.findIndex(curr => curr._id === ballotID);
      if (index >= 0) {
        state.ballots.splice(index, 1);
      }
    },
    // setActiveBallot(state, ballot) {
    //   state.activeBallot = ballot;
    // }
  },
  actions: {
    async getBallots({ commit, dispatch }) {
      api.get('ballots')
        .then(res => commit('setBallots', res.data))
        .catch(error => console.error(error));
    },
    // async getBallotByID({ commit, dispatch }, ballotID) {
    //   api.get('ballots/' + ballotID)
    //     .then(res => {
    //       commit('setActiveBallot', res.data);
    //       router.push({ name: 'ballot', params: { ballotID: res.data._id } });
    //     })
    //     .catch(error => console.error(error));
    // },
    async addBallot({ commit, dispatch }, ballot) {
      api.post('ballots', ballot)
        .then(res => commit('addBallot', res.data))
        .catch(error => console.error(error));
    },
    async deleteBallot({ commit, dispatch }, ballotID) {
      api.delete('ballots/' + ballotID)
        .then(res => commit('deleteBallot', ballotID))
        .catch(error => console.error(error));
    },

  }
}