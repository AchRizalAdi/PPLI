<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Setting Email</h3>
    </div>
    <!-- end user-panel-title-box -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-s1 justify-content-left mb-3">
        <li class="breadcrumb-item">
          <router-link to="pengaturan">Pengaturan</router-link>
        </li>
        <li class="breadcrumb-item">Setting Email</li>
      </ol>
    </nav>
    <div class="profile-setting-panel-wrap">
      <div class="table-responsive">
        <form @submit.prevent="store()">
          <!-- {{ registers }} -->
          <div class="row mt-4"></div>
          <div class="form-floating mb-3">
            <input
              v-model="name"
              type="text"
              class="form-control"
              id="name"
              placeholder="Nama"
              required
            />
            <label for="name">Nama</label>
          </div>
          <!-- end form-floating -->
          <div class="form-floating mb-3">
            <input
              v-model="host"
              type="text"
              class="form-control"
              id="host"
              placeholder="Host"
              required
            />
            <label for="host">Host</label>
          </div>
          <!-- end form-floating -->
          <div class="form-floating mb-3">
            <input
              v-model="port"
              type="text"
              class="form-control"
              id="port"
              placeholder="Port"
              required
            />
            <label for="port">Port</label>
          </div>
          <!-- end form-floating -->
          <label for="encryption">Encryption</label>

          <select
            class="form-select mt-1 mb-3"
            v-model="encryption"
            placeholder="Please select one"
          >
            <option disabled value="">Please select one</option>
            <option value="tls">TLS</option>
            <option value="ssl">SSL</option>
          </select>
          <!-- <div class="form-floating mb-3">
            <input
              v-model="encryption"
              type="text"
              class="form-control"
              id="encryption"
              placeholder="Encryotion"
              required
            />
          </div> -->
          <!-- end form-floating -->
          <div class="form-floating mb-3">
            <input
              v-model="username"
              type="text"
              class="form-control"
              id="username"
              placeholder="Username"
              required
            />
            <label for="username">Username</label>
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
          </div>
          <!-- BUTTON -->
          <router-link
            to="pengaturan"
            type="button"
            class="btn btn-sm btn-dark"
            >Back</router-link
          >
          <button class="btn btn-sm btn-dark w-20 ms-2" type="submit">
            Submit
          </button>
        </form>
      </div>
      <!-- end table-responsive -->
    </div>
    <!-- end profile-setting-panel-wrap-->
    <!-- Modal store -->
  </div>
  <!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import axios from "axios";
// import $ from "jquery";
// import { reactive } from 'vue';
// import { onMounted, ref } from 'vue';

export default {
  data() {
    return {
      SectionData,
      page: 1,
      i: 1,
      perPage: 6,
      records: [],
      name: "",
      host: "",
      port: "",
      encryption: "",
      username: "",
      password: "",
    };
  },

  methods: {
    store() {
      axios
        .post("http://127.0.0.1:8000/api/setting/email", {
          name: this.name,
          host: this.host,
          port: this.port,
          encryption: this.encryption,
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          this.$toast.success("Setting Email Berhasil");
          this.$router.push({ name: "pengaturan" });
          console.log(response);

        })
        .catch((error) => {
          this.$toast.error("Setting Email Gagal");
          console.log(error);
        });
      // this.name = '';
    },
  },
  created: function () {},
  computed: {
    displayedRecords() {
      const startIndex = this.perPage * (this.page - 1);
      const endIndex = startIndex + this.perPage;
      return this.records.slice(startIndex, endIndex);
    },
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
