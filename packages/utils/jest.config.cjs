module.exports = {
  testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],
  transform: { // 类似 webpack.module.rules, 转换规则
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
};