import Vue from 'vue'
import iView from 'iview';
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import api from '@/api'
import * as util from '@/utils'
import { AlertPlugin , ConfirmPlugin, ToastPlugin,WechatPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)
Vue.use(WechatPlugin)
Vue.use(iView);
sync(store, router)

//FastClick.attach(document.body)

Vue.config.productionTip = false

// ;(function(){
//   const html = document.querySelector('html')
//   const htmlWidth = window.innerWidth
//   html.style.fontSize = htmlWidth / (750 / 100) + 'px'
// })()


router.beforeEach(function (to, from, next) {
  // document.title = to.meta.title ='银之守墓人'

  // api.share().then((res) => {
  //   util.initWX(res.data.data);
  // });



  // if(to.name === 'video'){
  //   store.commit('updateIsVideo', true)
  // }else{
  //   store.commit('updateIsVideo', false)
  // }


  next()

})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
