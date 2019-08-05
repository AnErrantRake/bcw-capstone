<template>
  <div class="ballotCreation">
    <router-link :to="{name: 'home'}">Home</router-link>
    <form @submit.prevent="setLocation">
      <input type="number" placeholder="lat" v-model="location.latitude" min="-90" max="90" step="0.000000000000001"
        required>
      <input type="number" placeholder="long" v-model="location.longitude" min="-180" max="180" step="0.000000000000001"
        required>
      <input type="number" placeholder="radius" v-model="location.radius" required>
      <button class="btn btn-success" type="submit">Search Local Restaurants</button>
    </form>
    <form @submit.prevent="addBallot">
      <input type="text" placeholder="Ballot Name" v-model='newBallot.name' required>
      <ul>
        <li v-for="nom in newBallot.noms">{{nom}}</li>
      </ul>
      <form @submit.prevent="addNom">
        <input type="text" placeholder="Restaurant Name" v-model='newRestaurant' required>
        <button class="btn btn-success" type="submit">Add Restaurant</button>
      </form>
      <button class="btn btn-success" type="submit">Add Ballot</button>
    </form>
  </div>
</template>


<script>
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
    computed: {},
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
      setLocation() {
        console.log("location set!   " + this.location.latitude + "N " + this.location.longitude + " W")
      }

    },
    components: {}

  }
</script>


<style scoped>

</style>