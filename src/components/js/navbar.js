export default {
  name: "navbar",
  data() {
    return {};
  },
  methods : {
    muncul_search() {
      var search = document.getElementById("Search");
      if (search.style.display === "none") {
        search.style.display = "block";        
      } else {
        search.style.display = "none";
      }
    }
  }
};
