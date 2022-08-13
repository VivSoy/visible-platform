<template>
  <div class="rightContainer">
    <div class="rightAside"></div>

    <!-- 右侧内容 -->
    <div class="rightBorder">

      <!-- 下拉框 -->
      <div class="selContainer">
         <form class="select">
        队伍类型选择:
        <select name="" id="">
          <option v-for="(item,index) in selectOptions" :key="index" :value="item.value">{{item.label}}</option>
        </select>
      </form>
      </div>

      <!-- 区级队伍分布 -->
      <district-team></district-team>

      <!-- 队伍排名 -->
      <team-rank></team-rank>

      <!-- 队伍事件处置 -->
      <team-event></team-event>
    </div>
  </div>
</template>

<script>
import districtTeam from '../units/districtTeam.vue'
import TeamEvent from '../units/teamEvent.vue'
import TeamRank from '../units/teamRank.vue'
export default {
  components: { districtTeam, TeamRank, TeamEvent },
  data () {
    return {
      selectOptions: [
        {
          value: '选项1',
          label: '专业力量'
        },
        {
          value: '选项2',
          label: '龟的力量'
        },
        {
          value: '选项3',
          label: '熊的力量'
        },
        {
          value: '选项4',
          label: '鸡的力量'
        },
        {
          value: '选项5',
          label: '虎的力量'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>

.rightContainer{
  position: relative;

  .rightAside{
    position: absolute;
    right: 0;
    top: 54px;
    width: 32px;
    height: 1006px;
    background: url('@/assets/images/右装饰.png') no-repeat;
  }

  .rightBorder{
    position: absolute;
    right: 29px;
    top: 69px;
    width: 417px;
    height: 976px;
    background: url('@/assets/images/右边框.png');

    .selContainer{
      .select{
        width: 384px;
        margin: 18px 20px 0 21px;
        font-size: 15px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #C8E8FB;

        select{
          width: 270px;
          height: 26px;
          margin-left: 12px;
          background: rgba(23,55,92,0.4000);
          border: 1px solid #155786;
          color: #F0FCFD;
          outline-style: none;

        }
      }
    }

  }
}
</style>
