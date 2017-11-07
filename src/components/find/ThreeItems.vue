<template>
  <div class="find-three-items goods-content">
    <div class="goods-box">
      <div class="goods">
        <img src="/static/images/usr-name.jpeg" alt="" class="goods-pic">
        <p class="goods-name">青椒肉丝</p>
        <p class="goods-price">¥18</p>
      </div>
      <div class="goods">
        <img src="/static/images/usr-name.jpeg" alt="" class="goods-pic">
        <p class="goods-name">青椒肉丝</p>
        <p class="goods-price">¥18</p>
      </div>
      <div class="goods">
        <img src="/static/images/usr-name.jpeg" alt="" class="goods-pic">
        <p class="goods-name">青椒肉丝</p>
        <p class="goods-price">¥18</p>
      </div>
    </div>
    <div class="more">查看更多 ></div>
  </div>
</template>

<script>
  export default {
    name: 'FindThreeItems'
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../styles/_mixins";

  .find-three-items {
    &.goods-content {
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
