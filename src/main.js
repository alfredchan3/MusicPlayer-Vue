import Vue from 'vue'
import App from './App.vue'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

fastclick.attach(document.body)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
