<template>
  <div class="receive">
    <CommonHeader :isGoBack="isGoBack" :title="headerTitle"></CommonHeader>
    <div class="addr-wrapper">
      <div class="addr-container" @click="changeAddress('ProfileEditReceive',{type:'edit'})">
        <div class="content">
          <div class="address">
            <img class="addr-avatar" src="../images/usr-name.jpeg" alt="" width="20" height="14">
            <span class="addr-title">陆家嘴软件园峨山路91弄20号 8号楼3层华瑞银行</span>
          </div>
          <div class="linkman">
            <span class="user-name">朱雷</span>(<span class="user-sex">先生</span>)&nbsp;&nbsp;<span class="user-mobile">18301651175</span>
          </div>
        </div>
        <span class="icon icon-keyboard_arrow_right"></span>
      </div>
      <div class="addr-container" @click="changeAddress('ProfileEditReceive',{type:'edit'})">
        <div class="content">
          <div class="address">
            <img class="addr-avatar" src="../images/usr-name.jpeg" alt="" width="20" height="14">
            <span class="addr-title">陆家嘴软件园峨山路91弄20号 8号楼3层华瑞银行</span>
          </div>
          <div class="linkman">
            <span class="user-name">朱雷</span>(<span class="user-sex">先生</span>)&nbsp;&nbsp;<span class="user-mobile">18301651175</span>
          </div>
        </div>
        <span class="icon icon-keyboard_arrow_right"></span>
      </div>
    </div>

    <div class="add-addr-wrapper" @click="changeAddress('ProfileEditReceive',{type:'add'})">
      <span class="add-icon">+</span><span class="add-title">新增地址</span>
    </div>
  </div>
</template>

<script>
  import CommonHeader from "../../../components/header/CommonHeader.vue"

  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'ProfileReceive',
    data() {
      return {
        isGoBack: true,
        headerTitle: "收货地址"
      }
    },
    mounted() {
      this.$store.dispatch('FOOTER_HIDE');
    },
    methods: {
      changeAddress(name, params) {
        this.$router.push({name: name, params: params});

      }
    },
    components: {
      CommonHeader
    }
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../../styles/_mixins";

  .receive {
    margin-top: 44px;
    margin-bottom: 60px;
    width: 100%;
    .addr-wrapper {
      width: 100%;
      .addr-container {
        padding: 10px;
        display: flex;
        align-items: center;
        background-color: @fff;
        border-bottom: 1px solid @f1;
        .content {
          flex: 1;
          .address {
            margin-bottom: 8px;
            .addr-avatar {
              vertical-align: middle;
            }
            .addr-title {
              vertical-align: middle;
              font-size: 14px;
              font-weight: bolder;

            }
          }
          .linkman {
            font-size: 12px;
            color: rgba(51, 51, 51, .6);

          }
        }
        .icon-keyboard_arrow_right {
          font-size: 20px;
        }

      }
    }
    .add-addr-wrapper {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 50px;
      text-align: center;
      line-height: 50px;
      background-color: @fff;
      color: @blue;
      .add-icon {
        display: inline-block;
        margin-right: 6px;
        width: 18px;
        height: 18px;
        line-height: 14px;
        box-sizing: border-box;
        border: 1px solid @blue;
        -webkit-border-radius: 9px;
        -moz-border-radius: 9px;
        border-radius: 9px;
      }
      .add-title {
        font-size: 14px;
      }
    }
  }
</style>
