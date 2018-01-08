<template>
    <div class="headerBox">
      <div class="back">
        <i class="icon iconfont icon-back"></i>
      </div>
      <div class="title">
        {{title}}
      </div>
      <div class="domain" v-show="showDomain">
        <i class="icon iconfont icon-xiaoxizhongxin"></i>
        <i class="icon iconfont icon-sousuo"></i>
        <i class="icon iconfont icon-lajixiang"></i>
        <span>编辑/完成</span>
      </div>
    </div>
</template>

<script>
    export default {
      name:'headerBox',
      data(){
        return{
          rightButtons:this.rightButton,
          showDomain:true,
        }
      },
      props:['title','rightButton'],
      beforeMount:function(){
          console.log(this.rightButtons)
        if(this.rightButtons.length == 0){
            this.showDomain = false;
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
