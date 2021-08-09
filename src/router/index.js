import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home"
import Infaq from "../pages/Infaq";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      components : {
        default : Home
      }
    },
    {
      path: "/infaq",
      name: "Infaq",
      components : {
        default : Infaq
      }
    }
  ],
  mode: "history",
});

export default router;