<!-- by your name -->
<template>
  <div class="wrapper">
    <transition name="spread">
        <div class="hidden" v-show="!isShow">
      <input type="text" placeholder="请输入要搜索内容">
      <i class="iconfont icon-search"></i>
      <span>搜索</span>
    </div>
    </transition>
    <div class="show" v-show="isShow" @click="showBar">
      搜索
    </div>
    <div class="content">

    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
isShow:true
    };
  },
mounted(){
window.onscroll=()=>{
this.isShow=true;
}
},
  components: {},
  computed: {},
  methods: {
    showBar(){
      this.isShow=false;
    }
  }
};
</script>
<style lang='less' scoped>
.wrapper {
  .hidden {
    display: flex;
    width: 100%;
    height: 40px;
    margin-top: 40px;
    padding: 8px 0 8px 10px;
    box-sizing: border-box;
    background: #ddd;
    justify-content: space-between;
    align-items: center;

    input {
      position: relative;
      width: 80%;
      height: 100%;
      padding: 0 10px 0 30px;
      font-size: 14px;
      box-sizing: border-box;
      border: 5px;
      &:-webkit-input-placeholder {
        font-size: 14px;
        color: #999;
      }
    }
    .icon-search {
      position: absolute;
      left: 20px;
      font-size: 16px;
    }
    span {
      width: 20%;
      font-size: 14px;
      text-align: center;
    }
  }
  .show{
    position: fixed;
    right: 0;
    top:40px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgb(97, 63, 0);
    text-align: center;
    line-height: 40px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
    color: #eee;
  }
  .content{
   
  }
}
.spread-enter{
  transform: scaleX(0);
}
.spread-enter-active,
.spread-leave-active{
  transition:all .5s;
}
.spread-leave-active{
  transform: scaleX(100%);
}
</style>
