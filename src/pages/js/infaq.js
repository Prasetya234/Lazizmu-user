export default {
  name: "infaq",
  data() {
    return {
      berita_ekonomi: [
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2BMb5v4NRe9y3wGp1S_f4_KNmiJu-GmUxTg&usqp=CAU",
          category: "Ekonomi",
          content: {
            judul: "Infaq",
            donasi: "100.000",
            donatur: "10",
          },
        },
        {
          image:
            "https://mrs-image.oss-accelerate.aliyuncs.com/2020/04/banner_zakat.jpeg",
          category: "Ekonomi",
          content: {
            judul: "Zakat",
            donasi: "1.000.000",
            donatur: "24",
          },
        },
        {
          image:
            "https://static.muslim.or.id/wp-content/uploads/2016/06/Rahasia-Infaq-Di-Bulan-Ramadhan-muslimorid-810x500.jpg",
          category: "Ekonomi",
          content: {
            judul: "Bulan Ramadhan",
            donasi: "500.000",
            donatur: "15",
          },
        },
        {
          image:
            "https://storage.googleapis.com/finansialku_media/wordpress_media/2020/04/b0c12ca8-jangan-kebalik-ini-definisi-dan-perbedaan-zakat-infaq-sedekah-03-finansialku.jpg",
          category: "Ekonomi",
          content: {
            judul: "Berbagi",
            donasi: "10.000.000",
            donatur: "150",
          },
        },
      ],
      berita_sosial: [
        {
          image:
            "https://i0.wp.com/rdk.fidkom.uinjkt.ac.id/wp-content/uploads/2020/11/Rasya-Azzahra_11-November_Salah-Satu-Simbol-Kepekaan-Sosial_Sumber-Kaskus-dot-co-dot-id_Berita-Ke-2.jpg?fit=1080%2C718",
          category: "Sosial",
          content: {
            judul: "Random",
            donasi: "900.000",
            donatur: "10",
          },
        },
        {
          image:
            "https://storage.googleapis.com/finansialku_media/wordpress_media/2020/04/b0c12ca8-jangan-kebalik-ini-definisi-dan-perbedaan-zakat-infaq-sedekah-03-finansialku.jpg",
          category: "Sosial",
          content: {
            judul: "Infaq Sedekah",
            donasi: "50.000",
            donatur: "50",
          },
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2BMb5v4NRe9y3wGp1S_f4_KNmiJu-GmUxTg&usqp=CAU",
          category: "Sosial",
          content: {
            judul: "Panti",
            donasi: "4.000.000",
            donatur: "123",
          },
        },
        {
          image:
            "https://lazismujatim.org/wp-content/uploads/2018/11/sekolah-sedekah-lamongan.jpeg",
          category: "Sosial",
          content: {
            judul: "Javbal",
            donasi: "7.100.000",
            donatur: "8",
          },
        }
      ],
      berita_pendidikan: [
        {
          image:
            "https://korankaltara.com/wp-content/uploads/2019/05/Ilustrasi-Pendidikan.jpg",
          category: "Pendidikan",
          content: {
            judul: "Sumbangan",
            donasi: "850.000",
            donatur: "40",
          },
        },
        {
          image:
            "https://rise.smeru.or.id/sites/default/files/styles/fullpage/public/blog/RO.JPG?itok=wPlaIP4u",
          category: "Pendidikan",
          content: {
            judul: "university mangkang",
            donasi: "100.000.000.000",
            donatur: "1",
          },
        },
        {
          image:
            "https://lazismujatim.org/wp-content/uploads/2018/11/sekolah-sedekah-lamongan.jpeg",
          category: "Pendidikan",
          content: {
            judul: "Sekolah",
            donasi: "70.000",
            donatur: "1",
          },
        },
        {
          image:
            "https://awsimages.detik.net.id/community/media/visual/2020/06/10/ilustrasi-virus-corona-covid-19-3_169.jpeg?w=700&q=90",
          category: "Pendidikan",
          content: {
            judul: "School",
            donasi: "822.111.000",
            donatur: "1",
          },
        },
      ],
      beritaEkonomi: [],
      beritaSosial: [],
      beritaPendidikan: [],
      economyModel: true,
      sosialModel: false,
      pendidikanModel: false,
    };
  },
  created() {
    // cara menampilkan data hanya 3
    // ekonomi
    for (var i = 0; i < 3; i++) {
      this.beritaEkonomi.push(this.berita_ekonomi[i]);
    }
    // cara menampilkan data hanya 3
    // pendidikan
    for (let a = 0; a < 3; a++) {
      this.beritaSosial.push(this.berita_sosial[a]);
    }

    // cara menampilkan data hanya 3
    // sosial
    for (let b = 0; b < 3; b++) {
      this.beritaPendidikan.push(this.berita_pendidikan[b]);
    }
  },
  methods: {
    showAll() {
      if (this.economyModel === true) {
        this.beritaSosial = [];
        for (var a = 0; a < 3; a++) {
          this.beritaSosial.push(this.berita_sosial[a]);
        }
        this.beritaPendidikan = [];
        for (var b = 0; b < 3; b++) {
          this.beritaPendidikan.push(this.berita_pendidikan[b]);
        }
        if (this.beritaEkonomi.length === 3) {
          this.beritaEkonomi = [];
          for (var d = 0; d < this.berita_ekonomi.length; d++) {
            this.beritaEkonomi.push(this.berita_ekonomi[d]);
          }
          return;
        }
        if (this.beritaEkonomi.length === this.berita_ekonomi.length) {
          this.beritaEkonomi = [];
          for (var e = 0; e < 3; e++) {
            this.beritaEkonomi.push(this.berita_ekonomi[e]);
          }
          return;
        } 
      }
      if (this.sosialModel === true) {
        this.beritaEkonomi = [];
          for (var f = 0; f < 3; f++) {
            this.beritaEkonomi.push(this.berita_ekonomi[f]);
          }
          this.beritaPendidikan = [];
          for (var m = 0; m < 3; m++) {
            this.beritaPendidikan.push(this.berita_pendidikan[m]);
          }
        if (this.beritaSosial.length === 3) {
          this.beritaSosial = [];
          for (var g = 0; g < this.berita_sosial.length; g++) {
            this.beritaSosial.push(this.berita_sosial[g]);
          }
          return;
        }
        if (this.beritaSosial.length === this.berita_sosial.length) {
          this.beritaSosial = [];
          for (var h = 0; h < 3; h++) {
            this.beritaSosial.push(this.berita_sosial[h]);
          }
          return;
        } 
      }
      if (this.pendidikanModel === true) {
        this.beritaSosial = [];
          for (var i = 0; i < 3; i++) {
            this.beritaSosial.push(this.berita_sosial[i]);
          }
        this.beritaEkonomi = [];
          for (var j = 0; j < 3; j++) {
            this.beritaEkonomi.push(this.berita_ekonomi[j]);
          }
        if (this.beritaPendidikan.length === 3) {
          this.beritaPendidikan = [];
          for (var k = 0; k < this.berita_pendidikan.length; k++) {
            this.beritaPendidikan.push(this.berita_pendidikan[k]);
          }
          return;
        }
        if (this.beritaPendidikan.length === this.berita_pendidikan.length) {
          this.beritaPendidikan = [];
          for (var l = 0; l < 3; l++) {
            this.beritaPendidikan.push(this.berita_pendidikan[l]);
          }
          return;
        } 
      }
    },
    ekonomiPage() {
      this.economyModel = true,
      this.beritaPendidikan = [];
          for (var a = 0; a < 3; a++) {
            this.beritaPendidikan.push(this.berita_pendidikan[a]);
          }
          this.beritaSosial = [];
          for (var b = 0; b < 3; b++) {
            this.beritaSosial.push(this.berita_sosial[b]);
          }
      this.sosialModel = false,
      this.pendidikanModel = false
    },
    sosialPage() {
      this.sosialModel = true,
      this.beritaPendidikan = [];
          for (var a = 0; a < 3; a++) {
            this.beritaPendidikan.push(this.berita_pendidikan[a]);
          }
          this.beritaEkonomi = [];
          for (var e = 0; e < 3; e++) {
            this.beritaEkonomi.push(this.berita_ekonomi[e]);
          }
      this.economyModel = false,
      this.pendidikanModel = false
    },
    pendidikanPage() {
      this.pendidikanModel = true,
      this.beritaEkonomi = [];
          for (var e = 0; e < 3; e++) {
            this.beritaEkonomi.push(this.berita_ekonomi[e]);
          }
          this.beritaSosial = [];
          for (var b = 0; b < 3; b++) {
            this.beritaSosial.push(this.berita_sosial[b]);
          }
      this.economyModel = false,
      this.sosialModel = false
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
