<template lang="pug">
  #losepwd
    v-headBar(title="找回密码")
    v-spliter
    .input-item
      .form-group
        input.control-input(placeholder="请输入手机号码" type="number" v-model="login.phone")
    .input-item
      .form-group
        input.control-input(placeholder="请输入身份证号" type="text" v-model="login.id")
    .input-item
      .form-group
        input.btn.btn-login(:class="{'disabled': !loginPass}" type="button" value="确认找回" @click="dologin()")
</template>

<script>
import HeadBar from '@/components/common/HeadBar'
import Spliter from '@/components/common/Spliter'
export default {
  name: 'losepwd',
  components: {
    'v-headBar': HeadBar,
    'v-spliter': Spliter
  },
  data () {
    return {
      login: {
        phone: '',
        id: ''
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
        this.$router.push('/setpwd')
      }
    },
    loginValidator () {
      if (this.login.phone) {
        this.loginPass = this.login.phone.length === 11
      }
      if (this.loginPass) {
        this.loginPass = /^[\d]{17}[\dx]$/.test(this.login.id)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  @import "../../assets/stylus/base.styl"

</style>
