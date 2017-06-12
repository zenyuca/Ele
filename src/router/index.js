import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
// user
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'
import Losepwd from '@/components/user/Losepwd'
import Setpwd from '@/components/user/Setpwd'
// me
import Me from '@/components/me/Me'
import Settings from '@/components/me/Settings'
import SetNewpwd from '@/components/me/SetNewpwd'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/ele/',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/user/',
      component: App,
      children: [
        {
          path: 'login',
          component: Login
        },
        {
          path: 'register',
          component: Register
        },
        {
          path: 'losepwd',
          component: Losepwd
        },
        {
          path: 'setpwd',
          component: Setpwd
        }
      ]
    },
    {
      path: '/me/',
      component: App,
      children: [
        {
          path: '',
          component: Me
        },
        {
          path: 'settings',
          component: Settings
        },
        {
          path: 'setNewpwd',
          component: SetNewpwd
        }
      ]
    }
  ]
})
