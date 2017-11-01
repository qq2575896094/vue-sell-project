<template>
  <div class="profile-editPayPwd">
    <CommonHeader :isGoBack="isGoBack" :title="headerTitle"></CommonHeader>
    <PayPwd @emitMsg="receiveMsg"></PayPwd>
    <div class="btn-submit">确 认</div>
    <span class="forget-pwd">忘记支付密码</span>
  </div>
</template>

<script>
  import CommonHeader from "../../../components/header/CommonHeader.vue"
  import PayPwd from "../../../components/payPwd/PayPwd.vue"

  export default {
    name: 'ProfileEditPayPwd',
    data() {
      return {
        isGoBack: true,
        headerTitle: "修改支付密码",
        password: ''
      }
    },
    mounted() {
      this.$store.dispatch("FOOTER_HIDE");
    },
    watch: {
      msg(curVal) {
        if (/[^\d]/g.test(curVal)) {
          this.msg = this.msg.replace(/[^\d]/g, '');
        } else {
          this.msgLength = curVal.length;
        }
      }
    },
    methods: {
      payPwdFocus() {
        console.log(this.$refs);
        this.$refs.pwd.focus();
      },
      receiveMsg(data) {
        this.password = data;
        console.log(this.password);
      }
    },
    components: {
      CommonHeader,
      PayPwd
    }
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../../styles/_mixins";

  .profile-editPayPwd {
    margin-top: 54px;
    font-size: 14px;

    .btn-submit {
      margin: 20px 5% 20px 5%;
      width: 90%;
      height: 60px;
      text-align: center;
      line-height: 60px;
      color: @fff;
      background-color: #4cda64;
      border-radius: 5px;
      font-size: 18px;
    }
    .forget-pwd {
      display: inline-block;
      float: right;
      margin-right: 8%;
      text-align: right;
      color: @blue;
    }
  }
</style>
