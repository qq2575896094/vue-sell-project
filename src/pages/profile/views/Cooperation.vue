<template>
  <div class="profile-cooperation">
    <CommonHeader :isGoBack="isGoBack" :title="headerTitle"></CommonHeader>
    <div class="cooperation-wrapper">
      <div class="container">
        <img class="avatar" src="/static/images/usr-name.jpeg" alt="" width="40" height="40">
        <div class="content">
          <p class="title">商家入驻</p>
          <p class="des">上百万餐饮、商家便利店、鲜花蛋糕等商家已入驻</p>
        </div>
        <div class="apply">立即申请</div>
      </div>
      <div class="container">
        <img class="avatar" src="/static/images/usr-name.jpeg" alt="" width="40" height="40">
        <div class="content">
          <p class="title">配送服务加盟</p>
          <p class="des">日均260万物流订单,商机无限</p>
        </div>
        <div class="apply">立即申请</div>
      </div>
      <div class="container">
        <img class="avatar" src="/static/images/usr-name.jpeg" alt="" width="40" height="40">
        <div class="content">
          <p class="title">城市代理申请</p>
          <p class="des">请联系daili@ele.me</p>
        </div>
        <div class="apply">立即申请</div>
      </div>
      <div class="container">
        <img class="avatar" src="/static/images/usr-name.jpeg" alt="" width="40" height="40">
        <div class="content">
          <p class="title">未来餐厅代理</p>
          <p class="des">未来餐厅,共赢未来</p>
        </div>
        <div class="apply">立即申请</div>
      </div>
      <div class="container">
        <img class="avatar" src="/static/images/usr-name.jpeg" alt="" width="40" height="40">
        <div class="content">
          <p class="title">帮买帮送加盟</p>
          <p class="des">同城跑腿,无线可能</p>
        </div>
        <div class="apply">立即申请</div>
      </div>
      <div class="container">
        <img class="avatar" src="/static/images/usr-name.jpeg" alt="" width="40" height="40">
        <div class="content">
          <p class="title">媒体公关合作</p>
          <p class="des">请联系pr@ele.me</p>
        </div>
      </div>
      <div class="container">
        <img class="avatar" src="/static/images/usr-name.jpeg" alt="" width="40" height="40">
        <div class="content">
          <p class="title">品牌广告合作</p>
          <p class="des">请联系marketing_coop@ele.me</p>
        </div>
      </div>
      <div class="container">
        <img class="avatar" src="/static/images/usr-name.jpeg" alt="" width="40" height="40">
        <div class="content">
          <p class="title">用户开放平台合作</p>
          <p class="des">请联系openapi.coop@ele.me</p>
        </div>
      </div>
      <div class="container">
        <img class="avatar" src="/static/images/usr-name.jpeg" alt="" width="40" height="40">
        <div class="content">
          <p class="title">商家开放平台合作</p>
          <p class="des">开放平台技术咨询请联系 openapi.merchant@ele.me,商务接洽请联系 sm.merchant@ele.me</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from "../../../components/header/CommonHeader.vue"

  export default {
    name: 'ProfileCooperation',
    data() {
      return {
        isGoBack: true,
        headerTitle: "加盟合作"
      }
    },
    mounted() {
      this.$store.dispatch('FOOTER_HIDE');
    },
    components: {
      CommonHeader
    }
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../../styles/_mixins";

  .profile-cooperation {
    margin-top: 54px;
    width: 100%;
    .cooperation-wrapper {
      padding-left: 10px;
      .container {
        display: flex;
        align-items: center;
        height: 75px;
        padding-right: 10px;
        border-bottom: 1px solid @bc;
        .avatar {
          border-radius: 50%;
        }
        .content {
          flex: 1;
          margin-left: 10px;
          margin-right: 10px;
          .title {
            margin-bottom: 8px;
            font-weight: 400;
          }
          .des {
            color: @ccc;
            font-size: 12px;
          }
        }
        .apply {
          width: 80px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          color: @blue;
          border: 1px solid @blue;
          border-radius: 3px;
        }
      }

    }
  }
</style>
