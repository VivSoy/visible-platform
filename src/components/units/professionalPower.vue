<template>
  <div class="powerContainer">
    <title-part :value="title"></title-part>

    <div class="pieMsg">
      <div>
        <span>178</span>
        人
      </div>
      <div>
        专业队伍
      </div>
    </div>

    <!-- 饼状图 -->
    <div class="pieContainer" ref="pieChart"></div>

    <div class="classify">
      <div class="classItem" @click="clickOption(index)" :class="item.status?'changebg':''" v-for="(item,index) in tag" :key="index">
        <div class="itemLeft">
           <div :class="item.class" class="circle"></div>
          <div class="pieWord">{{item.name}}</div>
        </div>
        <div class="piePerson">{{item.num}}</div>
      </div>
    </div>

  </div>
</template>

<script>
import titlePart from '../commonParts/titlePart.vue'
export default {
  components: { titlePart },
  data () {
    return {
      title: '专业力量',
      tag: [
        {
          class: 'shequ',
          name: '社区民警',
          num: '26人',
          status: true
        },
        {
          class: 'zonghe',
          name: '综合执法力量',
          num: '23人',
          status: false
        },
        {
          class: 'guotu',
          name: '国土执法力量',
          num: '50人',
          status: false
        },
        {
          class: 'sifa',
          name: '司法所力量',
          num: '48人',
          status: false
        },
        {
          class: 'shichang',
          name: '市场监管力量',
          num: '44人',
          status: false
        },
        {
          class: 'minbing',
          name: '民兵',
          num: '48人',
          status: false
        }
      ],
      // 图表配置
      option: {
        tooltip: {
          trigger: 'item'

        },
        legend: { // 图表的位置
          top: '15%',
          left: 'center',
          show: false, // 不显示图例
          position: 'right'
        },
        color: [ // 设置颜色
          '#57F8B1', 'rgba(255,255,255,0)', '#4BCDE9', 'rgba(255,255,255,0)', '#129EF0', 'rgba(255,255,255,0)', '#EEBF42', 'rgba(255,255,255,0)', '#F48736', 'rgba(255,255,255,0)', '#4549FF', 'rgba(255,255,255,0)'
        ],
        series: [
          {
            name: 'power',
            type: 'pie',
            radius: ['60%', '70%'], // 内外半径
            avoidLabelOverlap: false, // 固定标签在圆环中部
            itemStyle: {
              // borderRadius: 1,
              // borderColor: '#051c44',
              // borderWidth: 4
            },
            label: {
              show: false,
              position: 'center' // 标签显示位置
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 26, name: '社区民警' },
              { value: 1, name: '' },
              { value: 23, name: '综合执法力量' },
              { value: 1, name: '' },
              { value: 50, name: '国土执法力量' },
              { value: 1, name: '' },
              { value: 48, name: '司法所力量' },
              { value: 1, name: '' },
              { value: 44, name: '市场监管力量' },
              { value: 1, name: '' },
              { value: 48, name: '民兵' },
              { value: 1, name: '' }
            ]
          }
        ]
      },
      // 保存echarts实例
      chart: ''
    }
  },
  mounted () {
    // 初始化echart实例
    this.chart = this.$echarts.init(this.$refs.pieChart)
    // 指定图标配置
    this.chart.setOption(this.option)
    this.chart.dispatchAction({
      type: 'highlight',
      seriesName: 'power',
      name: '社区民警'
    })
  },
  methods: {
    clickOption (index) {
      this.tag.forEach(item => {
        item.status = false
      })
      this.tag[index].status = true

      // 先取消其他高亮
      this.chart.dispatchAction({
        type: 'downplay',
        seriesName: 'power'
      })
      // 高亮
      this.chart.dispatchAction({
        type: 'highlight',
        seriesName: 'power',
        name: this.tag[index].name
      })
      // 显示信息
      this.chart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        name: this.tag[index].name
      })

      // 定时关闭信息
      setTimeout(() => {
        this.chart.dispatchAction({
          type: 'hideTip'
        })
      }, 1000)
    }
  }

}
</script>

<style lang="less">
.powerContainer{
  position: relative;
  margin: 32px 19px 0 14px;

  .pieContainer{
    height: 216px;
    width: 100%;
    // background-color: red;
  }

  // 分类
  .classify{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    width: 100%;
    height: 107px;

    .classItem{
      display: flex;
      align-items: center;
      justify-content:space-between;
      width: 188px;
      height: 32px;
      cursor: pointer;

    .itemLeft{
      display: flex;
      justify-content:space-between;

      .circle{
        margin-left: 11px;
        width: 12px;
        height: 12px;
        border-radius: 6px;
      }

      .pieWord{
        margin-left: 9px;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #F2FCFD;
      }
    }

    .piePerson{
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #F2FCFD;
      line-height: 39px;
    }
    }
  }

  // 不同tag的样式
  .shequ{
    border: 2px solid #57F8B1;
  }
  .zonghe{
    border: 2px solid #4BCDE9;
  }
  .guotu{
    border: 2px solid #129EF0;
  }
  .sifa{
    border: 2px solid #EEBF42;
  }
  .shichang{
    border: 2px solid #F48736;
  }
  .minbing{
    border: 2px solid #4549FF;
  }

  // 点击切换背景
  .changebg{
    background: rgba(0, 91, 189, .4);

  }

  .pieMsg{
    position: absolute;
    left: 136px;
    top: 80px;
    width: 110px;
    height: 110px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #253C56;
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(242, 252, 253, 0.84);

    div span{
      font-size: 24px;
      font-family: Akzidenz-Grotesk BQ Condensed;
      font-weight: 400;
      color: #F2FCFD;
      line-height: 47px;

      background: linear-gradient(0deg, #FBB231 0%, #FFFFFF 99.5361328125%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
