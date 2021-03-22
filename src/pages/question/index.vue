<template>
  <div class="question">
    <slider-com :question_length='question_list.length' :question_current='question_current'/>
    <div class="question-box">
      <div class="name">{{pre_question.name}}</div>
      <radio-group class="radio-group" @change="radioChange">
        <label class="radio" v-for="(item, idx) in pre_question.items" :key="idx">
          <radio color='#30CFAE' :value="item.val" :checked="item.checked"  /> {{item.name}}
        </label>
      </radio-group>
    </div>
    <div class="back-question" @click="back_answer">
      上一题
    </div>
  </div>
</template>

<script>
import sliderCom from '../../components/sliderCom'
export default {
  components: {
    sliderCom
  },
  data () {
    return {
      question_current: 1,
      question_list: [
        {
          name: '我是测试第一题?',
          items: [
            {val: 'A', name: 'A. 是'},
            {val: 'B', name: 'B. 否'}
          ]
        }, {
          name: '我是测试第二题?',
          items: [
            {val: 'A', name: 'A. 是'},
            {val: 'B', name: 'B. 否'}
          ]
        }, {
          name: '我是测试第三题?',
          items: [
            {val: 'A', name: 'A. 是'},
            {val: 'B', name: 'B. 否'}
          ]
        }, {
          name: '我是测试第四题?',
          items: [
            {val: 'A', name: 'A. 是'},
            {val: 'B', name: 'B. 否'}
          ]
        }, {
          name: '我是测试第五题?',
          items: [
            {val: 'A', name: 'A. 是'},
            {val: 'B', name: 'B. 否'}
          ]
        }, {
          name: '我是测试第六题?',
          items: [
            {val: 'A', name: 'A. 是'},
            {val: 'B', name: 'B. 否'}
          ]
        }
      ],
      answers_obj: {}
    }
  },
  computed: {
    pre_question() {
      return this.question_list[this.question_current - 1]
    }
  },
  created () {

  },
  methods: {
    back_answer() {
      if (this.question_current <= 1) {
        return
      }
      this.question_current -= 1
    },
    radioChange(e) {
      if (this.question_current >= this.question_length) {
        console.log('-----')
      } else {
        this.answers_obj[this.question_current] = e.target.value
        this.question_current += 1
        console.log(e.target.value, '-----0000')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.question{
  padding:26px 16px 16px;
  .question-box{
    .name{
      font-size: 16px;
      color: #555;
      padding: 10px 0;
    }
    .radio{
      display: block;
      padding-top:10px;
    }
  }
  .back-question{
    margin:60px auto 0;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 42px;
    background: linear-gradient(90deg, #53D484 0%, #28CFB9 100%);
    box-shadow: 0px 4px 8px 0px rgba(22, 205, 199, 0.44);
    border-radius: 24px;
  }
  
}
</style>
