<template>
  <div class="powerContainer">
    <title-part :value="title"></title-part>

    <!-- 饼状图 -->
    <div class="pieContainer" ref="pieChart"></div>

    <div class="classify">
      <div class="classItem" @click="changebg(index)" :class="item.status?'changebg':''" v-for="(item,index) in tag" :key="index">
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
          name: '社区警察',
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
      ]
      // 图表配置
      // option: {
      //   tooltip: {
      //     trigger: 'item'
      //   },
      //   legend: {
      //     top: '5%',
      //     left: 'center'
      //   },
      //   series: [
      //     {
      //       name: 'Access From',
      //       type: 'pie',
      //       radius: ['40%', '70%'],
      //       avoidLabelOverlap: false,
      //       label: {
      //         show: false,
      //         position: 'center'
      //       },
      //       emphasis: {
      //         label: {
      //           show: true,
      //           fontSize: '40',
      //           fontWeight: 'bold'
      //         }
      //       },
      //       labelLine: {
      //         show: false
      //       },
      //       data: [
      //         { value: 26, name: '社区' },
      //         { value: 23, name: 'Direct' },
      //         { value: 50, name: 'Email' },
      //         { value: 48, name: 'Union Ads' },
      //         { value: 44, name: 'Video Ads' },
      //         { value: 48, name: '民兵' }
      //       ]
      //     }
      //   ]
      // },
    }
  },
  mounted () {
    // // 初始化echart实例
    // const chart = this.$echarts.init(this.$refs.pieChart)
    // // 指定图标配置
    // chart.setOption(this.option)
  },
  methods: {
    changebg (index) {
      this.tag.forEach(item => {
        item.status = false
      })
      this.tag[index].status = true
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
    background-color: red;
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

}
</style>
