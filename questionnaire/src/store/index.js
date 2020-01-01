import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    SideChange:true,//控制首页图标显现
    createid:'1',//为新建问卷功能传值
    listdata:JSON.parse(localStorage.getItem('homelist'))||[],//为首页列表传值
    saveorno:false,//问卷保存与否
  },
  mutations: {
    ChangeSide(state,msg){
      state.SideChange=msg;
    },
    ChangeCreateId(state,id){
      state.createid=id+1;
    },
    HomeBaseData(state,obj){
      state.listdata.splice(obj.id,1,obj.data);
      localStorage.setItem('homelist',JSON.stringify(state.listdata));
      state.listdata=JSON.parse(localStorage.getItem('homelist'));
    },
    HomeListChange(state,newlist){
      localStorage.setItem('homelist',JSON.stringify(newlist));
      state.listdata=JSON.parse(localStorage.getItem('homelist'));
    }
  }
})