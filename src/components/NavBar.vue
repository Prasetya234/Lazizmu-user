<template>
  <div class="all">
    <!-- Nav -->
    <nav>
      <div class="wrapper">
        <div class="logo">
          <router-link to="/">
            <img
              src="@/assets/logo-kl-lazismu-smp-mds.jpg"
              alt="logo"
              width="100px"
              height="70px"
            />
          </router-link>
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul class="nav-links">
          <label for="close-btn" class="btn close-btn"
            ><i class="fas fa-times"></i
          ></label>
          <li>
            <router-link :to="`/${$i18n.locale}/#program`"><b>{{$t('nav.program')}}</b></router-link>
          </li>
          <li><router-link to="#"><b>{{$t('nav.layanan')}}</b></router-link></li>

          <li>
            <router-link :to="`/${$i18n.locale}/#berita`"><b>{{$t('nav.berita')}}</b></router-link>
          </li>
          <li><router-link to="#"><b>{{$t('nav.tentang_kami')}}</b></router-link></li>
          <li>
            <router-link
              to="infaq"
              type="button"
              class="button"
              style="color: black; border-radius: 30px"
              ><b>Infaq Sekarang</b></router-link
            >
          </li>
          <li class="languange">
            <a class="button1" type="button"><b>ARB</b></a>
            |
            <a class="button1" type="button"><b>ID</b></a>
          </li>
        </ul>
        <label for="menu-btn" class="btn menu-btn">
          <b-icon icon="list" aria-hidden="true"></b-icon>
        </label>
      </div>
    </nav>
    <div id="Search" style="display: none">
      <div class="form_search">
        <b-form-input type="search" class="cari" placeholder="Search">
        </b-form-input>
        <b-btn class="tombol">search</b-btn>
      </div>
    </div>
  </div>
</template>
<script src="./js/navbar.js" />
<style lang="scss" scoped>
.button {
  display: block;
  background: #ed8721;
  line-height: 25px;
  width: 200px;
  margin-top: 11px;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 80%;
    line-height: 40px;
  }
}

.form_search {
  padding: 10px 0px 10px 0px;
  color: #00a279;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  .cari {
    color: #00a279;
    width: 50%;
    height: 38px;
    border-radius: 0px;
    border: 1px solid #00a279;
  }
  .tombol {
    border-radius: 0px;
    width: auto;
    border: 1px solid #00a279;
    text-align: left;
    background: #00a279;
  }
}

.button1 {
  display: inline-block;
  width: auto;
  line-height: 10px;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    margin-top: 10px;
  }
}

.search {
  width: 40px;
  color: #00a279;
  margin: 0px 0px 0px 0px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: auto;
    float: right;
    margin: 10px 0px 10px 0px;
    // border: 1px solid red;
  }
}

// arb dan id
.languange {
  // border: solid 1px black;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    line-height: 30px;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
nav {
  position: relative;
  z-index: 99;
  width: 100%;
  background: #fff;
}
nav .wrapper {
  position: relative;
  max-width: 1300px;
  padding: 0px 30px;
  height: 90px;
  line-height: 70px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrapper .logo img {
  font-weight: 600;
}
.wrapper .nav-links {
  display: inline-flex;
}
.nav-links li {
  list-style: none;
  // border: 1px solid red;
}
.nav-links li a {
  // color: #f2f2f2;
  // border: 1px solid red;
  color: black;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 9px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
}
.nav-links li a:hover {
  // background: #3a3b3c;
}
.nav-links .mobile-item {
  display: none;
}
.nav-links li:hover .mega-box {
  transition: all 0.3s ease;
  top: 70px;
  opacity: 1;
  visibility: visible;
}
.drop-menu li a {
  width: 100%;
  display: block;
  padding: 0 0 0 15px;
  font-weight: 400;
  border-radius: 0px;
}
.content .row img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content .row header {
  color: #f2f2f2;
  font-size: 20px;
  font-weight: 500;
}
.wrapper .btn {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  display: none;
  width: 30px;
  height: 30px;
  // background: black;
  // border: 1px solid black;
  color: black;
}
.wrapper .btn.close-btn {
  position: absolute;
  right: 30px;
  top: 10px;
  color: #fff;
  background: red;
}

@media screen and (max-width: 970px) {
  .wrapper .btn {
    display: block;
  }
  .wrapper .nav-links {
    position: fixed;
    height: 100vh;
    width: 100%;
    max-width: 350px;
    top: 0;
    left: -100%;
    background: white;
    display: block;
    padding: 50px 10px;
    line-height: 50px;
    overflow-y: auto;
    box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.18);
    transition: all 0.3s ease;
  }
  /* custom scroll bar */
  ::-webkit-scrollbar {
    width: 10px;
    border: solid 1px red;
  }
  ::-webkit-scrollbar-track {
    background: #242526;
  }
  ::-webkit-scrollbar-thumb {
    background: #3a3b3c;
  }
  #menu-btn:checked ~ .nav-links {
    left: 0%;
  }
  #menu-btn:checked ~ .btn.menu-btn {
    display: none;
  }
  #close-btn:checked ~ .btn.menu-btn {
    display: block;
    color: red($color: #d9d9d9);
  }
  .nav-links li {
    // margin: 15px 10px;
  }
  .nav-links li a {
    padding: 0 20px;
    display: block;
    font-size: 20px;
  }
  .nav-links .drop-menu {
    position: static;
    opacity: 1;
    top: 65px;
    visibility: visible;
    padding-left: 20px;
    width: 100%;
    max-height: 0px;
    overflow: hidden;
    box-shadow: none;
    transition: all 0.3s ease;
  }
  #showDrop:checked ~ .drop-menu,
    // #showMega:checked ~ .mega-box {
    //   max-height: 100%;
    // }
    .nav-links .desktop-item {
    display: none;
  }
  .nav-links .mobile-item {
    display: block;
    color: #f2f2f2;
    font-size: 20px;
    font-weight: 500;
    padding-left: 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
  .nav-links .mobile-item:hover {
    background: #3a3b3c;
  }
  .drop-menu li {
    margin: 0;
  }
  .drop-menu li a {
    border-radius: 5px;
    font-size: 18px;
  }
  .content .row .mega-links {
    border-left: 0px;
    padding-left: 15px;
  }
  .row .mega-links li {
    margin: 0;
  }
  .content .row header {
    font-size: 19px;
  }
}
nav input {
  display: none;
}
</style>
