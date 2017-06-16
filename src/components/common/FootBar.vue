<template lang="pug">
  #footeBar
    .item
      router-link(to="/user/login" tag="div")
        .row.up
          .el-icon-date
        .row.down
          span 掌上用电
    .item
      router-link(to="/account" tag="div")
        .row.up
          i.el-icon-menu
        .row.down
          span 我的
</template>

<script>
export default {
  name: 'footeBar',
  components: {
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  #footeBar
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4.5rem;
    display: flex;
    border-top: 1px solid #d8d8d8;
    .item
      flex: 1
      text-align: center;
      color: #736f6f;
      .row
        // height: 4.5rem;
        &.up
          padding-top: 0.8rem;
          font-size: 1.6rem;
        &.down
          padding-top: 0.4rem;
          font-size: 0.8rem;
      .router-link-exact-active
        color: #11a7a2;
</style>
