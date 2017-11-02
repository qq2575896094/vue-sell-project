<template>
  <div class="common-list-arrow" @click="changeAddress(path)">
    <div class="title">{{title}}</div>
    <span class="icon icon-keyboard_arrow_right"></span>
  </div>
</template>

<script>
  export default {
    name: 'CommonListArrow',
    props: ['title', 'path'],
    methods: {
      changeAddress(path) {
        this.$router.push(path);
      }
    }
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../styles/_mixins";

  .common-list-arrow {
    display: flex;
    align-items: center;
    padding-right: 10px;
    height: 40px;
    border-bottom: 1px solid @f5;
    &:last-child {
      border-bottom: none;
    }
    .title {
      flex: 1;
    }
    .icon {
      color: @c9;
      font-size: 24px;
    }
  }
</style>
