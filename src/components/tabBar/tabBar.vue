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
      <li v-bind:class="{active:active2}">
        <router-link to="/cart">
          <i class="icon iconfont icon-gouwuche "></i>
          <span>购物车</span>
        </router-link>
      </li>
      <li v-bind:class="{active:active3}">
        <router-link to="/userCenter">
          <i class="icon iconfont icon-wodejuhuasuan"></i>
          <span>我的</span>
        </router-link>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'tabbar',
  data () {
    return {
      active0 :false,
      active1 :false,
      active2 :false,
      active3 :false,
    }
  },
  props: ['activeBar'],
  methods:{
    activeBarFun:function(){
      var active = this.activeBar;
      switch (active){
        case '0' : this.active0 = true;break;
        case '1' : this.active1 = true;break;
        case '2' : this.active2 = true;break;
        case '3' : this.active3 = true;break;
      }
    }
  },
  mounted:function(){
    this.activeBarFun();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    div.tabbar{
      width:100%;
      height:9vh;
      box-shadow:0px 1px 20px 0px #666;
      ul{
        overflow: hidden;
        li{
          float:left;
          width:25%;
          padding:1vh 0px;
          i{
            display: block;
            margin: 0px auto;
            width:30px;
          }

          span{
            display: block;
            width:100%;
            text-align: center;
            color:#333;
            font-size:16px;
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
