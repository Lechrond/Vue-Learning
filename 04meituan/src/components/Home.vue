<template>
  <div class="home-container">
    <!-- 顶部 -->
    <div class="header-group">
      <div class="address-group">
        <i class="iconfont icondingwei"></i>
        <span class="address">凤凰苑</span>
        <i class="iconfont iconyoujiantou"></i>
      </div>
      <div class="search-group">
        <van-search placeholder="请输入搜索关键词" />
      </div>
    </div>
    <!-- 主体 -->
    <div class="main-group">
      <h1>推荐商家</h1>
      <!-- 筛选栏 -->
      <van-dropdown-menu>
        <van-dropdown-item v-model="sort" :options="sorts" />
        <div class="van-dropdown-menu__item">距离最近</div>
        <div class="van-dropdown-menu__item">品质联盟</div>
        <div class="van-dropdown-menu__item">
          筛选<i class="iconfont iconfunnelloudou"></i>
        </div>
      </van-dropdown-menu>
      <!-- 商家列表 -->
      <div class="merchant-list">
        <!-- 一个商家 -->
        <div class="merchant-item">
          <img class="logo"
            src="https://tse1-mm.cn.bing.net/th/id/OIP.R5ObVal1QyB8sq6Kfc8_fwHaFo?w=268&h=200&c=7&o=5&dpr=1.5&pid=1.7">
          <div class="merchant-info">
            <div class="merchant-name">肯德基</div>
            <van-rate class="rate-group" size="14px" v-model="rate" />
            <div class="tag-group">
              <van-tag plain>美团专送</van-tag>
              <van-tag plain>好评如潮</van-tag>
            </div>
          </div>
        </div>
        <div class="merchant-item">
          <img class="logo"
            src="https://tse4-mm.cn.bing.net/th/id/OIP.f6D3f5azAGvXuARXhN1RngHaHa?w=185&h=180&c=7&o=5&dpr=1.5&pid=1.7">
          <div class="merchant-info">
            <div class="merchant-name">星巴克</div>
            <van-rate class="rate-group" size="14px" v-model="rate" />
            <div class="tag-group">
              <van-tag plain>美团专送</van-tag>
              <van-tag plain>好评如潮</van-tag>
            </div>
          </div>
        </div>
        <div class="merchant-item">
          <img class="logo"
            src="https://tse4-mm.cn.bing.net/th/id/OIP.LRC3Vtmhhy83AKnzlpI7sgHaHS?w=175&h=173&c=7&o=5&dpr=1.5&pid=1.7">
          <div class="merchant-info">
            <div class="merchant-name">绝味鸭脖</div>
            <van-rate class="rate-group" size="14px" v-model="rate" />
            <div class="tag-group">
              <van-tag plain>美团专送</van-tag>
              <van-tag plain>好评如潮</van-tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    Search,
    DropdownMenu,
    DropdownItem,
    Rate,
    Tag,
  } from 'vant';
  export default {
    name: "mt-home",
    data() {
      return {
        rate: 3,
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
      [DropdownItem.name]: DropdownItem,
      [Rate.name]: Rate,
      [Tag.name]: Tag,
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

      .van-search {
        padding: 0;
      }
    }
  }

  .main-group {
    h1 {
      font-size: 20px;
      padding: 20px 10px 5px;
    }

    .van-dropdown-menu__item {
      font-size: 14px;
      color: #767676;
    }


    .merchant-list {

      .merchant-item {
        display: flex;
        padding: 10px;

        .logo {
          width: 85px;
          height: 64px;
        }

        .merchant-info {
          margin-left: 15px;

          .merchant-name {
            font-size: 16px;
            font-weight: 700;
          }

          .rate-group {
            padding-top: 5px;
          }

          .tag-group {
            padding-top: 5px;

            span {
              margin-right: 2px;
            }
          }
        }
      }
    }
  }
</style>

// 需要单独设置vant组件的css样式，因为不支持sass语法
<style scoped>
  /* 声明可以把样式设置到子组件中 */
  .van-dropdown-menu>>>.van-dropdown-menu__title {
    font-size: 14px;
    color: #767676;
  }
</style>