<template>
  <div class="mt-address-list">
    <mt-nav-bar leftArrowStyle="black" title="地址列表"></mt-nav-bar>
    <van-address-list v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit" />
  </div>
</template>

<script type="text/ecmascript-6">
  import MTNavBar from "./Common/MTNavBar";
  import {
    AddressList
  } from 'vant';
  export default {
    name: "MTAddressList",
    data() {
      return {
        chosenAddressId: '1',
        list: [{
            id: '1',
            name: '张三',
            tel: '13000000000',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
          },
          {
            id: '2',
            name: '李四',
            tel: '1310000000',
            address: '浙江省杭州市拱墅区莫干山路 50 号'
          }
        ],
      }
    },
    components: {
      [MTNavBar.name]: MTNavBar,
      [AddressList.name]: AddressList
    },
    methods: {
      onAdd() {
        console.log("goto add...");
      },
      onEdit() {
        console.log("goto edit...");
      }
    }
  }
</script>

<style scoped lang='scss'>

</style>