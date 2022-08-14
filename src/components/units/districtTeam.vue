<template>
  <!-- 区级队伍分布 -->
  <div class="districtContainer">
    <!-- 标题 -->
    <title-part :value="title"></title-part>

    <!-- 柱状图 -->
    <div class="lineContainer" ref="lineChart">

    </div>

    <div class="returnbtn">
      <i class="iconfont icon-fanhui"></i>
      返回</div>
  </div>
</template>

<script>
import '@/assets/iconfont/iconfont.css'
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
              fontWeight: 200,
              fontFamily: 'Source Han Sans CN',
              color: 'rgba(240, 252, 253, 0.7)',
              align: 'center'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '单位： 人', // 单位样式
            nameTextStyle: {
              color: 'rgba(240, 252, 253, 0.8)',
              fontSize: 14,
              fontWeight: 400,
              fontFamily: 'Source Han Sans CN',
              width: 51,
              height: 12,
              padding: [0, 0, 22, 5]
            },
            axisLabel: { // y轴刻度样式
              color: 'rgba(240, 252, 253, 0.8)',
              fontSize: 14,
              fontWeight: 400,
              fontFamily: 'Source Han Sans CN'
            },
            splitLine: { // 水平刻度线设置
              lineStyle: {
                type: 'dashed',
                color: '#081D41',
                width: 0.7,
                cap: 'round'
                // opacity: 0.5
              }
            }
          }

        ],
        series: [
          { // 可统一修改图形样式
            name: '人数',
            type: 'bar',
            barWidth: '20',
            data: [25, 30, 20, 40, 25, 12, 15],
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, // 颜色渐变处理
                [
                  {
                    offset: 0,
                    color: 'rgba(44,72,97,1)'
                  },
                  {
                    offset: 0.29,
                    color: 'rgba(33,70,81,1)'
                  },
                  // 30%处的颜色
                  {
                    offset: 0.3,
                    color: 'rgba(144,238,152,1)'
                  },
                  // 70%处的颜色
                  {
                    offset: 0.7,
                    color: 'rgba(144,238,152,1)'
                  },
                  {
                    offset: 0.71,
                    color: 'rgba(33,70,81,1)'
                  },
                  // 100%处的颜色
                  {
                    offset: 1,
                    color: 'rgba(44,72,97,1)'
                  }
                ], false)
            },
            markPoint: { // 自定义柱状图顶部白色方块
              data: [{
                coord: ['一心社区', 25]
              },
              {
                coord: ['新丰社区', 30]
              },
              {
                coord: ['同福村', 20]
              },
              {
                coord: ['凤翔社区', 40]
              },
              {
                coord: ['青龙村', 25]
              },
              {
                coord: ['福宏镇', 12]
              },
              {
                coord: ['西林社区', 15]
              }
              ],
              symbol: 'rect',
              symbolSize: [20, 2],
              label: { // 不显示文本
                show: false
              },
              itemStyle: {
                color: '#FFFFFD'
              }
            }
          }
        ]
      }
    }
  },
  mounted () {
    // 初始化echart实例
    const barChart = this.$echarts.init(this.$refs.lineChart)
    // 指定图标配置
    barChart.setOption(this.option)
  }

}
</script>

<style lang="less" scoped>

.districtContainer{
  position: relative;
  margin: 18px 18px 0 15px;

  .lineContainer{
    width: 100%;
    height: 221px;
    margin-top: 13px;

  }

  // 返回按钮
  .returnbtn{
    position: absolute;
    top: 40px;
    right: 0;
    width: 60px;
    height: 24px;
    text-align: center;
    font-size: 13px;
    line-height: 24px;
    color: #C8E8FB;
    background: rgba(21,143,255,0.3000);
    border: 1px solid #3982C8;
    border-radius: 12px;
    cursor: pointer;
  }
}

</style>
