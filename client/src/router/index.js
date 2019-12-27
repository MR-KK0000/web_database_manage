import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFoundPage from '@/components/NotFoundPage'
import Dashboard from '@/components/Dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: () => import('../components/HomePage.vue'),
    meta: { title: 'MongoDB Manage'}
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { title: 'dashboard'}
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { title: 'home'}
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { title: 'about'}
  },
  {
    path: '*',
    name: 'NotFoundPage',
    component: NotFoundPage,
    meta: { title: 'NotFoundPage'}
  }
]

const router = new VueRouter({
  routes
})

export default router
