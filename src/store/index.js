/**
 * Created by sks on 2017/6/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
var state;
state ={
    serverIP : 'localhost:8081', // json:server 地址
    userInfor : null,            //用户信息
    isLogin:false,               //是否登录
    unLoginPage : ''             // 登录前准备要去的页面，用于登录后返回改页面
}

const mutations = {
  setUnLoginPage:function(state,pageUrl){
    state.unLoginPage = pageUrl;
  },
  setIsLogin(state,is){
    state.isLogin = is;
  }
}
const getters = {
  getServerIp:function(state){
    return state.serverIP;
  },
  getUserInfor:function(state){
    return state.userInfor
  },
  getUnLoginPage:function(state){
    return state.unLoginPage
  },
  isLogin:function(state){
    return state.isLogin
  },
}
const store = new Vuex.Store({
  state,
  mutations,
  getters
}) // 这里你可能已经有其他 module


export default {
  store
}


