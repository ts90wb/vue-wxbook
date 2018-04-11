// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'assets/styles/reset.css'
import 'assets/styles/main.css'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title

    }
    next();
})