<template>
  <div class="profile-editReceive">
    <CommonHeader :isGoBack="isGoBack" :title="headerTitle"></CommonHeader>
    <div class="address-wrapper">
      <div class="linkman">
        <div class="title-content">联系人</div>
        <div class="container">
          <input class="user-name" type="text" value="朱雷" placeholder="姓名">
          <div class="user-sex"><span class="sex-options sex-selected">先生</span><span class="sex-options">女士</span>
          </div>
        </div>
      </div>
      <div class="mobile">
        <div class="title-content">电话</div>
        <div class="container">
          <input type="text" class="user-mobile" placeholder="手机号码">
        </div>
      </div>
      <div class="address">
        <div class="title-content">地址</div>
        <div class="container">
          <div class="address-selected">陆家嘴软件园</div>
          <div class="address-detailed">8号楼三层上海华瑞银行</div>
        </div>
        <span class="icon icon-keyboard_arrow_right"></span>
      </div>
      <div class="address-flag">
        <div class="title-content">标签</div>
        <div class="container">
          <span class="flag flag-selected">家</span><span class="flag">公司</span><span class="flag">学校</span>
        </div>
      </div>
    </div>

    <div class="btn-submit">确定</div>
    {{params.type}}
  </div>
</template>

<script>
  import CommonHeader from "../../../components/header/CommonHeader.vue"

  export default {
    name: 'ProfileEditReceive',
    data() {
      return {
        isGoBack: true,
        headerTitle: "",
        params: ""
      }
    },
    mounted() {
      this.$store.dispatch('FOOTER_HIDE');
      console.log(this.$route.params);
      if (this.$route.params.type === "edit") {
        this.headerTitle = "修改地址";
      } else {
        this.headerTitle = "新增地址";
      }

    },
    components: {
      CommonHeader
    }
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../../styles/_mixins";

  .profile-editReceive {
    margin-top: 54px;
    width: 100%;
    font-size: 14px;
    .address-wrapper {
      width: 100%;
      background-color: @fff;
      .linkman {
        display: flex;
        margin-left: 16px;
        border-bottom: 1px solid @bc;
        .title-content {
          margin-top: 13px;
          text-align: center;
          margin-right: 10px;
          width: 60px;
          font-weight: bold;
        }
        .container {
          flex: 1;
          .user-name {
            width: 100%;
            height: 40px;
            outline: none;
            color: @bc;
            border-bottom: 1px solid @bc;
          }
          .user-sex {
            width: 100%;
            height: 40px;
            line-height: 40px;
            .sex-options {
              display: inline-block;
              text-align: center;
              margin-right: 16px;
              width: 50px;
              height: 20px;
              line-height: 20px;
              border: 1px solid @bc;
              -webkit-border-radius: 5px;
              -moz-border-radius: 5px;
              border-radius: 5px;
              &:last-child {
                margin-right: 0;
              }
              &.sex-selected {
                border: 1px solid @blue;
              }
            }
          }

        }
      }
      .mobile {
        display: flex;
        margin-left: 16px;
        border-bottom: 1px solid @bc;
        .title-content {
          margin-top: 13px;
          text-align: center;
          margin-right: 10px;
          width: 60px;
          font-weight: bold;
        }
        .container {
          flex: 1;
          .user-mobile {
            width: 100%;
            height: 40px;
            outline: none;
            color: @bc;
          }
        }
      }
      .address {
        display: flex;
        align-items: center;
        margin-left: 16px;
        border-bottom: 1px solid @bc;
        .title-content {
          text-align: center;
          margin-right: 10px;
          width: 60px;
          font-weight: bold;
        }
        .container {
          flex: 1;
          padding: 10px 0;
          color: @bc;
          .address-selected {
            width: 100%;
            margin-bottom: 4px;
          }
          .address-detailed {
            font-size: 12px;
          }
        }
        .icon-keyboard_arrow_right {
          font-size: 20px;
          color: @bc;
        }
      }
      .address-flag {
        display: flex;
        align-items: center;
        margin-left: 16px;
        .title-content {
          text-align: center;
          margin-right: 10px;
          width: 60px;
          font-weight: bold;
        }
        .container {
          flex: 1;
          width: 100%;
          height: 40px;
          line-height: 40px;
          .flag {
            display: inline-block;
            text-align: center;
            margin-right: 16px;
            width: 50px;
            height: 20px;
            line-height: 20px;
            border: 1px solid @bc;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            &.flag-selected {
              border: 1px solid @blue;
            }
          }
        }
      }
    }
    .btn-submit {
      margin: 10px 5% 0 5%;
      width: 90%;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border-radius: 4px;
      color: @fff;
      background-color: #00d762;
      &:active {
        color: @fff;
        background-color: rgba(0, 215, 98, .7);
      }
    }
  }
</style>
