<template>
  <div class="home-indexHome flex-items">
    <SellHeader :seller="seller"></SellHeader>
    <nav class="nav">
      <router-link to="./home" class="nav-items" active-class="nav-active">商品</router-link>
      <router-link to="./house" class="nav-items" active-class="nav-active">评价</router-link>
      <router-link to="./house" class="nav-items" active-class="nav-active">商家</router-link>
    </nav>
  </div>
</template>

<script>
  import SellHeader from './header/SellHeader'
  import {sendSellerObj} from '../../config/variable'

  export default {
    name: 'HomeIndexHome',
    data() {
      return {
        seller: {}
      }
    },
    mounted() {
      //发起网络请求,查询页面信息
      this.queryMenu();
    },
    methods: {
      async queryMenu() {
        let _this = this;
        await this.$http.get(sendSellerObj.url).then((res) => {
          _this.seller = res.seller;
        }).catch((error) => {
          _this.$store.dispatch('LOADING_HIDE');
          console.log(error);
        })
      }
    },
    components: {
      SellHeader
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../styles/_mixins";

  .home-indexHome {
    flex: 1;
    .nav {
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      .border-top-1px(rgba(7, 17, 27, 0.1));
      .nav-items {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: rgb(77, 85, 93);
        &.nav-active {
          color: rgb(240, 20, 20);
        }
      }

    }
  }

</style>
