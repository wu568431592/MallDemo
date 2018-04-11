<template>
    <div class="myOrderNotSend">
      <orderList :dataList="dataList"></orderList>
    </div>
</template>

<script>
  import orderList from '../../../components/orderList/orderList.vue'
  import axios from 'axios'
  import { mapGetters } from 'vuex'
    export default {
      name:'myOrderNotSend',
      data(){
        return{
          dataList:''
        }
      },
      components: {
        orderList
      },
      mounted:function(){
        axios.get('http://'+this.getServerIp+'/orderList?orderStaus=1')
          .then(res =>{
            //console.log(res.data);
            this.dataList = res.data;
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
