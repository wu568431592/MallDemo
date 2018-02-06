<template>
    <div class="userCenter">
      <headerBox title="个人中心" :rightButton="rightButtons"></headerBox>
        <div class="userCenterMain">
          <div class="touxiang">
            <div class="img_box">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517915940692&di=8b602e43f6efcccb10a681e5868867df&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2015-01-15%2F152128372.jpg" alt="">
            </div>
            <div class="userInfo">
              <h5>15364650653</h5>
              <p>形影不离314</p>
            </div>
            <div class="VIPIcon">特权标记<span>&gt;</span></div>
          </div>
          <div class="myorder_title">
            <p>我的订单</p>
            <div>
              <span>查看更多订单</span>
              <i class="icon iconfont icon-more"></i>
            </div>
          </div>
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
      background-color: #eee;
      margin-top:7.5vh;
      height:83.5vh;
      margin-bottom: 9vh;
      position:relative;
      .touxiang{
        border-top:1px solid #fff;
        width:100%;
        background:#E4393C;
        overflow:hidden;
        div.img_box{
          float:left;
          width:20vw;
          height:20vw;
          margin:20px 10px;
          img{
            width:100%;
            border:1px solid #fff;
            -webkit-border-radius:50%;
            -moz-border-radius:50%;
            border-radius:50%;
          }
        }
        .userInfo{
          margin:20px 0px;
          float:left;
          color:#fff;
          width:50vw;
          h5{
            height:4vh;
            line-height: 4vh;
            font-size:14px;
            margin:5px 0px 10px 0px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .VIPIcon{
          position:absolute;
          right:0px;
          top:40px;
          background-color: #FEBB3B;
          padding:5px 10px;
          border-top-left-radius: 13px;
          border-bottom-left-radius:13px;
          color:#fff;
          span{
            font-family: '宋体';
            padding-left:10px;
          }
        }
      }
      .myorder_title{
        overflow: hidden;
        margin-top:5px;
        background:#fff;
        font-size:14px;
        >p{
          float:left;
          width:30vw;
          height:7vh;
          line-height: 7vh;
          padding:0px 10px;
        }
        >div{
           width:35vw;
           height:7vh;
           line-height: 7vh;
           float:right;
           padding:0px 10px;
           position:relative;
          i.iconfont{
            position:absolute;
            top:1px;
            right:0px;
          }
        }
      }
    }
  }
</style>
