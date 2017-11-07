<template>
  <div class="order-indexHome">
    <CommonHeader :isGoBack="isGoBack" :title="headerTitle"></CommonHeader>
    <div class="wrapper-content">
      <div class="wrapper-box">
        <img src="/static/images/usr-name.jpeg" alt="" width="160" height="120">
        <p class="login-hints">登录后查看外卖订单</p>
        <div class="btn-submit" @click="changeAddress('/profile/mobileSign')">立即登录</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from "../../components/header/CommonHeader.vue"

  export default {
    name: 'OrderIndexHome',
    data() {
      return {
        isGoBack: false,
        headerTitle: "订单"
      }
    },
    mounted() {
      this.$store.dispatch('FOOTER_SHOW');
    },
    methods: {
      //跳转页面
      changeAddress(path) {
        this.$router.push(path);
      },
    },
    components: {
      CommonHeader
    }
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../styles/_mixins";

  .order-indexHome {
    padding-top: 44px;
    padding-bottom: 50px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .wrapper-content {
      width: 100%;
      height: 100%;
      .wrapper-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        .login-hints {
          margin: 14px 0;
          text-align: center;
          font-size: 16px;
        }
        .btn-submit {
          margin-left: 30px;
          width: 100px;
          height: 36px;
          text-align: center;
          line-height: 36px;
          color: @fff;
          border-radius: 2px;
          background-color: #00d762;
          &:active {
            color: @fff;
            background-color: rgba(0, 215, 98, .7);
          }
        }
      }

    }

  }
</style>
