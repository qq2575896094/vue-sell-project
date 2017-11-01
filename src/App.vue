<template>
  <div id="app">
    <!--<transition name="" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">-->
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <!--</transition>-->


    <!--<transition name="" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">-->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!--</transition>-->
    <HomeFooter v-show="footerShow"></HomeFooter>
  </div>
</template>

<script>
  import HomeHeader from './pages/home/header/SellHeader'
  import HomeFooter from './components/footer/CommonFooter'
  import {mapGetters} from 'vuex'

  export default {
    name: 'app',
    data() {
      return {}
    },
    computed: mapGetters(['homeHeaderShow', 'footerShow', 'loadingShow']),
    watch: {
      $route(to, from) {
        let path = to.path.substring(1);
        this.headerChange(path);
        this.footerChange(path);
      }
    },
    mounted() {
      let path = this.$route.path.substring(1);
      this.headerChange(path);
      this.footerChange(path);
    },
    components: {
      HomeHeader,
      HomeFooter
    }
    ,
    methods: {
      footerChange(path) {
//        if (path == 'more')
//          this.$store.dispatch('FOOTER_HIDE');
//        else
//          this.$store.dispatch('FOOTER_SHOW');
      },
      headerChange(path) {
        if (path == 'home')
          this.$store.dispatch('HOME_HEAD_SHOW');
        else
          this.$store.dispatch('HOME_HEAD_HIDE');
      }

    }
  }
</script>

<style lang="less">
  html, body {
    width: 100%;
    height: 100%;

    #app {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      .flex-items {
        flex: 1;
        text-align: start;
      }
    }

  }
</style>
