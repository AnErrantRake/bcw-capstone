<template>
  <div class="election">
    <p>Pin: {{election.pin}}</p>
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