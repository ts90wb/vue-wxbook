<template>
  <div id="app">
    <tab></tab>
 <div class="content">
     <transition name="slide-fade">
     <router-view></router-view>
     </transition>
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
.slide-fade-enter-active{
  transition: all .3s ease;
}
.slide-fade-leave-active{
  transition: all .3s cubic-bezier(1, .5, .8, 1);
}
.slide-fade-enter,.slide-fade-leave-active{
  transform: translateX(-430px);
  opacity: 0;
}
.active{
  color: red;
}
</style>

