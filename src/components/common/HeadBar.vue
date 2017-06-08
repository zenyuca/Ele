<template lang="pug">
  #headBar
    span.back(@click="back()")
      i.el-icon-arrow-left
    span.title {{title}}
    //- mt-header(fixed :title="title")
    //-   mt-button(icon="back" slot="left" @click="back()")
</template>

<script>
export default {
  name: 'headBar',
  props: {
    title: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus">
  #headBar
    background-color: #000000;
    background-color: #000;
    color: #ffffff;
    height: 3.2em;
    line-height: 3.2em;
    text-align: center;
    .back
      position: absolute;
      left: 0;
      top: 0;
      width: 2.5em;
      height: 2.5em;
      float: left;
</style>
