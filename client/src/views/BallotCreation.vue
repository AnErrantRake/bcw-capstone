<template>
  <div class="ballotCreation container">
    <div class="row">

      <router-link :to="{name: 'home'}">Home</router-link>
    </div>
    <div class="row">

      <form @submit.prevent="searchByLocation">
        <label for="locationLatitude">Latitude</label>
        <input id="locationLatitude" type="number" placeholder="lat" v-model="location.latitude" min="-90" max="90"
          step="0.000000000000001" required>
        <label for="locationLongitude">Longitude</label>
        <input id="locationLongitude" type="number" placeholder="long" v-model="location.longitude" min="-180" max="180"
          step="0.000000000000001" required>
        <label for="locationRadius">Radius</label>
        <input id="locationRadius" type="number" placeholder="radius" v-model="location.radius" required>
        <label for="locationQuery">Query</label>
        <input id="locationQuery" type="text" placeholder="optional" v-model="location.query">
        <button class="btn btn-success" type="submit">Search Local Restaurants</button>
      </form>
    </div>
    <div class="row">
      <div class="col">
        <form @submit.prevent="addNom">
          <input type="text" placeholder="Restaurant Name" v-model='newRestaurant' required>
          <button class="btn btn-success" type="submit">Add Restaurant</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <h3>Suggestions:</h3>
        <search-result v-for="result in searchResults" :result="result" :key="result.id"></search-result>
      </div>
      <drop class="col-6" @drop="moveNom">
        <h3>Added:</h3>
        <ul>
          <li v-for="nom in newBallot.noms">{{nom}} <button class="btn btn-sm btn-warning"
              @click="removeNom(nom)">Remove</button></li>
        </ul>
      </drop>
    </div>
    <form @submit.prevent="addBallot">
      <input type="text" placeholder="Ballot Name" v-model='newBallot.name' required>
      <button class="btn btn-success" type="submit">Add Ballot</button>
    </form>
  </div>
</template>


<script>
  import SearchResult from '@/components/SearchResult.vue'
  import { Drop, Drag } from 'vue-drag-drop' // needs both to compile

  export default {
    name: 'ballotCreation',
    data() {
      return {
        newBallot: {
          name: '',
          noms: []
        },
        newRestaurant: '',
        location: {
          latitude: 0,
          longitude: 0,
          radius: 5000,
          query: ''
        }
      }
    },
    mounted() {
      // get location from browser
      if (navigator.geolocation) {
        console.log('Locating…')
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
    computed: {
      searchResults() {
        return this.$store.state.searchResults;
      }
    },
    methods: {
      addBallot() {
        this.$store.dispatch('addBallot', this.newBallot);
        this.newBallot = {
          name: '',
          noms: []
        };
        this.$router.push({ name: 'home' });
      },
      addNom() {
        this.newBallot.noms.push(this.newRestaurant);
        this.newRestaurant = '';
      },
      moveNom(receivedNom) {
        this.newBallot.noms.push(receivedNom.name);
        this.$store.dispatch('removeResult', receivedNom.id);
      },
      searchByLocation() {
        console.log("location set!   " + this.location.latitude + "N " + this.location.longitude + " W")
        this.$store.dispatch('searchByLocation', this.location);
      },
      removeNom(nom) {
        let index = this.newBallot.noms.findIndex(el => el == nom)
        if (index !== -1) {
          this.newBallot.noms.splice(index, 1)
        }
      }

    },
    components: {
      'search-result': SearchResult,
      Drop
    }

  }
</script>


<style scoped>

</style>