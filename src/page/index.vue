<template>
  <!--<transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">-->
    <div class="index">
        <searchBox isBackBtn="false" isSearchButtonShow='message'></searchBox>
        <productListPage :listData="searchData"></productListPage>
    </div>
  <!--</transition>-->
</template>

<script>
  import tabBar from  '../components/tabBar/tabBar.vue'
  import searchBox from  '../components/searchBox/searchBox.vue'
  import productListPage from  '../components/productListPage/productListPage.vue'
  export default {
    name:'index',
    components:{tabBar,searchBox,productListPage},
    mounted:function(){
      //修正index 产品列表 被tabbar 遮挡的问题
      document.getElementsByClassName('productList')[0].childNodes[0].style.paddingBottom='56px';
    },
    beforeMount:function(){
      this.$emit('showTabBar');
    },
    data(){
        return{
          searchData:[
            {
              imgSrc:'//img10.360buyimg.com/N2/jfs/t11089/67/2744083331/68075/b567bf6/5a1d025aNc42009ef.jpg',
              proName:'360手机N5s,5.5寸,6G+32G超大内存',
              proPrice:'1599.00',
              pid:'00001'
            },
            {
              imgSrc:'//img10.360buyimg.com/N2/jfs/t15730/105/202027584/169344/acf8e6d1/5a2a423eN5addfeef.jpg',
              proName:'360手机N5s,5.5寸,6G+32G超大内存',
              proPrice:'15.00',
              pid:'00002'
            },
            {
              imgSrc:'//img14.360buyimg.com/N2/jfs/t3448/115/304606616/252246/a8e91519/58074aeaN63a3a8bb.jpg',
              proName:'360手机N6Pro,5.5寸,6G+32G超大内存',
              proPrice:'1399.00',
              pid:'00003'
            },
            {
              imgSrc:'//img12.360buyimg.com/N2/jfs/t15301/211/236290404/115390/93709168/5a27b7e0Ndbdb69bb.jpg',
              proName:'360手机N6,5.5寸,6G+32G超大内存',
              proPrice:'1977.00',
              pid:'00004'
            },
            {
              imgSrc:'//img13.360buyimg.com/N2/jfs/t12223/344/1996969893/22967/7dcac5cb/5a301ad7N4f43dd9d.jpg',
              proName:'360手机N5s,5.5寸,6G+32G超大内存',
              proPrice:'1744.00',
              pid:'00005'
            },
            {
              imgSrc:'//img12.360buyimg.com/N2/jfs/t15301/211/236290404/115390/93709168/5a27b7e0Ndbdb69bb.jpg',
              proName:'360手机N6,5.5寸,6G+32G超大内存',
              proPrice:'1977.00',
              pid:'00004'
            },
            {
              imgSrc:'//img12.360buyimg.com/N2/jfs/t15301/211/236290404/115390/93709168/5a27b7e0Ndbdb69bb.jpg',
              proName:'360手机N6,5.5寸,6G+32G超大内存',
              proPrice:'1977.00',
              pid:'00004'
            },
            {
              imgSrc:'//img12.360buyimg.com/N2/jfs/t15301/211/236290404/115390/93709168/5a27b7e0Ndbdb69bb.jpg',
              proName:'360手机N6,5.5寸,6G+32G超大内存',
              proPrice:'1977.00',
              pid:'00004'
            },
            {
              imgSrc:'//img12.360buyimg.com/N2/jfs/t15301/211/236290404/115390/93709168/5a27b7e0Ndbdb69bb.jpg',
              proName:'360手机N6,5.5寸,6G+32G超大内存',
              proPrice:'1977.00',
              pid:'00004'
            },
            {
              imgSrc:'//img12.360buyimg.com/N2/jfs/t15301/211/236290404/115390/93709168/5a27b7e0Ndbdb69bb.jpg',
              proName:'360手机N6,5.5寸,6G+32G超大内存',
              proPrice:'1977.00',
              pid:'00004'
            },
            {
              imgSrc:'//img12.360buyimg.com/N2/jfs/t15301/211/236290404/115390/93709168/5a27b7e0Ndbdb69bb.jpg',
              proName:'360手机N6,5.5寸,6G+32G超大内存',
              proPrice:'1977.00',
              pid:'00004'
            },
          ],
        }
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
    padding-bottom:55px;
  }
</style>
