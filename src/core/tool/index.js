/* 工具包集成 */
import data from '@/core/tool/data.js'
import object from '@/core/tool/object.js'
import color from '@/core/tool/color.js'
import date from '@/core/tool/date.js'

const tool = {
  data,
  object,
  color,
  date
}

export default {
  install (Vue, options) {
    Vue.prototype.$tool = tool
  }
}
