<template>
    <div class="userCenter">
        userCenter
      <tabBar activeBar="3"></tabBar>
    </div>
</template>

<script>
  import tabBar from  '../components/tabBar/tabBar.vue'
    export default {
      name:'userCenter',
      components:{tabBar},
      mounted:function(){
        //document.getElementsByClassName('tabbar')[0].children[0].children[3].setAttribute("class","active")
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
