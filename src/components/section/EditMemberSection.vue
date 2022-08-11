<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Edit Member</h3>
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-s1 justify-content-left mb-3">
        <li class="breadcrumb-item">
          <router-link to="/member">Member</router-link>
        </li>
        <li class="breadcrumb-item">Edit Member</li>
      </ol>
    </nav>
    <!-- {{ gambar }} -->
    <!-- <label class="form-label" for="logo">Foto</label>
      <div class="mb-4">
        <img :src="previewimg" v-if="previewimg" class="mb-2" width="200" />
        <input type="file" class="form-control" @change="upload($event)" />
      </div> -->
    <form @submit.prevent="updateMember()">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="NamaPerushaan"
          placeholder="Nama Perusahaan"
          v-model="NamaPerushaan"
        />
        <label for="NamaPerushaan">Nama Perusahaan</label>
      </div>

      <!-- end form-floating -->
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="name"
          placeholder="Name"
        />
        <label for="name">Name</label>
      </div>
      <!-- end form-floating -->
      <div class="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          id="nohp"
          placeholder="Nomor Handphone"
          v-model="PhoneNumber"
        />
        <label for="nohp">Nomor Handphone</label>
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
          type="text"
          class="form-control"
          id="alamat"
          placeholder="Alamat"
          v-model="alamat"
        />
        <label for="alamat">Alamat</label>
      </div>
      <!-- end form-floating -->
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="BentukBadanUsaha"
          placeholder="Bentuk Badan Usaha"
          v-model="BentukBadanUsaha"
        />
        <label for="BentukBadanUsaha">Bentuk Badan Usaha</label>
      </div>
      <!-- end form-floating -->
      <label for="status">Status</label>
      <!-- <div class="form-select mb-3"> -->
      <select class="form-select mb-3" v-model="status">
        <option value="aktif">Aktif</option>
        <option value="tidak aktif">Tidak Aktif</option>
      </select>
      <!-- {{status}} -->
      <!-- </div> -->
      <router-link to="/member" type="button" class="btn btn-sm btn-dark"
        >Kembali</router-link
      >
      <button class="btn btn-sm btn-success w-20 ms-2" type="submit">
        Simpan
      </button>
    </form>
  </div>
  <!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import axios from "axios";
// import $ from "jquery";
// import Swal from "sweetalert2";

export default {
  name: "AccountSection",
  data() {
    return {
      SectionData,
      member: [],
      tanggal_bayar: "",
      status: "",
      gambar: [],
      NamaPerushaan: "",
      PhoneNumber: "",
      alamat: "",
      name: "",
      BentukBadanUsaha: "",
      email: "",
      previewimg: "",
      file: [],
    };
  },
  created() {
    this.getMember();
  },
  methods: {
    getMember() {
      axios
        .get(`http://127.0.0.1:8000/api/member/show/${this.$route.params.id}`)
        .then((res) => {
          this.NamaPerushaan = res.data.data.NamaPerushaan;
          // this.gambar = res.data.data.gambar;
          this.name = res.data.data.name;
          this.PhoneNumber = res.data.data.PhoneNumber;
          this.email = res.data.data.email;
          this.alamat = res.data.data.alamat;
          this.BentukBadanUsaha = res.data.data.BentukBadanUsaha;
          this.status = res.data.data.status;
        });
    },
    updateMember() {
      // let formData = new FormData();

      // formData.append("file", this.gambar);
      axios
        .post(
          `http://127.0.0.1:8000/api/member/update/${this.$route.params.id}`,
          // formData,
          {
            // headers: {
            //   "Content-Type": "multipart/form-data",
            // },
            NamaPerushaan: this.NamaPerushaan,
            // gambar: this.gambar,
            name: this.name,
            PhoneNumber: this.PhoneNumber,
            email: this.email,
            alamat: this.alamat,
            BentukBadanUsaha: this.BentukBadanUsaha,
            status: this.status,
          }
        )
        .then((res) => {
          this.$router.push({ name: "member" });
          this.$toast.success("Member berhasil di update");
          console.log(res);
        });
    },
    // upload(event) {
    //   // let gambar = new FormData();
    //   // gambar.append = event.target.files[0];

    //   this.gambar = event.target.files[0];
    //   this.previewimg = URL.createObjectURL(event.target.files[0]);
    //   console.log(this.gambar);
    // },
  },
  mounted() {
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
