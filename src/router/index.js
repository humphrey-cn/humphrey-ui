/*
 * @Author: Humphrey humphrey_cn@163.com
 * @Date: 2023-02-07 13:38:14
 * @LastEditors: Humphrey humphrey_cn@163.com
 * @LastEditTime: 2023-02-07 17:07:21
 * @FilePath: /humphrey-ui/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Doc from '../views/doc'
import HhButton from '@/views/doc/button'
import Install from '../../markdown/install.md'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/home' },
    {
        path: '/home',
        name: 'home', // 首页
        component: Home
    },
    {
        path: '/doc',
        name: 'doc', // 文档页面
        component: Doc,
        children: [
            { path: 'install', component: Install },
            { path: 'button', component: HhButton },
        ]
    },
]

export default new VueRouter({
    routes,
})
