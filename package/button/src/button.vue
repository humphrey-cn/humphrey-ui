<!--
 * @Author: Humphrey humphrey_cn@163.com
 * @Date: 2023-02-07 15:06:53
 * @LastEditors: Humphrey humphrey_cn@163.com
 * @LastEditTime: 2023-02-07 15:56:39
 * @Description: 按钮组件
-->
<template>
    <button class="hh-button" @click="handleClick">
        <slot>按钮</slot>
    </button>
</template>

<script>
export default {
    name: 'hh-button',
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    }
}
</script>

<style lang="less" scoped>
.hh-button {
    width: 100px;
    height: 50px;
    background-color: #36ad6a;
    color: #fff;
    cursor: pointer;

    &:hover {
        background-color: #75d49f;
    }
}
</style>