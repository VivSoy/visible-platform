<template>
  <div class="homeContainer">
    <!-- 头部 -->
   <div class="header">
    <screen-header></screen-header>
   </div>

   <!-- 左侧边栏 -->
   <div class="lAside">
     <LeftAside></LeftAside>
   </div>

   <!-- 右侧边栏 -->
   <div class="rAside">
     <right-aside></right-aside>
   </div>

   <!-- 底部bar -->
   <div class="footer">
    <screen-footer></screen-footer>
   </div>
  </div>
</template>

<script>
import screenHeader from '@/components/header/screenHeader.vue'
import LeftAside from '@/components/aside/leftAside.vue'
import RightAside from '@/components/aside/rightAside.vue'
import ScreenFooter from '@/components/footer/screenFooter.vue'
export default {
  components: { screenHeader, LeftAside, RightAside, ScreenFooter }
}
</script>
<style lang="less" scoped>
.homeContainer{
  position: relative;
  max-width: 1920px;
  min-width: 1440px;
  height: 1080px;
  background-color: #051c44;

 .lAside{
    position: absolute;
    left: 0;
    top: 0;
  }

  .rAside{
    position: absolute;
    right: 0;
    top: 0;
  }

  .footer{
    position: absolute;
    left: 483px;
    bottom: 18px;
  }
}

</style>
