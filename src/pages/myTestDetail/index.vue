<template>
  <div class="myTest">
    我的测试详情
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    go_cont(item) {
      if (item.path) {
        const url = item.path
        wx.navigateTo({ url })
      }
    },
  },
}
</script>

<style lang="less" scoped>
.myTest{
 
}
</style>
