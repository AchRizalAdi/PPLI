<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box justify-content-left">
      <h1>Tambah Transaksi</h1>
    </div>
    <!-- end user-panel-title-box -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-s1 justify-content-left mb-3">
        <li class="breadcrumb-item">
          <router-link to="/transaksi">Transaksi</router-link>
        </li>
        <li class="breadcrumb-item">Tambah Transaksi</li>
      </ol>
    </nav>
    <div class="profile-setting-panel-wrap">
      <div class="table-responsive">
        <form @submit.prevent="store()">
          <!-- {{ kas }} -->

          <div class="form-floating mb-3">
            <input
              v-model="tanggal"
              type="date"
              class="form-control"
              id="tanggal"
              placeholder="Tanggal"
              required
            />
            <label for="tanggal">Tanggal</label>
          </div>
          <div class="form-group mb-3">
            <label>Kas</label>
            <v-select
              v-model="KhasId"
              required
              :options="kas"
              :reduce="(kas) => kas.value"
              label="text"
            >
            </v-select>
          </div>
          <!-- {{khas }} -->
          <div>
            <label>Jenis Transaksi</label>
            <select class="form-select mb-3" v-model="jenis_transaksi">
              <option value="pengeluaran">Pengeluaran</option>
              <option value="pemasukan">Pemasukan</option>
            </select>
          </div>
          <div class="form-group mb-3">
            <label>Akun</label>
            <select
              class="form-control"
              v-model="AkunId"
              @change="postIuran(AkunId)"
              id="akunsss"
            >
              <!-- @change="postKeterangan(AkunId)" -->
              <option
                v-for="item in akun"
                :value="item.id"
                :key="item.id"
                id="akunsss"
              >
                {{ item.nama_akun }}
              </option>
            </select>
          </div>
          <!-- {{ akun}} -->
          <div class="form-group mb-3">
            <label>Anggota</label>
            <select
              class="form-control"
              v-model="MemberId"
              @change="postIuran(MemberId)"
              id="akunsss"
            >
              <!-- @change="postKeterangan(AkunId)" -->
              <option
                v-for="item in member"
                :value="item.id"
                :key="item.id"
                id="membersss"
              >
                <!-- @change="postIuran()" -->
                {{ item.name }}
              </option>
            </select>
          </div>
          <!-- end form-floating -->
          <label>Keterangan</label>
          <div class="form-floating mb-3">
            <input
              v-model="keterangan"
              type="text"
              class="form-control"
              id="keterangan"
              placeholder="Keterangan"
              label="keterangan"
              required
            />
            <label for="keterangan">Nama Lengkap</label>
          </div>
          <!-- {{akun.text}} -->
          <!-- end form-floating -->
          <div class="form-floating mb-3">
            <input
              v-model="jumlah"
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
          <router-link to="transaksi" type="button" class="btn btn-sm btn-dark"
            >Back</router-link
          >
          <button class="btn btn-sm btn-dark w-20 ms-2" type="submit">
            Buat Transaksi
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
      tanggal: "",
      KhasId: "",
      kas: [],
      jenis_transaksi: "",
      jenistransaksi: [],
      AkunId: "",
      akun: [],
      member: [],
      MemberId: "",
      keterangan: "",
      jumlah: "",
      iuran: "",
    };
  },

  methods: {
    store() {
      axios
        .post(process.env.VUE_APP_ROOT_API+"transaksi", {
          tanggal: this.tanggal,
          KhasId: this.KhasId,
          jenis_transaksi: this.jenis_transaksi,
          AkunId: this.AkunId,
          MemberId: this.MemberId,
          keterangan: this.keterangan,
          jumlah: this.jumlah,
        })
        .then((response) => {
          this.$toast.show("berhasil ditambahkan");

          this.$router.push({ name: "transaksi" });
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      // this.name = '';
    },
    getKhas: function () {
      axios.get(process.env.VUE_APP_ROOT_API+"transaksi/selectOption/khas").then(
        function (response) {
          this.kas = response.data.data.map((kas) => ({
            value: kas.id,
            text: kas.nama,
          }));
        }.bind(this)
      );
    },
    getMember: function () {
      axios.get(process.env.VUE_APP_ROOT_API+"transaksi/selectOption/member").then(
        function (response) {
          this.member = response.data.data;
        }.bind(this)
      );
    },
    getAkun: function () {
      axios.get(process.env.VUE_APP_ROOT_API+"transaksi/selectOption/akun").then(
        function (response) {
          this.akun = response.data.data;
        }.bind(this)
      );
    },
    postIuran() {
      axios
        .post(
          process.env.VUE_APP_ROOT_API+"transaksi/iuran/selectOption" , {
          akun: this.AkunId,
          MemberId: this.MemberId
        })
        .then(
          function (response) {
            this.jumlah = response.data;
            console.log(response)
          }.bind(this)
        );
    },
    // postKeterangan(AkunId) {
    //   alert(AkunId)
    //   this.keterangan = AkunId
    // },
  },
  created: function () {
    this.getKhas();
    this.getAkun();
    this.getMember();
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
