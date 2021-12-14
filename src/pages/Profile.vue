<template>
  <div class="all">
    <div class="header">
      <p>{{ $t("profil.profile")}}</p>
    </div>
    <div class="body">
      <ol type="A">
        <li>{{ $t("profil.pengertian")}}</li>
        <p>
          {{ $t("profil.pengertian_content")}}
        </p>
        <li>{{ $t("profil.maksud")}}</li>
        <p>
          {{ $t("profil.maksud_content")}}
        </p>
        <li>{{ $t("profil.jenis")}}</li>
        <p>
          {{ $t("profil.jenis_content")}}
            <ul>
              <li>{{ $t("profil.first")}}</li>
              <li>{{ $t("profil.second")}}</li>
              <li>{{ $t("profil.third")}}</li>
              <li> {{ $t("profil.fourth")}}</li>
              <li>{{ $t("profil.fiveth")}}</li>
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
    max-height: 350px;
    background-image: url('../assets/image_tentang_kami1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    filter: brightness(90%);
    p {
      padding: 130px 130px;
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
    padding: 50px 150px;
    margin: auto;
    width: 100%;  
    height: auto;
    font-size: 20px;
    font-family: "poppins";
    @media screen and (max-width: 768px) {
      padding: 50px 30px;   
    }
    ol li {
        font-weight: bold;
    }
    ul li {
        font-weight: normal;
        list-style: bold;
    }
  }
</style>
