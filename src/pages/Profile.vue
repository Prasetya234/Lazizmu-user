<template>
  <div class="all">
    <div class="header">
      <p>Profil</p>
      <img
      src="@/assets/download.jpg"
        alt=""
      />
    </div>
    <div class="body">
      <ol type="A">
        <li>Pengertian</li>
        <p>
          MDS PHILANTRHOPY CENTER ialah program bekerja sama sekolah dengan
          LAZISMU yang dirancang untuk menghimpun, menyalurkan dan mengembangkan
          dana zakat, infak, dan sedekah masyarakat untuk pengembangan
          program-program sekolah.
        </p>
        <li>Maksud Dan Tujuan</li>
        <p>
          Maksud dan Tujuan program MDS PHILANTRHOPY CENTER ialah menghimpun,
          menyalurkan dan mengembangkan dana zakat, infak, sedekah dan wakaf
          sehingga dapat mendukung pengembangan program-program sekolah.
        </p>
        <li>Jenis Program</li>
        <p>
          INFAQ MUQOYAD PRODUKTIF (KOLAM LELE, KEBUN JAHE MERAH, LAPAK LELE,
          DLL) INFAQ FI SABILILLAH (fokus utama untuk program MDS al Qur’an
          Academy)
          <ul>
              <li>QURBAN ITU KEREN </li>
              <li>JUM’AT BERKAH </li>
              <li>BAKTI SOSIAL</li>
              <li> BEASISWA MENTARI</li>
              <li>PEDULI GURU</li>
        </ul> 
        </p>
      </ol>
    </div>
  </div>
</template>

<script src="./js/profile.js" />

<style lang="scss" scopeds>
  .all {
    max-width: 1440px;
    margin: auto;
    padding-top: 10px;
  }
  .header {
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: 300px;
      filter: opacity(30%);
      position: relative;
      z-index: 1;
    }
    p {
      padding: 100px 100px;
      position: absolute;
      z-index: 2;
      color: #17af60;
      font-weight: bold;
      font-size: 60px;
      width: auto;
      @media screen and (max-width: 425px) {
        padding: 100px 30px;
      }
    }
  }
  .body {
      padding: 50px 0px;
    margin: auto;
    width: 70%;
    height: auto;
    font-size: 20px;
    font-family: "poppins";
    ol li {
        font-weight: bold;
    }
    ul li {
        font-weight: normal;
    }
  }
</style>
