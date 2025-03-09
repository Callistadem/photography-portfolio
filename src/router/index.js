import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/home/Home.vue';
import About from '../pages/about/About.vue';
import Contact from '../pages/contact/Contact.vue';

import Portfolio from '../pages/portfolio/Portfolio.vue';
import Travel from '../pages/portfolio/Travel.vue';
import Portrait from '../pages/portfolio/Portrait.vue';
import RealEstate from '../pages/portfolio/RealEstate.vue';
import Event from '../pages/portfolio/Event.vue';

const routes = [
    { path: '/', name: "home", component: Home },
    { path: '/about', name: "about", component: About },
    { path: '/contact', name: "contact", component: Contact },
    { path: '/portfolio', name: "portfolio", component: Portfolio },

    { path: '/portfolio/travel', component: Travel },
    { path: '/portfolio/portrait', component: Portrait },
    { path: '/portfolio/real-estate', component: RealEstate },
    { path: '/portfolio/event', component: Event }
    ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;