<template>
  <div id="app">
    <!--<transition :duration="1000" mode="out-in" enter-active-class="slideInRight" leave-active-class="slideOutLeft">-->
      <router-view class="animated"/>
    <!--</transition>-->
    <tabBar @click="clickme"></tabBar>
  </div>
</template>

<script>
  import tabBar from  './components/tabBar/tabBar.vue'
  export default {
    name: 'app',
    components:{tabBar},
    computed:{

    },
    methods:{
      clickme:function(){
        console.log(e.target)
      }
    }
  }
</script>

<style scoped lang="less">
  .tabbar{
    position:fixed;
    bottom:0px;
    left:0px;
  }
</style>
