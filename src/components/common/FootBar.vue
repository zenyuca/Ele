<template lang="pug">
  #footeBar
    .navbar
      .item
        router-link(to="/account/settings" tag="div")
          .row.up
            .icon-power
          .row.down
            span 掌上用电
      .item
        router-link(to="/account" tag="div")
          .row.up
            i.icon-home2
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
    border-top: 1px solid #d8d8d8;
    background-color: #ffffff;
</style>
