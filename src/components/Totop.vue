<!-- by your name -->
<template>
  <div>
    <transition name="rotate">
    <div class="to-top" v-show="isShow" @click="backTop">
  <i class="iconfont icon-top"></i>
  <span>顶部</span>
</div>
    </transition>

  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow:false,
      oTop:0
    };
  },
mounted(){
    window.onscroll=()=>{
this.oTop=document.documentElement.scrollTop||document.body.scrollTop;
  }

  },
watch:{
    oTop(){
      if(this.oTop>=100){
this.isShow=true;
      }else{
        this.isShow=false;
      }
    }
},

  components: {},
  computed: {},
  methods: {
backTop(){
  let num=this.oTop;
  const timer=setInterval(()=>{
    num=num-50;
  document.documentElement.scrollTop=num;
  document.body.scrollTop=num;
    if(num<=0){
    clearInterval(timer);
  }
  },20);

}
  }
}

</script>
<style lang='less' scoped>
.to-top{
  position:fixed;
  bottom: 70px;
  right: 10px;
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border:1px solid #ddd;
  background: rgba(255, 255, 255, .8);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  i{
    font-size: 18px;
  }
  span{
    font-size: 14px;
  }
}
.rotate-enter{
  transform: rotateY(-90deg);
  opacity: 0;
}
.rotate-leave{
  transform: rotateY(0);
  opacity: 1;
}
.rotate-enter-active,
.rotate-leave-active
{
 transition: all .5s ease;
}
.rotate-leave-active{
  transform: rotateY(90deg);
  opacity: 0;
}

</style>
