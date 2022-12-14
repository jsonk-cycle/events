import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/global.less' // 全局初始化样式
import '@/elementUI' // 注册elementUI组件
// 在main.js中引入, 使其参与到webpack打包并在网页生效
Vue.config.productionTip = false






new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
