<template>
  <div>
    <swiper :images='swiper_list'/>
    <jingpin :jingpin_list='jingpin_list'/>
    <hotread :hotread_list='hotread_list'/>
  </div>
</template>

<script>
import swiper from '@/components/swiper'
import jingpin from '@/components/jingpin'
import hotread from '@/components/hotread'

export default {
  components: {swiper, jingpin, hotread},
  data() {
    return {
      swiper_list: [
        {
          url:
            require('../../../static/images/xl1.jpeg')
        },
        {
          url:
             require('../../../static/images/xl2.jpeg')
        },
        {
          url:
            require('../../../static/images/xl3.jpeg')
        },
        {
          url:
             require('../../../static/images/xl4.jpeg')
        },
        {
          url:
             require('../../../static/images/xl5.jpeg')
        } ],
      jingpin_list: [
        {
          id: '',
          url: require('../../../static/images/xin.png'),
          title: '情感测试',
          background: '#c27a7a'
        },
        {
          id: '',
          url: require('../../../static/images/array_down.png'),
          title: '性格测试',
          background: '#8682d7'
        },
        {
          id: '',
          url: require('../../../static/images/sex.png'),
          title: '职场测试',
          background: '#50c69a'
        },
        {
          id: '',
          url: require('../../../static/images/message.jpg'),
          title: '心理测试',
          background: '#8da5de'
        }
      ],
      hotread_list: [
        {
          id: '',
          url: require('../../../static/images/h1.jpeg'),
          title: '',
          content: '         '
        },
        {
          id: '',
          url: require('../../../static/images/h2.jpeg'),
          title: '',
          content: '         '
        },
        {
          id: '',
          url: require('../../../static/images/h3.jpeg'),
          title: '',
          content: '         '

        },
        {
          id: '',
          url: require('../../../static/images/h4.jpeg'),
          title: '',
          content: '         '
        }
      ]
    }
  },

  methods: {},

  created() {
    // let app = getApp()
  }
}
</script>

<style scoped>
</style>
