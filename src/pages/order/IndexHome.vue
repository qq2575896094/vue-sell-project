<template>
  <div class="order-indexHome">
    <CommonHeader :isGoBack="isGoBack" :title="headerTitle"></CommonHeader>
    <div class="wrapper-content" v-if="true">
      <!--<div class="wrapper-content" v-if="userInfo&&userInfo.personId">-->
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
          <span class="btn-again">再来一单</span>
          <div class="clear"></div>
        </div>
        <div class="footer">查看更多<span class="icon icon-keyboard_arrow_right"></span></div>
      </div>
      <div class="nearby">
        <div class="header">
          <span :class="isNearbyTab?'item-active':'item'" @click="changeNearbyTab(true)">附近买过</span>
          <span :class="isNearbyTab?'item':'item-active'" @click="changeNearbyTab(false)">附近收藏</span>
        </div>
        <div class="content">
          <div class="goods">
            <img src="/static/images/usr-name.jpeg" alt="" width="48" height="48">
            <div class="goods-content">
              <div class="title">山东水饺(峨山路店)</div>
              <div class="preferential">满27减7,满50减10</div>
            </div>
            <div>买过1次</div>
          </div>
          <div class="goods">
            <img src="/static/images/usr-name.jpeg" alt="" width="48" height="48">
            <div class="goods-content">
              <div class="title">山东水饺(峨山路店)</div>
              <div class="preferential">满27减7,满50减10</div>
            </div>
            <div>买过1次</div>
          </div>
        </div>
        <div class="footer">查看更多</div>
      </div>
      <div class="enjoy">
        <div class="header">猜你喜欢</div>
        <div class="content">
          <div class="goods">
            <img class="goods-img" src="/static/images/usr-name.jpeg" alt="">
            <div class="goods-txt">
              <div class="title">石榴梨汁</div>
              <div class="sales">月售117份 好评率100%</div>
              <div class="price">
                <span class="current"><span class="currency">¥</span>16.8</span>
                <span class="before"><span class="currency">¥</span>16.8</span>
                <span class="rebate">7折</span>
              </div>
              <div class="address">果之满满鲜榨果汁吧(峨山路店)</div>
            </div>
          </div>
          <div class="goods">
            <img class="goods-img" src="/static/images/usr-name.jpeg" alt="">
            <div class="goods-txt">
              <div class="title">石榴梨汁</div>
              <div class="sales">月售117份 好评率100%</div>
              <div class="price">
                <span class="current"><span class="currency">¥</span>16.8</span>
                <span class="before"><span class="currency">¥</span>16.8</span>
                <span class="rebate">7折</span>
              </div>
              <div class="address">果之满满鲜榨果汁吧(峨山路店)</div>
            </div>
          </div>
          <div class="goods">
            <img class="goods-img" src="/static/images/usr-name.jpeg" alt="">
            <div class="goods-txt">
              <div class="title">石榴梨汁</div>
              <div class="sales">月售117份 好评率100%</div>
              <div class="price">
                <span class="current"><span class="currency">¥</span>16.8</span>
                <span class="before"><span class="currency">¥</span>16.8</span>
                <span class="rebate">7折</span>
              </div>
              <div class="address">果之满满鲜榨果汁吧(峨山路店)</div>
            </div>
          </div>
          <div class="goods">
            <img class="goods-img" src="/static/images/usr-name.jpeg" alt="">
            <div class="goods-txt">
              <div class="title">石榴梨汁</div>
              <div class="sales">月售117份 好评率100%</div>
              <div class="price">
                <span class="current"><span class="currency">¥</span>16.8</span>
                <span class="before"><span class="currency">¥</span>16.8</span>
                <span class="rebate">7折</span>
              </div>
              <div class="address">果之满满鲜榨果汁吧(峨山路店)</div>
            </div>
          </div>
        </div>
        <div class="footer">查看更多<span class="icon icon-keyboard_arrow_right"></span></div>
      </div>
    </div>
    <div class="wrapper-content" v-else>
      <div class="wrapper-box">
        <img src="../../images/usr-name.jpeg" alt="" width="160" height="120">
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
        headerTitle: "订单",
        isNearbyTab: true      //默认显示附近买过
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
      changeNearbyTab(tf) {
        this.isNearbyTab = tf;
      }
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
    margin-bottom: 60px;
    width: 100%;
    box-sizing: border-box;
    .wrapper-content {
      width: 100%;

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
          .btn-again {
            float: right;
            margin: 10px 0;
            padding: 6px 12px;
            //            .border-right-1px(@blue);
            //            .border-bottom-1px(@blue);
            //            .border-left-1px(@blue);
            //            .border-top-1px(@blue);
            color: @blue;
            border: 1px solid @blue;
            border-radius: 4px;
          }
          .clear {
            clear: both;
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
      .nearby {
        margin-top: 10px;
        padding: 0 10px;
        background: @fff;
        .header {
          width: 100%;
          height: 30px;
          line-height: 30px;
          font-size: 16px;

          .item-active {
            display: inline-block;
            font-weight: 700;
            border-bottom: 2px solid @blue;
          }
          .item {
            display: inline-block;
            font-weight: normal;
            border-bottom: none;
            color: @ccc;
          }

        }
        .content {
          .goods {
            display: flex;
            padding: 20px 0;
            .border-bottom-1px(@ccc);
            .goods-content {
              flex: 1;
              margin-left: 8px;
              .title {
                padding: 4px 0;
              }
              .preferential {
                padding: 4px 0 4px 20px;
              }
            }
          }
        }
        .footer {
          width: 100%;
          height: 40px;
          line-height: 40px;
          text-align: center;
        }
      }
      .enjoy {
        margin-top: 10px;
        padding: 0 10px;
        width: 100%;
        box-sizing: border-box;
        background: @fff;
        .header {
          width: 100%;
          height: 30px;
          line-height: 30px;
          font-size: 16px;
          font-weight: 700;
        }
        .content {
          width: 100%;
          font-size: 0;
          .goods {
            display: inline-block;
            width: 49%;
            box-sizing: border-box;
            margin-bottom: 10px;
            overflow: hidden;
            border: 1px solid @ccc;
            &:nth-child(2n+1) {
              margin-right: 2%;
            }
            .goods-img {
              width: 100%;
              height: auto;
            }
            .goods-txt {
              margin: 8px 6px;
              .title {
                font-size: 18px;
                font-weight: 700;
              }
              .sales {
                margin-top: 6px;
                font-size: 12px;
                color: @ccc;
              }
              .price {
                margin: 6px 0;
                .current {
                  margin-right: 4px;
                  font-size: 18px;
                  color: @b32;
                  .currency {
                    font-size: 12px;
                  }
                }
                .before {
                  margin-right: 4px;
                  font-size: 12px;
                  color: @ccc;
                  text-decoration: line-through;
                  vertical-align: top;
                  .currency {
                    vertical-align: top;
                  }
                }
                .rebate {
                  display: inline-block;
                  padding: 2px 4px;
                  font-size: 12px;
                  color: @b32;
                  border: 1px solid @b32;
                  border-radius: 4px;
                }
              }
              .address {
                padding-left: 20px;
                width: 100%;
                box-sizing: border-box;
                font-size: 12px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: @ccc;
              }
            }

          }
        }
        .footer {
          width: 100%;
          height: 40px;
          line-height: 40px;
          text-align: center;
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
