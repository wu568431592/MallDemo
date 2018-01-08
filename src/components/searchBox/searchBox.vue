<template>
    <div class="searchBox">
      <div class="back" v-if="isBackBtn == 'true'">
        <i class="icon iconfont icon-back" @click="goBack"></i>
      </div>
      <div class="myGoods" v-else-if="isBackBtn == 'false'">我的商品</div>
      <div class="empty" v-else="isBackBtn == 'empty'"></div>
      <div v-else="isBackBtn == empty"></div>
      <div class="searchBox_item" v-bind:class="{long:isBackShow}">
        <i class="icon iconfont icon-sousuo"></i>
        <input v-model="parentSearchValue" type="text" placeholder="搜索您想要的商品" @click="goSearchMain">
      </div>
      <div class="button_box" v-if="isSearchButtonShow == 'button'" @click="seacrhNow">
        搜索
      </div>
      <div class="message_box" v-else-if="isSearchButtonShow == 'message'" @click="goMyMessage">
        <i class="icon iconfont icon-xiaoxizhongxin"></i>
      </div>
    </div>
</template>

<script>
    export default {
      name:'searchBox',
      data(){
        return{
          parentSearchValue:this.searchValue,
        }
      },
      props:['isBackBtn','isSearchButtonShow','searchValue'],
      computed:{
          isBackShow:function(){
              if(this.isBackBtn == 'false'){
                  return false
              }else{
                  return true
              }
          },
      },
      methods:{
        goSearchMain:function(){
          if(this.$router.history.current.path == '/index' || this.$router.history.current.path == '/'){
            this.$router.push({path:'/searchMain'})
          }else{
              return
          }
        },
        goBack:function(){
          this.$router.goBack();
        },
        seacrhNow:function(){
          var item = this.parentSearchValue;
          this.$emit('searchNow',item);
        },
        goMyMessage:function(){
          this.$router.push({path:'/myMessageInfo'})
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .searchBox{
    overflow: hidden;
    width:100%;
    height:45px;
    background:#e4393c;
    >div{
      float:left;
      height:45px;
    }
    div.back{
      width:15%;
      line-height:45px;
      text-align: center;
      i.iconfont{
        color:#fff;
        font-size: 25px;
      }
    }
    div.empty{
      width:20%;
      line-height:45px;
    }
    div.myGoods{
      width:20%;
      color:#fff;
      line-height:45px;
      padding:0px 5px;
      font-size:13px;
    }
    div.searchBox_item.long{
      width:70%;
    }
    div.searchBox_item{
      width:65%;
      position: relative;
      line-height: 45px;
      i.iconfont{
        position: absolute;
        top:0px;
        left:8px;
        color:#e4393c;
        font-size: 20px;
      }
      input{
        background-color: #fff;
        height:30px;
        line-height: 30px;
        width:100%;
        border:1px solid #fff;
        padding-left:30px;
        border-radius: 3px;
      }
    }
    div.message_box{
      width:15%;
      text-align: center;
      line-height: 45px;
      i.iconfont{
        color:#fff;
      }
    }
    div.button_box{
      width:15%;
      text-align: center;
      line-height: 45px;
      color:#fff;
    }
  }
</style>
