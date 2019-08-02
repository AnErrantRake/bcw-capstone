<template>
  <div class="home">
    <div class="modal fade" id="dateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button @click="startElection" class="btn btn-primary" type="submit" data-dismiss="modal">Start
              Election</button>
          </div>
        </div>
      </div>
    </div>
    <h1>Logged in!</h1>
    <button @click="logout" class="btn btn-warning" type="submit">Logout</button>
    <h1>Ballots!</h1>
    <router-link class="btn btn-success" :to="{name: 'ballotCreation'}">Create New Ballot</router-link>
    <ul>
      <li v-for="ballot in ballots">
        <router-link :to="{name: 'ballot', params:{ballotID: ballot._id}}">{{ballot.name}}</router-link>
        <button @click="setCreationElectionID(ballot._id)" data-toggle="modal" data-target="#dateModal"
          class="btn btn-primary" type="submit">Start</button>
        <button @click="deleteBallot(ballot._id)" class="btn btn-danger" type="submit">Delete</button>
      </li>
    </ul>
    <h1>Elections</h1>
    <ul>
      <li v-for="election in elections">
        <router-link :to="{name: 'electionStatus', params:{electionID: election._id}}">{{election.pin}}</router-link>
        <button @click="deleteElection(election._id)" class="btn btn-danger" type="submit">Delete</button>
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    name: "home",
    mounted() {
      this.$store.dispatch('getBallots');
      this.$store.dispatch('getElections');
    },
    data() {
      return {
        showTimeDialog: false,
        endTime: '',
        timestamp: '',
        date: '',
        creationElectionID: ''
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
        this.$store.dispatch('deleteBallot', ballotID);
      },
      deleteElection(electionID) {
        this.$store.dispatch('deleteElection', electionID)
      },
      setCreationElectionID(ballotID) {
        this.creationElectionID = ballotID;
      },
      startElection() {
        this.$store.dispatch('startElection', this.creationElectionID)
      },
      logout() {
        this.$store.dispatch('logout');
      }
    },
    components: {}
  };
</script>


<style scoped>
</style>