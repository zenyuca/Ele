// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { ACCOUNT_LSKEY, localStorage } from './config'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import MintUI from 'mint-ui'
import VueLocalStorage from 'vue-localstorage'
import VueScroller from 'vue-scroller'

import 'element-ui/lib/theme-default/index.css'
import 'mint-ui/lib/style.css'
import '@/assets/stylus/reset.css'

Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.use(VueLocalStorage)
Vue.use(VueScroller)

Vue.config.productionTip = false

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  store,
  localStorage,
  template: '<App/>',
  components: { App }
})

// 登录拦截（当手动更改url时）
Vue.nextTick(() => {
  const account = Vue.localStorage.get(ACCOUNT_LSKEY)
  if (account) {
    if (!account.hasOwnProperty('loginToken')) {
      vm.$router.replace('/user/login')
    } else {
      let path = vm.$route.path
      if (/^\/user\/.*$/.test(path) || path === '/') {
        vm.$router.replace('/me')
      }
    }
  }
})

// 登录拦截（当点击页面跳转时）
router.beforeEach((to, from, next) => {
  const account = Vue.localStorage.get(ACCOUNT_LSKEY)
  if (account) {
    if (!account.hasOwnProperty('loginToken')) {
      if (!/^\/user\/.*$/.test(to.path)) {
        next('/user/login')
        return
      }
    } else {
      if (/^\/user\/.*$/.test(to.path) || to.path === '/') {
        next(from.path)
        return
      }
    }
  }
  next()
})
