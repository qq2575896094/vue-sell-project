// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axiosHttp from './config/http'

import Loading from './components/loading'
import store from './store/index'

//引入全局css文件
// require('../static/css/animate.css');

import './styles/index.less';

import './assets/fonts/font.css';

Vue.config.productionTip = false;
Vue.use(Loading);

//将axios挂载到Vue实例上,方便后边的页面使用,this.$http
Vue.prototype.$http = axiosHttp;

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App}
});
