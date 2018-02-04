<template>
    <div class="userCenter">
      <headerBox title="个人中心" :rightButton="rightButtons"></headerBox>
        <div class="userCenterMain">
          123
        </div>
    </div>
</template>

<script>
    import tabBar from  '../components/tabBar/tabBar.vue'
    import headerBox from  '../components/headerBox/headerBox.vue'
    export default {
      name:'userCenter',
      components:{tabBar,headerBox},
      mounted:function(){

      },
      beforeMount:function(){
        this.$emit('showTabBar');
      },
      data(){
        return{
          rightButtons:[
            'messageBtn','setBtn'
          ]
        }
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
  .headerBox{
    position:fixed;
    width:100%;
    top:0px;
    left:0px;
  }
  .userCenter{
    .userCenterMain{
      margin-top:7.5vh;
      height:83.5vh;
      margin-bottom: 9vh;
    }
  }
</style>
