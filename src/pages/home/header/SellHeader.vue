<template>
  <header id="sell-header">
    <div class="sell-container">
      <div class="avatar">
        <img class="" :src="seller.avatar" alt="" width="64" height="64">
      </div>
      <div class="sell-content">
        <div class="seller-title">
          <span class="brand"></span><span class="title-name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟到达</div>
        <div class="supports" v-if="seller.supports">
          <i class="icon" :class="classMap[seller.supports[0].type]"></i><span class="message">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="supports-content" v-if="seller.supports" @click="DETAIL_SHOW">
        <span class="counter">{{seller.supports.length}}个</span><i class="icon icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-image"></span><span class="bulletin-text">{{seller.bulletin}}</span><i class="icon icon-keyboard_arrow_right"></i>
    </div>
    <div class="header-background">
      <img :src="seller.avatar" width="100%" height="100%" alt="">
    </div>
    <transition name="" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div class="detail-wrapper" v-show="detailShow">
        <div class="detail clearfix">
          <div class="detail-main">
            <div class="title">{{seller.name}}</div>
            <div class="star-wrapper">
              <Star :imageSize="48" :score="seller.score"></Star>
            </div>
            <div class="message-container">
              <div class="header">
                <div class="line"></div>
                <div class="text">优惠信息</div>
                <div class="line"></div>
              </div>
              <div class="content">
                <div class="message" v-for="(items,index) in seller.supports">
                  <span class="icon" :class="classMap[items.type]"></span><span class="text">{{items.description}}</span>
                </div>
              </div>
            </div>
            <div class="bulletin-container">
              <div class="header">
                <div class="line"></div>
                <div class="text">商家公告</div>
                <div class="line"></div>
              </div>
              <div class="content">{{seller.bulletin}}</div>
            </div>
          </div>
        </div>
        <div class="detail-close icon-close" @click="DETAIL_HIDE"></div>
      </div>
    </transition>
  </header>
</template>

<script>
  import Star from '../../../components/star/Star'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'SellHeader',
    props: ['seller'],
    data() {
      return {}
    },
    computed: mapGetters(['detailShow']),
    mounted() {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
    },
    methods: mapActions(['DETAIL_SHOW', 'DETAIL_HIDE']),
    components: {
      Star
    }
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../../styles/_mixins";

  #sell-header {
    position: relative;
    background-color: rgba(7, 17, 27, 0.5);
    color: rgb(255, 255, 255);
    .sell-container {
      position: relative;
      display: block;
      padding: 24px 12px 18px 24px;
      height: 64px;
      font-size: 0;
      .avatar {
        display: inline-block;
        vertical-align: top;
        width: 64px;
        height: 64px;
        img {
          border-radius: 2px;
        }
      }

      .sell-content {
        display: inline-block;
        margin-left: 16px;
        .seller-title {
          margin-top: 2px;
          font-size: 16px;
          font-weight: bold;
          line-height: 18px;
          .brand {
            display: inline-block;
            margin-right: 6px;
            vertical-align: top;
            width: 30px;
            height: 18px;
            .background-image('brand');
            background-size: 30px 18px;
            background-repeat: no-repeat;
          }
          .title-name {
            display: inline-block;
            height: 18px;
            line-height: 18px;
            font-size: 16px;
            font-weight: bold;
          }
        }
        .description {
          margin-top: 8px;
          font-size: 12px;
          font-weight: 200;
          line-height: 12px;
        }
        .supports {
          margin-top: 10px;
          height: 12px;
          font-size: 10px;
          .icon {
            display: inline-block;
            vertical-align: top;
            width: 12px;
            height: 12px;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            &.decrease {
              .background-image('decrease_1');
            }
            &.discount {
              .background-image('discount_1');
            }
            &.guarantee {
              .background-image('guarantee_1');
            }
            &.invoice {
              .background-image('invoice_1');
            }
            &.special {
              .background-image('special_1');
            }
          }
          .message {
            display: inline-block;
            vertical-align: top;
            margin-left: 4px;
            font-size: 10px;
            font-weight: 200;
            line-height: 12px;
          }
        }
      }
      .supports-content {
        position: absolute;
        right: 12px;
        bottom: 14px;
        padding: 0 8px;
        border-radius: 14px;
        height: 24px;
        line-height: 12px;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.2);
        font-size: 10px;
        font-weight: 200;
        .counter {
          display: inline-block;
          vertical-align: top;
          height: 24px;
          line-height: 24px;
        }
        .icon {
          display: inline-block;
          margin-left: 2px;
          height: 24px;
          line-height: 24px;
        }
      }
    }
    .bulletin-wrapper {
      position: relative;
      padding: 0 22px 0 12px;
      height: 28px;
      line-height: 28px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      background-color: rgba(7, 17, 27, 0.2);
      .bulletin-image {
        display: inline-block;
        vertical-align: top;
        margin-top: 8px;
        width: 22px;
        height: 12px;
        line-height: 12px;
        .background-image('bulletin');
        background-size: 22px 12px;
        background-repeat: no-repeat;
      }
      .bulletin-text {
        margin: 0 4px;
        vertical-align: top;
        font-size: 10px;
        font-weight: 200;
      }
      .icon {
        position: absolute;
        font-size: 10px;
        right: 12px;
        top: 8px;
      }
    }
    .header-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      filter: blur(10px);
    }
    .detail-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 101;
      width: 100%;
      height: 100%;
      overflow: auto;
      background: rgba(7, 17, 27, 0.8);
      backdrop-filter: blur(10px); /*ios 模糊背景*/
      .detail {
        width: 100%;
        min-height: 100%;
        .detail-main {
          margin: 64px 36px 0 36px;
          padding-bottom: 64px;
          .title {
            text-align: center;
            font-size: 16px;
            font-weight: 700;
            line-height: 16px;
            color: rgb(255, 255, 255);
          }
          .star-wrapper {
            margin-top: 16px;
            padding: 2px 0;
            text-align: center;
          }
          .message-container, .bulletin-container {
            width: 100%;
            margin-top: 28px;
            .header {
              display: flex;
              width: 100%;
              margin-bottom: 24px;
              .line {
                flex: 1;
                position: relative;
                top: -6px;
                left: 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
              }
              .text {
                padding: 0 12px;
                font-size: 14px;
                font-weight: 700;
                line-height: 14px;
              }
            }
            .content {
              padding: 0 12px;
              margin-bottom: 28px;
            }
          }
          .message-container {
            .message {
              margin-bottom: 12px;
              font-size: 0;
              &.after {
                margin-bottom: 0;
              }
              .icon {
                display: inline-block;
                vertical-align: top;
                width: 16px;
                height: 16px;
                margin-right: 6px;
                background-size: 16px 16px;
                background-repeat: no-repeat;
                &.decrease {
                  .background-image('decrease_2');
                }
                &.discount {
                  .background-image('discount_2');
                }
                &.guarantee {
                  .background-image('guarantee_2');
                }
                &.invoice {
                  .background-image('invoice_2');
                }
                &.special {
                  .background-image('special_2');
                }
              }
              .text {
                display: inline-block;
                font-size: 12px;
                line-height: 16px;
                font-weight: 200;
              }
            }
          }
          .bulletin-container {
            .content {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      }
      .detail-close {
        position: relative;
        margin: -64px auto 0 auto;
        width: 32px;
        height: 32px;
        text-align: center;
        clear: both;
        font-size: 32px;
      }
    }
  }
</style>
