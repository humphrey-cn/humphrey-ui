<!--
 * @hh-Author: Humphrey humphrey_cn@hh-163.com
 * @hh-Date: 2023-02-07 14:06:36
 * @hh-LastEditors: Humphrey humphrey_cn@hh-163.com
 * @hh-LastEditTime: 2023-02-07 14:43:27
 * @hh-Description: 公共头部
-->
<template>
    <div class="hh-topnav flex-c">
        <div class="logo">Humphrey-Ui</div>
        <ul class="flex-c">
            <li class="hover" v-for="nav in navs" :key="nav.name" :class="{ 'hh-active': nav.name.includes(activeNav) }"
                @click="jumplink(nav)">
                {{ nav.text }}
            </li>
        </ul>


    </div>

</template>
        
<script>
export default {
    data() {
        return {
            navs: [
                { path: '/home', name: 'home', text: '首页', },
                { path: '/doc', name: 'doc', text: '文档', },
            ],
            activeNav: this.$route.name
        }
    },
    watch: {
        '$route.name': {
            handler(nv) {
                this.activeNav = nv
            }
        }
    },
    methods: {
        jumplink(nav) {
            if (this.$route.path === nav.path) return
            this.activeNav = nav.name
            this.$router.push(nav.path)
        }
    }
}
</script>
        
<style lang="less" scoped>
.hh-topnav {
    height: 60px;
    border-bottom: 1px solid @hh-border-bottom-color;
    color: @hh-color-title;
    justify-content: space-between;
    padding: 0 100px;

    .logo {
        width: 200px;
    }

    ul {
        gap: 20px;

        .hh-active {
            color: @hh-color-hover;
        }
    }
}
</style>