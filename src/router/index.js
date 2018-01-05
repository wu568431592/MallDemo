import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index.vue'
import allProduct from '../page/allProduct.vue'
import cart from '../page/cart.vue'
import userCenter from '../page/userCenter.vue'
import searchMain from '../page/searchMain.vue'
Vue.use(Router);

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
      component: userCenter
    },
    {
      path: '/searchMain',
      component: searchMain
    },
    {
      path: '*',
      component: index
    }
  ]
})
