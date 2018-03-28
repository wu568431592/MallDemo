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
  import { mapGetters } from 'vuex'
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
      axios.get('http://'+this.getServerIp+'/server/indexgoods.json')
        .then(response => {
          this.searchData = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    beforeMount:function(){
      this.$emit('showTabBar');
    },
    updated:function(){
      document.getElementsByClassName('productList')[0].childNodes[0].style.paddingBottom='9vh';
    },
    computed:{
      ...mapGetters([
          'getServerIp'
      ])
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
