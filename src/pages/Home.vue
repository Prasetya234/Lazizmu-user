<template>
  <div>
    <body>
      <nav>
        <!-- Image Slider 1 -->
        <div class="slider1">
          <div id="slider">
            <div class="slider">
              <b-loading
                :is-full-page="false"
                v-model="isLoading"
                :can-cancel="true"
              ></b-loading>
              <ul class="slides" :style="{ left: -width * current + 'px' }">
                <li v-for="(slide, index) in berita" :key="index">
                  <img :src="slide.image" alt="logo" />
                </li>
              </ul>
              <ul class="bullets">
                <li
                  v-for="(slide, index) in berita"
                  :key="index"
                  v-html="i == current ? '&#9679;' : '&omicron;'"
                  @click="selectSlide(index)"
                ></li>
              </ul>
              <!-- <a class="prev" href="#" @click.prevent="prevSlide">&#x25C0;</a>
            <a class="next" href="#" @click.prevent="nextSlide">&#x25B6;</a> -->
            </div>
          </div>
        </div>
        <!-- End Image Slider 1 -->
        <!-- Card Kalimat -->
        <div class="kalimat">
          <h3>{{ $t("program_kami.title") }}</h3>
          <p>
            {{ $t("program_kami.content") }}
          </p>
        </div>
        <!-- End Card Kalimat -->

        <!-- Card Content -->
        <div class="card-content" id="program">
          <div class="row">
            <div class="col-md-4">
              <img
                src="@/assets/ekonomi.png"
                alt=""
                width="100px"
                height="100px"
              />
              <h4>{{ $t("pondasi.title_ekonomi") }}</h4>
              <p>
                {{ $t("pondasi.content_ekonomi") }}
              </p>
            </div>
            <div class="col-md-4">
              <img
                src="@/assets/sosial.png"
                alt=""
                width="100px"
                height="100px"
              />
              <h4>{{ $t("pondasi.title_sosial") }}</h4>
              <p>
                {{ $t("pondasi.content_sosial") }}
              </p>
            </div>
            <div class="col-md-4">
              <img
                src="@/assets/pendidikan.png"
                alt=""
                width="100px"
                height="100px"
              />
              <h4>{{ $t("pondasi.title_pendidikan") }}</h4>
              <p>
                {{ $t("pondasi.content_pendidikan") }}
              </p>
            </div>
          </div>
        </div>
        <!-- Content Tiga -->
        <div class="content-tiga" id="berita">
          <h3>Berita</h3>
          <p>
            Aktivitas Ikhtiar Lazizmu untuk terus menebar kebaikan keseluruhan
            penjuru dunia.
          </p>
        </div>
        <!-- End Content Tiga -->
        <!-- Image SLider 2 -->
        <div class="slider2">
          <div id="slider">
            <div class="slider">
              <b-loading
                :is-full-page="false"
                v-model="isLoading"
                :can-cancel="true"
              ></b-loading>
              <ul class="slides" :style="{ left: -width * current + 'px' }">
                <li v-for="(slide, index) in berita" :key="index">
                  <img :src="slide.image" alt="logo" />
                </li>
              </ul>
              <ul class="bullets">
                <li
                  v-for="(slide, index) in berita"
                  :key="index"
                  v-html="i == current ? '&#9679;' : '&omicron;'"
                  @click="selectSlide(index)"
                ></li>
              </ul>
              <!-- <a class="prev" href="#" @click.prevent="prevSlide">&#x25C0;</a> -->
              <!-- <a class="next" href="#" @click.prevent="nextSlide">&#x25B6;</a> -->
            </div>
          </div>
        </div>
        <br />
        <!-- End Slider Image 2 -->
        <!-- Card Content 2 -->
        <div class="card-dua">
          <div class="kanan">
            <!-- <router-link
              :to="`/${$i18n.locale}/isi-berita`"
              style="text-decoration:none"
            > -->
            <div
              class="bungkus"
              v-for="(data, index) in berita"
              :key="index"
              id="zoom-In"
            >
              <div
                style="
                  cursor: pointer;
                  font-weight: bold;
                  font-size: 15px;
                  width: auto;
                "
                @click="toNewsLetter(index)"
              >
                <img :src="data.image" alt="logo" class="logo" /><br />
                {{ data.judul }}
              </div>
              <div class="catatan">
                <p>{{ data.kategoriId.kategoriName }}</p>
                <p style="text-align: right;">
                  {{ data.createdDate }}
                </p>
              </div>
            </div>
            <!-- </router-link> -->
          </div>
        </div>
        <br />
        <!-- End Card Content 2 -->
        <!-- Button Akhir -->
        <!-- <div class="button">
          <button>
            Baca Semua Berita <b-icon icon="chevron-right"></b-icon>
          </button>
        </div> -->
        <!-- End Button Akhir -->
      </nav>
    </body>
  </div>
</template>
<script src="./js/home.js" />
<style lang="scss" scoped="scoped">
// All

// css carousel slider
#slider {
  width: 100%;
}

.slider2 {
  margin-top: -50px;
}

.slider1 {
  margin-top: 50px;
}

.slider {
  margin: 0 auto;
  padding: 0;
  width: 800px;
  height: 500px;
  position: relative;
  overflow: hidden;
  ul.slides {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: table;
    position: absolute;
    top: 0;
    transition: left 800ms;
    li {
      list-style-type: none;
      display: table-cell;
      img {
        width: 800px;
        height: 100%;
      }
    }
  }
  ul.bullets {
    width: inherit;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0;
    margin: 0 0 10px 0;
    text-align: center;
    z-index: 1;
    li {
      list-style-type: none;
      display: inline;
      color: #fff;
      cursor: pointer;
      padding: 0 5px;
      font-size: 20px;
      font-family: sans-serif;
    }
  }
  .prev,
  .next {
    text-decoration: none;
    color: #fff;
    position: absolute;
    z-index: 1;
    font-size: 42px;
    top: 43%;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }
  .prev {
    left: 20px;
  }
  .next {
    right: 20px;
  }
}

// end carousel css

* {
  margin: 0px;
  padding: 0px;
}

body {
  max-width: 1440px;
  margin: auto;
  overflow: hidden;
}

nav {
  margin-top: 10px;
}

// Card Kalimat
.kalimat {
  // border: 1px solid red;
  text-align: center;
  padding: 20px;
  margin: 20px 0px 20px 0px;
  h3 {
    font-weight: bold;
    color: black;
    font-size: 36px;
  }
  p {
    margin: auto;
    // border: 1px solid red;
    width: 700px;
    font-size: 20px;
  }
}
// End Card Kalimat

// Card Content
.card-content {
  // border: 1px solid red;
  .row {
    padding: 20px 80px 30px 110px;
  }
  .col-md-4 {
  }
  img {
    // background: black;
    border-radius: 50%;
  }
  h4 {
    color: black;
    padding: 5px 5px 5px 0px;
  }
  p {
    text-align: justify;
    padding-right: 0px 50px 20px 0px;
  }
}
// End Card Content

// Content Dua
.content-satu {
  display: flex;
  img {
    width: 100%;
    height: auto;
    @media (max-width: 768px) {
      height: 100%;
    }
  }
  .kalimat-dua {
    background: black;
    text-align: center;
    h4 {
      color: #fff;
      padding: 5px;
      font-size: 36px;
      font-weight: bold;
      line-height: 50px;
      margin-top: 50px;
      margin-left: 100px;
      width: 260px;
      text-align: left;
    }
    p {
      padding: 10px 50px 20px 105px;
      text-align: left;
      font-size: 20px;
      color: #fff;
    }
    button {
      border: 1px solid #ffff;
      padding: 10px;
      margin: 10px;
      border-radius: 20px;
      width: 200px;
      background-color: transparent;
      color: #fff;
      font-weight: bold;
    }
    button:hover {
      background-color: #fff;
      color: black;
    }
  }
}
// End Content Dua
// Content Tiga
.content-tiga {
  text-align: center;
  padding: 50px 50px 100px 50px;
  h3 {
    font-size: 36px;
    color: black;
    font-weight: bold;
  }
  p {
    font-size: 20px;
  }
}
// End Content Tiga
// Image Slider 2

// End Image Slider 2
// Card Content 2
.card-dua {
  // border: 1px solid red;
  .kanan {
    padding: 10px 0px 10px 0px;
    width: 85%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    .bungkus {
      width: 100%;
      height: auto;
    }
  }
  img {
    width: 100%;
    height: 200px;
  }
  // a {
  //   color: black;
  //   font-size: 15px;
  //   font-weight: bold;
  //   text-decoration: none;
  //   cursor: pointer;
  // }
  // a:hover {
  //   color: black;
  // }
  .catatan {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #ccc;
    font-size: 12px;
    font-weight: 500;
    @media (max-width: 768px) {
      display: inline-block;
    }
  }
}

.kanan #zoom-In img {
  transform: scale(1);
  transition: 0.3s ease-in-out;
}
.kanan #zoom-In:hover img {
  transform: scale(1.03);
}
// End Card Content 2
</style>
