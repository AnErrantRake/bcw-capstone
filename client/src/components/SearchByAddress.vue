<template>
  <div class="search-address">
    <form @submit.prevent="searchByLocation">
      <div class="row mt-1">
        <label class="col-5" for="addressLine1">Line 1</label>
        <input class="col mr-2" id="addressLine1" type="text" placeholder="700 W Jefferson St" v-model="address.line1"
          required>
      </div>
      <div class="row mt-1">
        <label class="col-5" for="addressLine2">Line 2</label>
        <input class="col mr-2" id="addressLine2" type="text" placeholder="Apt, Suite, etc" v-model="address.line2">
      </div>
      <div class="row mt-1">
        <label class="col-5" for="addressCityState">City, State</label>
        <input class="col mr-2" id="addressCityState" type="text" placeholder="Boise, ID" v-model="address.citystate"
          required>
      </div>
      <div class="row mt-1">
        <label class="col-5" for="addressZip">Zip Code</label>
        <input class="col mr-2" id="addressZip" type="text" placeholder="83720" v-model="address.zip" required>
      </div>

      <div class="row mt-1">
        <label class="col-5" for="locationQuery">Query</label>
        <input class="col mr-2" id="locationQuery" type="text" placeholder="optional" v-model="location.query">
      </div>
      <div class="row mt-1">
        <div class="col"><button class="btn btn-success" type="submit">Search Local Restaurants</button></div>
      </div>

    </form>
  </div>
</template>


<script>
  export default {
    name: 'search-address',
    data() {
      return {
        radiusInMiles: 5,
        address: {
          line1: '',
          line2: '',
          citystate: '',
          zip: ''
        },
        location: {
          address: '',
          query: ''
        }
      }
    },
    mounted() {
      // get location from browser
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
    computed: {},
    methods: {
      searchByLocation() {
        // combine address into url ready string - drop line2
        let addressString = `${this.address.line1 + ' ' + this.address.citystate + ' ' + this.address.zip}`;
        addressString = addressString.split(' ').join('+');
        this.location.address = addressString;

        // convert miles to meters for radius output
        this.location.radius = Math.ceil(this.radiusInMiles * 1609.344);
        this.$store.dispatch('searchByAddress', this.location);
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>