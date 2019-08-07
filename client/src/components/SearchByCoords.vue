<template>
  <div class="search-coords">
    <form @submit.prevent="searchByLocation">
      <div class="row mt-1">
        <div class="col-5">
          <label for="locationLatitude">Latitude</label>
        </div>

        <input class="col mr-2" id="locationLatitude" type="number" placeholder="lat" v-model="location.latitude"
          min="-90" max="90" step="0.000000000000001" required>
      </div>

      <div class="row mt-1">
        <div class="col-5"><label for="locationLongitude">Longitude</label></div>
        <input class="col mr-2" id="locationLongitude" type="number" placeholder="long" v-model="location.longitude"
          min="-180" max="180" step="0.000000000000001" required>
      </div>

      <div class="row mt-1">
        <div class="col-5">
          <label for="locationQuery">Query</label></div>
        <input class="col mr-2" id="locationQuery" type="text" placeholder="optional" v-model="location.query">
      </div>
      <div class="row mt-1">
        <button class="btn btn-success" type="submit">Search Local Restaurants</button></div>


    </form>
  </div>
</template>


<script>
  export default {
    name: 'search-coords',
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
          latitude: 0,
          longitude: 0,
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
        // convert miles to meters for radius output
        this.location.radius = Math.ceil(this.radiusInMiles * 1609.344);
        this.$store.dispatch('searchByCoords', this.location);
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>