<template>
  <div class="electionStatus">
    <router-link :to="{name: 'home'}">Home</router-link>
    <h1>{{election.pin}}</h1>
    <countdown-timer :endTime="election.timeoutEpoch"></countdown-timer>
    <p>Winner: <winner-display :votes="election.votes"></winner-display>
    </p>
    <h3>Votees:</h3>
    <ul>
      <li v-for="vote in election.votes">{{vote.name}}</li>
    </ul>
  </div>
</template>


<script>
  import WinnerDisplay from '@/components/WinnerDisplay.vue'
  import CountdownTimer from '@/components/CountdownTimer.vue'

  export default {
    name: 'electionStatus',
    props: ['electionID'],
    mounted() {
      this.$store.dispatch('getElectionByID', this.electionID)
      this.$store.dispatch("joinRoom", this.electionID);
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
      'winner-display': WinnerDisplay,
      'countdown-timer': CountdownTimer
    }
  };
</script>


<style scoped>
</style>