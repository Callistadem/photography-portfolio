<template>
    <div id="portfolio">
        <p>Take a look at my photos.</p>
        <nav>
          <router-link to="/portfolio/travel">travel ></router-link> 
          <router-link to="/portfolio/portrait">portrait > </router-link> 
          <router-link to="/portfolio/real-estate">real estate > </router-link> 
          <router-link to="/portfolio/event">event ></router-link>
        </nav>
      </div>
</template>

<style scoped>
  #portfolio {
    text-align: center;
    font-size: 25px;
  }

  p {
    padding: 3rem;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-direction: column;
  }

  nav a {
    padding: 2rem;
  }

</style>