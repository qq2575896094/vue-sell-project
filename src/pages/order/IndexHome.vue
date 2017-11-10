<template>
  <div class="order-indexHome">
    <CommonHeader :isGoBack="isGoBack" :title="headerTitle"></CommonHeader>
    <!--<div class="wrapper-content" v-if="true">-->
    <div class="wrapper-content" v-if="userInfo&&userInfo.personId">
      <div class="my-order">
        <div class="header">
          <div class="title">我的订单</div>
          <div class="title-icon">
            <span class="my-all-order">全部订单</span>
            <span class="icon icon-keyboard_arrow_right"></span>
          </div>
        </div>
        <div class="content">
          <div class="seller-wrapper">
            <img src="/static/images/usr-name.jpeg" alt="" class="seller-avatar" width="48" height="48">
            <div class="seller">
              <div class="title">山东水饺(峨山路店)</div>
              <div class="date">2017-08-09 10:57</div>
              <div class="detail">韭菜鸡蛋18只等4件商品</div>
              <div class="price">¥63</div>
            </div>
            <span>订单已完成</span>
          </div>
          <div class="btn-again">再来一单</div>
        </div>
        <div class="footer">查看更多<span class="icon icon-keyboard_arrow_right"></span></div>
      </div>
      <div class="nearby">
        <div class="header"></div>
        <div class="content"></div>
        <div class="footer"></div>
      </div>
    </div>
    <div class="wrapper-content" v-else>
      <div class="wrapper-box">
        <img src="/static/images/usr-name.jpeg" alt="" width="160" height="120">
        <p class="login-hints">登录后查看外卖订单</p>
        <div class="btn-submit" @click="changeAddress('/profile/mobileSign')">立即登录</div>
      </div>
    </div>

  </div>
</template>

<script>
  import CommonHeader from "../../components/header/CommonHeader.vue"
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'OrderIndexHome',
    data() {
      return {
        isGoBack: false,
        headerTitle: "订单"
      }
    },
    computed: {
      ...mapGetters(['userInfo'])
    },
    mounted() {
      this.$store.dispatch('FOOTER_SHOW');
    },
    methods: {
      //跳转页面
      changeAddress(path) {
        this.$router.push(path);
      },
    },
    components: {
      CommonHeader
    }
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../styles/_mixins";

  .order-indexHome {
    padding-top: 44px;
    padding-bottom: 50px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .wrapper-content {
      width: 100%;
      height: 100%;
      .my-order {
        padding: 0 10px;
        height: auto;
        background: @fff;
        .header {
          display: flex;
          margin: 5px 0;
          height: 30px;
          align-items: center;
          .title {
            flex: 1;
            color: #000;
          }
          .title-icon {
            font-size: 12px;
            color: @blue;
            .my-all-order {
              vertical-align: middle;
            }
            .icon {
              vertical-align: middle;
              font-size: 14px;
            }
          }
          .content {
            line-height: 16px;
            font-size: 12px;
            color: rgba(51, 51, 51, .5);
          }
        }
        .content {
          .seller-wrapper {
            display: flex;
            .seller {
              flex: 1;
              margin-left: 10px;
              .title {
                margin-bottom: 4px;
                font-size: 18px;
              }
              .date {
                font-size: 12px;
              }
              .detail {
                margin: 10px 0 8px 0;
                font-size: 16px;
              }
            }
          }
        }
        .footer {
          margin-top: 10px;
          width: 100%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          .border-top-1px(@f1);
          .icon {
            display: inline-block;
            transform: rotate(90deg);
          }
        }
      }
      .wrapper-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        .login-hints {
          margin: 14px 0;
          text-align: center;
          font-size: 16px;
        }
        .btn-submit {
          margin-left: 30px;
          width: 100px;
          height: 36px;
          text-align: center;
          line-height: 36px;
          color: @fff;
          border-radius: 2px;
          background-color: #00d762;
          &:active {
            color: @fff;
            background-color: rgba(0, 215, 98, .7);
          }
        }
      }

    }

  }
</style>
