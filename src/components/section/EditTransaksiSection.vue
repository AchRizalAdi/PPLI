<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Edit Transaksi</h3>
    </div>
    <!-- end user-panel-title-box -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-s1 justify-content-left mb-3">
        <li class="breadcrumb-item">
          <router-link to="/transaksi">Transaksi</router-link>
        </li>
        <li class="breadcrumb-item">Edit Transaksi</li>
      </ol>
    </nav>
    <div class="profile-setting-panel-wrap">
      <div class="table-responsive">
        <form @submit.prevent="updateTransaksi">
          <!-- {{ transaksi }} -->

          <div class="form-floating mb-3">
            <input
              v-model="transaksi.tanggal"
              type="date"
              class="form-control"
              id="tanggal"
              placeholder="Tanggal"
              required
            />
            <label for="tanggal">Tanggal</label>
          </div>
          <!-- {{transaksi.tanggal}} -->
          <!-- {{transaksi.tanggal}} -->
          <div class="form-group mb-3">
            <label>Kas</label>
            <v-select
              v-model="transaksi.KhasId"
              required
              :options="kas"
              :reduce="(kas) => kas.value"
              label="text"
            >
            </v-select>
          </div>
          <!-- {{ kas }}   -->
          <div>
            <label>Jenis Transaksi</label>
            <select
              class="form-select mb-3"
              v-model="transaksi.jenis_transaksi"
            >
              <option value="pengeluaran">Pengeluaran</option>
              <option value="pemasukan">Pemasukan</option>
            </select>
          </div>
          <!-- {{transaksi.jenis_transaksi}} -->
          <div class="form-group mb-3">
            <label>Akun</label>
            <v-select
              v-model="transaksi.AkunId"
              required
              :options="akun"
              :reduce="(akun) => akun.value"
              label="text"
            >
            </v-select>
          </div>
          <!-- {{transaksi.AkunId }} -->

          <div class="form-group mb-3">
            <label>Anggota</label>
            <v-select
              v-model="transaksi.MemberId"
              required
              :options="member"
              :reduce="(member) => member.value"
              label="text"
            >
            </v-select>
          </div>
          <!-- {{member}} -->
          <!-- end form-floating -->
          <label>Keterangan</label>
          <div class="form-floating mb-3">
            <input
              v-model="transaksi.keterangan"
              type="text"
              class="form-control"
              id="keterangan"
              placeholder="Keterangan"
              required
            />
            <label for="keterangan">Nama Lengkap</label>
          </div>
          <!-- end form-floating -->
          <div class="form-floating mb-3">
            <input
              v-model="transaksi.jumlah"
              type="number"
              class="form-control"
              id="jumlah"
              placeholder="Jumlah"
              required
            />
            <label for="jumlah">Jumlah</label>
          </div>
          <!-- end form-floating -->

          <!-- BUTTON -->
          <router-link to="/transaksi" type="button" class="btn btn-sm btn-dark"
            >Back</router-link
          >
          <button class="btn btn-sm btn-dark w-20 ms-2" type="submit">
            Update Transaksi
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
      transaksi: [],
      khas: [],
    };
  },

  created: function () {
    this.getKhas();
    this.getAkun();
    this.getMember();
    axios
      .get(`http://127.0.0.1:8000/api/transaksi/${this.$route.params.id}`)
      .then((res) => {
        this.transaksi = res.data.data;
        // this.khas = res.data.data.KhasId;
      });
  },
  methods: {
    updateTransaksi() {
      axios
        .post(
          `http://127.0.0.1:8000/api/transaksi/${this.$route.params.id}`,
          this.transaksi
        )
        .then((res) => {
          this.$router.push({ name: "transaksi" });
          this.$toast.success("Transaksi berhasil di update");
          console.log(res);
        });
    },
    getKhas: function () {
      axios.get("http://127.0.0.1:8000/api/transaksi/selectOption/khas").then(
        function (response) {
          this.kas = response.data.data.map((kas) => ({
            value: kas.id,
            text: kas.nama,
          }));
        }.bind(this)
      );
    },
    getMember: function () {
      axios.get("http://127.0.0.1:8000/api/transaksi/selectOption/member").then(
        function (response) {
          this.member = response.data.data.map((member) => ({
            value: member.id,
            text: member.name,
          }));
        }.bind(this)
      );
    },
    getAkun: function () {
      axios.get("http://127.0.0.1:8000/api/transaksi/selectOption/akun").then(
        function (response) {
          this.akun = response.data.data.map((akun) => ({
            value: akun.id,
            text: akun.nama_akun,
          }));
        }.bind(this)
      );
    },
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
