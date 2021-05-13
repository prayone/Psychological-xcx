<template>
  <div class="question">
    <!-- 结果 -->
    <div class="result" v-if="is_show">
      <div class="result-title">恭喜您已完成测试，您的测试结果为：</div>
      <div class="result-val">{{result.val}}</div>
      <div class="result-desc-list">
        <div class="result-desc-item" v-for="(item,index) in result_desc" :key="index">
          {{item}}
        </div>
      </div>
      <div class="result-title article-recommend">根据您的测试结果，为您推荐相关文章</div>
       <div class="test-list">
        <div class="test-item" v-for="(item,index) in result.articles" :key="index" @click="go_detail(item.id)">
          <div class="item-box">
            <div class="title">{{item.title}}</div>
            <div class="time">{{item.create_date}}</div>
          </div>
          <div class="array"><img :src="jiantou"></div>
        </div>
        </div>
      <div class="back-question" @click="go_home">返回首页</div>
    </div>
    <!-- 题目 -->
     <div class="question-all" v-else>
      <slider-com :question_length="question_list&&question_list.length" :question_current="question_current" />
      <div class="question-box" v-if="pre_question">
        <div class="name">{{pre_question.title}}</div>
        <radio-group class="radio-group" @change="radioChange">
          <label class="radio" v-for="(item, idx) in pre_question.answer" :key="idx">
            <radio color="#30CFAE" :value="item.key" :checked="item.checked" />
            <span class='label-text'>{{item.val}}</span>
          </label>
        </radio-group>
      </div>
      <div class="back-question" v-if="question_list.length" @click="back_answer">上一题</div>
    </div>
  </div>
</template>

<script>
import {queryQuestion, queryResult, setRecord} from '../../api'
import sliderCom from '../../components/sliderCom'
export default {
  components: {
    sliderCom,
  },
  data() {
    return {
      question_current: 0,
      question_list: [],
      answers_obj: {},
      is_show: false,
      type: '',
      result: {},
      jiantou: require('../../../static/images/右箭头.png'),

    }
  },
  computed: {
    pre_question() {
      return this.question_list[this.question_current]
    },
    result_desc() {
      let desc = this.result.desc && this.result.desc.content.split(/[(\r\n)\r\n]+/)
      return desc
    },
  },
  onLoad(options) {
    this.question_current = 0
    this.is_show = false
    this.question_list = []
    this.answers_obj = {}
    this.type = options.type
    this.get_detail()
  },
  methods: {
    go_home() {
      const url = '../index/main'
      wx.switchTab({
        url,
      })
    },
    async get_detail() {
      let res = await queryQuestion(this.type)
      res.data = res.data
      this.question_list = res.data
    },
    back_answer() {
      if (this.question_current <= 0) {
        return
      }
      this.question_current -= 1
    },
    radioChange(e) {
      this.answers_obj[this.question_current] = e.target.value
      if (this.question_current >= this.question_list.length - 1) {
        this.is_show = true
        let resultLast = Object.values(this.answers_obj)
        this.get_result(resultLast)
      } else {
        setTimeout(() => {
          this.question_current += 1
        }, 300)
      }
    },
    async get_result(answer) {
      let data = {
        answer,
      }
      let res = await queryResult(data)
      this.result = res.data
      this.post_result()
    },
    async post_result() {
      const openid = wx.getStorageSync('openid') || ''
      let data = {
        title: this.result.val,
        content: this.result.desc.content,
        psy_type: this.type,
        openid,
      }
      await setRecord(data)
    },
    go_detail(id) {
      const url = '../article/main?id=' + id
      wx.navigateTo({ url: url })
    },
  },
}
</script>

<style lang="less" scoped>
.question {
  padding: 26px 16px 16px;
  .question-box {
    .name {
      font-size: 16px;
      color: #555;
      padding: 10px 0;
    }
    .radio {
      display: block;
      padding-top: 10px;
      display: flex;
      align-items: flex-start;
    }
    .label-text{
      color:#555;
      padding-left: 12px;
      position: relative;
      top: 1px;
    }
  }
  .back-question {
    margin: 60px auto 0;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 42px;
    background: linear-gradient(90deg, #53d484 0%, #28cfb9 100%);
    box-shadow: 0px 4px 8px 0px rgba(22, 205, 199, 0.44);
    border-radius: 24px;
  }
  .result{
    .result-title{
      color: #444;
      font-size: 16px;
      margin-bottom: 20px;
    }
    .result-val{
      color: #30CFAE;
      font-weight: 700;
      font-size: 18px;
    }
    .result-desc-list{
      color: #666;
      font-size: 14px;
      .result-desc-item{
        margin-top: 10px;
      }
    }
  }
  .article-recommend{
    margin-top: 28px;
    font-size: 18px;
    font-weight: 600;
  }
  .test-list{
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
        color:#30CFAE;
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
