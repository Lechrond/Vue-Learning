<template>
  <div id="app">
    <MyPage></MyPage>
      <van-button>我是一个按钮</van-button>
    
  </div>
</template>

<script>
import MyPage from "./components/MyPage";
import { Button } from 'vant';
export default {
  name: 'app',
  components: {
    MyPage,
    [Button.name]:Button
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
