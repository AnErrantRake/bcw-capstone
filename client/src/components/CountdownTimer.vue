<template>
  <div class="countdown-timer">
    <div v-if="timeLeft">
      <h2>{{countdown}} remaining</h2>
      <h3>(ends at {{readableTime}})</h3>
    </div>
    <div v-else>
      <h2>Voting has closed</h2>
    </div>
  </div>
</template>


<script>
  import moment from 'moment'

  export default {
    name: 'countdown-timer',
    props: ['endTime'],
    data() {
      return {
        countdown: 0,
        timer: null,
        timeLeft: true
      }
    },
    created() {
      moment.relativeTimeThreshold('ss', 0); // min seconds for a second
      moment.relativeTimeThreshold('s', 120); // min seconds for a minute
      moment.relativeTimeThreshold('m', 50); // min minutes for an hour
      moment.relativeTimeThreshold('h', 18); // min hours for a day
      moment.relativeTimeThreshold('d', 22); // min days for a month
      moment.relativeTimeThreshold('M', 9); // min months for a year

      this.updateCountdown(); // immediate update
      this.timer = setInterval(this.updateCountdown, 1000) // keep countdown updated
    },
    beforeDestroy() {
      clearInterval(this.timer);
    },
    computed: {
      readableTime() {
        return moment(this.endTime).format("h:mm a");
      }
    },
    methods: {
      updateCountdown() {
        let duration = this.endTime - Date.now();
        this.timeLeft = duration > 0;
        this.countdown = moment.duration(duration).humanize();
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>