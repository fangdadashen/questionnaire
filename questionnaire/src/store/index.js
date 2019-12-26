import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    SideChange:true,
    createid:'1',//为新建问卷功能传值
    listdata:[]//为首页列表传值
  },
  mutations: {
    ChangeSide(state,msg){
      state.SideChange=msg;
    },
    ChangeCreateId(state,id){
      state.createid=id+1;
    },
    HomeBaseData(state,listdata){
      state.listdata.push(listdata);
    }
  }
})
