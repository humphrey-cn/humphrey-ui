<template>
    <div class="hh-home">
        <h1>HUMPHREY UI</h1>
        <p>一个基于 vue 2.x 的 UI 库</p>
        <div class="link flex-c-c">
            <hh-button @click="jumplink('github')">GitHub</hh-button>
            <hh-button @click="jumplink('doc')">快速使用</hh-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    methods: {
        jumplink(link) {
            console.log(link, 'xxx', this)
            switch (link) {
                case 'github':
                    window.location = 'https://github.com/humphrey-cn/humphrey-ui'
                    break;
                case 'doc':
                    this.$router.push('/doc')
                    break;
                default:
                    break;
            }
        }
    }
}
</script>

<style lang="less" scoped>
.hh-home {
    text-align: center;
    color: @hh-color-title;

    h1 {
        font-size: 60px;
    }

    p {
        font-size: 24px;
        margin-top: 20px;
        color: @hh-color;
    }

    .link {
        margin-top: 50px;
        gap: 20px;
    }
}
</style>