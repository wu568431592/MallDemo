<template>
    <div class="proInforHeaderBox">
      <div class="back">
        <i class="icon iconfont icon-back" @click="goback"></i>
      </div>
      <div class="title">
        <p :class="{active:isProInfoActive}" @click="activeProInfo">商品</p>
        <p :class="{active:isProDetailsActive}" @click="activeProDetails">详情</p>
      </div>
      <div class="domain" >
        <i class="icon iconfont icon-breadmenu" @click="showDomain"></i>
        <ul v-show="doMainItemShow">
          <li>
            <router-link to="/myMessageInfo"><i class="icon iconfont icon-xiaoxizhongxin"></i><span>消息</span></router-link>
          </li>
          <li>
            <router-link to="/index"><i class="icon iconfont icon-shouye"></i><span>首页</span></router-link>
          </li>
          <li>
            <router-link to="/searchMain"><i class="icon iconfont icon-sousuo"></i><span>搜索</span></router-link>
          </li>
          <li>
            <router-link to="/index"><i class="icon iconfont icon-jushoucanggift"></i><span>我的收藏</span></router-link>
          </li>
          <li>
            <router-link to="/index"><i class="icon iconfont icon-browse"></i><span>浏览记录</span></router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      name:'proInforHeaderBox',
      data(){
        return{
          isProInfoActive:true,
          isProDetailsActive:false,
          doMainItemShow:false,
        }
      },
      methods:{
        goback:function(){
          this.$router.goBack();
        },
        activeProInfo:function(){
          this.isProInfoActive = true;
          this.isProDetailsActive = false;
          this.$emit('hideDetails');
        },
        activeProDetails:function(){
          this.isProInfoActive = false;
          this.isProDetailsActive = true;
          this.$emit('showDetails');
        },
        showDomain:function(){
            this.doMainItemShow = !this.doMainItemShow;
        }
      },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .proInforHeaderBox{
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100000;
    width: 100%;
    height:7.5vh;
    line-height:7.5vh;
    background-color: #e4393c;
    color:#fff;
    >div{
    float:left;
     }
    .back{
      width:20%;
      padding:0px 10px;
      text-align: left;
      height:7.5vh;
      line-height:7.5vh;
      i.iconfont{
        color:#fff;
      }
    }
    div.title{
      width:60%;
      text-align: center;
      overflow: hidden;
      font-size: 15px;
      height:7.5vh;
      line-height:7vh;
      padding:0px 40px;
      p{
        width:50%;
        float:left;
      }
      p.active{
        border-bottom:2px solid #fff;
      }
    }
    div.domain{
      text-align: center;
      width:20%;
      height:7.5vh;
      line-height:7.5vh;
      position:relative;
      >i.iconfont{
        color:#fff;
      }
      ul{
        position: absolute;
        top:7vh;
        right:5px;
        width:40vw;
        border:1px solid #eee;
        background-color: #fff;
        z-index: 10000000000;
        box-shadow: 0px 5px 10px 0px #aaa;
        border-radius:5px;
        li{
          color:#e4393c;
          padding:0px 5vw;
          height:5vh;
          line-height:5vh;
          text-align:left;
          border-bottom:1px solid #eee;
          i.iconfont{
            color:#e4393c;
            font-size: 20px;
            float:left;
            margin-right:2vw;
          }
        }
        li:last-child{
          border-bottom:none;
        }
      }
    }
  }
</style>
