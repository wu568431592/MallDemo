<template>
    <div class="searchInfo">
      <searchBox isBackBtn="true" :searchValue="info"></searchBox>
      <productListPage :listData="searchData"></productListPage>
    </div>
</template>

<script>
    import searchBox from  '../components/searchBox/searchBox.vue'
    import productListPage from  '../components/productListPage/productListPage.vue'
    export default {
      name:'searchInfo',
      data(){
        return{
          searchData:[

          ],
        }
      },
      computed:{
        info:function(){
            console.log( this.$route.query.info)
            return this.$route.query.info;
        }
      },
      components:{searchBox,productListPage},
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
