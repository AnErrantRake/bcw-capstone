<template>
  <div class="login bg-secondary">
    <div class="card bg-primary my-3 container text-center">
      <div class="card-body row justify-content-center align-content-center">
        <user-creds v-if="displayLogin"></user-creds>
        <div v-else>
          <h3 class="col-12 text-light text-center">Join a WaFL</h3>
          <form class="col-12 d-flex justify-content-center" @submit.prevent="getElection">
            <div class="row justify-content-center">
              <input class="col-12 m-3 text-center" type="tel" v-model="pin" minlength="1" placeholder="WaFL Pin"
                required />
              <button class="col-12 btn btn-success btn-sm" type="submit">What's for Lunch?</button>
            </div>
          </form>
        </div>
        <p class="actionText text-light" @click="toggleDisplayLogin">I want to {{displayLogin ? 'join' : 'make'}} a WaFL
        </p>
      </div>
    </div>
  </div>
</template>


<script>
  import router from "@/router.js";
  import UserCreds from "@/components/UserCreds.vue"
  export default {
    name: "login",
    data() {
      return {
        displayLogin: false,
        pin: ''
      };
    },
    beforeCreate() {
      if (this.$store.state.userStore.user._id) {
        this.$router.push({ name: "home" });
      }
    },
    methods: {
      getElection() {
        this.$store.dispatch('getElectionByPin', this.pin);
      },
      toggleDisplayLogin() {
        this.displayLogin = !this.displayLogin;
      }
    },
    components: {
      'user-creds': UserCreds
    }

  };
</script>


<style scoped>
  .actionText {
    position: absolute;
    bottom: 0;
    cursor: pointer;
    margin-bottom: 1rem;
  }

  .card {
    height: 75vh;
    width: 75vw;
  }

  form button {
    font-size: 1.5rem;
  }

  input {
    font-size: 1.5rem;
  }
</style>