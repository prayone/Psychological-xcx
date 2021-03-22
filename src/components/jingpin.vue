<template>
  <div class="jingpin">
    <!-- <div class="title-desc">
      心灵密友
    </div> -->
    <div class="list">
      <div class="item" v-for="(item,index) in jingpin_list" :key="index">
        <div class="img" :style="{background:item.background}">
          <img :src="item.url" mode="widthFix">
        </div>
        <div class="title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    jingpin_list: {
      type: Array
    }
  },
  data() {
    return {

    }
  }
}
</script>
<style scoped lang='less'>
.jingpin{
  padding: 16px;
  .list{
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .item{
      margin-bottom: 7px;
      .img{
        width: 40px;
        height: 40px;
        border-radius: 100%;
        margin: 0 auto;
        background: pink;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 26px!important;
          height: 26px!important;
        }
      }
      .title {
        margin-top: 7px;
        font-size: 14px;
        color: #444;
      }
    }
  }
}
</style>