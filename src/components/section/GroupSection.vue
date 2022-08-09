<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Group</h3>
    </div>
    <!-- end user-panel-title-box -->

    <!-- {{ cities }} -->
    <div class="d-grid gap-2 d-md-block">
      <button
        @click="resetnama()"
        type="button"
        class="btn btn-dark btn-sm mb-2"
        data-bs-toggle="modal"
        data-bs-target="#addModal"
      >
        Add Group
      </button>
    </div>
    <div class="profile-setting-panel-wrap">
      <div class="table">
        <table class="table mb-0 table-s2" id="dataRoles">
          <thead class="fs-14">
            <tr>
              <th
                scope="col"
                v-for="(list, i) in SectionData.groupData.groupTableHead"
                :key="i"
              >
                {{ list }}
              </th>
            </tr>
          </thead>
          <tbody class="fs-13">
            <tr v-for="item in roles.data" :key="item.id">
              <td>{{ item.name }}</td>
              <td class="row">
                <router-link
                  :to="{ name: 'privilege', params: { id: item.id } }"
                  class="col- p-0 m-0 icon-btn"
                  title="Show"
                  ><em class="fa-solid fa-gears"></em
                ></router-link>
                <!-- <button  @click="showRoles(item.id)" class="col- p-0 m-0 icon-btn" title="Edit" data-bs-toggle="modal"  data-bs-target="#editModal"><em class="ni ni-file" ></em></button> -->
                <button
                  @click="showDelete(item.id)"
                  class="col- p-0 m-0 icon-btn"
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
    <form @submit.prevent="postRoles()">
      <div
        class="modal fade"
        id="addModal"
        tabindex="-1"
        aria-labelledby="reportModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="reportModalLabel">Group</h4>
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
              <div class="form-floating mb-3 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="nama"
                  placeholder="name"
                  v-model="name"
                  required
                />
                <label for="nama">Name</label>
              </div>
              <!-- end form-floating -->
              <button class="btn btn-dark w-100" data-bs-dismiss="modal" type="submit">Add</button>
            </div>
            <!-- end modal-body -->
          </div>
          <!-- end modal-content -->
        </div>
        <!-- end modal-dialog -->
      </div>
      <!-- end modal-->
    </form>
    <form @submit.prevent="putRoles(id)">
      <div
        class="modal fade"
        id="editModal"
        tabindex="-1"
        aria-labelledby="reportModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="reportModalLabel">Update Group</h4>
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
              <div class="form-floating mb-3 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="nama"
                  placeholder="name"
                  v-model="name"
                  required
                />
                <label for="nama">Name</label>
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
      i: 1,
      perPage: 6,
      records: [],
      provinsis: [],
      name: [],
      cities: [],
      provinsi: [],
      roles: [],
    };
  },

  methods: {
    resetnama() {
      this.name = null;
    },
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
          this.deleteRoles(id);
          Swal.fire("Data Terhapus!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Tidak Tersimpan", "", "info");
        }
      });
    },
    postRoles() {
      axios
        .post("http://127.0.0.1:8000/api/role/store", {
          name: this.name,
        })
        .then((response) => {
          this.showPost();
          $("#dataRoles").DataTable().destroy();
          emitter.emit("refreshPage");
          this.$toast.success("berhasil ditambahkan");
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error("gagal menambahkan data");
          console.log(error);
        });
      this.name = "";
    },
    getRoles: function () {
      axios.get("http://127.0.0.1:8000/api/role/show").then(
        function (response) {
          this.roles = response.data;
          setTimeout(() => {
            $("#dataRoles").DataTable();
          }, 100);
        }.bind(this)
      );
    },
    putRoles(id) {
      axios
        .post("http://127.0.0.1:8000/api/role/update/" + id, {
          name: this.name,
        })
        .then((response) => {
          this.getRoles();
          this.$toast.show("berhasil update");
          console.log(response);
        })
        .catch((error) => {
          this.$toast.show("gagal update");
          console.log(error);
        });
      this.name = "";
    },
    showRoles(id) {
      // alert(id);
      axios.get("http://127.0.0.1:8000/api/role/show/" + id).then(
        function (response) {
          // alert(response);
          // console.log(response.data.data.id);
          this.id = response.data.data.id;
          this.name = response.data.data.name;
        }.bind(this)
      );
    },
    deleteRoles(id) {
      axios.delete("http://127.0.0.1:8000/api/admin/delete/roles/" + id).then(
        function () {
          $("#dataRoles").DataTable().destroy();
          emitter.emit("refreshPage");
        }.bind(this)
      );
    },

    // batas
  },
  created: function () {
    this.getRoles();
    emitter.on("refreshPage", () => {
      this.getRoles();
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
