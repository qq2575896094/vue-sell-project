/**
 * Created by qq2575896094 on 2017/6/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    mutations
  },
  actions
});
