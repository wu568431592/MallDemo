<template>
  <div class="tabbar">
    <ul>
      <li v-bind:class="{active:active0}">
        <router-link to="/index">
          <i class="icon iconfont icon-shouye"></i>
          <span>首页</span>
        </router-link>
      </li>
      <li v-bind:class="{active:active1}">
        <router-link to="/allProduct">
          <i class="icon iconfont icon-category"></i>
          <span>分类</span>
        </router-link>
      </li>
      <li v-bind:class="{active:active2}" @click="goCart">
          <i class="icon iconfont icon-gouwuche "></i>
          <span>购物车</span>
      </li>
      <li v-bind:class="{active:active3}" @click="goUserCenter">
          <i class="icon iconfont icon-wodejuhuasuan"></i>
          <span>我的</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters,mapMutations } from 'vuex'
  import { TransferDomDirective as TransferDom } from 'vux'
  export default {
    name: 'tabbar',
    data () {
      return {
        active0 :true,
        active1 :false,
        active2 :false,
        active3 :false,
      }
    },
    directives: {
      TransferDom
    },
    methods:{
      ...mapMutations([
        'setUnLoginPage'
      ]),
      goCart:function(){
        if(this.isLogin){
            this.$router.push({path:'/cart'})
        }else{
            this.setUnLoginPage('/cart')
            this.showPlugin();
        }
      },
      goUserCenter:function(){
        if(this.isLogin){
          this.$router.push({path:'/userCenter'})
        }else{
          this.setUnLoginPage('/userCenter')
          this.showPlugin();
        }
      },
      showPlugin () {
        let that = this;
        this.$vux.confirm.show({
          title: '提示',
          content: '您还没有登录，请先登录哈~',
          onShow () {
            //console.log('plugin show')
          },
          onHide () {
            //console.log('plugin hide')
          },
          onCancel () {
            //console.log('plugin cancel')
          },
          onConfirm () {
            that.$router.push({path:'login'})
          }
        })
      },
    },
    mounted:function(){

    },
    computed:{
      ...mapGetters([
        'isLogin'
      ]),
    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        switch (to.fullPath){
          case '/index' : this.active0 = true;this.active1 = false;this.active2 = false;this.active3 = false;break;
          case '/allProduct' : this.active1 = true;this.active0 = false;this.active2 = false;this.active3 = false;break;
          case '/cart' : this.active2 = true;this.active1 = false;this.active0 = false;this.active3 = false;break;
          case '/userCenter' : this.active3 = true;this.active1 = false;this.active2 = false;this.active0 = false;break;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    div.tabbar{
      background-color: #fff;
      width:100%;
      height:9vh;
      box-shadow:0px 1px 10px 0px #666;
      ul{
        overflow: hidden;
        li{
          float:left;
          width:25%;
          padding:0px 0px;
          height:9vh;
          i{
            display: block;
            margin: 0px auto;
            margin-top:1vh;
            width:25px;
            font-size:25px;
          }
          span{
            display: block;
            width:100%;
            text-align: center;
            color:#333;
            font-size:14px;
          }
        }
        li.active{
          i.icon.iconfont{
            color:#e4393c;
          }
          span{
            color:#e4393c;
          }
        }
      }
    }
</style>
