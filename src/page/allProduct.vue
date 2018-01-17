<template>
  <!--<transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">-->
    <div class="allProduct">
      <searchBox isBackBtn="empty" isSearchButtonShow='message'></searchBox>
      <div class="allProductMain">

      </div>
    </div>
</template>

<script>
  import searchBox from  '../components/searchBox/searchBox.vue'
     export default {
      name:'allProduct',
      components:{searchBox},

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
