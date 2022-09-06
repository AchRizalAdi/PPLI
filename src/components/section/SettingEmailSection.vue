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
    <div
      type="button"
      class="btn btn-dark btn-sm"
      data-bs-toggle="modal"
      data-bs-target="#messageModal"
    >
      Show Mail
    </div>
    <div
      @click="resetemail()"
      type="button"
      class="btn btn-dark btn-sm ms-2"
      data-bs-toggle="modal"
      data-bs-target="#target"
    >
      Test Mail
    </div>
    <!-- {{ email }} -->
    <!-- <div class="btn btn-sm btn-dark ms-2">Test Mail</div> -->
    <div class="profile-setting-panel-wrap">
      <div class="table-responsive">
        <form @submit.prevent="store()">
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
              class="form-control"
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
          <router-link to="pengaturan" type="button" class="btn btn-sm btn-dark"
            >Back</router-link
          >
          <button class="btn btn-sm btn-success w-20 ms-2" type="submit">
            Submit
          </button>
        </form>
      </div>
      <!-- end table-responsive -->
    </div>
    <!-- end profile-setting-panel-wrap-->
    <!-- Modal store -->
    <div
      class="modal fade"
      id="messageModal"
      tabindex="-1"
      aria-labelledby="reportModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="reportModalLabel">Template Email</h4>
            <button
              type="button"
              class="btn-close icon-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <em class="ni ni-cross"></em>
            </button>
          </div>
          <div class="modal-body">
            <div class="d-flex flex-row">
              <h4 class="p-2 me-4">Nama</h4>
              <h4 class="p-2">:</h4>
              <p class="p-2 mb-3">{{ emails.name }}</p>
            </div>
            <div class="d-flex flex-row">
              <h4 class="p-2 me-5">Host</h4>
              <h4 class="p-2">:</h4>
              <p class="p-2 mb-3">{{ emails.host }}</p>
            </div>
            <div class="d-flex flex-row">
              <h4 class="p-2 me-5">Port</h4>
              <h4 class="p-2">:</h4>
              <p class="p-2 mb-3">{{ emails.port }}</p>
            </div>
            <div class="d-flex flex-row">
              <h4 class="p-2 me-5">Encryption</h4>
              <h4 class="p-2">:</h4>
              <p class="p-2 mb-3">{{ emails.encryption }}</p>
            </div>
            <div class="d-flex flex-row">
              <h4 class="p-2 me-5">Username</h4>
              <h4 class="p-2">:</h4>
              <p class="p-2 mb-3">{{ emails.username }}</p>
            </div>
            <div class="d-flex flex-row">
              <h4 class="p-2 me-5">Password</h4>
              <h4 class="p-2">:</h4>
              <p class="p-2 mb-3">{{ emails.password }}</p>
            </div>
            <!-- end form-floating -->
            <button class="btn btn-dark w-100" data-bs-dismiss="modal">
              Close
            </button>
          </div>
          <!-- end modal-body -->
        </div>
        <!-- end modal-content -->
      </div>
      <!-- end modal-dialog -->
    </div>
    <!-- end modal-->
  </div>
  <div
    class="modal fade"
    id="target"
    tabindex="-1"
    aria-labelledby="reportModalLabel"
    aria-hidden="true"
  >
    <form @submit.prevent="postEmail()">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="reportModalLabel">Test Email</h4>
            <button
              type="button"
              class="btn-close icon-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <em class="ni ni-cross"></em>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
                v-model="email"
                required
              />
              <label for="email">Email</label>
            </div>
            <!-- end form-floating -->
            <button
              class="btn btn-dark w-100"
              data-bs-dismiss="modal"
              type="submit"
            >
              Test
            </button>
          </div>
          <!-- end modal-body -->
        </div>
        <!-- end modal-content -->
      </div>
    </form>
    <!-- end modal-dialog -->
  </div>
  <!-- end modal-->
  <!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import axios from "axios";
import Swal from "sweetalert2";
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
      emails: [],
      email:"",
      name: "",
      host: "",
      port: "",
      encryption: "",
      username: "",
      password: "",
    };
  },

  methods: {
    showPost() {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data telah terkirim!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    resetemail() {
      this.email = null;
    },
    store() {
      axios
        .post(process.env.VUE_APP_ROOT_API + "setting/email", {
          name: this.name,
          host: this.host,
          port: this.port,
          encryption: this.encryption,
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          this.$toast.success("Setting Email Berhasil");
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error("Setting Email Gagal");
          console.log(error);
        });
    },
    getEmail: function () {
      axios.get(process.env.VUE_APP_ROOT_API + "setting/email/get").then(
        function (response) {
          this.emails = response.data.data;
        }.bind(this)
      );
    },
    postEmail() {
      axios
        .post(process.env.VUE_APP_ROOT_API + "setting/email/test", {
          email: this.email,
        })
        .then((response) => {
          this.showPost();
          // emitter.emit("refreshPage");
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error("Email sent failed");
          console.log(error);
        });
    },
  },
  created: function () {
    this.getEmail();
  },
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
