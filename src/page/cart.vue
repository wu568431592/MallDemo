s<template>
    <div class="cart">
      <headerBox title="购物车" isBackShow="true" rightWord="true" :rightButton="rightButtonList" ></headerBox>
      cart
      <div class="countBox">
        <div class="checkboxBox">
          <input type="checkbox">
          <label for="">全选</label>
        </div>
        <div class="countNow">
          <span>合计</span>
          <span>&yen;0元</span>
          <button>结算(0)</button>
        </div>
        <div class="buttonBox">
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
          rightButtonList:['messageBtn']
        }
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
  .cart{
    height:90vh;
    padding-top:7.5vh;
    margin-bottom:55px;
    .countBox{
      position:fixed;
      bottom:55px;
      left:0px;
      width:100%;
      /*box-shadow: 0px 1px 10px 0px #666;*/
      border-top:1px solid #999;
      overflow:hidden;
      >div{
        float:left;
       }
      .checkboxBox{
        width:30%;
        padding-left:10px;
        overflow: hidden;
        input{
          float:left;
          width:15px;
          height:25px;
          line-height:25px;
          margin-right:5px;
        }
        label{
          float:left;
          height:25px;
          line-height:25px;
          font-size:15px;
        }
      }
      .countNow{
        width:70%;
      }
      .buttonBox{
        width:70%;
        display: none;
      }
    }
  }

</style>
