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
      <div class="productList">
        <ul :class="{'listView':islistView}">
          <li v-for="v in nowList">
            <router-link to="/index">
              <div class="img_box">
                <img :src="v.imgSrc" alt="">
              </div>
              <h4>{{v.proName}}</h4>
              <p>&yen;{{v.proPrice}} <i class="icon iconfont icon-add"></i></p>
            </router-link>
          </li>
        </ul>
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
          priceSortActive:false,
          nowList:this.listData,
          islistView:false
        }
      },
      props:['listData'],
      methods:{
        changeView:function(){
          this.viewChage = !this.viewChage;
          this.islistView = !this.islistView;
        },
        allSortDo:function(){
          this.allSortActive=true;
          this.priceSortActive=false;
          this.upDownShow = true;
          this.nowList = sortByKey(this.nowList,'pid')
          function sortByKey(array, key) {
            return array.sort(function(a, b) {
              var x = a[key]; var y = b[key];
              return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
          }
        },
        priceSortDo:function(){
          this.allSortActive=false;
          this.priceSortActive=true;
          this.upDownShow = false;
          this.upDown++;
          if(this.upDown %2 == 0){
            this.nowList = sortByKey(this.nowList,'proPrice')
          }else{
            this.nowList = sortByKey(this.nowList,'proPrice').reverse();
          }
          function sortByKey(array, key) {
            return array.sort(function(a, b) {
              var x = parseInt(a[key]); var y = parseInt(b[key]);
              return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
          }
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .productListPage{
    position:relative;
    .sortBox{
      position:fixed;
      top:7.5vh;
      left:0px;
      width:100%;
      background-color: #fff;
      border-bottom:1px solid #eee;
      padding:0px 10px;
      overflow: hidden;
      ul{
        float:left;
        overflow: hidden;
        li{
          float:left;
          height:7vh;
          line-height:7vh;
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
        height: 7vh;
        line-height: 7vh;
        i.iconfont{
          font-size: 24px;
          color:#e4393c;
        }
      }
    }
    .productList{
      margin-top: 14.5vh;
      height:85.5vh;
      overflow-y: scroll;
      background:#fff;
      ul{
        overflow: hidden;
        li{
          float:left;
          width:50%;
          border-bottom:1px solid  #eee;
          border-right:1px solid #eee;
          div.img_box{
            width:100px;
            height:100px;
            margin:10px auto;
            overflow: hidden;
            img{
              width:100%;
            }
          }
          h4{
            padding:0px 10px;
            height:8vh;
            line-height: 4vh;
            overflow: hidden;
            font-size: 12px;
            margin-bottom:1vh;
          }
          p{
            padding:0px 10px;
            overflow: hidden;
            color:#e4393c;
            height:4vh;
            line-height: 4vh;
            margin-bottom:1vh;
            i.iconfont{
              float:right;
              font-size:20px;
              color:#e4393c;
            }
          }
        }
        li:nth-child(even){
          border-right:none;
        }
      }
      ul.listView{
        li{
          overflow: hidden;
          width:100%;
          padding:10px;
          border-right:none;
          div.img_box{
            float:left;
            width:80px;
            height:80px;
            margin:0px;
            img{
              margin:0px;
            }
          }
        }
      }
    }
  }
</style>
