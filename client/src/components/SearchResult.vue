<template>
  <drag class="searchResult" :transfer-data="result">
    <p>{{result.name}}</p>
    <p>{{result.vicinity}}</p>
    <p>{{result.rating}}</p>
  </drag>
</template>


<script>
  import { Drop, Drag } from 'vue-drag-drop'; // needs both to compile

  export default {
    name: 'searchResult',
    props: ['result'],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {
      Drag
    }
  }
</script>


<style scoped>

</style>