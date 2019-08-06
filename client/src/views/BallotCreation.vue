<template>
  <div class="ballotCreation container-fluid">
    <div class="row m-2">
      <div class="col-6">
        <button @click="showCoordinateSearch" class="btn btn-secondary btn-fluid p-1">
          Search By Coordinates
        </button>
      </div>
      <div class="col-6">
        <button @click="showAddressSearch" class="btn btn-secondary btn-fluid p-1"> Search By Address
        </button>
      </div>
    </div>


    <div class="row ">
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
            <h5 v-show="searchResults.length > 0">Suggestions:</h5>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <search-result v-for="result in searchResults" :result="result" :key="result.id"></search-result>
          </div>
        </div>
      </div>

      <drop class="col-6 " @drop="moveNom">
        <div class="row">
          <div class="col">
            <h5>Added:</h5>
          </div>
        </div>
        <div class="row my-1" v-for="(nom, index) in newBallot.noms">

          <div class="col-sm-8 col-8 p-1 card">
            {{nom}}
          </div>
          <div class="col-4"><button class="btn btn-sm btn-warning" @click="removeNom(index)">
              <i class="fas fa-trash"></i>
            </button></div>


        </div>
      </drop>
    </div>


    <div class="row mt-2 justify-content-center">
      <form @submit.prevent="addBallot">
        <div class="col-12 d-flex justify-content-center mt-1">
          <input type="text" placeholder="Ballot Name" v-model='newBallot.name' required>
        </div>
        <div class="col-12 d-flex justify-content-center my-1">
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