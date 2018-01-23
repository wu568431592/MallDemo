s<template>
    <div class="cart">
      <headerBox title="购物车" isBackShow="true" rightWord="true" :rightButton="rightButtonList" @edit="edit" @closeeidt="closeeidt"></headerBox>
      <div class="cartMain">
        <ul>
          <li v-for="i in 5">
            <div class="store">
              <input type="checkbox">
              <i class="icon iconfont icon-store"></i>
              <span>我是店铺名称</span>
            </div>
            <ul class="storeProductList">
              <li v-for="n in 3">
                <input type="checkbox">
                <div class="imgBox">
                  <img src="//img14.360buyimg.com/N2/jfs/t3448/115/304606616/252246/a8e91519/58074aeaN63a3a8bb.jpg" alt="">
                </div>
                <div class="proInfo">
                  <h5>尤卓尔 丁酸氢化可的松乳膏10g/盒  商品名最多两行...</h5>
                  <p>规格：1盒装10g</p>
                  <span>&yen;15</span>
                  <button class="add">+</button>
                  <input type="number" value="1">
                  <button class="reduce">-</button>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="countBox">
        <div class="checkboxBox">
          <input type="checkbox" id="checkAll" name="checkAll">
          <label for="checkAll">全选</label>
        </div>
        <div class="countNow" v-show="!isedit">
          <span>合计:</span>
          <span class="cost">&yen;0元</span>
          <button>结算(0)</button>
        </div>
        <div class="buttonBox" v-show="isedit">
          <button>移入收藏</button>
          <button>删除</button>
        </div>
      </div>
    </div>
</template>

<script>
    import headerBox from  '../components/headerBox/headerBox.vue'
    export default {
      name:'cart',
      components:{headerBox},
      data(){
        return{
          rightButtonList:['messageBtn'],
          isedit:false,
        }
      },
      methods:{
        edit:function(){
          this.isedit = false;
        },
        closeeidt:function(){
          this.isedit = true;
        }
      },
      beforeMount:function(){
        this.$emit('showTabBar');
      },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .headerBox{
    width:100%;
    position:fixed;
    top:0px;
    left:0px;
  }
  .cart{
    height:100vh;
    .countBox{
      position:fixed;
      bottom:9vh;
      left:0px;
      width:100%;
      background-color: #fff;
      border-top:1px solid #999;
      overflow:hidden;
      >div{
        float:left;
       }
      .checkboxBox{
        width:30%;
        overflow: hidden;
        padding:0px 10px;
        input{
          float:left;
          width:15px;
          height:7vh;
          line-height:7vh;
          margin-right:5px;
        }
        label{
          float:left;
          line-height:7vh;
          font-size:15px;
        }
      }
      .countNow{
        width:70%;
        font-size:15px;
        span{
          display: inline-block;
          padding:0px 10px;
          line-height:7vh;
        }
        span.cost{
          color:#e4393c;
        }
        button{
          float:right;
          width:50%;
          padding:0px 10px;
          line-height:7vh;
          border:none;
          color:#fff;
          background-color: #e4393c;
        }
      }
      .buttonBox{
        width:70%;
        button{
          float:left;
          width:50%;
          padding:0px 10px;
          line-height:7vh;
          border:none;
          color:#fff;
          background-color: #e4393c;
          font-size:15px;
        }
        button:nth-child(2){
          background-color: #ff5a00;
        }
      }
    }
    .cartMain{
      height:76.5vh;
      margin-top:7.5vh;
      overflow-y: scroll;
      >ul{
          li{
            .store{
              padding:0px 10px;
              border-bottom:1px solid #aaa;
              overflow: hidden;
              height:7vh;
              line-height:7vh;
              input{
                width:15px;
                margin-right:10px;
                height:15px;
              }
              i.iconfont{
                font-size:20px;
                margin-right:10px;
                color:#e4393c;
              }
              span{
                font-size: 14px;
              }
            }
            .storeProductList{
              border-bottom:1px solid #999;
              >li{
                  overflow: hidden;
                  position:relative;
                  padding:3vw 3vw;
                  border-bottom:1px dashed #aaa;
                  >input{
                    float:left;
                    width:5vw;
                    height:5vw;
                    margin-right:3vw;
                    margin-top:8vh;
                  }
                  .imgBox{
                    float:left;
                    width:30vw;
                    height:30vw;
                    margin-right:3vw;
                    img{
                      width:100%;
                    }
                  }
                  .proInfo{
                    float:left;
                    width:52vw;
                    h5{
                      margin-top: 2vh;
                      font-weight: normal;
                      line-height: 3vh;
                      height:6vh;
                      margin-bottom: 1vh;
                    }
                    p{
                      line-height: 3vh;
                      height:3vh;
                      color:#999;
                      margin-bottom: 1vh;
                    }
                    span{
                      color:#e4393c;
                      font-size:14px;
                    }
                    button{
                      float:right;
                      border:1px solid #999;
                      width:18px;
                      height:18px;
                    }
                    button.reduce{
                      border-top-left-radius: 5px;
                      border-bottom-left-radius: 5px;
                    }
                    button.add{
                      border-top-right-radius: 5px;
                      border-bottom-right-radius: 5px;
                    }
                    input{
                      float:right;
                      height:18px;
                      width:18px;
                      border:1px solid #999;
                      text-align: center;
                    }
                  }
               }
                li:last-child{
                  border:none;
                }
            }
          }
       }
    }
  }

</style>
