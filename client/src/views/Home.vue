<template>
  <div class="home container">
    <ballot-menu :ballots="ballots"></ballot-menu>
    <election-menu :elections="elections"></election-menu>
  </div>
</template>

<script>
  import BallotMenu from "../components/BallotMenu.vue"
  import ElectionMenu from "../components/ElectionMenu.vue"

  export default {
    name: "home",
    mounted() {
      this.$store.dispatch("getBallots");
      this.$store.dispatch("getElections");
    },
    data() {
      return {
      };
    },
    computed: {
      ballots() {
        return this.$store.state.ballotStore.ballots;
      },
      elections() {
        return this.$store.state.electionStore.elections;
      }
    },
    methods: {
    },
    components: {
      'ballot-menu': BallotMenu,
      'election-menu': ElectionMenu,
    }
  };
</script>


<style scoped>
</style>