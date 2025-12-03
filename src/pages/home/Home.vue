<template>
    <div id="#home">
      <div class="title-container">
        <p class="title">CALLISTA DEM</p>
        <p class="subtitle">PHOTOGRAPHER</p>
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
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .nav ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around; 
    padding: 1rem 2rem;
    margin: 0;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .nav li { 
    text-decoration: none;
    text-align: center;
    display: block;
    padding: 2rem 1rem;
  }

  .nav a {
    color: white; 
    text-decoration: none;
    white-space: nowrap;
  }

  /* Mobile adjustments */
  @media (max-width: 768px) {
    .nav ul {
      padding: 1rem;
      justify-content: space-between;
    }
    
    .nav li {
      padding: 0.5rem;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    .nav ul {
      padding: 0.75rem 0.5rem;
    }
    
    .nav li {
      padding: 0.25rem;
      font-size: 0.8rem;
    }
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

