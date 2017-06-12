<template lang="pug">
  #me
    v-headBar(title="我的" :addon="addon" :showBack="false")
    .headinfo
      img.headimg(src="../../assets/img/head.jpg")
      .nickname {{account.nickname}}
      .phone {{account.phone}}
    v-footBar
</template>

<script>
import HeadBar from '@/components/common/HeadBar'
import FootBar from '@/components/common/FootBar'
import { ACCOUNT_LSKEY } from '@/config'
export default {
  name: 'me',
  created () {
    let account = this.$localStorage.get(ACCOUNT_LSKEY)
    if (!account.nickname) {
      account.nickname = '未设置昵称'
    }
    this.account = account
  },
  components: {
    'v-headBar': HeadBar,
    'v-footBar': FootBar
  },
  data () {
    return {
      addon: {
        title: '设置',
        route: '/me/settings'
      },
      account: {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
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
        font-weight: bold;
</style>
