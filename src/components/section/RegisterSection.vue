<template>
  <section class="register-section section-space-b pt-4 pt-md-5 mt-md-3">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-6 mb-lg-0 d-none d-lg-block p-0 pe-4">
          <img
            src="@/images/ppli.png"
            alt=""
            class="img-fluid"
            style="width: 100%; height: 600px; border-radius: 15px 0 0 15px"
          />
        </div>
        <!-- end col-lg-6 -->
        <div class="col-lg-6 col-md-9">
          <div class="section-head-sm">
            <h2 class="mb-2" v-html="SectionData.registerData.title"></h2>
            <p>Silahkan isi Form Pendaftaran berikut dengan benar</p>
          </div>
          <div class="isi">
            <form @submit.prevent="postRegisters()">
              <!-- {{ registers }} -->
  
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Nama"
                  v-model="name"
                />
                <label for="name">Nama</label>
              </div>
              <!-- end form-floating -->
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                  v-model="email"
                />
                <label for="email">Email</label>
              </div>
              <!-- end form-floating -->
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control password"
                  id="password"
                  placeholder="Password"
                  v-model="password"
                />
                <label for="password">Password</label>
                <a
                  href="password"
                  class="password-toggle"
                  title="Toggle show/hide pasword"
                >
                  <em class="password-shown ni ni-eye-off"></em>
                  <em class="password-hidden ni ni-eye"></em>
                </a>
                <p style="font-size:10px;">*password minimal <strong>8</strong> huruf</p>
              </div>
              <!-- end form-floating -->
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Username"
                  v-model="Username"
                />
                <label for="username">Username</label>
              </div>
              <div class="form-item mb-3">
                <div class="switch-wrap">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="me-2">
                      <h5 class="mb-1">Cabang?</h5>
                      <p class="form-text">
                        *jika perusahaan pusat yang mendaftar tidak perlu di
                        aktifkan!
                      </p>
                    </div>
                    <div class="form-check form-switch form-switch-s1">
                      <input
                        class="form-check-input checkbox-switcher"
                        data-target="switch-content-unlock"
                        type="checkbox"
                      />
                    </div>
                    <!-- end form-check -->
                  </div>
                  <!-- end d-flex -->
                  <div
                    class="switch-content-unlock mt-4"
                    id="switch-content-unlock"
                  >
                    <div class="form-group mb-2">
                      <label>Pilih Perusahaan Pusat</label>
                      <v-select
                        class="mb-2"
                        multiple
                        :options="industris"
                        :reduce="(industris) => industris.value"
                        label="text"
                      />
                    </div>
                  </div>
                </div>
                <!-- end switch-wrap -->
              </div>
              <!-- end form-item -->
              <!-- end form-floating -->
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="NamaPerusahaan"
                  placeholder="Nama Perusahaan"
                  v-model="namaPerushaan"
                />
                <label for="NamaPerusahaan">Nama Perusahaan</label>
              </div>
              <!-- end form-floating -->
              <!-- <select class="form-select mb-3" aria-label="Default select example">
                                  <label>I am i</label>
                                  <option value="shipper">Shipper</option>
                                  <option value="provider">Logistic Provider</option>
                                  </select> -->
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="PhoneNumber"
                  placeholder="Phone"
                  v-model="nomor"
                />
                <label for="PhoneNumber">Phone</label>
              </div>
              <!-- end form-floating -->
              <div class="form-group mb-2">
                <label>Company Industry </label>
                <v-select
                  class="mb-2"
                  multiple
                  v-model="companyindustry"
                  :options="industris"
                  :reduce="(industris) => industris.value"
                  label="text"
                />
              </div>
              <!-- <div class="form-group mb-2">
                              <v-select label="name" 
                                  v-model="companyindustry" 
                                  :reduce="companyindustry => country.id" 
                                  :options="industris" 
                                  @search="fetchOptions" 
                                  @input="selectedOption" >
                              </v-select>
                              </div> -->
              <!-- {{provinsis }} -->
              <!-- <div class="form-group mb-2">
                <label>Provinsi </label>
                <v-select
                  
                  :options="provinsis"
                  :reduce="(provinsis) => provinsis.value"
                  label="text"
                  @update:modelValue="getCities"
                  v-model="provinsiId"
                >
                </v-select>
              </div> -->
              <!-- <div class="form-group mb-2">
                <label>Provinsi </label>
                <v-select
                  @input="getCities()"
                  v-model="provinsiId"
                  :options="provinsis"
                  :reduce="(provinsis) => provinsis.value"
                  label="text"
                  id="provinsis"
                />
              </div>-->
              <!-- {{ provinsis }} -->
              <label>Provinsi </label>
              <select
                class="form-control mb-2"
                v-model="provinsiId"
                id="provinsi"
                @change="getCities()"
              >
                <option
                  v-for="item in provinsis"
                  :value="item.id"
                  :key="item.id"
                  id="provinsi"
                >
                  {{ item.name }}
                </option>
              </select>
              <!-- {{ provinsiId }}  -->
              <!-- <div class="form-group mb-3"> -->
              <!-- {{cities}} -->
              <!-- <v-select
                  v-model="KotaId"
                  :options="cities"
                  :reduce="(cities) => cities.value"
                  label="text"
                ></v-select>
              </div> -->
              <label>Kota </label>
              <select class="form-control mb-2" v-model="KotaId">
                <option v-for="item in cities" :value="item.id" :key="item.id">
                  {{ item.name }}
                </option>
              </select>
              <div class="form-group mb-3">
                <label>Wilayah </label>
                <v-select
                  class="mb-2"
                  v-model="WilayahId"
                  :options="wilayahs"
                  :reduce="(wilayahs) => wilayahs.value"
                  label="text"
                />
              </div>
  
              <!-- <select class="form-control" v-model="WilayahId" >
                  <option
                    v-for="item in wilayahs.data"
                    :value="item.id"
                    :key="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select> -->
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="BentukBadanUsaha"
                  placeholder="Bentuk Badan Usaha"
                  v-model="bentukusaha"
                />
                <label for="BentukBadanUsaha">Bentuk Badan Usaha</label>
              </div>
              <!-- end form-floating -->
              <div class="mb-4">
                <!-- <label class="mb-2 form-label">Pesan</label> -->
                <textarea
                  type="input"
                  name="pesan"
                  class="form-control form-control-s1"
                  id="AlasanBergabung"
                  placeholder="Alasan Untuk Bergabung"
                  v-model="alasan"
                ></textarea>
              </div>
              <!-- form checkbox  -->
              <div class="form-check mb-2">
                <input
                  id="agree"
                  type="checkbox"
                  value="agree"
                  v-model="checked"
                />
                <span class="form-check-label mb-1 ms-2 form-text" for="terms">
                  dengan mengisi form Pendaftaran di atas, Anda setuju dengan
                  <a href="https://www.ppliofficial.com/syarat-keanggotaan/"
                    >Syarat Keanggotaan Kami</a
                  >
                  Dan
                  <a href="https://www.ppliofficial.com/kebijakan-privasi/"
                    >Kebijakan Privasi Kami</a
                  ></span
                >
              </div>
              <!-- end form checkbox -->
              <button :disabled="!checked" class="btn btn-dark w-100">
                Pengajuan Anggota
              </button>
              <!-- <span class="d-block my-3">— or sign up with —</span>
                              <ul class="btns-group d-flex">
                                  <li class="flex-grow-1" v-for="(list, i) in SectionData.registerData.btns" :key="i"><router-link :to="list.path" class="btn d-block" :class="list.btnClass"><em class="ni" :class="list.icon"></em> {{ list.title }} </router-link></li>
                              </ul> -->
  
                            </form>
                          </div>
                          <p class="mt-3 form-text mb-2">
                            Sudah punya Akun? Silahkan
                            <router-link
                              :to="SectionData.registerData.btnTextLink"
                              class="btn-link"
                              >{{ SectionData.registerData.btnTextTwo }}</router-link
                            >
                          </p>
          <div class="alert alert-success mt-5" v-if="isSuccess" >
            Registrasi Anggota telah diterima, Tunggu beberapa saat untuk di
            konfirmasi
          </div>
          <div class="alert alert-danger" v-if="isDanger">
            Silahkan isi Form Pendaftaran Dengan Benar!
          </div>
        </div>
        <!-- end col-lg-6 -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
  <!-- end register-section -->
  <!-- <ModalSection1></ModalSection1> -->
</template>

<style>
  body {
    background-color: rgb(255, 255, 255);
  }
  .register-section .container {
    background-color: white;
    /* padding: 20px; */
    border-radius: 15px;
    box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.1);
  }
  .container .isi{
  width: 100%;
  height: 350px;
  overflow-x: hidden;
  overflow-y: auto;
}
  </style>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import axios from "axios";

export default {
  name: "RegisterSection",
  data() {
    return {
      SectionData,
      checked: false,
      isSuccess: false,
      isDanger: false,
      provinsis: [],
      cities: [],
      industris: [],
      wilayahs: [],
      name: "",
      email: "",
      password: "",
      Username: "",
      namaPerushaan: "",
      nomor: "",
      companyindustry: [],
      provinsiId: [],
      KotaId: [],
      WilayahId: [],
      bentukusaha: "",
      alasan: "",
    };
  },
  methods: {
    postRegisters: function () {
      axios
        .post(process.env.VUE_APP_ROOT_API + "register", {
          name: this.name,
          email: this.email,
          password: this.password,
          Username: this.Username,
          namaPerushaan: this.namaPerushaan,
          nomor: this.nomor,
          companyindustry: this.companyindustry,
          provinsiId: this.provinsiId,
          KotaId: this.KotaId,
          WilayahId: this.WilayahId,
          bentukusaha: this.bentukusaha,
          alasan: this.alasan,
        })
        .then((response) => {
          this.isSuccess = true;
          setTimeout(() => {
            this.isSuccess = false
          }, 10000)
          // this.$toast.success("berhasil ditambahkan");
          console.log(response);
        })
        .catch((error) => {
          this.isDanger = true;
          setTimeout(() => {
            this.isDanger = false
          }, 10000)
          // this.$toast.error("Registrasi Gagal");
          console.log(error.response.status);
        });
      this.name = "";
      this.email = "";
      this.password = "";
      this.Username = "";
      this.namaPerushaan = "";
      this.nomor = "";
      this.companyindustry = "";
      this.provinsiId = "";
      this.KotaId = "";
      this.WilayahId = "";
      this.bentukusaha = "";
      this.alasan = "";
    },
    // getProvinsis: function () {
    //   axios.get(process.env.VUE_APP_ROOT_API+"select/provinsi").then(
    //     function (response) {
    //       this.provinsis = response.data.map((provinsis) => ({
    //         value: provinsis.id,
    //         text: provinsis.name,
    //       }));
    //     }.bind(this)
    //   );
    // },
    getProvinsis: function () {
      axios.get(process.env.VUE_APP_ROOT_API + "select/provinsi").then(
        function (response) {
          this.provinsis = response.data;
        }.bind(this)
      );
    },

    // getCities() {
    //   // alert("bodoh");
    //   axios
    //     .get(process.env.VUE_APP_ROOT_API+"select/city/" + document.getElementById('provinsi'))
    //     .then(
    //       function (response) {
    //         this.cities = response.data.map((cities) => ({
    //           value: cities.id,
    //           text: cities.name,
    //         }));
    //       }.bind(this)
    //     );
    // },
    getCities() {
      // alert("bodoh")
      axios
        .get(
          process.env.VUE_APP_ROOT_API +
            "select/city/" +
            document.getElementById("provinsi").value
        )
        .then(
          function (response) {
            this.cities = response.data;
          }.bind(this)
        );
    },
    getIndustris: function () {
      axios.get(process.env.VUE_APP_ROOT_API + "select/CompanyIndustry").then(
        function (response) {
          this.industris = response.data.map((industris) => ({
            value: industris.id,
            text: industris.name,
          }));
        }.bind(this)
      );
    },
    getWilayahs: function () {
      axios.get(process.env.VUE_APP_ROOT_API + "select/wilayah").then(
        function (response) {
          this.wilayahs = response.data.map((wilayahs) => ({
            value: wilayahs.id,
            text: wilayahs.name,
          }));
          console.log(this.wilayahs);
        }.bind(this)
      );
    },
  },
  created: function () {
    this.getProvinsis();
    this.getIndustris();
    this.getWilayahs();
  },
  mounted() {
    /*  ======== Show/Hide passoword ======== */
    function showHidePassword(selector) {
      let elem = document.querySelectorAll(selector);
      if (elem.length > 0) {
        elem.forEach((item) => {
          item.addEventListener("click", function (e) {
            e.preventDefault();
            let target = document.getElementById(item.getAttribute("href"));
            if (target.type == "password") {
              target.type = "text";
              item.classList.add("is-shown");
            } else {
              target.type = "password";
              item.classList.remove("is-shown");
            }
          });
        });
      }
    }

    /*  ============== Unlock once purchased Checkbox switcher ============= */
    function checkboxSwitcher(selector) {
      let elem = document.querySelectorAll(selector);
      if (elem.length > 0) {
        elem.forEach((item) => {
          item.addEventListener("change", function () {
            let target = document.getElementById(item.dataset.target);
            if (this.checked) {
              target.classList.add("is-shown");
            } else {
              target.classList.remove("is-shown");
            }
          });
        });
      }
    }
    checkboxSwitcher(".checkbox-switcher");
    showHidePassword(".password-toggle");
  },
};
</script>