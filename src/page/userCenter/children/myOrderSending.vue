<template>
    <div class="myOrderSending">
      <orderList></orderList>
    </div>
</template>

<script>
  import orderList from '../../../components/orderList/orderList.vue'
    export default {
      name:'myOrderSending',
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
