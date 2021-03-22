<template>
  <div class="question">
    <div class="result" v-if="is_show">
      结果
    </div>
     <div class="question-all" v-else>
      <slider-com :question_length="question_list.length" :question_current="question_current" />
      <div class="question-box">
        <div class="name">{{pre_question.name}}</div>
        <radio-group class="radio-group" @change="radioChange">
          <div class="radio" v-for="(item, idx) in pre_question.items" :key="idx">
            <radio color="#30CFAE" :value="item.val" :checked="item.checked" />
            <span class='label-text'>{{item.val}}. {{item.name}}</span>
          </div>
        </radio-group>
      </div>
      <div class="back-question" @click="back_answer">上一题</div>
    </div>
  </div>
</template>

<script>
import sliderCom from '../../components/sliderCom'
export default {
  components: {
    sliderCom,
  },
  data() {
    return {
      question_current: 0,
      question_list: [
        {
          name: '我是测试第一题?',
          items: [
            { val: 'A', name: '是' },
            { val: 'B', name: '否' },
          ],
        },
        {
          name: '我是测试第二题?',
          items: [
            { val: 'A', name: '是' },
            { val: 'B', name: '否' },
          ],
        },
        {
          name: '我是测试第三题?',
          items: [
            { val: 'A', name: '是' },
            { val: 'B', name: '否' },
          ],
        },
        {
          name: '我是测试第四题?',
          items: [
            { val: 'A', name: '是' },
            { val: 'B', name: '否' },
          ],
        },
        {
          name: '我是测试第五题?',
          items: [
            { val: 'A', name: '是' },
            { val: 'B', name: '否' },
          ],
        },
        {
          name: '我是测试第六题?',
          items: [
            { val: 'A', name: '是' },
            { val: 'B', name: '否' },
          ],
        },
      ],
      answers_obj: {},
      is_show: false,
    }
  },
  computed: {
    pre_question() {
      return this.question_list[this.question_current]
    },
  },
  methods: {
    back_answer() {
      if (this.question_current <= 1) {
        return
      }
      this.question_current -= 1
    },
    radioChange(e) {
      if (this.question_current >= this.question_list.length - 1) {
        console.log('结果')
        this.is_show = true
      } else {
        this.answers_obj[this.question_current] = e.target.value
        setTimeout(() => {
          this.question_current += 1
        }, 300)
      }
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
      align-items: center;
    }
    .label-text{
      color:#555;
      padding-left: 12px;
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
}
</style>
