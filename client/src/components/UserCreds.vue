<template>
  <div class="userCreds col-12">
    <h3 :style="registering ? 'visibility:visible' : 'visibility:hidden;'" class="col-12 text-light">
      {{registering ? 'Make an Account' : '_'}}</h3>
    <form class="col-12 d-flex justify-content-center" @submit.prevent="submitCreds">
      <div class="row justify-content-center">
        <input id="inputUsername" class="col-12" type="text" pattern="[A-Za-z0-9]{1,}$" v-model="creds.username"
          placeholder="name" required />
        <input class="col-12" type="password" minlength=6 v-model="creds.password" placeholder="password" required />
        <button class="col-12 btn btn-success btn-sm" type="submit">{{registering ? 'Create' : 'Login'}}</button>
      </div>
    </form>
    <p class="col-12 text-center my-2" @click="toggleRegister">I {{registering ? 'have' : 'need'}} an account</p>
  </div>
</template>

<script>
  export default {
    name: 'userCreds',
    data() {
      return {
        registering: true,
        creds: {
          username: "",
          password: ""
        },
      }
    },
    computed: {},
    methods: {
      submitCreds() {
        if (this.registering) {
          this.$store.dispatch("register", this.creds);
        } else {
          this.$store.dispatch("login", this.creds);
        }
      },
      toggleRegister() {
        this.registering = !this.registering
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>