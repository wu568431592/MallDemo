<template>
  <!--<transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">-->
    <div class="userCenter">
        userCenter
      <!--<tabBar activeBar="3"></tabBar>-->
    </div>
  <!--</transition>-->
</template>

<script>
  import tabBar from  '../components/tabBar/tabBar.vue'
    export default {
      name:'userCenter',
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
  .userCenter{
    height:100vh;
  }
</style>
