<template>
  <div class="col-lg-9 ps-xl-5">
    <!-- {{ kegiatan }} -->
    <div class="user-panel-title-box">
      <h3>Edit Kegiatan</h3>
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-s1 justify-content-left mb-3">
        <li class="breadcrumb-item">
          <router-link to="/kegiatan">Kegiatan</router-link>
        </li>
        <li class="breadcrumb-item">Edit Kegiatan</li>
      </ol>
    </nav>
    <!-- end user-panel-title-box -->
    <div class="profile-setting-panel-wrap">
      <div class="table-responsive">
        <form @submit.prevent="updateKegiatan">
          <!-- {{ registers }} -->

          <div class="form-floating mb-3">
            <input
              v-model="kegiatan.nama_kegiatan"
              type="text"
              class="form-control"
              id="nama_kegiatan"
              placeholder="Nama Kegiatan"
              required
            />
            <label for="nama_kegiatan">Nama Kegiatan</label>
          </div>
          <!-- end form-floating -->
          <div class="form-floating mb-3">
            <input
              v-model="kegiatan.sifat_kegiatan"
              type="text"
              class="form-control"
              id="sifat_kegiatan"
              placeholder="Sifat Kegiatan"
              required
            />
            <label for="sifat_kegiatan">Sifat Kegiatan</label>
          </div>
          <!-- end form-floating -->
          <div class="form-floating mb-3">
            <input
              v-model="kegiatan.lokasi_kegiatan"
              type="text"
              class="form-control"
              id="lokasi_kegiatan"
              placeholder="Lokasi Kegiatan"
              required
            />
            <label for="lokasi_kegiatan">Lokasi Kegiatan</label>
          </div>
          <!-- end form-floating -->
          <div class="form-floating mb-3">
            <input
              v-model="kegiatan.tanggal_rencana"
              type="date"
              class="form-control"
              id="tanggal_rencana"
              placeholder="Tanggal Rencana"
              required
            />
            <label for="tanggal_rencana">Tanggal Rencana</label>
          </div>
          <!-- end form-floating -->
          <div class="form-floating mb-3">
            <input
              v-model="kegiatan.tanggal_realisasi"
              type="date"
              class="form-control"
              id="tanggal_realisasi"
              placeholder="Tanggal Realisasi"
              required
            />
            <label for="tanggal_realisasi">Tanggal Realisasi</label>
          </div>
          <!-- end form-floating -->
          <div class="form-floating mb-3">
            <editor
              api-key="mfzmjkvruotbub8pu0xqk8j0h05uiv50w7tp9eo3u8n2rarv"
              v-model="kegiatan.keterangan"
            />
          </div>
          <!-- end form-floating -->
          <!-- BUTTON -->
          <router-link to="/kegiatan" type="button" class="btn btn-sm btn-dark"
            >Back</router-link
          >
          <button class="btn btn-sm btn-dark w-20 ms-2" type="submit">
            Simpan Kegiatan
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
      kegiatan: [],
    };
  },

  methods: {
    getKegiatan() {
      axios
        .get(`http://127.0.0.1:8000/api/kegiatan/${this.$route.params.id}`)
        .then(
          function (response) {
            this.kegiatan = response.data.data;
          }.bind(this)
        );
    },
    updateKegiatan() {
      axios
        .post(
          `http://127.0.0.1:8000/api/kegiatan/${this.$route.params.id}`,
          this.kegiatan
        )
        .then((res) => {
          this.$router.push({ name: "kegiatan" });
          this.$toast.success("Kegiatan berhasil di update");
          console.log(res);
        });
    },
  },
  created: function () {
    this.getKegiatan();
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
