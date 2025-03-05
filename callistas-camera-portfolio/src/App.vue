<script setup>
</script>

<template>
  <div id="app">
    <header v-if="$route.name !== 'home'">
      <router-link to="/" class="logo">CALLISTA DEM</router-link> 
      <nav>
        <router-link to="/">Home</router-link> 
        <router-link to="/about">About</router-link> 
        <router-link to="/contact">Contact</router-link> 
        <router-link to="/portfolio">Portfolio</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>


<style scoped>
  
  @import url('https://fonts.googleapis.com/css2?family=Andada+Pro:ital,wght@0,400..840;1,400..840&display=swap');

  header {
    padding: 2rem;
  }

  nav {
    float: right;
  }

  nav a, .logo {
    margin: 0 1rem;
    text-decoration: none;
    color: #FFF5E4;
  }
  
  nav a:hover {
    text-decoration: none;
  }

</style>