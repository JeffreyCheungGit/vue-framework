import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {
    oppState (state, key) { // 设置布尔值的相反值（字符串-键）
      if (typeof state[key] === 'boolean') {
        state[key] = !state[key]
      }
    },
    setState (state, data) { // 设置批量数据（对象-键值对）
      for (var key in data) {
        state[key] = data[key]
      }
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    persistedState({
      storage: window.sessionStorage
    })
  ]
})
