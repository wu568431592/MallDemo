<template>
  <!--<transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">-->
    <div class="index">
        <searchBox isBackBtn="false"></searchBox>
        index
        <!--<tabBar activeBar="0"></tabBar>-->
    </div>
  <!--</transition>-->
</template>

<script>
  import tabBar from  '../components/tabBar/tabBar.vue'
  import searchBox from  '../components/searchBox/searchBox.vue'
  export default {
    name:'index',
    components:{tabBar,searchBox},
    mounted:function(){
      //document.getElementsByClassName('tabbar')[0].children[0].children[0].setAttribute("class","active")
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
