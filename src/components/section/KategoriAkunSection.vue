<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Kategori Akun</h3>
    </div>
    <!-- end user-panel-title-box -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-s1 justify-content-left mb-3">
        <li class="breadcrumb-item">
          <router-link to="/pengaturan">Pengaturan</router-link>
        </li>
        <li class="breadcrumb-item">Kategori Akun</li>
      </ol>
    </nav>
    <!-- {{ index }} -->
    <!-- v-if="checkPrivilege('dpw-store')" -->
    <div class="d-grid gap-2 d-md-block">
      <button
        v-if="checkPrivilege('kategori-add')"
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
    <h6 class="mt-2">Filter DPD</h6>
    <form class="d-flex" @submit.prevent="postWilayah()">
      <select class="form-control w-25" v-model="wilayah" required>
        <option value="0">All</option>
        <option v-for="item in wilayahss" :value="item.id" :key="item.id">
          {{ item.name }}
        </option>
      </select>
      <button class="btn btn-sm btn-dark ms-2" type="submit">Filter</button>
      <button class="btn btn-dark btn-sm ms-3" @click="refresh()">
        Refresh
      </button>
    </form>
    <div class="profile-setting-panel-wrap">
      <div class="table">
        <table class="table mb-0 table-s2" id="dataMem">
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
                  v-if="checkPrivilege('kategori-edit')"
                  @click="showKategori(item.id)"
                  class="col- icon-btn p-0 m-0"
                  title="Edit"
                  data-bs-toggle="modal"
                  data-bs-target="#putModal"
                >
                  <em class="fa fa-pencil-square-o"></em>
                </button>
                <button
                  v-if="checkPrivilege('kategori-delete')"
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
                class="generic-select"
                v-model="wilayah"
                required
                :options="wilayahs"
                :reduce="(wilayahs) => wilayahs.value"
                label="text"
              >
              </v-select>
              <!-- {{wilayah}} -->
            </div>
            <div class="form-group mb-3">
              <label>Kategori </label>
              <v-select
                class="generic-select"
                v-model="nama_kategori"
                required
                :options="kategori"
                :reduce="(kategori) => kategori.text"
                label="text"
              >
              </v-select>
              <!-- {{nama_kategori}} -->
            </div>
            <!-- {{kategori}} -->
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
                <option value="pengeluaran">Pengeluaran</option>
                <option value="pemasukan">Pemasukan</option>
              </select>
            </div>
            <!-- {{index}} -->
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
  <form @submit.prevent="putKategori(id)">
    <div
      class="modal fade"
      id="putModal"
      tabindex="-1"
      aria-labelledby="reportModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="reportModalLabel">Edit Akun</h4>
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
                class="generic-select"
                v-model="wilayah"
                required
                :options="wilayahs"
                :reduce="(wilayahs) => wilayahs.value"
                label="text"
              >
              </v-select>
              <!-- {{wilayahs}}
              <br>
              {{wilayah}} -->
            </div>
            <div class="form-group mb-3">
              <label>Kategori </label>
              <v-select
                class="generic-select"
                v-model="nama_kategori"
                required
                :options="kategori"
                :reduce="(kategori) => kategori.text"
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
                <option value="pengeluaran">Pengeluaran</option>
                <option value="pemasukan">Pemasukan</option>
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
import mitt from "mitt";
const emitter = mitt();
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
      index: [],
    };
  },

  methods: {
    showPost() {
      Swal.fire({
        position: "center",
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
          Swal.fire("Berhasil Terhapus!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Tidak Tersimpan", "", "info");
        }
      });
    },
    getWilayahs: function () {
      axios.get(process.env.VUE_APP_ROOT_API+"select/wilayah").then(
        function (response) {
          this.wilayahs = response.data.map((wilayahs) => ({
            value: wilayahs.id,
            text: wilayahs.name,
          }));
        }.bind(this)
      );
    },
    getKategori: function () {
      axios.get(process.env.VUE_APP_ROOT_API+"akun/selectOption").then(
        function (response) {
          this.kategori = response.data.data.map((kategori) => ({
            value: kategori.id,
            text: kategori.nama_akun + " - " + kategori.kode,
          }));
        }.bind(this)
      );
    },
    getWilayah: function () {
      axios.get(process.env.VUE_APP_ROOT_API+"select/wilayah").then(
        function (response) {
          this.wilayahss = response.data;
        }.bind(this)
      );
    },
    getIndex: function () {
      axios.get(process.env.VUE_APP_ROOT_API+"akun/getindex").then(
        function (response) {
          this.index = response.data.data;
          setTimeout(() => {
            $("#dataMem").DataTable();
          }, 300);
        }.bind(this)
      );
    },
    postWilayah() {
      axios
        .post(process.env.VUE_APP_ROOT_API+"akun/index", {
          wilayah: this.wilayah,
        })
        .then((response) => {
          this.memberss = response.data.data;
          setTimeout(() => {
            $("#dataMem").DataTable();
          }, 300);
          $("#dataMem").DataTable().destroy();
          emitter.emit("refreshPage");
        });
    },
    refresh() {
      $("#dataMem").DataTable().destroy();
      emitter.emit("refreshPage");
    },
    showKategori(id) {
      axios.get(process.env.VUE_APP_ROOT_API+"akun/" + id).then(
        function (response) {
          this.id = response.data.data.id;
          this.wilayah = response.data.data.wilayah.id;
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
      axios.delete(process.env.VUE_APP_ROOT_API+"akun/" + id).then(
        function () {
          this.getKategori();
          this.$toast.show("berhasil delete");
        }.bind(this)
      );
    },
    postKategori() {
      axios
        .post(process.env.VUE_APP_ROOT_API+"akun", {
          wilayah: this.wilayah,
          kode: this.kode,
          nama_kategori: this.nama_kategori,
          nama_akun: this.nama_akun,
          induk: this.induk,
          kategori_akun: this.kategori_akun,
        })
        .then((response) => {
          this.showPost();
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error("gagal menambahkan kategori");
          console.log(error);
        });
    },
    putKategori(id) {
      axios
        .post(process.env.VUE_APP_ROOT_API+"akun/" + id, {
          wilayah: this.wilayah,
          kode: this.kode,
          nama_kategori: this.nama_kategori,
          nama_akun: this.nama_akun,
          induk: this.induk,
          kategori_akun: this.kategori_akun,
        })
        .then((response) => {
          this.showPost();
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error("gagal Mengubah kategori");
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
    this.getIndex();
    this.getWilayahs();
    emitter.on("refreshPage", () => {});
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
