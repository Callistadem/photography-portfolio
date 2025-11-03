<template>
  <header class="nav-bar">
    <router-link to="/" class="logo">CALLISTA DEM</router-link>

    <!-- Hamburger icon (only visible on mobile) -->
    <div class="menu-icon" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- Navigation links -->
    <nav :class="{ open: isMenuOpen }">
      <router-link to="/" @click="closeMenu">HOME</router-link>
      <router-link to="/portfolio" @click="closeMenu">PORTFOLIO</router-link>
      <router-link to="/about" @click="closeMenu">ABOUT</router-link>
      <router-link to="/contact" @click="closeMenu">CONTACT</router-link>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)
const closeMenu = () => (isMenuOpen.value = false)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Andada+Pro:ital,wght@0,400..840;1,400..840&display=swap');

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  color: #FFF5E4;
  font-family: 'Andada Pro', serif;
  position: sticky;
  top: 0;
  z-index: 10;
}

/* Logo */
.logo {
  text-decoration: none;
  color: #FFF5E4;
  font-weight: 700;
  letter-spacing: 2px;
}

/* Navigation links (desktop) */
nav {
  display: flex;
  gap: 2rem;
}

nav a {
  text-decoration: none;
  color: #FFF5E4;
  transition: color 0.3s;
}

nav a:hover {
  color: #fff5e4cc;
}

/* Hamburger icon (hidden on desktop) */
.menu-icon {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 6px;
}

.menu-icon span {
  width: 25px;
  height: 3px;
  background-color: #FFF5E4;
  border-radius: 2px;
}

/* --- Responsive --- */
@media (max-width: 768px) {
  nav {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 3rem;
    width: 100%;
    background-color: #8C9592;
    padding: 1rem 0;
    text-align: right;
    gap: 1rem;
  }

  nav.open {
    display: flex;
  }

  .menu-icon {
    display: flex;
  }
}
</style>
