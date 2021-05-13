<template>
  <div class="myTest">
   <div class="test-list">
     <template v-if="result.length">
      <div class="test-item"  v-for="(item,index) in result" :key="index"  @click="go_detail(item.id)">
        <div class="item-box">
          <div class="title">{{item.psy_type.title}}</div>
          <div class="desc">结果：{{item.title}}</div>
          <div class="time">{{item.create_date}}</div>
        </div>
        <div class="array"><img :src="jiantou"></div>
      </div>
     </template>
     <div v-else class="list-empty">
       暂无记录
     </div>
    </div>
  </div>
</template>

<script>
import { getRecord } from '../../api'
export default {
  components: {
  },
  data () {
    return {
      jiantou: require('../../../static/images/右箭头.png'),
      result: [],
    }
  },
  onLoad() {
    this.get_result()
  },
  methods: {
    go_detail(id) {
      const url = '../myTestDetail/main?id=' + id
      wx.navigateTo({ url })
    },
    async get_result() {
      const openid = wx.getStorageSync('openid')
      let res = await getRecord({openid})
      this.result = res.data
    },
  },
}
</script>

<style lang="less" scoped>
.myTest{
  .test-list{
    padding: 14px;
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
        // font-weight: 700;
      }
      .desc {
        font-size: 14px;
        color:#333;
        padding: 10px 0;
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
    .list-empty {
      text-align: center;
      color: #666;
    }
  }
}
</style>
