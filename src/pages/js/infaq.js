import ovo from "@/assets/logo-ovo.png";
import dana from "@/assets/logo-dana.png";
import linkAja from "@/assets/logo-link-aja.png";
import Bca_va from "@/assets/logo-bca-va.png";
import Bni_va from "@/assets/logo-bni-va.png";
import bca from "@/assets/logo-bca.png";
import mandiri from "@/assets/logo-mandiri.png";

export default {
  name: "infaq",
  data() {
    return {
      logo_image: [
        {
          image: ovo,
        },
        {
          image: dana,
        },
        {
          image: linkAja,
        },
      ],
      logo_image_bank: [
        {
          image: Bca_va,
        },
        {
          image: Bni_va,
        },
        {
          image: bca,
        },
        {
          image: mandiri,
        }
        
      ],
    };
  },
  methods:{
    // show_hide_text(){
    //   var showHide = document.getElementById("form");
    //   if (showHide.style.display === "none") {
    //     showHide.style.display = "block";        
    //   } else {
    //     showHide.style.display = "none";
    //   }
    // },
    show_hide_search(){
      var showHide = document.getElementById("search");
      if (showHide.style.display === "none") {
        showHide.style.display = "block";        
      } else {
        showHide.style.display = "none";
      }
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
