<!-- by your name -->
<template>
  <div>
    <Mheader title="图书分类"></Mheader>
    <search-bar></search-bar>
    <ul class="content">
<li v-for="(item,index) in categoryList" :key="index">
  <a href="#" class="title">
<i class="iconfont" :class="item.iconClass"></i>
<h3>{{item.title}}</h3>
<p></p>
  </a>
  <div class="detail-list">
 <a href="#" class="detail-list" :key="index" v-for="(ele,index) in item.detailList">{{ele}}</a>
  </div>
  </li>
    </ul>
  </div>
</template>

<script>
import Mheader from 'components/Mheader'
import SearchBar from 'components/SearchBar'
export default {
  data () {
    return {
      categoryList:[
        {iconClass:'icon-yedw',title:'少儿',detailList:['0-2岁','3-6岁','7-10岁','11-14岁','家庭教育']},
        {iconClass:'icon-czdu',title:'文学小说',detailList:['当代小说','世界名著','传记','青春与动漫']},
        {iconClass:'icon-dxdw',title:'学习考试',detailList:['教材辅助','外语类','医学类','建筑类','工具书']},
        {iconClass:'icon-lddu',title:'经济管理',detailList:['管理学','经济与金融','投资理财']},
        {iconClass:'icon-like',title:'励志与成功',detailList:['成功学','心理学','心灵励志']},
        {iconClass:'icon-etdw',title:'童书',detailList:['儿童文学','童话故事','必读名著','儿童英语']},
        {iconClass:'icon-shdw',title:'生活',detailList:['家庭与育儿','运动健身','烹饪美食','时尚美容']},
        {iconClass:'icon-keji',title:'科技',detailList:['计算机','科普读物','工业技术','医学','建筑']},
        {iconClass:'icon-sy',title:'艺术与摄影',detailList:['摄影','绘画','书法与字帖']},
        {iconClass:'icon-xxdw',title:'人文与社科',detailList:['哲学与宗教','历史','政治','法律','军事']},
      ]
    };
  },

  components: {
    Mheader,
    SearchBar
  },
  computed: {},
  methods: {}
}

</script>
<style lang='less' scoped>
.content{
 display: flex;
 width: 100%;
 padding: 0 10px;
 box-sizing: border-box;
 flex-direction: column;
 li{
   width:100%;

 .title{
   display: flex;
   margin:10px 0;
   justify-content: space-between;
   align-items: center;
   font-size: 14px;


   i{
     font-size: 20px;

  &.icon-yedw,
  &.icon-sy,
&.icon-lddu{
       color:#0242a2;
     }
&.icon-czdu,
&.icon-xxdw,
&.icon-like{
       color:#ff8400;
     }
  &.icon-dxdw,
  &.icon-shdw,
&.icon-etdw{
       color:#ff5796;
     }
       &.icon-lddu,
&.icon-keji{
       color:#6da9ff;
     }
   }
   p{
     width: 70%;
     height: 1px;
     background: #ddd;
   }
 }
 .detail-list{
   display: flex;
   flex-wrap: wrap;
   box-sizing: border-box;
   a{
     display: block;
     width: 33.3%;
     height: 40px;
     text-align: center;
     line-height: 40px;
     font-size: 14px;
     background: #fff;
     border:1px solid #eee;
   }
 }
}
}
</style>
