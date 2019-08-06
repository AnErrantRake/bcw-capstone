<template>
  <div class="electionStatus">
    <router-link :to="{name: 'home'}">Home</router-link>
    <h1>{{election.pin}}</h1>
    <button @click="addElectionLinkToClipboard">Copy Link to Clipboard</button>
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
  import copy from 'clipboard-copy'

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