<template>
  <div class="">
    <!-- 顶部返回栏 -->
    <van-nav-bar left-text="返回" left-arrow />
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
    <!-- 标签页 -->
    <van-tabs class="tab-group" v-model="active">
      <van-tab title="点菜">
        <div class="menu-group" :style="menuHeightStyle">
          <div class="category-group" ref="category">
            <ul class="category-list">
              <li v-for="category in categories" :key="category.name">{{category.name}}</li>
            </ul>
          </div>
          <div class="goods-group" ref="goods">
            <div class="goods-list">
              <dl v-for="category in categories" :key="category.name">
                <dt class="category-name">{{category.name}}</dt>
                <dd class="goods-item" v-for="goods in category.goods_list" :key="goods.id">
                  <img :src="goods.picture" class="thumbnail">
                  <div class="goods-info">
                    <div class="goods-name">{{goods.name}}</div>
                    <div class="month-sale">月售十份</div>
                    <div class="price">￥{{goods.price}}</div>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="评价">内容 2</van-tab>
      <van-tab title="商家">内容 3</van-tab>
    </van-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    NavBar,
    Tab,
    Tabs
  } from 'vant';
  import BScroll from 'better-scroll';
  import kfc from "../data/kfc";
  export default {
    name: "Merchant",
    components: {
      [NavBar.name]: NavBar,
      [Tab.name]: Tab,
      [Tabs.name]: Tabs
    },
    data() {
      return {
        active: 0,
        categories: [],
      }
    },
    computed: {
      menuHeightStyle() {
        const height = window.innerHeight - 164;
        return {
          height: height + "px"
        }
      }
    },
    mounted() {
      // 提取js中的预设数据
      const pre_categories = kfc['categories'];
      this.categories = pre_categories;
      // for (let index = 0; index < pre_categories.length; index++) {
      //   const pre_category = pre_categories[index];
      //   // 把预设数据添加到当前组件的列表中
      //   this.categories.push({
      //     id: pre_category.id,
      //     name: pre_category.name
      //   });
      // }
      // 用于延迟执行一段代码
      this.$nextTick(() => {
        this.menuScroll = new BScroll(this.$refs.category, {
          scrollY: true,
          click: true
        })
        this.goodsScroll = new BScroll(this.$refs.goods, {
          scrollY: true,
          click: true
        })
      })
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

  .tab-group {
    .menu-group {
      display: flex;


      .category-group {
        width: 80px;
        text-align: center;
        height: 100%;
        overflow: hidden;
        background: WhiteSmoke;

        .category-list {
          overflow: hidden;

          li {
            height: 50px;
            line-height: 50px;
          }
        }
      }

      .goods-group {
        flex: 1;
        height: 100%;
        overflow: hidden;

        .goods-list {
          .category-name {
            font-size: 14px;
            font-weight: 500;
            height: 32px;
            line-height: 32px;
            padding-left:10px; 
            background: WhiteSmoke;
          }

          .goods-item {
            margin-left: 10px;
            display: flex;
            margin-bottom: 10px;

            .thumbnail {
              width: 75px;
              height: 75px;
            }

            .goods-info {
              flex: 1;
              margin-left: 10px;
              display: flex;
              flex-direction: column;
              justify-content: space-around;

              .goods-name {
                font-size: 16px;
                font-weight: 700;
              }

              .price {
                color: #fb4e44;
                font-size: 16px;
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }
</style>