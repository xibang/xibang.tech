const path = require('path');

/**
 * 为什么使用 js 抛出？
 * 因为该项目内置了 Webpack，而对 Webpack Resolver 的配置则直接写在本文件中
 */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/recommended',
    'willin'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  globals: {
    wx: true,
    WeixinJSBridge: true
  },
  rules: {
    'vue/component-name-in-template-casing': 0,
    'no-bitwise': 0,
    'object-curly-newline': 0,
    'max-len': [1, 250],
    'vue/max-attributes-per-line': [
      2, {
        singleline: 10,
        multiline: {
          max: 10,
          allowFirstLine: true
        }
      }
    ],
    'import/prefer-default-export': 0
  },
  settings: {
    'import/core-modules': ['debug', 'vue', 'vuex', 'axios', 'swiper', 'mockjs'],
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: [
              'node_modules',
              path.resolve(__dirname)
            ],
            extensions: [
              '.js',
              '.vue'
            ],
            alias: {
              // 主要是配置目录别名，以防 ESLint 报错
              '~': path.resolve(__dirname),
              '~~': path.resolve(__dirname),
              '@': path.resolve(__dirname),
              '@@': path.resolve(__dirname),
            }
          }
        }
      }
    }
  }
};
