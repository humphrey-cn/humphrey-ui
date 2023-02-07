// import HhButton from './src/button';

// // 为组件提供 install 安装方法，供按需引入
// HhButton.install = function (Vue) {
//     Vue.component(HhButton.name, HhButton);
// };

// export default HhButton;


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
    version: "1.0.0",
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    ...components,
};