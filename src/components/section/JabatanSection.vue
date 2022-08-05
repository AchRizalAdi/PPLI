<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>{{ SectionData.jabatanData.mainTitle }}</h3>
    </div>
    <!-- end user-panel-title-box -->

    <!-- {{ jabatan}} -->
    <div v-if="checkPrivilege('provinsi-store')" class="d-grid gap-2 d-md-block">
      <button
        @click="resetnama()"
        type="button"
        class="btn btn-dark btn-sm mb-2"
        data-bs-toggle="modal"
        data-bs-target="#messageModal"
      >
        Add jabatan
      </button>
    </div>
    <div class="profile-setting-panel-wrap">
      <div class="table">
        <table class="table mb-0 table-s2" id="dataTable">
          <thead class="fs-14">
            <tr>
              <th
                scope="col"
                v-for="(list, i) in SectionData.jabatanData.jabatanTableHead"
                :key="i"
              >
                {{ list }}
              </th>
            </tr>
          </thead>
          <tbody class="fs-13">
            <tr v-for="(item, index) in jabatan.data" :key="item.id">
              <td scope="row">
                <a href="#">{{ index + 1 }}</a>
              </td>
              <td>{{ item.name }}</td>
              <td>{{ item.level }}</td>
              <td class="row">
                <button
                v-if="checkPrivilege('provinsi-update')"
                  @click="showJabatan(item.id)"
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
    <form @submit.prevent="postJabatan()">
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
              <h4 class="modal-title" id="reportModalLabel">Add Jabatan</h4>
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
                <label for="nama">name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="level"
                  placeholder="level"
                  v-model="level"
                  required
                />
                <label for="level">level</label>
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
    <form @submit.prevent="putJabatan(id)">
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
              <h4 class="modal-title" id="reportModalLabel">Edit Jabatan</h4>
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
                <label for="nama">name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="level"
                  placeholder="level"
                  v-model="level"
                  required
                />
                <label for="level">level</label>
              </div>

              <!-- end form-floating -->
              <button
                class="btn btn-dark w-100"
                data-bs-dismiss="modal"
                type="submit"
              >
                Update
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
      id: [],
      jabatan: [],
      name: [],
      level: [],
    };
  },

  methods: {
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
          this.deleteJabatan(id);
          Swal.fire("Tersimpan!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Tidak Tersimpan", "", "info");
        }
      });
    },
    resetnama() {
      this.name = null;
      this.level = null;
    },
    getJabatan: function () {
      axios.get("http://127.0.0.1:8000/api/jabatan").then(
        function (response) {
          this.jabatan = response.data;
          $(document).ready(function () {
            $("#dataTable").DataTable();
          });
        }.bind(this)
      );
    },
    postJabatan() {
      axios
        .post("http://127.0.0.1:8000/api/jabatan", {
          name: this.name,
          level: this.level,
        })
        .then((response) => {
          this.showPost();
          this.getJabatan();
          this.$toast.show("berhasil ditambahkan");
          console.log(response);
        })
        .catch((error) => {
          this.$toast.show("gagal menambahkan");
          console.log(error);
        });
      this.name = "";
      this.level = "";
    },
    putJabatan(id) {
      axios
        .post("http://127.0.0.1:8000/api/jabatan/" + id, {
          name: this.name,
          level: this.level,
        })
        .then((response) => {
          this.showPost();
          this.getJabatan();
          this.$toast.show("berhasil update");
          console.log(response);
        })
        .catch((error) => {
          this.$toast.show("gagal update");
          console.log(error);
        });
      this.name = "";
      this.level = "";
    },
    showJabatan(id) {
      axios.get("http://127.0.0.1:8000/api/jabatan/" + id).then(
        function (response) {
          this.id = response.data.data.id;
          this.name = response.data.data.name;
          this.level = response.data.data.level;
        }.bind(this)
      );
    },
    deleteJabatan(id) {
        axios.delete("http://127.0.0.1:8000/api/jabatan/" + id).then(
          function () {
            this.getJabatan();
            this.$toast.show("berhasil delete");
          }.bind(this)
        );
    },
  },
  created: function () {
    this.getJabatan();
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
