<template>
    <div class="orderList">
      <pull-to :top-load-method="refresh" :bottom-load-method="geMore">
        <ul>
          <li class="order_list" v-for="i in 5">
            <div class="title">
              <p>订单编号：12321232123</p>
              <i class="icon iconfont icon-lajixiang"></i>
              <span>等待付款</span>
            </div>
            <div class="order_list_main">
              <ul>
                <li class="order_list_item" v-for="i in 2">
                  <div class="img_box">
                    <img src="https://m.360buyimg.com/n12/jfs/t8557/113/1923694712/235168/b384c6f8/59c1d7c6N91cfca84.jpg!q70.jpg" alt="">
                  </div>
                  <div class="right">
                    <p class="pname">小米Note3 美颜双摄拍照手机 6GB+64GB 蓝色 全网通4G手机 双卡双待</p>
                    <p class="ptype">规格：原装+套餐1 颜色：红色</p>
                    <span>数量：3</span>
                  </div>
                </li>
              </ul>
              <div class="count_total">
                <p>实付款：<span class="red">&yen;15000</span></p>
                <p>共100件商品</p>
              </div>
            </div>
            <div class="button">
              <span>去支付</span>
              <span>再次购买</span>
              <span class="gray">查看物流</span>
            </div>
          </li>
        </ul>
      </pull-to>
    </div>
</template>

<script>
  import PullTo from 'vue-pull-to'
    export default {
      name:'orderList',
      data(){
        return{

        }
      },
      components: {
        PullTo
      },
      methods:{
        refresh(loaded) {
          setTimeout(() => {
            //this.nowList.unshift(this.nowList[0]);
            loaded('done');
          }, 2000);
        },
        geMore(loaded){
          setTimeout(()=>{
            //console.log(this.nowList)
            //this.nowList = this.listData;
            loaded('done')
          },2000)
        },
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .orderList{
    height:77vh;
    ul{
      li.order_list{
        background-color: #fff;
        margin-bottom:1vh;
        .title{
          overflow: hidden;
          border-bottom:1px solid #eee;
          height:7vh;
          line-height: 7vh;
          padding:0px 10px;
          font-size:3.8vw;
          p{
            float:left;
          }
          span{
            float:right;
            color:#e4393c;
          }
          i.icon{
            float:right;
            margin-left:5px;
            color:#999;
          }
        }
        .order_list_main{
          ul{
            li.order_list_item{
              overflow: hidden;
              padding:10px 3vw;
              border-bottom:1px solid #eee;
              .img_box{
                float:left;
                border:1px solid #eee;
                padding:3px;
                width:30vw;
                height:30vw;
                img{
                  width:100%;
                }
              }
              .right{
                float:left;
                width:63vw;
                padding-left:10px;
                p.pname{
                  height:6vh;
                  line-height: 3vh;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  font-size:3.8vw;
                  margin-top:2vh;
                }
                p.ptype{
                  height:3vh;
                  line-height: 3vh;
                  font-size:3.8vw;
                  color:#999;
                  margin-top:1vh;
                }
                span{
                  font-size:3.8vw;
                  margin-top:1vh;
                  display: block;
                }
              }
            }
          }
          .count_total{
            overflow: hidden;
            padding:0px 10px;
            height:6vh;
            line-height:6vh;
            border-bottom:1px solid #eee;
            p{
              float:right;
              margin-left:10px;
              font-size:3.7vw;
              span.red{
                color: #e4393c;
              }
            }
          }
        }
        .button{
          overflow: hidden;
          padding:10px;
          font-size:3.7vw;
          span{
            float:right;
            padding:5px 15px;
            color:#e4393c;
            border:1px solid #e4393c;
            margin:0px 5px;
            border-radius: 8px;
          }
          span.gray{
            color:#666;
            border:1px solid #666;
          }
        }
      }
    }
  }
</style>
