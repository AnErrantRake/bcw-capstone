<template>
  <div class="search-coords">
    <form @submit.prevent="searchByLocation">
      <label for="locationLatitude">Latitude</label>
      <input id="locationLatitude" type="number" placeholder="lat" v-model="location.latitude" min="-90" max="90"
        step="0.000000000000001" required>
      <label for="locationLongitude">Longitude</label>
      <input id="locationLongitude" type="number" placeholder="long" v-model="location.longitude" min="-180" max="180"
        step="0.000000000000001" required>
      <label for="locationRadius">Radius (mi)</label>
      <input id="locationRadius" type="number" placeholder="radius" v-model="radiusInMiles" required>
      <label for="locationQuery">Query</label>
      <input id="locationQuery" type="text" placeholder="optional" v-model="location.query">
      <button class="btn btn-success" type="submit">Search Local Restaurants</button>
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