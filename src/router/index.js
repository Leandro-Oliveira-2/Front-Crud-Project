import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/betting',
    name: 'betting',
    component: ()=> import('../views/bettingpage.vue')
  },
  {
    path: '/deposit',
    name: 'deposit',
    component: ()=> import('../views/depositPage.vue')
  },
  {
    path: '/saque',
    name: 'saquePage',
    component: ()=> import('../views/saquePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
