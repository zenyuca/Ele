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
          router-link.tab(to="/losepwd" tag="span") 忘记密码
          span.tab()
            el-checkbox(v-model="rememberpwd") 记住密码
</template>

<script>
import HeadBar from '@/components/common/HeadBar'
import Spliter from '@/components/common/Spliter'
import { Toast, Indicator } from 'mint-ui'

export default {
  name: 'login',
  beforeRouteEnter (to, from, next) {
    next()
  },
  created () {
    let account = this.$localStorage.get('account')
    if (account) {
      account = JSON.parse(account)
      this.rememberpwd = account.rememberpwd
      this.login.phone = account.phone
      this.login.pwd = account.pwd
    }
  },
  components: {
    'v-headBar': HeadBar,
    'v-spliter': Spliter
  },
  data () {
    return {
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
        this.loginValidator()
      },
      deep: true
    }
  },
  methods: {
    select (id) {
      this.isActive = id
      if (id === 2) {
        this.$router.push('/register')
      }
    },
    dologin () {
      if (this.loginPass) {
        Indicator.open({
          text: '登录中...',
          spinnerType: 'fading-circle'
        })
        this.$http.post('/mobile/user/login.html', {
          phone: this.login.phone,
          pwd: this.login.pwd
        }, {
          timeout: 5000,
          emulateJSON: true
        }).then((response) => {
          Indicator.close()
          response = response.body
          let status = response.status
          if (status === 0) {
            if (this.rememberpwd) {
            } else {
              this.login.pwd = ''
            }
            this.login.rememberpwd = this.rememberpwd
            this.$localStorage.set('account', JSON.stringify(this.login))
            this.$store.state.account = response.data
            this.$router.push('/me')
          } else {
            Toast({
              message: response.msg,
              position: 'bottom',
              duration: 1500
            })
          }
        }, (response) => {
          Indicator.close()
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  @import "../../assets/stylus/base.styl"

  #login
    .nav-bar
      display: flex;
      margin: 0.3em 0;
      .tab-item
        flex: 1;
        text-align: center;
        height: 3.3em;
        line-height: 3.3em;
        margin: 0 20px;
        &:last-child
          border-right: none;
        &.isActive
          font-weight: bold;
          color: #78A6A3;
          border-bottom: 1px solid #78A6A3;

  .footer
    display: flex;
    width: 100%;
    margin-top: 20px;
    .tab
      flex: 1;
      text-align: center;
</style>
