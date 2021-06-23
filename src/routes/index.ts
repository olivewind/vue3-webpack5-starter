import { createRouter, createWebHashHistory } from 'vue-router';
import Homepage from './homepage/index.vue';
import About from './about/index.vue';

const routes = [
  { path: '/', component: Homepage },
  { path: '/about', component: About }
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes
});
