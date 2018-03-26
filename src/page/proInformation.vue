<template>
    <div class="proInformation">
      <div class="cover" v-show="isCoverShow"></div>
      <proInforHeaderBox @hideDetails="detailsHide" @showDetails="detailsShow"></proInforHeaderBox>
      <div class="proInfor animated slideInRight" v-show="!isShopDetailsShow">
        <slot v-if="proInfor">
          <Swiper class="diy_swiper" loop  :list="proInfor.proImg" height="100vw"  dots-position="center" ></Swiper>
        </slot>
        <div class="proName">
          <span v-if="proInfor.proName"> {{proInfor.proName}}</span>
        </div>
        <div class="proPrice">
          &yen;<span>{{proInfor ? proInfor.proType[0].proPrice:'0'}}</span>元
        </div>
        <div class="chooseBox" @click="chooseOtherItem">
          <div class="chooseItem">已选：1件 {{proInfor ? proInfor.proType[0].proTypeName:''}}</div>
          <div class="kucun">库存：{{proInfor ? proInfor.proType[0].proTypeNum:''}}件</div>
          <div class="chooseBtn">
            <i class="icon iconfont icon-more"></i>
          </div>
        </div>
        <div class="address">
          <span>送至：北京市海淀区万寿路甲49号院</span>
        </div>
        <div class="proInfomain">
          <slot v-if="proInfor">
            <img :src="img" alt="" v-for="img in proInfor.proInforImg">
          </slot>
        </div>
      </div>
      <div class="tabBox" v-show="isShopDetailsShow">
        <span :class="{active:isPicBoxShow}" @click="activePicBox">商品介绍</span>
        <span :class="{active:isTableBoxShow}" @click="activeTableBox">规格参数</span>
      </div>
      <div class="proDetails animated slideInRight" v-show="isShopDetailsShow">
        <div class="tabMainBox">
          <div class="pictureBox" v-show="isPicBoxShow">
            <slot v-if="proInfor">
              <img :src="img" alt="" v-for="img in proInfor.proInforImg">
            </slot>
          </div>
          <slot v-if-="proInfor">
            <div class="tableBox" v-show="isTableBoxShow" v-for="n in proInfor.proTable">
                <slot v-for="(val , key) in n">
                  <div class="th">
                    {{key}}
                  </div>
                  <div class="tr" v-for="(val1 , key1) in val">
                    <div class="td key" v-for="(v ,k) in val1">
                      {{k}}
                    </div>
                    <div class="td val" v-for="(v ,k) in val1">
                      {{v}}
                    </div>
                  </div>
                </slot>
            </div>
          </slot>
        </div>
      </div>
      <div class="bottom_box">
        <ul>
          <li @click="showKefu">
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
      <chooseItemAlert v-show="isChooseAlertShow" @hideChooseAlert="hideChooseAlertFun" :proinformat="proinformat"></chooseItemAlert>
      <div class="kefuInfoAlert animated slideInUp" v-show="isKefuShow">
        <p>客服电话：13963633569</p>
        <p>通讯地址：北京市西城区</p>
        <p>QQ:5684315927</p>
        <i class="icon iconfont icon-ioscloseoutline" @click="hideKefu"></i>
      </div>
    </div>
</template>

<script>
    import proInforHeaderBox from '../components/proInforHeaderBox/proInforHeaderBox.vue'
    import { Swiper }  from 'vux'
    import chooseItemAlert from '../components/chooseItemAlert/chooseItemAlert.vue'
    import axios from 'axios'
    export default {
      name:'proInformation',
      data(){
          return{
            proPicList:[],
            isShoucang:false,
            isChooseAlertShow:false,
            isCoverShow:false,
            isKefuShow:false,
            isShopDetailsShow:false,
            isPicBoxShow:true,
            isTableBoxShow:false,
            proInfor:'',
            proinformat:''
          }
      },
      components:{proInforHeaderBox,Swiper,chooseItemAlert},
      beforeMount:function(){
        this.$emit('hideTabBar');
      },
      methods:{
        chooseOtherItem:function(){
            var me = document.getElementsByClassName('chooseItemAlert')[0]
            me.setAttribute('class','chooseItemAlert animated slideInUp')
            this.isChooseAlertShow = true;
            this.isCoverShow = true;
            this.proinformat =this.proInfor
        },
        shoucangFun:function(){
          this.isShoucang = !this.isShoucang;
        },
        hideChooseAlertFun:function(){
          var me = document.getElementsByClassName('chooseItemAlert')[0]
          me.setAttribute('class','chooseItemAlert animated slideOutDown')
          this.isCoverShow = false;
          setTimeout(function(){
            this.isChooseAlertShow = false;
          },2000)
        },
        showKefu:function(){
          var me = document.getElementsByClassName('kefuInfoAlert')[0];
          me.setAttribute('class','kefuInfoAlert animated slideInUp')
          this.isCoverShow = true;
          this.isKefuShow = true;
        },
        hideKefu:function(){
          var me = document.getElementsByClassName('kefuInfoAlert')[0];
          me.setAttribute('class','kefuInfoAlert animated slideOutDown')
          this.isCoverShow = false;
          setTimeout(function(){
            this.isKefuShow = false;
          },2000)
        },
        detailsShow:function(){
          var me = document.getElementsByClassName('proDetails')[0];
          me.setAttribute('class','proDetails animated slideInRight');
          this.isShopDetailsShow = true;
        },
        detailsHide:function(){
          var me = document.getElementsByClassName('proInfor')[0];
          me.setAttribute('class','proInfor animated slideInRight');
          this.isShopDetailsShow = false;
        },
        activePicBox:function(){
//          var me = document.getElementsByClassName('pictureBox')[0];
//          me.setAttribute('class','pictureBox animated slideInRight');
          this.isPicBoxShow = true;
          this.isTableBoxShow =false;
        },
        activeTableBox:function(){
          //var me = document.getElementsByClassName('tableBox')[0];
          //me.setAttribute('class','tableBox animated slideInRight');
          this.isPicBoxShow = false;
          this.isTableBoxShow = true;
        }
      },
      mounted:function(){
        axios.get('http://'+this.$store.state.serverIP+'/server/product'+this.$route.query.pid+'.json')
          .then(res=>{
            this.proInfor = res.data;
            this.proinformat = res.data;
          })
          .catch(err=>{
            //console.log(err)
          })
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
    background:#fff;
    .cover{
      position: fixed;
      background-color: rgba(0,0,0,0.5);
      z-index: 1000000;
      width:100vw;
      height:100vh;
      top:0px;
      left:0px;
    }
    div.proInfor{
      background:#eee;
      height:92vh;
      overflow-x: hidden;
      overflow-y: scroll;
      /*padding-bottom:55px;*/
      margin-bottom:8vh;
      margin-top:7.5vh;
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
        padding:10px 0px 0px 0px;
        img{
          width:100%;
        }
      }
    }
    .tabBox{
      position:fixed;
      top:7.5vh;
      left:0px;
      width:100%;
      background-color: #fff;
      z-index: 100000;
      height:7vh;
      line-height: 6.6vh;
      text-align: center;
      font-size:4.5vw;
      box-shadow:0px 1px 20px 0px #999;
      span{
        float:left;
        width:50%;
      }
      span.active{
        border-bottom: 2px solid #e4393c;
      }
      span:first-child{
        border-right:1px solid #eee;
      }
    }
    .proDetails{
      margin-top: 14.5vh;
      height: 85.5vh;
      overflow-y: scroll;
      position:static;
      background: #fff;
      /*padding-bottom:55px;*/
      margin-bottom:8vh;
      .tabMainBox{
        padding:10px 5px;
        background-color:#fff;
        .pictureBox{
          width:100%;
          overflow:hidden;
          img{
            width:100%;
            vertical-align: middle;
          }
        }
        .tableBox{
          color:#333;
          border-left:1px solid #999;
          border-top:1px solid #999;
          width:100%;
          overflow:hidden;
          .tr{
            width:100%;
            overflow:hidden;
            .td{
              border-right:1px solid #999;
              border-bottom:1px solid #999;
              float:left;
              height:5vh;
              line-height:5vh;
              padding-left:5px;
            }
            .td.key{
              width:30%;
            }
            .td.val{
              width:70%;
            }
          }
          .th{
            width:100%;
            border-right:1px solid #999;
            border-bottom:1px solid #999;
            height:5vh;
            line-height:5vh;
            padding-left:5px;
            text-align: center;
          }
        }
      }
    }
    .bottom_box{
      position: fixed;
      bottom:0px;
      left:0px;
      width:100%;
      background-color: #fff;
      height:8vh;
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
    .kefuInfoAlert{
      position: fixed;
      bottom:0px;
      left:0px;
      width:100%;
      background-color: #fff;
      z-index: 10000000;
      padding:2vw 4vw;
      i.iconfont{
        position: absolute;
        top:5px;
        right:10px;
      }
      p{
        line-height: 4vh;
        height: 4vh;
        font-size:4.5vw;
      }
    }
  }
</style>
<style  lang="less">
  .proInformation{
    .vux-slider{
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

