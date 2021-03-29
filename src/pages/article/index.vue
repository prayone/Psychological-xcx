<template>
  <div class="article">
    <div class="title">{{title}}</div>
    <div class="card">
      <div class="article-list">
        <div class="article-item" v-for="(item,index) in content" :key="index">
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { queryArticle } from '../../api/index'

export default {
  data() {
    return {
      id: '',
      title: '',
      content: [],
    }
  },
  onLoad(options) {
    this.id = options.id
    this.get_detail()
  },
  methods: {
    async get_detail() {
      let res = await queryArticle(this.id)
      this.title = res.data.title
      this.content = res.data.content && res.data.content.split(/[(\r\n)\r\n]+/)
    },
  },
  created() {
  },
}
</script>

<style scoped lang="less">
.article{
  background: linear-gradient(0deg, #b1d4f1 0%, #30CFAE 100%);
  height: 100vh;
  padding-top: 6px;
  .title{
    color: #fff;
    font-size: 17px;
    line-height: 23px;
    padding: 0 16px ;
    text-shadow:rgb(167, 80, 80) 2px 2px 2px;
    margin-bottom: 13px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:1; 
  }
  .card{
    overflow-y: scroll;
    position: fixed;
    width: 93%;
    left: 50%;
    transform: translateX(-50%);
    height: 89vh;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px 0px rgba(206, 223, 241, 0.4);
    border-radius: 8px;
    border: 1px solid rgba(237, 240, 247, 0.8);
    padding: 16px;
  }
  .article-list{
    .article-item{
      color: #666;
      text-indent: 2em;
      margin-bottom: 5px;
      line-height: 22px;
      font-size: 15px;
    }
  }
}
</style>
