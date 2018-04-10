<template>
    <div class="myOrderSending">
      <orderList></orderList>
    </div>
</template>

<script>
    import orderList from '../../../components/orderList/orderList.vue'
    import axios from 'axios'
    import { mapGetters } from 'vuex'
    export default {
      name:'myOrderSending',
      data(){
        return{

        }
      },
      components: {
        orderList
      },
      mounted:function(){
        axios.get('http://'+this.getServerIp+'/orderList?orderStaus=3')
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
