<template>
  <div class="all">
    <div class="top">
      <div class="col" @click="clickJemputZakat">
        <img src="@/assets/logo-layanan/mobil.png" alt="logo" class="logo"/>
        <div class="link" >
          <div class="text">{{
            $t("layanan.first")
          }}</div>
        </div>
      </div>
      <div class="col" @click="clickKonfirmasiDonasi">
        <img src="@/assets/logo-layanan/infaq.png" alt="logo" class="logo"/>
        <div class="link">
          <div class="text">{{
            $t("layanan.third")
          }}</div>
        </div>
      </div>
      <div class="col" @click="clickKonsultasi">
        <img src="@/assets/logo-layanan/chat.png" alt="logo" class="logo"/>
        <div class="link">
          <div class="text" >{{
             $t("layanan.fourth")
          }}</div>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="baris1">
        <div class="col-md-6" id="zoom-In">
          <div style="cursor:pointer" @click="clickKonfirmasiDonasi">
            <p>Konfirmasi Donasi</p>
            <div class="detail">Lihat Detail ></div>
            <img
              src="@/assets/logo-layanan/konfirmasi.jpg"
              alt="logo"
              class="image"
            />
          </div>
        </div>
        <div class="col-md-6" id="zoom-In">
          <router-link to="norek">
            <p>Nomor Rekening</p>
            <router-link class="detail" to="norek">Lihat Detail ></router-link>
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
          <router-link to="infaq">
            <p>Infaq</p>
            <router-link class="detail" to="infaq">Lihat Detail ></router-link>
            <img
              src="@/assets/logo-layanan/uang.jpg"
              alt="logo"
              class="image"
            />
          </router-link>
        </div>
        <div class="col-md-6" id="zoom-In">
          <router-link to="faq">
            <p>FAQ</p>
            <router-link class="detail" to="faq">Lihat Detail ></router-link>
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
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  @media (max-width:768px) {
    grid-template-columns: repeat(2, 1fr);  
  }
  @media (max-width:450px) {
    grid-template-columns: repeat(1, 1fr);  
  }
  .col {
    width: auto;
    height: auto;
    margin: auto;
    cursor: pointer;
  }
  .link {
    margin: 20px 0px;
    font-weight: bold;
    .text {
      text-decoration: none;
      color: #17af60;
    }
  }
  .logo {
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
      @media (max-width: 360px) {
        width: 70%;
      }
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
      @media (max-width: 360px) {
        width: 70%;
      }
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
}
</style>
