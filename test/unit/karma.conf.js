const webpackConfig = require('./build/webpack.test.config.js');

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'sinon-chai'], // 在测试的文件中不需要显示的 require 断言库
    files: [
      'test/index.js' // 测试入口
    ],
    preprocessors: {
      'test/index.js': ['webpack', 'coverage'] // 对这些文件进行预处理，在 webpack 中 babel 编译
    },
    reporters: ['spec', 'coverage'],
    // reporters: ['progress'], progress 添加之后就不展示具体的内容
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWath: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-sinon-chai',
      'karma-chai',
      'karma-spec-reporter',
      'karma-coverage'
    ],
    coverageReporter: {
      dir : 'test/coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    webpackMiddleware: {
      stats: 'errors-only'
    },
    webpack: webpackConfig // 使用配置文件
  })
}
