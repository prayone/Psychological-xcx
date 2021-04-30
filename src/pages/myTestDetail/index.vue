<template>
<!-- 结果 -->
<div class="result">
  <div class="result-title">测试结果为：</div>
  <div class="result-val">{{result.title}}</div>
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
</div>
</template>

<script>
import { getRecordDetail } from '../../api'
export default {
  components: {
  },
  data () {
    return {
      result: {},
    }
  },
  onLoad(options) {
    this.get_result(options.id)
  },
  computed: {
    result_desc() {
      let desc = Object.keys(this.result).length && this.result.desc.split(/[(\r\n)\r\n]+/)
      return desc
    },
  },
  methods: {
    async get_result(id) {
      let res = await getRecordDetail(id)
      this.result = res.data
    },
    go_detail(id) {
      const url = '../article/main?id=' + id
      wx.navigateTo({ url: url })
    },
  },
}
</script>

<style lang="less" scoped>
.result{
   padding: 26px 16px 16px;
    .result-title{
      color: #444;
      font-size: 16px;
      margin-bottom: 12px;
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
</style>
