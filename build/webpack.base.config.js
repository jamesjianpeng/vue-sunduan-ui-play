const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const resolve = function(dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = {
  target: 'web',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'), // 控制 index.html 资源目录的初始位置
    filename: '[name].js',
    publicPath: 'static' // 资源的访问路径，部署到生产环境下不同的服务器中 需要配置一下
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        include: [resolve('src'), resolve('test')],
        use: [
          {
            loader: "eslint-loader"
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        include: [resolve('src'), resolve('test')],
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'vue-sunduan-selet',
      filename: 'index.html'
    })
  ]
}

module.exports = webpackConfig

/**
 *
 * 1. target 打包之后代码将要运行的环境
 *
 * 2. entry 代码的入口
 *   - 支持的格式 String | Object | Array
 *
 * 3. output 代码输出的配置
 *   - path 代码输出之后的路径
 *   - filename 打包对应的文件名
 *   - publicPath 代码打包之后在 index.html 中插入的 script 中 src 设置的路径（在输出之后的文件中不会实际产生对应的文件假，产生一个虚拟的路径）
 *
 * 4. module
 *    - module.rules 设置 loader 的地方
 *       - 每一项 rules
 *         - rules.enforce 强制执行 pre |
 *         - rules.test 使用正则的匹配对应的文件名
 *         - rules.include 该 loader 需要解析的文件
 *         - reles.use 在 use 对象中可以添加 新的 loader 和 option
 *           - reles.use.loader
 *           - reles.use.option
 * 5. resolve
 *    - resolve.alias 设置路径别名
 *
 * 6. plugins:
 *   1. require('html-webpack-plugin')
 *      title: 文档的标题
 *      filename: 新建一个 html 入口文件，默认是 index.html
 *   2. require('vue-loader/lib/plugin') 用来解析 .vue 的 template
 *
 */
