<template>
  <div class="find-indexHome">
    <CommonHeader :isGoBack="isGoBack" :title="headerTitle"></CommonHeader>
    <div class="content-wrapper">
      <div class="wrapper-row">
        <div class="wrapper-points border-right">
          <div class="box-content">
            <p class="title">必吃爆料</p>
            <p class="dec">最夯外卖指南</p>
          </div>
          <img src="./images/usr-name.jpeg" alt="" class="box-img">
        </div>
        <div class="wrapper-col">
          <div class="wrapper-box">
            <div class="box-content">
              <p class="title">必吃爆料</p>
              <p class="dec">最夯外卖指南</p>
            </div>
            <img src="./images/usr-name.jpeg" alt="" class="box-img">
          </div>
          <div class="wrapper-box">
            <div class="box-content">
              <p class="title">有奖推荐</p>
              <p class="dec">5元现金拿不停</p>
            </div>
            <img src="./images/usr-name.jpeg" alt="" class="box-img">
          </div>
        </div>
      </div>
      <div class="wrapper-row">
        <div class="wrapper-box border-right">
          <div class="box-content">
            <p class="title">周边优惠</p>
            <p class="dec">领取口碑好券</p>
          </div>
          <img src="./images/usr-name.jpeg" alt="" class="box-img">
        </div>
        <div class="wrapper-box">
          <div class="box-content">
            <p class="title">免费流量</p>
            <p class="dec">每月最高500M</p>
          </div>
          <img src="./images/usr-name.jpeg" alt="" class="box-img">
        </div>
      </div>
    </div>
    <img src="./images/usr-name.jpeg" alt="" class="adv-img">

    <OrderHeader :title="'美食热推'" :imageType="'0'"></OrderHeader>
    <div class="goods-content">
      <div class="goods-box">
        <div class="goods">
          <img src="./images/usr-name.jpeg" alt="" class="goods-pic">
          <p class="goods-name">青椒肉丝</p>
          <p class="goods-price">¥18</p>
        </div>
        <div class="goods">
          <img src="./images/usr-name.jpeg" alt="" class="goods-pic">
          <p class="goods-name">青椒肉丝</p>
          <p class="goods-price">¥18</p>
        </div>
        <div class="goods">
          <img src="./images/usr-name.jpeg" alt="" class="goods-pic">
          <p class="goods-name">青椒肉丝</p>
          <p class="goods-price">¥18</p>
        </div>
      </div>
      <div class="more">查看更多 ></div>
    </div>
    <OrderHeader :title="'天天特价'" :imageType="'1'"></OrderHeader>
  </div>
</template>

<script>
  import CommonHeader from "../../components/header/CommonHeader.vue"
  import OrderHeader from "../../components/orderHeader/OrderHeader.vue"

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
      OrderHeader
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
      .wrapper-row {
        display: flex;
        .wrapper-points {
          flex: 1;
          box-sizing: border-box;
          .border-bottom-1px(@ccc);
          .box-content {
            padding: 15px 10px 4px 10px;
            .title {
              color: @b32;
              font-size: 20px;
            }
            .dec {
              margin-top: 10px;
              font-size: 16px;
              color: @ccc;
            }
          }
          .box-img {
            margin-left: 10px;
            width: 80px;
            height: 80px;
            border-radius: 50%;
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
          .box-content {
            flex: 1;
            .title {
              color: @b32;
              font-size: 20px;
            }
            .dec {
              margin-top: 10px;
              font-size: 16px;
              color: @ccc;
            }
          }
          .box-img {
            display: inline-block;
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
        }
      }

    }
    .adv-img {
      margin: 8px 0;
      width: 100%;
      height: 80px;
    }
    .goods-content {
      margin-bottom: 10px;
      background: @fff;
      .goods-box {
        display: flex;
        padding: 0 4px;
        justify-content: space-around;
        align-items: center;
        .goods {
          width: 30%;
          font-size: 14px;
          .goods-pic {
            width: 100%;
            height: auto;
          }
          .goods-name {
            padding: 4px 0 8px 0;
            color: @65;
          }
          .goods-price {
            padding-bottom: 10px;
            color: @b32;
          }
        }
      }
      .more {
        padding-bottom: 8px;
        text-align: center;
        font-size: 14px;
        color: @65;
      }
    }
  }
</style>
