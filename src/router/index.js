import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home";
import Infaq from "../pages/Infaq";
// import Layanan from "../pages/Layanan";
import i18n from '../i18n'

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: `/${i18n.locale}`
    },
    {
      path: "/:lang",
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: "/",
          name: "Home",
          components: {
            default: Home,
          },
        },
        {
          path: "infaq",
          name: "Infaq",
          components: {
            default: Infaq,
          },
        },
        // {
        //   path: "/layanan",
        //   name: "Layanan",
        //   components : {
        //     default : Layanan
        //   }
        // },
      ],
    },
  ],
  mode: "history",
});

export default router;
