<template>
  <div class="test-desc">
    <div class='title'>
       {{title}}
    </div>
    <div class="title-img">
      <img :src="pic" mode="widthFix">
    </div>
    <div class='content'>
      <div class="desc" v-for="(item,index) in desc" :key="index">
      {{item}}  
      </div>
    </div>
    <div class='btn-test'>
      <div class="btn animate_" @click="go_question">开始测试</div>
    </div>
  </div>
</template>

<script>
import { queryTest } from '../../api/index'

export default {
  components: {
  },
  onLoad(options) {
    this.type = options.type || 4
    this.get_detail()
  },
  data () {
    return {
      title: '',
      pic: require('../../../static/images/h1.jpeg'),
      desc: '',
      type: null,
    }
  },

  methods: {
    async get_detail() {
      let res = await queryTest(this.type)
      this.title = res.data.title
      this.pic = res.data.pic
      this.desc = res.data.desc && res.data.desc.split(/[(\r\n)\r\n]+/)
    },
    go_question() {
      const url = '../question/main?type=' + this.type
      wx.navigateTo({ url: url })
    },
  },
}
</script>

<style lang="less" scoped>
.test-desc{
  padding:0 16px 60px;
  .title{
    color: #333;
    font-size: 18px;
    padding: 16px 0 16px;
  }
  .title-img{
    width: 100%;
    height: 200px;
    border-radius: 6px;
    img{
      border-radius: 6px;
    }
  }
  .content{
    .desc {
      color: #666;
      // text-indent: 2em;
      line-height: 22px;
      margin-top: 8px;
      font-size: 14px;
    }
  }
  .btn-test{
    padding: 30px;
    .btn{
      width: 100%;
      height: 45px;
      background: linear-gradient(90deg, #53D484 0%, #28CFB9 100%);
      box-shadow: 0px 4px 8px 0px rgba(22, 205, 199, 0.44);
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
  }
}
.animate_{
  -webkit-animation: scaleDraw 4.5s ease-in-out infinite;
}
 @keyframes scaleDraw {  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
    0%{
        transform: scale(1);  /*开始为原始大小*/
    }
    25%{
        transform: scale(1.05); /*放大1.1倍*/
    }
    50%{
        transform: scale(1);
    }
    75%{
        transform: scale(1.05);
    }
    100%{
       transform: scale(1);
    }
}
</style>
