import { mapGetters } from "vuex";

export default {
  name: "Proofreading",
  data() {
    return {
      showModal: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      showModal5: false,
      showModal6: false,
      dataForm: {
        menulis: "",
        tambahData: "",
        ubahData: "",
      },
      proofreadingPage1: true,
      proofreadingPage2: false,
      proofreadingPage3: false,
      proofreadingPage4: false,
      proofreadingPage5: false,
      proofreadingPage6: false,
      // Member Of Sessionss
      tataBahasaDataSesion: {},

      modalTambah: false,
      modalUbah: false,

      intermediary: [],
    };
  },
  mounted() {
    this.getDataSesion();
  },
  methods: {
    getDataSesion() {
      var tataBahasaData = sessionStorage.getItem(
        "student_topik_menulis_paragraph"
      );
      this.tataBahasaDataSesion = JSON.parse(tataBahasaData);
    },
    ascending() {
      // <-- ATAS(up) -->
      var now = this.dataForm.menulis;
      if (now === "") {
        alert("Choose first to raise");
        return;
      }
      var index = now - 1;
      if (index >= 0) {
        Array.prototype.move = function(from, to) {
          this.splice(to, 0, this.splice(from, 1)[0]);
          return this;
        };
        this.tataBahasaDataSesion.konsepParagrafArray.move(now, index);
        var ascending = JSON.stringify(this.tataBahasaDataSesion);
        sessionStorage.setItem("student_topik_menulis_paragraph", ascending);
        this.dataForm.menulis = index;
      } else {
        alert("Has reached the maximum limit");
      }
    },
    descending() {
      // <---- BAWAH(down) ------>
      var now = this.dataForm.menulis;
      if (now === "") {
        alert("Choose the first one to drop");
        return;
      }
      var index = now + 1;
      var arr = this.tataBahasaDataSesion.konsepParagrafArray.length - 1;
      if (arr >= index) {
        Array.prototype.move = function(from, to) {
          this.splice(to, 0, this.splice(from, 1)[0]);
          return this;
        };
        this.tataBahasaDataSesion.konsepParagrafArray.move(now, index);
        var descending = JSON.stringify(this.tataBahasaDataSesion);
        sessionStorage.setItem("student_topik_menulis_paragraph", descending);
        this.dataForm.menulis = index;
      } else {
        alert("Has reached the maximum limit");
      }
    },
    toDropKonsepParagraf() {
      this.tataBahasaDataSesion.konsepParagrafArray.splice(
        this.dataForm.menulis,
        1
      );
      var deleteArr = JSON.stringify(this.tataBahasaDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", deleteArr);
      this.dataForm.menulis = "";
    },
    toSetKonsepParagraf() {
      this.dataForm.ubahData = this.tataBahasaDataSesion.konsepParagrafArray[
        this.dataForm.menulis
      ];
      this.modalUbah = true;
    },
    setKonsepParagraf() {
      if (this.dataForm.ubahData === "") {
        alert("The data cannot be empty");
        return;
      }
      this.tataBahasaDataSesion.konsepParagrafArray[
        this.dataForm.menulis
      ] = this.dataForm.ubahData.replace(".", "");
      var update = JSON.stringify(this.tataBahasaDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", update);
      this.dataForm.ubahData = "";
      this.dataForm.menulis = "";
      this.modalUbah = false;
    },
    handelTambah() {
      if (this.dataForm.tambahData === "") {
        alert("Form is not vailid");
      } else if (this.dataForm.tambahData.length >= 60) {
        alert("Maximal 60 Characters");
      } else {
        if (this.tataBahasaDataSesion.konsepParagrafArray.length <= 5) {
          this.handleSubmit(this.dataForm.tambahData);
          this.dataForm.tambahData = "";
        } else {
          alert("Cannot add more than six lines");
          this.modalTambah = false;
        }
      }
    },
    handleSubmit(value) {
      this.tataBahasaDataSesion.konsepParagrafArray.push(
        value.replace(".", "")
      );
      var tambah = JSON.stringify(this.tataBahasaDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", tambah);
      this.menulis = "";
      this.modalTambah = false;
    },
    proofreading1Next() {
      this.proofreadingPage2 = true;
      this.dataForm.menulis = "";
      if (this.proofreadingPage2 === true) {
        this.proofreadingPage1 = false;
      } else {
        alert("{{ Internal Server Error to 1 }}, status:500;");
      }
    },
    proofreading2Next() {
      this.proofreadingPage3 = true;
      this.dataForm.menulis = "";
      if (this.proofreadingPage3 === true) {
        this.proofreadingPage2 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    proofreading3Next() {
      this.proofreadingPage4 = true;
      this.dataForm.menulis = "";
      if (this.proofreadingPage4 === true) {
        this.proofreadingPage3 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    proofreading4Next() {
      this.proofreadingPage5 = true;
      this.dataForm.menulis = "";
      if (this.proofreadingPage5 === true) {
        this.proofreadingPage4 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    proofreading5Next() {
      this.tataBahasaDataSesion.konsepParagraf = [];
      for (
        var i = 0;
        i < this.tataBahasaDataSesion.konsepParagrafArray.length;
        i++
      ) {
        this.intermediary.push(
          "\t" + this.tataBahasaDataSesion.konsepParagrafArray[i]
        );
      }
      this.tataBahasaDataSesion.konsepParagraf.push(
        this.formatToDot(this.intermediary) + "."
      );
      var newKonsepParagraf = JSON.stringify(this.tataBahasaDataSesion);
      sessionStorage.setItem(
        "student_topik_menulis_paragraph",
        newKonsepParagraf
      );
      this.proofreadingPage6 = true;
      this.dataForm.menulis = "";
      if (this.proofreadingPage6 === true) {
        this.proofreadingPage5 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    formatToDot(value) {
      return value.toString().replace(/,/g, ".");
    },
    proofreading6Next() {
      this.$router.push("/final");
    },
    validation() {
      return (
        this.dataForm.menulis.length > 4 && this.dataForm.menulis.length < 13
      );
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};