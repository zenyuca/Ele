import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/register/Login'
import Losepwd from '@/components/register/Losepwd'
import Setpwd from '@/components/register/Setpwd'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/losepwd',
      name: 'Losepwd',
      component: Losepwd
    },
    {
      path: '/setpwd',
      name: 'Setpwd',
      component: Setpwd
    }
  ]
})
