<template>
    <div class="headerBox">
      <div class="back">
        <i class="icon iconfont icon-back" v-show="isBackShow" @click="goback"></i>
      </div>
      <div class="title">
        {{title}}
      </div>
      <div class="domain" v-show="showDomain">
        <i class="icon iconfont icon-sousuo" v-if="rightSearch" @click="goSearch"></i>
        <i class="icon iconfont icon-xiaoxizhongxin" v-if="rightMessage" @click="goMyMessage"></i>
        <i class="icon iconfont icon-lajixiang" v-if="rightDelete" ></i>
        <i class="icon iconfont icon-set" v-if="rightSet" ></i>
        <span v-if="rightWord" @click="changeItem">{{rightWordstext}}</span>
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
          isBackShow:true,
          rightSet:false,
          rightMessage:false,
          rightSearch:false,
          rightDelete:false,
          rightWords:false,
          rightWordstext:'编辑'
        }
      },
      props:['title','rightButton','rightWord'],
      beforeMount:function(){
        var checkKey =function(array,key){
          for(var i = 0;i<array.length;i++){
            if(array[i] == key){
              return true
            }
          }
          return false
        }
        if(this.rightButtons.length == '0'){
          this.showDomain = false;
        }else{
          if(checkKey(this.rightButtons,'messageBtn')){
            this.rightMessage = true;
          }
          if(checkKey(this.rightButtons,'setBtn')){
            this.rightSet = true;
          }
          if(checkKey(this.rightButtons,'searchBtn')){
            this.rightSearch = true;
          }
          if(checkKey(this.rightButtons,'deleteBtn')){
            this.rightDelete = true;
          }
        }
        if(this.rightWord == 'false'){
          this.rightWords = false;
        }else{
          this.rightWords = true;
        }
      },
      methods:{
        goback:function(){
          this.$router.goBack();
        },
        changeItem:function(){
          if(this.rightWordstext == '完成'){
              this.rightWordstext = '编辑';
              this.$emit('edit');
          }else{
              this.rightWordstext = '完成';
              this.$emit('closeeidt');
          }
        },
        goMyMessage:function(){
          this.$router.push({path:'/myMessageInfo'})
        },
        goSearch:function(){
          this.$router.push({path:'/searchMain'})
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .headerBox{
    background-color: #e4393c;
    color:#fff;
    height:7.5vh;
    line-height:7.5vh;
    overflow: hidden;
    >div{
      float:left;
      height:7.5vh;
     }
    div.back{
      width:20%;
      padding:0px 10px;
      text-align: left;
      i.iconfont{
        color:#fff;
      }
    }
    div.title{
      width:60%;
      text-align: center;
      font-size: 15px;
    }
    div.domain{
      width:20%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      i.iconfont{
        color:#fff;
      }
      span{
        text-align: center;
        font-size: 15px;
        height:7.5vh;
        line-height:7.5vh;
        float:left;
        margin-right:5px;
      }
    }
  }
</style>
