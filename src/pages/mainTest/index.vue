<template>
  <div class="test-desc">
    <div class='title'>
        MBTI职业性格测试题
    </div>
    <div class="title-img">
      <img :src="title_img" mode="widthFix">
    </div>
    <div class='content'>
      <div class="desc">
      1.参加测试的人员请务必诚实、独立地回答问题，只有如此，才能得到有效的结果。   
      </div>
      <div class='desc' >
        2.《性格分析报告》展示的是你的性格倾向，而不是你的知识、技能、经验。  
      </div>
      <div class='desc' style='div-align:justify;display:block;'>
          3.MBTI提供的性格类型描述仅供测试者确定自己的性格类型之用，性格类型没有好坏，只有不同。每一种性格特征都有其价值和优点，也有缺点和需要注意的地方。清楚地了解自己的性格优劣势，有利于更好地发挥自己的特长，而尽可能的在为人处事中避免自己性格中的劣势，更好地和他人相处，更好地作重要的决策。   
      </div>
      <div class='desc' >
          4.本测试共46题；需时约5分钟。所有题目没有对错之分，请根据自己的实际情况选择。  
      </div>
    </div>
    <div class='btn-test'>
      <div class="btn animate_" @click="go_question">开始测试 </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },

  data () {
    return {
      title_img: require('../../../static/images/h1.jpeg'),
    }
  },

  methods: {
    go_question() {
      const url = '../question/main'
      wx.navigateTo({ url: url })
    },
  },
}
</script>

<style lang="less" scoped>
.test-desc{
  padding:0 16px;
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
