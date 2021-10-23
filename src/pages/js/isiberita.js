export default {
  name: "IsiBerita",
  data() {
    return {
      berita: [],
    };
  },
  methods: {
    getDataSesionNews() {
      let berita = sessionStorage.getItem("berita");
      this.berita = JSON.parse(berita);
      for (var i = 1; i < this.berita.keteranganBerita.length; i++) {
        for (var j = 0; j < i; j++) {
          if (
            this.berita.keteranganBerita[i].sequenceNumber <
            this.berita.keteranganBerita[j].sequenceNumber
          ) {
            let x = this.berita.keteranganBerita[i];
            this.berita.keteranganBerita[i] = this.berita.keteranganBerita[j];
            this.berita.keteranganBerita[j] = x;
          }
        }
      }
    },
  },
  mounted() {
    this.getDataSesionNews();
    window.scrollTo(0, 0);
  },
};
