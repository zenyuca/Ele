// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { ACCOUNT_LSKEY, TOKEN_LSKEY, localStorage } from './config'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import MintUI from 'mint-ui'
import VueLocalStorage from 'vue-localstorage'
import VueScroller from 'vue-scroller'
import Base64 from 'js-base64'

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
new Vue({
  el: '#app',
  router,
  store,
  localStorage,
  template: '<App/>',
  components: { App },
  created () {
    // µÇÂ¼À¹½Ø £¨Ë¢ÐÂÒ³ÃæÊ±£©
    let account = this.$localStorage.get(ACCOUNT_LSKEY)
    if (account) {
      account = Base64.Base64.decode(account)
      this.$store.state.account = JSON.parse(account)
    }
    const token = this.$localStorage.get(TOKEN_LSKEY)
    if (token) {
      if (this.toUser()) {
        this.$reouter.replace('/account')
      }
    } else {
      if (!this.toUser()) {
        this.$router.replace('/user/login')
      }
    }
  },
  methods: {
    toUser () {
      let path = this.$route.path
      if (path.length > 1) {
        path = path.slice(0, path.lastIndexOf('/'))
      }
      return path === '/user'
    }
  }
})

// µÇÂ¼À¹½Ø£¬£¨Â·ÓÉÌø×ªÊ±£©
router.beforeEach((to, from, next) => {
  const token = Vue.localStorage.get(TOKEN_LSKEY)
  if (token) {
    if (toUser(to)) {
      next('/account')
      return
    }
  } else {
    if (!toUser(to)) {
      next('/user/login')
      return
    }
  }
  next()
})

function toUser (to) {
  let path = to.matched[0].path
  return path === '/user'
}
