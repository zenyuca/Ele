<template lang="pug">
  #me
    v-headBar(title="设置")
    ul.normal-list
      li.row
        label.normal-label 账号
        span.normal-value {{account.phone}}
      li.row
        label.normal-label 昵称
        i.arrow.el-icon-arrow-right
        span.normal-value {{account.nickname}}
    v-spliter
    ul.normal-list
      li.row
        label.normal-label 修改密码
        i.arrow.el-icon-arrow-right
    v-spliter
    .input-item
      .form-group
        input.btn.btn-login( type="button" value="退出登录" @click="doexit()") 
</template>

<script>
import HeadBar from '@/components/common/HeadBar'
import FootBar from '@/components/common/FootBar'
import Spliter from '@/components/common/Spliter'
export default {
  name: 'me',
  created () {
    let account = this.$localStorage.get('account')
    if (account) {
      account = JSON.parse(account)
      if (!account.nickname) {
        account.nickname = '未设置昵称'
      }
      this.account = account
    }
  },
  components: {
    'v-headBar': HeadBar,
    'v-footBar': FootBar,
    'v-spliter': Spliter
  },
  data () {
    return {
      account: {}
    }
  },
  methods: {
    doexit () {
      this.$store.state.account = {}
      this.$localStorage.remove('account')
      this.$router.replace('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  @import "../../assets/stylus/base.styl"
  
  #me
    .headinfo
      height: 150px;
      background-color: rgba(36, 166, 195, 0.86);
      text-align: center;
      .headimg
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin: 10px;
      .nickname
        color: #fff;
        margin-top: 10px;
      .phone
        margin-top: 10px;
</style>
