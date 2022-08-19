<template>
  <section class="wallet-section section-space-b">
    <div class="container">
      <!-- {{ kontak }} -->
      <div class="row g-gs">
        <div class="col-lg-4 col-md-6" v-for="item in kontak" :key="item.id">
          <router-link
            :to="{ name: 'show-contact', params: { id: item.id } }"
            class="card card-full text-center"
          >
            <div class="card-body card-body-s1 d-block">
              <div class="wrapper">
                <img
                  class="img-responsive circle mb-4 w-80 m-0 p-0"
                  :src="path + item.gambar"
                  alt=""
                />
                <!-- <div class="circle"></div> -->
              </div>
              <h4 class="card-title mb-3">{{ item.nama }}</h4>
              <p class="card-text card-text-s1 mb-4">
                {{ item.nama_perusahaan }} <br />{{ item.alamat }} <br />{{
                  item.email
                }}
                <br />{{ item.nomor }}
              </p>
            </div>
            <!-- end card-body --> </router-link
          ><!-- end card -->
        </div>
        <!-- end col -->
      </div>
      <!-- row -->
    </div>
    <!-- .container -->
  </section>
  <!-- end wallet-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import axios from "axios";

export default {
  name: "WalletSectionTwo",
  data() {
    return {
      SectionData,
      kontak: [],
      path: "",
    };
  },
  methods: {
    getKontak() {
      axios.get(process.env.VUE_APP_ROOT_API + "kontak").then(
        function (response) {
          this.kontak = response.data.data;
          this.path = "https://api.direktori.ppliofficial.com";
        }.bind(this)
      );
    },
    // getProfil() {
    //   axios
    //     .get(
    //       process.env.VUE_APP_ROOT_API +
    //         `kontak/getgambar/${this.$route.params.id}`
    //     )
    //     .then((res) => {
    //       this.gambar = res.data;
    //       console.log(res);
    //     });
    // },
  },
  created: function () {
    this.getKontak();
    // this.getProfil();
  },
};
</script>
<style>
.circle {
  border: 2px solid rgb(0, 0, 0);
  width: 200px;
  height: 200px;
  border-radius: 100%;
}
</style>
