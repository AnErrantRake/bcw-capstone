<template>
  <div class="election">
    <p>Pin: {{election.pin}}</p>
    <div v-if="election.timeoutEpoch > Date.now()">
      <div v-if="hasName">
        <h3>Name: {{name}}</h3>
        <h3>Options:</h3>
        <ul>
          <li v-for="option in election.votes">{{option}}</li>
        </ul>
        <button @click="vote" class="btn btn-success">Submit Vote</button>
      </div>
      <div v-else>
        <form @submit.prevent="addName">
          <input type="text" placeholder="Your Name" v-model='name' required>
          <button class="btn btn-success" type="submit">Continue</button>
        </form>
      </div>
    </div>
    <div v-else>
      <p>The winner is: {{bordaEval}}</p>
    </div>
  </div>
</template>


<script>
  export default {
    name: "election",
    props: ['electionID'],
    data() {
      return {
        hasName: false,
        name: ''
      };
    },
    mounted() {
      this.$store.dispatch('getElectionByID', this.electionID)
    },
    computed: {
      election() {
        return this.$store.state.activeElection;
      },
      bordaEval() {
        let arr = this.election.votes;
        console.log(arr)
        if (arr.length <= 0) {
          return 'No Votes!'
        }
        let voteCount = {}
        let voteSize = Object.keys(arr[0]).length

        for (let i = 0; i < arr.length; i++) {
          for (let prop in arr[i]) {
            if (voteCount.hasOwnProperty(prop)) {
              voteCount[prop] += voteSize - arr[i][prop] + 1
            }
            else {
              voteCount[prop] = voteSize - arr[i][prop] + 1
            }
          }
        }
        let winnerVotes = -1;
        let winner = 'COWARDICE!'
        for (key in voteCount) {
          if (voteCount[key] > winnerVotes) {
            winner = key;
          }
        }
        return winner;
      }
    },
    methods: {
      addName() {
        this.hasName = true;
      },
      vote() {
        //TODO - push vote to server and redirect
      }
    },
    components: {}
  };
</script>


<style scoped>
</style>