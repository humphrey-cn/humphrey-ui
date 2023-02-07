<!--
 * @Author: Humphrey humphrey_cn@163.com
 * @Date: 2023-02-07 16:02:31
 * @LastEditors: Humphrey humphrey_cn@163.com
 * @LastEditTime: 2023-02-07 17:02:11
 * @Description: 
-->
<template>
    <div class="preview-container">
        <h2>
            <!-- {{ component.__sourceCodeTitle }} ===== -->
            <button @click="toggleCode(false)" v-if="codeVisible">隐藏代码</button>
            <button @click="toggleCode(true)" v-else>查看代码</button>
        </h2>
        <div class="preview-container-component">
            <component :is="component" />
        </div>

        <div class="preview-container-code" v-if="codeVisible">
            <pre class="language-html" v-html="component"></pre>
        </div>
    </div>
</template>

<script>
// import Vue, { h } from 'vue'
export default {
    props: {
        component: null,
    },
    data() {
        return {
            codeVisible: false,
            html: null
        }
    },
    mounted() {
        // this.html = h(this.component)
        // let a = Vue.component({
        //     render() {
        //         return this.html
        //     }
        // })
        // console.log(this.html, '222', a)
    },
    methods: {
        toggleCode(type) {
            this.codeVisible = type
        }
    }
}

// import hh-button from "../lib/button/index.vue";

// import "prismjs";
// import "prismjs/themes/prism.css";
// import { computed, ref } from "vue";
// const Prism = (window as any).Prism;
// const props = defineProps({
//     component: Object,
// });

// console.log(999999, 'xxxx', props.component, 999999)

// // const html = computed(() => {
// //     return Prism.highlight(
// //         props.component.__sourceCode,
// //         Prism.languages.html,
// //         "html"
// //     );
// // });
// const showCode = () => {
//     // console.log(999, html)
//     console.log(999, props.component)
//     codeVisible.value = true
// };
// const hideCode = () => (codeVisible.value = false);
// const codeVisible = ref(false);
</script>

<style lang="less" scoped>
.preview-container {
    border: 1px solid #d9d9d9;
    margin: 32px 0px 32px;
    min-width: 300px;

    >h2 {
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid #d9d9d9;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &-component {
        padding: 16px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    &-actions {
        padding: 8px 16px;
        border-top: 1px dashed #d9d9d9;
    }

    &-code {
        padding: 8px 16px;
        border-top: 1px dashed #d9d9d9;

        >pre {
            line-height: 1.1;
            font-family: Consolas, "Courier New", Courier, monospace;
            margin: 0;
            background-color: rgb(250, 250, 250);
        }
    }
}
</style>