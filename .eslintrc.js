module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6, // 对于 es6 语法
    "sourceType": "module",
  },
  "env": { // 指定环境
    "browser": true
  },
  extends: ["google"],
  plugins: [
    "html"
  ],
  "rules": {
  }
}

/** eslint 配置项
 *
 * root 限定配置文件的使用范围
 *
 * parser 指定eslint的解析器
 *
 * parserOptions 设置解析器选项
 *
 * extends 指定eslint规范 如：aribnb, google, standard
 *
 * plugins 引用第三方的插件
 *
 * env 指定代码运行的宿主环境
 *
 * rules 启用额外的规则或覆盖默认的规则
 *   - key 代表检查的规则项 如 "semi" 分号
 *   - value 为数组的时候：["error", "always"] 第一个值为错误级别，
 *       - "off" or 0 - 关闭规则
 *       - "warn" or 1 - 将规则视为一个警告（不会影响退出码）
 *       - "error" or 2 - 将规则视为一个错误 (退出码为1)
 *
 * globals 声明在代码中的自定义全局变量
 *
 *
 */
