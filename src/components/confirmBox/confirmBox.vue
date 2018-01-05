<template>
    <div class="confirmBox">
      <div class="confirmBoxMain">
        <div class="title">{{titleMessage}}</div>
        <div class="buttonBox">
          <span class="cancle" @click="cancle">取消</span>
          <span class="confirm" @click="confirm">确定</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name:'confirmBox',
      data(){
          return{

          }
      },
      props:['titleMessage'],
      methods:{
        cancle:function(){
          this.$emit('cancleFun');
        },
        confirm:function(){
          this.$emit('confirmFun');
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .confirmBox{
    background:rgba(0,0,0,0.3);
    position:fixed;
    z-index: 1000;
    top:0px;
    left:0px;
    width:100vw;
    height:100vh;
    .confirmBoxMain{
      padding:10px 0px;
      border-radius:5px;
      width:80%;
      margin:0 auto;
      margin-top:200px;
      background-color: #fff;
      .title{
        height:7vh;
        line-height: 7vh;
        text-align: center;
        font-size:15px;
        border-bottom:1px solid #333;
      }
      .buttonBox{
        padding:10px 10px;
        overflow: hidden;
        span{
          float:left;
          width:50%;
          text-align: center;
          height:5vh;
          line-height: 5vh;
          color:#fff;
        }
        span.cancle{
          background-color: #aaa;
          border-top-left-radius:5px;
          border-bottom-left-radius:5px;
        }
        span.confirm{
          background-color: #e4393c;
          border-top-right-radius:5px;
          border-bottom-right-radius:5px;
        }
      }
    }
  }
</style>
