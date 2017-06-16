import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
// user
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'
import Losepwd from '@/components/user/Losepwd'
import Setpwd from '@/components/user/Setpwd'
// me
import Me from '@/components/account/Me'
import Settings from '@/components/account/Settings'
import SetNewpwd from '@/components/account/SetNewpwd'
import SetHead from '@/components/account/SetHead'
import SetNickName from '@/components/account/SetNickName'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/ele/',
  routes: [
    {
      path: '/',
      component: Me
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
      path: '/account/',
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
        },
        {
          path: 'setHead',
          component: SetHead
        },
        {
          path: 'setNickName',
          component: SetNickName
        }
      ]
    }
  ]
})
