import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../plugins/element.js'

import './assets/css/global.css'
// 需要引用样式
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
