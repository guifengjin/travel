import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import fastClick from 'fastclick'
import 'style/reset.css'
import 'style/border.css' // 解决移动端1像素问题
import 'style/iconfont/iconfont.css'

Vue.config.productionTip = false

fastClick.attach(document.body) // 添加fastClick

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
