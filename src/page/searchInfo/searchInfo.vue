<template>
    <div class="searchInfo">
      <searchBox isBackBtn="true" :searchValue="info"></searchBox>
      <productListPage :listData="searchData"></productListPage>
    </div>
</template>

<script>
    import searchBox from  '../../components/searchBox/searchBox.vue'
    import productListPage from  '../../components/productListPage/productListPage.vue'
    import axios from 'axios'
    import { mapGetters } from 'vuex'
    export default {
      name:'searchInfo',
      data(){
        return{
          searchData:[],
        }
      },
      computed:{
        info:function(){
            return this.$route.query.info;
        },
        ...mapGetters([
          'getServerIp'
        ])
      },
      components:{searchBox,productListPage},
      beforeMount:function(){
        this.$emit('hideTabBar');
      },
      mounted:function(){
        axios.get('http://'+this.getServerIp+'/indexgoods')
          .then(response => {
            this.searchData = response.data;
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .searchBox{
    position:fixed;
    top:0px;
    left:0px;
    z-index: 100000;
  }
</style>
