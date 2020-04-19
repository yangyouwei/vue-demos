import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Login from '../view/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
