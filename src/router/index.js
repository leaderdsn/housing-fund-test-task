import { createRouter, createWebHistory } from 'vue-router'

const main = [
  {
    path: '/home',
    name: 'Главная',
    component: () => import('@/views/home/AppHome.vue'),
    meta: {}
  },
  {
    path: '/home/user-card',
    name: 'Карточка пользователя',
    component: () => import('@/views/user-card/AppUserCard.vue'),
    meta: {}
  },
  {
    path: '/',
    redirect: '/home',
    meta: {}
  }
]

const catchRoutes = [
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/not-found/AppNotFound.vue'),
    meta: {}
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: [...main, ...catchRoutes],
  linkActiveClass: 'active'
})

export default router
