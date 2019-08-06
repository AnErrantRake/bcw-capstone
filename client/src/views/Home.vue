<template>
  <div class="home">
    <div class="modal fade" id="dateModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="dateModalLabel">{{activeBallot.name || ''}}</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body container">
            <div class="row">
              <div class="col-6">
                <h3>Restaurants</h3>
                <table>
                  <tr v-for="nom in activeBallot.noms">
                    <td>{{nom}}</td>
                  </tr>
                </table>
              </div>
              <div class="col-6">
                <h3>End Time</h3>
                <input type="time" v-model="timestamp" name id />
                <input type="date" v-model="date" name id />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button @click="startElection" class="btn btn-primary" type="submit" data-dismiss="modal">
              Start
              Election
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-12 mt-3 mb-3">
        <h1>Welcome to WFL!</h1>
      </div>
      <div class="col-12 mb-3">
        <router-link class="btn btn-primary" :to="{name: 'ballotCreation'}">Create a new WFL</router-link>
      </div>
      <div class="col-12">
        <h3 id="start">Start a WFL</h3>
      </div>
    </div>
    <ul>
      <li v-for="ballot in ballots">
        <router-link :to="{name: 'ballot', params:{ballotID: ballot._id}}">{{ballot.name}}</router-link>
        <button @click="setActiveBallot(ballot)" data-toggle="modal" data-target="#dateModal" class="btn btn-primary"
          type="submit">Start</button>
        <button @click="deleteBallot(ballot._id)" class="btn btn-danger" type="submit">Delete</button>
      </li>
    </ul>
    <h1 id="active">Elections</h1>
    <ul>
      <li v-for="election in elections">
        <router-link :to="{name: 'electionStatus', params:{electionID: election._id}}">{{election.pin}}</router-link>
        <button @click="deleteElection(election._id)" class="btn btn-danger" type="submit">Delete</button>
      </li>
    </ul>
  </div>
</template>


<script>
  import moment from "moment";

  export default {
    name: "home",
    mounted() {
      this.$store.dispatch("getBallots");
      this.$store.dispatch("getElections");
    },
    data() {
      return {
        showTimeDialog: false,
        timestamp: "",
        date: "",
        activeBallot: {}
      };
    },
    computed: {
      ballots() {
        return this.$store.state.ballots;
      },
      elections() {
        return this.$store.state.elections;
      }
    },
    methods: {
      deleteBallot(ballotID) {
        this.$store.dispatch("deleteBallot", ballotID);
      },
      deleteElection(electionID) {
        this.$store.dispatch("deleteElection", electionID);
      },
      setActiveBallot(ballot) {
        // set modal date values to 30 minutes in the future
        let endTime = moment().add(30, "minutes");
        this.date = endTime.format("YYYY-MM-DD");
        this.timestamp = endTime.format("HH:mm");

        // set active ballot to input
        this.activeBallot = ballot;
      },
      startElection() {
        let timeout = moment(
          this.timestamp + " " + this.date,
          "HH:mm YYYY-MM-DD"
        );
        let election = {
          ballotID: this.activeBallot._id,
          timeoutEpoch: timeout.valueOf()
        };

        this.$store.dispatch("startElection", election);
      }
    },
    components: {}
  };
</script>


<style scoped>
</style>