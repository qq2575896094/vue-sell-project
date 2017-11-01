<template>
  <div class="profile-setting">
    <CommonHeader :isGoBack="isGoBack" :title="headerTitle"></CommonHeader>
    <div class="setting-wrapper">
      <CommonListArrow :title="'账户与安全'" :path="'/profile/indexHome'"></CommonListArrow>
      <CommonListArrow :title="'通用'" :path="'/profile/setCommon'"></CommonListArrow>
    </div>
    <div class="about-wrapper">
      <CommonListArrow :title="'关于饿了么'" :path="'/profile/about'"></CommonListArrow>
    </div>
    <div class="sign-out">退出登录</div>
  </div>
</template>

<script>
  import CommonHeader from "../../../components/header/CommonHeader.vue"
  import CommonListArrow from "../../../components/list/CommonListArrow.vue"

  export default {
    name: 'ProfileSetting',
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
      CommonListArrow
    }
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../../styles/_mixins";

  .profile-setting {
    margin-top: 54px;
    .setting-wrapper {
      padding-left: 10px;
      background-color: @fff;
    }
    .about-wrapper {
      margin-top: 15px;
      padding-left: 10px;
      background-color: @fff;
    }
    .sign-out {
      margin-top: 26px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: @b32;
      font-size: 18px;
      background-color: @fff;
    }

  }
</style>
