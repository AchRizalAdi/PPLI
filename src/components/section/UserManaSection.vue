<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Tambah User</h3>
    </div>
    <!-- end user-panel-title-box -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-s1 justify-content-left mb-3">
        <li class="breadcrumb-item">
          <router-link to="/pengaturan">User Manajemen</router-link>
        </li>
        <li class="breadcrumb-item">Tambah User</li>
      </ol>
    </nav>

    <div class="profile-setting-panel-wrap">
      <div class="table-responsive">
        <form @submit.prevent="postUser()">
          <!-- {{ registers }} -->

          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Nama"
              v-model="name"
              required
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
              required
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
              required
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
          <!-- end form-floating -->
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Username"
              v-model="Username"
              required
            />
            <label for="username">Username</label>
          </div>
          <!-- end form-floating -->
          <div class="form-group mb-3">
            <label>Roles</label>
            <select class="form-control" v-model="roles" required>
              <option
                v-for="item in roless.data"
                :value="item.name"
                :key="item.id"
              >
                {{ item.name }}
              </option>
            </select>
          </div>
          <router-link
            to="/pengaturan"
            type="button"
            class="btn btn-sm btn-dark"
            >Back</router-link
          >
          <button class="btn btn-sm btn-dark w-20 ms-2" type="submit">
            Create User
          </button>
        </form>
      </div>
      <!-- end table-responsive -->
    </div>
    <!-- end profile-setting-panel-wrap-->
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
      users: [],
      roless: [],
      name: "",
      email: "",
      password: "",
      Username: "",
      roles: "",
    };
  },
  //  process.env.VUE_APP_ROOT_API+ admin/adduser
  methods: {
    resetnama() {
      this.name = null;
    },
    postUser() {
      axios
        .post(process.env.VUE_APP_ROOT_API+"admin/adduser", {
          name: this.name,
          email: this.email,
          password: this.password,
          Username: this.Username,
          roles: this.roles,
        })
        .then((response) => {
          // this.getRoles()
          this.$router.push({ name: "pengaturan" });
          this.$toast.success("berhasil ditambahkan");
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error("create user gagal");
          console.log(error);
        });
      this.name = "";
      this.email = "";
      this.password = "";
      this.username = "";
      this.roles = "";
    },
    getRoles() {
      axios.get(process.env.VUE_APP_ROOT_API+"role/show").then(
        function (response) {
          this.roless = response.data;
        }.bind(this)
      );
    },
  },
  created: function () {
    this.getRoles();
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
