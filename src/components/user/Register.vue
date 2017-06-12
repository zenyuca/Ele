<template lang="pug">
  #register
    v-headBar(title="掌上用电")
    .nav-bar
      .tab-item(:class="{'isActive': isActive == 1}" @click="select(1)") 登录
      .tab-item(:class="{'isActive': isActive == 2}") 注册
    v-spliter
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
</template>

<script>
import HeadBar from '@/components/common/HeadBar'
import Spliter from '@/components/common/Spliter'
import { Toast, Indicator } from 'mint-ui'
import { ACCOUNT_LSKEY, OK_STATUS } from '@/config'
export default {
  name: 'register',
  beforeRouteEnter (to, from, next) {
    next()
  },
  components: {
    'v-headBar': HeadBar,
    'v-spliter': Spliter
  },
  data () {
    return {
      isActive: 2,
      register: {
        phone: '',
        pwd: '',
        repwd: '',
        id: ''
      },
      registerPass: false
    }
  },
  watch: {
    register: {
      handler (curVal, oldVal) {
        this.registerValidator()
      },
      deep: true
    }
  },
  methods: {
    select (id) {
      this.isActive = id
      if (id === 1) {
        this.$router.push('/user/login')
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
          Indicator.open({
            text: '注册中...',
            spinnerType: 'fading-circle'
          })
          this.$http.post('/mobile/user/register.html', {
            phone: this.register.phone,
            pwd: this.register.pwd,
            c_pwd: this.register.repwd,
            IDcard: this.register.id
          }, {
            timeout: 5000,
            emulateJSON: true
          }).then((response) => {
            Indicator.close()
            response = response.body
            let status = response.status
            if (status === OK_STATUS) {
              this.$localStorage.remove(ACCOUNT_LSKEY)
              this.$router.replace('/user/login')
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

  #register
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
</style>
