<template>
  <div class="all">
    <b-loading
      :is-full-page="true"
      v-model="isLoading"
      :can-cancel="true"
    ></b-loading>
    <div class="content">
      <b-button-group class="grup">
        <button
          class="button"
          @click="page('ekonomi')"
          v-if="economyModel === false"
        >
          Ekonomi
        </button>
        <button
          class="button"
          style="background:#ed8721"
          v-if="economyModel === true"
        >
          Ekonomi
        </button>
        <button
          class="button"
          @click="page('sosial')"
          v-if="sosialModel === false"
        >
          Sosial
        </button>
        <button
          class="button"
          style="background:#ed8721"
          v-if="sosialModel === true"
        >
          Sosial
        </button>
        <button
          class="button"
          @click="page('pendidikan')"
          v-if="pendidikanModel === false"
        >
          Pendidikan
        </button>
        <button
          class="button"
          style="background:#ed8721"
          v-if="pendidikanModel === true"
        >
          Pendidikan
        </button>
      </b-button-group>
      <div v-if="economyModel === true">
        <div class="grid">
          <div v-for="(data, index) in beritaEkonomi" :key="index" class="data">
            <div class="card">
              <router-link to="pembayaran" style="text-decoration: none;">
                <img :src="data.image" alt="" class="image" />
              </router-link>
              <div class="card-body ">
                <router-link to="pembayaran" style="text-decoration: none;">
                  <div class="judul">
                    <p style="color:gray; font-size:14px">
                      {{ data.kategoriId.kategoriName }}
                    </p>
                    <p class="judul_berita">
                      {{ data.judul }}
                    </p>
                  </div>
                </router-link>
                <div class="foot">
                  <div class="foot_left">
                    <p class="donasi">Donasi Terkumpul</p>
                    <p>
                      <b>{{ data.donasi }}</b>
                    </p>
                  </div>
                  <div class="foot_right">
                    <p class="donatur">Donatur</p>
                    <p>
                      <b>{{ data.donatur }}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="beritaEkonomi.length == 0">
          <div style="text-align: center; padding: 170px 0px;">
            <h2>Program Infaq Kategori Ekonomi Belum Tersedia</h2>
          </div>
        </div>
        <div class="foot-button">
          <button
            v-if="lihatSemua == false"
            class="lihat"
            @click="showAll('ekonomi')"
          >
            Lihat Semua
          </button>
          <button
            v-if="lihatSemua == true"
            class="lihat"
            @click="showAll('ekonomi')"
          >
            Ciutkan
          </button>
        </div>
      </div>
      <div v-if="sosialModel === true">
        <div class="grid">
          <div v-for="(data, index) in beritaSosial" :key="index" class="data">
            <div class="card">
              <router-link to="pembayaran" style="text-decoration: none;">
                <img :src="data.image" alt="" class="image" />
              </router-link>
              <div class="card-body ">
                <router-link to="pembayaran" style="text-decoration: none;">
                  <div class="judul">
                    <p style="color:gray; font-size:14px">
                      {{ data.kategoriId.kategoriName }}
                    </p>
                    <p class="judul_berita">
                      {{ data.judul }}
                    </p>
                  </div>
                </router-link>
                <div class="foot">
                  <div class="foot_left">
                    <p class="donasi">Donasi Terkumpul</p>
                    <p>
                      <b>{{ data.donasi }}</b>
                    </p>
                  </div>
                  <div class="foot_right">
                    <p class="donatur">Donatur</p>
                    <p>
                      <b>{{ data.donatur }}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="beritaSosial.length == 0">
          <div style="text-align: center; padding: 170px 0px;">
            <h2>Program Infaq Kategori Pendidikan Belum Tersedia</h2>
          </div>
        </div>
        <div class="foot-button">
          <button
            v-if="lihatSemua == false"
            class="lihat"
            @click="showAll('sosial')"
          >
            Lihat Semua
          </button>
          <button
            v-if="lihatSemua == true"
            class="lihat"
            @click="showAll('sosial')"
          >
            Ciutkan
          </button>
        </div>
      </div>
      <div v-if="pendidikanModel === true">
        <div class="grid">
          <div
            v-for="(data, index) in beritaPendidikan"
            :key="index"
            class="data"
          >
            <div class="card">
              <router-link to="pembayaran" style="text-decoration: none;">
                <img :src="data.image" alt="" class="image" />
              </router-link>
              <div class="card-body ">
                <router-link to="pembayaran" style="text-decoration: none;">
                  <div class="judul">
                    <p style="color:gray; font-size:14px">
                      {{ data.kategoriId.kategoriName }}
                    </p>
                    <p class="judul_berita">
                      {{ data.judul }}
                    </p>
                  </div>
                </router-link>
                <div class="foot">
                  <div class="foot_left">
                    <p class="donasi">Donasi Terkumpul</p>
                    <p>
                      <b>{{ data.donasi }}</b>
                    </p>
                  </div>
                  <div class="foot_right">
                    <p class="donatur">Donatur</p>
                    <p>
                      <b>{{ data.donatur }}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="beritaPendidikan.length == 0">
          <div style="text-align: center; padding: 170px 0px;">
            <h2>Program Infaq Kategori Pendidikan Belum Tersedia</h2>
          </div>
        </div>
        <div class="foot-button">
          <button
            v-if="lihatSemua == false"
            class="lihat"
            @click="showAll('pendidikan')"
          >
            Lihat Semua
          </button>
          <button
            v-if="lihatSemua == true"
            class="lihat"
            @click="showAll('pendidikan')"
          >
            Ciutkan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/infaq.js" />

<style lang="scss" scoped>
.all {
  max-width: 1440px;
  margin: auto;
  width: 100%;
}
.content {
  width: 80%;
  margin: auto;
  padding-bottom: 50px;
  // button grup
  .grup {
    width: 100%;
    gap: 15px;
    .button {
      width: 100%;
      height: 40px;
      border: 0px solid gray;
      border-radius: 0px;
      background: whitesmoke;
      color: black;
    }
  }
  .grup :focus {
    background: #ed8721;
  }

  // berita
  .grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    .card {
      width: 100%;
      margin: 20px 0px;
      .image {
        width: 100%;
        height: 200px;
        @media screen and (max-width: 1000px) {
          object-fit: cover;
        }
      }
      .judul {
        padding-top: 7px;
        line-height: 9px;
        color: black;
        &_berita {
          border-bottom: 3px solid orangered;
          padding: 0px 0px 8px 0px;
          font-size: 17px;
          color: black;
        }
      }
      .foot {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        line-height: 9px;
        &_left {
          width: auto;
          height: auto;
          .donasi {
            font-size: 13px;
            color: gray;
            width: 100%;
            height: auto;
          }
        }
        &_right {
          width: auto;
          height: auto;
          text-align: right;
          .donatur {
            font-size: 13px;
            color: gray;
          }
        }

        @media screen and (max-width: 980px) {
          line-height: 13px;
        }
      }
    }
    @media screen and (max-width: 1000px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  // button lihat semua
  .foot-button {
    .lihat {
      width: 130px;
      height: 40px;
      border: none;
      border-radius: 5px;
      color: white;
      display: block;
      background-color: #ed8721;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
