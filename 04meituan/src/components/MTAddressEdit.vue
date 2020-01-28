<template>
  <div class="mt-address-edit">
    <mt-nav-bar left-arrow-style="black" title="地址编辑"></mt-nav-bar>
    <van-address-edit :area-list="areaList" show-delete show-set-default @save="onSave" @delete="onDelete" />
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    AddressEdit
  } from 'vant';
  import MTNavBar from "./Common/MTNavBar";
  import areaList from "../data/area";
  export default {
    name: "",
    data() {
      return {
        areaList
      }
    },
    components: {
      [AddressEdit.name]: AddressEdit,
      [MTNavBar.name]: MTNavBar
    },
    methods: {
      onSave(content) {
        console.log(content);

      },
      onDelete() {

      }
    }
  }
</script>

<style scoped lang='scss'>

</style>