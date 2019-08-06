<template>
  <div class="countdown-timer">
    <div v-if="timeLeft">
      <h3>{{countdown}} remaining</h3>
      <h4>(ends at {{readableTime}})</h4>
    </div>
    <div v-else>
      <h3>Voting has closed</h3>
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
      moment.relativeTimeThreshold('ss', 0);   // minimum # seconds for second display
      moment.relativeTimeThreshold('s', 120);  // minimum # seconds for minute display
      moment.relativeTimeThreshold('m', 50);   // minimum # minutes for hour display
      moment.relativeTimeThreshold('h', 18);   // minimum # hours for day display
      moment.relativeTimeThreshold('d', 22);   // minimum # days for month display
      moment.relativeTimeThreshold('M', 9);    // minimum # months for year display

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