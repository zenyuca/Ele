<template lang="pug">
  #footeBar
    .item
      router-link(to="/losepwd" tag="div")
        .row.up
          .el-icon-date
        .row.down
          span 掌上用电
    .item
      router-link(to="/register" tag="div")
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
    height: 3.5em;
    display: flex;
    border-top: 1px solid #d8d8d8;
    .item
      flex: 1
      text-align: center;
      .row
        height: 1.75em;
        &.up
          line-height: 1.75em;
          font-size: 1.5em;
        &.down
          line-height: 0.3em;
          font-size: 12px;
</style>
