<template lang="pug">
  #settings
    v-headBar(title="设置")
    v-spliter(height="7")
    ul.normal-list
      li.row
        label.normal-label 账号
        span.normal-value {{account.phone}}
      li.row
        label.normal-label 昵称
        i.arrow.el-icon-arrow-right
        span.normal-value {{account.nickname}}
      li.row
        label.normal-label 更改头像
        router-link.arrow.el-icon-arrow-right(to="/me/setHead" tag="i")
    v-spliter(height="10")
    ul.normal-list
      li.row
        label.normal-label 修改密码
        router-link.arrow.el-icon-arrow-right(to="/me/setNewpwd" tag="i")
    v-spliter(height="10")
    .input-item
      .form-group
        input.btn.btn-login( type="button" value="退出登录" @click="doexit()") 
</template>

<script>
import HeadBar from '@/components/common/HeadBar'
import FootBar from '@/components/common/FootBar'
import Spliter from '@/components/common/Spliter'
import { Toast, Indicator } from 'mint-ui'
import { ACCOUNT_LSKEY, OK_STATUS } from '@/config'
export default {
  name: 'settings',
  components: {
    'v-headBar': HeadBar,
    'v-footBar': FootBar,
    'v-spliter': Spliter
  },
  mounted () {
    let account = this.$localStorage.get(ACCOUNT_LSKEY)
    if (!account.nickname) {
      account.nickname = '未设置昵称'
    }
    this.account = account
  },
  data () {
    return {
      account: {}
    }
  },
  methods: {
    doexit () {
      Indicator.open({
        text: '登出中...',
        spinnerType: 'fading-circle'
      })
      this.$http.post('/mobile/user/login_out.html', {
        phone: this.account.phone
      }, {
        timeout: 5000,
        emulateJSON: true
      }).then((response) => {
        Indicator.close()
        response = response.body
        let status = response.status
        if (status === OK_STATUS) {
          delete this.account.loginToken
          this.$localStorage.set(ACCOUNT_LSKEY, this.account)
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  @import "../../assets/stylus/base.styl"
  
  // #settings
    
</style>
