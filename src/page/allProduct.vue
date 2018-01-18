<template>
  <!--<transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">-->
    <div class="allProduct">
      <searchBox isBackBtn="empty" isSearchButtonShow='message'></searchBox>
      <div class="allProductMain">
        <div class="typeList">
          <ul>
            <li class="typeListItem" v-for="(i,index) in typeList" :data-listNum = "index" @click="changeType($event,index)">{{i}}</li>
          </ul>
        </div>
        <div class="typeMainBox">
          <div class="typeMain" v-for="(j,index) in typeList" :data-listNum = "index">
            <div class="imgBox">
              <img src="//img.i360mall.com/0d15436c-8579-4e78-a6a3-2a9310f4047b.jpg" alt="">
            </div>
            <div class="product" v-for="i in 3">
              <p>分类{{index}}.{{i}}<router-link to="searchInfo?info=" class="gowhere">查看更多<span>&gt;&gt;</span></router-link></p>
              <ul>
                <li v-for="n in 6">
                  <div class="imgBox">
                    <img src="//img10.360buyimg.com/N2/jfs/t11089/67/2744083331/68075/b567bf6/5a1d025aNc42009ef.jpg" alt="">
                  </div>
                  <p>手机名称{{i}}.{{n}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import searchBox from  '../components/searchBox/searchBox.vue'
     export default {
      name:'allProduct',
      components:{searchBox},
      data(){
        return{
          typeList:['推荐','男装','鞋包','服饰','手机','美食','电器','母婴','家纺','百货','美妆','运动','水果','海淘','充值','热门']
        }
      },
      beforeMount:function(){
         this.$emit('showTabBar');
      },
       mounted:function(){
         document.getElementsByClassName('typeListItem')[0].setAttribute('class','typeListItem active')
       },
       methods:{
         changeType:function(e,index){
           var me = e.target;
           var lis = document.getElementsByClassName('typeListItem');
           var mains = document.getElementsByClassName('typeMain');
           for(var i = 0; i<lis.length;i++){
               lis[i].setAttribute('class','typeListItem');
           }
           for(var j = 0; j<mains.length;j++){
               mains[j].style.display = 'none';
               mains[j].scrollTop = 0;
             if(mains[j].getAttribute('data-listnum') == index){
                mains[j].style.display = 'block'
             }
           }
            me.setAttribute('class','typeListItem active');
         }
       }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .searchBox{
    position:fixed;
    left:0px;
    top:0px;
    width:100%;
  }
  .allProduct{
    height:100vh;
    .allProductMain{
      height:92.5vh;
      margin-top:7.5vh;
      padding-bottom:55px;
      overflow: hidden;
      .typeList{
        float:left;
        width:20%;
        height:100%;
        ul{
          height:100%;
          overflow-y:scroll;
          li{
            line-height: 7vh;
            height: 7vh;
            text-align: center;
            border-bottom: 1px solid #eee;
          }
          li.active{
            color:#e4393c;
          }
        }
      }
      .typeMainBox{
        float:left;
        width:80%;
        height:100%;
        .typeMain{
          display: none;
          overflow-y: scroll;
          height:100%;
          .imgBox{
            padding:10px 10px;
            img{
              width:100%;
            }
          }
          .product{
            border-top:1px solid #eee;
            padding:0px 10px;
            >p{
              line-height: 5vh;
              overflow: hidden;
              font-size: 4.5vw;
              height:5vh;
              .gowhere{
                float:right;
                color:#e4393c;
                span{
                  font-family: '宋体';
                }
              }
            }
            ul{
              overflow: hidden;
              li{
                width:33.333333%;
                float:left;
                p{
                  padding:0px 5px;
                  text-align: center;
                  height:5vh;
                  overflow: hidden;
                  line-height: 5vh;
                }
              }
            }
          }
        }
        .typeMain:first-child{
          display: block;
        }
      }

    }
  }
</style>
