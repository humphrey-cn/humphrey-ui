<!--
 * @Author: Humphrey humphrey_cn@163.com
 * @Date: 2023-02-07 13:30:41
 * @LastEditors: Humphrey humphrey_cn@163.com
 * @LastEditTime: 2023-02-07 15:02:27
 * @Description: 
-->
<template>
  <div id="app">
    <TopNav />
    <div class="hh-main">
      <router-view />
    </div>
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue';

export default {
  name: "App",
  components: { TopNav }
}
</script>

<style lang="less" scoped>
.hh-main {
  padding: 50px 100px;
}
</style>
