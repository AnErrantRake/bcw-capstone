<template>
  <div class="election container-fluid">
    <div class="row mt-3">
      <div class="col">
        <h2>Pin: {{election.pin}}</h2>
      </div>
    </div>

    <div class="row my-3">
      <div class="col">
        <countdown-timer :endTime="election.timeoutEpoch"></countdown-timer>
      </div>
    </div>

    <div v-if="election.timeoutEpoch < Date.now()">
      <p>Voting closed! Winner: <winner-display :votes="election.votes"></winner-display>
      </p>
    </div>

    <div v-else>
      <div v-if="voted">
        <!-- this region for the voter status page -->
        <p>Number of votes: {{ election.votes.length }} </p>
        <p>Current Winner: <winner-display :votes="election.votes"></winner-display>
        </p>
      </div>

      <form v-else @submit.prevent="submitVotes">
        <h4>Enter Name:</h4>
        <input type="text" placeholder="Your Name" v-model='name' required>
        <h4>Ranked Choices:</h4>
        <draggable :list="election.ballotID.noms" :disabled="!enabled" class="list-group" ghost-class="ghost"
          @start="dragging = true" @end="dragging = false">
          <div class="list-group-item" v-for="candidate in election.ballotID.noms" :key="candidate">{{ candidate }}
          </div>
        </draggable>
        <button class="btn btn-success" type="submit">Submit</button>
      </form>
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
        name: '',
        voted: false
      };
    },
    mounted() {
      this.$store.dispatch('getElectionByPin', this.electionPin);
      this.$store.dispatch("joinRoom", this.election._id);

      if (this.user.username) {
        this.name = this.user.username
        this.hasName = true
      }
    },
    computed: {
      election() {
        return this.$store.state.activeElection;
      },
      draggingInfo() {
        return this.dragging ? "under drag" : "";
      },
      user() {
        return this.$store.state.userStore.user;
      }
    },
    methods: {
      submitVotes() {
        let output = {
          name: this.name,
          voteValues: {}
        };
        for (let i = 0; i < this.election.ballotID.noms.length; i++) {
          output.voteValues[this.election.ballotID.noms[i]] = i + 1;
        }
        this.$store.dispatch("submitVotes", output);
        this.voted = true
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