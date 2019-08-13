import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import socketStore from './modules/socketStore'
import searchStore from './modules/searchStore'
import userStore from './modules/userStore'
import { api } from '../api/index'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    socketStore,
    searchStore,
    userStore
  },
  state: {
    ballots: [],
    elections: [],
    activeBallot: {},
    activeElection: {}
  },
  mutations: {
    //#region -- AUTH STUFF --
    resetState(state) {
      state.ballots = []
      state.elections = []
      state.activeBallot = {}
      state.activeElection = {}

      state.userStore.user = {} //TODO verify me
      state.searchStore.searchResults = [] //TODO verify me
    },
    //#endregion

    //#region -- Ballots --
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
    setActiveBallot(state, ballot) {
      state.activeBallot = ballot;
    },
    //#endregion

    //#region -- Elections --
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
    },
    //#endregion
  },
  actions: {
    //#region -- Ballots --
    async getBallots({ commit, dispatch }) {
      api.get('ballots')
        .then(res => commit('setBallots', res.data))
        .catch(error => console.error(error));
    },
    async getBallotByID({ commit, dispatch }, ballotID) {
      api.get('ballots/' + ballotID)
        .then(res => {
          commit('setActiveBallot', res.data);
          router.push({ name: 'ballot', params: { ballotID: res.data._id } });
        })
        .catch(error => console.error(error));
    },
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
    //#endregion

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
    async getActiveBallot({ commit, dispatch }, ballotID) {
      api.get('ballots/' + ballotID)
        .then(res => commit('setActiveBallot', res.data))
        .catch(error => console.error(error));
    },
    async submitVotes({ commit, dispatch, state }, votes) {
      api.put('elections/vote/' + state.activeElection.pin, votes)
        .then(res => {
          if (userStore.state.user._id) {
            router.push({ name: 'electionStatus', params: { electionID: state.activeElection._id } })
          }
        })
        .catch(error => console.error(error));
    },
    //#endregion
  }
})
