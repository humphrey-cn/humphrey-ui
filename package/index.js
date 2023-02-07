/*
 * @Author: Humphrey humphrey_cn@163.com
 * @Date: 2023-02-07 15:06:46
 * @LastEditors: Humphrey humphrey_cn@163.com
 * @LastEditTime: 2023-02-07 17:52:41
 * @Description: 
 */
// import Vue from 'vue'
// import HhButton from './button/button.vue'

// export { HhButton }

// const components = [HhButton]

// // 全局注册主键
// export function HumphreyUi() {
//     for (const component of components) {
//         Vue.component(component.name, component)
//     }
// }

// export default HumphreyUi


/**
 * 导出所有组件的总出口文件
 */
import Button from "./button/src/button.vue";

const components = [Button];

// 定义 install 方法，接手Vue作为参数传入
const install = function (Vue) {
    // 首先需要判断是否安装
    if (install.installed) return;
    install.installed = true;
    // 遍历注册所有组件
    components.map((component) => {
        if (typeof component === "undefined" || !component.name) return;
        Vue.component(component.name, component);
    });
    // components.map(component => Vue.use(component))

    // 检测是否是vue环境 
    if (typeof window !== "undefined" && window.Vue) {
        install(window.Vue);
    }
};

export default {
    version: "0.0.1",
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    ...components,
};