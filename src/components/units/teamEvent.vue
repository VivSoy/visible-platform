<template>
  <div class="teamEventContainer">

    <!-- 标题 -->
    <title-part :value="title"></title-part>

    <!-- 排名 -->
    <div class="eventDeal">
      <div class="scoreItem" v-for="(item,index) in scoreData" :key="index">
        <div class="scoreMsg">
          <div class="rankBox" :class="index<=2? `medal${index}`: '' ">{{index<=2? '':item.rank}}</div>
          <div class="street">{{item.street}}</div>
          <div class="scores">
            <span class="num">{{item.score}}</span>
            <span>分</span>
          </div>
        </div>
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
      title: '队伍事件处置综合得分排名',
      scoreData: [
        {
          rank: 1,
          street: '大湾街道',
          score: 50
        },
        {
          rank: 2,
          street: '大同街道',
          score: 48
        },
        {
          rank: 3,
          street: '弥牟镇',
          score: 47
        },
        {
          rank: 4,
          street: '姚渡镇',
          score: 46
        },
        {
          rank: 5,
          street: '聚龙路',
          score: 44
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .teamEventContainer{
    margin: 32px 15px 0 20px;

    .eventDeal{
       width: 100%;
        height: 212px;
        margin-top: 21px;
        .scoreItem{
          width: 379px;
          margin-bottom: 8px;
          // 渐变背景
          background: linear-gradient(to right, rgba(70, 135, 204, 0), rgba(70, 135, 204, 0.14));
          border-radius: 2px;
          .scoreMsg{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 16px 0 5px;
            height: 36px;
            font-size: 15px;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: rgba(208, 240, 254, 0.8);

            .rankBox{
              width: 20px;
              height: 20px;
              text-align: center;
              line-height: 20px;
            }

            // 得分字体
            .scores{
              font-size: 14px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #F2FCFD;

              background: linear-gradient(180deg, rgba(255,223,207,0.9300) 0%, #FFD32D 99.5849609375%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;

              .num{
                font-weight: 600;
                font-size: 19px;
                margin-right: 4px;
              }
            }
          }
      }
    }
  }

  // 前三名独特样式
  .medal0{
    background: url('@/assets/images/第一.png');
  }
  .medal1{
    background: url('@/assets/images/第二.png');
  }
  .medal2{
    background: url('@/assets/images/第三.png');
  }
</style>
