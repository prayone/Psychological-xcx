<template>
<div class="feed-back">
  <div class="title">
    问题描述
  </div>
  <textarea v-model="text_desc" cols="40" rows="10" placeholder="您的意见就是我们前进的动力~" placeholder-style="color:#aaa;font-size:12px;"></textarea>
  <div class="title" style="margin-top:30px;">
    联系方式
  </div>
  <input type="text" v-model="phone" placeholder="请留下您的联系方式（QQ，微信，手机号）等" placeholder-style="color:#aaa;font-size:12px;">
  <div class="submit" @click="submit">提交</div>
</div>
</template>
<script>
export default {
  data() {
    return {
      text_desc: '',
      phone: '',
    }
  },
  methods: {
    submit() {
      console.log(this.text_desc, '--------')
      console.log(this.phone, '------')
    },
  },
}
</script>
<style lang="less" scoped>
.feed-back{
  padding: 16px;
  .title{
    font-size: 15px;
    color: #333;
    padding-bottom: 10px;
  }
  textarea{
    box-sizing: border-box;
    padding: 16px 16px 16px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 15px;
    line-height: 20px;
    color: #666;
  }
  input{
    box-sizing: border-box;
    height: 45px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 15px;
    line-height: 16px;
    padding-left: 16px;
    color: #666;
  }
  .submit{
    width: 100%;
    height: 45px;
    background: linear-gradient(90deg, #53D484 0%, #28CFB9 100%);
    box-shadow: 0px 4px 8px 0px rgba(22, 205, 199, 0.44);
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin-top: 50px;
  }
}
</style>