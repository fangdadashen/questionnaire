import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'
import store from './store'
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.prototype.bus = new Vue();//bus总线传递数据
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
