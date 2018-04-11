<!-- by your name -->
<template>
  <div>
    <header>
      <div class="back iconfont icon-arrow"></div>
      <h2>{{title}}</h2>
    </header>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {};
  },

  components: {},
  computed: {},
  methods: {}
};
</script>
<style lang='less' scoped>
header {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  box-sizing: border-box;
  align-items: center;
  background: rgb(250, 250, 250);
  border-bottom:1px solid #eee;
  z-index: 1000;
  .back{
    position: fixed;
    transform: rotate(-180deg);
    font-size: 20px;
    color:#f41e33;
    font-weight: bold;
  }
  h2 {
    width: 100%;
    font-size: 16px;
    text-align: center;
  }
}
</style>
