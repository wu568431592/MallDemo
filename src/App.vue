<template>
  <div id="app">
    <transition :name="transitionName">
        <router-view class="child-view" v-on:hideTabBar="hideTabBar" v-on:showTabBar="showTabBar"/>
    </transition>
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
        this.showBar = false;
      },
      showTabBar:function(){
        this.showBar = true;
      }
    },
    data(){
        return{
          showBar:true,
          transitionName: 'slide-right'
        }
    },
    watch: {
      '$route' (to, from) {
        let isBack = this.$router.isBack // 监听路由变化时的状态为前进还是后退
        if(isBack) {
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = 'slide-left'
        }
        this.$router.isBack = false
      }
    }
  }

</script>

<style scoped lang="less">
  @import '~vux/src/styles/reset.less';
  .tabbar{
    position:fixed;
    bottom:0px;
    left:0px;
  }
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
  }
  .child-view {
    position: absolute;
    width:100%;
    transition: all .8s cubic-bezier(.55,0,.1,1);
  }
</style>
