<template>
  <div class="footerContainer">

      <!-- 选择模块 -->
    <div class="moduleBox">
      <div class="modules" v-for="(item,index) in moduleList" :key="index" @click="item.status=!item.status">
        <fun-module :text="item.text" :bgurl="item.status? item.checkedbg:item.uncheckedbg"></fun-module>
      </div>
    </div>

        <!-- 底板背景 -->
    <div class="footerbg"></div>

  </div>
</template>

<script>
import funModule from './funModule.vue'
export default {
  components: { funModule },
  data () {
    return {
      moduleList: [
        {
          text: '智慧平安',
          checkedbg: require('@/assets/images/智慧平安-选中.png'),
          uncheckedbg: require('@/assets/images/智慧平安-默认.png'),
          status: 0
        },
        {
          text: '党建引领',
          checkedbg: require('@/assets/images/党建引领-选中.png'),
          uncheckedbg: require('@/assets/images/党建引领-默认.png'),
          status: 0
        },
        {
          text: '指挥调度',
          checkedbg: require('@/assets/images/指挥调度-选中.png'),
          uncheckedbg: require('@/assets/images/指挥调度-默认.png'),
          status: 0
        },
        {
          text: '数据驾驶舱',
          checkedbg: require('@/assets/images/数据驾驶舱-选中.png'),
          uncheckedbg: require('@/assets/images/数据驾驶舱-默认.png'),
          status: 0
        },
        {
          text: '智慧防疫',
          checkedbg: require('@/assets/images/智慧防疫-选中.png'),
          uncheckedbg: require('@/assets/images/智慧防疫-默认.png'),
          status: 0
        },
        {
          text: '智慧民生',
          checkedbg: require('@/assets/images/智慧民生-选中.png'),
          uncheckedbg: require('@/assets/images/智慧民生-默认.png'),
          status: 0
        }
      ]
    }
  }

}
</script>

<style lang="less" scoped>

  .footerContainer{
    position: relative;
    width: 954px;

    .moduleBox{
      position: absolute;
      left: 36px;
      bottom: 26px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 880px;
      height: 103px;

    }

    .footerbg{
      width:100%;
      height: 71px;
      background: url('@/assets/images/底板.png');
    }
  }

</style>
