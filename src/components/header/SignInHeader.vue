<template>
  <header class="sign-in-header">
    <span class="icon icon-close" v-if="isGoBack" @click="$router.go(-1)"></span>
    <div class="header-title">登录</div>
    <span class="title-right" @click="changeAddress('/profile/passwordSign')">密码登录</span>
  </header>
</template>

<script>
  export default {
    name: 'CommonSignInHeader',
    props: ["isGoBack"],
    methods: {
      changeAddress(path) {
        this.$router.push(path);
      }
    }
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../styles/_mixins";

  .sign-in-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    width: 100%;
    height: 44px;
    line-height: 44px;
    font-size: 18px;
    background-color: @blue;
    color: @fff;
    .header-title {
      width: 100%;
      height: 100%;
      text-align: center;
    }
    .icon-close {
      position: absolute;
      top: 13px;
      left: 10px;
    }
    .title-right {
      position: absolute;
      top: 0;
      right: 10px;
      font-size: 16px;
    }
  }
</style>
