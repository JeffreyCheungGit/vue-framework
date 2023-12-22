import Vue from 'vue'
import VueI18n from 'vue-i18n'
// 引入基础语言包
import basis from '@/plug/i18n/config/basis'
import number from '@/plug/i18n/config/number'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh_cn', // 默认语言中文
  messages: {}
})

/* 合并语言包 */
i18n.mergeLocaleMessage('zh_cn', basis.zh_cn)
i18n.mergeLocaleMessage('zh_cn', number.zh_cn)

i18n.mergeLocaleMessage('en', basis.en)
i18n.mergeLocaleMessage('en', number.en)

export default i18n
