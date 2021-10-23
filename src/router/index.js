import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home";
import Infaq from "../pages/Infaq";
import Layanan from "../pages/Layanan";
import Profile from "../pages/Profile";
import IsiBerita from "../pages/IsiBerita";
import Pembayaran from "../pages/Pembayaran";
import Login from "../pages/Login";
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
          path : "login",
          name : "Login",
          components: {
            default: Login,
          }
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
          name: "Layanan",
          components : {
            default : Layanan
          }
        },
        {
          path: "profile",
          name: "Profile",
          components : {
            default : Profile
          }
        },
        {
          path: "isi-berita",
          name: "IsiBerita",
          components : {
            default : IsiBerita
          }
        },
        {
          path: "pembayaran",
          name: "Pembayaran",
          components : {
            default : Pembayaran
          }
        },
      ],
    },
  ],
  mode: "history",
});

export default router;
