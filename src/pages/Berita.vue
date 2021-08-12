<template>
  <div class="all">
    <!-- Judul -->
    <div class="header">
      <p>Profil</p>
      <img
        src="https://yashirunapeduli.org/wp-content/uploads/2020/06/hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree_34998-142-1-1300x731.jpg"
        alt=""
      />
    </div>
    <!-- Isi -->
    <div class="body">
      <div class="baris1">
        <div class="col-md-6" id="zoom-In">
          <router-link to="">
            <p>Konfirmasi Donasi</p>
            <router-link class="detail" to="#">Lihat Detail ></router-link>
            <img
              src="@/assets/logo-layanan/konfirmasi.jpg"
              alt="logo"
              class="image"
            />
          </router-link>
        </div>
        <div class="col-md-6" id="zoom-In">
          <router-link to="">
            <p>Nomor Rekening</p>
            <router-link class="detail" to="#">Lihat Detail ></router-link>
            <img
              src="@/assets/logo-layanan/no_rek.jpg"
              alt="logo"
              class="image"
            />
          </router-link>
        </div>
      </div>
      <div class="baris2">
        <div class="col-md-6" id="zoom-In">
          <router-link to="">
            <p>Kalkulator Zakat</p>
            <router-link class="detail" to="#">Lihat Detail ></router-link>
            <img
              src="@/assets/logo-layanan/kalkulator.png"
              alt="logo"
              class="image"
            />
          </router-link>
        </div>
        <div class="col-md-6" id="zoom-In">
          <router-link to="infaq">
            <p>Infaq</p>
            <router-link class="detail" to="#">Lihat Detail ></router-link>
            <img
              src="@/assets/logo-layanan/uang.jpg"
              alt="logo"
              class="image"
            />
          </router-link>
        </div>
      </div>
      <div class="baris3">
        <div class="col-md-6" id="zoom-In">
          <router-link to="">
            <p>FAQ</p>
            <router-link class="detail" to="#">Lihat Detail ></router-link>
            <img src="@/assets/logo-layanan/faq.jpg" alt="logo" class="image" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/layanan.js" />
<style lang="scss" scoped>
.all {
  max-width: 1440px;
  margin: auto;
}
.top {
  padding-top: 50px;
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  text-align: center;
  .col {
    width: 100%;
    height: auto;
    grid-column: span 2;
    margin: 10px 0;
  }
  .link {
    margin: 20px 0px;
    font-weight: bold;
    .text {
      text-decoration: none;
      color: #17af60;
    }
  }
  @media (max-width: 900px) {
    .col {
      grid-column: span 4;
    }
  }
  @media (max-width: 375px) {
    .col {
      width: 100%;
      grid-column: span 10;
    }
  }
}
// body
.body {
  width: 100%;
  padding: 30px 0px 50px 0px;
  font-family: "poppins", sans-serif;
  .baris1 {
    width: 90%;
    display: flex;
    margin: auto;
    justify-content: space-between;
    justify-content: center;
    .image {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 90%;
      height: 350px;
      position: relative;
      z-index: 1;
      filter: brightness(70%);
    }
    p {
      position: absolute;
      padding: 30px 0px 0px 50px;
      z-index: 2;
      color: white;
      font-size: 30px;
      font-weight: bold;
      width: auto;
    }
    .detail {
      color: white;
      font-weight: bold;
      text-decoration: none;
      font-size: 15px;
      z-index: 2;
      position: absolute;
      padding: 300px 0px 0px 50px;
    }
    @media screen and (max-width: 760px) {
      display: inline-block;
      width: 100%;
      padding: 0px 10px;
      .image {
        padding: 10px 0px;
      }
    }
  }
  .baris2 {
    width: 90%;
    display: flex;
    margin: auto;
    padding: 50px 0px 0px 0px;
    justify-content: space-between;
    justify-content: center;
    .image {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 90%;
      height: 350px;
      position: relative;
      z-index: 1;
      filter: brightness(70%);
    }
    p {
      position: absolute;
      padding: 30px 0px 0px 50px;
      z-index: 2;
      color: #fff;
      font-size: 30px;
      font-weight: bold;
      width: auto;
    }
    .detail {
      color: white;
      font-weight: bold;
      text-decoration: none;
      font-size: 15px;
      z-index: 2;
      position: absolute;
      padding: 300px 0px 0px 50px;
    }
    @media screen and (max-width: 760px) {
      display: inline-block;
      width: 100%;
      padding: 0px 10px;
      .image {
        padding: 10px 0px;
      }
    }
  }
  .baris3 {
    width: 90%;
    display: flex;
    margin: auto;
    padding: 50px 0px;
    .image {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 90%;
      height: 350px;
      position: relative;
      z-index: 1;
      filter: brightness(70%);
    }
    p {
      position: absolute;
      padding: 30px 0px 0px 50px;
      z-index: 2;
      color: #fff;
      font-size: 30px;
      font-weight: bold;
      width: auto;
    }
    .detail {
      color: white;
      font-weight: bold;
      text-decoration: none;
      font-size: 15px;
      z-index: 2;
      position: absolute;
      padding: 300px 0px 0px 50px;
    }
    @media screen and (max-width: 760px) {
      display: inline-block;
      width: 100%;
      padding: 0px 10px;
      .image {
        padding: 10px 0px;
      }
    }
  }
  .baris1 #zoom-In .image {
    transform: scale(1);
    transition: 0.3s ease-in-out;
  }
  .baris1 #zoom-In:hover .image {
    transform: scale(1.02);
  }
  .baris2 #zoom-In .image {
    transform: scale(1);
    transition: 0.3s ease-in-out;
  }
  .baris2 #zoom-In:hover .image {
    transform: scale(1.02);
  }
  .baris3 #zoom-In .image {
    transform: scale(1);
    transition: 0.3s ease-in-out;
  }
  .baris3 #zoom-In:hover .image {
    transform: scale(1.02);
  }
}
</style>
