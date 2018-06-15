// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App'
import router from './router'
import iView from 'iview';
import store from './store';
import echarts from 'echarts'
import API from './api/index.js';
import 'iview/dist/styles/iview.css';    // 使用 CSS
Vue.use(iView);
sync(store, router)
Vue.prototype.$echarts = echarts;
Vue.prototype.API = API;

Vue.config.productionTip = false


router.beforeEach(function (to, from, next) {

    if ('-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style) {
        window.addEventListener("hashchange", function(event) {
            var currentPath = window.location.hash.slice(1);
            if (store.state.route.path !== currentPath) {
                router.push(currentPath)
            }
        }, false)
    }

    next()
})


new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
