<template>
  <div class="teamRankContainer">

    <!-- 标题 -->
    <title-part :value="title"></title-part>

    <!-- 水平柱状图 -->
    <div class="horizontalChart"></div>
  </div>
</template>

<script>
import titlePart from '../commonParts/titlePart.vue'
export default {
  components: { titlePart },
  data () {
    return {
      title: '治理队伍办理情况排名'
    }
  }

}
</script>

<style lang="less" scoped>
.teamRankContainer{
  margin: 30px 18px 0 15px;

  .horizontalChart{
    width: 100%;
    height: 258px;
    margin-top: 20px;
    background-color: yellow;
  }
}
</style>
