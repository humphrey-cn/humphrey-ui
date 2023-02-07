/*
 * @Author: Humphrey humphrey_cn@163.com
 * @Date: 2023-02-07 13:30:41
 * @LastEditors: Humphrey humphrey_cn@163.com
 * @LastEditTime: 2023-02-07 17:07:03
 * @Description: 
 */
const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: 'default',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.join(__dirname, 'src'));
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      });
  },
  css: {
    loaderOptions: {
      less: {
        additionalData: `@import '@/styles/variable.less';`,
      }
    }
  },
})
