<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary" id="navbar">
      <a class="navbar-brand text-center" href="/">
        <i class="fas fa-hashtag"></i> WaFL - What's for Lunch?
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon text-white"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto text-right">
          <li class="nav-item active">
            <a class="nav-link" href="/#/ballot/new">New WaFL</a>
          </li>
          <li class="nav-item active">
            <a href="#" class="nav-link">Start a WaFL</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link">Active WaFLs</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" style="cursor:pointer;" @click="logout">Logout</a>
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
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style scoped>
</style>