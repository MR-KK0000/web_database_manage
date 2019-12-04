import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Homepage from '@/components/Homepage'
import NotFoundPage from '@/components/NotFoundPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
      meta: { title: 'Hello' }
    },
    {
      path: '/home',
      name: 'Home',
      component: Homepage,
      meta: { title: 'home' }
    },
    {
      path: '*',
      name: 'NotFoundPage',
      component: NotFoundPage,
      meta: { title: 'Not Found' }
    }
  ]
})
