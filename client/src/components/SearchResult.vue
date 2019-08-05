<template>
  <div class="searchResult">
    <p>{{result.name}}</p>
    <p>{{result.vicinity}}</p>
    <p>{{result.rating}}</p>
  </div>
</template>


<script>
  export default {
    name: 'searchResult',
    props: ['result'],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>


<style scoped>

</style>