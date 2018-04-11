<template>
    <div class="myOrderAll">
      <orderList :dataList="dataList"></orderList>
    </div>
</template>

<script>
  import axios from 'axios'
  import orderList from '../../../components/orderList/orderList.vue'
  import { mapGetters } from 'vuex'
  export default {
    name:'myOrderAll',
    data(){
      return{
        dataList:''
      }
    },
    components: {
      orderList
    },
    methods:{

    },
    mounted:function(){
      axios.get('http://'+this.getServerIp+'/orderList')
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
