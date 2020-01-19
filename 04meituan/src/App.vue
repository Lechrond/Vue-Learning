<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" :to="{name:'home'}">首页</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" :to="{name:'order'}">订单</van-tabbar-item>
      <van-tabbar-item icon="setting-o" :to="{name:'mine'}">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import Home from "./components/Home.vue"
  import {
    Tabbar,
    TabbarItem
  } from 'vant';
  export default {
    name: 'app',
    data() {
      return {
        active: 0
      }
    },
    components: {
      [Home.name]: Home,
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem
    }
  }
</script>

<style lang="scss">
  @import "styles/init.css";
</style>