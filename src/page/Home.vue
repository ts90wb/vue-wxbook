<!-- by your name -->
<template>
  <div>
    <header>
      <div class="logo">
        <a href="/"></a>
      </div>
      <div class="search">
        <input type="text" placeholder="请输入要搜索的书籍">
        <i class="iconfont icon-search"></i>
      </div>
      <div class="login">
        <span>登录</span>
        <!-- <i class="iconfont icon-user"></i> -->
      </div>
    </header>
    <div class="content">
      <slider></slider>
      <div class="hot">
        <div class="wx-hot">
          <img src="../assets/images/wx-hot.png" alt="wx-hot" width="218" height="97">
        </div>
        <a class="ticket" href="#">
          <span>今日福利券</span>
          <i>先领券,再下单,优惠多多</i>
        </a>
      </div>
      <div class="seckill">
        <div class="sec-title">

          <div class="sec-left"></div>
          <div class="sec-middle">
            <div class="session">
              <i class="iconfont icon-clock"></i>
              <span>秒杀</span>
              <em>00</em>
              <span>点场</span>

            </div>
          </div>
          <div class="space-right">
            <span class="line"></span>
            <a href="#">
              <span>更多</span>
              <i class="iconfont icon-arrow"></i>
            </a>
          </div>

        </div>
        <div class="countdown">
          <span>08</span>
          <i>:</i>
          <span>55</span>
          <i>:</i>
          <span>30</span>
        </div>
        <div class="content-wrapper">

          <div class="sec-content">
            <a href="#" class="sec-book" v-for="(item,index) in seckillArr" :key="index">
              <div class="sec-cover">
                <img :src="item.imgSrc" :alt="item.bookName" width="200" height="200">
                <div class="discount">
                  <div>
                    <i>{{discount(item.newPrice,item.oldPrice)}}</i>
                    <span>折</span>
                  </div>
                  <span>包邮</span>
                </div>
              </div>
              <div class="n-price p-class">
                <i>￥</i>
                <span>{{item.newPrice}}</span>
              </div>
              <div class="o-price p-class">
                <i>￥</i>
                <span>{{item.oldPrice}}</span>
              </div>

            </a>

          </div>
        </div>

      </div>
      <div class="ad-seckill ad">
        <a href="#">
          <img :src="adArr[0].imgSrc" :alt="adArr[0].adName" width="640" height="100">
        </a>
      </div>
      <div class="wx-focused">
        <a class="foc-title" href="#">
          <img :src="titleArr[0].imgSrc" :alt="titleArr[0].titleName" width="1242" height="120">

        </a>
        <div class="foc-content">
          <a class="content-item" href="#" v-for="(item,index) in focusedArr" :key="index">
            <div class="foc-cover">
              <img :src="item.imgSrc" :alt="item.bookName" width="350" height="350">
            </div>
            <div class="foc-detail">
              <h4>{{changeBookName(item.bookName)}}</h4>
              <p>{{item.pub}}</p>
              <div class="price">
                <div class="n-price">
                  <i>￥</i>
                  <span>{{item.newPrice}}</span>
                </div>
                <div class="o-price">
                  <i>￥</i>
                  <span>{{item.oldPrice}}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="ad-focused ad">
        <a href="#">
          <img :src="adArr[1].imgSrc" :alt="adArr[1].adName" width="640" height="100">
        </a>
      </div>
      <div class="new-pub">
        <a class="new-pub-title" href="#">
          <img :src="titleArr[1].imgSrc" :alt="titleArr[1].titleName" width="1242" height="120">
        </a>
        <div class="new-pub-content">
          <a href="#" class="content-item" v-for="(item,index) in newPubArr" :key="index">
            <div class="np-cover">
              <img :src="item.imgSrc" :alt="item.bookName" width="350" height="350">
            </div>
            <div class="np-descri">
              <h5>{{item.bookName}}</h5>
              <p>{{changeBookName(item.descri)}}</p>
            </div>

          </a>
        </div>
      </div>
      <div class="ad-new-pub ad">
        <a href="#">
          <img :src="adArr[2].imgSrc" :alt="adArr[2].adName" width="640" height="100">
        </a>
      </div>
      <div class="choice">
        <a class="choice-title" href="#">
          <img :src="titleArr[2].imgSrc" :alt="titleArr[2].titleName" width="640" height="81">
        </a>
        <div class="choice-content">
          <a href="#" v-for="(item,index) in choiceArr" :key="index">
            <i class="iconfont" :class="item.className"></i>
            <span>{{item.choiceName}}</span>
          </a>
        </div>
      </div>
      <div class="sort">
        <a class="sort-title" href="#">
          <img :src="titleArr[3].imgSrc" :alt="titleArr[2].titleName" width="640" height="81">
        </a>
        <div class="sort-content">
          <a href="#" v-for="(item,index) in sortArr" :key="index">
            <i class="iconfont" :class="item.className"></i>
            <span>{{item.choiceName}}</span>
          </a>
        </div>
      </div>
       <div class="ad-sort ad">
        <a href="#">
          <img :src="adArr[3].imgSrc" :alt="adArr[3].adName" width="640" height="100">
        </a>
      </div>
      <div class="lowprice">
        <a href="#" v-for="(item,index) in lowpriceArr" :key="index">
          <h5>{{item.bookName}}</h5>
          <p><i>￥</i><span>{{item.newPrice}}</span></p>
          <div class="lowprice-cover">
            <img :src="item.imgSrc" :alt="item.bookName" width="200" height="200">
          </div>
        </a>
      </div>
      <totop></totop>
    </div>
  </div>

</template>

<script>
import Slider from 'components/Slider'
import Totop from 'components/Totop'
export default {
  data() {
    return {
      seckillArr: [
        {
          imgSrc: require("assets/images/home/seckill/seckill-1.jpg"),
          newPrice: "11.5",
          oldPrice: "40.0",
          bookName: "一学就会的口袋魔术"
        },
        {
          imgSrc: require("assets/images/home/seckill/seckill-2.jpg"),
          newPrice: "18.6",
          oldPrice: "39.0",
          bookName: "科学启蒙绘本(10册)"
        },
        {
          imgSrc: require("assets/images/home/seckill/seckill-3.jpg"),
          newPrice: "9.8",
          oldPrice: "38.5",
          bookName: "做最好的自己"
        },
        {
          imgSrc: require("assets/images/home/seckill/seckill-4.jpg"),
          newPrice: "8.6",
          oldPrice: "30.5",
          bookName: "注音版恐龙全知道"
        },
        {
          imgSrc: require("assets/images/home/seckill/seckill-4.jpg"),
          newPrice: "8.6",
          oldPrice: "30.5",
          bookName: "注音版恐龙全知道"
        },
        {
          imgSrc: require("assets/images/home/seckill/seckill-4.jpg"),
          newPrice: "8.6",
          oldPrice: "30.5",
          bookName: "注音版恐龙全知道"
        },
        {
          imgSrc: require("assets/images/home/seckill/seckill-4.jpg"),
          newPrice: "8.6",
          oldPrice: "30.5",
          bookName: "注音版恐龙全知道"
        }
      ],
      adArr: [
        {
          imgSrc: require("assets/images/home/ad/ad-seckill.jpg"),
          adName: "图书打折"
        },
        {
          imgSrc: require("assets/images/home/ad/ad-wx-focused.jpg"),
          adName: "满减活动"
        },
        {
          imgSrc: require("assets/images/home/ad/ad-new-pub.jpg"),
          adName: "新作推荐"
        },
          {
          imgSrc: require("assets/images/home/ad/ad-lowprice.jpg"),
          adName: "低价好货"
        }
      ],
      titleArr: [
        {
          imgSrc: require("assets/images/home/title/wx-focused.jpg"),
          titleName: "文轩聚焦"
        },
        {
          imgSrc: require("assets/images/home/title/xpsd-new.jpg"),
          titleName: "新品速递"
        },
        {
          imgSrc: require("assets/images/home/title/jxzt-choice.jpg"),
          titleName: "精选专题"
        },
        {
          imgSrc: require("assets/images/home/title/plhc-sort.jpg"),
          titleName: "品类会场"
        }
      ],
      focusedArr: [
        {
          imgSrc: require("assets/images/home/wx-focused/wx-focused-1.jpg"),
          pub: "法律出版社",
          newPrice: "11.5",
          oldPrice: "25.8",
          bookName: "中华人民共和国宪法(最新修正版)"
        },
        {
          imgSrc: require("assets/images/home/wx-focused/wx-focused-2.jpg"),
          pub: "人民出版社",
          newPrice: "11.5",
          oldPrice: "25.8",
          bookName: "中国共产党章程"
        },
        {
          imgSrc: require("assets/images/home/wx-focused/wx-focused-3.jpg"),
          pub: "人民出版社",
          newPrice: "11.5",
          oldPrice: "25.8",
          bookName:
            "决胜全面建成小康社会.夺取新时代中国特色社会主义伟大胜利:在中国共产党第十九次全国代表大会上的报告"
        },
        {
          imgSrc: require("assets/images/home/wx-focused/wx-focused-4.jpg"),
          pub: "人民出版社",
          newPrice: "11.5",
          oldPrice: "25.8",
          bookName: "中国共产党第十九次全国代表大会文件汇编"
        }
      ],
      newPubArr: [
        {
          imgSrc: require("assets/images/home/xpsd-new/xpsd-1.jpg"),
          descri: "明晓溪作品，同名剧热播中",
          newPrice: "11.5",
          oldPrice: "25.8",
          bookName: "烈火如歌"
        },
        {
          imgSrc: require("assets/images/home/xpsd-new/xpsd-2.jpg"),
          descri: "雷米十年！“心理罪”纪念珍藏版！",
          newPrice: "11.5",
          oldPrice: "25.8",
          bookName: "心理罪"
        },
        {
          imgSrc: require("assets/images/home/xpsd-new/xpsd-3.jpg"),
          descri: "半个金融圈、投资界、管理层强烈推荐!",
          newPrice: "11.5",
          oldPrice: "25.8",
          bookName: "原则"
        },
        {
          imgSrc: require("assets/images/home/xpsd-new/xpsd-4.jpg"),
          descri: "领略边地的神奇风光和丰富的民族文化",
          newPrice: "11.5",
          oldPrice: "25.8",
          bookName: "云路逍遥游"
        }
      ],
      choiceArr: [
        { choiceName: "低价专区", className: "icon-djdw" },
        { choiceName: "2018初会", className: "icon-lhdw" },
        { choiceName: "2018二建", className: "icon-jzks" },
        { choiceName: "2018基金", className: "icon-jjdw" },
        { choiceName: "领导书目", className: "icon-lddu" }
      ],
      sortArr: [
        { choiceName: "幼儿园学习", className: "icon-yedw" },
        { choiceName: "小学教辅", className: "icon-etdw" },
        { choiceName: "初高中教辅", className: "icon-czdu" },
        { choiceName: "大学课外", className: "icon-dxdw" },
        { choiceName: "文艺小说", className: "icon-xxdw" },
        { choiceName: "生活教育", className: "icon-shdw" },
        { choiceName: "社科管理", className: "icon-wydw" },
        { choiceName: "少儿乐园", className: "icon-hhdw" }
      ],
      lowpriceArr:[
           {
          imgSrc: require("assets/images/home/lowprice/lowprice-1.jpg"),
          newPrice: "11.5",
          oldPrice: "40.0",
          bookName: "乌合之众"
        },
              {
          imgSrc: require("assets/images/home/lowprice/lowprice-1.jpg"),
          newPrice: "11.5",
          oldPrice: "40.0",
          bookName: "乌合之众"
        },
              {
          imgSrc: require("assets/images/home/lowprice/lowprice-1.jpg"),
          newPrice: "11.5",
          oldPrice: "40.0",
          bookName: "乌合之众"
        },
                {
          imgSrc: require("assets/images/home/lowprice/lowprice-1.jpg"),
          newPrice: "11.5",
          oldPrice: "40.0",
          bookName: "乌合之众"
        },
              {
          imgSrc: require("assets/images/home/lowprice/lowprice-1.jpg"),
          newPrice: "11.5",
          oldPrice: "40.0",
          bookName: "乌合之众"
        },
              {
          imgSrc: require("assets/images/home/lowprice/lowprice-1.jpg"),
          newPrice: "11.5",
          oldPrice: "40.0",
          bookName: "乌合之众"
        }

      ]
    };
  },

  components: {
    Slider,
    Totop
  },
  computed: {},
  methods: {
    discount(n, o) {
      return Math.round(n / o * 10);
    },
    changeBookName(val) {
      if (val.length >= 10) {
        return (val = val.substr(0, 10) + "...");
      } else {
        return val;
      }
    }
  }
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
  justify-content: space-between;
  align-items: center;
  background: #f41e33;
  box-shadow: 0 2px 3px 3px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  .logo {
    display: flex;
    width: 20%;
    margin-right: 10px;
    align-items: center;
    a {
      width: 60px;
      height: 20px;
      display: block;
      background: url(../assets/images/logo.png) no-repeat;
      background-size: 60px 20px;
    }
  }
  .search {
    position: relative;
    width: 60%;
    input {
      width: 100%;
      height: 30px;
      padding: 2px 10px;
      box-sizing: border-box;
      border: 0;
      border-radius: 3px;
      background: #ce1d38;
      font-size: 14px;
      &::-webkit-input-placeholder {
        color: #eee;
        font-size: 14px;
      }
    }
    i {
      position: absolute;
      right: 10px;
      top: 4px;
      font-size: 20px;
      color: #eee;
      background: #ce1d38;
    }
  }
  .login {
    width: 10%;
    margin-left: 10px;
    span {
      font-size: 14px;
      color: #eee;
    }
    i {
      display: block;
      text-align: center;
      font-size: 20px;
      color: #eee;
    }
  }
}
.content {
  width: 100%;
  margin-bottom: 65px;
  margin-top: 40px;
  background: #fff;
  .hot {
    display: flex;
    width: 100%;
    height: 40px;
    padding: 5px 10px;
    box-sizing: border-box;
    justify-content: space-between;
    .wx-hot {
      width: 25%;
      padding-right: 10px;
      box-sizing: border-box;
      border-right: 1px solid #ddd;
      img {
        width: auto;
        height: 100%;
      }
    }

    .ticket {
      width: 85%;
      display: flex;
      padding-left: 10px;
      box-sizing: border-box;
      justify-content: flex-start;
      align-items: center;
      font-size: 12px;
      span {
        display: block;
        margin-right: 10px;
        border: 1px solid #ce1d38;
        border-radius: 5px;
        padding: 2px;
        color: #ce1d38;
        font-weight: bold;
      }
    }
  }
  .seckill {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    .sec-title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .sec-left {
        width: 30%;
        height: 2px;
        background: #ddd;
      }
      .sec-middle {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .session {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #f92438;
          font-size: 16px;
          i {
            font-size: 16px;
            margin-right: 5px;
          }
        }
      }
      .space-right {
        width: 30%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .line {
          width: 50%;
          height: 2px;
          background: #ddd;
        }
        a {
          margin-left: 5px;
          font-size: 12px;
          i {
            font-size: 10px;
            color: #ce1d38;
          }
        }
      }
    }
    .countdown {
      display: flex;
      width: 30%;
      margin: 5px auto 0;
      justify-content: center;
      font-size: 14px;
      span {
        background: #3d3d3d;
        color: #fff;
        border-radius: 3px;
        padding: 1px;
        margin: 0 3px;
      }
    }
    .content-wrapper {
      width: 100%;
      padding: 10px 0;
      box-sizing: border-box;
      overflow: scroll;
      &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.2);
      }
      &::-webkit-scrollbar {
        width: 0;
        height: 5px;
      }
      .sec-content {
        display: flex;
        width: 300%;

        justify-content: space-between;
        .sec-book {
          width: 10%;
          .sec-cover {
            width: 100%;
            position: relative;
            img {
              width: 100%;
              height: auto;
            }
            .discount {
              position: absolute;
              right: 0;
              bottom: 0;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 35px;
              height: 35px;
              background: #fa8533;
              border-radius: 50%;
              font-size: 12px;
              color: #fff;
            }
          }
          .p-class {
            width: 100%;
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            color: #bbb;
          }
          .n-price {
            color: #f41e33;
            font-size: 18px;
            margin-top: 10px;
          }
          .o-price {
            text-decoration: line-through;
          }
        }
      }
    }
  }
  .ad {
    width: 100%;
    height: auto;
    a {
      display: block;
      width: 100%;
      height: auto;
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }
  .wx-focused {
    width: 100%;
    .foc-content {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      .content-item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px dotted #ddd;
        .foc-cover {
          width: 40%;
          padding: 5px 0;
          box-sizing: border-box;
          img {
            width: 100%;
            height: auto;
          }
        }
        .foc-detail {
          width: 70%;
          display: flex;
          padding: 5px 0;
          box-sizing: border-box;
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-start;
          color: #ccc;
          h4 {
            width: 100%;
            height: 40px;
            font-size: 14px;
            color: #666;
            line-height: 40px;
          }
          .price {
            display: flex;
            justify-content: flex-start;
            .n-price {
              margin-right: 20px;
              font-size: 16px;
              color: #f41e33;
            }
            .o-price {
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }
  .new-pub {
    width: 100%;
    .new-pub-content {
      display: flex;
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      justify-content: space-around;
      flex-wrap: wrap;
      .content-item {
        display: flex;
        width: 50%;
        padding: 10px 0;
        box-sizing: border-box;
        justify-content: space-around;
        align-items: center;
        &:nth-child(1) {
          border-bottom: 1px solid #ddd;
          border-right: 1px solid #ddd;
        }
        &:nth-child(2) {
          border-bottom: 1px solid #ddd;
        }
        &:nth-child(3) {
          border-right: 1px solid #ddd;
        }

        box-sizing: border-box;
        .np-cover {
          width: 55%;
          img {
            display: block;
            width: 100%;
            height: auto;
          }
        }
        .np-descri {
          display: flex;
          width: 45%;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          h5 {
            height: 20px;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 15px;
          }
          p {
            font-size: 14px;
          }
        }
      }
    }
  }
  .choice {
    width: 100%;
    .choice-content {
      display: flex;
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      justify-content: space-between;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        &:nth-child(2) i {
          background: #0242a2;
        }
        &:nth-child(3) i {
          background: #ff8400;
        }
        &:nth-child(4) i {
          background: #ff5796;
        }
        &:nth-child(5) i {
          background: #6da9ff;
        }
        i {
          display: block;
          width: 40px;
          height: 40px;
          margin-bottom: 10px;
          border-radius: 50%;
          background: #ee3863;
          font-size: 26px;
          text-align: center;
          line-height: 40px;
          color: #fff;
        }
        span {
          font-size: 12px;
        }
      }
    }
  }
  .sort {
    width: 100%;
    .sort-content {
      display: flex;
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      justify-content: space-between;
      flex-wrap: wrap;
      a {
        display: flex;
        width: 25%;
        flex-direction: column;
        align-items: center;
        &:nth-child(3) i,
        &:nth-child(5) i {
          background: #0242a2;
        }
        &:nth-child(8) i,
        &:nth-child(2) i {
          background: #ffb139;
        }
        &:nth-child(4) i {
          background: #98d521;
        }
        &:nth-child(7) i {
          background: #a962f1;
        }
        i {
          display: block;
          width: 40px;
          height: 40px;
          margin: 10px 0;
          border-radius: 50%;
          background: #21d59b;
          font-size: 26px;
          text-align: center;
          line-height: 40px;
          color: #fff;
        }
        span {
          font-size: 12px;
        }
      }
    }
  }
  .lowprice{
    display: flex;
    width: 100%;
    padding-top:10px;
    margin-bottom: 10px;
    box-sizing: border-box;
    justify-content: space-between;
    flex-wrap: wrap;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
    a{
      display: flex;
    flex:1 1 30%;
      padding: 5px;
      box-sizing: border-box;
flex-direction: column;
      border:1px solid #ddd;
      h5{
        font-size: 14px;
        font-weight: bold;
        text-indent: 10px;
      }
      p{
        color: #ce1d38;
        padding: 0 10px;
        box-sizing: border-box;
      }
      .lowprice-cover{
        width: 100%;
        height: auto;
        img{
          display: block;
               width: 100%;
        height: auto;
        }
      }
    }

  }
}
.content .sort .sort-title,
.content .choice .choice-title,
.content .new-pub .new-pub-title,
.content .wx-focused .foc-title {
  display: block;
  width: 100%;
  height: auto;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
