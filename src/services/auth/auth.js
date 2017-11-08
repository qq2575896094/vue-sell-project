/**
 * Created by qq2575896094 on 2017/11/7.
 *
 * 用户是否登录,中间件 auth
 */

import locals from '../storage/localStorage'


export default {
  getToken() {
    //获取用户的token
    return locals.getItem('token');
  }
}
