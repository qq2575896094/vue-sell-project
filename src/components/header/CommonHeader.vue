<template>
  <header class="collection-header">
    <span class="icon icon-arrow_lift" v-if="isGoBack" @click="$router.go(-1)"></span>
    <div class="header-title">{{title}}</div>
  </header>
</template>

<script>
  export default {
    name: 'collection-header',
    props: ["isGoBack", "title"]
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../styles/_mixins";

  .collection-header {
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
      &::before {
        color: @fff;
      }
    }
  }
</style>
