<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>DPW</h3>
    </div>
    <!-- end user-panel-title-box -->

    <!-- {{ provinsi }} -->
    <div
      v-if="checkPrivilege('dpw-store')"
      class="d-grid gap-2 d-md-block"
    >
      <button
        @click="resetnama()"
        type="button"
        class="btn btn-primary btn-sm mb-2"
        data-bs-toggle="modal"
        data-bs-target="#messageModal"
      >
      Tambah DPW
      </button>
    </div>

    <div class="profile-setting-panel-wrap">
      <div class="table">
        <table class="table mb-0 table-s2" id="dataTable">
          <thead class="fs-14">
            <tr>
              <th
                scope="col"
                v-for="(list, i) in SectionData.DPWData
                  .DPWTableHead"
                :key="i"
              >
                {{ list }}
              </th>
            </tr>
          </thead>
          <tbody class="fs-13">
            <tr v-for="(item, index) in dpw.data" :key="item.id">
              <td scope="row">
                <a href="#">{{ index+1 }}</a>
              </td>
              <td>{{ item.kode }}</td>
              <td>{{ item.nama }}</td>
              <td>{{ item.alamat_kantor }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.nomor }}</td>
              <td class="row">
                <button
                  v-if="checkPrivilege('dpw-update')"
                  @click="showDPW(item.id)"
                  class="col- icon-btn p-0 m-0"
                  title="Edit"
                  data-bs-toggle="modal"
                  data-bs-target="#updateModal"
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
    <!-- Modal store -->
    <form @submit.prevent="postDPWs()">
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
              <h4 class="modal-title" id="reportModalLabel">Add Provinsi</h4>
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
                  id="nama"
                  placeholder="Nama"
                  v-model="nama"
                  required
                />
                <label for="nama">Nama</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="alamat_kantor"
                  placeholder="alamat_kantor"
                  v-model="alamat_kantor"
                  required
                />
                <label for="alamat_kantor">Alamat Kantor</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="email"
                  v-model="email"
                  required
                />
                <label for="email">Email</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="nomor"
                  placeholder="nomor"
                  v-model="nomor"
                  required
                />
                <label for="nomor">Nomor</label>
              </div>
              <!-- end form-floating -->
              <button class="btn btn-dark w-100" type="submit">Add</button>
            </div>
            <!-- end modal-body -->
          </div>
          <!-- end modal-content -->
        </div>
        <!-- end modal-dialog -->
      </div>
      <!-- end modal-->
    </form>
    <form @submit.prevent="putDPW(edit)">
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
              <h4 class="modal-title" id="reportModalLabel">Ubah Data DPW</h4>
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
                  id="nama"
                  placeholder="Nama"
                  v-model="nama"
                  required
                />
                <label for="nama">Nama</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="alamat_kantor"
                  placeholder="alamat_kantor"
                  v-model="alamat_kantor"
                  required
                />
                <label for="alamat_kantor">Alamat Kantor</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="email"
                  v-model="email"
                  required
                />
                <label for="email">Email</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="nomor"
                  placeholder="nomor"
                  v-model="nomor"
                  required
                />
                <label for="nomor">Nomor</label>
              </div>
              <!-- end form-floating -->
              <button class="btn btn-dark w-100" data-bs-dismiss="modal" type="submit">update</button>
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
      provinsis: [],
      //   edit:'',
      name: "",
      dpw: [],
      kode: '',
      nama: '',
      alamat_kantor: '',
      email: '',
      nomor: '',
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
          this.deleteDPW(id);
          Swal.fire("Tersimpan!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Tidak Tersimpan", "", "info");
        }
      });
    },
    resetnama() {
      this.name = null;
    },
    getDPWs: function (){
      axios.get("http://127.0.0.1:8000/api/dpw").then(
        function (response) {
          this.dpw = response.data;
          $(document).ready(function () {
            $("#dataTable").DataTable();
          });
        }.bind(this)
      );
    },
    deleteDPW(id) {
      // alert(id);

      axios.delete("http://127.0.0.1:8000/api/dpw/" + id).then(
        function () {
          // alert("delete succes");
          this.getDPWs();
        }.bind(this)
      );
    },
    showDPW(id) {
      // alert(id);
      axios.get("http://127.0.0.1:8000/api/dpw/" + id).then(
        function (response) {
          this.edit = response.data.data.id;
          this.kode = response.data.data.kode;
          this.nama = response.data.data.nama;
          this.alamat_kantor = response.data.data.alamat_kantor;
          this.email = response.data.data.email;
          this.nomor = response.data.data.nomor;
        }.bind(this)
      );
    },
     putDPW(id) {
      // alert(id);
      axios
        .post("http://127.0.0.1:8000/api/dpw/" + id, {
          kode: this.kode,
          nama: this.nama,
          alamat_kantor: this.alamat_kantor,
          email: this.email,
          nomor: this.nomor,
        })
        .then((response) => {
          this.showPost();
          this.getDPWs();
          // this.$toast.show("berhasil update");
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error("gagal update");
          console.log(error);
        });
      // this.name = "";
    },
    postDPWs(){
      axios
        .post("http://127.0.0.1:8000/api/dpw", {
          kode: this.kode,
          nama: this.nama,
          alamat_kantor: this.alamat_kantor,
          email: this.email,
          nomor: this.nomor,
        })
        .then((response) => {
          this.showPost();
          this.getDPWs();
          console.log(response);
        })
        .catch((error) => {
          alert("data sudah ada");
          console.log(error);
        });
      this.kode = "";
      this.nama = "";
      this.alamat_kantor = "";
      this.email = "";
      this.nomor = "";
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
    this.getDPWs();
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
