<template>
  <footer class="home-footer">
    <router-link to="/home/indexHome" active-class="selected-active">
      <span class="icon icon-home"></span>外卖
    </router-link>
    <router-link to="/find/indexHome" active-class="selected-active">
      <span class="icon icon-find"></span>发现
    </router-link>
    <router-link to="/order/indexHome" active-class="selected-active">
      <span class="icon icon-order"></span>订单
    </router-link>
    <router-link to="/profile/indexHome" active-class="selected-active">
      <span class="icon icon-mine"></span>我的
    </router-link>
  </footer>
</template>
<style scoped type="text/css" lang="less">
  @import "../../styles/_mixins";

  .home-footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    display: flex;
    flex-direction: row;
    height: 50px;
    background-color: @fff;
    a {
      flex: 1;
      display: block;
      text-align: center;
      height: 100%;
      font-size: 14px;
      &.selected-active {
        color: @blue;
        .icon:before {
          color: @blue;
        }
      }
      .icon {
        display: block;
        margin: 7px auto 4px auto;
        font-size: 18px;
      }
    }
  }
</style>
