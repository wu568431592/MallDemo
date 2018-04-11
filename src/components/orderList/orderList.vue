<template>
    <div class="orderList">
      <pull-to :top-load-method="refresh" :bottom-load-method="geMore">
        <ul>
          <slot v-if="mydataList">
            <li class="order_list" v-for="i in mydataList">
              <div class="title">
                <p>订单编号：{{i.orderId}}</p>
                <i class="icon iconfont icon-lajixiang" v-if="i.orderStaus == 2 || i.orderStaus == 0"></i>
                <span v-if="i.orderStaus == 1">等待发货</span>
                <span v-else-if="i.orderStaus == 2">已取消</span>
                <span v-else-if="i.orderStaus == 3">已发货</span>
                <span v-else-if="i.orderStaus == 4">申请退款中</span>
                <span v-else-if="i.orderStaus == 5">待支付</span>
                <span v-else-if="i.orderStaus == 0">已完成</span>
              </div>
              <div class="order_list_main">
                <ul>
                  <li class="order_list_item" v-for="j in i.orderProductList">
                    <div class="img_box">
                      <img :src="j.proImg" alt="">
                    </div>
                    <div class="right">
                      <p class="pname">{{j.proName}}</p>
                      <p class="ptype">规格：{{j.proType}} 颜色：{{j.color}}</p>
                      <span>数量：{{j.proNum}}</span>
                    </div>
                  </li>
                </ul>
                <div class="count_total">
                  <p>实付款：<span class="red">&yen;{{i.orderProTotalMoney}}</span></p>
                  <p>共{{i.orderProNum}}件商品</p>
                </div>
              </div>
              <div class="button">
                <span v-if="i.orderStaus == 5">去支付</span>
                <span v-if="i.orderStaus == 0 || i.orderStaus == 2">再次购买</span>
                <span v-if="i.orderStaus == 4">查看退款详情</span>
                <span v-if="i.orderStaus == 3" class="gray">查看物流</span>
                <span v-if="i.orderStaus == 1">提醒卖家发货</span>
              </div>
            </li>
          </slot>
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
          mydataList:''
        }
      },
      components: {
        PullTo
      },
      props:['dataList'],
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
      },
      watch:{
        dataList:function(){
            this.mydataList = this.dataList;
            //console.log(this.mydataList)
        }
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
