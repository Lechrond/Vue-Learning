<template>
  <div class="mt-nav-bar">
    <van-nav-bar @click-left="onClickLeft" :title="title">
      <van-icon name="arrow-left" slot="left" :color="leftArrowColor" />
    </van-nav-bar>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    NavBar,
    Icon
  } from 'vant';
  export default {
    name: "mt-nav-bar",
    props: {
      leftArrowStyle: {
        type: String,
        default: "white"
      },
      title: {
        type: String,
        default: ""
      }
    },
    computed: {
      leftArrowColor() {
        return this.leftArrowStyle == 'white' ? "#fff" : "#000";
      }
    },
    data() {
      return {}
    },
    components: {
      [NavBar.name]: NavBar,
      [Icon.name]: Icon
    },
    methods: {
      onClickLeft() {
        this.$router.back()
      },
    }
  }
</script>
<style scoped lang='scss'>

  .van-nav-bar {
    // 底色变成透明，使用header部分的底色
    background: none;
  }

  .van-hairline--bottom::after {
    // 清除边框
    border: none;
  }
</style>