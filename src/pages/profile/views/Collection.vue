<template>
  <div class="profile-collection">
    <CollectionHeader :isGoBack="isGoBack" :title="headerTitle"></CollectionHeader>
    <div class="collection-wrapper">
      <div class="container">
        <img src="../images/usr-name.jpeg" alt="" class="avatar" height="60" width="60">
        <div class="content">
          <div class="row-content">
            <img src="../images/usr-name.jpeg" alt="" height="16" width="24">
            <div class="store-title"><span>果之满满鲜榨果汁吧</span>&nbsp;(<span>陆软店</span>)</div>
            <div class="other-msg">
              <span class="ensure ensure-b">保</span><span class="ensure ensure-p">票</span>
            </div>
          </div>
          <div class="row-content">
            <div class="star-wrapper">
              <Star :imageSize="14" :score="score"></Star>
              <span class="store-score">{{score}}</span>
              <span class="sell-count">月售{{sellCount}}单</span>
            </div>
            <div class="other-msg">
              <span class="distribution">准时送</span><span class="distribution distribution-bg">蜂鸟专送</span>
            </div>
          </div>
          <div class="row-content">
            <div class="min-price">¥20起送</div>
            <div class="other-msg">
              <span>1.5km</span><span>|</span><span>31分钟</span>
            </div>
          </div>

        </div>
      </div>
      <div class="container">
        <img src="../images/usr-name.jpeg" alt="" class="avatar" height="60" width="60">
        <div class="content">
          <div class="row-content">
            <img src="../images/usr-name.jpeg" alt="" height="16" width="24">
            <div class="store-title"><span>避风塘</span>&nbsp;(<span>浦建路店</span>)</div>
            <div class="other-msg">
              <span class="ensure ensure-b">保</span><span class="ensure ensure-p">票</span>
            </div>
          </div>
          <div class="row-content">
            <div class="star-wrapper">
              <Star :imageSize="14" :score="score"></Star>
              <span class="store-score">{{score}}</span>
              <span class="sell-count">月售{{sellCount}}单</span>
            </div>
            <div class="other-msg">
              <span class="distribution">准时送</span><span class="distribution distribution-bg">蜂鸟专送</span>
            </div>
          </div>
          <div class="row-content">
            <div class="min-price">¥20起送</div>
            <div class="other-msg">
              <span>1.5km</span><span>|</span><span>31分钟</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CollectionHeader from '../../../components/header/CommonHeader.vue'
  import Star from '../../../components/star/Star'

  export default {
    name: 'ProfileCollection',
    data() {
      return {
        headerTitle: '我的收藏',
        isGoBack: true,
        score: 4.6,
        sellCount: 577
      }
    },
    mounted() {
      this.$store.dispatch("FOOTER_HIDE");
    },
    methods: {
      gotoAddress(path) {
        this.$router.push(path);
      }
    },
    components: {
      CollectionHeader,
      Star
    }
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../../styles/_mixins";

  .profile-collection {
    margin-top: 44px;
    .collection-wrapper {
      padding-left: 10px;
      background-color: @fff;
      .container {
        display: flex;
        align-items: center;
        padding-right: 10px;
        height: 80px;
        border-bottom: 1px solid @bc;
        &:last-child {
          border-bottom: none;
        }
        .avatar {
          border-radius: 2px;
        }
        .content {
          margin-left: 10px;
          flex: 1;
          .row-content {
            display: flex;
            margin-bottom: 2px;
            font-size: 12px;
            &:last-child {
              margin-bottom: 0;
            }
            .store-title {
              flex: 1;
              margin-left: 4px;
              font-size: 16px;
            }
            .star-wrapper {
              flex: 1;
              .star {
                display: inline-block;
              }
              .store-score, .sell-count {
                display: inline-block;
                height: 16px;
                line-height: 16px;
                margin-left: 4px;
              }
            }
            .min-price {
              flex: 1;
            }
            .other-msg {
              span {
                display: inline-block;
                padding: 2px;
                margin-left: 8px;
                border-radius: 2px;
                &.ensure {
                  border: 1px solid @bc;
                  color: @ccc;
                }
                &.distribution {
                  border: 1px solid @blue;
                  color: @blue;
                }
                &.distribution-bg {
                  background-color: @blue;
                  color: @fff;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
