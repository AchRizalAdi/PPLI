<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Detail Member</h3>
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-s1 justify-content-left mb-3">
        <li class="breadcrumb-item">
          <router-link to="/member">Member</router-link>
        </li>
        <li class="breadcrumb-item">Detail Member</li>
      </ol>
    </nav>
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
            <div class="d-flex">
              <div class="img-thumbnail">
                <img
                  id="image-result"
                  :src="require('@/images/thumb/avatar-9.jpg')"
                  alt=""
                />
              </div>
              <input
                class="upload-image"
                data-target="image-result"
                id="upload-image-file"
                type="file"
                hidden
              />
              <div class="row">
                <h3 class="ms-3">
                  {{ register.BentukBadanUsaha }}. {{ register.NamaPerushaan }}
                </h3>
                <em class="col-sm icon ni ni-map-pin ms-3"
                  ><span class="ms-2"
                    >{{ cities.name }}, {{ prov.name }}</span
                  ></em
                >
                <em class="icon ni ni-call ms-3"
                  ><span class="ms-2">{{ register.PhoneNumber }}</span></em
                >
                <em class="icon ni ni-mail ms-3"
                  ><span class="ms-2">{{ register.email }}</span></em
                >
              </div>
              <!-- <label for="upload-image-file" class="upload-image-label btn"
                >Update Photo</label
              > -->
            </div>
            <!-- Batas Bawah -->
            <h4 class="ms-2 mt-3">
              {{ register.name }}
            </h4>
            <div class="ms-2 mt-1">
              <span class=""> {{ register.AlasanBergabung }}</span>
            </div>

            <router-link to="/member" class="btn btn-dark mt-3" type="button"
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
