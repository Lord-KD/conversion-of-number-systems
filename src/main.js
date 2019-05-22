import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import anime from 'animejs'
import animate from 'animate.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false;
Vue.prototype.$anime = anime

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
