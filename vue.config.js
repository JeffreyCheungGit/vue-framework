// 修改配置后，重启应用生效
module.exports = {
  devServer: {
    host: 'localhost',
    port: 80,
    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:8081/',
        changeOrigin: true,
        ws: true
      },
      '^/gateway/api': {
        target: 'http://127.0.0.1:8080/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '/gateway': '/'
        }
      }
    }
  },
  productionSourceMap: false,
  lintOnSave: 'error'
}
