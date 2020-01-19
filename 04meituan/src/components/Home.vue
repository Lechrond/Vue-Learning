<template>
  <div class="home-container">
    <div class="header-group">
      <div class="address-group">
        <i class="iconfont icondingwei"></i>
        <span class="address">迪拜</span>
        <i class="iconfont iconyoujiantou"></i>
      </div>
      <div class="search-group">
        <van-search placeholder="请输入搜索关键词" />
      </div>
    </div>
    <div class="main-group">
      <h1>推荐商家</h1>
      <van-dropdown-menu>
        <van-dropdown-item v-model="sort" :options="sorts" />
        <div class="van-dropdown-menu__item">距离最近</div>
        <div class="van-dropdown-menu__item">品质联盟</div>
        <div class="van-dropdown-menu__item">
          筛选<i class="iconfont iconfunnelloudou"></i>
        </div>
      </van-dropdown-menu>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import {
    Search,
    DropdownMenu,
    DropdownItem
  } from 'vant';
  export default {
    name: "mt-home",
    data() {
      return {
        sort: 0,
        sorts: [{
            text: '综合排序',
            value: 0
          },
          {
            text: '好评优先',
            value: 1
          },
          {
            text: '距离最近',
            value: 2
          },
          {
            text: '销量最高',
            value: 3
          }
        ]
      }
    },
    components: {
      [Search.name]: Search,
      [DropdownMenu.name]: DropdownMenu,
      [DropdownItem.name]: DropdownItem
    }
  }
</script>

<style scoped lang='scss'>
  .header-group {
    background-color: #1C1B20;
    padding: 20px 14px 10px;

    .address-group {
      color: white;
      font-size: 16px;
      font-weight: 700;
    }

    .search-group {
      margin-top: 10px;
    }
  }

  .main-group {
    h1 {
      font-size: 20px;
      padding: 20px 10px 5px;
    }
  }
</style>

<style scoped>
  .van-dropdown-menu__item {
    font-size: 14px;
    color: #767676;
  }

  /* 声明可以把样式设置到子组件中 */
  .van-dropdown-menu>>>.van-dropdown-menu__title {
    font-size: 14px;
    color: #767676;
  }
</style>