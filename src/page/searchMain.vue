<template>
  <!--<transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">-->
    <div class="searchMain">
      <searchBox isBackBtn="true"></searchBox>
      <div class="hotSearch">
        <p>热门搜索</p>
        <ul>
          <li>搜索1</li>
          <li>搜索记录2</li>
          <li>搜索记录3</li>
          <li>搜索记录记录4</li>
          <li>搜索记录5</li>
        </ul>
      </div>
      <div class="historySearch">
        <p>历史搜索 <i class="icon iconfont icon-lajixiang"></i></p>
        <ul>
          <li>搜索1</li>
          <li>搜索记录2</li>
          <li>搜索记录3</li>
          <li>搜索记录记录4</li>
          <li>搜索记录5</li>
        </ul>
      </div>
    </div>
  <!--</transition>-->
</template>

<script>
  import searchBox from  '../components/searchBox/searchBox.vue'
    export default {
      name:'searchMain',
      data(){
          return{

          }
      },
      components:{searchBox}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .searchMain{
    height:100vh;
  }
  .hotSearch{
    padding:10px;
    p{
      font-size:14px;
      height:4vh;
      line-height: 4vh;
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
        color:#999;
      }
    }
  }
  .historySearch{
    padding:10px;
    p{
      font-size:14px;
      height:5vh;
      line-height: 5vh;
      border-bottom: 1px solid #ddd;
      i.iconfont{
        float:right;
        font-size: 20px;
      }
    }
    ul{
      padding:5px 0px;
      overflow: hidden;
      li{
        height:6vh;
        line-height:6vh;
        font-size:13px;
        border-bottom:1px solid  #eee;
      }
    }
  }
</style>
