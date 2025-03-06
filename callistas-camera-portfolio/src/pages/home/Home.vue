<template>
    <div id="#home">
      <div class="title-container">
        <p class="title">CALLISTA DEM</p>
        <p class="subtitle">TRAVEL PHOTOGRAPHER</p>
      </div>
      <nav>
        <router-link to="/portfolio">PORTFOLIO</router-link>
        <router-link to="/about">ABOUT</router-link> 
        <router-link to="/contact">CONTACT</router-link> 
      </nav>
    </div>
</template>

<script>
export default {
  // Adding image background to body (only for home page)
  mounted() {
    document.body.classList.add("home-bg");
  },
  beforeUnmount() {
    document.body.classList.remove("home-bg");
  }
};
</script>

<style scoped>

  #home{
    position: relative;
  }
  .title{
    font-size: 4.5rem;
    font-weight: 100;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .subtitle{
    font-size: 2rem;
    font-weight: 100;
    padding-top: 0;
    margin-top: 0;
  }

  .title-container {
    text-align: center;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  nav {
    position: absolute;
    bottom: 5%;
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: 0 10%;
  }
</style>

