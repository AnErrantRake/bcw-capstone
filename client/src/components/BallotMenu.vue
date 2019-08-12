<template>
  <div class="ballot-menu">
    <div class="start-election modal fade" id="dateModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="dateModalLabel">{{activeBallot.name || ''}}</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col">
                <h3>Restaurants</h3>
                <table>
                  <tr v-for="nom in activeBallot.noms">
                    <td>{{nom}}</td>
                  </tr>
                </table>
              </div>
              <div class="col">
                <h3>End Time</h3>
                <input type="time" v-model="timestamp" name id />
                <input type="date" v-model="date" name id />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button @click="startElection" class="btn btn-primary" type="submit" data-dismiss="modal">
              Start Election
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="border mt-3">
      <div class="row text-center">
        <div class="col my-1">
          <router-link class="btn btn-primary" :to="{name: 'ballotCreation'}">New Template</router-link>
        </div>
      </div>
      <div class="row text-center">
        <div class="col">
          <h3 id="start">WaFL Irons</h3>
        </div>
      </div>
      <div class="row m-2" v-for="ballot in ballots">
        <div :to="{name: 'ballot', params:{ballotID: ballot._id}}"
          class="col-5 col-sm-8 col-md-9 col-lg-10 text-primary" @click="setActiveBallot(ballot)" data-toggle="modal"
          data-target="#dateModal">
          <span>{{ballot.name}}</span>
        </div>
        <div class="col">
          <button @click="setActiveBallot(ballot)" data-toggle="modal" data-target="#dateModal"
            class="btn btn-primary btn-sm mx-1" type="submit">Batter</button>
          <button @click="deleteBallot(ballot._id)" class="btn btn-danger btn-sm" type="submit"><i
              class="fas fa-trash"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import moment from "moment";
  export default {
    name: 'ballot-menu',
    data() {
      return {
        showTimeDialog: false,
        timestamp: "",
        date: "",
        activeBallot: {}
      }
    },
    props: ["ballots"],
    computed: {},
    methods: {
      setActiveBallot(ballot) {
        // set modal date values to 30 minutes in the future
        let endTime = moment().add(30, "minutes");
        this.date = endTime.format("YYYY-MM-DD");
        this.timestamp = endTime.format("HH:mm");

        // set active ballot to input
        this.activeBallot = ballot;
      },
      deleteBallot(ballotID) {
        this.$store.dispatch("deleteBallot", ballotID);
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
      },
    },
    components: {}
  }
</script>

<style scoped>
</style>