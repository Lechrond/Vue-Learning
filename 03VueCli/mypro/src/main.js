 /* jshint esversion: 6 */
import Vue from 'vue';
import App from './App.vue';
import "lib-flexible";
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
