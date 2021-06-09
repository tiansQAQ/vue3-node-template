const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {

  publicPath: '/',
  outputDir: 'dist', // 生产环境构建文件的目录
  assetsDir: 'static', //  outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: false,
  productionSourceMap: false, // 如果不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。

  // 跨域配置
  devServer: {
    disableHostCheck: true,
    proxy: {
      // /api如果网络请求中有这个字符串，那么就开始匹配代理
      '/api': {
        target: 'http://xx.xxx.com', // 指向开发环境 API 服务器
        changeOrigin: true, //  如果设置成true,发送请求头中host会设置成target
        ws: true, // 开启webSocket
        // 重写路径,替换成target中已/api开头的地址为空字符串,根据业务进行修改
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    hot: true, // 设置为true的时候，如果编译报错，会抛出错误。重新改成正确的，又会触发重新编译，整个浏览器会重新刷新！
    port: 8999, // 端口号
    open: true, // 启动后打开浏览器
    // 当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
    overlay: {
      warnings: true,
      errors: true
    }
  },
  chainWebpack: config => {
    // 别名 alias
    config.resolve.alias
      .set('@', resolve('src'))

    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])
    config.plugins.delete('prefetch')

    config.when(process.env.NODE_ENV !== 'development', config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            // 将 runtime 作为内联引入不单独存在
            inline: /runtime\..*\.js$/
          }
        ])
        .end()
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          // cacheGroups 下可以可以配置多个组，每个组根据test设置条件，符合test条件的模块
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'),
            minChunks: 3, //  被至少用三次以上打包分离
            priority: 5, // 优先级
            reuseExistingChunk: true // 表示是否使用已有的 chunk，如果为 true 则表示如果当前的 chunk 包含的模块已经被抽取出去了，那么将不会重新生成新的。
          },
          node_vendors: {
            name: 'chunk-libs',
            chunks: 'initial', // 只打包初始时依赖的第三方
            test: /[\\/]node_modules[\\/]/,
            priority: 10
          },
          vantUI: {
            name: 'chunk-vantUI', // 单独将 vantUI 拆包
            priority: 20, // 数字大权重到，满足多个 cacheGroups 的条件时候分到权重高的
            test: /[\\/]node_modules[\\/]_?vant(.*)/
          }
        }
      })
      config.optimization.runtimeChunk('single')
    })
  }
}
