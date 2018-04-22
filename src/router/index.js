import Vue from 'vue'
import Router from 'vue-router'

import PageIndex from '@/page/index.vue'
import Signup from '@/page/signup.vue'
import PageLogin from '@/page/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageIndex',
      component: PageIndex
    },
    {
      path: '/login',
      name: 'PageLogin',
      component: PageLogin
    },
    {
      path: '/index',
      name: 'PageIndex',
      component: PageIndex
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }

  ]
})
