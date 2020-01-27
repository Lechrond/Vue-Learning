 /* jshint esversion: 6 */
 import Vue from "vue";
 import Vuex from "vuex";

 Vue.use(Vuex);

 const store = new Vuex.Store({
   state: {
     cart: []
   },
   mutations: {
     setCart(state, goodsList) {
       state.cart = goodsList;
     },
     clearCart(state) {
       state.cart = [];
     }
   }
 });

 export default store;