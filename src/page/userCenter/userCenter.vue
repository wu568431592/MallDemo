<template>
    <div class="userCenter">
      <headerBox title="个人中心" :rightButton="rightButtons"></headerBox>
        <div class="userCenterMain">
          <div class="touxiang">
            <div class="img_box">
              <img :src="getUserInfor? getUserInfor.headImgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517915940692&di=8b602e43f6efcccb10a681e5868867df&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2015-01-15%2F152128372.jpg'" alt="">
            </div>
            <div class="userInfo">
              <h5>{{getUserInfor? getUserInfor.userName:0}}</h5>
              <p>{{getUserInfor? getUserInfor.userNickName:0}}</p>
            </div>
            <div class="VIPIcon" v-show="getUserInfor? getUserInfor.isVip:false">特权标记<span></span></div>
          </div>
          <div class="myorder_title">
            <router-link to="myOrder">
              <p>我的订单</p>
              <div>
                <span>查看更多订单</span>
                <i class="icon iconfont icon-more"></i>
              </div>
            </router-link>
          </div>
          <div class="myorder_box">
            <ul>
              <li>
               <router-link to="myOrder/myOrderNotPay">
                 <i class="icon iconfont icon-daifukuan"></i>
                 <p>待付款</p>
               </router-link>
              </li>
              <li>
                <router-link to="myOrder/myOrderNotSend">
                  <i class="icon iconfont icon-daifahuo"></i>
                  <p>待发货</p>
                </router-link>
              </li>
              <li>
                <router-link to="myOrder/myOrderSending">
                  <i class="icon iconfont icon-daishouhuo"></i>
                  <p>待收货</p>
                </router-link>
              </li>
              <li>
                <router-link to="myOrder">
                  <i class="icon iconfont icon-201"></i>
                  <p>退换/售后</p>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="shoucang_box">
            <ul>
              <li>
                <router-link to="userCenter">
                  <i class="icon iconfont icon-favorites"></i>
                  <p>商品收藏(<span>{{getUserInfor? getUserInfor.collectionList.length:0}}</span>)</p>
                </router-link>
              </li>
              <li>
                <router-link to="userCenter">
                  <i class="icon iconfont icon-browse"></i>
                  <p>浏览记录(<span>{{getUserInfor? getUserInfor.browseList.length:0}}</span>)</p>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="address">
            <h3>收货地址</h3>
            <div class="address_main">
              <router-link to="userCenter">
                <p>{{getUserInfor? getUserInfor.deliveryAddress:0}}</p>
                <p>{{getUserInfor? getUserInfor.deliveryName:0}}</p>
                <p>{{getUserInfor? getUserInfor.deliveryPhone:0}}</p>
                <div class="right">
                  <i class="icon iconfont icon-more"></i>
                </div>
              </router-link>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    import tabBar from  '../../components/tabBar/tabBar.vue'
    import headerBox from  '../../components/headerBox/headerBox.vue'
    import { mapGetters } from 'vuex'
    export default {
      name:'userCenter',
      components:{ tabBar,headerBox },
      mounted:function(){

      },
      beforeMount:function(){
        this.$emit('showTabBar');
      },
      data(){
        return{
          rightButtons:[
            'messageBtn','setBtn'
          ],
        }
      },
      computed:{
        ...mapGetters([
          'getUserInfor'
        ])
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
            display:inline-block;
            border-top:1px solid #eee;
            border-right:1px solid #eee;
            transform: rotate(45deg);
            /*font-family: '宋体';*/
            height:10px;
            width:10px;
            padding-left:10px;
          }
        }
      }
      .myorder_title{
        overflow: hidden;
        margin-top:5px;
        background:#fff;
        font-size:14px;
        p{
          float:left;
          width:30vw;
          height:7vh;
          line-height: 7vh;
          padding:0px 10px;
        }
        div{
           width:35vw;
           height:7vh;
           line-height: 7vh;
           float:right;
           padding:0px 10px;
           position:relative;
          i.iconfont{
            position:absolute;
            top:1px;
            right:5px;
          }
        }
      }
      .myorder_box,.shoucang_box{
        ul{
          overflow: hidden;
          display: flex;
          justify-content: space-around;
          padding:2vh 0px;
          background:#fff;
          margin-top:5px;
          li{
            text-align: center;
            i.icon{
              color:#e4393c;
              font-size:8vw;
            }
            p{
              margin-top:0.5vh;
              font-size: 3.8vw;
            }
          }
        }
      }
      .address{
        margin-top:5px;
        background:#fff;
        h3{
          border-bottom:2px solid #eee;
          font-weight: normal;
          height:7vh;
          line-height: 7vh;
          padding:0px 10px;
          font-size:3.8vw;
        }
        .address_main{
          position:relative;
          p{
            height:4vh;
            line-height: 4.0vh;
            padding:0px 10px;
            font-size:3.8vw;
          }
          .right{
            position:absolute;
            right:10px;
            top:50%;
            margin-top:-15px;
            i.icon{
              font-size: 30px;
            }
          }
        }
      }
    }
  }
</style>
