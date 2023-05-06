import { createRouter, createWebHistory } from 'vue-router';

const HomePage = () => import('@/pages/HomePage.vue');

const routes = [{ path: '/', component: HomePage, name: 'HomePage' }];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
});

export default router;
