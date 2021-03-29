<template>
  <div class="jingpin">
    <div class="list">
      <div class="item" v-for="(item,index) in jingpin_list" :key="index" @click="goTest(item)">
        <div class="img" :style="{background:img_url[index].background}">
          <img :src="img_url[index].url" mode="widthFix">
        </div>
        <div class="title">{{item.type}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    jingpin_list: {
      type: Array,
    },
  },
  data() {
    return {
      img_url: [{
        url: require('../../static/images/jp1.png'),
        background: '#50c69a',
      }, {
        url: require('../../static/images/jp4.png'),
        background: '#8682d7',
      }, {
        url: require('../../static/images/jp3.png'),
        background: '#8da5de',
      }, {
        url: require('../../static/images/jp2.png'),
        background: '#8da5de',
      } ],
    }
  },
  methods: {
    goTest(item) {
      const url = '../queryTest/main?type=' + item.id
      wx.navigateTo({ url: url })
    },
  },
}
</script>
<style scoped lang='less'>
.jingpin{
  padding: 16px;
  .list{
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .item{
      margin-bottom: 7px;
      .img{
        width: 40px;
        height: 40px;
        border-radius: 100%;
        margin: 0 auto;
        background: pink;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 26px!important;
          height: 26px!important;
        }
      }
      .title {
        margin-top: 7px;
        font-size: 14px;
        color: #444;
      }
    }
  }
}
</style>