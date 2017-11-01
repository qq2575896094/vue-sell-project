<template>
  <div class="payPwd">
    <div class="payPwd-title">请输入原支付密码</div>
    <input ref="pwd" type="password" maxlength="6" v-model="msg"/>
    <ul class="pwd-wrap" @click="payPwdFocus">
      <li><i v-if="msgLength > 0"></i></li>
      <li><i v-if="msgLength > 1"></i></li>
      <li><i v-if="msgLength > 2"></i></li>
      <li><i v-if="msgLength > 3"></i></li>
      <li><i v-if="msgLength > 4"></i></li>
      <li><i v-if="msgLength > 5"></i></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'PayPwd',
    data() {
      return {
        msg: '',
        msgLength: 0
      }
    },
    watch: {
      msg(curVal) {
        if (/[^\d]/g.test(curVal)) {
          this.msg = this.msg.replace(/[^\d]/g, '');
        } else {
          this.msgLength = curVal.length;
          this.sendMsg();
        }
      }
    },
    methods: {
      payPwdFocus() {
        this.$refs.pwd.focus();
      },
      sendMsg() {
        if (this.msg.length === 6) {
          this.$emit('emitMsg', this.msg);
        }
      }
    },
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../styles/_mixins";

  .payPwd {
    margin: 0 10px;
    .payPwd-title {
      padding: 20px 0;
      color: @65;
      font-size: 18px;
    }
    input {
      position: absolute;
      z-index: -1;
      left: -100%;
      opacity: 0
    }
    .pwd-wrap {
      display: flex;
      margin: 0 auto;
      padding-bottom: 1px;
      width: 90%;
      height: 44px;
      background: #fff;
      border: 1px solid #ddd;
      cursor: pointer;
      li {
        flex: 1;
        text-align: center;
        line-height: 44px;
        border-right: 1px solid #ddd;
        &:last-child {
          border-right: 0;
        }
        i {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #000;

        }
      }
    }
  }
</style>
