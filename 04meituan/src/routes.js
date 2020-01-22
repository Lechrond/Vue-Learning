 /* jshint esversion: 6 */
 import VueRouter from "vue-router";
 import Vue from "vue";
 import Home from "./components/Home";
 import Order from "./components/Order";
 import Mine from "./components/Mine";
 import Merchant from "./components/Merchant/Merchant";

 //  如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能：
 Vue.use(VueRouter);

 const routes = [{
     path: "/",
     component: Home,
     name: "home"
   },
   {
     path: "/order",
     component: Order,
     name: "order"
   },
   {
     path: "/mine",
     component: Mine,
     name: "mine"
   },
   {
     path: "/merchant/:merchant_id",
     component: Merchant,
     name: "merchant"
   }
 ];

 const router = new VueRouter({
   routes
 });

 export default router;