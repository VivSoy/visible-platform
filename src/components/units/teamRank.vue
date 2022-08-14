<template>
  <div class="teamRankContainer">

    <!-- 标题 -->
    <title-part :value="title"></title-part>

    <!-- 水平柱状图 -->
    <div class="horizontalContainer" ref="horCharts"></div>
  </div>
</template>

<script>
import titlePart from '../commonParts/titlePart.vue'
export default {
  components: { titlePart },
  data () {
    return {
      title: '治理队伍办理情况排名',
      // 图标配置
      option: {
        tooltip: {
          trigger: 'axis', // 提示效果
          axisPointer: {
            type: 'shadow' // 阴影指示器
          }
        },
        legend: { // 图例组件 可以控制那些图例显示
          show: true,
          left: 0, // 图例组件距离容器左侧距离
          top: 0,
          icon: 'rect',
          itemHeight: 2,
          itemWidth: 10,
          itemGap: 28, // 图例组件之间的宽度
          textStyle: { // 图例文本样式
            color: '#F2FCFD',
            fontWeight: 400,
            fontFamily: 'Source Han Sans CN',
            fontSize: 14
          }
        },
        grid: {
          left: '0%',
          right: '0%',
          top: '13%',
          containLabel: false // grid 区域是否包含坐标轴的刻度标签。
        },
        xAxis: {
          show: false // 不显示x轴信息
        },
        yAxis: {
          type: 'category',
          splitNumber: 5,
          data: ['综治巡逻队', '综合执法队', '社区民警', '国土执法力量', '司法所力量'],
          axisLine: { // y轴轴线设置
            show: false
          },
          axisTick: { // 轴线刻度
            show: false
          },
          axisLabel: { // 刻度标签
            color: '#D0F0FE',
            fontWeight: 400,
            fontFamily: 'Source Han Sans CN',
            fontSize: 15,
            inside: true,
            margin: 0,
            // lineHeight: 30,
            verticalAlign: 'bottom'
          }

        },
        series: [
          {
            name: '超期',
            type: 'bar',
            stack: 'total', // 可堆叠
            backgroundStyle: 'rgba(70,135,204)',
            label: { // 标签
              show: false
            },
            emphasis: {
              focus: 'series'
            },
            data: [200, 250, 270, 290, 330],
            itemStyle: { // 柱体样式
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, // 右 下、左、上
                [
                  {
                    offset: 0,
                    color: '#FD4D00'
                  },
                  {
                    offset: 1,
                    color: '#FFFFFF'
                  }
                ]
              )
            }
          },
          {
            name: '未超期',
            type: 'bar',
            stack: 'total',
            label: {
              show: false
            },
            emphasis: {
              focus: 'series'
            },
            data: [400, 400, 400, 400, 500],
            itemStyle: { // 柱体样式
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, // 右 下、左、上
                [
                  {
                    offset: 0,
                    color: '#00BFFE'
                  },
                  {
                    offset: 1,
                    color: '#1D92FF'
                  }
                ]
              ),
              borderRadius: 2
            },
            barWidth: 5
          }
        ]
      }

    }
  },
  mounted () {
    // 初始化chart实例
    const horBarChart = this.$echarts.init(this.$refs.horCharts)
    horBarChart.setOption(this.option)
  }

}
</script>

<style lang="less" scoped>
.teamRankContainer{
  margin: 30px 18px 0 15px;

  .horizontalContainer{
    width: 100%;
    height: 258px;
    margin-top: 20px;
    // background-color: yellow;
  }
}
</style>
