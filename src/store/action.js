/**
 * Created by sks on 2018/4/13.
 */
import {
  SET_USERINFO
} from './mutation-types.js'

import {
  getUserInfo
} from '../server/getData'

export default {
  async setUserInfo({
      commit,
      state
    }) {
    let res = await getUserInfo();
    commit(SET_USERINFO, res)
  },
}
