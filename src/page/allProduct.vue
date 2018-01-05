<template>
  <!--<transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">-->
    <div class="allProduct">
        allProduct
      <!--<tabBar activeBar="1"></tabBar>-->
    </div>
  <!--</transition>-->
</template>

<script>
  import tabBar from  '../components/tabBar/tabBar.vue'
    export default {
      name:'allProduct',
      components:{tabBar},
      mounted:function(){

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
  .allProduct{
    height:100vh;
  }
</style>
