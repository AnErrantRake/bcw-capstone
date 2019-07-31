<template>
  <div class="home">
    <h1>Logged in!</h1>
    <router-link :to="{name: 'ballotCreation'}">Create New Board</router-link>
    <ul>
      <li v-for="ballot in ballots">{{ballot.name}}</li>
    </ul>
  </div>
</template>


<script>
  export default {
    name: "home",
    data() {
      return {};
    },
    computed: {
      ballots() {
        return this.$store.ballots;
      }
    },
    methods: {},
    components: {}
  };
</script>


<style scoped>
</style>