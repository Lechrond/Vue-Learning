<template>
  <div class="">
    <!-- 顶部返回栏 -->
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- 头部栏 -->
    <div class="header-group">
      <img src="https://tse1-mm.cn.bing.net/th/id/OIP.R5ObVal1QyB8sq6Kfc8_fwHaFo?w=268&h=200&c=7&o=5&dpr=1.5&pid=1.7"
        alt="">
      <div class="merchant-info">
        <div class="delivery-info">
          <span>20分钟</span> | <span>1km</span>
        </div>
        <div class="notice">
          公告：清仓甩卖，全场7折!!!清仓甩卖，全场7折!!!
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    NavBar
  } from 'vant';
  export default {
    name: "Merchant",
    data() {
      return {}
    },
    components: {
      [NavBar.name]: NavBar
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

  .header-group {
    background: #2E2F38;
    padding: 10px;
    display: flex;
    margin-top: -46px;
    padding-top: 46px;

    img {
      width: 85px;
      height: 64px;
    }

    .merchant-info {
      flex: 1;
      margin-left: 10px;
      color: white;
      display: flex;
      overflow: hidden;
      flex-direction: column;
      // 弹性盒子元素会平均地分布在行里，两端保留子元素与子元素之间间距大小的一半。
      justify-content: space-around;

      .notice {
        // 超出部分显示...的效果，此外，还需要在父级元素设置overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
</style>

<style scoped>
  /* .van-nav-bar */
</style>