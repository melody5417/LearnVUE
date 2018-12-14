// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import layout from './components/layout'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', /* 选择挂载点 */
  router,
  components: { layout },
  template: '<layout/>'
})
