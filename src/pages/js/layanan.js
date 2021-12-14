export default {
    name: "layanan",
    data() {
      return {
      };
    },
    methods: {
      clickKonsultasi(){
        window.location.href = 'https://api.whatsapp.com/send?phone=6285842917951&text=Assalamualaikum.wr.wb,%20Saya%20Ingin%20Konsultasi';
      },
      clickKonfirmasiDonasi(){
        window.location.href = 'https://api.whatsapp.com/send?phone=6285842917951&text=Assalamualaikum.wr.wb,%20Saya%20Ingin%20Konfirmasi%20Infaq/Donasi';
      },
      clickJemputZakat(){
        window.location.href = 'https://api.whatsapp.com/send?phone=6285842917951&text=Assalamualaikum.wr.wb,%20Saya%20Ingin%20Jemput%20Zakat';
      },
    },
    mounted() {
      window.scrollTo(0, 0);
    },
  };
  