import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

Vue.prototype.bus = new Vue();//bus总线传递数据
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
