// 匹配测试文件 .spec 结尾的 js
const testsContext = require.context('./specs', true, /\.spec.js$/);
testsContext.keys().forEach(testsContext);

// coverage 覆盖的范围
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/);
srcContext.keys().forEach(srcContext);
