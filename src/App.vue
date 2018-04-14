<template>
  <div id="app">
    <div class="content">
     <transition name="slide">
     <keep-alive>
     <router-view ></router-view>
     </keep-alive>
     </transition>
    <tab></tab>
 </div>
  </div>
</template>

<script>
import Tab from 'components/Tab.vue'
export default {
  name: 'App',
  data(){
return {
}
  },
  filters:{

  },
  components:{
    Tab
  }
}
</script>

<style lang='less' scoped>
.content{
  position:absolute;
  left:0;
  top:0;
  width:100%;
  margin: 40px 0 65px 0;
}
.slide-enter{
  transform: translateX(100%);
}
.slide-leave-active,
.slide-enter-active{
transition:all .3s linear;
}
.slide-leave-active{
  transition:translateX(-100%);
}
.active{
  color: red;
}
</style>

