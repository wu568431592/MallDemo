s<template>
    <div class="cart">
      <headerBox title="购物车" isBackShow="true" rightWord="true" :rightButton="rightButtonList" @edit="edit" @closeeidt="closeeidt"></headerBox>
      <div class="cartMain">
        <ul>
          <li v-for="i in 5">
            <div class="store">
              <i class="icon iconfont icon-checkbox lit" @click="checkStoreAll($event)"></i>
              <i class="icon iconfont icon-store"></i>
              <span>我是店铺名称</span>
            </div>
            <ul class="storeProductList">
              <li v-for="n in 3">
                <i class="icon iconfont icon-checkbox lit" @click="checkMe($event)"></i>
                <div class="imgBox">
                  <img src="//img14.360buyimg.com/N2/jfs/t3448/115/304606616/252246/a8e91519/58074aeaN63a3a8bb.jpg" alt="">
                </div>
                <div class="proInfo">
                  <h5>尤卓尔 丁酸氢化可的松乳膏10g/盒  商品名最多两行...</h5>
                  <p :class="{active:isedit}" @click="changeType($event)">规格：1盒装10g</p>
                  <span>&yen;15</span>
                  <button class="add" @click="addFun($event)">+</button>
                  <input type="number" value="1">
                  <button class="reduce" @click="reduceFun($event)">-</button>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="countBox">
        <div class="checkboxBox">
          <i class="icon iconfont icon-checkbox" id="checkAll" @click="checkAll($event)"></i>
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
      <chooseItemAlert v-show="itemEdit" @hideChooseAlert="hideChooseAlert"></chooseItemAlert>
      <div v-show="isCoverShow" class="cover">
      </div>
    </div>
</template>

<script>
    import headerBox from  '../components/headerBox/headerBox.vue'
    import chooseItemAlert from  '../components/chooseItemAlert/chooseItemAlert.vue'
    export default {
      name:'cart',
      components:{headerBox,chooseItemAlert},
      data(){
        return{
          rightButtonList:['messageBtn'],
          isedit:false,
          itemEdit:false,
          isCoverShow:false
        }
      },
      methods:{
        edit:function(){
          this.isedit = false;
        },
        closeeidt:function(){
          this.isedit = true;
        },
        addFun:function(e){
          var me = e.target;
          me.nextElementSibling.value ++;
        },
        reduceFun:function(e){
          var me = e.target;
          if(me.previousElementSibling.value>1){
            me.previousElementSibling.value --
          }
        },
        hideChooseAlert:function(){
          var me = document.getElementsByClassName('chooseItemAlert')[0];
          me.setAttribute('class','chooseItemAlert animated slideOutDown');
          this.isCoverShow =false;
          setTimeout(function(){
            this.itemEdit = false;
          },2000)
        },
        changeType:function(e){
          if(e.target.getAttribute('class') == 'active'){
            var me = document.getElementsByClassName('chooseItemAlert')[0]
            me.setAttribute('class','chooseItemAlert animated slideInUp')
            this.itemEdit = true;
            this.isCoverShow = true;
          }
        },
        checkStoreAll:function(e){
          var me =e.target;
          var lis = me.parentNode.nextElementSibling.children;
          var className = me.getAttribute('class');
          for(var i = 0; i<lis.length;i++){
            if(className == 'icon iconfont icon-checkbox lit'){
              me.setAttribute('class','icon iconfont icon-checkbox active lit');
              lis[i].children[0].setAttribute('class','icon iconfont icon-checkbox active lit');
            }else{
              me.setAttribute('class','icon iconfont icon-checkbox lit');
              lis[i].children[0].setAttribute('class','icon iconfont icon-checkbox lit');
              document.getElementById('checkAll').setAttribute('class','icon iconfont icon-checkbox');
            }
          }
          this.autoCheckAll();
        },
        checkAll:function(e){
          var check= document.getElementsByClassName('icon-checkbox');
          var meClassName = e.target.getAttribute('class');
          if(meClassName == 'icon iconfont icon-checkbox active lit'){
            for (var i=0;i<check.length ;i++){
              check[i].setAttribute('class','icon iconfont icon-checkbox lit')
            }
          }else{
            for (var i=0;i<check.length ;i++){
              check[i].setAttribute('class','icon iconfont icon-checkbox active lit')
            }
          }
        },
        checkMe(e){
          var className = e.target.getAttribute('class');
          if(className == 'icon iconfont icon-checkbox active lit'){
            e.target.setAttribute('class','icon iconfont icon-checkbox lit');
            var tt = e.target.parentNode.parentNode.previousElementSibling.children[0]
            tt.setAttribute('class','icon iconfont icon-checkbox lit');
            document.getElementById('checkAll').setAttribute('class','icon iconfont icon-checkbox');
          }else{
            e.target.setAttribute('class','icon iconfont icon-checkbox active lit');
          }
          this.autoCheckAll();
        },
        autoCheckAll:function(){
          var check = document.getElementsByClassName('lit');
          console.log(check);
          var allcheck = false;
          for(var i = 0;i<check.length;i++){
            if(check[i].getAttribute('class')=='icon iconfont icon-checkbox lit'){
              allcheck = false;
              break
            }else{
              allcheck = true;
            }
          }
          console.log(allcheck);
          if(allcheck){
            document.getElementById('checkAll').setAttribute('class','icon iconfont icon-checkbox active');
          }
        },
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
  .cover{
    position: fixed;
    background-color: rgba(0,0,0,0.5);
    z-index: 1000000;
    width:100vw;
    height:100vh;
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
        i.iconfont{
          font-size:22px;
          color:#ccc;
          float:left;
          width:15px;
          height:7vh;
          line-height:7vh;
          margin-right:15px;
        }
        i.iconfont.active{
          color:#e4393c;
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
      background:#eee;
      >ul{
          li{
            background:#fff;
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
              i.icon.iconfont.icon-checkbox{
                color:#ccc;
              }
              i.icon.iconfont.icon-checkbox.active{
                color:#e4393c;
              }
              span{
                font-size: 14px;
              }
            }
            .storeProductList{
              margin-bottom:10px;
              >li{
                  overflow: hidden;
                  position:relative;
                  padding:3vw 3vw;
                  border-bottom:1px dashed #aaa;
                  position:relative;
                  >i.iconfont{
                    /*float:left;*/
                    position:absolute;
                    top:50%;
                    left:2vw;
                    width:5vw;
                    height:5vw;
                    font-size:22px;
                    margin-top:-2.5vw;
                    color:#ccc;
                  }
                  >i.iconfont.active{
                     color:#e4393c;
                   }
                  .imgBox{
                    margin-left:8vw;
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
                      line-height: 3.5vh;
                      height:3.5vh;
                      color:#999;
                      margin-bottom: 1vh;
                      padding:0px 5px;
                      border:1px solid transparent;
                      border-radius:5px;
                    }
                    p.active{
                      border:1px solid #999;
                      -webkit-border-radius:5px;
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
                      border-right:none;
                    }
                    button.add{
                      border-top-right-radius: 5px;
                      border-bottom-right-radius: 5px;
                      border-left:none;
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
