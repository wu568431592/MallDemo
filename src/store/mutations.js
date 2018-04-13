/**
 * Created by sks on 2018/4/13.
 */
import {
  SET_UNLOGIN_PAGE,
  SET_IS_LOGIN,
  SET_USERINFO
} from './mutation-types'

export default {
  [SET_UNLOGIN_PAGE]:function(state,pageUrl){
    state.unLoginPage = pageUrl;
  },
  [SET_IS_LOGIN](state,is){
    state.isLogin = is;
  },
  [SET_USERINFO](state,info){
    if(state.userInfor && (state.userInfor.userId == info.userId)){
      return 
    }
    if(state.isLogin){
      state.userInfor = {...info}
    }
  }
}
