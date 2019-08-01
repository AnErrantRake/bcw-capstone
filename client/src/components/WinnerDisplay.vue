<template>
  <div class="winnerDisplay">
    <h3>Winner: {{bordaEval}}</h3>
  </div>
</template>


<script>
  export default {
    name: 'winnerDisplay',
    props: ['votes'],
    data() {
      return {}
    },
    computed: {
      bordaEval() {
        let arr = this.votes;
        let winner = 'No Votes!'
        if (!arr || arr.length <= 0) {
          return winner
        }

        let voteCount = {}
        let voteSize = Object.keys(arr[0]).length

        for (let i = 0; i < arr.length; i++) {
          for (let prop in arr[i].voteValues) {
            if (voteCount.hasOwnProperty(prop)) {
              voteCount[prop] += voteSize - arr[i].voteValues[prop] + 1 // + 0 for zero-based borda count
            }
            else {
              voteCount[prop] = voteSize - arr[i].voteValues[prop] + 1
            }
          }
        }

        let winnerVotes = -1;
        for (let key in voteCount) {
          if (voteCount[key] > winnerVotes) {
            winner = key;
            winnerVotes = voteCount[key];
          }
        }
        return winner;
      }
    },
    methods: {},
    components: {}
  }
</script>


<style scoped>

</style>