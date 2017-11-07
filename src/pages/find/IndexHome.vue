<template>
  <div class="find-indexHome">
    <CommonHeader :isGoBack="isGoBack" :title="headerTitle"></CommonHeader>
    <div class="content-wrapper">
      <div class="wrapper-row">
        <div class="wrapper-points border-right">
          <div class="box-content">
            <p class="title cce">积分商城</p>
            <p class="des">0元好物在这里</p>
          </div>
          <img src="/static/images/usr-name.jpeg" alt="" class="box-img">
        </div>
        <div class="wrapper-col">
          <div class="wrapper-box">
            <div class="box-content">
              <p class="title cdb">必吃爆料</p>
              <p class="des">最夯外卖指南</p>
            </div>
            <img src="/static/images/usr-name.jpeg" alt="" class="box-img">
          </div>
          <div class="wrapper-box">
            <div class="box-content">
              <p class="title c09">有奖推荐</p>
              <p class="des">5元现金拿不停</p>
            </div>
            <img src="/static/images/usr-name.jpeg" alt="" class="box-img">
          </div>
        </div>
      </div>
      <div class="wrapper-row">
        <div class="wrapper-box border-right">
          <div class="box-content">
            <p class="title ceb">周边优惠</p>
            <p class="des">领取口碑好券</p>
          </div>
          <img src="/static/images/usr-name.jpeg" alt="" class="box-img">
        </div>
        <div class="wrapper-box">
          <div class="box-content">
            <p class="title ceb">免费流量</p>
            <p class="des">每月最高500M</p>
          </div>
          <img src="/static/images/usr-name.jpeg" alt="" class="box-img">
        </div>
      </div>
    </div>
    <img src="/static/images/usr-name.jpeg" alt="" class="adv-img">

    <FindHeader :title="'美食热推'" :imageType="'0'" :describe="'你的口味,我都懂得'"></FindHeader>
    <FindThreeItems></FindThreeItems>
    <FindHeader :title="'天天特价'" :imageType="'1'" :describe="'特价商品,一网打尽'"></FindHeader>
    <FindThreeItems></FindThreeItems>
    <FindHeader :title="'每日精选'" :imageType="'1'" :describe="'领券优惠 全场一元包邮'"></FindHeader>
    <FindThreeItems></FindThreeItems>
  </div>
</template>

<script>
  import CommonHeader from "../../components/header/CommonHeader.vue"
  import FindHeader from "../../components/find/Header.vue"
  import FindThreeItems from '../../components/find/ThreeItems.vue'

  export default {
    name: 'FindIndexHome',
    data() {
      return {
        isGoBack: false,
        headerTitle: "发现"
      }
    },
    mounted() {
      this.$store.dispatch("FOOTER_SHOW");
    },
    methods: {},
    components: {
      CommonHeader,
      FindHeader,
      FindThreeItems
    }
  }
</script>

<style lang="less" scoped>
  @import "../../styles/_mixins";

  .find-indexHome {
    margin-top: 54px;
    padding-bottom: 50px;
    .content-wrapper {
      background: @fff;
      width: 100%;
      .border-right {
        .border-right-1px(@ccc);
      }
      .box-content {
        flex: 1;
        .title {
          font-size: 20px;
          &.c09 {
            color: #09b6d4;
          }
          &.cce {
            color: #efac68;
          }
          &.cdb {
            color: #db796e;
          }
          &.ceb {
            color: #eb5b5a;
          }
        }
        .des {
          margin-top: 10px;
          font-size: 14px;
          color: @ccc;
        }
      }
      .box-img {
        display: inline-block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      .wrapper-row {
        display: flex;
        .wrapper-points {
          flex: 1;
          box-sizing: border-box;
          .border-bottom-1px(@ccc);
          .box-content {
            padding: 15px 10px 4px 10px;
          }
          .box-img {
            margin-left: 20px;
            width: 70px;
            height: 70px;
          }
        }
        .wrapper-col {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .wrapper-box {
          width: 100%;
          flex: 1;
          display: flex;
          align-items: center;
          padding: 15px 10px;
          box-sizing: border-box;
          .border-bottom-1px(@ccc);
        }
      }

    }
    .adv-img {
      margin: 8px 0;
      width: 100%;
      height: 80px;
    }

  }
</style>
