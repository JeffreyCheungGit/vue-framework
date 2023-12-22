/* 数据处理 */
import i18n from '@/plug/i18n'

const $data = {
  // 国际化语言显示
  i18n (label, local) {
    label = label.toLowerCase()
    if (local) {
      return i18n.te(label) ? i18n.t(label, local) : label
    } else {
      return i18n.te(label) ? i18n.t(label) : label
    }
  }
}

export default $data
