import { mapActions } from "vuex";
import image1 from "@/assets/slideImage/download.jpg";
import image2 from "@/assets/slideImage/download2.jpg";
import image3 from "@/assets/slideImage/download3.jpg";
import image4 from "@/assets/slideImage/download4.jpg";
// import { Carousel3d, Slide } from 'vue-carousel-3d';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: "home",
  data() {
    return {
      isLoading: true,
      current: 0,
      width: 800,
      timer: 0,
      berita: [],
      slide_image: [
           image1,
           image2,
           image3,
           image4
      ]
    };
  },
  components: {
    // Carousel3d,
    // Slide,
    VueperSlides,
    VueperSlide
  },
  mounted() {
    this.getAll();
    window.scrollTo(0, 0);
  },
  created() {
    // this.play();
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
    nextSlide() {
      this.current++;
      if (this.current >= this.berita.length) {
        this.current = 0;
      }
      this.resetPlay();
    },
    prevSlide() {
      this.current--;
      if (this.current < 0) {
        this.current = this.berita.length - 1;
      }
      this.resetPlay();
    },
    selectSlide() {
      this.resetPlay();
    },
    resetPlay() {
      clearInterval(this.timer);
      this.play();
    },
    play() {
      let app = this;
      this.timer = setInterval(function () {
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
