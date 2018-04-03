import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index.vue'
import allProduct from '../page/allProduct.vue'
import cart from '../page/cart.vue'
import userCenter from '../page/userCenter/userCenter.vue'
import searchMain from '../page/searchMain.vue'
import searchInfo from '../page/searchInfo.vue'
import myMessageInfo from '../page/myMessageInfo.vue'
import proInformation from '../page/proInformation.vue'
import myOrder from '../page/userCenter/myOrder.vue'
import myOrderAll from '../page/userCenter/children/myOrderAll.vue'
import myOrderNotPay from '../page/userCenter/children/myOrderNotPay.vue'
Vue.use(Router);

Router.prototype.goBack = function () { //为router 新增一个返回前一页的方法
  this.isBack = true
  window.history.go(-1)
}
export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/allProduct',
      component: allProduct
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/userCenter',
      component: userCenter,
    },
    {
      path:'/myOrder',
      component: myOrder,
      children:[
        {
          path:'',
          component: myOrderAll
        },
        {
          path:'myOrderAll',
          component:myOrderAll
        },
        {
          path: 'myOrderNotPay',
          component:myOrderNotPay
        }
      ]
    },
    {
      path: '/searchMain',
      component: searchMain
    },
    {
      path: '/searchInfo',
      component: searchInfo,
      props: (route) => ({ query: route.query.info })
    },
    {
      path: '/myMessageInfo',
      component: myMessageInfo,
    },
    {
      path: '/proInformation',
      component: proInformation,
      props: (route) => ({ query: route.query.pid })
    },
    {
      path: '*',
      component: index
    }
  ]
})
