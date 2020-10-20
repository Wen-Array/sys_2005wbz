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

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");