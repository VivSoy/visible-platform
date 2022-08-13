<template>
  <div class="titleContainer">

    <!-- 文本 -->
    <div class="titleText">
      <!-- 图标 -->
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yuanzi"></use>
        </svg>
      <span class="text">
        {{value}}
      </span>
      <span class="total" v-if="num">（{{num}}人）</span>
    </div>

    <!-- 背景 -->
    <div class="titleBar">
      <div class="tilt">
        <div class="bevel"></div>
        <div class="bevel"></div>
        <div class="bevel"></div>
      </div>
    </div>
    <div class="titleBottom"></div>
  </div>
</template>

<script>
// 引入图标
import '@/assets/iconfont/iconfont.js'
export default {
  // 可传递标题与人数
  props: ['value', 'num']
}
</script>

<style lang="less" scoped>
.titleContainer{
position: relative;
width: 384px;
height: 28px;
  .titleText{
    position: absolute;
    width: 384px;
    left: 9px;
    bottom: 4px;

    .icon{
      width: 23px;
      height: 23px;
      // background: linear-gradient(0deg, rgb(131, 194, 251,.3), #FFFFFF);
      box-shadow: 0px 4px 0px 0px rgba(18,51,82,0.5600);
    }

    .text{
      width: 86px;
      height: 21px;
      font-size: 22px;
      font-family: FZZhengHeiS-DB-GB;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 8px;
      background: linear-gradient(0deg, #83C2FB 0%, #FFFFFF 99.5361328125%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .total{
      width: 47px;
      height: 17px;
      font-size: 16px;
      font-family: FZZhengHeiS-DB-GB;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 8px;

      background: linear-gradient(0deg, #FBB231 0%, #FFFFFF 99.5361328125%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

// 背景与底部边框
  .titleBar{
    position: absolute;
    left: 0;
    bottom: 4px;
    width: 384px;
    height: 8px;
    background: linear-gradient(to left,#45a3ec00,#45a3ecff);
    opacity: 0.41;
    // 斜角裁剪
    clip-path: polygon(5px 0,384px 0,384px 8px,0 8px);
    .tilt{
      float: right;
      display: flex;
      .bevel{
        width: 15px;
        height: 8px;
         background: linear-gradient(to left,#45a3ecff,#45a3ec00);
        opacity: 0.32;
        transform: rotate(-45deg);
      }
    }
  }
  .titleBottom{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 384px;
    height: 2px;
    margin-top: 1px;
    background-image: linear-gradient(to left, #8de2fd00,#8DE2FD);
    opacity: 0.46;
  }
}

</style>
