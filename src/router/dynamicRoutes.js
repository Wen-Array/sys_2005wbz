const dynamicRoutes = [{
    path: '*',
    component: () =>
        import ( /* webpackChunkName: "page404" */ "../pages/Page404"),
}, {
    path: "/",
    component: "Home",
    children: []
}]