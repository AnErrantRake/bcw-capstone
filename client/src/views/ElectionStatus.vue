<template>
  <div class="electionStatus">
    <router-link :to="{name: 'home'}">Home</router-link>
    <h1>{{election.pin}}</h1>
    <h3>Winner:</h3>
    <p v-for="vote in election.votes">{{vote}}</p>
  </div>
</template>


<script>
export default {
  name: "electionStatus",
  props: ["electionID"],
  mounted() {
    this.$store.dispatch("getElectionByID", this.electionID);
    this.$store.dispatch("joinRoom", this.electionID);
  },
  data() {
    return {};
  },
  computed: {
    election() {
      return this.$store.state.activeElection;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>