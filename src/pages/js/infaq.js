import { mapActions } from "vuex";

export default {
  name: "infaq",
  data() {
    return {
      beritaEkonomi: [],
      beritaSosial: [],
      beritaPendidikan: [],
      beritaEkonomiAll: [],
      beritaSosialAll: [],
      beritaPendidikanAll: [],
      economyModel: true,
      sosialModel: false,
      pendidikanModel: false,
      isLoading: true,
      lihatSemua: false,
      ciutkan: false,
    };
  },
  methods: {
    showAll(data) {
      console.log(data);
      switch (data) {
        case "ekonomi":
          this.beritaEkonomi = [];
          if (this.lihatSemua === false) {
            this.lihatSemua = true;
            for (let a = 0; a < this.beritaEkonomiAll.length; a++) {
              if (this.beritaEkonomiAll[a] !== undefined) {
                this.beritaEkonomi.push(this.beritaEkonomiAll[a]);
              }
            }
          } else {
            this.lihatSemua = false;
            for (let b = 0; b < 3; b++) {
              if (this.beritaEkonomiAll[b] !== undefined) {
                this.beritaEkonomi.push(this.beritaEkonomiAll[b]);
              }
            }
          }
          break;
        case "sosial":
          this.beritaSosial = [];
          if (this.lihatSemua === false) {
            this.lihatSemua = true;
            for (let z = 0; z < this.beritaSosialAll.length; z++) {
              if (this.beritaSosialAll[z] !== undefined) {
                this.beritaSosial.push(this.beritaSosialAll[z]);
              }
            }
          } else {
            this.lihatSemua = false;
            for (let y = 0; y < 3; y++) {
              if (this.beritaSosialAll[y] !== undefined) {
                this.beritaSosial.push(this.beritaSosialAll[y]);
              }
            }
          }
          break;
        case "pendidikan":
          this.beritaPendidikan = [];
          if (this.lihatSemua === false) {
            this.lihatSemua = true;
            for (let e = 0; e < this.beritaPendidikanAll.length; e++) {
              if (this.beritaPendidikanAll[e] !== undefined) {
                this.beritaPendidikan.push(this.beritaPendidikanAll[e]);
              }
            }
          } else {
            this.lihatSemua = false;
            for (let f = 0; f < 3; f++) {
              if (this.beritaPendidikanAll[f] !== undefined) {
                this.beritaPendidikan.push(this.beritaPendidikanAll[f]);
              }
            }
          }
          break;
        default:
          alert("Tidak ada data pillihan " + data);
          break;
      }
    },
    page(data) {
      this.lihatSemua = null;
      switch (data) {
        case "ekonomi":
          this.beritaEkonomi = [];
          this.beritaSosial = [];
          this.beritaPendidikan = [];
          this.economyModel = true;
          this.sosialModel = false;
          this.pendidikanModel = false;
          this.beritaEkonomiAll.length > 3
            ? (this.lihatSemua = false)
            : (this.lihatSemua = null);
          for (let d = 0; d < 3; d++) {
            if (this.beritaEkonomiAll[d] != undefined) {
              this.beritaEkonomi.push(this.beritaEkonomiAll[d]);
            }
            if (this.beritaSosialAll[d] != undefined) {
              this.beritaSosial.push(this.beritaSosialAll[d]);
            }
            if (this.beritaPendidikanAll[d] != undefined) {
              this.beritaPendidikan.push(this.beritaPendidikanAll[d]);
            }
          }
          break;
        case "sosial":
          this.beritaEkonomi = [];
          this.beritaSosial = [];
          this.beritaPendidikan = [];
          this.economyModel = false;
          this.sosialModel = true;
          this.pendidikanModel = false;
          this.beritaSosialAll.length > 3
            ? (this.lihatSemua = false)
            : (this.lihatSemua = null);
          for (let d = 0; d < 3; d++) {
            if (this.beritaEkonomiAll[d] != undefined) {
              this.beritaEkonomi.push(this.beritaEkonomiAll[d]);
            }
            if (this.beritaSosialAll[d] != undefined) {
              this.beritaSosial.push(this.beritaSosialAll[d]);
            }
            if (this.beritaPendidikanAll[d] != undefined) {
              this.beritaPendidikan.push(this.beritaPendidikanAll[d]);
            }
          }
          break;
        case "pendidikan":
          this.beritaEkonomi = [];
          this.beritaSosial = [];
          this.beritaPendidikan = [];
          this.economyModel = false;
          this.sosialModel = false;
          this.pendidikanModel = true;
          this.beritaPendidikanAll.length > 3
            ? (this.lihatSemua = false)
            : (this.lihatSemua = null);
          for (let d = 0; d < 3; d++) {
            if (this.beritaEkonomiAll[d] != undefined) {
              this.beritaEkonomi.push(this.beritaEkonomiAll[d]);
            }
            if (this.beritaSosialAll[d] != undefined) {
              this.beritaSosial.push(this.beritaSosialAll[d]);
            }
            if (this.beritaPendidikanAll[d] != undefined) {
              this.beritaPendidikan.push(this.beritaPendidikanAll[d]);
            }
          }
          break;
        default:
          alert("Tidak ada pilihan " + data);
          break;
      }
    },
    ...mapActions(["getInfaq"]),
    getAll() {
      this.getInfaq({
        success: (data) => {
          data.body.content.forEach((element) => {
            switch (element.kategoriId.kategoriName) {
              case "Ekonomi":
                this.beritaEkonomi.push(element);
                break;
              case "Sosial":
                this.beritaSosial.push(element);
                break;
              case "Pendidikan":
                this.beritaPendidikan.push(element);
                break;
            }
          });
          for (let a = 0; a < this.beritaEkonomi.length; a++) {
            this.beritaEkonomiAll.push(this.beritaEkonomi[a]);
          }
          for (let b = 0; b < this.beritaEkonomi.length; b++) {
            this.beritaSosialAll.push(this.beritaSosial[b]);
          }
          for (let c = 0; c < this.beritaPendidikan.length; c++) {
            this.beritaPendidikanAll.push(this.beritaPendidikan[c]);
          }
          this.beritaPendidikan = [];
          this.beritaSosial = [];
          this.beritaEkonomi = [];
          for (let d = 0; d < 3; d++) {
            if (this.beritaEkonomiAll[d] != undefined) {
              this.beritaEkonomi.push(this.beritaEkonomiAll[d]);
            }
            if (this.beritaSosialAll[d] != undefined) {
              this.beritaSosial.push(this.beritaSosialAll[d]);
            }
            if (this.beritaPendidikanAll[d] != undefined) {
              this.beritaPendidikan.push(this.beritaPendidikanAll[d]);
            }
          }
          this.beritaEkonomiAll.length > 3
            ? (this.lihatSemua = false)
            : (this.lihatSemua = null);
          this.isLoading = false;
        },
        fail: () => {
          alert("Opss... Internet anda terputus");
        },
      });
    },
    // new
    clickBeritaInfaqEkonomi(a) {
      var b = JSON.stringify(this.beritaEkonomi[a]);
      sessionStorage.setItem("beritaAll", b);
      this.$router.push(`/${this.$i18n.locale}/pembayaran`);
      window.scrollTo(0, 0);
    },
    clickBeritaInfaqSosial(a) {
      var b = JSON.stringify(this.beritaSosial[a]);
      sessionStorage.setItem("beritaAll", b);
      this.$router.push(`/${this.$i18n.locale}/pembayaran`);
      window.scrollTo(0, 0);
    },
    clickBeritaInfaqPendidikan(a) {
      var b = JSON.stringify(this.beritaPendidikan[a]);
      sessionStorage.setItem("beritaAll", b);
      this.$router.push(`/${this.$i18n.locale}/pembayaran`);
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.getAll();
  },
};
