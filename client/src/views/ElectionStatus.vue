<template>
  <div class="electionStatus">
    <router-link :to="{name: 'home'}">Home</router-link>
    <h1>{{election.pin}}</h1>
    <winner-display :votes="election.votes"></winner-display>
    <h3>Votees:</h3>
    <ul>
      <li v-for="vote in election.votes">{{vote.name}}</li>
    </ul>
  </div>
</template>


<script>
  import WinnerDisplay from '@/components/WinnerDisplay.vue'

  export default {
    name: 'electionStatus',
    props: ['electionID'],
    mounted() {
      this.$store.dispatch('getElectionByID', this.electionID)
    },
    data() {
      return {}
    },
    computed: {
      election() {
        return this.$store.state.activeElection;
      }
    },
    methods: {},
    components: {
      'winner-display': WinnerDisplay
    }
  }
</script>


<style scoped>

</style>