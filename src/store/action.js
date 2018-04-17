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
      commit
    },userName) {
    let res = await getUserInfo(userName);
    commit(SET_USERINFO, res[0])
  },
}
