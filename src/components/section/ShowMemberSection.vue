<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Detail Member</h3>
    </div>
    <!-- end user-panel-title-box -->
    <div class="profile-setting-panel-wrap">
      <div class="tab-content mt-4" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="account-information"
          role="tabpanel"
          aria-labelledby="account-information-tab"
        >
          <div class="profile-setting-panel">
            <!-- <h5 class="mb-4">Edit Profile</h5> -->
            <!-- <div class="d-flex align-items-center">
                            <div class="image-result-area avatar avatar-3">
                                <img id="image-result" :src="require('@/images/thumb/avatar-9.jpg')" alt="">
                            </div>  
                            <input class="upload-image" data-target="image-result" id="upload-image-file" type="file" hidden>
                            <label for="upload-image-file" class="upload-image-label btn">Update Photo</label>
                        </div>end d-flex -->
            <div class="row mt-4">
              <div class="col-lg-6 mb-3">
                <label for="displayName" class="form-label">Nama</label>
                <input
                  v-model="register.name"
                  type="text"
                  id="displayName"
                  class="form-control form-control-s1"
                  disabled
                />
              </div>
              <!-- end col -->
              <div class="col-lg-6 mb-3">
                <label for="username" class="form-label">Username</label>
                <input
                  v-model="register.username"
                  type="text"
                  id="username"
                  class="form-control form-control-s1"
                  disabled
                />
              </div>
              <!-- end col -->
              <div class="col-lg-6 mb-3">
                <label for="Email" class="form-label">Email</label>
                <input
                  v-model="register.email"
                  type="email"
                  id="Email"
                  class="form-control form-control-s1"
                  disabled
                />
              </div>
              <!-- end col -->
              <div class="col-lg-6 mb-3">
                <label for="nomor" class="form-label">Nomor Handphone</label>
                <input
                  v-model="register.PhoneNumber"
                  type="text"
                  id="nomor"
                  class="form-control form-control-s1"
                  disabled
                />
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
            <div class="mb-3">
              <label for="alasan" class="form-label">Alasan</label>
              <textarea
                v-model="register.AlasanBergabung"
                class="form-control form-control-s1"
                id="alasan"
                disabled
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="namaperusahaan" class="form-label"
                >Nama Perusahaan</label
              >
              <input
                v-model="register.NamaPerushaan"
                type="text"
                id="namaperusahaan"
                class="form-control form-control-s1"
                disabled
              />
            </div>
            <div class="mb-3">
              <label for="bentukusaha" class="form-label"
                >Bentuk Badan Usaha</label
              >
              <input
                v-model="register.BentukBadanUsaha"
                type="text"
                id="bentukusaha"
                class="form-control form-control-s1"
                disabled
              />
            </div>
            <div class="mb-3">
              <label for="company" class="form-label">Company Industry</label>
              <!-- [0].name" -->
              <!-- {{ industris }} -->
              <!-- {{ register.company_industry }} -->

              <input
                v-model="industris.name"
                type="text"
                id="company"
                class="form-control form-control-s1"
                disabled
              />
            </div>
            <div class="row">
              <div class="col-lg-6 mb-3">
                <label for="provinsi" class="form-label">Provinsi</label>
                <input
                  v-model="prov.name"
                  type="text"
                  id="provinsi"
                  class="form-control form-control-s1"
                  disabled
                />
              </div>
              <!-- end col -->
              <div class="col-lg-6 mb-3">
                <label for="kota" class="form-label">Kota</label>
                <input
                  v-model="cities.name"
                  type="text"
                  id="kota"
                  class="form-control form-control-s1"
                  disabled
                />
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
            <div class="mb-3">
              <label for="wilayah" class="form-label">Wilayah</label>
              <input
                v-model="wilayahs.name"
                type="text"
                id="wilayah"
                class="form-control form-control-s1"
                disabled
              />
            </div>
            <router-link to="/offers" class="btn btn-dark mt-3" type="button"
              >Kembali</router-link
            >
          </div>
          <!-- end profile-setting-panel -->
        </div>
        <!-- end tab-pane -->
      </div>
      <!-- end tab-content -->
    </div>
    <!-- end profile-setting-panel-wrap-->
  </div>
  <!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import axios from "axios";

export default {
  name: "AccountSection",
  data() {
    return {
      SectionData,
      register: [],
      industris: [],
      cities: [],
      prov: [],
      wilayahs: [],
    };
  },
  created() {
    axios
      .get(`http://127.0.0.1:8000/api/register/show/${this.$route.params.id}`)
      .then((res) => {
        this.register = res.data[0];
        this.industris = res.data[0].company_industry[0];
        this.prov = res.data[0].provinsi;
        this.cities = res.data[0].cities;
        this.wilayahs = res.data[0].wilayah;
      });

    // this.getIndustris();
  },
  methods: {
    // getIndustris: function () {
    //   axios.get("http://127.0.0.1:8000/api/select/CompanyIndustry").then(
    //     function (response) {
    //       this.industris = response.data;
    //       console.log(this.industris);
    //     }.bind(this)
    //   );
    // },
  },

  mounted() {
    /*===========SHOW UPLOADED IMAGE ================== */
    function uploadImage(selector) {
      let elem = document.querySelectorAll(selector);
      if (elem.length > 0) {
        elem.forEach((item) => {
          item.addEventListener("change", function () {
            if (item.files && item.files[0]) {
              let img = document.getElementById(item.dataset.target);
              img.onload = function () {
                URL.revokeObjectURL(img.src);
              };
              img.src = URL.createObjectURL(item.files[0]);

              let allowedExtensions = ["jpg", "JPEG", "JPG", "png"];
              let fileExtension = this.value.split(".").pop();
              var lastDot = this.value.lastIndexOf(".");
              var ext = this.value.substring(lastDot + 1);
              var extTxt = (img.value = ext);
              if (!allowedExtensions.includes(fileExtension)) {
                alert(
                  extTxt +
                    " file type not allowed, Please upload jpg, JPG, JPEG, or png file"
                );
                img.src = " ";
              }
            }
          });
        });
      }
    }

    uploadImage(".upload-image");

    /* =========== Show/Hide passoword ============== */
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
