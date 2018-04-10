<template>
    <div class="myOrderNotPay">
      <orderList></orderList>
    </div>
</template>

<script>
  import axios from 'axios'
  import { mapGetters } from 'vuex'
  import orderList from '../../../components/orderList/orderList.vue'
    export default {
      name:'myOrderNotPay',
      data(){
        return{

        }
      },
      components: {
        orderList
      },
      mounted:function(){
        axios.get('http://'+this.getServerIp+'/orderList?orderStaus=5')
          .then(res =>{
            console.log(res.data)
          })
          .catch(error =>{
            console.log(error)
          })
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

</style>
