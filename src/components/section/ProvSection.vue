<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Provinsi</h3>
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-s1 justify-content-left mb-3">
        <li class="breadcrumb-item">
          <router-link to="/pengaturan">Pengaturan</router-link>
        </li>
        <li class="breadcrumb-item">Provinsi</li>
      </ol>
    </nav>
    <!-- end user-panel-title-box -->

    <!-- {{ provinsi }} -->
    <div
      v-if="checkPrivilege('provinsi-add')"
      class="d-grid gap-2 d-md-block"
    >
      <button
        @click="resetnama()"
        type="button"
        class="btn btn-dark btn-sm mb-2"
        data-bs-toggle="modal"
        data-bs-target="#messageModal"
      >
        Tambah Provinsi
      </button>
    </div>

    <div class="profile-setting-panel-wrap">
      <div class="table">
        <table class="table mb-0 table-s2" id="dataProv">
          <thead class="fs-14">
            <tr>
              <th
                scope="col"
                v-for="(list, i) in SectionData.provinsisData
                  .provinsisTableHead"
                :key="i"
              >
                {{ list }}
              </th>
            </tr>
          </thead>
          <tbody class="fs-13">
            <tr v-for="(item, index) in provinsis.data" :key="item.id">
              <td scope="row">
                {{ index + 1 }}
              </td>
              <td>{{ item.name }}</td>
              <td class="row">
                <button
                  v-if="checkPrivilege('provinsi-edit')"
                  @click="showProvinsi(item.id)"
                  class="col- icon-btn p-0 m-0"
                  title="Edit"
                  data-bs-toggle="modal"
                  data-bs-target="#updateModal"
                >
                  <em class="fa fa-pencil-square-o"></em>
                </button>
                <button
                  v-if="checkPrivilege('provinsi-delete')"
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
    <form @submit.prevent="postProvinsis()">
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
                  id="nama"
                  placeholder="name"
                  v-model="name"
                  required
                />
                <label for="nama">Nama</label>
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
    <form @submit.prevent="putProvinsis(edit)">
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
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="name"
                  v-model="name"
                  required
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
      provinsis: [],
      //   edit:'',
      name: "",
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
          this.deleteProvinsi(id);
          Swal.fire("Berhasil Terhapus!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Tidak Tersimpan", "", "info");
        }
      });
    },
    resetnama() {
      this.name = null;
    },
    // table() {
    //   this.$nextTick(() => {
    //     $("#dataProv").DataTable();
    //   });
    // },
    getProvinsis: function () {
      axios.get(process.env.VUE_APP_ROOT_API+"provinsi").then(
        function (response) {
          this.provinsis = response.data;
          setTimeout(() => {
            $("#dataProv").DataTable();
          }, 100);
        }.bind(this)
      );
    },
    deleteProvinsi(id) {
      // alert(id);

      axios.delete(process.env.VUE_APP_ROOT_API+"provinsi/" + id).then(
        function () {
          $("#dataProv").DataTable().destroy();
          emitter.emit("refreshPage");
        }.bind(this)
      );
    },
    showProvinsi(id) {
      // alert(id);
      axios.get(process.env.VUE_APP_ROOT_API+"provinsi/" + id).then(
        function (response) {
          this.edit = response.data.data.id;
          this.name = response.data.data.name;
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
    },
    postProvinsis() {
      axios
        .post(process.env.VUE_APP_ROOT_API+"provinsi", {
          name: this.name,
        })
        .then((response) => {
          this.showPost();
          $("#dataProv").DataTable().destroy();
          emitter.emit("refreshPage");
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error("provinsi sudah ada");
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
    this.getProvinsis();
    emitter.on("refreshPage", () => {
      this.getProvinsis();
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
