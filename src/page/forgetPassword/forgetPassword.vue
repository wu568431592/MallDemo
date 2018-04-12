<template>
    <div class="forgetPassword">
      <headerBox title="找回密码" :rightButton="[]"></headerBox>
      <div class="forgetPassword_main">
        <div class="forgetPassword_box">
          <img src="../../assets/images/logo.png" alt="">
        </div>
        <div class="input_box">
          <group title="">
            <x-input type='text' title="用户名&nbsp;&nbsp;" placeholder="请输入用户名"></x-input>
          </group>
        </div>
        <div class="button_box">
          <x-button @click.native="iconType = 'success'" type="warn">找回密码</x-button>
        </div>
      </div>
    </div>
</template>

<script>
  import { XInput, Group, XButton } from 'vux'
  import headerBox from '../../components/headerBox/headerBox.vue'
    export default {
      name:'forgetPassword',
      data(){
        return{

        }
      },
      components:{
        headerBox,
        XInput,
        XButton,
        Group
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
  .forgetPassword{
    .forgetPassword_main{
      margin-top:7.5vh;
      .forgetPassword_box{
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
        margin-top:3vh;
        padding:0px 10vw;
      }
    }
  }
</style>
