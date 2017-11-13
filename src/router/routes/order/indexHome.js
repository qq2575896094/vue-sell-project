/**
 * Created by qq2575896094 on 2017/9/18.
 */

import IndexHome from '../../../pages/order/IndexHome.vue'
import auth from '../../../services/auth/auth'

export default {
  path: '/order/indexHome',
  name: 'OrderIndexHome',
  component: IndexHome,
  beforeEnter(to, from, next) {
    next();
  }
}
