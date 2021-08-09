import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "home",
    components: {
      NavBar,
      Footer,
    },
    data() {
      return {};
    },
    mounted() {
      window.scrollTo(0, 0);
    },
  };
  