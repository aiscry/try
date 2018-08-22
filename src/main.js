import Vue from 'vue'//引入vue.js文件
import VueResource from 'vue-resource'
import VurRouter from 'vue-router'
import Mint from 'mint-ui'
import '../node_modules/mint-ui/lib/style.min.css'
import './assets/css/cssreset.css'
import App from './App.vue'

Vue.use(VurRouter)
Vue.use(VueResource)
Vue.use(Mint)

import rou from './js/router.js'



new Vue({
  el: '#app',
  render: h => h(App),
  router:rou,
})
