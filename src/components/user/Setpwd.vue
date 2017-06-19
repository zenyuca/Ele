<template lang="pug">
  #losepwd
    v-headBar(title="设置新密码")
    v-spliter
    .input-item
      .form-group
        label.control-label 设置密码
        input.control-input(placeholder="请输入6-15位字符" type="password" v-model="login.pwd")
    .input-item
      .form-group
        label.control-label 确认密码
        input.control-input(placeholder="再次输入密码" type="password" v-model="login.repwd")
    .input-item
      .form-group
        input.btn.btn-login(:class="{'disabled': !loginPass}" type="button" value="确认" @click="dologin()")
</template>

<script>
import HeadBar from '@/components/common/HeadBar'
import Spliter from '@/components/common/Spliter'
import { Toast } from 'mint-ui'
import { OK_STATUS } from '@/config'
import CommonJS from '@/assets/js/common'

export default {
  name: 'losepwd',
  beforeRouteEnter (to, from, next) {
    if (from.path === '/user/losepwd') {
      next()
    } else {
      next('/user/losepwd')
    }
  },
  components: {
    'v-headBar': HeadBar,
    'v-spliter': Spliter
  },
  data () {
    return {
      login: {
        pwd: '',
        repwd: ''
      },
      loginPass: false
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
    dologin () {
      if (this.loginPass) {
        if (this.login.pwd !== this.login.repwd) {
          Toast({
            message: '两次密码不一致',
            position: 'bottom',
            duration: 1500
          })
        } else {
          let findpwd = this.$store.state.findpwd
          this.$http.post('/mobile/user/reset_pwd.html', {
            phone: findpwd.phone,
            pwd: this.login.pwd,
            c_pwd: this.login.repwd,
            token: findpwd.token
          }, {
            timeout: 5000,
            emulateJSON: true
          }).then((response) => {
            response = response.body
            let status = response.status
            if (status === OK_STATUS) {
              var account = CommonJS.getAccount(this)
              account.rememberpwd = false
              account.pwd = ''
              CommonJS.setAccount(this, account)
              CommonJS.storeAccount(this)
              CommonJS.toLogin(this)
            }
          }, (response) => {
            Toast({
              message: '请求超时',
              position: 'bottom',
              duration: 1500
            })
          })
        }
      }
    },
    loginValidator () {
      if (this.login.pwd) {
        this.loginPass = /^[0-9_a-zA-Z]{6,15}$/.test(this.login.pwd)
      }
      if (this.loginPass) {
        this.loginPass = /^[0-9_a-zA-Z]{6,15}$/.test(this.login.repwd)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">

</style>
