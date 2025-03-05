<template>
    <div id="#home">
      <h1 class="title">CALLISTA DEM</h1>
      <h4 class="position">TRAVEL PHOTOGRAPHER</h4>
      <nav>
        <router-link to="/about">About</router-link> 
        <router-link to="/contact">Contact</router-link> 
        <router-link to="/portfolio">Portfolio</router-link>
      </nav>
    </div>
</template>


<style scoped>

  ::v-global(body){
    background-image: url(@/assets/imgs/travel/DSCF2816.JPG); 
    background-size: cover;
  }

  #home{
    align-items: center;
    height: 100vh;
  }

  h1, h4 {
    font-weight: 200;
    text-align: center;
  }

</style>

