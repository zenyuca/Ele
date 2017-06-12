<template lang="pug">
  #footeBar
    .item
      router-link(to="/" tag="div")
        .row.up
          .el-icon-date
        .row.down
          span 掌上用电
    .item
      router-link(to="/me" tag="div")
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
    height: 4.5em;
    display: flex;
    border-top: 1px solid #d8d8d8;
    font-size: 16px;
    .item
      flex: 1
      text-align: center;
      color: #736f6f;
      .row
        // height: 2.25em;
        &.up
          padding-top: 0.4em;
          font-size: 2em;
        &.down
          padding-top: 0.3em;
          // line-height: 0em;
          font-size: 12px;
      .router-link-exact-active
        color: #11a7a2;
</style>
