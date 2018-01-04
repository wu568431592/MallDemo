/**
 * Created by sks on 2017/6/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
var state;
state ={

}

const mutations ={
  go:function(state,options){
    options[0].push({path:'/'+options[1]});
  }
}
const getters = {
  //getSearchDetails:function(){
    //var details;
    //var xmlhttp =new XMLHttpRequest();
    //xmlhttp.onreadystatechange =function(){
      //if( xmlhttp.readyState==4 && xmlhttp.status==200 ){
        //details = eval('('+xmlhttp.responseText+')');
      //}else{
        //details = {}
      //}
    //}
    //xmlhttp.open('GET','http://'+state.serverIP+'/json/searchDetails.php',false);
    //xmlhttp.send();
    //return details
    //var details
    // axios.get('http://192.168.78.65/json/searchDetails.php')
    //   .then(function (response) {
    //     //console.log(response.data);
    //     details = response.data
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // console.log(details)
    // return details
  //},
}
const store = new Vuex.Store({
  state,
  mutations,
  getters
}) // 这里你可能已经有其他 module


export default {
  store
}


