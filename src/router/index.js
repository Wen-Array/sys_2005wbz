import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../pages/Login";

Vue.use(VueRouter);
import allRoutes from "./allRoutes"
const routes = [{
    path: "/login",
    component: Login
}];

const router = new VueRouter({
    routes
});

export default router;