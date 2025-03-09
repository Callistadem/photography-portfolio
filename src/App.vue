
<template>
  <div id="app">
    <div v-if="$route.name !== 'home'">
      <navBarDesktop />
    </div>
    <router-view />
  </div>
</template>

<script setup>
  import navBarDesktop from '@/components/nav-bar-desktop.vue';
</script>