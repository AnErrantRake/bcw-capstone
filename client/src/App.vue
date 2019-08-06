<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary" id="navbar">
      <router-link v-if="user._id" class="navbar-brand" :to="{name: 'home'}">
        <svg viewBox="0 0 100 100">
          <use xlink:href=".\assets\waffle.svg#Capa_1" class="logo"></use>
        </svg>
        WaFL </router-link>
      <span v-else class="navbar-brand">
        <svg viewBox="0 0 100 100">
          <use xlink:href=".\assets\waffle.svg#Capa_1" class="logo"></use>
        </svg>
        WaFL </span>
      <button v-if="user._id" class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon text-white"></span>
      </button>
      <div v-if="user._id" class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto text-right">
          <li class="nav-item active">
            <router-link :to="{name:'home'}" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" :to="{name: 'ballotCreation'}">New WaFL</router-link>
          </li>
          <li class="nav-item active">
            <a class="nav-link" style="cursor:pointer;" @click="logout">Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<script>
  export default {
    name: "App",
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      logout() {
        this.$store.dispatch("logout");
      }
    }
  };
</script>
<style scoped>
  .logo {
    fill: white;
  }
</style>