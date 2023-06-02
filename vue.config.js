// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave:false
// })

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000', // 跨域請求的目標伺服器
                changeOrigin: true, // 啟用跨域
                pathRewrite: {
                    '^/api': '' // 重寫請求的URL，將/api移除
                }
            }
        }
    }
}
