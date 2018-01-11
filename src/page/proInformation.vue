<template>
    <div class="proInformation">
      <proInforHeaderBox></proInforHeaderBox>
      <div class="slider_box">
        <ul class="imgList">
          <li><img src="//img12.360buyimg.com/N1/s450x450_jfs/t16213/50/1477526973/71879/b04185c0/5a53174aN50a6e14c.jpg" alt=""></li>
          <li><img src="//img12.360buyimg.com/N1/s450x450_jfs/t16213/50/1477526973/71879/b04185c0/5a53174aN50a6e14c.jpg" alt=""></li>
          <li><img src="//img12.360buyimg.com/N1/s450x450_jfs/t16213/50/1477526973/71879/b04185c0/5a53174aN50a6e14c.jpg" alt=""></li>
        </ul>
        <ul class="dianList">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
</template>

<script>
  import proInforHeaderBox from '../components/proInforHeaderBox/proInforHeaderBox.vue'
    export default {
      name:'proInformation',
      data(){
          return{

          }
      },
      components:{proInforHeaderBox},
      beforeMount:function(){
        this.$emit('hideTabBar');
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .proInforHeaderBox{
    position:fixed;
    top:0px;
    left:0px;
    z-index: 100000;
    width:100%;
  }
  .proInformation{
    margin-top:7.5vh;
    overflow-y: scroll;
    height:92.5vh;
    .slider_box{
      width:100%;
      overflow: hidden;
      ul.imgList{
        position: relative;
        overflow: hidden;
        li{
          width:100vw;
          height:100vw;
          padding:5vw;
          img{
            width:100%;
          }
        }
      }
    }
  }
</style>
