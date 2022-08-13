<template>
  <div class="headerContainer">
    <div class="date">
      {{time.year}}年{{time.month}}月{{time.day}}日 {{time.week}}
    </div>
    <div class="title">
      <div>青白江区城市运行管理平台</div>
      <p>Qingbaijiang District urban operation management platform</p>
    </div>
    <div class="time">
      {{time.hour}}:{{time.minute}}:{{time.second}}
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  data () {
    return {
      time: {
        year: '',
        month: '',
        day: '',
        week: '',
        hour: '',
        minute: '',
        second: ''
      },
      // 定时器
      timer: null
    }
  },
  methods: {
    getTime () {
      // 年
      this.time.year = dayjs().year()
      this.time.month = dayjs().month() + 1
      this.time.day = dayjs().date()
      const weeks = dayjs().day()
      const weekArray = {
        1: '星期一',
        2: '星期二',
        3: '星期三',
        4: '星期四',
        5: '星期五',
        6: '星期六',
        0: '星期天'
      }
      this.time.week = weekArray[weeks]
      this.time.hour = this.formart(dayjs().hour())
      this.time.minute = this.formart(dayjs().minute())
      // if (dayjs().second() <= '9') {
      //   this.time.second = '0' + dayjs().second()
      // } else {
      //   this.time.second = dayjs().second()
      // }
      this.time.second = this.formart(dayjs().second())
    },
    // 时间格式化
    formart (m) {
      return m > 9 ? m : '0' + m
    }
  },
  created () {
    this.timer = setInterval(() => {
      this.getTime()
    }, 1000)
  }
}
</script>

<style lang="less" scoped>
  .headerContainer{
    position: relative;
    width: 100%;
    height: 95px;
    background-image: url('@/assets/images/top切图.png');
    // background-size: 100% 100%;
    background-position: center 0;

    .date{
      position: absolute;
      text-align: center;
      left: 396px;
      top: 9px;
      width: 148px;
      height: 14px;
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #65C6FF;
    }

    .title{
      position: absolute;
      left: 786px;
      top: 7px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #000000;
      div{
        width: 293px;
        height: 27px;
        font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: bold;

        // 文字渐变
        background: linear-gradient(0deg, #7EC4E8 0.146484375%, #FFFFFF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

      }

      p{
        margin-top: 3px;
        width: 100%;
        height: 12px;
        font-size: 8px;
        font-weight: 400;
        opacity: 0.82;

        background: linear-gradient(0deg, #7EC4E8 0.146484375%, #FFFFFF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .time{
      position: absolute;
      top: 10px;
      right: 438px;
      text-align: center;
      width: 63px;
      height: 12px;
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #65C6FF;
    }
  }

</style>
