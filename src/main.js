import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/styles/base.css"
import "@/assets/styles/el-reset.css"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);

//按需引入

// import { Carousel, CarouselItem } from "element-ui"

//注册到全局
// Vue.component('el-carousel', Carousel)
// Vue.component('el-carousel-item', CarouselItem)

//路由前置钩子(导航守卫)
router.beforeEach((to, from, next) => {
    //用户登入后，localstorage中有token
    let token = localStorage.getItem('wf-token');
    if (token) {
        //如果是注册页面或者是登入页面，直接放行；
        next()
    } else {
        if (to.path === '/login') {
            next()
        } else { //访问的不是登录页面直接跳转到登录页
            next({ path: "/login" })
        }
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");