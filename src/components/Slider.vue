<!-- by your name -->
<template>
<div class="swiper-container">
    <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide class="swiper-slide" v-for="(item,index) in imgArr" :key="index"><a href="#"><img :src="item" alt="轮播图片" height="304" width="640"></a></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      imgArr:[
       require('assets/images/slider/slider-1.jpg'),
       require('assets/images/slider/slider-2.jpg'),
       require('assets/images/slider/slider-3.jpg'),
       require('assets/images/slider/slider-4.jpg')

      ],
       swiperOption: {
     pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
autoplayDisableOnInteraction : false,
speed:1000,
      autoplay: {
         delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  loop:true,

        }
    };
  },

  components: {
    swiper,
    swiperSlide
  },
  computed: {

  },
 mounted(){


  },
  methods: {

  }
}

</script>
<style lang='less' scoped>
.swiper-container{
  width: 100%;
 height: 152px;
 a{
   display: block;
   height: 152px;
 img{
   height: 152px;
   width: 100%;
 }
 }
.swiper-pagination{
text-align: right;
padding: 0 10%;
box-sizing: border-box;
}


}


</style>
