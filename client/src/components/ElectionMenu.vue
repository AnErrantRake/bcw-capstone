<template>
  <div class="election-menu">
    <div class="border  mt-3">
      <div class="row">
        <div class="col">
          <h3 class="text-center">Hot WaFLs</h3>
        </div>
      </div>
      <div class="row m-2" v-for="election in elections" v-if="isActive(election)">
        <router-link :to="{name: 'electionStatus', params:{electionID: election._id}}"
          class="col-5 col-sm-8 col-md-9 col-lg-10">{{election.pin}} - {{ getTemplateNameByElection(election) }}
        </router-link>
        <div class="col">
          <button @click="getElection(election.pin)" class="btn btn-primary btn-sm mx-1" type="submit">Vote</button>
          <button @click="deleteElection(election._id)" class="btn btn-danger btn-sm" type="submit"><i
              class="fas fa-trash"></i></button>
        </div>
      </div>
    </div>
    <div class="border my-3">
      <div class="row">
        <div class="col">
          <h3 id="active" class="text-center">Stale WaFLs</h3>
        </div>
      </div>
      <div class="row m-2" v-for="election in elections" v-if="!isActive(election)">
        <router-link :to="{name: 'electionStatus', params:{electionID: election._id}}"
          class="col-5 col-sm-8 col-md-9 col-lg-10">{{election.pin}} - <winner-display :votes="election.votes">
          </winner-display>
        </router-link>
        <div class="col">
          <button @click="deleteElection(election._id)" class="btn btn-danger btn-sm" type="submit"><i
              class="fas fa-trash"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import moment from "moment";
  import WinnerDisplay from "../components/WinnerDisplay.vue"

  export default {
    name: 'election-menu',
    data() {
      return {}
    },
    props: ['elections'],
    computed: {},
    methods: {
      isActive(election) {
        return (moment() <= election.timeoutEpoch)
      },
      deleteElection(electionID) {
        this.$store.dispatch("deleteElection", electionID);
      },
      getElection(pin) {
        this.$store.dispatch('getElectionByPin', pin);
      },

      getTemplateNameByElection(election) {

        let ballot = this.$store.state.ballots.find(el => el._id == election.ballotID)
        if (ballot)
          return ballot.name
        else
          return ""
      }
    },
    components: {
      'winner-display': WinnerDisplay,
    }
  }
</script>

<style scoped>
</style>