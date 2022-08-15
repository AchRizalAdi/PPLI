<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Data Kas</h3>
    </div>
    <!-- end user-panel-title-box -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-s1 justify-content-left mb-3">
        <li class="breadcrumb-item">
          <router-link to="/pengaturan">Pengaturan</router-link>
        </li>
        <li class="breadcrumb-item">Data Kas</li>
      </ol>
    </nav>
    <!-- {{ provinsi }} -->
    <div
      v-if="checkPrivilege('provinsi-store')"
      class="d-grid gap-2 d-md-block"
    >
      <button
        @click="resetnama()"
        type="button"
        class="btn btn-dark btn-sm mb-2"
        data-bs-toggle="modal"
        data-bs-target="#messageModal"
      >
        Tambah Daftar Kas
      </button>
    </div>
    <!-- {{ khas }} -->
    <div class="profile-setting-panel-wrap">
      <div class="table-responsive">
        <table class="table mb-0 table-s2" id="datakas">
          <thead class="fs-14">
            <tr>
              <th
                scope="col"
                v-for="(list, i) in SectionData.khasData.khasTableHead"
                :key="i"
              >
                {{ list }}
              </th>
            </tr>
          </thead>
          <tbody class="fs-13">
            <tr v-for="item in khas.data" :key="item.id">
              <td>{{ item.kode }}</td>
              <td>{{ item.nama }}</td>
              <td>{{ item.saldo_awal }}</td>
              <td>{{ item.saldo_akhir }}</td>
              <td>{{ item.keterangan }}</td>
              <td>{{ item.tanggal }}</td>
              <td>{{ item.edit_by }}</td>
              <td >
                <button
                  v-if="checkPrivilege('provinsi-update')"
                  @click="showKhas(item.id)"
                  class="col- icon-btn p-0 m-0"
                  title="Edit"
                  data-bs-toggle="modal"
                  data-bs-target="#updateModal"
                >
                  <em class="fa fa-pencil-square-o"></em>
                </button>
                <!-- <button
                  v-if="checkPrivilege('provinsi-delete')"
                  @click="showDelete(item.id)"
                  class="col- icon-btn p-0 m-0"
                  title="Delete"
                >
                  <em class="ni ni-trash"></em>
                </button> -->
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
    <!-- Modal store -->
    <form @submit.prevent="postKhas()">
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
              <h4 class="modal-title" id="reportModalLabel">Tambah Kas</h4>
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
                  type="text"
                  class="form-control"
                  id="kodeakun"
                  placeholder="Kode"
                  v-model="kode"
                  required
                />
                <label for="kodeakun">Kode</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="nama"
                  placeholder="Nama"
                  v-model="nama"
                  required
                />
                <label for="nama">Nama</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="jumlah"
                  placeholder="Jumlah"
                  v-model="saldo_awal"
                  required
                />
                <label for="jumlah">Jumlah</label>
              </div>
              <div class="form-group mb-3">
                <label>Kode Akun </label>
                <v-select
                  v-model="kode_akun"
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
                  id="keterangan"
                  placeholder="Keterangan"
                  v-model="keterangan"
                  required
                />
                <label for="keterangan">Keterangan</label>
              </div>
              <!-- end form-floating -->
              <button
                class="btn btn-dark w-100"
                data-bs-dismiss="modal"
                type="submit"
              >
                Tambah
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
    <form @submit.prevent="putKhas(edit)">
      <div
        class="modal fade"
        id="updateModal"
        tabindex="-1"
        aria-labelledby="reportModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="reportModalLabel">update khas</h4>
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
                  type="text"
                  class="form-control"
                  id="kodeakun"
                  placeholder="Kode"
                  v-model="kode"
                  required
                />
                <label for="kodeakun">Kode</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="nama"
                  placeholder="Nama"
                  v-model="nama"
                  required
                />
                <label for="nama">Nama</label>
              </div>
              <!-- <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="jumlah"
                  placeholder="Jumlah"
                  v-model="saldo_awal"
                  required
                />
                <label for="jumlah">Jumlah</label>
              </div> -->
              <div class="form-group mb-3">
                <label>Kode Akun </label>
                <v-select
                  v-model="kode_akun"
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
                  id="keterangan"
                  placeholder="Keterangan"
                  v-model="keterangan"
                  required
                />
                <label for="keterangan">Keterangan</label>
              </div>
              <!-- end form-floating -->
              <button
                class="btn btn-dark w-100"
                data-bs-dismiss="modal"
                type="submit"
              >
                update
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
  </div>
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
      name: "",
      khas: [],
      kode: "",
      nama: "",
      kode_akun: "",
      saldo_awal: "",
      saldo_akhir: "",
      keterangan: "",
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
    showDelete(id) {
      Swal.fire({
        title: "Apakah anda ingin menghapus data ini?",
        showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: "Iya",
        denyButtonText: `Tidak`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.deleteKhas(id);
          Swal.fire("Tersimpan!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Tidak Tersimpan", "", "info");
        }
      });
    },
    resetnama() {
      this.kode = null;
      this.nama = null;
      this.kode_akun = null;
      this.saldo_awal = null;
      this.saldo_akhir = null;
      this.keterangan = null;
    },
    getKhas: function () {
      axios.get("http://127.0.0.1:8000/api/khas/index").then(
        function (response) {
          this.khas = response.data;
          setTimeout(() => {
            $("#datakas").DataTable();
          }, 100);
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
    deleteProvinsi(id) {
      // alert(id);

      axios.delete("http://127.0.0.1:8000/api/provinsi/" + id).then(
        function () {
          $("#datakas").DataTable().destroy();
          emitter.emit("refreshPage");
        }.bind(this)
      );
    },
    deleteKhas(id) {
      // alert(id);

      axios.delete("http://127.0.0.1:8000/api/khas/" + id).then(
        function () {
          // alert("delete succes");
          this.getKhas();
        }.bind(this)
      );
    },

    showKhas(id) {
      // alert(id);
      axios.get("http://127.0.0.1:8000/api/khas/" + id).then(
        function (response) {
          this.edit = response.data.data.id;
          this.kode = response.data.data.kode;
          this.kode_akun = response.data.data.kode_akun;
          this.nama = response.data.data.nama;
          this.saldo_awal = response.data.data.saldo_awal;
          this.saldo_akhir = response.data.data.saldo_akhir;
          this.keterangan = response.data.data.keterangan;
        }.bind(this)
      );
    },

    putKhas(id) {
      // alert(id);
      axios
        .post("http://127.0.0.1:8000/api/khas/" + id, {
          kode: this.kode,
          kode_akun: this.kode_akun,
          nama: this.nama,
          keterangan: this.keterangan,
        })
        .then((response) => {
          this.showPost();
          this.getKhas();
          // this.$toast.show("berhasil update");
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error("gagal update");
          console.log(error);
        });
    },

    postKhas() {
      axios
        .post("http://127.0.0.1:8000/api/khas", {
          kode: this.kode,
          kode_akun: this.kode_akun,
          nama: this.nama,
          saldo_awal: this.saldo_awal,
          saldo_akhir: this.saldo_awal,
          keterangan: this.keterangan,
        })
        .then((response) => {
          this.showPost();
          $("#datakas").DataTable().destroy();
          emitter.emit("refreshPage");
          console.log(response);
        })
        .catch((error) => {
          alert("Kas sudah ada");
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
    this.getKhas();
    this.getKategori();
    emitter.on("refreshPage", () => {
      this.getKhas();
    });
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

// setup(){ // const provinsi = reactive({ // name : '', // }); // function
store() { // axios.post( // 'http://127.0.0.1:8000/api/provinsi', // provinsi //
) // .then((response)=> { // console.log(response); // }).catch((err) => { //
console.log(err); // }); // } // return { // provinsi, // store // } // },
