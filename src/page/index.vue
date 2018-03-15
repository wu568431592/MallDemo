<template>
    <div class="index">
        <searchBox isBackBtn="false" isSearchButtonShow='message'></searchBox>
        <productListPage :listData="searchData"></productListPage>
    </div>
</template>

<script>
  import tabBar from  '../components/tabBar/tabBar.vue'
  import searchBox from  '../components/searchBox/searchBox.vue'
  import productListPage from  '../components/productListPage/productListPage.vue'
  import axios from 'axios'
  export default {
    name:'index',
    data(){
      return{
        searchData:[],
      }
    },
    components:{tabBar,searchBox,productListPage},
    mounted:function(){
      //修正index 产品列表 被tabbar 遮挡的问题
      document.getElementsByClassName('productList')[0].childNodes[0].style.paddingBottom='9vh';
      axios.get('http://'+this.$store.state.serverIP+'/server/indexgoods.json')
        .then(response => {
          //console.log(response.data);
          //console.log(this.searchData);
          //console.log(this)
//          for(var k in response.data){
//            this.searchData.push(response.data[k]);
//          }
          this.searchData = response.data;
          //this.searchData.push(response.data);
          console.log(this.searchData);
        })
        .catch(err => {
          console.log(err);
        });
    },
    beforeMount:function(){
      this.$emit('showTabBar');

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .tabbar{
    position:fixed;
    bottom:0px;
    left:0px;
  }
  .searchBox{
    position:fixed;
    top:0px;
    left:0px;
    z-index: 1000000;
  }
  .index{
    height:100vh;
  }
  .productList ul{
    padding-bottom:9vh;
  }
</style>
