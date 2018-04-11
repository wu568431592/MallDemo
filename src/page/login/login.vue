<template>
    <div class="login">
      <headerBox title="登录" :rightButton="[]"></headerBox>
      <div class="login_main">
        <div class="logo_box">
          <img src="../../assets/images/logo.png" alt="">
        </div>
        <div class="input_box">
          <group title="">
            <x-input type='text' title="用户名&nbsp;&nbsp;" placeholder="请输入用户名"></x-input>
            <x-input type="password" title="密&nbsp;&nbsp;码" placeholder="请输入密码"></x-input>
          </group>
        </div>
        <div class="button_box">
          <x-button @click.native="iconType = 'success'" type="warn">登录</x-button>
        </div>
        <div class="other_box">
          <p>注册账号</p>
          <p>忘记密码？</p>
        </div>
      </div>
    </div>
</template>

<script>
  import { XInput, Group, XButton, Cell } from 'vux'
  import headerBox from '../../components/headerBox/headerBox.vue'
    export default {
      name:'login',
      data(){
        return{

        }
      },
      components:{
        headerBox,
        XInput,
        XButton,
        Group,
        Cell },
      beforeMount:function(){
        this.$emit('hideTabBar');
      },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .headerBox{
    position: absolute;
    top:0px;
    left:0px;
    width:100%;
  }
  .login{
    .login_main{
      margin-top:7.5vh;
      .logo_box{
        padding:3vh;
        width:100%;
        text-align: center;
      }
      .input_box{
        .weui-cells:before{
          border-top: 1px solid #999;
        }
      }
      .button_box{
        margin-top:5vh;
        padding:0px 10vw;
      }
      .other_box{
        overflow: hidden;
        margin-top:4vh;
        padding:0px 10vw;
        p{
          font-size:4vw;
        }
        p:first-child{
          float:left;
        }
        p:nth-child(2){
          float:right;
        }
      }
    }

  }
</style>
