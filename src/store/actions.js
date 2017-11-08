/**
 * Created by qq2575896094 on 2017/6/29.
 */

import * as types from './types'

export default {
  LOADING_SHOW({commit}) {
    commit(types.LOADING_SHOW);
  },
  LOADING_HIDE({commit}) {
    commit(types.LOADING_HIDE);
  },
  HOME_HEAD_SHOW({commit}) {
    commit(types.HOME_HEAD_SHOW);
  },
  HOME_HEAD_HIDE({commit}) {
    commit(types.HOME_HEAD_HIDE);
  },
  FOOTER_SHOW({commit}) {
    commit(types.FOOTER_SHOW);
  },
  FOOTER_HIDE({commit}) {
    commit(types.FOOTER_HIDE);
  },
  DETAIL_SHOW({commit}) {
    commit(types.DETAIL_SHOW);
  },
  DETAIL_HIDE({commit}) {
    commit(types.DETAIL_HIDE);
  },
  USER_INFO({commit}, info) {
    commit(types.USER_INFO, info)
  }
}
