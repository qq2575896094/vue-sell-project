<template>
  <div class="find-header">
    <div class="header">
      <span class="line line-after"></span><span class="img-box"></span><span class="title" :class="classMap[imageType]">{{title}}</span><span class="line line-before"></span>
    </div>
    <div class="des">{{describe}}</div>
  </div>
</template>

<script>
  export default {
    name: 'FindHeader',
    props: ["title", "imageType", "describe"],
    data() {
      return {
        classMap: []
      }
    },
    mounted() {
      this.classMap = ["selling", "offers"];
    }
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../styles/_mixins";

  .find-header {
    padding: 10px 0;
    text-align: center;
    background: @fff;
    .header {
      height: 40px;
      line-height: 40px;

      .title {
        height: 40px;
        font-size: 18px;
        vertical-align: middle;
        display: inline-block;
        padding: 0 4px 0 28px;
        &.selling {
          background: url("./images/usr-name.jpeg") no-repeat 4px 10px;
          background-size: 20px 20px;
        }
        &.offers {
          background: url("./images/usr-name.jpeg") no-repeat 4px 10px;
          background-size: 20px 20px;
        }
        /*background-size: 20px 20px;*/
      }
      .line {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 2px;
        vertical-align: middle;
        background: #363636;
        &.line-after:after {
          content: '';
          position: absolute;
          right: 0;
          bottom: -5px;
          background: #363636;
          width: 10px;
          height: 10px;
          display: inline-block;
          border-radius: 50%;
        }
        &.line-before:before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px;
          background: #363636;
          width: 10px;
          height: 10px;
          display: inline-block;
          border-radius: 50%;
        }
      }
    }
    .des {
      margin-top: 4px;
      text-align: center;
      font-size: 14px;
      color: @ccc;

    }
  }
</style>
