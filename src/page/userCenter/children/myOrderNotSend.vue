<template>
    <div class="myOrderNotSend">
      <orderList></orderList>
    </div>
</template>

<script>
  import orderList from '../../../components/orderList/orderList.vue'
    export default {
      name:'myOrderNotSend',
      data(){
        return{

        }
      },
      components: {
        orderList
      },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
