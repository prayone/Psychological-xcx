<template>
  <div>
    <swiper :images='swiper_list'/>
    <jingpin v-if='jingpin_list.length' :jingpin_list='jingpin_list'/>
    <hotread :hotread_list='hotread_list'/>
  </div>
</template>

<script>
import swiper from '@/components/swiper'
import jingpin from '@/components/jingpin'
import hotread from '@/components/hotread'

import { getArticleList, getCategory } from '../../api/index'

export default {
  components: {swiper, jingpin, hotread},
  data() {
    return {
      swiper_list: [
        {
          url:
            require('../../../static/images/xl1.jpeg'),
        },
        {
          url:
             require('../../../static/images/xl2.jpeg'),
        },
        {
          url:
            require('../../../static/images/xl3.jpeg'),
        },
        {
          url:
             require('../../../static/images/xl4.jpeg'),
        },
        {
          url:
             require('../../../static/images/xl5.jpeg'),
        } ],
      jingpin_list: [
        // {
        //   id: '',
        //   url: require('../../../static/images/jp1.png'),
        //   title: '情感测试',
        //   background: '#c27a7a',
        // },
        // {
        //   id: '',
        //   url: require('../../../static/images/jp2.png'),
        //   title: '性格测试',
        //   background: '#8682d7',
        // },
        // {
        //   id: '',
        //   url: require('../../../static/images/jp3.png'),
        //   title: '职场测试',
        //   background: '#50c69a',
        // },
        // {
        //   id: '',
        //   url: require('../../../static/images/jp4.png'),
        //   title: '心理测试',
        //   background: '#8da5de',
        // },
      ],
      hotread_list: [
        {
          id: '',
          url: require('../../../static/images/h1.jpeg'),
          title: '',
          content: '         ',
        },
        {
          id: '',
          url: require('../../../static/images/h2.jpeg'),
          title: '',
          content: '         ',
        },
        {
          id: '',
          url: require('../../../static/images/h3.jpeg'),
          title: '',
          content: '         ',

        },
        {
          id: '',
          url: require('../../../static/images/h4.jpeg'),
          title: '',
          content: '         ',
        },
      ],
      code: '',
    }
  },
  onLoad() {
    this.get_detail()
    this.get_jingpin()
    wx.login({
      success: async res => {
        this.code = res.code
        console.log(this.code, 'code-----')
      },
    })
  },
  methods: {
    async get_detail () {
      this.swiper_list = []
      this.hotread_list = []
      let res = await getArticleList()
      res.data.map((item) => {
        if (item.is_swiper) {
          this.swiper_list.push(item)
        } else {
          this.hotread_list.push(item)
        }
      })
    },
    async get_jingpin () {
      let res = await getCategory()
      // res.data.map((item, index) => {
      //   if (item.id === 4) {
      //     res.data.splice(index, 1)
      //   }
      // })
      this.jingpin_list = res.data
    },
  },
  mounted() {
    // let app = getApp()
  },
}
</script>

<style scoped>
</style>
