<template>
  <!--<transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">-->
    <div class="searchMain">
      <searchBox isBackBtn="true" isSearchButtonShow="button" v-on:searchNow="searchNow"></searchBox>
      <div class="hotSearch">
        <p>热门搜索</p>
        <ul>
          <li v-for="v in list1">{{v}}</li>
        </ul>
      </div>
      <div class="historySearch" v-show="showHistory">
        <p>历史搜索
          <span class="complete" v-show="!deleteHistory" @click="comleteDelete">完成</span>
          <span class="deleteAll" v-show="!deleteHistory" @click="deleteAll">清除全部</span>
          <i @click="beginDelete" class="icon iconfont icon-lajixiang" v-show="deleteHistory"></i>
        </p>
        <ul>
          <li v-for="(v,i) in list">{{v}} <i @click="deleteMe(i)" v-show="!deleteHistory" class="icon iconfont icon-shanchutupian"></i></li>
        </ul>
      </div>
      <confirmBox v-show="showConfirmBox" titleMessage="确定要清除历史记录吗？" v-on:cancleFun="cancleFun" v-on:confirmFun="confirmFun"></confirmBox>
    </div>
  <!--</transition>-->
</template>

<script>
  import searchBox from  '../components/searchBox/searchBox.vue'
  import confirmBox from  '../components/confirmBox/confirmBox.vue'
    export default {
      name:'searchMain',
      data(){
          return{
              list1:[
                '搜索1','搜索记录2','搜索记录3','搜索记录记录4','搜索记录5'
              ],
              list:[
                '搜索1','搜索记录2','搜索记录3','搜索记录记录4','搜索记录5'
              ],
              deleteHistory:true,
              showHistory:true,
              showConfirmBox:false,
              searchValue:''
          }
      },
      components:{searchBox,confirmBox},
      methods:{
        beginDelete:function(){
          this.deleteHistory = false;
        },
        deleteMe:function(i){
            if(this.list.length == 1){
              this.showHistory = false;
            }
            this.list.splice(i,1);
        },
        comleteDelete:function(){
          this.deleteHistory = true;
        },
        deleteAll:function(){
          this.showConfirmBox = true;
        },
        cancleFun:function(){
          this.showConfirmBox = false;
        },
        confirmFun:function(){
          this.list.splice(0);
          this.showHistory = false;
          this.showConfirmBox = false;
        },
        searchNow:function(item){
          this.$router.push({path:'/searchInfo?info='+item})
        },
      },
      beforeMount:function(){
        this.$emit('hideTabBar');
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .searchMain{
    height:100vh;
    background-color: #eee;
  }
  .hotSearch{
    background-color: #fff;
    padding:10px;
    border-bottom:1px solid #eee;
    p{
      font-size:14px;
      height:5vh;
      line-height: 5vh;
      border-bottom: 1px solid #ddd;
    }
    ul{
      margin-top:10px;
      overflow: hidden;
      li{
        float:left;
        padding:5px 10px;
        margin-right:10px;
        margin-bottom:10px;
        border:1px solid #e4393c;
        -webkit-border-radius:;
        -moz-border-radius:;
        border-radius:5px;
        color:#666;
      }
    }
  }
  .historySearch{
    background-color: #fff;
    margin-top:10px;
    padding:10px 10px 0px 10px;
    p{
      font-size:14px;
      height:5vh;
      line-height: 5vh;
      border-bottom: 1px solid #ddd;
      i.iconfont{
        float:right;
        font-size: 20px;
      }
      span.complete{
        float:right;
        padding:0px 10px;
        color:#EF8C24;
      }
      span.deleteAll{
        float:right;
        padding:0px 10px;
      }
    }
    ul{
      overflow: hidden;
      li{
        height:6vh;
        line-height:6vh;
        font-size:13px;
        border-bottom:1px solid  #eee;
        i.iconfont{
          font-size:20px;
          color:#e4393c;
          float:right;
        }
      }
      li:last-child{
        border:none;
      }
    }
  }
</style>
