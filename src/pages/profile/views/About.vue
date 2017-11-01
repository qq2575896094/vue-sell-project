<template>
  <div class="profile-about">
    <CommonHeader :isGoBack="isGoBack" :title="headerTitle"></CommonHeader>
    <div class="content-wrapper">
      <span class="icon icon-home"></span>
      <p class="des">美好生活&nbsp;&nbsp;&nbsp;触手可得</p>
      <div class="version">v7.20 (377)</div>
    </div>
    <div class="footer-wrapper">
      <div class="content">
        <span>规则中心</span><span class="interval">|</span><span>免费声明</span><span class="interval">|</span><span>开源组件免费许可</span>
      </div>
      <div class="content">
        <p>拉扎斯网络科技(上海)有限公司</p>
        <p>@2017 Rajax Network Technology Co.,Ltd</p>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from "../../../components/header/CommonHeader.vue"

  export default {
    name: 'ProfileAbout',
    data() {
      return {
        isGoBack: true,
        headerTitle: "关于饿了么"
      }
    },
    mounted() {
      this.$store.dispatch("FOOTER_HIDE");
    },
    components: {
      CommonHeader
    }
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../../styles/_mixins";

  .profile-about {
    margin-top: 54px;
    .content-wrapper {
      position: absolute;
      left: 0;
      top: 20%;
      text-align: center;
      width: 100%;
      .icon-home {
        background-color: @blue;
        border-radius: 16px;
        display: inline-block;
        width: 80px;
        height: 80px;
        line-height: 80px;
        font-size: 50px;
        &:before {
          color: @fff;
        }
      }
      .des {
        margin: 18px 0 12px 0;
        font-size: 18px;
        color: @blue;
      }
      .version {
        margin: 0 auto;
        width: 90px;
        padding: 4px 5px;
        font-size: 14px;
        border: 1px solid @c9;
        border-radius: 14px;
        color: @c9;
      }
    }
    .footer-wrapper {
      position: fixed;
      left: 0;
      bottom: 10px;
      width: 100%;
      .content {
        width: 100%;
        text-align: center;
        font-size: 14px;
        &:last-child {
          margin-top: 10px;
        }
        .interval {
          display: inline-block;
          margin: 0 10px;
          color: @ccc;
        }
        p {
          color: @ccc;
        }
      }
    }
  }
</style>
