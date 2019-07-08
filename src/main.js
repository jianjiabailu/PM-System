import Vue from 'vue'
import Router  from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import routes from './router'

Vue.use(Router)
Vue.use(VueResource)

Vue.config.productionTip = false

// 全局注册所有公用组件
require('./components/_global.js')

new Vue({
	router: new Router({routes: routes}),
  render: h => h(App),
}).$mount('#app')
