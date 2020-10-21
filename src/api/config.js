import axios from "axios";
import router from "../router"

import ElementUI from 'element-ui';

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? "api" : "http://www.chst.vip"

axios.defaults.withCredentials = true; //允许请求携带认证

//创建请求拦截器，可以给每个请求都携带上想要传递的内容
axios.interceptors.request.use(config => {
    let token = localStorage.getItem('wf-token')
        //config是每个请求的对象
    config.headers['authorization'] = token;
    //放行
    return config;

})

//响应拦截
axios.interceptors.response.use(config => {
    let { data } = config;
    if (data.code == '1004' || data.code == '10022') {
        //code的1004的代表校验失败，提示错误，并且让页面跳转到登录页
        ElementUI.Message.error("登录信息失效，请重新登陆")
        router.push("/login")
    }
    return config;
})

axios.create({
    timeout: 4000
})

export default axios;