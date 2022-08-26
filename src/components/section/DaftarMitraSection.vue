<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Kemitraan</h3>
    </div>
    <!-- end user-panel-title-box -->

    <!-- {{ provinsi }} -->
    <div
      v-if="checkPrivilege('mitra-add')"
      class="d-grid gap-2 d-md-block"
    >
      <button
        @click="resetnama()"
        type="button"
        class="btn btn-dark btn-sm mb-2"
        data-bs-toggle="modal"
        data-bs-target="#messageModal"
      >
        Tambah Mitra
      </button>
    </div>
    <!-- {{ mitra.data }} -->
    <div class="profile-setting-panel-wrap">
      <div class="table-responsive">
        <table class="table mb-0 table-s2" id="dataMitra">
          <thead class="fs-14">
            <tr>
              <th
                scope="col"
                v-for="(list, i) in SectionData.mitraData.mitraTableHead"
                :key="i"
              >
                {{ list }}
              </th>
            </tr>
          </thead>
          <tbody class="fs-13">
            <tr v-for="item in mitra.data" :key="item.id">
              <td>{{ item.kontak.nama }}</td>
              <td>{{ item.kontak.alamat }}</td>
              <td>{{ item.kontak.nomor }}</td>
              <td>{{ item.kontak.email }}</td>
              <td>{{ item.kontak.email }}</td>
              <td>{{ item.kontak.status }}</td>
              <td class="row">
                <button
                  v-if="checkPrivilege('mitra-edit')"
                  @click="showMitra(item.id)"
                  class="col- icon-btn p-0 m-0"
                  title="Edit"
                  data-bs-toggle="modal"
                  data-bs-target="#updateModal"
                >
                  <em class="fa fa-pencil-square-o"></em>
                </button>
                <button
                  v-if="checkPrivilege('mitra-delete')"
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
    <!-- Modal store -->
    <form @submit.prevent="postMitra()">
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
              <h4 class="modal-title" id="reportModalLabel">Tambah Mitra</h4>
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
                <label>Kontak </label>
                <v-select
                  v-model="kontakId"
                  required
                  :options="kontak"
                  :reduce="(kontak) => kontak.value"
                  label="text"
                >
                </v-select>
              </div>
              <div class="form-group mb-3">
                <label>Tipe Mitra </label>
                <v-select
                  v-model="tipe_mitra"
                  required
                  :options="tipemitra"
                  :reduce="(tipemitra) => tipemitra.value"
                  label="text"
                >
                </v-select>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="date"
                  class="form-control"
                  id="tanggal_bergabung"
                  placeholder="Tanggal Bergabung"
                  v-model="tanggal_bergabung"
                  required
                />
                <label for="tanggal_bergabung">Tanggal Bergabung</label>
              </div>
              <label>Keterangan</label>
              <div class="form-floating mb-3">
                <editor
                  api-key="mfzmjkvruotbub8pu0xqk8j0h05uiv50w7tp9eo3u8n2rarv"
                  v-model="deskripsi"
                />
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
    <form @submit.prevent="putMitra(edit)">
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
              <h4 class="modal-title" id="reportModalLabel">update provinsi</h4>
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
                <label>Kontak </label>
                <v-select
                  v-model="kontakId"
                  required
                  :options="kontak"
                  :reduce="(kontak) => kontak.value"
                  label="text"
                >
                </v-select>
              </div>
              <div class="form-group mb-3">
                <label>Tipe Mitra </label>
                <v-select
                  v-model="tipe_mitra"
                  required
                  :options="tipemitra"
                  :reduce="(tipemitra) => tipemitra.value"
                  label="text"
                >
                </v-select>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="date"
                  class="form-control"
                  id="tanggal_bergabung"
                  placeholder="Tanggal Bergabung"
                  v-model="tanggal_bergabung"
                  required
                />
                <label for="tanggal_bergabung">Tanggal Bergabung</label>
              </div>
              <label>Keterangan</label>
              <div class="form-floating mb-3">
                <editor
                  api-key="mfzmjkvruotbub8pu0xqk8j0h05uiv50w7tp9eo3u8n2rarv"
                  v-model="deskripsi"
                />
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
import Editor from "@tinymce/tinymce-vue";
import mitt from "mitt";
const emitter = mitt();
// import { reactive } from 'vue';
// import { onMounted, ref } from 'vue';

export default {
  components: {
    Pagination,
    editor: Editor,
  },
  data() {
    return {
      SectionData,
      page: 1,
      perPage: 6,
      records: [],
      mitra: [],
      kontak: [],
      tipemitra: [],
      kontakId: "",
      tipe_mitra: "",
      tanggal_bergabung: "",
      deskripsi: "",
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
          this.deleteMitra(id);
          Swal.fire("Tersimpan!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Tidak Tersimpan", "", "info");
        }
      });
    },
    resetnama() {
      this.kontakId = null;
      this.tipe_mitra = null;
      this.tanggal_bergabung = null;
    },
    getKontak: function () {
      axios.get(process.env.VUE_APP_ROOT_API+"mitra/selectOption").then(
        function (response) {
          this.kontak = response.data.map((kontak) => ({
            value: kontak.id,
            text: kontak.nama,
          }));
        }.bind(this)
      );
    },
    getTipeMitra: function () {
      axios.get(process.env.VUE_APP_ROOT_API+"mitra/selectOption/mitra").then(
        function (response) {
          this.tipemitra = response.data.map((tipemitra) => ({
            value: tipemitra.id,
            text: tipemitra.name,
          }));
        }.bind(this)
      );
    },
    getMitra: function () {
      axios.get(process.env.VUE_APP_ROOT_API+"mitra").then(
        function (response) {
          this.mitra = response.data;
          setTimeout(() => {
            $("#dataMitra").DataTable();
          }, 100);
        }.bind(this)
      );
    },
    deleteMitra(id) {
      // alert(id);

      axios.delete(process.env.VUE_APP_ROOT_API+"mitra/" + id).then(
        function () {
          $("#dataMitra").DataTable().destroy();
          emitter.emit("refreshPage");
        }.bind(this)
      );
    },
    showMitra(id) {
      // alert(id);
      axios.get(process.env.VUE_APP_ROOT_API+"mitra/" + id).then(
        function (response) {
          this.edit = response.data.data.id;
          this.kontakId = response.data.data.kontakId;
          this.tipe_mitra = response.data.data.tipe_mitra;
          this.tanggal_bergabung = response.data.data.tanggal_bergabung;
          this.deskripsi = response.data.data.deskripsi;
        }.bind(this)
      );
    },
    putProvinsis(id) {
      // alert(id);
      axios
        .post(process.env.VUE_APP_ROOT_API+"provinsi/" + id, {
          name: this.name,
        })
        .then((response) => {
          this.showPost();
          this.getProvinsis();
          // this.$toast.show("berhasil update");
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error("gagal update");
          console.log(error);
        });
      this.name = "";
    },
    putMitra(id) {
      // alert(id);
      axios
        .post(process.env.VUE_APP_ROOT_API+"mitra/" + id, {
          kontakId: this.kontakId,
          tipe_mitra: this.tipe_mitra,
          tanggal_bergabung: this.tanggal_bergabung,
          deskripsi: this.deskripsi,
        })
        .then((response) => {
          this.showPost();
          this.getMitra();
          // this.$toast.show("berhasil update");
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error("gagal update");
          console.log(error);
        });
    },
    postMitra() {
      axios
        .post(process.env.VUE_APP_ROOT_API+"mitra", {
          kontakId: this.kontakId,
          tipe_mitra: this.tipe_mitra,
          tanggal_bergabung: this.tanggal_bergabung,
          deskripsi: this.deskripsi,
        })
        .then((response) => {
          this.showPost();
          $("#dataMitra").DataTable().destroy();
          emitter.emit("refreshPage");
          console.log(response);
        })
        .catch((error) => {
          // alert("mitra sudah ada");
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
    this.getMitra();
    this.getKontak();
    this.getTipeMitra();
    emitter.on("refreshPage", () => {
      this.getMitra();
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
store() { // axios.post( // process.env.VUE_APP_ROOT_API+'provinsi', // provinsi //
) // .then((response)=> { // console.log(response); // }).catch((err) => { //
console.log(err); // }); // } // return { // provinsi, // store // } // },
