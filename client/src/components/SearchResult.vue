<template>
  <drag class="searchResult card mt-1" style="width:100%" :transfer-data="result">
    <span>{{result.name}}</span>
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