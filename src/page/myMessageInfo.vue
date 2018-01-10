<template>
    <div class="myMessageInfo">
      <headerBox title="消息中心" isBackShow="true" :rightButton="rightButtonList"></headerBox>
      <!--<headerBox title="我的消息" isBackShow="true" :rightButton="rightButtonList" rightWord="编辑"></headerBox>-->
      <div class="mainBox">
        <ul class="changeBtn">
          <li :class="{active:activeWuliu}" @click="changeBtnWuliu">交易物流</li>
          <li :class="{active:activeFuwu}" @click="changeBtnFuwu">服务通知</li>
        </ul>
        <div class="msgListBox">
          <ul :class="['animated','fadeInRight','wuliuBox',{hide:isWuliuHide}]">
            <li v-for="v in wuliList">
              <h2 class="time">{{v.time}}</h2>
              <div class="wuliuMsgItem">
                <h4>运单号：{{v.wuliuId}}</h4>
                <div class="wuliuMsgItem_main">
                  <div class="img_box">
                    <img :src="v.proImgSrc" alt="">
                  </div>
                  <h5>{{v.wuliuInfo}}</h5>
                  <p>承运公司：{{v.wuliuCompany}}</p>
                </div>
              </div>
            </li>
          </ul>
          <ul :class="['animated','fadeInRight','fuwuBox',{hide:isFuwuHide}]">
            <li v-for="v in fuwuList">
              <h2 class="time">{{v.time}}</h2>
              <div class="fuwuMsgItem">
                <h4>{{v.title}}</h4>
                <div class="fuwuMsgItem_main">
                  <div class="img_box">
                    <img :src="v.proImgSrc" alt="">
                  </div>
                  <p>{{v.fuwuInfo}}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import headerBox from '../components/headerBox/headerBox.vue'
    export default {
      name:'myMessageInfo',
      data(){
        return{
          rightButtonList:[],
//          rightButtonList:['searchBtn','messageBtn'],
          changeBtnActive:0,
          isHide:0,
          activeWuliu:true,
          activeFuwu:false,
          isWuliuHide:false,
          isFuwuHide:true,
          wuliList:[
            {
              time:'2018年08月27日 06:17',
              wuliuId:'362323665978795',
              proImgSrc:'//img10.360buyimg.com/N2/jfs/t11089/67/2744083331/68075/b567bf6/5a1d025aNc42009ef.jpg',
              wuliuInfo:'您的订单234567已完成，感谢您对正康送药的支持，欢迎再次光临',
              wuliuCompany:'顺丰快递'
            },
            {
              time:'2016年08月27日 14:17',
              wuliuId:'3623236659784564',
              proImgSrc:'//img10.360buyimg.com/N2/jfs/t11089/67/2744083331/68075/b567bf6/5a1d025aNc42009ef.jpg',
              wuliuInfo:'您的订单234567已完成，感谢您对正康送药的支持，欢迎再次光临',
              wuliuCompany:'韵达快递'
            },
            {
              time:'2017年08月27日 22:17',
              wuliuId:'362323665978921',
              proImgSrc:'//img10.360buyimg.com/N2/jfs/t11089/67/2744083331/68075/b567bf6/5a1d025aNc42009ef.jpg',
              wuliuInfo:'您的订单234567已完成，感谢您对正康送药的支持，欢迎再次光临',
              wuliuCompany:'达达快递'
            },
            {
              time:'2017年08月27日 16:17',
              wuliuId:'36232366545646',
              proImgSrc:'//img10.360buyimg.com/N2/jfs/t11089/67/2744083331/68075/b567bf6/5a1d025aNc42009ef.jpg',
              wuliuInfo:'您的订单234567已完成，感谢您对正康送药的支持，欢迎再次光临',
              wuliuCompany:'中通快递'
            },
          ],
          fuwuList:[
            {
              time:'2017年08月27日 16:17',
              title:'优惠券到账提醒',
              proImgSrc:'//img10.360buyimg.com/N2/jfs/t11089/67/2744083331/68075/b567bf6/5a1d025aNc42009ef.jpg',
              fuwuInfo:'您的订单234567已完成，感谢您对正康送药的支持，欢迎再次光临',
            },
            {
              time:'2017年08月27日 16:17',
              title:'优惠券到账提醒',
              proImgSrc:'//img10.360buyimg.com/N2/jfs/t11089/67/2744083331/68075/b567bf6/5a1d025aNc42009ef.jpg',
              fuwuInfo:'您的订单234567已完成，感谢您对正康送药的支持，欢迎再次光临',
            },{
              time:'2017年08月27日 16:17',
              title:'优惠券到账提醒',
              proImgSrc:'//img10.360buyimg.com/N2/jfs/t11089/67/2744083331/68075/b567bf6/5a1d025aNc42009ef.jpg',
              fuwuInfo:'您的订单234567已完成，感谢您对正康送药的支持，欢迎再次光临',
            },{
              time:'2017年08月27日 16:17',
              title:'优惠券到账提醒',
              proImgSrc:'//img10.360buyimg.com/N2/jfs/t11089/67/2744083331/68075/b567bf6/5a1d025aNc42009ef.jpg',
              fuwuInfo:'您的订单234567已完成，感谢您对正康送药的支持，欢迎再次光临',
            },
          ]
        }
      },
      beforeMount:function(){
        this.$emit('hideTabBar');
      },
      components:{headerBox,},
      methods:{
        changeBtnWuliu:function(){
            this.activeWuliu = true;
            this.activeFuwu = false;
            this.isWuliuHide = false;
            this.isFuwuHide = true;
            document.getElementsByClassName('msgListBox')[0].scrollTop = 0;
        },
        changeBtnFuwu:function(){
          this.activeWuliu = false;
          this.activeFuwu = true;
          this.isWuliuHide = true;
          this.isFuwuHide = false;
          document.getElementsByClassName('msgListBox')[0].scrollTop = 0;
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .headerBox{
    position: fixed;
    top:0px;
    left:0px;
    width:100%;
  }
  .mainBox{
    .changeBtn{
      overflow: hidden;
      position: fixed;
      top:7.5vh;
      left:0px;
      background-color: #ffffff;
      z-index:100000;
      width:100%;
      li{
        float:left;
        width:50%;
        border-right:1px solid #eee;
        text-align: center;
        height:8vh;
        line-height: 8vh;
        font-size: 4vw;
        border-bottom:2px solid  #ddd;
      }
      li.active{
        border-bottom:2px solid  #e4393c;
        color:#e4393c;
      }
      li:nth-child(even){
        border-right:none;
      }
    }
    .msgListBox{
      margin-top:15.5vh;
      background-color: #eee;
      overflow-y: scroll;
      height:84.5vh;
      .wuliuBox{
        li{
          background-color: #fff;
          border-bottom:1px solid #eee;
          h2{
            background-color: #eee;
            height:6vh;
            line-height: 6vh;
            font-weight: normal;
            font-size:4vw;
            text-align: center;

          }
          .wuliuMsgItem{
            h4{
              height:6vh;
              line-height: 6vh;
              font-weight: normal;
              padding:0px 10px;
              margin-bottom:5px;
              border-bottom:1px solid #eee;
              padding:0px 5px;
            }
            .wuliuMsgItem_main{
              padding:5px 0px;
              overflow: hidden;
              .img_box{
                margin-right:10px;
                float:left;
                width:100px;
                heihgt:100px;
                img{
                  width:100%;
                }
              }
              h5{
                height:8vh;
                line-height: 4vh;
                overflow: hidden;
                font-weight: normal;
                font-size:4vw;
                margin:10px 0px;
              }
              p{
                color:#666;
              }
            }
          }
        }
      }
      .fuwuBox{
        li{
          background-color: #fff;
          border-bottom:1px solid #eee;
          h2{
            background-color: #eee;
            height:6vh;
            line-height: 6vh;
            font-weight: normal;
            font-size:4vw;
            text-align: center;
          }
          .fuwuMsgItem{
            h4{
              height:6vh;
              line-height: 6vh;
              font-weight: normal;
              padding:0px 10px;
              margin-bottom:5px;
              border-bottom:1px solid #eee;
            }
            .fuwuMsgItem_main{
              padding:5px 0px;
              overflow: hidden;
              .img_box{
                margin-right:10px;
                float:left;
                width:100px;
                heihgt:100px;
                img{
                  width:100%;
                }
              }
              p{
                height:8vh;
                line-height: 4vh;
                overflow: hidden;
                font-weight: normal;
                font-size:4vw;
                margin:10px 0px;
              }
            }
          }
        }
      }
    }
  }
</style>
