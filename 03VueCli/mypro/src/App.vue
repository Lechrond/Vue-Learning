<template>
  <div id="app">
    <MyPage></MyPage>
  </div>
</template>

<script>
import MyPage from "./components/MyPage"
export default {
  name: 'app',
  components: {
    MyPage
  }
}
</script>

<style>
body,div,p,span,h1,h2,h3{
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
