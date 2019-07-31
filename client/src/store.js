import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import AuthService from './AuthService'

Vue.use(Vuex)
//Allows axios to work locally or live
let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : 'https://bcw-capstone-wafl.herokuapp.com/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})


export default new Vuex.Store({
  state: {
    user: {},
    ballots: [],
    elections: []
  },
  mutations: {
    //#region -- AUTH STUFF --
    setUser(state, user) {
      state.user = user
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
    //#endregion
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
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    async register({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Register(creds)
        commit('setUser', user)
        //TODO push to home
        router.push({ name: "home" })
      } catch (e) {
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
        //TODO implement reset state
        commit('resetState')
        router.push({ name: "login" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    //#endregion
    //#region -- Ballots --
    async getBallots({ commit, dispatch }) {
      await api.get('ballots')
        .then(res => commit('setBallots', res.data))
        .catch(error => console.error(error));
    },
    async addBallot({ commit, dispatch }, ballot) {
      await api.post('ballots', ballot)
        .then(res => commit('addBallot', res.data))
        .catch(error => console.error(error));
    },
    async deleteBallot({ commit, dispatch }, ballotID) {
      await api.delete('ballots/' + ballotID)
        .then(res => commit('deleteBallot', ballotID))
        .catch(error => console.error(error));
    },
    //#endregion

    //#region -- Elections --
    async getElections({ commit, dispatch }) {
      await api.get('elections')
        .then(res => commit('setElections', res.data))
        .catch(error => console.error(error));
    },
    async startElection({ commit, dispatch }, ballotID) {
      let election = {
        pin: 12345, timeoutEpoch: 0, votes: [], ballotID: ballotID
      }
      await api.post('elections', election)
        .then(res => commit('startElection', res.data))
        .catch(error => console.error(error));
    },
    async deleteElections({ commit, dispatch }, electionID) {
      await api.delete('elections/' + electionID)
        .then(res => commit('deleteElections', electionID))
        .catch(error => console.error(error));
    },
    //#endregion

  }
})
