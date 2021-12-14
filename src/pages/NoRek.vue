<template>
  <div class="all">
    <div class="header_norek">
      <p>{{ $t("norek.norek")}}</p>
    </div>
    <div class="body_norek">
      <p>Rekening Donasi a/n Yayasan Lazizmu-MDS</p>
      <div class="listNoRek">
          <div class="listNoRek_nama">
              <p>Bank</p>
              <p style="color:green">BCA</p>
          </div>
          <div class="listNoRek_norek">
              <p>No. Rekening</p>
              <p>237.301.8881</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/norek.js" />

<style lang="scss" scopeds>
  .all {
    max-width: 1440px;
    margin: auto;
    padding-top: 10px;
  }
  .header_norek {
    width: 100%;
    height: 350px;
    background-image: url("../assets/faq.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    filter: opacity(75%);
    p {
      padding: 130px 130px;
      color: #17af60;
      font-weight: bold;
      font-size: 60px;
      width: auto;
      @media screen and (max-width: 768px) {
        padding: 130px 30px;
      }
      @media screen and (max-width: 539px) {
        padding: 90px 30px;
      }
    }
  }
  .body_norek {
    padding: 50px 130px;
    margin: auto;
    width: 100%;  
    height: auto;
    font-family: "poppins";
    @media screen and (max-width: 768px) {
      padding: 50px 30px;   
    }
    p {
    }
    .listNoRek{
        display: flex;
        gap: 100px;
        font-weight: bold;
    }
  }
</style>
