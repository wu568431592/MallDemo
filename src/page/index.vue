<template>
  <!--<transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">-->
    <div class="index">
        <searchBox isBackBtn="false" isSearchButtonShow='message'></searchBox>
        <productListPage></productListPage>
        index
    </div>
  <!--</transition>-->
</template>

<script>
  import tabBar from  '../components/tabBar/tabBar.vue'
  import searchBox from  '../components/searchBox/searchBox.vue'
  import productListPage from  '../components/productListPage/productListPage.vue'
  export default {
    name:'index',
    components:{tabBar,searchBox,productListPage},
    mounted:function(){

    },
    beforeMount:function(){
      this.$emit('showTabBar');
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .tabbar{
    position:fixed;
    bottom:0px;
    left:0px;
  }
  .index{
    height:100vh;
  }
</style>
