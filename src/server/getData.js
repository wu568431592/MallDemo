/**
 * Created by sks on 2018/4/13.
 */
//import axios from 'axios'
import store from '../store/index'

export const getUserInfo = () => {
  const serverIp = store.getters.getServerIp;
  console.log(store)
  console.log(serverIp)
  //console.log(axios);
  //console.log(store);
  //axios.get('http://')
};
