<template lang="pug">
  #history
    v-headBar(title="历史用电")
    .chart
      vue-chart(:type="chart.type", :data="chart.data", :options="chart.options")
</template>

<script>
import HeadBar from '@/components/common/HeadBar'
import FootBar from '@/components/common/FootBar'
import Spliter from '@/components/common/Spliter'
import VueChart from 'vue-chart'

export default {
  name: 'history',
  components: {
    'v-headBar': HeadBar,
    'v-footBar': FootBar,
    'v-spliter': Spliter,
    VueChart
  },
  created () {
    let account = this.$store.state.account
    this.account = account
    this.chart = {
      type: 'line',
      data: {
        labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
        datasets: [{
          label: '历史用电',
          backgroundColor: '#81AD62',
          borderColor: '#81AD62',
          fill: false,
          steppedLine: false,
          // pointBackgroundColor: '#C60808',
          // pointRadius: [
          //   6, 6, 6, 6, 6, 10
          // ],
          // pointHoverRadius: [
          //   6, 6, 6, 6, 6, 10
          // ],
          data: [
            50, 338, 205, 444, 0, 222
          ]
        }]
      },
      options: {
        responsive: true,
        scales: {
          scales: {
            yAxes: [{
              stacked: false
            }]
          }
        }
      }
    }
  },
  data () {
    return {
      account: {},
      chart: {}
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  #history
    margin-top: 3.5rem;
    .chart
      padding: 1rem;
      @media screen and (min-width: 50rem)
        max-width: 50rem;
        margin-left: calc((100% - 52rem) / 2);
</style>
