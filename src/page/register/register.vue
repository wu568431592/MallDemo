<template>
    <div class="register">
      <headerBox title="注册" :rightButton="[]"></headerBox>
      <div class="register_main">
        <div class="register_box">
          <img src="../../assets/images/logo.png" alt="">
        </div>
        <div class="input_box">
          <group title="">
            <x-input type='text' title="用户名&nbsp;&nbsp;" placeholder="请输入用户名"></x-input>
            <x-input type="password" title="密&nbsp;&nbsp;码" placeholder="请输入密码"></x-input>
            <x-input type="password" title="确认密码 " placeholder="请重复输入密码"></x-input>
          </group>
        </div>
        <div class="agree_box">
          <i :class="{active:isAgree}" class="icon iconfont icon-wancheng" @click="changeAgree"></i>
          <span @click="changeAgree">已经同意本公司 <router-link to="index">《服务条款》</router-link></span>
        </div>
        <div class="button_box">
          <x-button @click.native="iconType = 'success'" type="warn">注册账号</x-button>
        </div>
        <div class="other_box">
          <p><router-link to="/login">已有账号，返回登录</router-link></p>
          <p><router-link to="/forgetPassword">忘记密码？</router-link></p>
        </div>
      </div>
    </div>
</template>

<script>
    import { XInput, Group, XButton } from 'vux'
    import headerBox from '../../components/headerBox/headerBox.vue'
    export default {
      name:'register',
      data(){
        return{
          isAgree:true,
        }
      },
      components:{
          headerBox,
          XInput,
          XButton,
          Group
      },
      methods:{
        changeAgree(){
          this.isAgree = !this.isAgree;
        }
      }
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
  .register{
    .register_main{
      margin-top:7.5vh;
      .register_box{
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
      .other_box{
        overflow: hidden;
        margin-top:4vh;
        padding:0px 10vw;
        p{
          font-size:4vw;
        }
        p:first-child{
          float:left;
          color:#e4393c;
        }
        p:nth-child(2){
          float:right;
          color:#999;
        }
      }
      .agree_box{
        padding:0px 10vw;
        margin-top:2vh;
        text-align: center;
        i.icon{
          font-size: 20px;
          color:#999;
          position:relative;
          top:2px;
        }
        i.icon.active{
          color:#e4393c;
        }
        span{
          font-size: 14px;
          display: inline-block;
        }
      }
    }
  }
</style>
