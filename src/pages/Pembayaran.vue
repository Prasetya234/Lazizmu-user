<template>
  <div class="all">
    <div class="content">
      <div class="top-3">
        <p>
          {{ $t("pembayaran.head") }}
        </p>
      </div>
      <div class="body">
        <!-- <b-card-group deck class="top-card"> -->
        <b-row class="pembungkus_b-col">
          <!-- card1 -->
          <b-col>
            <!-- card3 -->
            <b-card class="card-1">
              <b-card-text
                style="
                  color: green;
                  border: 1px solid green;
                  border-top: none;
                  border-left: none;
                  border-right: none;
                "
                >{{ $t("pembayaran.judul_card2") }}</b-card-text
              >
              <!-- form -->
              <b-form class="form">
                <label>{{ $t("pembayaran.sapaan") }}</label>
                <b-form-select
                  class="select"
                  :options="[{ text: 'Bapak' }, 'Ibu', 'saudara', 'Saudari']"
                ></b-form-select>
              </b-form>
              <b-form class="form">
                <label>{{ $t("pembayaran.nama") }}</label>
                <input class="select" />
              </b-form>
              <b-form class="form">
                <label>{{ $t("pembayaran.tlp") }}</label>
                <input min="11" class="select" />
                <b-form-text
                  style="display: inline-block; text-align: left; width: 50%"
                >
                  {{ $t("pembayaran.contoh") }}
                </b-form-text>
              </b-form>
              <b-form class="form">
                <label class="label2">{{ $t("pembayaran.alamat") }}</label>
                <textarea class="select2"> </textarea>
              </b-form>
              <b-form class="form">
                <label>{{ $t("pembayaran.jumlah") }}</label>

                <input type="number" min="10000" class="select" />
                <b-form-text
                  style="display: inline-block; text-align: left; width: 50%"
                >
                  {{ $t("pembayaran.minimal") }}
                </b-form-text>
              </b-form>
            </b-card>
          </b-col>

          <!-- card 2 -->
          <b-col>
            <div class="card card-2" footer-tag="footer">
              <div class="card-header transaksi">
                <p>{{ $t("pembayaran.judul_card3") }}</p>
              </div>
              <div class="card-body">
                <b-tabs>
                  <b-tab title="Online Payment" active>
                    <div v-for="(data, index) in logo_image" :key="index">
                      <b-form-radio name="some-radios" class="image">
                        <img :src="data.image" alt="logo" class="logo" />
                      </b-form-radio>
                    </div>
                  </b-tab>
                  <b-tab title="Transfer Bank">
                    <div v-for="(data2, index) in logo_image_bank" :key="index">
                      <b-form-radio name="some-radios" class="image"
                        ><img :src="data2.image" alt="logo" class="logo"
                      /></b-form-radio>
                    </div>
                  </b-tab>
                </b-tabs>
              </div>
              <div class="card-footer">
                <div class="btn-infaq">
                  <b-btn class="btn">{{ $t("pembayaran.button") }}!</b-btn>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
        <!-- </b-card-group> -->
      </div>
    </div>
  </div>
</template>

<script src="./js/pembayaran.js" />

<style lang="scss" scoped>
  .all {
    max-width: 1440px;
    margin: auto;
    // padding-top: 100px;
    font-family: "poppins", sans-serif;
    @media screen and(max-width:768px) {
    }
  }
  .content {
    width: 100%;
    margin: auto;
  }

  .image {
    padding-top: 20px;
  }
  .logo {
    width: 100px;
    height: auto;
    margin: 0px 0px 0px 10px;
    filter: brightness(110%);
  }
  .wrapping_form-search {
    background: #333333;
    color: #333333;
    padding: 10px 0px;
    .search_icon {
      position: absolute;
      display: flex;
      color: #fff;
      text-align: right;
      float: right;
      width: 17%;
      margin-top: 17px;
      @media screen and (max-width: 768px) {
      }
    }
    .form_search {
      width: 80%;
      height: 50px;
      padding: 0px 15px;
      margin: auto;
      background: #333333;
      color: #fff;
      // border: none;
      @media screen and (max-width: 768px) {
        width: 70%;
      }
    }
  }

  // top-1
  .top-1 {
    width: 85%;
    margin: auto;
    padding: 10px 5px 0px 5px;
    // border: 1px solid red;
    @media screen and(max-width:768px) {
    }
    .icon-left {
      //   border: 1px solid red;
      width: 100%;
      align-items: center;
      display: flex;
      cursor: pointer;
      @media screen and(max-width:768px) {
      }
    }
    .icon-right {
      text-align: right;
      width: 100%;
      //   border: 1px solid red;
      @media screen and(max-width:768px) {
      }
      .icon {
        margin: 5px;
        cursor: pointer;
        font-size: 1rem;
      }
    }
  }

  // top-2
  .pembungkus-top2 {
    width: 100%;
    border: 1px solid rgb(173, 173, 173);
    border-right: none;
    border-left: none;
    // top-2
    .top-2 {
      width: 85%;
      margin: auto;
      padding: 5px 0px 5px 0px;
      // background: rosybrown;
      // border: 1px solid red;
      .left {
        width: 100%;
        // border: 1px solid red;
        //   padding: 10px 0px 10px 0px;
        cursor: pointer;
      }
      .right {
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        //   border: 1px solid red;
        padding-top: 10px;
        text-align: right;
        a {
          text-decoration: none;
          color: black;
        }
        .confirm {
          text-align: right;
          width: 100%;
          // border: 1px solid red;
          font-size: 15px;
          font-weight: bold;
        }
        .icon-search {
          // border: 1px solid red;
          margin: 0px 0px 0px 30px;
          cursor: pointer;
        }
      }
    }
  }

  // top-3
  .top-3 {
    width: 85%;
    margin: auto;
    p {
      width: 100%;
      //   border: 1px solid black;
      margin-top: 40px;
      border-radius: 5px;
      background: #fcf8e3;
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      font-size: 15px;
      padding: 0px 0px 0px 15px;
      @media screen and (max-width: 375px) {
        height: auto;
        text-align: center;
      }
    }
  }

  // body
  .body {
    width: 85%;
    margin: auto;
    .pembungkus_b-col {
      @media (max-width: 768px) {
        display: inline-block;
      }
    }
    // form
    .form {
      display: inline-block;
      width: 90%;
      // align-items: center;
      // justify-content: center;
      text-align: right;
      padding-top: 10px;

      label {
        font-size: 15px;
      }
      .select {
        width: 50%;
        font-size: 15px;
        height: 35px;
        margin-left: 50px;
      }
      .label2 {
        padding-top: 15px;
        vertical-align: top;
      }
      .select2 {
        width: 50%;
        margin-left: 50px;
      }
      // @media form
      @media screen and (max-width: 768px) {
        width: 100%;
        display: inline-block;
        text-align: left;
        label {
          font-size: 15px;
          width: 100%;
        }
        .select {
          width: 100%;
          height: 35px;
          margin-left: 0px;
        }
        .label2 {
          padding-top: 0px;
          vertical-align: top;
        }
        .select2 {
          margin-left: 0px;
          width: 100%;
        }
      }
    }
    // form2
    .form2 {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      padding-top: 10px;
      .label {
        width: 50%;
        font-size: 15px;
        text-align: right;
        padding-right: 50px;
      }
      .select {
        width: 63%;
        font-size: 15px;
        height: auto;
      }
      // @media form2
      @media screen and (max-width: 768px) {
        width: 100%;
        height: auto;
        display: flex;
        text-align: left;
        .label {
          font-size: 15px;
          width: 100%;
          text-align: left;
          padding-right: 0px;
        }
        .select {
          width: 100%;
          height: auto;
          margin-left: 0px;
        }
      }
    }

    .card-1 {
      width: 100%;
      height: auto;
      background: #e4f0e4;
      border-radius: 0;
      @media screen and (max-width: 768px) {
        margin: 0px 0px 20px 0px;
      }
    }
    .card-2 {
      width: 100%;
      height: auto;
      border-radius: 0;
      font-size: 15px;
      @media screen and (max-width: 375px) {
        margin: 0px 0px 0px 0px;
      }
      .transaksi {
        width: 100%;
        height: 50px;
        background: #dff0d8;
        align-items: center;
        display: flex;
        padding: 13px 0px 0px 10px;

        p {
          width: auto;
          height: auto;
          color: green;
        }
      }
    }
  }

  .btn-infaq {
    width: 100%;
    .btn {
      width: 100%;
      height: 50px;
      color: #fff;
      border-radius: 4px;
    }
  }

  .btn-infaq {
    width: 100%;
    .btn {
      width: 100%;
      height: 50px;
      color: #fff;
      border-radius: 4px;
      background: #f0ad4e;
      border: none;
    }
  }
  .btn-infaq :hover {
    background: #e78d0d;
  }

  // footer
  .foot {
    background: #f2f2f2;
    margin-top: 40px;
    padding-top: 20px;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      height: auto;
      text-align: center;
      padding: 2 0px 10px 0px 10px;
    }
  }
</style>
