<template>
  <div class="goods-container" v-show="show">
    <div class="middle-box">
      <div class="goods-detail">
        <img class="picture" :src="goods.picture" alt="">
        <div class="info">
          <div class="month-sale">月售10份</div>
          <div class="intro">{{goods.intro}}</div>
          <div class="price">￥{{goods.price}}</div>
        </div>
      </div>
      <div class="close-btn" @click="closeDetail">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "goods-detail",
    props: {
      goods: {
        type: Object,
        default: function () {
          return {
          }
        }
      }
    },
    data() {
      return {
        show: false
      }
    },
    watch: {
      goods(newValue, oldValue) {
        this.show = true;
      }
    },
    components: {},
    methods: {
      closeDetail() {
        this.show = false;
      }
    }
  }
</script>

<style scoped lang='scss'>
  .goods-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;


    .middle-box {
      width: 315px;
      height: 480px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      .goods-detail {
        border-radius: 10px;
        width: 100%;
        height: 368px;
        overflow: hidden;
        background: #fff;

        .picture {
          width: 100%;
          height: 236px;
        }

        .info {
          padding: 10px;

          .month-sale {
            font-size: 14px;
            margin-top: 10px;
          }

          .intro {
            font-size: 14px;
            margin-top: 10px;
          }

          .price {
            margin-top: 10px;
            font-size: 18px;
            color: #fb4e44;
          }
        }
      }

      .close-btn {
        width: 40px;
        height: 40px;
        background-image: url("http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/df125964473c5a2c4edadb74d8a11995.png");
        background-size: 40px;
      }
    }
  }
</style>