<template>
  <div class="profile-indexHome">
    <ProfileHeader></ProfileHeader>
    <div class="user-wrapper" @click="changeAddress(userInfo&&userInfo.personId?'/profile/account':'/profile/mobileSign')">
      <div class="avatar" v-if="userInfo&&userInfo.personId">
        <img :src="avatar" alt="" width="64" height="64">
      </div>
      <div class="avatar" v-else>
        <img src="../../assets/images/usr-name.jpeg" alt="" width="64" height="64">
      </div>
      <div class="usr-info">
        <div class="usr-name">{{username}}</div>
        <div class="usr-mobile">{{mobile}}</div>
      </div>
      <span class="icon icon-keyboard_arrow_right"></span>
    </div>
    <div class="wallet-wrapper">
      <div class="wallet-container">
        <div class="wallet-content"><span class="wallet-money">0.00</span><span class="wallet-unit">元</span></div>
        <div class="wallet-title">钱包</div>
      </div>
      <div class="benefit-container">
        <div class="benefit-content"><span class="benefit-num">1</span><span class="benefit-unit">个</span></div>
        <div class="benefit-title">优惠</div>
      </div>
      <div class="points-container">
        <div class="points-content"><span class="points-num">0</span><span class="points-unit">个</span></div>
        <div class="points-title">积分</div>
      </div>
    </div>
    <img class="advert" src="">

    <div class="address-wrapper">
      <div class="receive-addr" @click="changeAddress('/profile/receive')">
        <div class="receive-avatar">
          <img src="/static/images/usr-name.jpeg" alt="" width="24" height="24">
        </div>
        <div class="receive-title">收货地址</div>
        <span class="icon icon-keyboard_arrow_right"></span>
      </div>
      <div class="my-collection" @click="changeAddress('/profile/collection')">
        <div class="collection-avatar">
          <img src="/static/images/usr-name.jpeg" alt="" width="24" height="24">
        </div>
        <div class="collection-title">我的收藏</div>
        <span class="icon icon-keyboard_arrow_right"></span>
      </div>
    </div>

    <div class="activity-wrapper">
      <div class="recommend-activity" v-if="userInfo&&userInfo.personId">
        <div class="recommend-avatar">
          <img src="/static/images/usr-name.jpeg" alt="" width="24" height="24">
        </div>
        <div class="recommend-content">
          <span class="title">推荐有奖</span><span class="content">5元现金</span>
        </div>
        <span class="icon icon-keyboard_arrow_right"></span>
      </div>
      <div class="points-shopping">
        <div class="shopping-avatar">
          <img src="/static/images/usr-name.jpeg" alt="" width="24" height="24">
        </div>
        <div class="shopping-content">
          <span class="title">积分商城</span><span class="content" v-if="userInfo&&userInfo.personId">0元好物在这里</span>
        </div>
        <span class="icon icon-keyboard_arrow_right"></span>
      </div>
      <div class="every-choice" v-if="userInfo&&userInfo.personId">
        <div class="choice-avatar">
          <img src="/static/images/usr-name.jpeg" alt="" width="24" height="24">
        </div>
        <div class="choice-content">
          <span class="title">每日精选</span><span class="content">全场包邮一元起</span>
        </div>
        <span class="icon icon-keyboard_arrow_right"></span>
      </div>
      <div class="free-flow" v-if="userInfo&&userInfo.personId">
        <div class="flow-avatar">
          <img src="./images/usr-name.jpeg" alt="" width="24" height="24">
        </div>
        <div class="flow-content">
          <span class="title">免费流量</span><span class="content">每月最高500M</span>
        </div>
        <span class="icon icon-keyboard_arrow_right"></span>
      </div>
    </div>

    <div class="other-wrapper">
      <div class=" serve-center">
        <div class="serve-avatar">
          <img src="/static/images/usr-name.jpeg" alt="" width="24" height="24">
        </div>
        <div class="serve-title">服务中心</div>
        <span class="icon icon-keyboard_arrow_right"></span>
      </div>
      <div class="score-center">
        <div class="score-avatar">
          <img src="/static/images/usr-name.jpeg" alt="" width="24" height="24">
        </div>
        <div class="score-title">欢迎评分</div>
        <span class="icon icon-keyboard_arrow_right"></span>
      </div>
      <div class="cooperation-center" @click="changeAddress('/profile/cooperation')">
        <div class="receive-avatar">
          <img src="/static/images/usr-name.jpeg" alt="" width="24" height="24">
        </div>
        <div class="cooperation-title">加盟合作</div>
        <span class="icon icon-keyboard_arrow_right"></span>
      </div>
    </div>
  </div>
</template>

<script>
  import ProfileHeader from './header/ProfileHeader.vue'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'ProfileIndexHome',
    data() {
      return {
        username: '立即登录',           //用户名
        resetname: '',
        mobile: '登陆后可享受更多特权',             //电话号码
        balance: 0,            //我的余额
        count: 0,             //优惠券个数
        pointNumber: 0,       //积分数
        avatar: '',             //头像地址
//        imgBaseUrl,
      }
    },
    computed: {
      ...mapGetters(['userInfo'])
    },
    mounted() {
      this.$store.dispatch('FOOTER_SHOW');
      this.initData();
      console.log(this.userInfo);
    },
    methods: {
      //跳转页面
      changeAddress(path) {
        this.$router.push(path);
      },
      //初始化数据
      initData() {
        if (this.userInfo && this.userInfo.personId) {
          this.avatar = this.userInfo.avatar;
          this.username = this.userInfo.username;
          this.mobile = this.userInfo.mobile || '暂无绑定手机号';
          this.balance = this.userInfo.balance;
          this.count = this.userInfo.gift_amount;
          this.pointNumber = this.userInfo.point;
        } else {
          this.username = '登录/注册';
          this.mobile = '暂无绑定手机号';
        }
      },
    },
    components: {
      ProfileHeader
    }
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../styles/_mixins";

  .profile-indexHome {
    padding-top: 40px;
    padding-bottom: 50px;
    width: 100%;
    background-color: @f5;
    .user-wrapper {
      display: flex;
      align-items: center;
      padding-top: 10px;
      background-color: @blue;
      color: @fff;
      .avatar {
        margin: 4px 10px 4px 20px;
        width: 64px;
        height: 64px;
        img {
          -webkit-border-radius: 32px;
          -moz-border-radius: 32px;
          border-radius: 32px;
        }
      }
      .usr-info {
        flex: 1;
        padding: 10px;
        .usr-name {
          margin-bottom: 8px;
        }
        .usr-mobile {
          font-size: 14px;
        }
      }
      .icon-keyboard_arrow_right {
        margin-right: 10px;
        font-size: 20px;
      }

    }
    .wallet-wrapper {
      display: flex;
      align-items: center;
      text-align: center;
      background-color: @fff;
      .wallet-container {
        flex: 1;
        padding-top: 16px;
        padding-bottom: 10px;
        .wallet-content {
          color: #f90;
          .wallet-money {
            font-size: 18px;
            font-weight: bolder;
          }
          .wallet-unit {
            font-size: 12px;
          }
        }
        .wallet-title {
          padding-top: 4px;
          font-size: 14px;
        }
      }
      .benefit-container {
        flex: 1;
        .border-left-1px(@f1);
        .border-right-1px(@f1);
        box-sizing: border-box;
        padding-top: 16px;
        padding-bottom: 10px;
        .benefit-content {
          color: #ff5f3e;
          .benefit-num {
            font-size: 18px;
            font-weight: bolder;
          }
          .benefit-unit {
            font-size: 12px;
          }
        }
        .benefit-title {
          padding-top: 4px;
          font-size: 14px;
        }
      }
      .points-container {
        flex: 1;
        padding-top: 16px;
        padding-bottom: 10px;
        .points-content {
          color: #60c20b;
          .points-num {
            font-size: 18px;
            font-weight: bolder;
          }
          .points-unit {
            font-size: 12px;
          }
        }

        .points-title {
          padding-top: 4px;
          font-size: 14px;
        }
      }
    }
    .advert {

    }
    .address-wrapper {
      margin-bottom: 10px;
      background-color: @fff;
      color: #333;
      .receive-addr {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        border-bottom: 1px solid @f1;
        .receive-title {
          flex: 1;
          margin-left: 10px;
        }
      }
      .my-collection {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        .collection-title {
          flex: 1;
          margin-left: 10px;
        }
      }

    }
    .activity-wrapper {
      margin-bottom: 10px;
      background-color: #fff;
      color: #333;
      .recommend-activity {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        border-bottom: 1px solid #f1f1f1;
        .recommend-content {
          flex: 1;
          margin-left: 10px;
          .content {
            float: right;
            line-height: 16px;
            font-size: 12px;
            color: rgba(51, 51, 51, .5);
          }
        }
      }
      .points-shopping {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        border-bottom: 1px solid #f1f1f1;
        .shopping-content {
          flex: 1;
          margin-left: 10px;
          .content {
            float: right;
            line-height: 16px;
            font-size: 12px;
            color: rgba(51, 51, 51, .5);
          }
        }
      }
      .every-choice {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        border-bottom: 1px solid #f1f1f1;
        .choice-content {
          flex: 1;
          margin-left: 10px;
          .content {
            float: right;
            line-height: 16px;
            font-size: 12px;
            color: rgba(51, 51, 51, .5);
          }
        }
      }
      .free-flow {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        border-bottom: 1px solid #f1f1f1;
        .flow-content {
          flex: 1;
          margin-left: 10px;
          .content {
            float: right;
            line-height: 16px;
            font-size: 12px;
            color: rgba(51, 51, 51, .5);
          }
        }
      }

    }
    .other-wrapper {
      margin-bottom: 10px;
      background-color: @fff;
      color: #333;
      .serve-center {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        border-bottom: 1px solid @f1;
        .serve-title {
          flex: 1;
          margin-left: 10px;
        }
      }
      .score-center {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        border-bottom: 1px solid @f1;
        .score-title {
          flex: 1;
          margin-left: 10px;
        }
      }
      .cooperation-center {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        border-bottom: 1px solid @f1;
        .cooperation-title {
          flex: 1;
          margin-left: 10px;
        }
      }
    }

  }
</style>
