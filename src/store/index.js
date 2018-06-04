import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'
import index from './modules/index.js'
Vue.use(Vuex)

const state = {
    isLoading: false,
}
export default new Vuex.Store({
  modules: {
    index,
  },
  state,
  mutations: {
      updateLoadingStatus (state, payload) {
          state.isLoading = payload.isLoading
      },
  },
})
