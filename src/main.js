/*
 * @Author: Humphrey humphrey_cn@163.com
 * @Date: 2023-02-07 13:30:41
 * @LastEditors: Humphrey humphrey_cn@163.com
 * @LastEditTime: 2023-02-07 17:45:21
 * @FilePath: /humphrey-ui/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.less'

import HumphreyUi from '../package/index'
import 'github-markdown-css/github-markdown.css'

Vue.use(HumphreyUi)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
