<template>
    <header class="nav-bar-desktop">
      <router-link to="/" class="logo">CALLISTA DEM</router-link> 
      <nav>
        <router-link to="/">HOME</router-link> 
        <router-link to="/portfolio">PORTFOLIO</router-link>
        <router-link to="/about">ABOUT</router-link> 
        <router-link to="/contact">CONTACT</router-link> 
      </nav>
    </header>
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
    color: #fff5e4cc;
    }
</style>