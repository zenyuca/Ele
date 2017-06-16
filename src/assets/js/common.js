import { ACCOUNT_LSKEY } from '@/config'
import Base64 from 'js-base64'

function storeAccount (vm) {
  vm.$store.state.account = getAccount(vm)
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

export default {
  getAccount,
  setAccount,
  storeAccount
}

export {
  getAccount,
  setAccount,
  storeAccount
}
