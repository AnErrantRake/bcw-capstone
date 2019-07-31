<template>
  <div class="home">
    <h1>Logged in!</h1>
    <router-link :to="{name: 'ballotCreation'}">Create New Ballot</router-link>
    <ul>
      <li v-for="ballot in ballots">
        <span>
          {{ballot.name}}
        </span>
        <button @click="deleteBallot(ballot._id)" class="btn btn-danger" type="submit">Delete</button>
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    name: "home",
    mounted() {
      this.$store.dispatch('getBallots');
    },
    data() {
      return {};
    },
    computed: {
      ballots() {
        return this.$store.state.ballots;
      }
    },
    methods: {
      deleteBallot(ballotID) {
        this.$store.dispatch('deleteBallot', ballotID);
      }
    },
    components: {}
  };
</script>


<style scoped>
</style>