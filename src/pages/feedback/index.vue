<template>
<div class="feed-back">
  <div class="title">
    主题
  </div>
  <input type="text" v-model="title" placeholder="请描述你的问题" placeholder-style="color:#aaa;font-size:12px;">
  <div class="title" style="margin-top:30px;">
    问题描述
  </div>
  <textarea v-model="content" cols="40" rows="10" placeholder="您的意见就是我们前进的动力~" placeholder-style="color:#aaa;font-size:12px;"></textarea>

  <div class="submit" @click="submit">提交</div>
</div>
</template>
<script>
import { feedback } from '../../api'

export default {
  data() {
    return {
      content: '',
      title: '',
    }
  },
  methods: {
    async submit() {
      const {title, content} = this
      const res = await feedback({title, content})
      if (res.code === 201) {
        wx.showToast({
          title: '提交成功!',
          icon: 'success',
          duration: 2000,
        })
        this.title = ''
        this.content = ''
        setTimeout(() => {
          const url = '../index/main'
          wx.switchTab({
            url,
          })
        }, 1000)
      } else {
        wx.showToast({
          title: '提交失败，请重试',
          icon: 'success',
          duration: 2000,
        })
      }
      console.log(res, '------')
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