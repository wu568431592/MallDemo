<template>
  <div id="app">
    <!--<transition :duration="1000" mode="out-in" enter-active-class="slideInRight" leave-active-class="slideOutLeft">-->
      <router-view class="animated" v-on:hideTabBar="hideTabBar" v-on:showTabBar="showTabBar"/>
    <!--</transition>-->
    <tabBar v-show="showBar"></tabBar>
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
      hideTabBar:function(){
        console.log('hideTabBar')
        this.showBar = false;
      },
      showTabBar:function(){
        this.showBar = true;
      }
    },
    data(){
        return{
          showBar:true,
        }
    },
  }
</script>

<style scoped lang="less">
  .tabbar{
    position:fixed;
    bottom:0px;
    left:0px;
  }
</style>
