import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: {},
    order: {}
  },
  mutations: {
    getAccount: state => state.account,
    setAccount: (state, account) => {
      state.account = account
    },
    getOrder: state => state.order,
    setOrder: (state, order) => {
      state.order = order
    }
  }
})
