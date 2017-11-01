<template>
  <div class="profile-setting-common">
    <CommonHeader :isGoBack="isGoBack" :title="headerTitle"></CommonHeader>
    <div class="setting-wrapper">
      <CommonListTitle :title="'清除图片缓存'" :content="'2.93MB'" :path="'/profile/indexHome'"></CommonListTitle>
      <div class="no-wifi" @click="">
        <div class="title">非wiFI下图片质量</div>
        <div class="content">普通</div>
      </div>
    </div>
    <div class="problem-wrapper" @click="">
      <div class="title">摇一摇,截屏反馈问题</div>
      <div class="content">
        <div id="switch" class="switch">
          <input class="switch-checkbox" id="onoffswitch" type="checkbox" checked>
          <label class="switch-label" for="onoffswitch">
            <span class="switch-inner" data-on="" data-off=""></span>
            <span class="switch-switch"></span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from "../../../components/header/CommonHeader.vue"
  import CommonListTitle from "../../../components/list/CommonListTitle.vue"

  export default {
    name: 'ProfileSettingCommon',
    data() {
      return {
        isGoBack: true,
        headerTitle: "设置"
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
      CommonHeader,
      CommonListTitle
    }
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../../styles/_mixins";

  .profile-setting-common {
    margin-top: 54px;
    .setting-wrapper {
      padding-left: 10px;
      background-color: @fff;
      .no-wifi {
        display: flex;
        align-items: center;
        padding-right: 10px;
        height: 40px;
        .title {
          flex: 1;
        }
      }
    }
    .problem-wrapper {
      margin-top: 15px;
      padding-left: 10px;
      background-color: @fff;
      display: flex;
      align-items: center;
      padding-right: 10px;
      height: 40px;
      .title {
        flex: 1;
      }
      .switch {
        position: relative;
        float: left;
        width: 60px;
        margin: 0;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        .switch-checkbox {
          display: none;
        }
        .switch-label {
          display: block;
          overflow: hidden;
          cursor: pointer;
          /*border: 2px solid #999999;*/
          border-radius: 20px;
        }

        .switch-inner {
          display: block;
          width: 200%;
          margin-left: -100%;
          transition: margin 0.3s ease-in 0s;
        }

        .switch-inner::before, .switch-inner::after {
          display: block;
          float: right;
          width: 50%;
          height: 30px;
          padding: 0;
          line-height: 30px;
          font-size: 14px;
          color: white;
          font-family: Trebuchet, Arial, sans-serif;
          font-weight: bold;
          box-sizing: border-box;
        }
        .switch-inner::after {
          content: attr(data-on);
          padding-left: 10px;
          background-color: #00e500;
          color: #FFFFFF;
        }
        .switch-inner::before {
          content: attr(data-off);
          padding-right: 10px;
          background-color: #EEEEEE;
          color: #999999;
          text-align: right;
        }
        .switch-switch {
          position: absolute;
          display: block;
          width: 28px;
          height: 28px;
          margin: 1px;
          background: #FFFFFF;
          top: 0;
          bottom: 0;
          right: 30px;
          /*border: 2px solid #999999;*/
          box-sizing: border-box;
          border-radius: 20px;
          transition: all 0.3s ease-in 0s;
        }
        .switch-checkbox:checked + .switch-label .switch-inner {
          margin-left: 0;
        }
        .switch-checkbox:checked + .switch-label .switch-switch {
          right: 0;
        }
      }
    }
  }
</style>
