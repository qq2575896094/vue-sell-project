import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

console.log(routes);

Vue.use(Router);

export default new Router({
  routes,
  mode: 'history',//切换路径模式，变成history模式
  // scrollBehavior: () => ({//滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
  //   y: 0
  // })
})

