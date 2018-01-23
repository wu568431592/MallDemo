s<template>
    <div class="cart">
      <headerBox title="购物车" isBackShow="true" rightWord="true" :rightButton="rightButtonList" @edit="edit" @closeeidt="closeeidt"></headerBox>
      cart
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
    padding-top:7.5vh;
    padding-bottom:55px;
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
        overflow: hidden;
        padding:5px 10px;
        input{
          float:left;
          width:15px;
          height:40px;
          line-height:40px;
          margin-right:5px;
        }
        label{
          float:left;
          line-height:40px;
          font-size:15px;
        }
      }
      .countNow{
        width:70%;
        font-size:15px;
        span{
          display: inline-block;
          padding:5px 10px;
          line-height:40px;
        }
        span.cost{
          color:#e4393c;
        }
        button{
          float:right;
          width:50%;
          padding:5px 10px;
          line-height:40px;
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
          padding:5px 10px;
          line-height:40px;
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
  }

</style>
