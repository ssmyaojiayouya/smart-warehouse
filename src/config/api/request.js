import axios from 'axios'
const service = axios.create({
  baseURL: 'http://172.16.43.32:8088/', // 请求的地址
  timeout: 5000 // 访问超时的时间限制
})
export default service
