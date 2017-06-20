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
// power
import PowerCount from '@/components/power/PowerCount'
import PowerPay from '@/components/power/PowerPay'
import PayResult from '@/components/power/PayResult'
import OrderDetail from '@/components/power/OrderDetail'
// record
import BuyPowerDetail from '@/components/record/BuyPowerDetail'

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
    },
    {
      path: '/power/',
      component: App,
      children: [
        {
          path: 'powerCount',
          component: PowerCount
        },
        {
          path: 'powerPay',
          component: PowerPay
        },
        {
          path: 'payResult',
          component: PayResult
        },
        {
          path: 'orderDetail',
          component: OrderDetail
        }
      ]
    },
    {
      path: '/record/',
      component: App,
      children: [
        {
          path: 'buyPowerDetail',
          component: BuyPowerDetail
        }
      ]
    }
  ]
})
