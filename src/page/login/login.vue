<template>
    <div class="login">
      <headerBox title="登录" :rightButton="[]"></headerBox>
      <div class="login_main">
        <div class="logo_box">
          <img src="../../assets/images/logo.png" alt="">
        </div>
        <div class="input_box">
          <group title="">
            <x-input type='text' title="用户名&nbsp;&nbsp;" placeholder="请输入用户名" v-model="userName"></x-input>
            <x-input type="password" title="密&nbsp;&nbsp;码" placeholder="请输入密码" v-model="password"></x-input>
          </group>
        </div>
        <div class="button_box">
          <x-button @click.native="loginFun" type="warn">登录</x-button>
        </div>
        <div class="other_box">
          <p>
            <router-link to="/register">
              注册账号
            </router-link>
          </p>
          <p>
            <router-link to="/forgetPassword">
              忘记密码？
            </router-link>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
    import { XInput, Group, XButton } from 'vux'
    import headerBox from '../../components/headerBox/headerBox.vue'
    import { mapGetters,mapMutations } from 'vuex'
    import axios from 'axios'
    export default {
      name:'login',
      data(){
        return{
          userName:'',
          password:'',
          canLogin:true,
        }
      },
      components:{
        headerBox,
        XInput,
        XButton,
        Group
      },
      beforeMount:function(){
        this.$emit('hideTabBar');
      },
      methods:{
        ...mapMutations([
            'setIsLogin'
        ]),
        loginFun:function(){
          if(this.canLogin){
            this.canLogin = false;
            let userName = this.userName;
            let password = this.password;
            if(!userName){
                this.$vux.toast.show({
                  type:'text',
                  width:'50vw',
                  text: '请填写用户名！'
                })
                this.canLogin = true;
                return
            }
            if(!password){
              this.$vux.toast.show({
                type:'text',
                width:'50vw',
                text: '请填写密码！'
              })
              this.canLogin = true;
              return
            }
            //这里因为没有后台服务器，所以用前端验证账号密码，这个方式正常开发是错误的
            axios.get(`http://${this.getServerIp}/userList?userName=${userName}`)
              .then(res=>{
                if(res.data[0].password == password){
                  this.canLogin = true;
                  this.setIsLogin(true);
                  this.$router.push({path:this.getUnLoginPage});
                }
              })
              .catch(error=>{
                console.log(error)
                this.$vux.toast.show({
                  type:'text',
                  width:'50vw',
                  text: '账号密码错误！'
                });
                this.canLogin = true;
              })
          }
        }
      },
      computed:{
        ...mapGetters([
          'getServerIp','getUnLoginPage'
        ]),
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
          color:#e4393c;
        }
        p:nth-child(2){
          float:right;
          color:#999;
        }
      }
    }
  }
</style>
