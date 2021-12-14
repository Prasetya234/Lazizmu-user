<template>
  <div class="all">
    <div class="header_faq">
      <p>{{ $t("faq.faq")}}</p>
    </div>
    <div class="body_faq">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eius debitis nihil animi quis numquam? Ex accusamus eveniet quae aliquid praesentium, distinctio id voluptates aspernatur sapiente veritatis commodi non repudiandae.</p>
        <div class="card jawab">
          <p>Jawab :</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur esse tempora fugit culpa nihil corrupti veniam placeat laborum sapiente repudiandae, dolores quasi blanditiis, assumenda modi. Nulla sed non deleniti iusto!</p>
        </div>
    </div>
  </div>
</template>

<script src="./js/faq.js" />

<style lang="scss" scopeds>
  .all {
    max-width: 1440px;
    margin: auto;
    padding-top: 10px;
  }
  .header_faq {
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
    }
  }
  .body_faq {
    padding: 50px 130px;
    margin: auto;
    width: 100%;  
    height: auto;
    font-family: "poppins";
    @media screen and (max-width: 768px) {
      padding: 50px 30px;   
    }
    p {
        font-weight: bold;
        font-size: 14px;
    }
    .jawab {
      padding: 10px;
      background-color: #eee;
      p {
        font-weight: normal;
        line-height: 20px;
      }
    }
  }
</style>
