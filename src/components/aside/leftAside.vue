<template>
  <div class="leftContainer">
    <div class="leftAside"></div>

    <!-- 内容部分 -->
    <div class="leftBorder">

      <!-- 队伍总览 -->
      <team-overview></team-overview>

      <!-- 专业力量 -->
      <professional-power></professional-power>

      <!-- 在线队伍 -->
      <online-team></online-team>
    </div>
  </div>
</template>

<script>
import OnlineTeam from '../units/onlineTeam.vue'
import ProfessionalPower from '../units/professionalPower.vue'
import teamOverview from '../units/teamOverview.vue'
export default {
  components: { teamOverview, ProfessionalPower, OnlineTeam }

}
</script>

<style lang="less" scoped>
.leftContainer{
  position: relative;
}
.leftAside{
  position: absolute;
  left: 0;
  top: 54px;
  width: 31px;
  height: 1005px;
  background: url('@/assets/images/左装饰.png') no-repeat;
}
.leftBorder{
  position: absolute;
  left: 27px;
  top: 69px;
  width: 417px;
  height: 976px;
  background: url('@/assets/images/左边框.png') no-repeat;
}
</style>
