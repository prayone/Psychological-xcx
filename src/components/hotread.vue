<template>
  <div class="hot">
    <div class="title-desc">
      热门导读
    </div>
    <div class="list">
      <div class="item" v-for="(item,index) in hotread_list" :key="index">
        <img :src="item.url" mode="widthFix">
        <div class="little-img"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    hotread_list: {
      type: Array
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    console.log(this.hotread_list)
  }
}
</script>
<style scoped lang='less'>
.hot{
  padding: 16px;
  border-top: 5px solid #f2f2f2;
  .list{
    .item{
      width: 100%;
      height: 200px;
      margin-bottom: 16px;
      position: relative;
      img{
        border-radius: 4px;
      }
      .little-img{
        background: rgba(0,0,0,0.3);
        position: absolute;
        top:0px;
        left: 0px;
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
    }
  }
}
</style>