<template>
  <div class="so-container">
    <mt-nav-bar leftArrowStyle="black" title="确认订单"></mt-nav-bar>
    <van-cell-group>
      <van-cell icon="location-o" title="请选择收获地址" is-link>
        <template slot="title" v-if="address">
          <div class="user-info">
            <span>{{address.realname}}</span>
            <span>{{address.telephone}}</span>
          </div>
          <div class="address-info">
            {{address.province}}{{address.city}}{{address.county}}{{address.detail}}
          </div>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script type="text/ecmascript-6">
  import MTNavBar from "./Common/MTNavBar";
  import {
    Cell,
    CellGroup
  } from 'vant';
  export default {
    name: "SubmitOrder",
    data() {
      return {
        goodList: [],
        address: {
          realname: "李四",
          telephone: "13355559999",
          province: "浙江省",
          city: "杭州市",
          county: "西湖区",
          detail: "阿里爸爸"
        }
      }
    },
    mounted() {
      this.goodList = this.$store.state.cart
    },
    components: {
      [MTNavBar.name]: MTNavBar,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup
    }
  }
</script>

<style scoped lang='scss'>

</style>