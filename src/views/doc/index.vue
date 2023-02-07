<!--
 * @Author: Humphrey humphrey_cn@163.com
 * @Date: 2023-02-07 13:41:50
 * @LastEditors: Humphrey humphrey_cn@163.com
 * @LastEditTime: 2023-02-07 17:36:39
 * @FilePath: /humphrey-ui/src/views/doc/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="layout">
        <div class="content">
            <aside>
                <router-link class="menu-item text-overflow" to="/doc/install">安装</router-link>
                <router-link class="menu-item text-overflow" to="/doc/button">Button 组件</router-link>
            </aside>
            <main style="padding-left: 302px" :class="{ 'markdown-body': true }">
                <router-view />
            </main>
        </div>
    </div>
</template>

<style lang="less" scoped>
.content {
    display: flex;
}

aside {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>