import axios from "axios";
import baseUrl from "@/api/baseUrl";//使用环境变量 + 模式的方式定义基础URL

//创建axios实例
const request = axios.create({
    baseURL:baseUrl,
    timeout:60000,//请求超过时间
})

export default request