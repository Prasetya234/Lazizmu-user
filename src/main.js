import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import {
  BootstrapVue,
  IconsPlugin,
  JumbotronPlugin,
  BJumbotron,
  BTable,
  TablePlugin,
  BButton,
  ButtonPlugin,
  BPagination,
  PaginationPlugin,
  BCollapse,
  CollapsePlugin,
} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import i18n from "./i18n";
// carousel
// import Carousel3d from 'vue-carousel-3d';

// Vue.use(Carousel3d);

Vue.use(BootstrapVue);

Vue.use(Buefy);

Vue.use(IconsPlugin);

Vue.use(JumbotronPlugin);

Vue.use(TablePlugin);

Vue.use(ButtonPlugin);

Vue.use(PaginationPlugin);

Vue.use(CollapsePlugin);

Vue.component("b-pagination", BPagination);

Vue.component("b-jumbotron", BJumbotron);

Vue.component("b-table", BTable);

Vue.component("b-button", BButton);

Vue.component("b-collapse", BCollapse);

Vue.config.productionTip = false;

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);


router.beforeEach((to, from, next) => {
  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = "idn";
  }

  // set the current language for i18n.
  i18n.locale = language;
  next();
});

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
