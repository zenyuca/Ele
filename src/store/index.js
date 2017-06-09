import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: {},
    findpwd: {}
  },
  mutations: {
    getAccount: state => state.account,
    setAccount: (state, account) => {
      state.account = account
    },
    getFindpwd: state => state.findpwd,
    setFindpwd: (state, findpwd) => {
      state.findpwd = findpwd
    }
  }
})
