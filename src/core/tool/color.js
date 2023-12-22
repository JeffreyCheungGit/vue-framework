/* 颜色 */

const $color = {
  // 颜色自定义配置
  config: ['#e35c80', '#5ce39f', '#dce358', '#5ae1e3', '#98e35a', '#e38b58', '#569ae3', '#e357dc', '#e35a5c', '#5656e3', '#9257e3', '#5ee35e', '#a14041', '#3e9a6a', '#9c3c97', '#989d3d', '#3b3b9d', '#9d3f58', '#3d9a9a', '#653c9d', '#3d943d', '#3c6c9f', '#67983c', '#9d603d'],
  // 十六进制颜色元素
  colorHex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'],
  // 随机颜色
  random () {
    const color = [0, 0, 0, 0, 0, 0]
    return '#' + color.map(() => {
      return this.colorHex[(Math.random() * 15).toFixed()]
    }).join('')
  },
  // 从自定义配置中选取,通过下标获取，一般按顺序获取以获得稳定的颜色
  choose (index) {
    index = index === undefined ? (Math.random() * (this.config.length - 1)).toFixed() : index
    return this.config[index] || this.config[(Math.random() * (this.config.length - 1)).toFixed()]
  }
}

export default $color
