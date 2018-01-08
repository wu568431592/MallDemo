<template>
    <div class="myMessageInfo">
      <headerBox title="我的消息" isBackShow="true" :rightButton="rightButtonList"></headerBox>
      myMessageInfo
    </div>
</template>

<script>
  import headerBox from '../components/headerBox/headerBox.vue'
    export default {
      name:'myMessageInfo',
      data(){
        return{
          rightButtonList:[],
        }
      },
      beforeMount:function(){
        this.$emit('hideTabBar');
      },
      components:{headerBox,},
      methods:{
        get:function(){
            document.getElementsByClassName
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
