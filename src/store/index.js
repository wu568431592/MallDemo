/**
 * Created by sks on 2017/6/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
var state;
state ={
    serverIP : '172.17.161.180',
}

const mutations ={

}
const getters = {
  getServerIp:function(state){
    return state.serverIP;
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  getters
}) // 这里你可能已经有其他 module


export default {
  store
}


