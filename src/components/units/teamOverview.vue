<template>
  <div class="viewContainer">
    <!-- 队伍总览标题 -->
    <title-part :value="title"></title-part>

    <!-- 队伍总人数 -->
    <div class="total">
      <span class="des more">队伍总人数</span>
      <span class="peopleNum">596,693</span>
      <span class="des less">人</span>
    </div>

    <!-- 分类 -->
    <div class="power" >
      <div class="powerblock" :class="item.status? 'clicked':' '" @click="changebgc(index)" v-for="(item,index) in blockData" :key="index">
        <div class="powertitle">{{item.title}}</div>
        <div class="powernum">
          <span class="originnum" :class="item.status? 'changenum': ' '">{{item.num}}</span>人
          </div>
      </div>

    </div>
  </div>
</template>

<script>
import TitlePart from '../commonParts/titlePart.vue'
export default {
  data () {
    return {
      title: '队伍总览',
      blockData: [
        {
          title: '专职力量',
          num: 150,
          status: false
        },
        {
          title: '专业力量',
          num: 345,
          status: true
        },
        {
          title: '服务力量',
          num: 150,
          status: false
        },
        {
          title: '兼职力量',
          num: 150,
          status: false
        }
      ]
    }
  },
  components: { TitlePart },
  methods: {
    changebgc (index) {
      this.blockData.forEach(item => {
        item.status = false
      })
      this.blockData[index].status = true
    }
  }
}
</script>

<style lang="less" scoped>
.viewContainer{
  position: relative;
  // width: 100%;
  margin: 28px 19px 0 14px;

  // 总人数
  .total{
    position: relative;
    margin-top: 30px;
    width: 379px;
    height: 51px;
    text-align: center;
    background: url('@/assets/images/队伍总数面板.png') no-repeat;

    .des{
      position: absolute;
      top: 6px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #FFFFFF;
    }
    .more{
      left: 88px;
    }
    .less{
      right: 97px;
    }

    .peopleNum{
      position: absolute;
      top: 2px;
      right: 115px;
      font-size: 25px;
      font-family: Akzidenz-Grotesk BQ Condensed;
      font-weight: 400;
      color: #F0FBFD;

      background: linear-gradient(0deg, #FBB231 0%, #FFFFFF 99.5361328125%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  // 按钮
  .power{
    position: relative;
    margin-top: 29px;
    width: 379px;
    display: flex;
    justify-content: space-evenly;

    .powerblock{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 101px;
      height: 74px;
      cursor: pointer;

      .powertitle{
        font-size: 15px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
      }
      .powernum{
        font-size: 15px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #F1FBFF;

        span{
          font-size: 26px;
          font-family: Akzidenz-Grotesk BQ Condensed;
          font-weight: 400;
          color: #F0FBFD;

        }

        .originnum{
          background: linear-gradient(0deg, #59C6FA 0%, #FFFFFF 99.5361328125%);
           -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }

    // 被点击样式
  .clicked{
    background: url('@/assets/images/队伍总览选中.png') no-repeat;
  }

  // 数字改变的样式
  .changenum{
    background: linear-gradient(0deg, #FBB231 0%, #FFFFFF 99.5361328125%) !important;
     -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
  }
}
</style>
