import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    SideChange:true,
  },
  mutations: {
    ChangeSide(state,msg){
      state.SideChange=msg;
    }
  },
  actions: {
  },
  modules: {
  }
})
