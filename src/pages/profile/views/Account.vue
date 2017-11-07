<template>
  <div class="profile-account">
    <CommonHeader :isGoBack="isGoBack" :title="headerTitle"></CommonHeader>
    <div class="user-wrapper">
      <div class="user-content">
        <div class="avatar-content">
          <span>头像</span><img class="avatar-images" src="/static/images/usr-name.jpeg" alt="" width="30" height="30"></div>
        <span class="icon icon-keyboard_arrow_right"></span>
      </div>
      <div class="user-content">
        <div class="user-name-title">用户名</div>
        <div class="user-name">qq2575896094</div>
      </div>
    </div>
    <div class="account-wrapper">
      <div class="account-bind">账号绑定</div>
      <div class="account">
        <div class="container" @click="changeAddress('/profile/bindMobile')">
          <span class="icon icon-home"></span>
          <div class="content"><span class="mobile-name">手机</span>
            <div class="mobile fr">183****1175</div>
          </div>
          <span class="icon icon-keyboard_arrow_right"></span>
        </div>
        <div class="container">
          <span class="icon icon-home"></span>
          <div class="content"><span class="mobile-name">微信</span>
            <div class="mobile fr">已绑定</div>
          </div>
          <span class="icon icon-keyboard_arrow_right"></span>
        </div>
        <div class="container">
          <span class="icon icon-home"></span>
          <div class="content"><span class="mobile-name">QQ</span>
            <div class="mobile fr">已绑定</div>
          </div>
          <span class="icon icon-keyboard_arrow_right"></span>
        </div>
        <div class="container">
          <span class="icon icon-home"></span>
          <div class="content"><span class="mobile-name">微博</span>
            <div class="mobile fr">已绑定</div>
          </div>
          <span class="icon icon-keyboard_arrow_right"></span>
        </div>
        <div class="container">
          <span class="icon icon-home"></span>
          <div class="content"><span class="mobile-name">淘宝</span>
            <div class="mobile fr">已绑定</div>
          </div>
          <span class="icon icon-keyboard_arrow_right"></span>
        </div>
      </div>
    </div>
    <div class="safe-wrapper">
      <div class="safe-set">安全设置</div>
      <div class="safe">
        <div class="container">
          <div class="content">
            <span class="title">登录密码</span>
            <span class="state fr">修改</span>
          </div>
          <span class="icon icon-keyboard_arrow_right"></span>
        </div>
        <div class="container" @click="changeAddress('/profile/editPayPwd')">
          <div class="content">
            <span class="title">支付密码</span>
            <span class="state fr">修改</span>
          </div>
          <span class="icon icon-keyboard_arrow_right"></span>
        </div>
        <div class="container">
          <div class="content">
            <span class="title">小额免密支付</span>
            <span class="state fr"></span>
          </div>
          <span class="icon icon-keyboard_arrow_right"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from "../../../components/header/CommonHeader.vue"

  export default {
    name: 'ProfileAccount',
    data() {
      return {
        isGoBack: true,
        headerTitle: "账户信息"
      }
    },
    mounted() {
      this.$store.dispatch("FOOTER_HIDE");
    },
    methods: {
      //跳转页面
      changeAddress(path) {
        this.$router.push(path);
      }
    },
    components: {
      CommonHeader
    }
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../../styles/_mixins";

  .profile-account {
    font-size: 14px;
    margin-top: 54px;
    .user-wrapper {
      background-color: @fff;
      padding-left: 10px;
      .user-content {
        display: flex;
        align-items: center;
        padding-right: 10px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid @f1;
        &:last-child {
          border-bottom: none;
        }
        .avatar-content {
          flex: 1;
          .avatar-images {
            float: right;
            margin: 5px 5px 0 0;
            -webkit-border-radius: 30px;
            -moz-border-radius: 30px;
            border-radius: 30px;
          }
        }
        .user-name-title {
          flex: 1;
        }
        .user-name {
          flex: 1;
          text-align: right;
          color: @bc;
        }
      }
    }
    .account-wrapper {
      .account-bind {
        padding-left: 10px;
        height: 30px;
        line-height: 30px;
        color: @bc;
      }
      .account {
        padding-left: 10px;
        background-color: @fff;
        .container {
          display: flex;
          align-items: center;
          padding-right: 10px;
          border-bottom: 1px solid @f1;
          &:last-child {
            border-bottom: none;
          }
          .icon-home:before {
            color: @blue;
          }
          .content {
            flex: 1;
            height: 40px;
            line-height: 40px;
            padding-left: 10px;
            .fr {
              padding-right: 10px;
              float: right;
              color: @bc;
            }
          }
        }
      }
    }
    .safe-wrapper {
      .safe-set {
        padding-left: 10px;
        height: 30px;
        line-height: 30px;
        color: @bc;
      }
      .safe {
        padding-left: 10px;
        background-color: @fff;
        .container {
          display: flex;
          align-items: center;
          padding-right: 10px;
          border-bottom: 1px solid @f1;
          &:last-child {
            border-bottom: none;
          }
          .content {
            flex: 1;
            height: 40px;
            line-height: 40px;
            padding-left: 10px;
            .fr {
              padding-right: 10px;
              float: right;
              color: @bc;
            }
          }
        }
      }
    }
  }
</style>
