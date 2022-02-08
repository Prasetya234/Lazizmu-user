<template>
  <div class="header">
    <div class="content">
      <img src="https://lazismu.org/images/logo-icon.svg" alt="logo" style="display: block; margin-right: auto;margin-left"/>
      <h1>KALKULATOR ZAKAT</h1>
      <p>Yuk hitung berapa zakat yang harus kamu keluarkan tahun ini</p>
    </div>
    <div>
      <div style="width: 40%">
        <h1>komponen zakat</h1>
        <p>
          Silahkan diisi dengan pendapatan bulanan Anda. Perhitungan Nishob
          tetap didasarkan pada nishob emas 85 gr yang dihitung bulanan
        </p>
        <label class="sr-only" for="inline-form-input-username"
          >Pendapatan (Gaji bulanan)</label
        >
        <b-input-group prepend="Rp." class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input
            id="inline-form-input-username"
            placeholder="0"
            style="text-align: right"
          ></b-form-input>
        </b-input-group>
        <label class="sr-only" for="inline-form-input-username"
          >Pendapatan lain bulanan (optional)</label
        >
        <b-input-group prepend="Rp." class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input
            id="inline-form-input-username"
            placeholder="0"
            style="text-align: right"
          ></b-form-input>
        </b-input-group>
        <label class="sr-only" for="inline-form-input-username"
          >Hutang/Cicilan bulanan (opsional)</label
        >
        <b-input-group prepend="Rp." class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input
            id="inline-form-input-username"
            placeholder="0"
            style="text-align: right"
          ></b-form-input>
        </b-input-group>
      </div>

      <div style="width: 40%">
        <h1>Nilai zakat</h1>
        <p>
          Berikut hasil perhitungan dan nilai zakat yang harus anda keluarkan
        </p>
        <label class="sr-only" for="inline-form-input-username"
          >Total Harta</label
        >
        <b-input-group prepend="Rp." class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input
            id="inline-form-input-username"
            placeholder="0"
            style="text-align: right; background-color: rgb(235, 238, 238)"
          ></b-form-input>
        </b-input-group>
        <label class="sr-only" for="inline-form-input-username">Nisab</label>
        <b-input-group prepend="Rp." class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input
            id="inline-form-input-username"
            placeholder="6.131.333"
            style="text-align: right; background-color: rgb(235, 238, 238)"
          ></b-form-input>
        </b-input-group>
        <label class="sr-only" for="inline-form-input-username"
          >Nilai Zakat</label
        >
        <b-input-group prepend="Rp." class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input
            id="inline-form-input-username"
            placeholder="0"
            style="text-align: right; background-color: rgb(235, 238, 238)"
          ></b-form-input>
        </b-input-group>
      </div>
    </div>
  </div>
</template>

<script src="./js/testing.js"></script>
<style lang="scss" scoped>
.header {
  width: 80%;
  margin: auto;
}

.content {
  
}
</style>
