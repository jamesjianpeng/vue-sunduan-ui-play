const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = merge(baseConfig, {
  output: {
    publicPath: '/'
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: '/',
    port: 9000,
    hot: true,
    open: true,
    historyApiFallback: {
      index: path.join(__dirname, 'index.html')
    },
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'vue-sunduan-selet',
      filename: 'index.html'
    })
  ]
})

module.exports = config

/**
 *
 * 在配置 开发环境的时候关键在处理资源路径
 * 1. npm i -D webpack-dev-server
 * 2. touch build/webpack.dev.config.js
 * 3. build/webpack.dev.config.js configuration
 *   ...
 *   output: {
 *      publicPath: '/'
 *   }
 *   ...
 *   devServer: {
 *   ...
 *   contentBase: '/'
 *   ...
 *   }
 *   ...
 *   plugins: [
 *     new webpack.HotModuleReplacementPlugin()
 *   ]
 *
 */
