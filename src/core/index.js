// 应用核心代码集成
import Vue from 'vue'
import init from '@/core/init'
import tool from '@/core/tool'
import style from '@/core/style'

Vue.use(tool)

export default {
  init,
  tool,
  style
}
