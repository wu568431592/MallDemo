<template>
  <div class="chooseItemAlert animated slideInUp">
    <div class="chooseItemAlertMain">
      <div class="promessage">
        <div class="imgBox">
          <img :src="proinformat ? proinformat.proImg[0].img : 'https://m.360buyimg.com/mobilecms/s357x357_jfs/t6019/205/157969858/195398/ba8744bf/59264e5dN9862a0ac.jpg!q50.jpg'" alt="">
        </div>
        <p class="proPrice">&yen;{{proPrice ? proPrice : '0'}}</p>
        <p class="proId">商品编码：{{proinformat ? proinformat.proId : '0'}}</p>
        <i class="icon iconfont icon-ioscloseoutline" @click="closeChooseAlert"></i>
      </div>
      <div class="xuanxiangBox">
        <p>包装：</p>
        <ul @click="changeItemFun($event)">
          <slot v-if="proinformat">
            <li v-for="(v,k) in proinformat.proType" :class="{active : k==0? true:false}" :data-index="k">
              {{v.proTypeName}}
            </li>
          </slot>
        </ul>
        <p>颜色：</p>
        <ul @click="changeColorFun($event)">
          <slot v-if="colorList">
            <li v-for="(v,k) in colorList" :class="{active : k == 0 ? true:false}">{{v}}</li>
          </slot>
        </ul>
      </div>
      <div class="numChangeBox">
        <span>数量：</span>
        <button @click="reduceNum">-</button>
        <input type="number" v-model="proChooseNum" @blur="numReturn">
        <button @click="addNum">+</button>
      </div>
      <slot name="buttonBox"></slot>
      <slot name="confirmBox" :cartUpdateInfo="cartUpdateInfo"></slot>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
      name:'chooseItemAlert',
      data(){
        return{
          proChooseNum:1,
          colorList:'',
          proPrice:'',
          proType:'',
          proColor:'',
          cartUpdateInfo:{
            proType:'',
            proColor:'',
            proNum:null,
            proId:'',
            proPrice:null
          }
        }
      },
      props:['proinformat','selectNum'],
      methods:{
        clickme:function(){
            alert(1)
        },
        closeChooseAlert:function(){
          this.$emit('hideChooseAlert');
        },
        changeItemFun:function(e){
          var lis = e.target.parentNode.children;
          if(e.target.tagName == "LI"){
            var index = e.target.getAttribute('data-index');
            this.colorList = this.proinformat.proType[index].proColor;
            this.proPrice = this.proinformat.proType[index].proPrice;
            for(var i = 0; i<lis.length;i++){
              lis[i].setAttribute('class','');
            }
            e.target.setAttribute('class','active');
            this.proType = e.target.innerHTML.trim();
          }
        },
        changeColorFun:function(e){
          var lis = e.target.parentNode.children;
          if(e.target.tagName == "LI"){
            for(var i = 0; i<lis.length;i++){
              lis[i].setAttribute('class','');
            }
            e.target.setAttribute('class','active');
            this.proColor = e.target.innerHTML;
          }
        },
        reduceNum:function(){
          if(this.proChooseNum > 1){
            this.proChooseNum --;
          }
        },
        addNum:function(){
          this.proChooseNum ++;
        },
        numReturn:function(){
          if(this.proChooseNum == ''){
            this.proChooseNum =1;
          }
        },
        updateInfor:function(){
          this.cartUpdateInfo.proPrice = this.proPrice;
          this.cartUpdateInfo.proNum = this.proChooseNum;
          this.cartUpdateInfo.proId = this.proinformat.proId;
          this.cartUpdateInfo.proType = this.proType;
          this.cartUpdateInfo.proColor = this.proColor;
        }
      },
      mounted:function(){

      },
      watch:{
        proinformat:function(){
          this.colorList = this.proinformat.proType[0].proColor;
          this.proPrice = this.proinformat.proType[0].proPrice;
        },
        selectNum:function(){
          this.proChooseNum = this.selectNum;
        }
      },
      updated:function(){
          this.updateInfor();
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .chooseItemAlert{
    position: fixed;
    width:100%;
    bottom:0px;
    left:0px;
    z-index: 100000000;
    height:100vh;
    .chooseItemAlertMain{
      position: absolute;
      bottom:0px;
      left:0px;
      width:100%;
      z-index: 1000000;
      background-color: #fff;
      .promessage{
        overflow: hidden;
        padding:10px;
        position: relative;
        border-bottom:1px solid #eee;
        .imgBox{
          float:left;
          width:30vw;
          height:30vw;
          margin-right:10px;
          img{
            width:100%;
          }
        }
        p.proPrice{
          margin-top:3vh;
          margin-bottom:3vh;
          font-size:15px;
          color:#e4393c;
        }
        p.proId{
          font-size:14px;
        }
        i.iconfont{
          position: absolute;
          right: 10px;
          top:10px;
        }
      }
      .xuanxiangBox{
        padding:5px 10px;
        p{
          line-height: 5vh;
          height:5vh;
          border-bottom: 1px solid #eee;
        }
        ul{
          padding:2vw;
          padding-bottom:0px;
          overflow:hidden;
          li{
            float:left;
            padding:2vw 3vw;
            border:1px solid #eee;
            margin-bottom: 2vw;
            margin-right:2vw;
            border-radius: 5px;
          }
          li.active{
            border:1px solid #e4393c;
          }
        }
      }
      .numChangeBox{
        padding:5px 10px;
        span{
          display: inline-block;
          height:5vh;
          line-height: 5vh;
        }
        button{
          width:8vw;
          height:8vw;
          border:1px solid #ddd;
        }
        input{
          height:8vw;
          line-height: 8vw;
          width:10vw;
          border:1px solid #ddd;
          text-align: center;
        }
      }
      .buttonBox{
        height:8vh;
        line-height: 8vh;
        text-align: center;
        span{
          float:left;
          width:50%;
          color:#fff;
          font-size: 15px;
          background-color: #e4393c;
        }
        span:first-child{
          background-color: rgba(255, 153, 0, 1);
        }
      }
      .confirmBox{
        height:8vh;
        line-height: 8vh;
        text-align: center;
        span{
          float:left;
          width:100%;
          color:#fff;
          font-size: 15px;
          background-color: #e4393c;
        }
      }
    }
  }
</style>
