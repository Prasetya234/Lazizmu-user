<template>
  <body>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <!-- Kolom 1 -->
          <div class="col-md-4">
            <h4>Mds Filantropy Center </h4>
            <div class="paragraf">
              <p>
                Jl. Warung Jati Barat No.14 Jakarta Selatan 12540, <br />
                Indonesia
              </p>
              <br />
              <p><b-icon icon="telephone"></b-icon> (021) 27874080</p>
              <p><b-icon icon="phone"></b-icon> 08111544488 (Whatsapp)</p>
            </div>
          </div>
          <!-- End Kolom 1 -->
          <!-- Kolom 2 -->
          <div class="col-md-3">
            <h4>Tentang Kami</h4>
            <ul>
              <li><a href="#">Profil</a></li>
              <li><a href="#program">Program</a></li>
              <li><a href="/infaq">Infaq</a></li>
            </ul>
          </div>
          <!-- End Kolom 2 -->
          <!-- Kolom 3 -->
          <div class="col-md-5">
            <h4>Social Media</h4>
            <div class="social-links">
              <a
                class="h2 mb-2"
                href="https://id-id.facebook.com/"
                target="_blank"
                ><b-icon icon="facebook"></b-icon
              ></a>
              <!-- <a class="h2 mb-2" href="#"><b-icon icon="twitter"></b-icon></a> -->
              <a
                class="h2 mb-2"
                href="https://www.instagram.com/"
                target="_blank"
                ><b-icon icon="instagram"></b-icon
              ></a>
            </div>
          </div>
          <!-- End Kolom 3 -->
          <!-- Copyright -->
          <div class="copy">
            <!-- <i class="icon-message"></i> -->
            <a href="#" target="_top">
              COPYRIGHT © 2021 PORTAL DONASI LAZIMU-MDS</a
            >
          </div>
        </div>
      </div>
    </footer>
  </body>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
body {
  // line-height: 1.5;
  font-family: "Poppins", sans-serif;
}
* {
  margin: 0;
  padding: 0;
  color: #ffff;
  // box-sizing: border-box;
}

a {
  text-decoration: none;
  padding: 10px;
}
a:hover {
  color: white;
  text-decoration: underline;
}

.container {
  max-width: 1440px;
  margin: auto;
}

.logo {
  // border: 1px solid red;
}
.img {
  padding: 30px 10px 20px 80px;
}

.row {
  // border: 1px solid red;
  // display: flex;
  // flex-wrap: wrap;
  padding: 30px 20px 10px 30px;
}
.col-md-4 {
  // border: 1px solid blue;
  h4 {
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
  }

  .paragraf {
    padding: 10px;
  }
}

.col-md-3 {
  // border: 1px solid orange;

  h4 {
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
  }

  ul {
    // border: 1px solid red;
    padding: 10px;
    list-style: none;
  }
}

.col-md-5 {
  // border: 1px solid red;
  h4 {
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
  }
  .social-links {
    justify-content: space-between;
  }
}

.copy {
  // border: 1px solid red;
  text-align: center;
  padding: 10px;
  font-size: 12px;
}

.footer {
  background-color: #1f7c4d;
  // padding: 70px 0;
}
.footer-col {
  width: 25%;
  padding: 0 15px;
}
.footer-col h4 {
  font-size: 18px;
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 500;
  position: relative;
}
.footer-col h4::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  background-color: #e91e63;
  height: 2px;
  box-sizing: border-box;
  width: 50px;
}
.footer-col ul li:not(:last-child) {
  margin-bottom: 10px;
}
.footer-col ul li a {
  font-size: 16px;
  text-transform: capitalize;
  color: #ffffff;
  text-decoration: none;
  font-weight: 300;
  color: #bbbbbb;
  display: block;
  transition: all 0.3s ease;
}
.footer-col ul li a:hover {
  color: #ffffff;
  padding-left: 8px;
}
.footer-col .social-links a {
  display: inline-block;
  height: 40px;
  width: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 10px 10px 0;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  color: #ffffff;
  transition: all 0.5s ease;
}
.footer-col .social-links a:hover {
  color: #24262b;
  background-color: #ffffff;
}

/*responsive*/
@media (max-width: 767px) {
  .footer-col {
    width: 50%;
    margin-bottom: 30px;
  }
}
@media (max-width: 574px) {
  .footer-col {
    width: 100%;
  }
}
</style>
