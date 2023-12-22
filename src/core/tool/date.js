/* 时间处理 */
import I18n from '@/plug/i18n'

const $date = {
  // 格式化时间
  format (time, precision) {
    let _date = ''
    if (time) {
      if (['year', 'month', 'week', 'day', 'hours', 'minutes'].includes(time)) {
        precision = time
        _date = new Date()
      } else {
        _date = new Date(time)
      }
    } else {
      _date = new Date()
    }
    const year = _date.getFullYear()
    let month = _date.getMonth() + 1
    const week = _date.getDay()
    let date = _date.getDate()
    let hours = _date.getHours()
    let minutes = _date.getMinutes()
    let seconds = _date.getSeconds()
    month = month < 10 ? '0' + month : month
    date = date < 10 ? '0' + date : date
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    if (precision === 'year') {
      return `${year}`
    } else if (precision === 'month') {
      return `${year}-${month}`
    } else if (precision === 'week') {
      time = new Date(`${year}-${month}-${date} 00:00:00`).getTime() - week * 3600 * 1000 * 24
      return this.format(time, 'day')
    } else if (precision === 'day') {
      return `${year}-${month}-${date}`
    } else if (precision === 'hours') {
      return `${year}-${month}-${date} ${hours}`
    } else if (precision === 'minutes') {
      return `${year}-${month}-${date} ${hours}:${minutes}`
    } else {
      return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`
    }
  },
  // 获取第几周
  getWeek (time) {
    const year = new Date(time).getFullYear()
    const yearTime = new Date(`${year}-01-01 00:00:00`)
    const week = yearTime.getDay()
    const days = (new Date(this.format(time, 'day') + ' 00:00:00').getTime() - yearTime.getTime()) / (1000 * 3600 * 24)
    const weeks = Math.ceil((days + week) / 7)
    return weeks
  },
  // 获取时间长度，单位毫秒
  getTime (range) {
    let rangeString = ''
    let seconds = parseInt(range / 1000)
    if (seconds < 60) {
      rangeString += seconds + I18n.t('seconds')
    } else {
      let minutes = parseInt(seconds / 60)
      seconds = seconds % 60
      if (minutes < 60) {
        rangeString += minutes + I18n.t('minutes')
        if (seconds > 0) {
          rangeString += seconds + I18n.t('seconds')
        }
      } else {
        let hours = parseInt(minutes / 60)
        minutes = minutes % 60
        if (hours < 24) {
          rangeString += hours + I18n.t('hours')
          if (minutes > 0) {
            rangeString += minutes + I18n.t('minutes')
          }
          if (seconds > 0) {
            rangeString += seconds + I18n.t('seconds')
          }
        } else {
          const day = parseInt(hours / 24)
          hours = hours % 24
          rangeString += day + I18n.t('day')
          if (hours > 0) {
            rangeString += hours + I18n.t('hours')
          }
          if (minutes > 0) {
            rangeString += minutes + I18n.t('minutes')
          }
          if (seconds > 0) {
            rangeString += seconds + I18n.t('seconds')
          }
        }
      }
    }
    return rangeString
  }
}

export default $date
