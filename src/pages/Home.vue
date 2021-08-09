<template>
  <div>
    <body>
      <nav>
        <!-- Image Slider 1 -->
        <div class="container">
          <div class="slider">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <!-- Text slides with image -->
              <b-carousel-slide
                img-src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              ></b-carousel-slide>

              <!-- Slides with custom text -->
              <b-carousel-slide
                img-src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              >
              </b-carousel-slide>

              <!-- Slides with image only -->
              <b-carousel-slide
                img-src="https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
              ></b-carousel-slide>

              <!-- Slides with img slot -->
              <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
              <b-carousel-slide>
                <template #img>
                  <img
                    class="d-block img-fluid w-100"
                    width="1024"
                    height="480"
                    src="https://images.unsplash.com/photo-1588822534638-028d5ddc07ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>

              <!-- Slide with blank fluid image to maintain slide aspect ratio -->
              <!--  -->
            </b-carousel>
          </div>
        </div>
        <!-- End Image Slider 1 -->
        <!-- Card Kalimat -->
        <div class="kalimat">
          <h3>Program Kami</h3>
          <p>
            Mds Filantropy Center memiliki 3 pilar program utama yang memiliki tujuan
            besar dalam membantu membangun sebuah pondasi dasar sebuah negara
          </p>
        </div>
        <!-- End Card Kalimat -->

        <!-- Card Content -->
        <div class="card-content" id="program">
          <div class="row">
            <div class="col-md-4">
              <img src="@/assets/ekonomi.png" alt="" width = '100px' height= '100px'/>
              <h4>Ekonomi</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                atque vel nam soluta sit debitis quae quo ad, laudantium
                incidunt quas culpa earum quaerat dolores impedit deleniti,
                doloribus nobis nostrum!
              </p>
              <button>
                Baca Selengkapnya<b-icon icon="caret-right-fill"></b-icon>
              </button>
            </div>
            <div class="col-md-4">
              <img src="@/assets/sosial.png" alt="" width = '100px' height= '100px'/>
              <h4>Sosial</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                atque vel nam soluta sit debitis quae quo ad, laudantium
                incidunt quas culpa earum quaerat dolores impedit deleniti,
                doloribus nobis nostrum!
              </p>
              <button>
                Baca Selengkapnya <b-icon icon="caret-right-fill"></b-icon>
              </button>
            </div>
            <div class="col-md-4">
              <img src="@/assets/pendidikan.png" alt="" width = '100px' height= '100px'/>
              <h4>Pendidikan</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                atque vel nam soluta sit debitis quae quo ad, laudantium
                incidunt quas culpa earum quaerat dolores impedit deleniti,
                doloribus nobis nostrum!
              </p>
              <button>
                Baca Selengkapnya<b-icon icon="caret-right-fill"></b-icon>
              </button>
            </div>
          </div>
        </div>
        <!-- Content Tiga -->
        <div class="content-tiga" id="berita">
          <h3>Berita</h3>
          <p>
            Aktivitas Ikhtiar Lazizmu untuk terus menebar kebaikan
            keseluruhan penjuru dunia.
          </p>
        </div>
        <!-- End Content Tiga -->
        <!-- Image SLider 2 -->
        <div class="container">
          <div class="slider">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <!-- Text slides with image -->
              <b-carousel-slide
                img-src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              ></b-carousel-slide>

              <!-- Slides with custom text -->
              <b-carousel-slide
                img-src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              >
              </b-carousel-slide>

              <!-- Slides with image only -->
              <b-carousel-slide
                img-src="https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
              ></b-carousel-slide>

              <!-- Slides with img slot -->
              <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
              <b-carousel-slide>
                <template #img>
                  <img
                    class="d-block img-fluid w-100"
                    width="1024"
                    height="480"
                    src="https://images.unsplash.com/photo-1588822534638-028d5ddc07ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>

              <!-- Slide with blank fluid image to maintain slide aspect ratio -->
              <!--  -->
            </b-carousel>
          </div>
        </div>
        <br />
        <!-- End Slider Image 2 -->
        <!-- Card Content 2 -->
        <div class="container card-dua">
          <div class="row">
            <div class="col-md-3" id="zoom-In">
              <a href=""
                ><img
                  src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  alt=""
              /></a>
              <a href="">Dompet Dhuafa Terima Donasi Mobil Ambulans Jenazah</a>
              <div class="catatan">
                <p>Pendayagunaan</p>
                <p>Sat, 7 Agustus 2021</p>
              </div>
            </div>
            <div class="col-md-3" id="zoom-In">
              <a href=""
                ><img
                  src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  alt=""
              /></a>
              <a href="">Dompet Dhuafa Terima Donasi Mobil Ambulans Jenazah</a>

              <div class="catatan">
                <p>Pendayagunaan</p>
                <p>Sat, 7 Agustus 2021</p>
              </div>
            </div>
            <div class="col-md-3" id="zoom-In">
              <a href=""
                ><img
                  src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  alt=""
              /></a>
              <a href="">Dompet Dhuafa Terima Donasi Mobil Ambulans Jenazah</a>

              <div class="catatan">
                <p>Pendayagunaan</p>
                <p>Sat, 7 Agustus 2021</p>
              </div>
            </div>
            <div class="col-md-3" id="zoom-In">
              <a href=""
                ><img
                  src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  alt=""
              /></a>
              <a href="">Dompet Dhuafa Terima Donasi Mobil Ambulans Jenazah</a>

              <div class="catatan">
                <p>Pendayagunaan</p>
                <p>Sat, 7 Agustus 2021</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <!-- End Card Content 2 -->
        <!-- Button Akhir -->
        <div class="button">
          <button>
            Baca Semua Berita <b-icon icon="chevron-right"></b-icon>
          </button>
        </div>
        <!-- End Button Akhir -->
      </nav>
    </body>
  </div>
</template>
<script src="./js/home.js" />
<style lang="scss" scoped="scoped">
// All
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

// Image SLider
#slider {
  margin: 0 auto;
  width: 80%;
  max-width: 100%;
  text-align: center;
}
#slider input[type="radio"] {
  display: none;
}
#slider label {
  cursor: pointer;
  text-decoration: none;
}
#slides {
  padding: 10px;
  border: 3px solid #ccc;
  background: #fff;
  position: relative;
  z-index: 1;
}
#overflow {
  width: 100%;
  overflow: hidden;
}
#slide1:checked ~ #slides .inner {
  margin-left: 0;
}
#slide2:checked ~ #slides .inner {
  margin-left: -100%;
}
#slide3:checked ~ #slides .inner {
  margin-left: -200%;
}
#slide4:checked ~ #slides .inner {
  margin-left: -300%;
}
#slides .inner {
  transition: margin-left 800ms cubic-bezier(0.77, 0, 0.175, 1);
  width: 400%;
  line-height: 0;
  height: 300px;
}
#slides .slide {
  width: 25%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #fff;
}
#slides .slide_1 {
  background: #00171f;
}
#slides .slide_2 {
  background: #003459;
}
#slides .slide_3 {
  background: #007ea7;
}
#slides .slide_4 {
  background: #00a8e8;
}
#controls {
  margin: -180px 0 0 0;
  width: 100%;
  height: 50px;
  z-index: 3;
  position: relative;
}
#controls label {
  transition: opacity 0.2s ease-out;
  display: none;
  width: 50px;
  height: 50px;
  opacity: 0.4;
}
#controls label:hover {
  opacity: 1;
}
#slide1:checked ~ #controls label:nth-child(2),
#slide2:checked ~ #controls label:nth-child(3),
#slide3:checked ~ #controls label:nth-child(4),
#slide4:checked ~ #controls label:nth-child(1) {
  background: url(https://image.flaticon.com/icons/svg/130/130884.svg) no-repeat;
  float: right;
  margin: 0 -50px 0 0;
  display: block;
}
#slide1:checked ~ #controls label:nth-last-child(2),
#slide2:checked ~ #controls label:nth-last-child(3),
#slide3:checked ~ #controls label:nth-last-child(4),
#slide4:checked ~ #controls label:nth-last-child(1) {
  background: url(https://image.flaticon.com/icons/svg/130/130882.svg) no-repeat;
  float: left;
  margin: 0 0 0 -50px;
  display: block;
}
#bullets {
  margin: 150px 0 0;
  text-align: center;
}
#bullets label {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: #ccc;
  margin: 0 10px;
}
#slide1:checked ~ #bullets label:nth-child(1),
#slide2:checked ~ #bullets label:nth-child(2),
#slide3:checked ~ #bullets label:nth-child(3),
#slide4:checked ~ #bullets label:nth-child(4) {
  background: #444;
}
@media screen and (max-width: 900px) {
  #slide1:checked ~ #controls label:nth-child(2),
  #slide2:checked ~ #controls label:nth-child(3),
  #slide3:checked ~ #controls label:nth-child(4),
  #slide4:checked ~ #controls label:nth-child(1),
  #slide1:checked ~ #controls label:nth-last-child(2),
  #slide2:checked ~ #controls label:nth-last-child(3),
  #slide3:checked ~ #controls label:nth-last-child(4),
  #slide4:checked ~ #controls label:nth-last-child(1) {
    margin: 0;
  }
  #slides {
    max-width: calc(100% - 140px);
    margin: 0 auto;
  }
}
// End Image Slider

// Card Kalimat
.kalimat {
  // border: 1px solid red;
  text-align: center;
  padding: 20px;
  margin: 20px 0px 20px 0px;
  h3 {
    font-weight: bold;
    color: #1f7c4d;
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
    background: #1f7c4d;
    border-radius: 50%;
  }
  h4 {
    color: #1f7c4d;
    padding: 5px 5px 5px 0px;
  }
  p {
    text-align: justify;
    padding-right: 0px 50px 20px 0px;
  }
  button {
    border: 1px solid #1f7c4d;
    border-radius: 20px;
    line-height: 40px;
    width: 250px;
    background-color: transparent;
    color: #1f7c4d;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  button:hover {
    background: #1f7c4d;
    color: #fff;
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
    background: #1f7c4d;
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
      color: #1f7c4d;
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
    color: #1f7c4d;
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
  .row {
    padding: 5px;
    background-position: center;
  }
  img {
    width: 250px;
  }
  a {
    color: #1f7c4d;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    padding-bottom: 5px;
    cursor: pointer;
  }
  a:hover {
    color: #c8f8e0;
  }
  .catatan {
    display: flex;
    color: #ccc;
    justify-content: space-between;
    font-size: 12px;
    @media (max-width: 768px) {
      display: inline-block;
    }
  }
  .row #zoom-In img {
    transform: scale(1);
    transition: 0.3s ease-in-out;
  }
  .row #zoom-In:hover img {
    transform: scale(1.03);
  }
}
// End Card Content 2
// Button Akhir
.button {
  padding: 20px;
  text-align: center;
  button {
    font-size: 20px;
    line-height: 60px;
    width: 250px;
    border-radius: 30px;
    background-color: #1f7c4d;
    color: #fff;
    border: none;
  }
}
// End Button Akhir
</style>
