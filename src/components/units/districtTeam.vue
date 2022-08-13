<template>
  <!-- 区级队伍分布 -->
  <div class="districtContainer">
    <!-- 标题 -->
    <title-part :value="title"></title-part>

    <!-- 柱状图 -->
    <div class="lineContainer" ref="lineChart">

    </div>

  </div>
</template>

<script>
import titlePart from '../commonParts/titlePart.vue'
export default {
  components: { titlePart },
  data () {
    return {
      title: '区级队伍分布',
      option: {
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '1%',
          right: '0%',
          bottom: '-10%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: [ // 可单独设置x轴标签与样式  也可在axisLabel中设置
              '一心社区', '新丰社区', '同福村', '凤翔社区', '青龙村', '福宏镇', '西林社区'
            ],
            axisTick: {
              alignWithLabel: true, // 刻度线与标签对齐
              show: false // 去除刻度

            },
            axisLabel: { // 刻度线标签设置
              interval: 0, // 间隔显示标签
              rotate: 45, // 标签旋转角度
              margin: 30, // 标签据轴线的距离
              fontSize: 14,
              fontWeight: 400,
              fontFamily: 'Source Han Sans CN',
              color: 'rgba(240, 252, 253, 0.8)',
              align: 'center'
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '人数',
            type: 'bar',
            barWidth: '60%',
            data: [25, 30, 20, 40, 25, 12, 15]
          }
        ]
      }
    }
  },
  mounted () {
    // 初始化echart实例
    const chart = this.$echarts.init(this.$refs.lineChart)
    // 指定图标配置
    chart.setOption(this.option)
  }

}
</script>

<style lang="less" scoped>

.districtContainer{
  margin: 18px 18px 0 15px;

  .lineContainer{
    width: 100%;
    height: 221px;
    margin-top: 13px;

  }
}

</style>
