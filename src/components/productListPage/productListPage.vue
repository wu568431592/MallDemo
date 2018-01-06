<template>
    <div class="productListPage">
      <div class="sortBox">
        <ul>
          <li :class="{active:allSortActive}" @click="allSortDo">综合</li>
          <li :class="{active:priceSortActive}" @click="priceSortDo">
            <span>价格</span>
            <i class="icon iconfont icon-topdown" v-show="upDownShow" ></i>
            <i class="icon iconfont icon-less"  v-show="!upDownShow && upDown %2 == 0"></i>
            <i class="icon iconfont icon-moreunfold" v-show="!upDownShow && upDown %2 == 1"></i>
          </li>
        </ul>
        <div class="viewChange" @click="changeView">
          <i class="icon iconfont icon-viewgallery" v-show="viewChage"></i>
          <i class="icon iconfont icon-viewlist" v-show="!viewChage"></i>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name:'productListPage',
      data(){
        return{
          viewChage:true,
          upDownShow:true,
          upDown:0,
          allSortActive:true,
          priceSortActive:false
        }
      },
      methods:{
        changeView:function(){
            this.viewChage = !this.viewChage;
        },
        allSortDo:function(){
          this.allSortActive=true;
          this.priceSortActive=false;
          this.upDownShow = true;
        },
        priceSortDo:function(){
          this.allSortActive=false;
          this.priceSortActive=true;
          this.upDownShow = false;
          this.upDown++;
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .productListPage{
    padding:1vh 0px;
    border-bottom:1px solid #eee;
    .sortBox{
      background-color: #fff;
      padding:0px 10px;
      overflow: hidden;
      ul{
        float:left;
        overflow: hidden;
        li{
          float:left;
          height:5vh;
          line-height:5vh;
          padding:0px 2vw;
          overflow: hidden;
          font-size:14px;
          span{
            float:left;
          }
          i.iconfont{
            font-size:20px;
            float:left;
          }
          i.iconfont.icon-less,i.iconfont.icon-moreunfold{
            color: #e4393c;
          }
        }
        li.active{
          color:#e4393c;
        }
      }
      .viewChange{
        float:right;
        i.iconfont{
          font-size: 24px;
          color:#e4393c;
        }
      }
    }
  }
</style>
