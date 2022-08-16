<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Pengurus</h3>
    </div>
    <!-- end user-panel-title-box -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-s1 justify-content-left mb-3">
        <li class="breadcrumb-item">
          <router-link to="/pengaturan">Pengaturan</router-link>
        </li>
        <li class="breadcrumb-item">Pengurus</li>
      </ol>
    </nav>
    <!-- {{ cities }} -->
    <div
      v-if="checkPrivilege('pengurus-add')"
      class="d-grid gap-2 d-md-block"
    >
      <button
        @click="resetnama()"
        type="button"
        class="btn btn-dark btn-sm mb-2"
        data-bs-toggle="modal"
        data-bs-target="#addModal"
      >
        Tambah Pengurus
      </button>
    </div>
    <!-- {{ members }} -->
    <div class="profile-setting-panel-wrap">
      <div class="table">
        <table class="table mb-0 table-s2" id="dataPengurus">
          <thead class="fs-14">
            <tr>
              <th
                scope="col"
                v-for="(list, i) in SectionData.pengurusData.pengurusTableHead"
                :key="i"
              >
                {{ list }}
              </th>
            </tr>
          </thead>
          <tbody class="fs-13">
            <tr v-for="(item, index) in pengurus" :key="item.id">
              <td scope="row">
                <a href="#">{{ index + 1 }}</a>
              </td>
              <td>{{ item.jabatan.name }}</td>
              <td>{{ item.member.name }}</td>
              <td>{{ item.username }}</td>
              <td>{{ item.status }}</td>
              <td class="row">
                <button
                  v-if="checkPrivilege('pengurus-edit')"
                  @click="showPengurus(item.id)"
                  class="col- icon-btn p-0 m-0"
                  title="Edit"
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                >
                  <em class="fa fa-pencil-square-o"></em>
                </button>
                <button
                  v-if="checkPrivilege('pengurus-delete')"
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
    <form @submit.prevent="postPengurus()">
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
              <h4 class="modal-title" id="reportModalLabel">Tambah Pengurus</h4>
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
                <label>Jabatan </label>
                <v-select
                  class="generic-select"
                  v-model="jabatanId"
                  required
                  :options="jabatans"
                  :reduce="(jabatans) => jabatans.value"
                  label="text"
                >
                </v-select>
              </div>
              <div class="form-group mb-2">
                <label>Member</label>
                <v-select
                  class="generic-select"
                  v-model="memberId"
                  required
                  :options="members"
                  :reduce="(members) => members.value"
                  label="text"
                >
                </v-select>
              </div>
              <div class="form-floating mb-3 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="username"
                  v-model="username"
                  required
                />
                <label for="username">Username</label>
              </div>
              <!-- <div class="form-floating mb-3 mt-4"> -->
              <!-- <input
                  type="text"
                  class="form-control"
                  id="status"
                  placeholder="status"
                  v-model="status"
                  required
                /> -->
              <label for="status">Status</label>
              <select
                class="form-select mb-3"
                v-model="status"
                aria-label="Default select example"
              >
                <label>I am i</label>
                <option value="Aktif">Aktif</option>
                <option value="Tidak Aktif">Tidak Aktif</option>
              </select>
              <!-- </div> -->
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
    <form @submit.prevent="putPengurus(id)">
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
              <h4 class="modal-title" id="reportModalLabel">Update Pengurus</h4>
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
                <label>Jabatan </label>
                <v-select
                  class="generic-select"
                  v-model="jabatanId"
                  required
                  :options="jabatans"
                  :reduce="(jabatans) => jabatans.value"
                  label="text"
                >
                </v-select>
              </div>
              <div class="form-group mb-2">
                <label>Member </label>
                <v-select
                  class="generic-select"
                  v-model="memberId"
                  required
                  :options="members"
                  :reduce="(members) => members.value"
                  label="text"
                >
                </v-select>
              </div>
              <div class="form-floating mb-3 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="username"
                  v-model="username"
                  required
                />
                <label for="username">Username</label>
              </div>
              <!-- <div class="form-floating mb-3 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="status"
                  placeholder="status"
                  v-model="status"
                  required
                /> -->
              <label for="status">Status</label>
              <select
                class="form-select mb-3"
                v-model="status"
                aria-label="Default select example"
              >
                <label>I am i</label>
                <option value="Aktif">Aktif</option>
                <option value="Tidak Aktif">Tidak Aktif</option>
              </select>
              <!-- </div> -->
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
      provinsiId: [],
      pengurus: [],
      member: [],
      jabatans: [],
      jabatanId: [],
      members: [],
      memberId: [],
      username: "",
      status: "",
    };
  },

  methods: {
    resetnama() {
      this.jabatanId = null;
      this.memberId = null;
      this.username = null;
      this.status = null;
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
          this.deletePengurus(id);
          Swal.fire("Berhasil Terhapus!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Tidak Tersimpan", "", "info");
        }
      });
    },
    getPengurus: function () {
      axios.get("http://127.0.0.1:8000/api/pengurus").then(
        function (response) {
          this.pengurus = response.data;
          // console.log(this.pengurus);
          setTimeout(() => {
            $("#dataPengurus").DataTable();
          }, 800);
        }.bind(this)
      );
    },
    getMember: function () {
      axios.get("http://127.0.0.1:8000/api/member").then(
        function (response) {
          this.members = response.data.data.map((members) => ({
            value: members.id,
            text: members.name + " - " + members.cities.name,
          }));
        }.bind(this)
      );
    },
    //  getJabatan() {
    //   axios.get("http://127.0.0.1:8000/api/jabatan").then(
    //     function (response) {
    //       this.jabatan = response.data.map((jabatan) => ({
    //         value: jabatan.id,
    //         text: jabatan.name,
    //       }));
    //     }.bind(this)
    //   );
    // },
    getJabatan: function () {
      axios.get("http://127.0.0.1:8000/api/jabatan").then(
        function (response) {
          this.jabatans = response.data.data.map((jabatans) => ({
            value: jabatans.id,
            text: jabatans.name + " - " + jabatans.level,
          }));
        }.bind(this)
      );
    },

    deletePengurus(id) {
      // alert(id);
      axios.delete("http://127.0.0.1:8000/api/pengurus/" + id).then(
        function () {
          $("#dataPengurus").DataTable().destroy();
          emitter.emit("refreshPage");
        }.bind(this)
      );
    },
    postPengurus() {
      axios
        .post("http://127.0.0.1:8000/api/pengurus", {
          jabatanId: this.jabatanId,
          memberId: this.memberId,
          username: this.username,
          status: this.status,
        })
        .then((response) => {
          this.showPost();
          $("#dataPengurus").DataTable().destroy();
          emitter.emit("refreshPage");
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error("pengurus sudah ada");
          console.log(error);
        });
    },

    putPengurus(id) {
      axios
        .post("http://127.0.0.1:8000/api/pengurus/" + id, {
          jabatanId: this.jabatanId,
          memberId: this.memberId,
          username: this.username,
          status: this.status,
        })
        .then((response) => {
          this.showPost();
          this.getPengurus();
          this.$toast.success("berhasil di update");
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error("gagal di update");
          console.log(error);
        });
      // this.jabatanId = "";
      // this.memberId = "";
      // this.username = "";
      // this.status = "";
    },

    getProvinsis: function () {
      axios.get("http://127.0.0.1:8000/api/select/provinsi").then(
        function (response) {
          this.provinsis = response.data.map((provinsis) => ({
            value: provinsis.id,
            text: provinsis.name,
          }));
        }.bind(this)
      );
    },
    showCities(id) {
      axios.get("http://127.0.0.1:8000/api/cities/" + id).then(
        function (response) {
          // console.log(response.data.data.id);
          this.id = response.data.data.id;
          this.provinsiId = response.data.data.provinsi.name;
          this.name = response.data.data.name;
        }.bind(this)
      );
    },
    showPengurus(id) {
      axios.get("http://127.0.0.1:8000/api/pengurus/" + id).then(
        function (response) {
          // console.log(response.data.data.id);
          this.id = response.data.data.id;
          this.jabatanId = response.data.data.jabatanId;
          this.memberId = response.data.data.memberId;
          this.username = response.data.data.username;
          this.status = response.data.data.status;
        }.bind(this)
      );
    },
    getCities: function () {
      axios.get("http://127.0.0.1:8000/api/cities").then(
        function (response) {
          this.cities = response.data;
        }.bind(this)
      );
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
    this.getCities();
    this.getPengurus();
    emitter.on("refreshPage", () => {
      this.getPengurus();
    });
    this.getMember();
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
