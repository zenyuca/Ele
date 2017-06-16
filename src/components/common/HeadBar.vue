<template lang="pug">
  #headBar
    span.back(@click="back()" v-show="showBack")
      i.el-icon-arrow-left
    span.title {{title}}
    router-link.addon(:to="addon.route" tag="span") {{addon.title}}
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
    },
    showBack: {
      type: Boolean,
      default () {
        return true
      }
    },
    addon: {
      type: Object,
      default () {
        return {
          title: '',
          route: ''
        }
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
    color: #ffffff;
    font-size: 1rem;
    height: 3.5rem;
    line-height: 3.5rem;
    text-align: center;
    .back
      position: absolute;
      left: 0;
      top: 0;
      width: 2.5rem;
      height: 3.5rem;
      float: left;
    .addon
      position: absolute;
      right: 0;
      top: 0;
      width: 4.5rem;
      height: 3.5rem;
      text-align: center;
      float: right;
</style>
