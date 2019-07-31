<template>
  <div class="ballotCreation">
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
        newRestaurant: ''
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
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>