import { ACCOUNT_LSKEY, TOKEN_LSKEY } from '@/config'
import Base64 from 'js-base64'
import { Toast } from 'mint-ui'

function storeAccount (vm) {
  vm.$store.state.account = getAccount(vm)
}

function removeAccount (vm) {
  vm.$localStorage.remove(ACCOUNT_LSKEY)
}

function setAccount (vm, account) {
  vm.$localStorage.set(ACCOUNT_LSKEY, Base64.Base64.encode(JSON.stringify(account)))
}

function getAccount (vm) {
  let account = vm.$localStorage.get(ACCOUNT_LSKEY)
  if (account) {
    account = Base64.Base64.decode(account)
    return JSON.parse(account)
  }
}

function isLogin (vm) {
  let token = getToken(vm)
  if (token) {
    return true
  }
  return false
}

function getToken (vm) {
  return vm.$localStorage.get(TOKEN_LSKEY)
}

function setToken (vm, token) {
  vm.$localStorage.set(TOKEN_LSKEY, token)
}

function removeToken (vm) {
  vm.$localStorage.remove(TOKEN_LSKEY)
}

function reqTimeOut () {
  Toast({
    message: '请求超时',
    position: 'bottom',
    duration: 1500
  })
}

export default {
  getAccount,
  setAccount,
  storeAccount,
  removeAccount,
  isLogin,
  setToken,
  getToken,
  removeToken,
  reqTimeOut
}

export {
  getAccount,
  setAccount,
  storeAccount,
  removeAccount,
  isLogin,
  setToken,
  getToken,
  removeToken,
  reqTimeOut
}
