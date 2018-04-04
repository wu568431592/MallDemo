<template>
    <div id="myOrder">
      <headerBox isBackShow="true" title="我的订单" :rightButton="rightButtonList"></headerBox>
      <tab bar-active-color="#e4393c">
        <tab-item selected @on-item-click="onItemClick('myOrderAll')">全部订单</tab-item>
        <tab-item @on-item-click="onItemClick('myOrderNotPay')">待付款</tab-item>
        <tab-item @on-item-click="onItemClick('myOrderNotSend')">未发货</tab-item>
        <tab-item @on-item-click="onItemClick('myOrderSending')">已发货</tab-item>
      </tab>
      <transition enter-active-class="slideInRight" leave-acitve-class="slideOutRight" mode="in-out">
        <keep-alive>
          <router-view class="myOrderListView animated"></router-view>
        </keep-alive>
      </transition>
    </div>
</template>

<script>
    import { Tab, TabItem} from 'vux'
    import headerBox from '../../components/headerBox/headerBox.vue'
    export default {
      name:'myOrder',
      data(){
        return{
          rightButtonList:['searchBtn','messageBtn'],
        }
      },
      components:{Tab, TabItem,headerBox},
      methods:{
        onItemClick:function(url){
          this.$router.push({ path: '/myOrder/'+url })
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .vux-tab{
    height:6.5vh;
    position:absolute;
    top:7.5vh;
    width:100%;
    z-index: 1000;
    background-color: #fff;
  }
  .vux-tab .vux-tab-item.vux-tab-selected{
    color:#e4393c;
    border-bottom: 3px solid #e4393c !important;
  }
  .myOrderListView{
    width:100%;
    position:fixed;
    background-color: #eee;
    top:14vh;
    height:77vh;
  }
  .headerBox{
    top:0px;
    left:0px;
    z-index: 100000;
    width:100%;
    position:fixed;
  }
</style>
