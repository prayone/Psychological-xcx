<template>
    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
        <block v-for="(item, index) in images" :key="index">
            <swiper-item>
                <image :src="item.url" class="slide-image" mode="widthFix"/>
            </swiper-item>
        </block>
    </swiper> 
</template>

<script>
export default {
  props: {
    images: {
      type: Array
    }
  },
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 500
    }
  }
}
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 200px !important;
}
image {
  height: 100%;
  width: 100%;
}
</style>