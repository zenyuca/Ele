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
export default {
  name: 'losepwd',
  beforeRouteEnter (to, from, next) {
    if (from.path === '/losepwd') {
      next()
    } else {
      next('/losepwd')
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
          this.$router.replace('/login')
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
  @import "../../assets/stylus/base.styl"

</style>
