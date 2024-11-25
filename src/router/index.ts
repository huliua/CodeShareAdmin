import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index.vue'),
    },
    {
      path: '/system',
      name: 'system',
      component: () => import('../views/system/index.vue'),
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/user/index.vue'),
    },
  ],
});

export default router;
