<template>
  <div class="vote">
    <div class="row">
      <div class="col-6 m-2">
        <h3>Vote {{ draggingInfo }}</h3>

        <draggable
          :list="election.ballotID.noms"
          :disabled="!enabled"
          class="list-group"
          ghost-class="ghost"
          :move="checkMove"
          @start="dragging = true"
          @end="dragging = false"
        >
          <div
            class="list-group-item"
            v-for="candidate in election.ballotID.noms"
            :key="candidate"
          >{{ candidate }}</div>
        </draggable>
      </div>
      <div class="btn btn-primary" @click="submitVotes">Submit</div>
    </div>
  </div>
</template>


<script>
import draggable from "../../node_modules/vuedraggable";
let id = 1;
export default {
  name: "vote",

  order: 0,
  components: {
    draggable
  },
  props: ["electionID"],
  data() {
    return {
      enabled: true,
      ballot: [
        { name: "John", id: 0 },
        { name: "Joao", id: 1 },
        { name: "Jean", id: 2 }
      ],
      dragging: false
    };
  },
  mounted() {
    this.$store.dispatch("getActiveElection", this.electionID);
  },
  computed: {
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    },
    election() {
      //   this.ballot = this.$store.state.activeElection.ballotID.noms;
      return this.$store.state.activeElection;
    }
  },
  methods: {
    checkMove: function(e) {
      window.console.log("Future index: " + e.draggedContext.futureIndex);
    },
    submitVotes() {
      let output = {
        name: "test",
        voteValues: {}
      };
      for (let i = 0; i < this.election.ballotID.noms.length; i++) {
        output.voteValues[this.election.ballotID.noms[i]] = i + 1;
      }
      this.$store.dispatch("submitVotes", output);
    }
  }
};
</script>



<style scoped >
.buttons {
  margin-top: 35px;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>