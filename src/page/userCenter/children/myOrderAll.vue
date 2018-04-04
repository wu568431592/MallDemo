<template>
    <div class="myOrderAll">
      <orderList></orderList>
    </div>
</template>

<script>
  import orderList from '../../../components/orderList/orderList.vue'
  export default {
    name:'myOrderAll',
    data(){
      return{

      }
    },
    components: {
      orderList
    },
    methods:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
