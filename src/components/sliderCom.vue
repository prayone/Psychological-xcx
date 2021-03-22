<template>
  <div class="slider-box">
    <div class="slider">
      <div class="current-slider" :style="{width:slider_width+'%'}"></div>
    </div>
    <div class="slider-index">{{question_current}}/{{question_length}}</div>
  </div>
</template>

<script>
export default {
  props: {
    att: {
      type: String
    },
    question_length: {
      type: Number
    },
    question_current: {
      type: Number
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
    slider_width() {
      let val = (100 / this.question_length) * this.question_current
      return val
    }
  },
  methods: {
    select_answer() {

    }
  }
}
</script>

<style lang="less" scoped>
.slider-box{
  .slider{
    background: #eee;
    width: 100%;
    height: 6px;
    border-radius: 6px;
    position: relative;
    .current-slider{
      max-width: 100%;
      position: absolute;
      height: 6px;
      border-radius: 6px;
      left: 0;
      top: 0;
      background: #30CFAE;
    }
  }
  .slider-index{
    color: #30CFAE;
    font-size: 14px;
    margin-top: 6px;

  }
  .back-question{
    margin:30px auto;
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
