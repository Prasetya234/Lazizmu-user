<template>
  <div class="all">
    <div class="content">
      <div class="head">
        <p>Login Admin</p>
      </div>
      <div class="card">
        <span>Email</span>
        <b-form-input type="email" placeholder="Email"></b-form-input>
        <span>Password</span>
        <b-form-input type="password" placeholder="Password"></b-form-input>
        <a href="#" class="lupa_password">Lupa Password?</a>
        <div class="Button">
          <b-button class="login">Login</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/login.js" />

<style lang="scss" scoped>
  .all {
    max-width: 1440px;
    margin: auto;
  }

  .content {
    width: 100%;
    max-width: 400px;
    margin: auto;
    padding: 10px 0px;
  }

  .head {
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    padding-bottom: 20px;
  }

  .card {
    width: 100%;
    max-width: 330px;
    margin: auto;
    padding: 10px 10px;
    line-height: 40px;
    span {
      font-weight: 600;
    }
    @media screen and (max-width: 400px) {
      max-width: 250px;
    }
    .lupa_password {
      text-decoration: none;
      text-align: right;
    }
  }

  .Button {
    width: 100%;
    .login {
      width: 100%;
      background: #ed8721;
      font-size: 15px;
      font-weight: bold;
    }
  }
</style>
