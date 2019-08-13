<template>
  <div class="electionStatus container">
    <div class="row mt-3">
      <div class="col text-center">
        <h1>WaFL Pin: {{election.pin}}</h1>
      </div>
    </div>
    <div class="row my-2">
      <div class="col">
        <countdown-timer :endTime="election.timeoutEpoch"></countdown-timer>
      </div>
    </div>
    <div class="row my-2">
      <div class="col text-center">
        <h2>What's for Lunch: <winner-display :votes="election.votes"></winner-display>
        </h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h3>Votees:</h3>
      </div>
    </div>
    <div class="row" v-for="vote in election.votes">
      <div class="col"><span>{{vote.name}}</span></div>
    </div>

  </div>
</template>


<script>
  import WinnerDisplay from '@/components/WinnerDisplay.vue'
  import CountdownTimer from '@/components/CountdownTimer.vue'
  import copy from 'clipboard-copy'

  export default {
    name: 'electionStatus',
    props: ['electionID'],
    mounted() {
      this.$store.dispatch('getElectionByID', this.electionID)

    },
    beforeDestroy() {
      this.$store.dispatch("leaveRoom", this.electionID)
    },
    data() {
      return {}
    },
    computed: {
      election() {
        return this.$store.state.electionStore.activeElection;
      }
    },
    methods: {
      addElectionLinkToClipboard() {
        console.log(this.$router.resolve(location))
        const a = document.createElement('a');
        a.href = this.$router.resolve(location).href;
        console.log(a.href);
        if (process.env.NODE_ENV === 'development') {
          copy(`${location.hostname}:${location.port}/#/election/${this.election.pin}`)
        } else {
          copy(`https://${location.hostname}/#/election/${this.election.pin}`)
        }
      }
    },
    components: {
      'winner-display': WinnerDisplay,
      'countdown-timer': CountdownTimer
    }
  };
</script>


<style scoped>
</style>