<template>
  <div class="tabbar">
    <ul>
      <li>
        <router-link to="/index">
          <i class="icon iconfont icon-shouye"></i>
          <span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/allProduct">
          <i class="icon iconfont icon-category"></i>
          <span>分类</span>
        </router-link>
      </li>
      <li>
        <router-link to="/cart">
          <i class="icon iconfont icon-gouwuche "></i>
          <span>购物车</span>
        </router-link>
      </li>
      <li>
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

    }
  },
  methods:{
    changeTab:function(e){
       console.log(e.target)
    }
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
