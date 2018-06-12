import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'
import index from './modules/index.js'

Vue.use(Vuex)

const state = {
    isLoading: false,
    openName:'m1',
    activeName:'m11',
    showExplain:true
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
      updateActiveNames(state,payload){
          state.activeName = payload;
      },
      updateActiveItem(state,payload){
          state.openName = payload;
          console.log(payload)
      },
      updateExplainStatus(state,payload){
          state.showExplain = payload
      }

  },
})
