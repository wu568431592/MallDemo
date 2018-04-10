s<template>
    <div class="cart">
      <headerBox title="购物车" isBackShow="true" rightWord="true" :rightButton="rightButtonList" @edit="edit" @closeeidt="closeeidt"></headerBox>
      <div class="cartMain">
        <ul>
          <slot v-if="cartInfor">
            <li v-for="(v,k) in cartInfor" :data-storeId="v.storeId">
              <div class="store">
                <i class="icon iconfont icon-checkbox lit" @click="checkStoreAll($event,v.storeProductList)"></i>
                <i class="icon iconfont icon-store"></i>
                <span class="fuck">{{v.storeName}}</span>
              </div>
              <ul class="storeProductList">
                <li v-for="(v1,k1) in v.storeProductList">
                  <i class="icon iconfont icon-checkbox lit" @click="checkMe($event)" :data-proId="v1.proId"></i>
                  <div class="imgBox">
                    <img :src="v1.proImg" alt="">
                  </div>
                  <div class="proInfo">
                    <h5>{{v1.proName}}</h5>
                    <p :class="{active:isedit}" @click="changeType($event,v1.proId)">规格：{{v1.proType}} <slot v-if="v1.proColor">颜色：{{v1.proColor}}</slot></p>
                    <span>&yen;{{v1.proPrice}}</span>
                    <button class="add" @click="addFun($event,k,k1)">+</button>
                    <input type="number" v-model="v1.proNum">
                    <button class="reduce" @click="reduceFun($event,k,k1)">-</button>
                  </div>
                </li>
              </ul>
            </li>
          </slot>
        </ul>
      </div>
      <div class="countBox">
        <div class="checkboxBox">
          <i class="icon iconfont icon-checkbox" id="checkAll" @click="checkAll($event)"></i>
          <label for="checkAll">全选</label>
        </div>
        <div class="countNow" v-show="!isedit">
          <span>合计:</span>
          <span class="cost">&yen;{{totalMoney}}元</span>
          <button>结算({{totalNum}})</button>
        </div>
        <div class="buttonBox" v-show="isedit">
          <button>移入收藏</button>
          <button>删除</button>
        </div>
      </div>
      <chooseItemAlert v-show="itemEdit" @hideChooseAlert="hideChooseAlert" :proinformat="productInfo" :selectNum="selectNum">
        <template slot-scope="props" slot="confirmBox">
          <div class="confirmBox">
            <span @click="updateCart(props)">确定</span>
          </div>
        </template>
      </chooseItemAlert>
      <div v-show="isCoverShow" class="cover"></div>
    </div>
</template>

<script>
    import headerBox from  '../components/headerBox/headerBox.vue'
    import chooseItemAlert from  '../components/chooseItemAlert/chooseItemAlert.vue'
    import axios from 'axios'
    import { mapGetters } from 'vuex'
    export default {
      name:'cart',
      components:{headerBox,chooseItemAlert},
      data(){
        return{
          rightButtonList:['messageBtn'],
          isedit:false,
          itemEdit:false,
          isCoverShow:false,
          cartInfor:'',
          totalMoney:0,
          totalNum:0,
          productInfo:'',
          selectNum:1,
        }
      },
      computed:{
        ...mapGetters([
          "getServerIp"
        ])
      },
      methods:{
        updateCart(props){
          let proId = props.cartUpdateInfo.proId;
          //console.log(proId)
          //console.log(this.cartInfor);
          for(var i = 0;i<this.cartInfor.length;i++){
              var storeList = this.cartInfor[i].storeProductList;
              for(var j = 0; j<storeList.length;j++){
                  if(storeList[j].proId == proId ){
                    console.log(storeList[j].proId)
                    storeList[j].proColor = props.cartUpdateInfo.proColor;
                    storeList[j].proNum = props.cartUpdateInfo.proNum;
                    storeList[j].proPrice = props.cartUpdateInfo.proPrice;
                    storeList[j].proType = props.cartUpdateInfo.proType;
                  }
              }
          }
          this.hideChooseAlert();
        },
        edit:function(){
          this.isedit = false;
        },
        closeeidt:function(){
          this.isedit = true;
        },
        addFun:function(e,k,k1){
          this.cartInfor[k].storeProductList[k1].proNum ++;
          if(e.target.parentNode.parentNode.children[0].getAttribute('class')=='icon iconfont icon-checkbox active lit'){
            var price = this.cartInfor[k].storeProductList[k1].proPrice;
            var num = this.cartInfor[k].storeProductList[k1].proNum;
            this.totalMoney += parseInt(price);
            this.totalNum ++;
          }
        },
        reduceFun:function(e,k,k1){
          if(this.cartInfor[k].storeProductList[k1].proNum>1){
            this.cartInfor[k].storeProductList[k1].proNum --;
            if(e.target.parentNode.parentNode.children[0].getAttribute('class')=='icon iconfont icon-checkbox active lit'){
              var price = this.cartInfor[k].storeProductList[k1].proPrice;
              var num = this.cartInfor[k].storeProductList[k1].proNum;
              this.totalMoney -= parseInt(price);
              this.totalNum --;
            }
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
        changeType:function(e,proId){
          if(e.target.getAttribute('class') == 'active'){
            var me = document.getElementsByClassName('chooseItemAlert')[0]
            me.setAttribute('class','chooseItemAlert animated slideInUp');
            this.itemEdit = true;
            this.isCoverShow = true;
            let num = e.target.nextElementSibling.nextElementSibling.nextElementSibling.value;
            this.selectNum = num;
            //axios.get('http://'+this.getServerIp+'/server/product'+proId+'.json')
            axios.get('http://'+this.getServerIp+'/product'+proId)
              .then( res =>{
                  this.productInfo = res.data;
              })
              .catch( err =>{
                  //console.log(err)
              })
          }
        },
        checkStoreAll:function(e){
          var me =e.target;
          var lis = me.parentNode.nextElementSibling.children;
          var className = me.getAttribute('class');
          var storeTotalPrice = 0;
          var storeTotalNum = 0;
          for(var i = 0; i<lis.length; i++){
            if(className == 'icon iconfont icon-checkbox lit'){
              if(lis[i].children[0].getAttribute('class') == 'icon iconfont icon-checkbox lit'){
                let price = lis[i].children[2].children[2].innerHTML.split('¥')[1];
                let num = lis[i].children[2].children[4].value;
                storeTotalPrice += parseInt(price*num);
                storeTotalNum += parseInt(num);
              }
              me.setAttribute('class','icon iconfont icon-checkbox active lit');
              lis[i].children[0].setAttribute('class','icon iconfont icon-checkbox active lit');
            }else{
              let price = lis[i].children[2].children[2].innerHTML.split('¥')[1];
              let num = lis[i].children[2].children[4].value;
              storeTotalPrice += parseInt(price*num);
              storeTotalNum += parseInt(num);
              me.setAttribute('class','icon iconfont icon-checkbox lit');
              lis[i].children[0].setAttribute('class','icon iconfont icon-checkbox lit');
              document.getElementById('checkAll').setAttribute('class','icon iconfont icon-checkbox');
            }
          }
          if(className == 'icon iconfont icon-checkbox lit'){
            this.totalMoney += parseInt(storeTotalPrice);
            this.totalNum += parseInt(storeTotalNum);
          }else{
            this.totalMoney -= parseInt(storeTotalPrice);
            this.totalNum -= parseInt(storeTotalNum);
          }
          this.autoCheckAll();
        },
        checkAll:function(e){
          var check= document.getElementsByClassName('lit');
          var meClassName = e.target.getAttribute('class');
          if( meClassName == 'icon iconfont icon-checkbox active'){
            for (var i=0;i<check.length ;i++){
              check[i].setAttribute('class','icon iconfont icon-checkbox lit');
              if(check[i].parentNode.children[2].getAttribute('class') == 'proInfo'){
                let price = check[i].parentNode.children[2].children[2].innerHTML.split('¥')[1];
                let num = check[i].parentNode.children[2].children[4].value;
                this.totalNum -= Number(num);
                this.totalMoney -= Number(price*num);
              }
            }
            e.target.setAttribute('class','icon iconfont icon-checkbox');
          }else{
            this.totalNum = 0;
            this.totalMoney = 0;
            for (var i=0;i<check.length ;i++){
              if(check[i].parentNode.children[2].getAttribute('class') == 'proInfo'){
                let price = check[i].parentNode.children[2].children[2].innerHTML.split('¥')[1];
                let num = check[i].parentNode.children[2].children[4].value;
                this.totalNum += Number(num);
                this.totalMoney += parseInt(parseInt(price)*parseInt(num));
              }
              check[i].setAttribute('class','icon iconfont icon-checkbox active lit');
            }
            e.target.setAttribute('class','icon iconfont icon-checkbox active')
          }
        },
        checkMe(e){
          var num = e.target.parentNode.children[2].children[4].value;
          var price = e.target.parentNode.children[2].children[2].innerHTML.split('¥')[1];
          var className = e.target.getAttribute('class');
          if(className == 'icon iconfont icon-checkbox active lit'){
            e.target.setAttribute('class','icon iconfont icon-checkbox lit');
            var tt = e.target.parentNode.parentNode.previousElementSibling.children[0]
            tt.setAttribute('class','icon iconfont icon-checkbox lit');
            document.getElementById('checkAll').setAttribute('class','icon iconfont icon-checkbox');
            this.totalMoney -= price*num;
            this.totalNum  -= num
          }else{
            this.totalMoney +=price*num;
            this.totalNum += parseInt(num);
            e.target.setAttribute('class','icon iconfont icon-checkbox active lit');
          }
          this.autoCheckStoreAll(e)
          this.autoCheckAll();
        },
        autoCheckStoreAll:function(e){
          var me = e.target;
          var lis = me.parentNode.parentNode.getElementsByClassName('icon-checkbox')
          var allcheck = false;
          for(var i = 0;i<lis.length;i++){
            if(lis[i].getAttribute('class')=='icon iconfont icon-checkbox lit'){
              allcheck = false;
              break
            }else{
              allcheck = true;
            }
          }
          if(allcheck){
            me.parentNode.parentNode.previousElementSibling.children[0].setAttribute('class','icon iconfont icon-checkbox active lit');
          }
        },
        autoCheckAll:function(){
          var check = document.getElementsByClassName('lit');
          var allcheck = false;
          for(var i = 0;i<check.length;i++){
            if(check[i].getAttribute('class')=='icon iconfont icon-checkbox lit'){
              allcheck = false;
              break
            }else{
              allcheck = true;
            }
          }
          if(allcheck){
            document.getElementById('checkAll').setAttribute('class','icon iconfont icon-checkbox active');
          }
        },
//        updateProNum:function(k,k1){
//          this.cartInfor[k].storeProductList[k1].proNum ++;
//        }
      },
      beforeMount:function(){
        this.$emit('showTabBar');
      },
      mounted:function(){
        axios.get('http://localhost:8081/cartInfo')
          .then(res=>{
            //console.log(res.data)
            this.cartInfor = res.data.cartInfor;
        })
          .catch(err=>{
            //console.log(err)
          })
      }
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
        width:22%;
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
        width:78%;
        font-size:15px;
        span{
          display: inline-block;
          padding:0px 5px;
          line-height:7vh;
        }
        span.cost{
          color:#e4393c;
        }
        button{
          float:right;
          width:40%;
          padding:0px 10px;
          line-height:7vh;
          border:none;
          color:#fff;
          background-color: #e4393c;
        }
      }
      .buttonBox{
        width:78%;
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
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
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
