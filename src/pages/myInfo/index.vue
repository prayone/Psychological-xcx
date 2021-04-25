<template>
  <div class="myInfo">
   <div class="user-info">
      <div class="img">
        <open-data type="userAvatarUrl" style="border-radius: 100%;"></open-data>
      </div>
      <div class="name">
        <open-data type="userNickName"></open-data>
      </div>
   </div>
   <div class="myList">
     <div class="myItem" v-for="(item,index) in my_list" :key="index" @click="go_cont(item)">
       <div class="icon"><img :src="item.img"></div>
       <button v-if="index==3" open-type="contact" class="contact myItem">
          <div class='text-icon'>联系我</div>
      </button>
      <div class="item-text" v-else>{{item.text}}</div>
       <div class="jiantou"><img :src="jiantou"></div>
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
      userInfo: {},
      jiantou: require('../../../static/images/右箭头.png'),
      my_list: [
        {
          img: require('../../../static/images/mylist1.png'),
          text: '我的测试',
          path: '../myTest/main',
        },
        {
          img: require('../../../static/images/yjfk.png'),
          text: '意见反馈',
          path: '../feedback/main',
        },
        // {
        //   img: require('../../../static/images/gywm.png'),
        //   text: '关于我',
        //   path: '../feedback/main',
        // },
        {
          img: require('../../../static/images/kefu.png'),
          text: '联系我',
        },
      ],
    }
  },
  methods: {
    go_cont(item) {
      if (item.path) {
        const url = item.path
        wx.navigateTo({ url })
      }
    },
  },
}
</script>

<style lang="less" scoped>
.myInfo{
  .user-info{
    background: linear-gradient(0deg, #9cccf5 0%, #30CFAE 100%);
    width: 100%;
    height: 220px;
    padding: 30px 0 0;
    .img {
      width:70px;
      height: 70px;
      border-radius: 100%;
      overflow: hidden;
      margin: 0px auto ;
      img{
        border-radius: 100%;
      }
    }
    .name{
      font-size: 20px;
      text-align: center;
      color: #fff;
      padding-top: 10px;
    }
  }
  .myList{
    padding: 16px;
    .myItem{
      display: flex;
      align-items: center;
      height: 50px;
      border-bottom: 1px solid #f2f2f2;
      color: #333;
      font-size: 15px;
      .item-text {
        flex: 1;
      }
      .icon{
        min-width: 20px;
        width: 20px;
        height: 20px;
        margin-right: 16px;
        position: relative;
        top: -1px;
      }
      .jiantou{
        width: 18px;
        height: 18px;
        margin-left: auto;
      }
    }
  }
  .contact{
    width:100%;
    display:block;
    height:50px;
    opacity:1;
    padding:0;
    border: 1px rgba(0, 0, 0, 0);
    outline: none!important;
    background: 0;
  }
  button::after{
    border:0;
  }
}
</style>
