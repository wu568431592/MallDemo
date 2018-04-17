/**
 * Created by sks on 2018/4/13.
 */
import axios from 'axios'
import store from '../store/index'

export const getUserInfo = (userName) => {
  const serverIp = store.getters.getServerIp;
  return new Promise((resolve,reject)=>{
    axios.get(`http://${serverIp}/userInforList?userName=${userName}`)
      .then(res =>{
        resolve(res.data)
      })
      .catch(err =>{
        reject(err)
      })
  }).then(res=>{
    return res
  }).catch(err=>{
      console.log(err)
  })

  //axios.get('http://')
};
