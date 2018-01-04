s<template>
    <div class="cart">
      cart
      <tabBar activeBar="2"></tabBar>
    </div>
</template>

<script>
  import tabBar from  '../components/tabBar/tabBar.vue'
    export default {
      name:'cart',
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
</style>
