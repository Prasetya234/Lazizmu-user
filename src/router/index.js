import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home";
import Infaq from "../pages/Infaq";
import Layanan from "../pages/Layanan";
import Profile from "../pages/Profile";
import IsiBerita from "../pages/IsiBerita";
import Pembayaran from "../pages/Pembayaran";
import Login from "../pages/Login";
import Faq from "../pages/Faq";
import NoRek from "../pages/NoRek";
import i18n from "../i18n";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      redirect: `/${i18n.locale}`,
    },
    {
      path: "/:lang",
      component: {
        render(c) {
          return c("router-view");
        },
      },
      children: [
        {
          path: "/",
          name: "home",
          components: {
            default: Home,
          },
        },
        {
          path: "login",
          name: "login",
          components: {
            default: Login,
          },
        },
        {
          path: "infaq",
          name: "Infaq",
          components: {
            default: Infaq,
          },
        },
        {
          path: "layanan",
          name: "layanan",
          components: {
            default: Layanan,
          },
        },
        {
          path: "profile",
          name: "profile",
          components: {
            default: Profile,
          },
        },
        {
          path: "isi-berita",
          name: "isi-berita",
          components: {
            default: IsiBerita,
          },
        },
        {
          path: "pembayaran",
          name: "pembayaran",
          components: {
            default: Pembayaran,
          },
        },
        {
          path: "faq",
          name: "faq",
          components: {
            default: Faq,
          },
        },
        {
          path: "norek",
          name: "norek",
          components: {
            default: NoRek,
          },
        },
      ],
    },
  ],
  mode: "history",
});

export default router;
