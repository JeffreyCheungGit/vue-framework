import Vue from 'vue'
import App from '@/App.vue'
import plug from '@/plug'
import core from '@/core'

new Vue({
  ...plug,
  ...core,
  render: h => h(App)
}).$mount('#app')
