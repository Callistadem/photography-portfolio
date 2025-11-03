<template>
    <div id="#home">
      <div class="title-container">
        <p class="title">CALLISTA DEM</p>
        <p class="subtitle">TRAVEL PHOTOGRAPHER</p>
      </div>
      <div class="nav">
        <ul>
          <li><router-link to="/portfolio">PORTFOLIO</router-link></li>
          <li><router-link to="/about">ABOUT</router-link></li>
          <li><router-link to="/contact">CONTACT</router-link></li>
        </ul>
      </div>
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
  #home {
    width: 100vw;
  }

  .title {
    font-weight: 100;
    padding-bottom: 0;
    margin-bottom: 0;
    white-space: nowrap;
    font-size: clamp(3rem, 10vw, 4.5rem);
    text-align: center;
  }

  .nav {
    width: 70%;
  }

  .nav ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    position: fixed;
    padding: 1rem;
    padding-left: 3rem;
    padding-right: 3rem;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
  }

  .nav li { 
    text-decoration: none;
    text-align: center;
    display: block;
    padding: 1rem;
  }

  .subtitle{
    font-weight: 100;
    padding-top: 0;
    margin-top: 0;
    white-space: nowrap;
    font-size: clamp(1.5rem, 5vw, 2rem);
    text-align: center;
  }

  .title-container {
    text-align: center;
    position: absolute;
    top: 39%;
    left: 50%;
    transform: translate(-50%, -50%);
  }


</style>

