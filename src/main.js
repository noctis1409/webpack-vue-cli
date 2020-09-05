import Vue from 'vue'
import router from './router/index.js'
import store from './store/index.js'
import App from './App.vue'
import './assets/css/style.css'

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
