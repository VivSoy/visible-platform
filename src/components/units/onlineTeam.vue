<template>
  <div class="onlineTeamContainer">
    <title-part :value="title" :num="num"></title-part>

    <!-- 表格 -->
    <div class="tableContainer">
      <div class="table_head">
        <div>所属街道</div>
        <div>队伍角色</div>
        <div>姓名</div>
        <div >电话</div>
      </div>
      <div class="table_content">
        <div class="table_row" :class="index%2 ? '':'bg'" v-for="(item,index) in tableData" :key="index">
          <div>{{item.street}}</div>
          <div>{{item.role}}</div>
          <div>{{item.name}}</div>
          <div class="phone">
            <div class="num">{{item.tel}}</div>
            <div class="tel"></div>
            <div class="video"></div>
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
      title: '在线队伍',
      num: 10,
      // 表格数据
      tableData: [
        {
          street: '大湾街道',
          role: '网格员',
          name: '张经商',
          tel: '18809102345'
        },
        {
          street: '大湾街道',
          role: '社区干部',
          name: '王思聪',
          tel: '18809102345'
        },
        {
          street: '大湾街道',
          role: '网格员',
          name: '张经商',
          tel: '18809102345'
        },
        {
          street: '大湾街道',
          role: '社区干部',
          name: '张经商',
          tel: '18809102345'
        },
        {
          street: '大湾街道',
          role: '网格员',
          name: '张经商',
          tel: '18809102345'
        },
        {
          street: '大湾街道',
          role: '网格员',
          name: '张经商',
          tel: '18809102345'
        },
        {
          street: '大湾街道',
          role: '网格员',
          name: '张经商',
          tel: '18809102345'
        },
        {
          street: '大湾街道',
          role: '网格员',
          name: '张经商',
          tel: '18809102345'
        },
        {
          street: '大湾街道',
          role: '网格员',
          name: '张经商',
          tel: '18809102345'
        }
      ]
    }
  },
  methods: {
    // 表头行样式
  }

}
</script>

<style lang="less" scoped>
.onlineTeamContainer{
  margin: 34px 19px 0 14px;

  .tableContainer{
    margin-top: 27px;
    width: 377px;
    font-size: 15px;
    font-family: Source Han Sans CN;
    font-weight: 500;

    // 表头
    .table_head{
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      box-sizing: border-box;
      height: 30px;
      color: #8ACBF8;
      background-color: rgba(47, 137, 230, 0.32);
      border-bottom: 1px solid rgba(207, 227, 254, .64);

      div{
        flex-shrink: 0;
        &:nth-child(1){
          width: 60px;
        }
        &:nth-child(2){
          width: 60px;
        }
        &:nth-child(3){
          width: 44px;
        }
        &:nth-child(4){
          width: 134px;
          text-align: center;
        }
      }
    }

    .table_content{
      display: block;
      font-size: 15px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #F0FCFD;
      height: 200px;
      overflow-x: auto;

      // 隐藏滚动条
      &::-webkit-scrollbar { width: 0 !important }

        // 表格内容
        .table_row{
          display: flex;
          box-sizing: border-box;
          align-items: center;
          justify-content: space-evenly;
          margin-top: 3px;
          height: 36px;
          background-color: rgba(47, 137, 230, 0.32);
          border: 1px solid rgba(21,87,134,0.5800);

          div{
              flex-shrink: 0;
              &:nth-child(1){
                width: 60px;
              }
              &:nth-child(2){
                width: 60px;
              }
              &:nth-child(3){
                width: 45px;
              }
              &:nth-child(4){
                width: 134px;
              }
          }

          .phone{
            display: flex;
            align-items: center;
            div{
              flex-shrink: 0;
            }
            .num{
              width: 94px;
            }
            .tel{
              width: 14px;
              height: 14px;
              margin-left: 6px;
              cursor: pointer;
              background: url('@/assets/images/电话icon.png');
            }
            .video{
              width: 14px;
              height: 14px;
              margin-left: 6px;
              cursor: pointer;
              background: url('@/assets//images/视频icon.png');
            }
          }
        }
    }
  }

  //
  .bg{
    background: rgba(23,55,92,0.2200) !important;
  }
}

</style>
