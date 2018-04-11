<!-- by your name -->
<template>
  <div class="wrapper" @touchstart="stop()" @touchend="autoplay()">
    <transition-group name="slide" class="slider" tag="div" @swipeRight="">
      <a v-for="(item,index) in imgArr" v-show="index==mark" :key="index" href="#"><img :src="item" alt="轮播图片" width="640" height="304"></a>
    </transition-group>
<ul class="pagination">
  <li  v-for="(item,index) in imgArr.length" :class="{'active':index==mark}" :key="index"></li>
</ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timer:null,
      mark:0,
      imgArr:[
       require('assets/images/slider-1.jpg'),
       require('assets/images/slider-2.jpg'),
       require('assets/images/slider-3.jpg'),
       require('assets/images/slider-4.jpg')

      ]
    };
  },

  components: {},
  computed: {},
  created(){
    this.autoplay()
  },
  methods: {
   play(){
      this.mark++;
      if(this.mark==4){
        this.mark=0;
      }
    },
    autoplay(){
      this.timer=setInterval(this.play,2500);
    },
    stop(){
      clearInterval(this.timer);
    }
  }
}

</script>
<style lang='less' scoped>
.wrapper{
  position: relative;
  width: 100%;
  height: 152px;
overflow: hidden;
  .slider{
    height: 100%;
width:100%;
a{
  position: absolute;
  img{
    width: 320px;
    height: 152px;
  }
}
  }
  .pagination{
    display: flex;
    position: absolute;
width: 100%;
margin-top: -20px;
justify-content: center;
align-items: flex-start;
li{
  width: 10px;
  height: 10px;
  margin:0 5px;
  border-radius: 50%;
  background: white;
  border:1px solid #aaa;
  box-shadow: 1px 1px 2px rgba(0,0,0,.3)
}
li.active{
    background:orange;
  }

  }
}
.slide-enter{
  transform: translateX(100%);
}
.slide-leave{
  transform: translateX(0);
}
.slide-enter-active{
  transition: all 1.5s ease;
}
.slide-leave-active{
  transition: all 1.5s ease;
  transform: translateX(-100%)

}
</style>
