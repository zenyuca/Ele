// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { localStorage } from './config'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import MintUI from 'mint-ui'
import VueLocalStorage from 'vue-localstorage'

import 'element-ui/lib/theme-default/index.css'
import 'mint-ui/lib/style.css'

Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.use(VueLocalStorage)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  localStorage,
  template: '<App/>',
  components: { App }
})
