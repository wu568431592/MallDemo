<template>
    <div class="proInformation">
      <proInforHeaderBox></proInforHeaderBox>
      <div class="proInfor">
        <Swiper class="diy_swiper" loop  :list="proPicList" height="100vw"  dots-position="center" ></Swiper>
        <div class="proName">
          360手机 N6 Pro 全网通 6GB+64GB 钛泽银色 移动联通电信4G手机 双卡双待 全面屏 游戏手机
        </div>
        <div class="proPrice">
          &yen;2000.00元
        </div>
        <div class="chooseBox">
          <div class="chooseItem">已选：1件 原装+套餐1</div>
          <div class="kucun">库存：1232123件</div>
          <div class="chooseBtn" @click="chooseOtherItem">
            <i class="icon iconfont icon-more"></i>
          </div>
        </div>
        <div class="address">
          <span>送至：北京市海淀区万寿路甲49号院</span>
        </div>
        <div class="proInfomain">
          <img src="//img13.360buyimg.com/N1/s450x450_jfs/t16159/202/1360563117/191137/451cc5dc/5a531749Nd8d592f8.jpg" alt="">
          <img src="//img13.360buyimg.com/N1/s450x450_jfs/t16159/202/1360563117/191137/451cc5dc/5a531749Nd8d592f8.jpg" alt="">
          <img src="//img13.360buyimg.com/N1/s450x450_jfs/t16159/202/1360563117/191137/451cc5dc/5a531749Nd8d592f8.jpg" alt="">
        </div>
      </div>
      <div class="bottom_box">
        <ul>
          <li>
            <i class="icon iconfont icon-service"></i>
            <p>客服</p>
          </li>
          <li @click="shoucangFun">
            <i class="icon iconfont icon-jushoucang" v-show="!isShoucang"></i>
            <i class="icon iconfont icon-jushoucanggift" v-show="isShoucang"></i>
            <p>收藏</p>
          </li>
          <li>
            <router-link to="/cart">
              <i class="icon iconfont icon-gouwuche" ></i>
              <p>购物车</p>
            </router-link>
          </li>
        </ul>
        <div>
          加入购物车
        </div>
      </div>
      <div class="chooseItemAlert">
        <div class="chooseItemAlertMain">

        </div>
      </div>
    </div>
</template>

<script>
    import proInforHeaderBox from '../components/proInforHeaderBox/proInforHeaderBox.vue'
    import { Swiper }  from 'vux'
    export default {
      name:'proInformation',
      data(){
          return{
            proPicList:[{
              url: 'javascript:',
              img: '//img13.360buyimg.com/N1/s450x450_jfs/t16159/202/1360563117/191137/451cc5dc/5a531749Nd8d592f8.jpg',
            }, {
              url: 'javascript:',
              img: '//img12.360buyimg.com/N1/s450x450_jfs/t16213/50/1477526973/71879/b04185c0/5a53174aN50a6e14c.jpg',
            }, {
              url: 'javascript:',
              img: '//img10.360buyimg.com/N1/s450x450_jfs/t15541/285/1450234949/32324/1f6336ab/5a53174aN70720ca3.jpg',
            },{
              url: 'javascript:',
              img: '//img14.360buyimg.com/N1/s450x450_jfs/t16189/116/1460008662/19113/8da609ca/5a53174bN19fbb5f2.jpg',
            }],
            isShoucang:false,
          }
      },
      components:{proInforHeaderBox,Swiper},
      beforeMount:function(){
        this.$emit('hideTabBar');
      },
      methods:{
        chooseOtherItem:function(){
            console.log('hahahh')
        },
        shoucangFun:function(){
          this.isShoucang = !this.isShoucang;
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .proInforHeaderBox{
    position:fixed;
    top:0px;
    left:0px;
    z-index: 100000;
    width:100%;
  }
  .proInformation{
    background:#eee;
    div.proInfor{
      height:100vh;
      overflow-x: hidden;
      overflow-y: scroll;
      padding-bottom:55px;
      div.proName{
        background:#fff;
        height:9vh;
        line-height: 4vh;
        overflow: hidden;
        font-size:4.5vw;
        padding:0.5vh 10px;
      }
      div.proPrice{
        background:#fff;
        padding:0px 10px;
        color:#e4393c;
        font-size: 4vw;
        margin-bottom:1vh;
        height:4vh;
        line-height: 4vh;
      }
      .chooseBox{
        background:#fff;
        position:relative;
        padding:5px 10px;
        margin-bottom:1vh;
        .chooseItem{
          height:4vh;
          line-height: 4vh;
        }
        .kucun{
          height:4vh;
          line-height: 4vh;
        }
        .chooseBtn{
          position:absolute;
          top:2.5vh;
          right:10px;
        }
      }
      .address{
        height:6vh;
        line-height: 6vh;
        background:#fff;
        padding:0px 10px;
        margin-bottom:1vh;
      }
      .proInfomain{
        background:#fff;
        width:100vw;
        padding:10px 0px;
        img{
          width:100%;
        }
      }
    }
    .bottom_box{
      position: fixed;
      bottom:0px;
      left:0px;
      width:100%;
      background-color: #fff;
      height:55px;
      box-shadow: 0px -1px 20px 0px #666;
      overflow: hidden;
      >ul{
         padding:5px 0px;
        float:left;
        width:50%;
        overflow: hidden;
        li{
          text-align: center;
          float:left;
          widtH:33.33333333%;
          i.iconfont{
            color:#e4393c;
          }
        }
       }
      >div{
         float:right;
         width:50%;
        text-align: center;
        line-height: 55px;
        color:#fff;
        background-color: #e4393c;
        font-size:4.5vw;
      }
    }
  }
</style>
<style  lang="less">
  .proInformation{
    .vux-slider{
      margin-top:7.5vh;
      background:#fff;
      .vux-swiper{
        border-bottom: 1px solid #999;
        .vux-swiper-item{
          padding:10px;
        }
      }
    }
  }
  .vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc{
    display: none;
  }
  .vux-slider > .vux-indicator > a > .vux-icon-dot.active, .vux-slider .vux-indicator-right > a > .vux-icon-dot.active{
    background-color: #e4393c !important;
  }
</style>

