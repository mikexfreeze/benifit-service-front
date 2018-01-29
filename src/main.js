// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css/normalize.css' // normalize.css 样式格式化
import 'element-ui/lib/theme-chalk/index.css' // element默认样式
import '@/assets/css/common.scss' // 全局自定义样式
import '@/assets/css/reset.css' // 全局自定义样式
import '@/assets/js/ydui.flexible.js' // rem

/* eslint-disable no-new */
import '@/assets/iconfont/iconfont'; // iconfont
import SetUserId from '@/utils/setUserId'

import Vue from 'vue'
import App from './App'
import router from './router/router'
import ElementUI from 'element-ui'
import store from '@/store/store'

Vue.use(ElementUI)
Vue.use(require('vue-moment'));
Vue.prototype.stopProp = function (e) {
  e.preventDefault()
  e.stopPropagation()
}
Vue.prototype.setUserLocal = SetUserId

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
