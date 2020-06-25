import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/reset.css'
import './assets/style/border.css'
import FastClick from 'fastclick'
import './assets/style/iconfont.css'

Vue.config.productionTip = false
FastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
