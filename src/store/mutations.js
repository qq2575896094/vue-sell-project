/**
 * Created by qq2575896094 on 2017/6/29.
 */

import * as types from './types'
import state from './states'


const mutations = {
  /*header*/
  [types.HOME_HEAD_SHOW](state) {
    state.isHomeHeaderShow = true;
  },
  [types.HOME_HEAD_HIDE](state) {
    state.isHomeHeaderShow = false;
  },
  /*footer*/
  [types.FOOTER_HIDE](state) {
    state.isFooterShow = false;
  },
  [types.FOOTER_SHOW](state) {
    state.isFooterShow = true;
  },
  /*loading*/
  [types.LOADING_HIDE](state) {
    state.isLoadingShow = false;
  },
  [types.LOADING_SHOW](state) {
    state.isLoadingShow = true;
  },
  /*detailShow*/
  [types.DETAIL_SHOW](state) {
    state.isDetailShow = true;
  },
  [types.DETAIL_HIDE](state) {
    state.isDetailShow = false;
  },
  [types.USER_INFO](state, info) {
    state.userInfo = {...info};
  },
};

const getters = {
  homeHeaderShow(state) {
    return state.isHomeHeaderShow;
  },
  footerShow(state) {
    return state.isFooterShow;
  },
  loadingShow(state) {
    return state.isLoadingShow;
  },
  detailShow(state) {
    return state.isDetailShow;
  },
  userInfo(state) {
    return state.userInfo
  }
};

export default {
  state,
  mutations,
  getters
};
