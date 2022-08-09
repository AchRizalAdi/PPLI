<template>
  <section class="register-section section-space-b pt-4 pt-md-5 mt-md-3">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-6 mb-lg-0 d-none d-lg-block">
          <img :src="SectionData.registerData.img" alt="" class="img-fluid" />
        </div>
        <!-- end col-lg-6 -->
        <div class="col-lg-6 col-md-9">
          <div class="section-head-sm">
            <h2 class="mb-2" v-html="SectionData.registerData.title"></h2>
            <p>{{ SectionData.registerData.subTitle }}</p>
          </div>
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
              <p class="">*password minimal <strong>8</strong> huruf</p>
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
              class="form-control"
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
            <select class="form-control" v-model="KotaId">
              <option v-for="item in cities" :value="item.id" :key="item.id">
                {{ item.name }}
              </option>
            </select>
            <div class="form-group mb-3">
              <label>Wilayah </label>
              <v-select
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
              <label class="mb-2 form-label">Pesan</label>
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
                {{ SectionData.registerData.termText }}
                <a><router-link to="/terms">terms of service</router-link></a>
                and
                <a
                  ><router-link to="/privacy"
                    >privacy and policy</router-link
                  ></a
                ></span
              >
            </div>
            <!-- end form checkbox -->
            <button :disabled="!checked" class="btn btn-dark w-100">
              {{ SectionData.registerData.btnText }}
            </button>
            <!-- <span class="d-block my-3">— or sign up with —</span>
                            <ul class="btns-group d-flex">
                                <li class="flex-grow-1" v-for="(list, i) in SectionData.registerData.btns" :key="i"><router-link :to="list.path" class="btn d-block" :class="list.btnClass"><em class="ni" :class="list.icon"></em> {{ list.title }} </router-link></li>
                            </ul> -->

            <p class="mt-3 form-text mb-2">
              {{ SectionData.registerData.haveAccountText }}
              <router-link
                :to="SectionData.registerData.btnTextLink"
                class="btn-link"
                >{{ SectionData.registerData.btnTextTwo }}</router-link
              >
            </p>
            <div class="alert alert-success" v-if="isSuccess">
              Registrasi Member Berhasil, Tunggu beberapa saat untuk di
              konfirmasi
            </div>
            <div class="alert alert-danger" v-if="isDanger">
              Silahkan isi Form Pendaftaran Dengan Benar!
            </div>
          </form>
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
        .post("http://127.0.0.1:8000/api/register", {
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
          this.$toast.success("berhasil ditambahkan");
          console.log(response);
        })
        .catch((error) => {
          this.isDanger = true;
          this.$toast.error("Registrasi Gagal");
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
    //   axios.get("http://127.0.0.1:8000/api/select/provinsi").then(
    //     function (response) {
    //       this.provinsis = response.data.map((provinsis) => ({
    //         value: provinsis.id,
    //         text: provinsis.name,
    //       }));
    //     }.bind(this)
    //   );
    // },
    getProvinsis: function () {
      axios.get("http://127.0.0.1:8000/api/select/provinsi").then(
        function (response) {
          this.provinsis = response.data;
        }.bind(this)
      );
    },

    // getCities() {
    //   // alert("bodoh");
    //   axios
    //     .get("http://127.0.0.1:8000/api/select/city/" + document.getElementById('provinsi'))
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
          "http://127.0.0.1:8000/api/select/city/" +
            document.getElementById("provinsi").value
        )
        .then(
          function (response) {
            this.cities = response.data;
          }.bind(this)
        );
    },
    getIndustris: function () {
      axios.get("http://127.0.0.1:8000/api/select/CompanyIndustry").then(
        function (response) {
          this.industris = response.data.map((industris) => ({
            value: industris.id,
            text: industris.name,
          }));
        }.bind(this)
      );
    },
    getWilayahs: function () {
      axios.get("http://127.0.0.1:8000/api/select/wilayah").then(
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

    showHidePassword(".password-toggle");
  },
};
</script>

//
<!-- <script>
// // Import component data. You can change the data in the store to reflect in all component
// import SectionData from '@/store/store.js'
// import { reactive, ref } from 'vue';
// import axios from 'axios'

// export default {
//     name: 'RegisterSection',
//     data () {
//       return {
//         SectionData,
//         checked : false,
//         cities: []
//       };
//     },
//      methods: {
//     loadData(){
//         axios.get('http://127.0.0.1:8000/api/cities').then(({data}) => (this.cities = data));
//     }
//   },
//   created (){
//     this.loadData();
//   },
//     setup(){
//         //data binding 
//         const registers = reactive({
//             name : '',
//             email : '',
//             password: '',
//             username: '',
//             namaPerushaan: '',
//             nomor: '',
//             companyindustry:'',
//             provinsiId: '',
//             KotaId: '',
//             WilayahId:'',
//             bentukusaha: '',
//             alasan: '',
//         });

//         const validation = ref ([]);

//         function store() {
//             axios.post(
//                 'http://127.0.0.1:8000/api/register',
//                 registers
//             )
//             .then(()=> {
//                 console.log('Sudah BeNAR');
//             }).catch((err) => {
//                 validation.value = err.response.data
//         });

//         }
//         return {
//             isSuccess: false,
//             registers,
//             validation,
//             store
//         }
//     },
//   mounted () {
//     /*  ======== Show/Hide passoword ======== */
//     function showHidePassword(selector){
//         let elem = document.querySelectorAll(selector);
//         if(elem.length > 0){
//             elem.forEach(item => {
//             item.addEventListener("click", function(e){
//                 e.preventDefault();
//                 let target = document.getElementById(item.getAttribute("href"));
//                 if(target.type == "password") {
//                 target.type = "text";
//                 item.classList.add("is-shown");
//                 }else{
//                 target.type = "password";
//                 item.classList.remove("is-shown");
//                 }
//             });

//             });
//         }
//     }

//     showHidePassword(".password-toggle");

//   }
// }
// </script> -->

//
<!-- <div class="alert alert-danger d-flex mb-4" role="alert">
//                                             <svg class="flex-shrink-0 me-3" width="30" height="30" viewBox="0 0 24 24" fill="#ff6a8e">
//                                                 <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
//                                             </svg>
//                                             <p class="fs-14" v-html="SectionData.offerData.alertText"></p>
//                                         </div>end alert -->
// setup(){ // //data binding // const registers = reactive({ // }); // const
validation = ref ([]); // function store() { // axios.post( //
'http://127.0.0.1:8000/api/register', // registers // ) // .then((response)=> {
// this.isSuccess = true, // console.log(response); // }).catch((err) => { //
this.isDanger = true, // console.log(err) // }); // } // return { // isSuccess:
false, // isDanger: false, // registers, // validation, // store // } // },
