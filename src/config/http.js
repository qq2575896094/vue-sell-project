/**
 * Created by qq2575896094 on 2017/10/11.
 */

import axios from 'axios'
import store from '../store/index'
import env from './env'

//发送请求前执行的操作
axios.interceptors.request.use((config) => {
  store.dispatch('LOADING_SHOW');
  return config;
}, (error) => {
  return Promise.reject(error);
});

//接收到请求之后执行的操作
axios.interceptors.response.use((res) => {
  if (res.data.returnCode === '000000') {
    return res.data.body;
  } else {
    return res.data;
  }

}, (error) => {
  return Promise.reject(error);
});

axios.defaults.timeout = 60 * 1000; //超时时间
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = env.baseUrl;

console.log(process.env);
export default axios;
