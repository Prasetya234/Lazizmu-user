export default {
  name: "IsiBerita",
  data() {
    return {
      slides: [],
    };
  },
  methods: {
    getDataSesionNews() {
      var khsadd87328o7r = sessionStorage.getItem("berita");
      this.slides = JSON.parse(khsadd87328o7r);
      this.slides.isiBerita.content[0].replace(
        /(^|\s)(BONDOWOSO)(\s|$)/gi,
        "$1<b>$2</b>$3"
      );
    },
  },
  mounted() {
    this.getDataSesionNews();
    window.scrollTo(0, 0);
  },
};

