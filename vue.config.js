const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'style': path.resolve(__dirname, 'src/assets/styles')
      }
    }
  },
  devServer: {
    // port: 8081,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8081',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/mock'
    //     }
    //   }
    // }
  },
  css: {
    // loaderOptions: {
    //   css: {},
    //   postcss: {
    //     plugins: [
    //       require('postcss-px2rem')({
    //         remUnit: 75
    //       })
    //     ]
    //   }
    // }
  }
}