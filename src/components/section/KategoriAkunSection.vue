<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Kategori Akun</h3>
    </div>
    <!-- end user-panel-title-box -->

    <!-- {{ provinsi }} -->
    <!-- v-if="checkPrivilege('dpw-store')" -->
    <div class="d-grid gap-2 d-md-block">
      <button
        @click="resetnama()"
        type="button"
        class="btn btn-dark btn-sm mb-2"
        data-bs-toggle="modal"
        data-bs-target="#messageModal"
      >
        Tambah Akun
      </button>
    </div>

    <!-- {{ memberss }} -->
    <form @submit.prevent="postWilayah()">
      <h6 class>Filter DPD</h6>
      <select class="form-control w-25" v-model="wilayah" required>
        <option value="0">All</option>
        <option v-for="item in wilayahss" :value="item.id" :key="item.id">
          {{ item.name }}
        </option>
      </select>
      <button class="btn btn-sm btn-dark" type="submit">Filter</button>
    </form>
    <div class="profile-setting-panel-wrap">
      <div class="table">
        <table class="table mb-0 table-s2" id="dataTable">
          <thead class="fs-14">
            <tr>
              <th
                scope="col"
                v-for="(list, i) in SectionData.KategoriAkunData
                  .KategoriAkunTableHead"
                :key="i"
              >
                {{ list }}
              </th>
            </tr>
          </thead>
          <tbody class="fs-13">
            <tr v-for="item in memberss" :key="item.id">
              <td>{{ item.kode }}</td>
              <td>{{ item.nama_akun }}</td>
              <td class="row">
                <!-- <router-link
                  :to="{ name: 'show-member', params: { id: item.id } }"
                  class="col- p-0 m-0 icon-btn btn-sm"
                  title="Edit"
                  ><em class="fa fa-eye"></em
                ></router-link> -->
                <button
                  v-if="checkPrivilege('dpw-update')"
                  @click="showKategori(item.id)"
                  class="col- icon-btn p-0 m-0"
                  title="Edit"
                  data-bs-toggle="modal"
                  data-bs-target="#messageModal"
                >
                  <em class="fa fa-pencil-square-o"></em>
                </button>
                <button
                  v-if="checkPrivilege('dpw-delete')"
                  @click="showDelete(item.id)"
                  class="col- icon-btn p-0 m-0"
                  title="Delete"
                >
                  <em class="ni ni-trash"></em>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- end table-responsive -->
      <!-- pagination -->
      <div class="text-center mt-4 mt-md-5">
        <Pagination
          :records="records.length"
          v-model="page"
          :per-page="perPage"
        ></Pagination>
      </div>
    </div>
    <!-- end profile-setting-panel-wrap-->
  </div>
  <!-- Modal store -->
  <form @submit.prevent="postKategori()">
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
            <h4 class="modal-title" id="reportModalLabel">Tambah Akun</h4>
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
            <div class="form-group mb-2">
              <label>Wilayah </label>
              <v-select
                v-model="wilayah"
                required
                :options="wilayahs"
                :reduce="(wilayahs) => wilayahs.value"
                label="text"
              >
              </v-select>
            </div>
            <div class="form-group mb-2">
              <label>Kategori </label>
              <v-select
                v-model="nama_kategori"
                required
                :options="kategori"
                :reduce="(kategori) => kategori.value"
                label="text"
              >
              </v-select>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="kode"
                placeholder="kode"
                v-model="kode"
                required
              />
              <label for="kode">Kode</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="nama_akun"
                placeholder="nama_akun"
                v-model="nama_akun"
                required
              />
              <label for="nama_akun">Nama Akun</label>
            </div>
            <div class="form-check mb-3 mt-2">
              <input
                v-model="induk"
                class="form-check-input"
                type="checkbox"
                id="checkbox"
              />
              <label class="form-check-label" for="checkbox">
                Kategori Induk
              </label>
            </div>
            <label>Kategori</label>
            <div class="form-floating mb-3">
              <select class="form-select h-25" v-model="kategori_akun">
                <!-- <label>I am i</label> -->
                <option value="Biaya / Pengeluaran">Biaya / Pengeluaran</option>
                <option value="Pendapatan">Pendapatan</option>
              </select>
            </div>
            <!-- end form-floating -->
            <button
              class="btn btn-dark w-100"
              data-bs-dismiss="modal"
              type="submit"
            >
              Add
            </button>
          </div>
          <!-- end modal-body -->
        </div>
        <!-- end modal-content -->
      </div>
      <!-- end modal-dialog -->
    </div>
    <!-- end modal-->
  </form>
  <!-- end col-lg-8 -->
  <!-- Modal store -->
  <form @submit.prevent="putKategori()">
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
            <h4 class="modal-title" id="reportModalLabel">Tambah Akun</h4>
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
            <div class="form-group mb-2">
              <label>Wilayah </label>
              <v-select
                v-model="wilayah"
                required
                :options="wilayahs"
                :reduce="(wilayahs) => wilayahs.value"
                label="text"
              >
              </v-select>
            </div>
            <div class="form-group mb-2">
              <label>Kategori </label>
              <v-select
                v-model="nama_kategori"
                required
                :options="kategori"
                :reduce="(kategori) => kategori.value"
                label="text"
              >
              </v-select>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="kode"
                placeholder="kode"
                v-model="kode"
                required
              />
              <label for="kode">Kode</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="nama_akun"
                placeholder="nama_akun"
                v-model="nama_akun"
                required
              />
              <label for="nama_akun">Nama Akun</label>
            </div>
            <div class="form-check mb-3 mt-2">
              <input
                v-model="induk"
                class="form-check-input"
                type="checkbox"
                id="checkbox"
              />
              <label class="form-check-label" for="checkbox">
                Kategori Induk
              </label>
            </div>
            <label>Kategori</label>
            <div class="form-floating mb-3">
              <select class="form-select h-25" v-model="kategori_akun">
                <!-- <label>I am i</label> -->
                <option value="Biaya / Pengeluaran">Biaya / Pengeluaran</option>
                <option value="Pendapatan">Pendapatan</option>
              </select>
            </div>
            <!-- end form-floating -->
            <button
              class="btn btn-dark w-100"
              data-bs-dismiss="modal"
              type="submit"
            >
              Add
            </button>
          </div>
          <!-- end modal-body -->
        </div>
        <!-- end modal-content -->
      </div>
      <!-- end modal-dialog -->
    </div>
    <!-- end modal-->
  </form>
  <!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import Pagination from "v-pagination-3";
import axios from "axios";
import $ from "jquery";
import Swal from "sweetalert2";
// import { reactive } from 'vue';
// import { onMounted, ref } from 'vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      SectionData,
      page: 1,
      perPage: 6,
      records: [],
      memberss: [],
      wilayahss: [],
      wilayahs: [],
      kategori: [],
      wilayah: "",
      WilayahId: "",
      kode: "",
      nama_kategori: "",
      nama_akun: "",
      induk: "",
      kategori_akun: "",
    };
  },

  methods: {
    showPost() {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Data telah tersimpan!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    resetnama() {
      this.wilayah = null;
      this.kode = null;
      this.nama_kategori = null;
      this.nama_akun = null;
      this.induk = null;
      this.kategori_akun = null;
    },
    showDelete(id) {
      Swal.fire({
        title: "Apakah anda ingin menghapus data ini?",
        showDenyButton: true,
        confirmButtonText: "Iya",
        denyButtonText: `Tidak`,
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteKategori(id);
          Swal.fire("Tersimpan!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Tidak Tersimpan", "", "info");
        }
      });
    },
    getWilayahs: function () {
      axios.get("http://127.0.0.1:8000/api/select/wilayah").then(
        function (response) {
          this.wilayahs = response.data.map((wilayahs) => ({
            value: wilayahs.id,
            text: wilayahs.name,
          }));
        }.bind(this)
      );
    },
    getKategori: function () {
      axios.get("http://127.0.0.1:8000/api/akun/selectOption").then(
        function (response) {
          this.kategori = response.data.data.map((kategori) => ({
            value: kategori.id,
            text: kategori.nama_akun + " - " + kategori.kode,
          }));
        }.bind(this)
      );
    },
    getWilayah: function () {
      axios.get("http://127.0.0.1:8000/api/select/wilayah").then(
        function (response) {
          this.wilayahss = response.data;
        }.bind(this)
      );
    },
    postWilayah() {
      axios
        .post("http://127.0.0.1:8000/api/akun/index", {
          wilayah: this.wilayah,
        })
        .then((response) => {
          $(document).ready(function () {
            $("#dataTable").DataTable();
          });
          this.memberss = response.data.data;
        });
    },
    showKategori(id) {
      axios.get("http://127.0.0.1:8000/api/akun/" + id).then(
        function (response) {
          this.id = response.data.data.id;
          this.wilayah = response.data.data.wilayah.name;
          this.kode = response.data.data.kode;
          this.nama_kategori = response.data.data.nama_kategori;
          this.nama_akun = response.data.data.nama_akun;
          this.kategori_akun = response.data.data.kategori_akun;
          this.data = response.data.data.induk;
          this.induk = response.data.data.induk === 1 ? true : false;
          // alert(this.data);
        }.bind(this)
      );
    },
    deleteKategori(id) {
      axios.delete("http://127.0.0.1:8000/api/akun/" + id).then(
        function () {
          this.getKategori();
          this.$toast.show("berhasil delete");
        }.bind(this)
      );
    },
    postKategori() {
      axios
        .post("http://127.0.0.1:8000/api/akun", {
          wilayah: this.wilayah,
          kode: this.kode,
          nama_kategori: this.nama_kategori,
          nama_akun: this.nama_akun,
          induk: this.induk,
          kategori_akun: this.kategori_akun,
        })
        .then((response) => {
          this.showPost();
          // this.$toast.success("berhasil ditambahkan");
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error("gagal menambahkan wilayah");
          console.log(error);
        });
    },
    checkPrivilege(privilege) {
      const permission = localStorage.getItem("permission");
      let status = false;
      JSON.parse(permission).forEach((data) => {
        if (data === privilege) {
          status = true;
        }
      });
      return status;
    },
  },
  created: function () {
    this.getWilayah();
    this.getKategori();
    this.getWilayahs();
    this.postWilayah();
  },
  computed: {
    displayedRecords() {
      const startIndex = this.perPage * (this.page - 1);
      const endIndex = startIndex + this.perPage;
      return this.records.slice(startIndex, endIndex);
    },
  },
};
</script>
