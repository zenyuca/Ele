// 系统配置文件，包含常量等信息

// 保存在本地存储的账户信息
const ACCOUNT_LSKEY = 'account'
// 本地存储配置
const localStorage = {
  account: {
    type: Object,
    default () {
      return null
    }
  }
}
// 返回成功的标志
const OK_STATUS = 0

export {
  ACCOUNT_LSKEY,
  OK_STATUS,
  localStorage
}
