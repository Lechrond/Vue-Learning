<template>
  <div id="app">
    <mt-home></mt-home>
  </div>
</template>

<script>
  import Home from "./components/Home.vue"
  export default {
    name: 'app',
    components: {
      [Home.name]: Home
    }
  }
</script>

<style lang="scss">
  @import "styles/init.css";
  .van-search{
    padding: 0;
  }
</style>