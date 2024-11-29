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
      redirect: '/system/dashboard',
      children: [
        {
          path: '/system/dashboard',
          name: 'dashboard',
          component: () => import('../views/system/index.vue'),
        },
        {
          path: '/system/role',
          name: 'role',
          component: () => import('../views/system/index.vue'),
        },
        {
          path: '/system/permission',
          name: 'permission',
          component: () => import('../views/system/index.vue'),
        },
        {
          path: '/system/dict',
          name: 'dict',
          component: () => import('../views/system/index.vue'),
        },
      ],
    },
    {
      path: '/user',
      name: 'user',
      redirect: '/user/list',
      children: [
        {
          path: '/user/list',
          name: 'userList',
          component: () => import('../views/user/indexvue'),
        },
        {
          path: '/user/online',
          name: 'online',
          component: () => import('../views/user/indexvue'),
        },
        {
          path: '/user/vip',
          name: 'vip',
          component: () => import('../views/user/indexvue'),
        },
      ],
    },
    {
      path: '/code',
      name: 'code',
      redirect: '/code/list',
      children: [
        {
          path: '/code/list',
          name: 'codeList',
          component: () => import('../views/system/indexvue'),
        },
      ],
    },
    {
      path: '/comment',
      name: 'comment',
      redirect: '/comment/list',
      children: [
        {
          path: '/comment/list',
          name: 'commentList',
          component: () => import('../views/user/indexvue'),
        },
      ],
    },
  ],
});

export default router;
