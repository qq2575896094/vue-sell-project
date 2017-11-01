<template>
  <div class="common-list-title" @click="changeAddress(path)">
    <div class="title">{{title}}</div>
    <div class="content">{{content}}</div>
  </div>
</template>

<script>
  export default {
    name: 'CommonListRow',
    props: ['title', 'content', 'path'],
    methods: {
      changeAddress(path) {
        this.$router.push(path);
      }
    }
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../styles/_mixins";

  .common-list-title {
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
