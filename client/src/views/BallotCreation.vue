<template>
  <div class="ballotCreation container">
    <div class="row">
      <router-link :to="{name: 'home'}">Home</router-link>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label @click="showCoordinateSearch" class="btn btn-secondary active">
            <input type="radio" name="search" id="option1" autocomplete="off" checked> Search By Coordinates
          </label>
          <label @click="showAddressSearch" class="btn btn-secondary">
            <input type="radio" name="search" id="option2" autocomplete="off"> Search By Address
          </label>
        </div>
      </div>
      <div class="col-6">
        <form @submit.prevent="addNom">
          <input type="text" placeholder="Restaurant Name" v-model='newRestaurant' required>
          <button class="btn btn-success" type="submit">Add Restaurant</button>
        </form>
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
    <div class="row">
      <div class="col-6">
        <h3 v-show="searchResults.length > 0">Suggestions:</h3>
        <search-result v-for="result in searchResults" :result="result" :key="result.id"></search-result>
      </div>
      <drop class="col-6" @drop="moveNom">
        <h3>Added:</h3>
        <ul>
          <li v-for="(nom, index) in newBallot.noms">{{nom}} <button class="btn btn-sm btn-warning"
              @click="removeNom(index)">Remove</button></li>
        </ul>
      </drop>
    </div>
    <div class="row justify-content-center">
      <form @submit.prevent="addBallot">
        <div class="col-12 d-flex justify-content-center">
          <input type="text" placeholder="Ballot Name" v-model='newBallot.name' required>
        </div>
        <div class="col-12 d-flex justify-content-center">
          <button class="btn btn-success" type="submit">Add Ballot</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
  import SearchResult from '@/components/SearchResult.vue'
  import SearchByCoords from '@/components/SearchByCoords.vue'
  import SearchByAddress from '@/components/SearchByAddress.vue'
  import { Drop, Drag } from 'vue-drag-drop' // needs both to compile

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
        this.$store.dispatch('resetSearchResults')
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
      }
    },
    components: {
      'search-result': SearchResult,
      'search-coords': SearchByCoords,
      'search-address': SearchByAddress,
      Drop
    }

  }
</script>


<style scoped>
</style>