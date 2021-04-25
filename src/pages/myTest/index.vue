<template>
  <div class="myTest">
   <div class="test-list">
     <div class="test-item" @click="go_detail">
      <div class="item-box">
        <div class="title">卡特尔人格测试</div>
        <div class="time">2021-10-10 19:40</div>
      </div>
      <div class="array"><img :src="jiantou"></div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      jiantou: require('../../../static/images/右箭头.png'),
    }
  },
  methods: {
    go_detail() {
      const url = '../myTestDetail/main'
      wx.navigateTo({ url })
    },
  },
}
</script>

<style lang="less" scoped>
.myTest{
  .test-list{
    padding: 14px;
    .test-item{
      box-shadow: 0px 4px 12px 0px rgba(206, 223, 241, 0.4);
      border-radius: 8px;
      border: 1px solid rgba(237, 240, 247, 0.8);
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title{
        font-size: 16px;
        // font-weight: 700;
      }
      .time{
        color: #858585;
        font-size: 12px;
        margin-top: 8px;
      }
      .array{
        width: 18px;
        height: 18px;
      }
    }
  }
  
}
</style>
