<template>
  <div class="ballotCreation container-fluid">
    <div class="row m-2">
      <div class="col-6">
        <button @click="searchByLocation" class="btn btn-secondary btn-fluid p-1">
          Search by My Location
        </button>
      </div>
      <div class="col-6">
        <button @click="showAddressSearch" class="btn btn-secondary btn-fluid p-1"> Search By Custom Address
        </button>
      </div>
    </div>


    <div class="row">
      <div v-show="searching" v-if="byCoordinates" class="col-12">
        <search-coords></search-coords>
      </div>
      <div v-show="searching" v-else class="col-12">
        <search-address></search-address>
      </div>
    </div>


    <div class="row mt-2 justify-content-center">
      <form @submit.prevent="addNom">
        <div class="col-12 d-flex justify-content-center my-1">
          <input type="text" placeholder="Custom Entry" v-model='newRestaurant' required></div>
        <div class="col-12 d-flex justify-content-center  my-1">
          <button class="btn btn-success btn-sm" type="submit">Add Restaurant</button></div>
      </form>
    </div>

    <div class="row">
      <div class="col-6 ">
        <div class="row">
          <div class="col">
            <h5 v-show="searchResults.length > 0">Places:</h5>
          </div>
        </div>
        <div class="row" v-for="result in searchResults" :key="result.id" @click="moveNom(result)">
          <div class="col p-1 m-1 mr-1 card">
            <span>{{result.name}}</span><span class=""><i class="fas fa-arrow-right"></i></span>
          </div>
        </div>
      </div>

      <div class="col-6 border-left">
        <div class="row">
          <div class="col">
            <h5>Added:</h5>
          </div>
        </div>
        <div class="row" v-for="(nom, index) in newBallot.noms" @click="removeNom(index)">
          <div class="col p-1 m-1 ml-3 card">
            <span>{{nom}}</span><span><i class="far fa-times-circle"></i></span>
          </div>
        </div>
      </div>
    </div>


    <div class="row mt-2 justify-content-center">
      <form @submit.prevent="addBallot">
        <div class="col-12 d-flex justify-content-center mt-1">
          <input type="text" placeholder="Ballot Name" v-model='newBallot.name' maxlength="25" required />
        </div>
        <div class="col-12 d-flex justify-content-center my-1">
          <button class="btn btn-success" type="submit">Add Ballot</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
  import SearchByCoords from '@/components/SearchByCoords.vue'
  import SearchByAddress from '@/components/SearchByAddress.vue'

  export default {
    name: 'ballotCreation',
    data() {
      return {
        newBallot: {
          name: '',
          noms: []
        },
        searching: false,
        byCoordinates: true,
        newRestaurant: '',
        location: {
          address: '',
          latitude: 0,
          longitude: 0,
          query: ''
        }
      }
    },
    computed: {
      searchResults() {
        return this.$store.state.searchStore.searchResults;
      }
    },
    mounted() {      // get location from browser
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.location.latitude = position.coords.latitude
            this.location.longitude = position.coords.longitude
          },
          () => console.error('Unable to retrieve location from browser'));
      } else {
        console.log('Geolocation is not supported by your browser')
      }
    },
    methods: {
      addBallot() {
        if (this.newBallot.noms.length > 1) {
          this.$store.dispatch('addBallot', this.newBallot);
          this.newBallot = {
            name: '',
            noms: []
          };
          this.$store.dispatch('resetSearchResults')
          this.$router.push({ name: 'home' });
        }
        else {
          console.log("Error Creating Ballot!")
        }
      },
      addNom() {
        this.newBallot.noms.push(this.newRestaurant);
        this.newRestaurant = '';
      },
      moveNom(receivedNom) {
        let index = this.newBallot.noms.findIndex(el => el == receivedNom.name)

        if (index == -1) {
          this.newBallot.noms.push(receivedNom.name);
        }
      },
      removeNom(index) {
        this.newBallot.noms.splice(index, 1)
      },
      showCoordinateSearch() {
        // if already displaying coordinate component
        if (this.searching && this.byCoordinates) {
          // stop displaying search
          this.searching = false;
          return;
        }
        // always searching
        this.searching = true;
        this.byCoordinates = true;
      },
      showAddressSearch() {
        // if already displaying address component
        if (this.searching && !this.byCoordinates) {
          // stop displaying search
          this.searching = false;
          return;
        }
        // always searching
        this.searching = true;
        this.byCoordinates = false;
      },
      searchByLocation() {
        // convert miles to meters for radius output
        this.location.radius = Math.ceil(this.radiusInMiles * 1609.344);
        this.$store.dispatch('searchByCoords', this.location);
      }
    },
    components: {
      'search-coords': SearchByCoords,
      'search-address': SearchByAddress
    }

  }
</script>


<style scoped>
</style>