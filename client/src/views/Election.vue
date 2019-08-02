<template>
  <div class="election">
    <p>Pin: {{election.pin}}</p>
    <countdown-timer :endTime="election.timeoutEpoch"></countdown-timer>
    <div v-if="election.timeoutEpoch > Date.now()">
      <div v-if="hasName">
        <h3>Name: {{name}}</h3>
        <h3>Options:</h3>
        <draggable :list="election.ballotID.noms" :disabled="!enabled" class="list-group" ghost-class="ghost"
          @start="dragging = true" @end="dragging = false">
          <div class="list-group-item" v-for="candidate in election.ballotID.noms" :key="candidate">{{ candidate }}
          </div>
        </draggable>
        <div class="btn btn-primary" @click="submitVotes">Submit</div>
      </div>
      <div v-else>
        <form @submit.prevent="addName">
          <input type="text" placeholder="Your Name" v-model='name' required>
          <button class="btn btn-success" type="submit">Continue</button>
        </form>
      </div>
    </div>
    <div v-else>
      <winner-display :votes="election.votes"></winner-display>
    </div>
  </div>
</template>


<script>
  import draggable from "vuedraggable";
  import WinnerDisplay from '@/components/WinnerDisplay.vue'
  import CountdownTimer from '@/components/CountdownTimer.vue'

  export default {
    name: "election",
    props: ['electionPin'],
    data() {
      return {
        enabled: true,
        hasName: false,
        dragging: false,
        name: ''
      };
    },
    mounted() {
      this.$store.dispatch('getElectionByPin', this.electionPin)
    },
    computed: {
      election() {
        return this.$store.state.activeElection;
      },
      draggingInfo() {
        return this.dragging ? "under drag" : "";
      }
    },
    methods: {
      addName() {
        this.hasName = true;
        return;
      },
      submitVotes() {
        let output = {
          name: this.name,
          voteValues: {}
        };
        for (let i = 0; i < this.election.ballotID.noms.length; i++) {
          output.voteValues[this.election.ballotID.noms[i]] = i + 1;
        }
        this.$store.dispatch("submitVotes", output);
      }
    },
    components: {
      draggable,
      'winner-display': WinnerDisplay,
      'countdown-timer': CountdownTimer
    },
  };
</script>


<style scoped>
</style>