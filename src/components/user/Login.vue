<template lang="pug">
  #login
    v-headBar(title="掌上用电")
    .nav-bar
      .tab-item(:class="{'isActive': isActive == 1}" ) 登录
      .tab-item(:class="{'isActive': isActive == 2}" @click="select(2)") 注册
    v-spliter
    .input-item
      .form-group
        input.control-input(placeholder="请输入手机号码" type="number" v-model="login.phone")
    .input-item
      .form-group
        input.control-input(placeholder="请输入密码" type="password" v-model="login.pwd")
    .input-item
      .form-group
        input.btn.btn-login(:class="{'disabled': !loginPass}" type="button" value="登录" @click="dologin()")    
    .input-item
      .form-group
        .footer
          router-link.tab(to="/user/losepwd" tag="span") 忘记密码
          span.tab()
            el-checkbox(v-model="rememberpwd") 记住密码
</template>

<script>
import HeadBar from '@/components/common/HeadBar'
import Spliter from '@/components/common/Spliter'
import { Toast } from 'mint-ui'
import { OK_STATUS } from '@/config'
import CommonJS from '@/assets/js/common'

export default {
  name: 'login',
  beforeRouteEnter (to, from, next) {
    next()
  },
  components: {
    'v-headBar': HeadBar,
    'v-spliter': Spliter
  },
  created () {
    let account = this.$store.state.account
    if (account) {
      this.rememberpwd = account.rememberpwd
      this.login.phone = account.phone
      this.login.pwd = account.pwd
      this.account = account
    }
  },
  data () {
    return {
      account: {},
      isActive: 1,
      login: {
        phone: '',
        pwd: ''
      },
      loginPass: false,
      rememberpwd: false
    }
  },
  watch: {
    login: {
      handler (curVal, oldVal) {
        if (curVal.phone === '') {
          curVal.pwd = ''
        }
        this.loginValidator()
      },
      deep: true
    }
  },
  methods: {
    select (id) {
      this.isActive = id
      if (id === 2) {
        this.$router.push('/user/register')
      }
    },
    dologin () {
      if (this.loginPass) {
        this.$http.post('/mobile/user/login.html', {
          phone: this.login.phone,
          pwd: this.login.pwd
        }, {
          timeout: 5000,
          emulateJSON: true
        }).then((response) => {
          response = response.body
          let status = response.status
          if (status === OK_STATUS) {
            if (this.rememberpwd) {
            } else {
              this.login.pwd = ''
            }
            this.login.rememberpwd = this.rememberpwd
            this.login.headimg = response.data.headimg
            this.login.nickName = response.data.username || '未设置昵称'
            this.login.leftMoney = response.data.accountBalance

            CommonJS.setAccount(this, this.login)
            CommonJS.storeAccount(this)
            CommonJS.setToken(this, response.data.loginToken)
            this.$router.push('/account/')
          }
        }, (response) => {
          Toast({
            message: '请求超时',
            position: 'bottom',
            duration: 1500
          })
        })
      }
    },
    loginValidator () {
      if (this.login.phone) {
        this.loginPass = this.login.phone.length === 11
      }
      if (this.loginPass) {
        this.loginPass = /^[0-9_a-zA-Z]{6,15}$/.test(this.login.pwd)
      }
    }
  }
}
</script>

<style lang="stylus">
  #login
    .nav-bar
      display: flex;
      margin: 0.3rem 0;
      .tab-item
        flex: 1;
        text-align: center;
        height: 3.3rem;
        line-height: 3.3rem;
        margin: 0 1rem;
        &:last-child
          border-right: none;
        &.isActive
          font-weight: bold;
          color: #78A6A3;
          border-bottom: 1px solid #78A6A3;

  .footer
    display: flex;
    width: 100%;
    margin-top: 1rem;
    .tab
      flex: 1;
      text-align: center;
      .el-checkbox__label
        font-size: 1rem;
</style>
