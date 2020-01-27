<template>
  <div class="mt-nav-bar">
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    NavBar
  } from 'vant';
  export default {
    name: "mt-nav-bar",
    data() {
      return {}
    },
    components: {
      [NavBar.name]: NavBar,
    },
    methods: {
      onClickLeft() {
        this.$router.back()
      },
    }
  }
</script>

<style scoped lang='scss'>
  .van-icon-arrow-left:before {
    color: white;
  }

  .van-nav-bar__text {
    color: white;
  }

  .van-nav-bar {
    // 底色变成透明，使用header部分的底色
    background: none;
  }

  .van-hairline--bottom::after {
    // 清除边框
    border: none;
  }
</style>