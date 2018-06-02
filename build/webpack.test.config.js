const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
cosnt HtmlWebpackPlugin = require('html-webpack-plugin');

const config = merge(baseConfig, {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'vue-sunduan-selet',
      filename: 'index.html'
    })
  ]
});

delete config.entry;

module.exports = config;
