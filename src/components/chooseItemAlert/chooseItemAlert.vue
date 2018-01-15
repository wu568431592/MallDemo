<template>
  <div class="chooseItemAlert animated slideInUp">
    <div class="chooseItemAlertMain">
      <div class="promessage">
        <div class="imgBox">
          <img src="//img13.360buyimg.com/N1/s450x450_jfs/t16159/202/1360563117/191137/451cc5dc/5a531749Nd8d592f8.jpg" alt="">
        </div>
        <p class="proPrice">&yen;1900元</p>
        <p class="proId">商品编码：104389798</p>
        <i class="icon iconfont icon-ioscloseoutline" @click="closeChooseAlert"></i>
      </div>
      <div class="xuanxiangBox">
        <p>包装：</p>
        <ul @click="changeItemFun($event)">
          <li class="active">原装+套餐1</li>
          <li>原装+套餐2</li>
          <li>原装+套餐3</li>
          <li>原装+套餐4</li>
        </ul>
        <p>颜色：</p>
        <ul @click="changeItemFun($event)">
          <li class="active">红色</li>
          <li>绿色</li>
          <li>黑色</li>
          <li>白色</li>
        </ul>
      </div>
      <div class="numChangeBox">
        <span>数量：</span>
        <button @click="reduceNum">-</button>
        <input type="number" v-model="proChooseNum" @blur="numReturn">
        <button @click="addNum">+</button>
      </div>
      <div class="buttonBox">
        <span>立即购买</span>
        <span>加入购物车</span>
      </div>
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
        }
      },
      methods:{
        closeChooseAlert:function(){
          this.$emit('hideChooseAlert');
        },
        changeItemFun:function(e){
          var lis = e.target.parentNode.children;
          if(e.target.tagName == "LI"){
            for(var i = 0; i<lis.length;i++){
              lis[i].setAttribute('class','')
            }
            e.target.setAttribute('class','active')
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
        }
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
        height:10vh;
        line-height: 10vh;
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
    }
  }
</style>
