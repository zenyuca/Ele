<template lang="pug">
  #me
    v-headBar(title="我的" :addon="addon" :showBack="false")
    .content
      scroller(:on-refresh="refresh"  :on-infinite="infinite"  refreshText="努力加载中……")
        .headinfo
          img.headimg(:src="getHead()")
          .nickname {{account.nickname}}
          .phone {{account.phone}}
        v-spliter
        .headinfo
          img.headimg(:src="getHead()")
          .nickname {{account.nickname}}
          .phone {{account.phone}}
        v-spliter
        .headinfo
          img.headimg(:src="getHead()")
          .nickname {{account.nickname}}
          .phone {{account.phone}}
        v-spliter
        .headinfo
          img.headimg(:src="getHead()")
          .nickname {{account.nickname}}
          .phone {{account.phone}}
    v-footBar
</template>

<script>
import HeadBar from '@/components/common/HeadBar'
import FootBar from '@/components/common/FootBar'
import Spliter from '@/components/common/Spliter'

export default {
  name: 'me',
  components: {
    'v-headBar': HeadBar,
    'v-footBar': FootBar,
    'v-spliter': Spliter
  },
  mounted () {
    let account = this.$store.state.account
    if (!account.nickname) {
      account.nickname = '未设置昵称'
    }
    this.account = account
  },
  data () {
    return {
      addon: {
        title: '设置',
        route: '/account/settings'
      },
      account: {}
    }
  },
  methods: {
    getHead () {
      return '/static/img/head/' + this.account.headimg
    },
    refresh (done) {
      let self = this
      setTimeout(() => {
        self.top = self.top - 10
        done()
      }, 1500)
    },
    infinite: function (done) {
      let self = this
      setTimeout(() => {
        self.bottom = self.bottom + 10
        done()
      }, 1500)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  #me
    .content
      position: absolute;
      left: 0;
      right: 0;
      top: 3.5em;
      bottom: 4.5em;
      font-size: 16px;
      .headinfo
        font-size: 14px;
        padding-bottom: 10px;
        background-color: rgba(36, 166, 195, 0.86);
        text-align: center;
        .headimg
          width: calc((100% - 18px) / 4);
          border-radius: 50%;
          margin-top: 10px;
        .nickname
          color: #fff;
          margin-top: 10px;
        .phone
          margin-top: 10px;
          font-weight: bold;
</style>
