<template>
  <div class="ballot">
    <router-link :to="{name: 'home'}">Home</router-link>
    <h1>{{ballot.name}}</h1>
    <p v-for="nom in ballot.noms">{{nom}}</p>
  </div>
</template>


<script>
  export default {
    name: 'ballot',
    props: ['ballotID'],
    mounted() {
      this.$store.dispatch('getBallotByID', this.ballotID)
    },
    data() {
      return {}
    },
    computed: {
      ballot() {
        return this.$store.state.activeBallot
      }
    },
    methods: {},
    components: {}
  }
</script>


<style scoped>

</style>