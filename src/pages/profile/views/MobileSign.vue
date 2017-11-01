<template>
  <div class="profile-mobileSign">
    <SignInHeader :isGoBack="isGoBack"></SignInHeader>
    <div class="mobile-wrapper">
      <div class="container">
        <div class="mobile-num">183***1175</div>
        <div class="get-msg-code" @click="getCaptchas()">获取验证码</div>
      </div>
      <div class="container">
        <input type="text" placeholder="请输入验证码" maxlength="6"/>
      </div>
    </div>
    <div class="remark">温馨提示：未注册饿了么账号的手机号，登录时将自动，且代表您已同意<span class="appeal">《用户服务协议》</span></div>
    <div class="btn-submit">登 录</div>
    <footer class="footer-wrapper">
      <header class="header">第三方登录</header>
      <div class="content">
        <div class="items-box">
          <span class="icon icon-home"></span>
          <p>微信</p>
        </div>
        <div class="items-box">
          <span class="icon icon-home"></span>
          <p>QQ</p>
        </div>
        <div class="items-box">
          <span class="icon icon-home"></span>
          <p>微博</p>
        </div>
        <div class="items-box">
          <span class="icon icon-home"></span>
          <p>淘宝</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import SignInHeader from "../../../components/header/SignInHeader.vue"
  import {sendCaptchas} from '../../../config/variable'

  export default {
    name: 'ProfileMobileSign',
    data() {
      return {
        isGoBack: true
      }
    },
    components: {
      SignInHeader
    },
    mounted() {
      this.$store.dispatch('FOOTER_HIDE');
    },
    methods:{
      getCaptchas(){
        this.$http.post(sendCaptchas.url).then()
      }
    }
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../../styles/_mixins";

  .profile-mobileSign {
    padding-top: 54px;
    .mobile-wrapper {
      padding-left: 10px;
      margin-bottom: 20px;
      background-color: @fff;
      .container {
        display: flex;
        align-items: center;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid @f1;
        &:last-child {
          border-bottom: none;
        }
        .title {
          padding-right: 16px;
        }
        .mobile-num {
          flex: 1;
        }
        .get-msg-code {
          margin-right: 10px;
          width: 100px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          border-radius: 3px;
          color: @fff;
          background-color: @blue;
        }
        input {
          flex: 1;
          margin-left: 10px;
          caret-color: @blue;
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
      }
    }
    .btn-submit {
      width: 90%;
      height: 40px;
      text-align: center;
      line-height: 40px;
      margin-left: 5%;
      color: @fff;
      background-color: @ccc;
      border-radius: 2px;
    }
    .remark {
      margin: 0 10px 10px 10px;
      font-size: 12px;
      line-height: 1.2em;
      color: @65;
      .appeal {
        color: @blue;
      }
    }
    .footer-wrapper {
      position: fixed;
      left: 0;
      bottom: 10px;
      width: 100%;
      font-size: 14px;
      .header {
        margin-bottom: 20px;
        text-align: center;
      }
      .content {
        display: flex;
        align-items: center;
        text-align: center;
        padding: 0 30px;
        .items-box {
          flex: 1;
          .icon-home {
            border: 1px solid green;
            border-radius: 36px;
            display: inline-block;
            width: 36px;
            height: 36px;
            line-height: 36px;
            font-size: 20px;
            &:before {
              color: @blue;
            }
          }
          p {
            margin-top: 10px;
          }
        }
      }
    }
  }
</style>
