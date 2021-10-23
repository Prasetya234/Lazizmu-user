import { mapActions } from "vuex";

export default {
  name: "home",
  data() {
    return {
      isLoading: true,
      current: 0,
      width: 800,
      timer: 0,
      berita: [],
    };
  },
  mounted() {
    this.getAll();
    window.scrollTo(0, 0);
  },
  created: function() {
    this.play();
    window.scrollTo(0, 0);
  },
  methods: {
    // News Intergrasi
    ...mapActions(["getIsiBerita"]),
    getAll() {
      this.getIsiBerita({
        success: (data) => {
          this.berita = data.body.content;
          this.isLoading = false;
        },
        fail: () => {
          alert("Opss... Internet anda terputus");
        },
      });
    },
    // HardCode
    // Slider 1
    nextSlide: function() {
      this.current++;
      if (this.current >= this.berita.length) this.current = 0;
      this.resetPlay();
    },
    prevSlide: function() {
      this.current--;
      if (this.current < 0) this.current = this.berita.length - 1;
      this.resetPlay();
    },
    selectSlide: function(i) {
      this.current = i;
      this.resetPlay();
    },
    resetPlay: function() {
      clearInterval(this.timer);
      this.play();
    },
    play: function() {
      let app = this;
      this.timer = setInterval(function() {
        app.nextSlide();
      }, 2000);
    },
    // End Slider 1
    // Slider 2
    nextSlide2: function() {
      this.current++;
      if (this.current >= this.berita.length) this.current = 0;
      this.resetPlay();
    },
    prevSlide2: function() {
      this.current--;
      if (this.current < 0) this.current = this.berita.length - 1;
      this.resetPlay();
    },
    selectSlide2: function(j) {
      this.current = j;
      this.resetPlay();
    },
    resetPlay2: function() {
      clearInterval(this.timer);
      this.play();
    },
    play2: function() {
      let app = this;
      this.timer = setInterval(function() {
        app.nextSlide();
      }, 2000);
    },
    // End Slider 2
    toNewsLetter(a) {
      var b = JSON.stringify(this.berita[a]);
      sessionStorage.setItem("berita", b);
      this.$router.push(`/${this.$i18n.locale}/isi-berita`);
      window.scrollTo(0, 0);
    },
  },
};
