<template>
    <div>
      <h1>My Portfolio</h1>
      <nav>
        <router-link to="/portfolio/travel">Travel</router-link> |
        <router-link to="/portfolio/portrait">Portrait</router-link> |
        <router-link to="/portfolio/real-estate">Real Estate</router-link> |
        <router-link to="/portfolio/event">Event</router-link>
      </nav>
      <router-view /> <!-- This renders the selected portfolio category -->
    </div>
  </template>