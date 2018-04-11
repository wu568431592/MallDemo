// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store1 from './store/index'
require('!style-loader!css-loader!less-loader!./assets/css/animate.css')
require('!style-loader!css-loader!less-loader!./assets/css/iconfont/iconfont.css')
require('!style-loader!css-loader!less-loader!./assets/css/index.css')


import  { ConfirmPlugin } from 'vux'
Vue.use(ConfirmPlugin)

Vue.config.productionTip = false
var store = store1.store;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
