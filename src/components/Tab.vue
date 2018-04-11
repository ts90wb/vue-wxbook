<!-- by your name -->
<template>
  <nav>
       <router-link v-for="(item,index) in tabArr" :key='index' :to="{'name':item.pathName}">
     <span class="iconfont" :class="($route.name==item.pathName)?item.iconClass+'-active':item.iconClass"></span>
     <h5>{{item.linkTitle}}</h5>
   </router-link>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      flag:'',
      tabArr:[{pathName:'Home',iconClass:'icon-home',linkTitle:'首页'},
      {pathName:'Category',iconClass:'icon-list',linkTitle:'分类'},
      {pathName:'Cart',iconClass:'icon-cart',linkTitle:'购物车'},
      {pathName:'Self',iconClass:'icon-personal',linkTitle:'个人'}
      ]
    };
  },

  components: {},
  computed: {
  },
  methods: {

  }
}

</script>
<style lang='less' scoped>
nav{
  position:fixed;
  left: 0;
  bottom: 0;
  display: flex;
  width:100%;
  height: 60px;
  border-top:1px solid #ddd;
  box-shadow:2px -2px 3px rgba(0,0,0,.1);
  background: white;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  a{
    display: flex;
    width: 25%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    span{
      font-size: 22px;
      margin-bottom: 5px;

    }

  }
}

</style>
