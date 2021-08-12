export default {
  name: "berita",
  data() {
    return {
      berita: {},
    };
  },
  methods: {
    news() {
      var news = sessionStorage.getItem("berita");
      this.berita = JSON.parse(news);
      console.log(this.berita);
    },
  },
  mounted() {
    this.news();
  },
  created: function() {
    window.scrollTo(0, 0);
  },
};
