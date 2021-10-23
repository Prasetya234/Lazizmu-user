import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/home";
import infaq from "./modules/infaq";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    infaq,
  },
});
