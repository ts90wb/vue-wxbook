import Vue from "vue";
import Router from "vue-router";
import Cart from "page/Cart";
import Home from "page/Home";
import Self from "page/Self";
import Category from "page/Category";
import Login from "page/Login";
import BookDetail from "page/BookDetail";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/home",
            name: "Home",
            component: Home,
            meta: { title: "首页" }
        },
        {
            path: "/category",
            name: "Category",
            component: Category,
            meta: { title: "分类" }
        },
        {
            path: "/cart",
            name: "Cart",
            component: Cart,
            meta: {
                title: "购物车",
                requireAuth: true
            }
        },
        {
            path: "/self",
            name: "Self",
            component: Self,
            meta: {
                title: "个人",
                requireAuth: true
            }
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
            meta: {
                title: "登录",
            }
        },
        {
            path: "/books/:id",
            name: "BookDetail",
            component: BookDetail,
            meta: { title: "详情页" }
        },
        {
            path: "*",
            redirect: "/home",
            meta: { title: "首页" }
        }
    ],
    linkActiveClass: "active"
});