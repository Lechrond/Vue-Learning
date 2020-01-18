<template>
  <div class="mypage">
    <h1>我的Vue页面</h1>
    <p class="info">{{info}}</p>
  </div>
</template>

<script>
  export default {
    name: "MyPage",
    data: function () {
      return {
        info: "欢迎来到我的vue页面"
      }
    }
  }
</script>

<style scoped lang="scss">
.mypage{
  background: grey;
    .info {
    background: red;
    color: #ffffff
  }
}
</style>