import io from 'socket.io-client'
import { base } from '../../api/'

let socket = {};

export default {
  actions: {
    initializeSocket({ commit, dispatch }) {
      // establish socket connection
      socket = io.connect(base)

      // handle connection events
      socket.on('CONNECTED', data => {
        console.log('Connected to socket: ' + data.socket)
      })

      // register isteners
      socket.on('addVote', data => {
        commit('setActiveElection', data)
      })
    },
    joinRoom({ commit, dispatch, state }, roomID) {
      socket.emit('join', { roomID })
    },
    leaveRoom({ commit, dispatch, state }, roomID) {
      socket.emit('leave', { roomID })
    }
  }
}