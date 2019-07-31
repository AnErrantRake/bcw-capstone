<template>
  <div class="home">
    <h1>Logged in!</h1>
    <h1>Ballots!</h1>
    <router-link :to="{name: 'ballotCreation'}">Create New Ballot</router-link>
    <ul>
      <li v-for="ballot in ballots">
        <span>
          {{ballot.name}}
        </span>
        <button @click='startElection(ballot._id)' class="btn btn-primary" type="submit">Start</button>
        <button @click="deleteBallot(ballot._id)" class="btn btn-danger" type="submit">Delete</button>
      </li>
    </ul>
    <h1>Elections</h1>
    <ul>
      <li v-for="election in elections">
        <span>
          {{election.pin}}
        </span>
        <button @click="deleteElection(election._id)" class="btn btn-danger" type="submit">Delete</button>
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    name: "home",
    mounted() {
      this.$store.dispatch('getBallots');
      this.$store.dispatch('getElections');
    },
    data() {
      return {};
    },
    computed: {
      ballots() {
        return this.$store.state.ballots;
      },
      elections() {
        return this.$store.state.elections;
      }
    },
    methods: {
      deleteBallot(ballotID) {
        this.$store.dispatch('deleteBallot', ballotID);
      },
      deleteElections(electionID) {
        this.$store.dispatch('deleteElection', electionID)
      },
      startElection(ballotID) {
        this.$store.dispatch('startElection', ballotID)
      }
    },
    components: {}
  };
</script>


<style scoped>
</style>