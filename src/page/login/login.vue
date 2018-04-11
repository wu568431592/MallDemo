<template>
    <div class="login">
      <headerBox title="登录" :rightButton="[]"></headerBox>

    </div>
</template>

<script>
  import headerBox from '../../components/headerBox/headerBox.vue'
    export default {
      name:'login',
      data(){
        return{

        }
      },
      components:{ headerBox },
      beforeMount:function(){
        this.$emit('hideTabBar');
      },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .headerBox{
    position: absolute;
    top:0px;
    left:0px;
    width:100%;
  }
</style>
