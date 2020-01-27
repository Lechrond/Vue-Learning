<template>
  <div class="">
    这是提交界面
    <ul>
      <li v-for="goods in goodList" :key="goods.id+goods.name">
        {{goods.name}}
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "SubmitOrder",
    data() {
      return {
        goodList: []
      }
    },
    mounted() {
      this.goodList = this.$store.state.cart
    },
    components: {}
  }
</script>

<style scoped lang='scss'>

</style>