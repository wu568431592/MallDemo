<template>
    <div class="searchMain">
      <searchBox isBackBtn="true" isSearchButtonShow="button" v-on:searchNow="searchNow"></searchBox>
      <div class="hotSearch">
        <p>热门搜索</p>
        <ul>
          <li v-for="v in list1" v-on:click="selectMe(v)">{{v}}</li>
        </ul>
      </div>
      <div class="historySearch" v-show="showHistory">
        <p>历史搜索
          <span class="complete" v-show="!deleteHistory" @click="comleteDelete">完成</span>
          <span class="deleteAll" v-show="!deleteHistory" @click="deleteAll">清除全部</span>
          <i @click="beginDelete" class="icon iconfont icon-lajixiang" v-show="deleteHistory"></i>
        </p>
        <ul>
          <li v-for="(v,i) in list">
            <slot v-if="i<=5">
              {{v}} <i @click="deleteMe(i)" v-show="!deleteHistory" class="icon iconfont icon-shanchutupian"></i>
            </slot>

          </li>
        </ul>
      </div>
      <confirmBox v-show="showConfirmBox" titleMessage="确定要清除历史记录吗？" v-on:cancleFun="cancleFun" v-on:confirmFun="confirmFun"></confirmBox>
    </div>
</template>

<script>
  import searchBox from  '../components/searchBox/searchBox.vue'
  import confirmBox from  '../components/confirmBox/confirmBox.vue'
  import axios from 'axios'
    export default {
      name:'searchMain',
      data(){
          return{
              list1:[],
              list:[],
              deleteHistory:true,
              showHistory:true,
              showConfirmBox:false,
              searchValue:'',
              quickSearch:''
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
            var history = JSON.parse(localStorage.getItem('historySearch'));
            history.splice(i,1);
            localStorage.setItem('historySearch',JSON.stringify(history))
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
          localStorage.removeItem('historySearch');
          this.showHistory = false;
          this.showConfirmBox = false;
        },
        searchNow:function(item){
          if(item != undefined){
            if(localStorage.getItem('historySearch')){
              var now = JSON.parse(localStorage.getItem('historySearch'));
            }else{
              var now = [];
            }
            now.unshift(item);
            localStorage.setItem('historySearch',JSON.stringify(now));
            this.showHistory = true;
            this.$router.push({path:'/searchInfo?info='+item})
          }
        },
        getHotSearch:function(){
          axios.get('http://localhost:8081/hotsearch')
            .then(res=>{
              this.list1 = res.data.search;
            })
            .catch(err=>{
                console.log(err);
            })
        },
        getHistorySearch:function(){
          if(localStorage.getItem('historySearch')){
            var now = JSON.parse(localStorage.getItem('historySearch'));
            this.list =now;
          }else{
            this.showHistory = false;
          }
        },
        selectMe:function(e){
          this.quickSearch = e;
          this.searchNow(this.quickSearch);
        }
      },
      beforeMount:function(){
        this.$emit('hideTabBar');
      },
      mounted(){
        this.getHotSearch();
        this.getHistorySearch();
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
    padding:0px 10px 0px 10px;
    p{
      font-size:14px;
      height:6vh;
      line-height: 6vh;
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
