/* 对象处理 */

const $object = {
  // 深层次合并对象
  deep (obj1, obj2) {
    for (var key in obj2) {
      obj1[key] = obj1[key] && Object.prototype.toString.call(obj1[key]) === '[object Object]' ? this.deep(obj1[key], obj2[key]) : obj2[key]
    }
    return obj1
  }
}

export default $object
