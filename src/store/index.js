import Vue from 'vue'
import Vuex from 'vuex'

import index from './modules/index.js'
Vue.use(Vuex)

const state = {
  isIndex: false
}
export default new Vuex.Store({
  modules: {
    index,
  },
  state,
  mutations: {
    updateIsIndex(state,payload){
      state.isIndex = payload
    }
  },
})
