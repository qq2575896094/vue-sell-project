<template>
  <div class="profile-passwordSign">
    <CommonHeader :isGoBack="isGoBack" :title="headerTitle"></CommonHeader>
    <div class="mobile-wrapper">
      <div class="container">
        <input type="text" placeholder="手机/邮箱/用户名" v-model="userAccount">
      </div>
      <div class="container">
        <input v-if="!showPassword" type="password" placeholder="密码" v-model="password">
        <input v-else type="text" placeholder="密码" v-model="password">
        <div id="button-switch" class="button-switch">
          <input class="switch-checkbox" id="on-off-switch" type="checkbox" v-model="showPassword">
          <label class="switch-label" for="on-off-switch">
            <span class="switch-inner" data-on="abc" data-off="···"></span>
            <span class="switch-switch"></span>
          </label>
        </div>
      </div>
      <div class="container">
        <input type="text" placeholder="验证码" maxlength="4" v-model="codeNumber">
        <div class="img-change-box">
          <img v-show="captchaCodeImg" :src="captchaCodeImg">
          <div class="change_img" @click="getCaptchaCode">
            <p>看不清</p>
            <p>换一张</p>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-submit" @click="accountLogin">登 录</div>
    <div class="forget-pwd"><span>忘记密码？</span></div>
  </div>
</template>

<script>
  import CommonHeader from "../../../components/header/CommonHeader.vue"
  import {sendCaptchas, sendAccountLogin, sendUserInfo} from '../../../config/variable'

  export default {
    name: 'ProfilePasswordSign',
    data() {
      return {
        isGoBack: true,
        headerTitle: '密码登录',
        userAccount: null,        //账号
        password: null,           //密码
        showPassword: false,      //是否显示密码
        codeNumber: null,         //验证码
        captchaCodeImg: null      //验证码图片
      }
    },
    mounted() {
      this.$store.dispatch('FOOTER_HIDE');
      this.getCaptchaCode();
    },
    methods: {
      /**
       * 修改密码显示状态
       */
      changePassWordType() {
        this.showPassword = !this.showPassword;
      },

      /**
       * 获取图形验证码
       */
      async getCaptchaCode() {
        let resBody = await this.$http.post(sendCaptchas.url);
        this.captchaCodeImg = resBody.imgBase64;
      },
      /**
       * 登录
       */
      async accountLogin() {
        if (!this.userAccount) {
          return;
        }
        if (!this.password) {
          return;
        }
        if (!this.codeNumber) {
          return;
        }
        let resBody = await this.$http.post(sendAccountLogin.url, {
          username: this.userAccount,
          password: this.password,
          captcha_code: this.codeNumber
        });
        let res = await this.$http.post(sendUserInfo.url);
      }
    },
    components: {
      CommonHeader
    }
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../../styles/_mixins";

  .profile-passwordSign {
    padding-top: 54px;
    .mobile-wrapper {
      padding-left: 10px;
      margin-bottom: 20px;
      background-color: @fff;
      .container {
        display: flex;
        align-items: center;
        height: 40px;
        border-bottom: 1px solid @f1;
        margin-right: 10px;
        &:last-child {
          border-bottom: none;
        }
        input {
          flex: 1;
          margin-left: 10px;
          caret-color: @blue;
          font-size: 16px;
          outline: none;
        }
        input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
          color: @bc;
        }
        input:-moz-placeholder, textarea:-moz-placeholder {
          color: @bc;
        }
        input::-moz-placeholder, textarea::-moz-placeholder {
          color: @bc;
        }
        input:-ms-input-placeholder, textarea:-ms-input-placeholder {
          color: @bc;
        }
        .button-switch {
          position: relative;
          float: left;
          width: 50px;
          margin: 0;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          .switch-checkbox {
            display: none;
          }
          .switch-label {
            display: block;
            overflow: hidden;
            cursor: pointer;
            /*border: 2px solid #999999;*/
            border-radius: 20px;
          }

          .switch-inner {
            display: block;
            width: 200%;
            margin-left: -100%;
            transition: margin 0.3s ease-in 0s;
          }

          .switch-inner::before, .switch-inner::after {
            display: block;
            float: right;
            width: 50%;
            height: 20px;
            padding: 0;
            line-height: 20px;
            font-size: 14px;
            color: white;
            font-family: Trebuchet, Arial, sans-serif;
            font-weight: bold;
            box-sizing: border-box;
          }
          .switch-inner::after {
            content: attr(data-on);
            padding-left: 6px;
            background-color: #00e500;
            color: #FFFFFF;
          }
          .switch-inner::before {
            content: attr(data-off);
            padding-right: 8px;
            background-color: #ccc;
            color: #999999;
            text-align: right;
          }
          .switch-switch {
            position: absolute;
            display: block;
            width: 18px;
            height: 18px;
            margin: 1px;
            background: #FFFFFF;
            top: 0;
            bottom: 0;
            right: 30px;
            box-sizing: border-box;
            border-radius: 20px;
            transition: all 0.3s ease-in 0s;
          }
          .switch-checkbox:checked + .switch-label .switch-inner {
            margin-left: 0;
          }
          .switch-checkbox:checked + .switch-label .switch-switch {
            right: 0;
          }
        }
        .img-change-box {
          display: flex;
          align-items: center;
          img {
            margin-right: 8px;
          }
          .change_img {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            width: 3rem;
            justify-content: center;
            p {
              font-size: 14px;
              color: #666;
              &:nth-of-type(2) {
                color: #3b95e9;
                margin-top: .2rem;
              }
            }
          }
        }
      }
    }
    .btn-submit {
      width: 90%;
      height: 40px;
      text-align: center;
      line-height: 40px;
      margin-left: 5%;
      color: @fff;
      border-radius: 2px;
      background-color: #00d762;
      &:active {
        color: @fff;
        background-color: rgba(0, 215, 98, .7);
      }
    }
    .forget-pwd {
      margin-top: 10PX;
      margin-right: 5%;
      text-align: right;
      font-size: 14px;
      color: @blue;
    }
  }
</style>
