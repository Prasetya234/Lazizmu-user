<template>
  <div>
    <!-- Logo Berita -->
    <div class="body">
      <div class="logo">
        <img src="@/assets/logo-kl-lazismu-smp-mds.jpg" alt="" class="image" />
        <a href="infaq"
          ><p>{{ slides.isiBerita.title_isiberita }}</p></a
        >
      </div>
      <!-- Judul Berita -->
      <div class="head">
        <p>
          {{ slides.kalimat }}
        </p>
        <div class="info">
          <p class="nama">
            <b-icon icon="person"></b-icon>Ditulis Oleh
            <Strong>Roihan & Prasetya</Strong>
          </p>
          <p class="tgl">
            <b-icon icon="calendar-date"></b-icon> {{ slides.tanggal }}
          </p>
        </div>
      </div>
      <!-- Gambar Berita -->
      <div>
        <img :src="slides.image" alt="" class="gambar1" />
      </div>
      <!-- Isi Berita -->
      <div class="isiberita">
        <p v-for="data in slides.isiBerita.content" :key="data">
          {{ data }}
        </p>
      </div>
      <!-- Share -->
      <div class="share">
        <p>
          Bagikan ini:
          <a href="https://www.facebook.com/" target="_blank"
            ><b-icon icon="facebook" class="icon"></b-icon>Facebook</a
          >
          <a href="https://api.whatsapp.com/" target="_blank"
            ><b-icon icon="phone" class="icon"></b-icon>WhatsApp</a
          >
          <a href="https://www.instagram.com/" target="_blank"
            ><b-icon icon="instagram" class="icon"></b-icon>Instagram</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script src="./js/isiberita.js" />

<style lang="scss" scoped="scoped">
// All
* {
  max-width: 1440px;
  margin: auto;
}
.body {
  width: 75%;
}

.logo {
  width: 100%;
  justify-content: center;
  align-items: center;
  .image {
    height: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    filter: brightness(120%);
  }
  a {
    text-decoration: none;
    color: gray;
    p {
      padding: 10px 0px;
      text-align: center;
      font-size: 15px;
    }
  }
}

.head {
  text-align: center;
  font-family: "poppins", sans-serif;
  padding: 0px 0px 40px 0px;
  p {
    font-size: 30px;
    font-weight: 600;
  }
  .info {
    padding-top: 10px;
    display: flex;
    widows: 30%;
    p {
      color: gray;
      font-size: 15px;
      font-weight: 100;
    }
    .nama {
      width: 100%;
      text-align: right;
      padding: 0px 20px;
    }
    .tgl {
      width: 100%;
      text-align: left;
      padding: 0px 20px;
    }
  }
}
.gambar1 {
  width: 100%;
  height: 550px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    height: auto;
  }
}

.isiberita {
  p {
    padding: 20px 0px;
    font-size: 15px;
    text-align: justify;
  }
}

.share {
  margin-top: 50px;
  display: flex;
  width: 100%;
  font-size: 15px;
  a {
    padding: 10px 10px;
    text-decoration: none;
    color: gray;
  }
  .icon {
    width: auto;
    margin-right: 5px;
  }
  @media (max-width: 600px) {
    text-align: center;
  }
}
</style>
