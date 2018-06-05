const rm = require('rimraf');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.prod.config');

rm(path.resolve(__dirname, '../dist'), function(err) {
  if (err) throw err;
  webpack(webpackConfig, function(err, stats) {
    if (err) throw err;
    if (stats.hasErrors()) {
      console.log(stats, 'has errors end');
    } else {
      console.log('webpack vue-sunduan-ui-play finish!')
    }
  })
})
