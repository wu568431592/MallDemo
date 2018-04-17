/**
 * Created by sks on 2017/6/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
Vue.use(Vuex);

const state ={
    serverIP : 'localhost:8081', // json:server 地址
    userInfor : null,            //用户信息
    isLogin : false,               //是否登录
    unLoginPage : ''             // 登录前准备要去的页面，用于登录后返回改页面
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})


