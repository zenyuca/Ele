<template lang="pug">
  #login
    v-headBar(title="掌上用电")
    .nav-bar
      .tab-item(:class="{'isActive': isActive == 1}" @click="select(1)") 登录
      .tab-item(:class="{'isActive': isActive == 2}" @click="select(2)") 注册
    v-spliter
    #register(v-show="isActive == 2")
      .input-item
        .form-group
          label.control-label 登录账号
          input.control-input(placeholder="请输入手机号码" type="number" v-model="register.phone")
      .input-item
        .form-group
          label.control-label 设置密码
          input.control-input(placeholder="请输入6-15位字符" type="password" v-model="register.pwd")
      .input-item
        .form-group
          label.control-label 确认密码
          input.control-input(placeholder="再次输入密码" type="password" v-model="register.repwd")
      .input-item
        .form-group
          label.control-label 身份证号
          input.control-input(placeholder="身份证号" type="text" v-model="register.id")
      .input-item
        .form-group
          input.btn.btn-login(:class="{'disabled': !registerPass}" type="button" value="注册" @click="doregister()")
    #login(v-show="isActive == 1")
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
          footer
            a.tab()
              router-link(to="/losepwd") 忘记密码
            a.tab()
              el-checkbox 记住密码
</template>

<script>
import HeadBar from '@/components/common/HeadBar'
import Spliter from '@/components/common/Spliter'
import { Toast } from 'mint-ui'
export default {
  name: 'login',
  beforeRouteEnter (to, from, next) {
    next()
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
      register: {
        phone: '',
        pwd: '',
        repwd: '',
        id: ''
      },
      loginPass: false,
      registerPass: false
    }
  },
  watch: {
    login: {
      handler (curVal, oldVal) {
        this.loginValidator()
      },
      deep: true
    },
    register: {
      handler (curVal, oldVal) {
        this.registerValidator()
      },
      deep: true
    }
  },
  activeted () {
    this._init()
  },
  methods: {
    _init () {
      this.login = {}
      this.register = {}
      this.isActive = 1
      this.loginPass = false
      this.registerPass = false
    },
    select (id) {
      this.isActive = id
    },
    dologin () {
      if (this.loginPass) {
      }
    },
    loginValidator () {
      if (this.login.phone) {
        this.loginPass = this.login.phone.length === 11
      }
      if (this.loginPass) {
        this.loginPass = /^[0-9_a-zA-Z]{6,15}$/.test(this.login.pwd)
      }
    },
    doregister () {
      if (this.registerPass) {
        if (this.register.pwd !== this.register.repwd) {
          Toast({
            message: '两次密码不一致',
            position: 'bottom',
            duration: 1500
          })
        } else {
          //
        }
      }
    },
    registerValidator () {
      if (this.register.phone) {
        this.registerPass = this.register.phone.length === 11
      }
      if (this.registerPass) {
        this.registerPass = /^[0-9_a-zA-Z]{6,15}$/.test(this.register.pwd)
      }
      if (this.registerPass) {
        this.registerPass = /^[\d]{17}[\dx]$/.test(this.register.id)
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

  footer
    display: flex;
    width: 100%;
    margin-top: 20px;
    .tab
      flex: 1;
      text-align: center;
</style>
