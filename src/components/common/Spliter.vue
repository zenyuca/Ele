<template lang="pug">
  #spliter(:style="{height: height + 'rem'}")
</template>

<script>
export default {
  name: 'spliter',
  props: {
    height: {
      type: String,
      default () {
        return '1'
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  #spliter
    background-color: #f5f4f4;
</style>
