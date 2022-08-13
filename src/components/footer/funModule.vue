<template>
  <div class="moduleContainer">
    <div class="moduleBox" :style="{backgroundImage:`url(${bgurl})`}">
      <div class="text">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['text', 'bgurl']

}
</script>

<style lang="less" scoped>

  .moduleContainer{

    .moduleBox{
      position: relative;
      width: 111px;
      height: 103px;
      cursor: pointer;
      // background:url("@/assets/images/党建引领-默认.png");

      .text{
        position: absolute;
        left: 24px;
        bottom: 16px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #E2F2FD;
      }
    }
  }

</style>
