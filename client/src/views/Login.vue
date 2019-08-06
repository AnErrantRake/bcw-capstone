<template>
  <div class="login mt-4">
    <h3>Joining a WaFL?</h3>
    <form @submit.prevent="getElection">
      <input type="text" v-model="pin" placeholder="pin" />
      <button class="btn btn-success  btn-sm mb-1 mx-1" type="submit">What's for Lunch?</button>
    </form>
    <br>
    <h3>Log In:</h3>
    <form v-if="loginForm" @submit.prevent="loginUser">
      <input type="text" v-model="creds.username" placeholder="Enter your name" />
      <input type="password" v-model="creds.password" placeholder="password" />
      <button class="btn btn-success btn-sm mb-1 mx-1" type="submit">Login</button>
    </form>
    <form v-else @submit.prevent="register">
      <input type="text" v-model="newUser.username" placeholder="name" />
      <input type="password" v-model="newUser.password" placeholder="password" />
      <button class="btn btn-warning  btn-sm mb-1 mx-1" type="submit">Create Account</button>
    </form>
    <div class="action" @click="loginForm = !loginForm">
      <p v-if="loginForm">No account? Click <span class="text-primary">here</span> to Register</p>
      <p v-else>Already have an account? Click <span class="text-primary">here</span> to Login</p>
    </div>
  </div>
</template>


<script>
  import router from "@/router.js";
  export default {
    name: "login",
    data() {
      return {
        loginForm: true,
        creds: {
          username: "",
          password: ""
        },
        newUser: {
          username: "",
          password: ""
        },
        pin: ''
      };
    },
    beforeCreate() {
      if (this.$store.state.user._id) {
        this.$router.push({ name: "home" });
      }
    },
    methods: {
      register() {
        this.$store.dispatch("register", this.newUser);
      },
      loginUser() {
        this.$store.dispatch("login", this.creds);
      },
      getElection() {
        this.$store.dispatch('getElectionByPin', this.pin);
      }
    }
  };
</script>


<style scoped>
  action {
    cursor: pointer;
  }
</style>