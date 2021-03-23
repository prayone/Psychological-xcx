<template>
    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
     @change="swiperChange" 
    >
        <block v-for="(item, index) in images" :key="index">
            <swiper-item class="swiper-item" >
                <image :src="item.url" class="slide-image" mode="widthFix"/>
                <div class="swiper-text">这是文章标题</div>
            </swiper-item>
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
      indicatorDots: false,
      autoplay: true,
      interval: 3000,
      duration: 500,
    }
  },
  onSwiperTap() {
    console.log(0)
    const url = '../article/main'
    wx.navigateTo({ url: url })
  },
  methods: {
    swiperChange(e) {
      console.log(e, '--------')
      // const url = '../article/main'
      // wx.navigateTo({ url: url })
    },
  },
}
</script>

<style scoped lang='less'>
.swiper {
  width: 100%;
  height: 200px !important;
  .swiper-item{
    position: relative;
    .swiper-text{
      height: 30px;
      position: absolute;
      bottom: 0px;
      left:10px;
      background: rgba(0, 0, 0, 0.3);
      border-radius:0;
      color: #fff;
      line-height: 30px;
      text-align: right;
      padding:0 16px;
      text-shadow:#30CFAE 2px 2px 2px;
      font-size: 16px;
      border-radius: 28px;
      display: inline-block;
    }
  }
}
image {
  height: 100%;
  width: 100%;
}
</style>