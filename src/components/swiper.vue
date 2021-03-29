<template>
    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
    >
        <block v-for="(item, index) in images" :key="index">
          <a :href="'../article/main?id=' + item.id">
            <swiper-item class="swiper-item" @click='click_img'>
                <image :src="item.pic" class="slide-image" mode="widthFix"/>
                <div class="swiper-text animate_" >{{item.title}}</div>
            </swiper-item>
          </a>
        </block>
    </swiper> 
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
    },
  },
  data() {
    return {
      // indicator_color: '#30CFAE',
      indicatorDots: true,
      autoplay: true,
      interval: 3500,
      duration: 500,
    }
  },
  methods: {
  },
}
</script>
<style>

.wx-swiper-dots{position:relative;left: unset!important;right: 0;}
.wx-swiper-dots.wx-swiper-dots-horizontal{
margin-bottom: -5rpx;
}
</style>
<style scoped lang='less'>
.swiper {
  width: 100%;
  height: 200px !important;
  .swiper-item{
    position: relative;
    .swiper-text{
      height: 28px;
      position: absolute;
      bottom: 6px;
      left:10px;
      // background: rgba(0, 0, 0, 0.4);
      background: #30CFAE;
      // border: 1px solid #30CFAE;
      color: #fff;
      border-radius:0;
      // color: #fff;
      line-height: 28px;
      text-align: right;
      padding:0 16px;
      // text-shadow:#30CFAE 2px 2px 2px;
      font-size: 16px;
      border-radius: 28px;
      display: inline-block;
      max-width: 220px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;  //溢出不换行
    }
  }
}
image {
  height: 100%;
  width: 100%;
}
</style>