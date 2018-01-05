<template>
    <div class="searchInfo">

      {{info}}
    </div>
</template>

<script>
    export default {
      name:'searchInfo',
      data(){
        return{

        }
      },
      computed:{
        info:function(){
            console.log( this.$route.query.info)
            return this.$route.query.info;
        }
      },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
