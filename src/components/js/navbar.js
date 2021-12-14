export default {
  name: "navbar",
  data() {
    return {};
  },
  methods: {
    languange(val) {
      if (val === "ID") {
        if (this.$router.history.current.path !== "/idn/" + this.$route.name) {
          if (this.$route.name === "home") {
            this.$router.push("/idn");
          } else {
            this.$router.push("/idn/" + this.$route.name);
          }
        }
      } else {
        if (this.$router.history.current.path !== "/arb/" + this.$route.name) {
          if (this.$route.name === "home") {
            this.$router.push("/arb");
          } else {
            this.$router.push("/arb/" + this.$route.name);
          }
        }
      }
    },
  },
};
