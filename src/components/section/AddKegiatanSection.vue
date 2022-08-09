<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Tambah Kegiatan</h3>
    </div>
    <!-- end user-panel-title-box -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-s1 justify-content-left mb-3">
        <li class="breadcrumb-item">
          <router-link to="/kegiatan">Kegiatan</router-link>
        </li>
        <li class="breadcrumb-item">Tambah Kegiatan</li>
      </ol>
    </nav>
    <div class="profile-setting-panel-wrap">
      <div class="table-responsive">
        <form @submit.prevent="store()">
          <!-- {{ registers }} -->

          <div class="form-floating mb-3">
            <input
              v-model="nama_kegiatan"
              type="text"
              class="form-control"
              id="nama_kegiatan"
              placeholder="Nama Kegiatan"
              required
            />
            <label for="nama_kegiatan">Nama Kegiatan</label>
          </div>
          <!-- end form-floating -->
          <label for="sifat_kegiatan">Sifat Kegiatan</label>
          <div class="form-floating mb-3">
            <select
              v-model="sifat_kegiatan"
              type="text"
              class="form-control"
              id="sifat_kegiatan"
              required
            >
              <option value="Internal Pengurus">Internal Pengurus</option>
              <option value="Internal DPD">Internal DPD</option>
            </select>
          </div>
          <!-- end form-floating -->
          <div class="form-floating mb-3">
            <input
              v-model="lokasi_kegiatan"
              type="text"
              class="form-control"
              id="lokasi_kegiatan"
              placeholder="Lokasi Kegiatan"
              required
            />
            <label for="lokasi_kegiatan">Lokasi Kegiatan</label>
          </div>
          <!-- end form-floating -->
          <div class="row mt-4">
            <div class="form-floating col-lg-6 mb-3">
              <input
                v-model="tanggal_rencana"
                type="date"
                class="form-control"
                id="tanggal_rencana"
                placeholder="Tanggal Rencana"
                required
              />
              <label for="tanggal_rencana">Tanggal Rencana</label>
            </div>
            <!-- end form-floating -->
            <div class="form-floating col-lg-6 mb-3">
              <input
                v-model="tanggal_realisasi"
                type="date"
                class="form-control"
                id="tanggal_realisasi"
                placeholder="Tanggal Realisasi"
              />
              <label for="tanggal_realisasi">Tanggal Realisasi</label>
            </div>
          </div>

          <!-- end form-floating -->
          <div class="form-floating mb-3">
            <editor
              api-key="mfzmjkvruotbub8pu0xqk8j0h05uiv50w7tp9eo3u8n2rarv"
              v-model="keterangan"
            />
          </div>
          <!-- BUTTON -->
          <router-link to="/kegiatan" type="button" class="btn btn-sm btn-dark"
            >Back</router-link
          >
          <button class="btn btn-sm btn-dark w-20 ms-2" type="submit">
            Tambah Kegiatan
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
import Editor from "@tinymce/tinymce-vue";
// import $ from "jquery";
// import { reactive } from 'vue';
// import { onMounted, ref } from 'vue';

export default {
  components: {
    editor: Editor,
    // Editor,
    // RichTextEditor,
  },
  data() {
    return {
      SectionData,
      page: 1,
      i: 1,
      perPage: 6,
      records: [],
      nama_kegiatan: "",
      sifat_kegiatan: "",
      lokasi_kegiatan: "",
      tanggal_rencana: "",
      tanggal_realisasi: "",
      keterangan: "",
    };
  },

  methods: {
    store() {
      axios
        .post("http://127.0.0.1:8000/api/kegiatan", {
          nama_kegiatan: this.nama_kegiatan,
          sifat_kegiatan: this.sifat_kegiatan,
          lokasi_kegiatan: this.lokasi_kegiatan,
          tanggal_rencana: this.tanggal_rencana,
          tanggal_realisasi: this.tanggal_realisasi,
          keterangan: this.keterangan,
        })
        .then((response) => {
          this.$router.push({ name: "kegiatan" });
          this.$toast.show("berhasil ditambahkan");
          console.log(response);
        })
        .catch((error) => {
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
