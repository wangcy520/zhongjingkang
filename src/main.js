import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import commonJS from '@/utils/common.js'
Vue.prototype.Base64 = require('js-base64').Base64;


import './permission' // permission control

Vue.config.productionTip = false
Vue.prototype.commonJS = commonJS

//引入elementUi样式
Vue.use(ElementUI, {
  size: "small"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
