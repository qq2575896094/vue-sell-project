<template>
  <header class="profile-header">
    <span class="icon icon-arrow_lift"></span>
    <div class="header-title">我的</div>
    <span class="icon icon-add_circle" @click="changeAddress('/profile/setting')"></span>
  </header>
</template>

<script>
  export default {
    name: 'profile-header',
    methods: {
      changeAddress(path) {
        this.$router.push(path);
      }
    }
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../../styles/_mixins";

  .profile-header {
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
    .icon-arrow_lift {
      position: absolute;
      top: 13px;
      left: 10px;
    }
    .icon-add_circle {
      position: absolute;
      top: 13px;
      right: 10px;
    }
  }
</style>
