const path = require('path');
const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

const DashboardPlugin = require('webpack-dashboard/plugin');
const StatsPlugin = require('stats-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

const statsPlugin = [
  new StatsPlugin('../stats/stats.json', {
    chunkModules: true,
    exclude: [/node_modules/]
  }),
  new Visualizer({
    filename: '../stats/statistics.html'
  }),
  new DashboardPlugin()
]

const resolve = function(dir) {
  return path.join(__dirname, '..', dir)
}

const config = merge(baseConfig, {
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: resolve('dist/index.html'),
      title: 'vue-sunduan-ui-play',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        keywords: 'Vue sunduan ui component',
        description: 'Vue sunduan ui play'
      }
    }),
    new UglifyjsWebpackPlugin({
      sourceMap: true,
      parallel: true
    })
  ]
});

if (process.env.STATS && JSON.parse(process.env.STATS)) {
  config.plugins = config.plugins.concat(statsPlugin)
}

module.exports = config;
/**
 *
 * html-webpack-plugin
 *  options.filename // 可以指定路径已经名称
 *  options.title // 生成 html 文件中的 title
 *  options.meta //  生成 html 文件中的 meta 标签的 name 和 content
 *
 * uglifyjs-webpack-plugin
 *  options.sourceMap // 开启 sourceMap
 *  options.parallel // 运行并发数量，加快打包速度
 *  options.uglifyOptions.output.comments // false 是去掉注释
 *  options.uglifyOptions.output.beautify // false 为最经凑的输出
 *  options.uglifyOptions.warnings: false // true 代表输出警告信息 false 则是隐藏警告信息
 *
 */