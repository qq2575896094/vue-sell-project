<template>
  <div class="profile-bindMobile">
    <CommonHeader :isGoBack="isGoBack" :title="headerTitle"></CommonHeader>
    <div class="mobile-wrapper">
      <div class="container">
        <div class="title">手机号</div>
        <div class="mobile-num">183***1175</div>
        <div class="get-msg-code">获取验证码</div>
      </div>
      <div class="container">
        <div class="title">验证码</div>
        <input type="text" placeholder="请输入验证码" maxlength="6"/>
      </div>
    </div>
    <div class="btn-submit">验证后绑定新手机号</div>
    <div class="remark">若当前号码已不用或丢失,请选用<span class="appeal">在线申诉</span></div>
  </div>
</template>

<script>
  import CommonHeader from "../../../components/header/CommonHeader.vue"

  export default {
    name: 'ProfileBindMobile',
    data() {
      return {
        isGoBack: true,
        headerTitle: "绑定手机"
      }
    },
    mounted() {
      this.$store.dispatch("FOOTER_HIDE");
    },
    methods: {
      //跳转页面
      changeAddress(path) {
        this.$router.push(path);
      }
    },
    components: {
      CommonHeader
    }
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../../styles/_mixins";

  .profile-bindMobile {
    padding-top: 54px;
    width: 100%;
    height: 100%;
    font-size: 14px;
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
      position: fixed;
      left: 0;
      bottom: 20px;
      width: 100%;
      height: 30px;
      line-height: 30px;
      text-align: center;
      .appeal {
        color: @blue;
      }
    }
  }
</style>
