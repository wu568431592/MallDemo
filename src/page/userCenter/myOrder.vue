<template>
    <div id="myOrder">
      <headerBox isBackShow="true" title="我的订单" :rightButton="rightButtonList"></headerBox>
      <tab bar-active-color="#e4393c">
        <tab-item selected @on-item-click="onItemClick">全部订单</tab-item>
        <tab-item @on-item-click="onItemClick">待付款</tab-item>
        <tab-item @on-item-click="onItemClick">已发货</tab-item>
        <tab-item @on-item-click="onItemClick">未发货</tab-item>
      </tab>
      <router-view class="myOrderListView">

      </router-view>
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
        onItemClick:function(){
          this.$router.push({ path: '/myOrder/myOrderNotPay' })
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .vux-tab{
    height:6.5vh;
  }
  .vux-tab .vux-tab-item.vux-tab-selected{
    color:#e4393c;
    border-bottom: 3px solid #e4393c !important;
  }
  .myOrderListView{
    width:100%;
    height:77vh;
  }
</style>
