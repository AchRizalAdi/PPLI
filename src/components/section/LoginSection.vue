<template>
  <section class="login-section section-space-b pt-4 pt-md-5 mt-md-3">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-6 mb-5 mb-lg-0 d-none d-lg-block p-0 pe-3">
          <img
            src="@/images/ppli.png"
            alt=""
            class="img-fluid"
            style="width: 100%; height: 600px; border-radius: 15px 0 0 15px"
          />
        </div>
        <!-- end col-lg-6 -->
        <div class="col-lg-6">
          <div v-if="message" class="alert alert-success" role="alert">
            {{ message }}
          </div>
          <div class="section-head-sm">
            <h2 class="mb-1">Selamat Datang</h2>
            <p>Silahkan Login jika sudah terdaftar di Membership kami</p>
          </div>

          <div class="alert alert-success" v-if="isSuccess">
            Login Berhasil, Tunggu beberapa saat
          </div>
          <form @submit.prevent="loginForm">
            <div class="form-floating mb-4">
              <input
                type="email"
                class="form-control"
                id="emailAddress"
                v-model="email"
                placeholder="name@example.com"
              />
              <label for="emailAddress">Email address</label>
            </div>
            <!-- end form-floating -->
            <div class="form-floating mb-4">
              <input
                type="password"
                class="form-control password"
                id="password"
                v-model="password"
                placeholder="Password"
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
            <div
              class="d-flex flex-wrap align-items-right justify-content-right mb-4"
            >
              <!-- <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="logMeIn">
                                    <label class="form-check-label form-check-label-s1" for="logMeIn"> Remember me </label>
                                </div> -->
              <router-link
                to="/forgot-password"
                class="btn-link form-forget-password"
                >Lupa Password</router-link
              >
            </div>
            <button class="btn btn-dark w-100" type="submit">Masuk</button>

            <!-- <span class="d-block my-4">— or login with —</span>
                            <ul class="btns-group d-flex">
                                <li class="flex-grow-1" v-for="(list, i) in SectionData.loginData.btns" :key="i"><router-link :to="list.path" class="btn d-block" :class="list.btnClass"><em class="ni" :class="list.icon"></em> {{ list.title }} </router-link></li>
                            </ul> -->
            <p class="mt-3 form-text">
              Belum menjadi anggota PPLI? Silahkan Daftar
              <router-link
                :to="SectionData.loginData.btnTextLink"
                class="btn-link"
                >Disini</router-link
              >
            </p>
            <router-link class="mt-4 justify-content-right" to="/">Kembali</router-link>
            <div
              v-if="salah"
              class="alert bg-danger text-white text-center mt-4"
            >
              Email atau Password Salah
            </div>
          </form>
        </div>
        <!-- end col-lg-6 -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
</template>

<style>
  body {
    background-color: rgb(255, 255, 255);
  }
.login-section .container {
  /* background-color: ; */
  /* padding: 20px; */
  border-radius: 15px;
  box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.1);
}
</style>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import axios from "axios";

export default {
  name: "LoginSection",
  data() {
    return {
      SectionData,
      email: "",
      password: "",
      error: null,
      message: "",
      salah: false,
    };
  },
  created() {
    if (this.$route.params.message !== undefined) {
      this.message = this.$route.params.message + " Please login!";
    }
  },
  methods: {
    loginForm() {
      axios
        .post(process.env.VUE_APP_ROOT_API + "login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response.data.authorisation.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("token", response.data.authorisation.token);
          localStorage.setItem(
            "permission",
            JSON.stringify(response.data.permission)
          );

          let loginType = response.data.user.roles;
          if (loginType === "member") {
            this.$router.push("/dashboard");
          } else if (loginType !== "member") {
            this.$router.push("/homeadmin");
            // } else if (loginType === 'manager') {
            //   this.$router.push('manager')
          } else {
            this.$router.push("/");
          }

          this.$emit("loggedIn");
        })
        .catch((error) => {
          this.salah = true  
          setTimeout(() => {
            this.salah = false
          }, 10000)
          this.$toast.error("Email atau Password Salah");
          this.error = error.response.data.error;
        });
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
