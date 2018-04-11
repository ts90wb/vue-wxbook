<!-- by your name -->
<template>
  <div>
    <mheader :title="heading"></mheader>
    <div class="content">
      <form class="forms" action="" method="post">
        <input type="text" placeholder="用户名邮箱/手机" v-model="username" @blur="UsernameBlur" :class="{'wrong':checkUsername}" @focus="usernameFocus">
        <p class="tip" :class="{'w-active':checkUsername}">{{usernameTip}}</p>
        <div class="password">
          <input :type="isChecked?'text':'password'" placeholder="请输入密码" v-model="password" @blur="PasswordBlur" :class="{'wrong':checkPassword}" @focus="passwordFocus">
          <p class="tip" :class="{'w-active':checkPassword}">{{passwordTip}}</p>
          <div class="switch">
            <div class="wrapper">
              <input type="checkbox" id="change" v-model="isChecked">
              <label for="change">
                <span>●●●</span>
              </label>
            </div>
          </div>
        </div>
        <input type="submit" value="登录" :class="{'change-bg':!isSubmit}" :disabled="isSubmit">
      </form>
      <div class="issue">
        <a href="#" class="logup">立即注册</a>
        <a href="#" class="forget-password">忘记密码</a>
      </div>
      <div class="service">
        <div class="authentic">
          <i class="iconfont icon-zpbz"></i>
          <span>正品保证</span>
        </div>
        <div class="exchange">
          <i class="iconfont icon-qtth"></i>
          <span>七天退换</span>
        </div>
        <div class="transport">
          <i class="iconfont  icon-dcfh"></i>
          <span>多仓发货</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mheader from "components/Mheader";
export default {
  data() {
    return {
      heading: "文轩登录",
      isChecked: false,
      username: "",
      checkUsername: false,
      usernameTip: "",
      password: "",
      checkPassword: false,
      passwordTip: "",
      tipActived: "",
      isActive: false,
      isSubmit:true
    };
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    }
  },

  components: {
    Mheader
  },
  computed: {},
  watch: {},
  methods: {
    UsernameBlur() {
      if (!this.username) {
        this.checkUsername = true;
        this.usernameTip = "此项为必填项";
      } else {
     const regPhone=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
     const regEmail=/^[\w.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
        const usernameArr=this.username.substr(0,11).split('');
        const  oSet=new Set(usernameArr);
        if(regEmail.test(this.username)||regPhone.test(this.username)){
          if(oSet.size>=2){
 this.checkUsername = false;
        this.usernameTip = "";
        this.checkSubmit();
          }else{
                      this.checkUsername = true;
        this.usernameTip = "邮箱或手机邮箱xxx@xxx形式手机十一位";
          }
        }else{
           this.checkUsername = true;
        this.usernameTip = "邮箱或手机邮箱xxx@xxx形式手机十一位";
        }
      }
    },
    usernameFocus() {
      this.checkUsername = false;
      this.usernameTip = "";
    },
    PasswordBlur() {
      if (!this.password) {
        this.checkPassword = true;
        this.passwordTip = "此项为必填项";
      } else {
        const regPassword=/^(\w){6,20}$/;
        const passwordArr=this.password.substr(0,6).split('');
        const  oSet=new Set(passwordArr);
        if(regPassword.test(this.password)){

          if(parseInt(this.password.substr(0,6)).toString().length!=6&&oSet.size>=3){
 this.checkPassword = false;
        this.passwordTip = "";
        this.checkSubmit();
          }else{
                      this.checkPassword = true;
        this.passwordTip = "大于6位小于20包含a-zA-Z0-9_且前6个不能为纯数字";
          }
        }else{
           this.checkPassword = true;
        this.passwordTip = "大于6位小于20包含a-zA-Z0-9_且前6个不能为纯数字";
        }


      }
    },
    passwordFocus() {
      this.checkPassword = false;
      this.passwordTip = "";
    },
    checkSubmit(){
      if(!this.checkPassword&&!this.checkUsername){
        this.isSubmit=false;
      }else{
         this.isSubmit=true;
      }
    }
  }
};
</script>
<style lang='less' scoped>
.content {
  width: 100%;
  .forms {
    display: flex;
    width: 100%;
    margin-top: 40px;
    flex-direction: column;
    align-items: center;
    input[type="text"],
    input[type="password"] {
      width: 100%;
      height: 40px;
      padding: 0 20px;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid #ddd;
      font-size: 14px;
      &::-webkit-input-placeholder {
        color: #aaa;
        font-size: 14px;
      }
    }
    input[type="text"]:focus,
    input[type="password"]:focus {
      border-color: aqua;
      transition: border-color 1s ease;
    }
    input[type="text"].wrong,
    input[type="password"].wrong {
      border-color: red;
    }
    .password {
      position: relative;
      width: 100%;
      height: 40px;
      input[type="text"],
      input[type="password"] {
        width: 100%;
        padding-right: 30%;
      }
      .switch {
        display: flex;
        position: absolute;
        right: 0;
        top: 1px;
        width: 30%;
        height: 39px;
        background: transparent;
        justify-content: center;
        align-items: center;
        .wrapper {
          position: relative;
          width: 50px;
          height: 20px;
          border: 1px solid #ccc;
          border-radius: 20px;
          input {
            display: none;
          }
          label {
            width: 100%;
            height: 100%;
            span {
              position: absolute;
              left: 1px;
              top: 1px;
              width: 48px;
              height: 18px;
              line-height: 18px;
              font-size: 12px;
              text-align: right;
              color: #fff;
              background: rgb(0, 235, 0);
              border-radius: 18px;
              opacity: 1;
              z-index: 80;
              transition: all 0.5s ease;
            }
            &::after {
              content: "";
              position: absolute;
              left: 3px;
              width: 18px;
              height: 18px;
              border-radius: 50%;
              border: 1px solid #eee;
              background: #fff;
              box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2),
                -1px -1px 2px rgba(0, 0, 0, 0.2);
              z-index: 100;
              transition: all 0.5s ease;
            }
            &::before {
              content: "abc";
              position: absolute;
              left: 1px;
              top: 1px;
              width: 48px;
              height: 18px;
              line-height: 18px;
              background: red;
              color: #fff;
              border-radius: 18px;
              opacity: 0;
              z-index: 80;
              transition: all 0.5s ease;
            }
          }

          input:checked + label::after {
            left: 27px;
          }
          input:checked + label::before {
            opacity: 1;
          }
          input:checked + label span {
            opacity: 0;
          }
        }
      }
    }
    .tip {
      width: 100%;
      height: 20px;
      line-height: 20px;
      text-align: center;
      font-size: 12px;
      box-sizing: border-box;
    }
    .tip.w-active {
      color: red;
    }
    input[type="submit"] {
      width: 100px;
      height: 30px;
      border: none;
      margin-top: 30px;
      font-size: 14px;
      text-indent: 10px;
      letter-spacing: 10px;
      border-radius: 5px;
      color: #fff;
      background: #aaa;
        &.change-bg {
      background: rgb(0, 235, 0);
    }
    }


  }
  .issue {
    display: flex;
    width: 100%;
    height: 20px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-top: 10px;
    font-size: 14px;
    justify-content: space-between;
    a {
      text-decoration: underline;
      outline: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      &:hover {
        color: rgb(255, 101, 101);
      }
    }
  }
  .service{
    width: 100%;
    display: flex;
    padding: 20px 10px;
    box-sizing: border-box;
    justify-content: space-between;
    div{
      width: 30%;
      height: 100px;
      display: flex;
      flex-direction: column;
      color: #ccc;
      font-size: 12px;
      align-items: center;
      i{
        font-size: 40px;
        margin-bottom: 10px;
      }

    }

  }
}
</style>
