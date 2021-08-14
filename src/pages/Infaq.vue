<template>
  <div class="all">
    <div class="content">
      <b-button-group class="grup">
        <button
          class="button"
          @click="ekonomiPage"
          v-if="economyModel === false"
        >
          Ekonomi
        </button>
        <button
          class="button"
          @click="ekonomiPage"
          style="background:#ed8721"
          v-if="economyModel === true"
        >
          Ekonomi
        </button>
        <button class="button" @click="sosialPage" v-if="sosialModel === false">
          Sosial
        </button>
        <button
          class="button"
          @click="sosialPage"
          style="background:#ed8721"
          v-if="sosialModel === true"
        >
          Sosial
        </button>
        <button
          class="button"
          @click="pendidikanPage"
          v-if="pendidikanModel === false"
        >
          Pendidikan
        </button>
        <button
          class="button"
          @click="pendidikanPage"
          style="background:#ed8721"
          v-if="pendidikanModel === true"
        >
          Pendidikan
        </button>
      </b-button-group>
      <div v-if="economyModel === true">
        <div class="grid">
          <div
            v-for="(data_ekonomi, index) in beritaEkonomi"
            :key="index"
            class="data"
          >
            <div class="card">
              <router-link to="pembayaran" style="text-decoration: none;">
                <img :src="data_ekonomi.image" alt="" class="image" />
              </router-link>
              <div class="card-body ">
                <router-link to="pembayaran" style="text-decoration: none;">
                  <div class="judul">
                    <p style="color:gray; font-size:14px">
                      {{ data_ekonomi.category }}
                    </p>
                    <p class="judul_berita">
                      {{ data_ekonomi.content.judul }}
                    </p>
                  </div>
                </router-link>
                <div class="foot">
                  <div class="foot_left">
                    <p class="donasi">Donasi Terkumpul</p>
                    <p>
                      <b>{{ data_ekonomi.content.donasi }}</b>
                    </p>
                  </div>
                  <div class="foot_right">
                    <p class="donatur">Donatur</p>
                    <p>
                      <b>{{ data_ekonomi.content.donatur }}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="foot-button">
          <button
            v-if="beritaEkonomi.length === 3"
            class="lihat"
            @click="showAll"
          >
            Lihat Semua
          </button>
          <button
            v-if="beritaEkonomi.length === berita_ekonomi.length"
            class="lihat"
            @click="showAll"
          >
            Ciutkan
          </button>
        </div>
      </div>
      <div v-if="sosialModel === true">
        <div class="grid">
          <div
            v-for="(data_sosial, index) in beritaSosial"
            :key="index"
            class="data"
          >
            <div class="card">
              <router-link to="pembayaran" style="text-decoration: none;">
                <img :src="data_sosial.image" alt="" class="image" />
              </router-link>
              <div class="card-body ">
                <router-link to="pembayaran" style="text-decoration: none;">
                  <div class="judul">
                    <p style="color:gray; font-size:14px">
                      {{ data_sosial.category }}
                    </p>
                    <p class="judul_berita">{{ data_sosial.content.judul }}</p>
                  </div>
                </router-link>
                <div class="foot">
                  <div class="foot_left">
                    <p class="donasi">Donasi Terkumpul</p>
                    <p>
                      <b>{{ data_sosial.content.donasi }}</b>
                    </p>
                  </div>
                  <div class="foot_right">
                    <p class="donatur">Donatur</p>
                    <p>
                      <b>{{ data_sosial.content.donatur }}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="foot-button">
          <button
            v-if="beritaSosial.length === 3"
            class="lihat"
            @click="showAll"
          >
            Lihat Semua
          </button>
          <button
            v-if="berita_sosial.length === beritaSosial.length"
            class="lihat"
            @click="showAll"
          >
            Ciutkan
          </button>
        </div>
      </div>
      <div v-if="pendidikanModel === true">
        <div class="grid">
          <div
            v-for="(data_pendidikan, index) in beritaPendidikan"
            :key="index"
            class="data"
          >
            <div class="card">
              <router-link to="pembayaran" style="text-decoration: none;">
                <img :src="data_pendidikan.image" alt="" class="image" />
              </router-link>
              <div class="card-body ">
                <router-link to="pembayaran" style="text-decoration: none;">
                  <div class="judul">
                    <p style="color:gray; font-size:14px">
                      {{ data_pendidikan.category }}
                    </p>
                    <p class="judul_berita">
                      {{ data_pendidikan.content.judul }}
                    </p>
                  </div>
                </router-link>
                <div class="foot">
                  <div class="foot_left">
                    <p class="donasi">Donasi Terkumpul</p>
                    <p>
                      <b>{{ data_pendidikan.content.donasi }}</b>
                    </p>
                  </div>
                  <div class="foot_right">
                    <p class="donatur">Donatur</p>
                    <p>
                      <b>{{ data_pendidikan.content.donatur }}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="foot-button">
          <button
            v-if="beritaPendidikan.length === 3"
            class="lihat"
            @click="showAll"
          >
            Lihat Semua
          </button>
          <button
            v-if="beritaPendidikan.length === berita_pendidikan.length"
            class="lihat"
            @click="showAll"
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
          p {
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
