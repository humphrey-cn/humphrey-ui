<!--
 * @Author: Humphrey humphrey_cn@163.com
 * @Date: 2023-02-07 16:01:55
 * @LastEditors: Humphrey humphrey_cn@163.com
 * @LastEditTime: 2023-02-07 16:26:18
 * @Description: 
-->
<template>
    <div class="button-doc-wrapper">
        <h1>Button 按钮</h1>
        <p>常用的操作按钮。</p>
        <div class="preview-wrapper">
            <Preview :component="MyButton" />
        </div>
    </div>
</template>
 
<script>
import MyButton from "./Button.preview.vue";
import Preview from '@/components/Preview.vue';

export default {
    name: 'button-doc',
    data() {
        return {
            MyButton,
        }
    },
    components: { Preview },
}
</script>
