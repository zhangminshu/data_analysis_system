// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import store from './store';
import echarts from 'echarts'
import 'iview/dist/styles/iview.css';    // 使用 CSS
Vue.use(iView);
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
