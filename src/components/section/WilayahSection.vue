<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>{{ SectionData.wilayahData.mainTitle }}</h3>
    </div>
    <!-- end user-panel-title-box -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-s1 justify-content-left mb-3">
        <li class="breadcrumb-item">
          <router-link to="/pengaturan">Pengaturan</router-link>
        </li>
        <li class="breadcrumb-item">Wilayah</li>
      </ol>
    </nav>
    <!-- {{ cities}} -->
    <div v-if="checkPrivilege('wilayah-add')" class="d-grid gap-2 d-md-block">
      <button
        @click="resetnama()"
        type="button"
        class="btn btn-dark btn-sm mb-2"
        data-bs-toggle="modal"
        data-bs-target="#messageModal"
      >
        Add Wilayah
      </button>
    </div>
    <!-- {{wilayah }} -->
    <div class="profile-setting-panel-wrap">
      <div class="table">
        <table class="table mb-0 table-s2" id="dataWilayah">
          <thead class="fs-14">
            <tr>
              <th
                scope="col"
                v-for="(list, i) in SectionData.wilayahData.wilayahTableHead"
                :key="i"
              >
                {{ list }}
              </th>
            </tr>
          </thead>
          <tbody class="fs-13">
            <tr v-for="item in wilayah.data" :key="item.id">
              <td scope="row">
                <a href="#">{{ item.id }}</a>
              </td>
              <td>{{ item.name }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.kota }}</td>
              <td>{{ item.alamat }}</td>
              <td>{{ item.nomor }}</td>
              <td class="row">
                <button
                  v-if="checkPrivilege('wilayah-edit')"
                  @click="showWilayah(item.id)"
                  class="col- icon-btn p-0 m-0"
                  title="Edit"
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                >
                  <em class="fa fa-pencil-square-o"></em>
                </button>
                <button
                  v-if="checkPrivilege('wilayah-delete')"
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
    <form @submit.prevent="postWilayah()">
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
              <h4 class="modal-title" id="reportModalLabel">Add Wilayah</h4>
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
              <!-- end form-floating -->
              <div class="form-floating mb-3 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="email"
                  v-model="email"
                  required
                />
                <label for="email">email</label>
              </div>
              <!-- end form-floating -->
              <!-- <div class="form-group mb-2">
                <label>Kota </label>
                <select v-model="kota" class="form-control" required>
                  <option
                    v-for="data in cities"
                    :value="data.name"
                    :key="data.id"
                  >
                    {{ data.name }}
                  </option>
                </select>
              </div> -->
              <div class="form-group mb-2">
                <label>Kota</label>
                <v-select
                  class="generic-select"
                  v-model="kota"
                  required
                  :options="cities"
                  :reduce="(cities) => cities.text"
                  label="text"
                >
                </v-select>
              </div>
              <!-- end form-floating -->
              <div class="form-floating mb-3 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="alamat"
                  placeholder="alamat"
                  v-model="alamat"
                  required
                />
                <label for="alamat">alamat</label>
              </div>
              <!-- end form-floating -->
              <div class="form-floating mb-3 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="nomor"
                  placeholder="Nomor"
                  v-model="nomor"
                  required
                />
                <label for="nomor">Nomor</label>
              </div>
              <!-- end form-floating -->
              <div class="form-check mb-3 mt-2">
                <input
                  v-model="hq"
                  class="form-check-input"
                  type="checkbox"
                  id="checkbox"
                />
                <label class="form-check-label" for="checkbox"> HQ </label>
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
    <form @submit.prevent="putWilayah(id)">
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
              <!-- {{name}} -->
              <h4 class="modal-title" id="reportModalLabel">edit Wilayah</h4>
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
              <!-- end form-floating -->
              <div class="form-floating mb-3 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="email"
                  v-model="email"
                  required
                />
                <label for="email">email</label>
              </div>
              <!-- end form-floating -->
              <div class="form-group mb-2">
                <label>Kota </label>

                <v-select
                  class="generic-select"
                  v-model="kota"
                  required
                  :options="cities"
                  :reduce="(cities) => cities.text"
                  label="text"
                >
                </v-select>
              </div>
              <!-- {{ kota }} -->

              <!-- end form-floating -->
              <div class="form-floating mb-3 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="alamat"
                  placeholder="alamat"
                  v-model="alamat"
                  required
                />
                <label for="alamat">alamat</label>
              </div>
              <!-- end form-floating -->
              <div class="form-floating mb-3 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="nomor"
                  placeholder="Nomor"
                  v-model="nomor"
                  required
                />
                <label for="nomor">Nomor</label>
              </div>
              <div class="form-floating mb-3 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="pic"
                  placeholder="pic"
                  v-model="pic"
                  required
                />
                <label for="pic">Pic</label>
              </div>
              <div class="form-floating mb-3 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="jabatan"
                  placeholder="jabatan"
                  v-model="jabatan"
                  required
                />
                <label for="jabatan">Jabatan</label>
              </div>
              <!-- end form-floating -->
              <div class="form-check mb-3 mt-2">
                <input
                  v-model="hq"
                  class="form-check-input"
                  type="checkbox"
                  id="checkbox"
                />
                <label class="form-check-label" for="checkbox"> HQ </label>
              </div>
              <!-- end form-floating -->
              <button
                class="btn btn-dark w-100"
                data-bs-dismiss="modal"
                type="submit"
              >
                edit
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
// import { thisTypeAnnotation } from '@babel/types';
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
      records: "",
      wilayah: "",
      cities: [],
      kota: "",
      name: "",
      email: "",
      alamat: "",
      nomor: "",
      jabatan: "",
      pic: "",
      hq: "",
      //   data:""
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
          // alert(id)
          this.deleteWilayah(id);
          Swal.fire("Berhasil Terhapus!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Tidak Tersimpan", "", "info");
        }
      });
    },
    // isChecked(data) {
    //   if (data) {
    //     return (this.hq = true);
    //   } else {
    //     return (this.hq = false);
    //   }
    // },
    resetnama() {
      this.name = null;
      this.email = null;
      this.kota = null;
      this.alamat = null;
      this.nomor = null;
      this.jabatan = null;
      this.pic = null;
      this.HQ = null;
    },
    deleteWilayah(id) {
      axios.delete(process.env.VUE_APP_ROOT_API + "wilayah/" + id).then(
        function () {
          $("#dataWilayah").DataTable().destroy();
          emitter.emit("refreshPage");
        }.bind(this)
      );
    },
    postWilayah() {
      // alert(this.hq);
      axios
        .post(process.env.VUE_APP_ROOT_API + "wilayah", {
          name: this.name,
          email: this.email,
          kota: this.kota,
          alamat: this.alamat,
          nomor: this.nomor,
          jabatan: this.jabatan,
          pic: this.pic,
          HQ: this.hq,
        })
        .then((response) => {
          this.showPost();
          $("#dataWilayah").DataTable().destroy();
          emitter.emit("refreshPage");
          // this.$toast.success("berhasil ditambahkan");
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error("gagal menambahkan wilayah");
          console.log(error);
        });
    },
    putWilayah(id) {
      axios
        .post(process.env.VUE_APP_ROOT_API + "wilayah/" + id, {
          name: this.name,
          email: this.email,
          kota: this.kota,
          alamat: this.alamat,
          nomor: this.nomor,
          jabatan: this.jabatan,
          pic: this.pic,
          HQ: this.hq,
        })
        .then((response) => {
          this.showPost();
          this.getWilayah();
          this.$toast.success("berhasil diupdate");
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error("update gagal");
          console.log(error);
        });
    },
    getCities: function () {
      axios.get(process.env.VUE_APP_ROOT_API + "select/city2").then(
        function (response) {
          this.cities = response.data.map((cities) => ({
            value: cities.id,
            text: cities.name,
          }));
        }.bind(this)
      );
    },
    getWilayah: function () {
      // alert(this.hq);
      axios.get(process.env.VUE_APP_ROOT_API + "wilayah").then(
        function (response) {
          this.wilayah = response.data;
          setTimeout(() => {
            $("#dataWilayah").DataTable();
          }, 800);
        }.bind(this)
      );
    },
    showWilayah(id) {
      axios.get(process.env.VUE_APP_ROOT_API + "wilayah/" + id).then(
        function (response) {
          this.id = response.data.data.id;
          this.name = response.data.data.name;
          this.email = response.data.data.email;
          this.kota = response.data.data.kota;
          this.alamat = response.data.data.alamat;
          this.nomor = response.data.data.nomor;
          this.data = response.data.data.HQ;
          this.hq = response.data.data.HQ === 1 ? true : false;
          // alert(this.data);
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
    this.getWilayah(),
      emitter.on("refreshPage", () => {
        this.getWilayah();
      });
    this.getCities();
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
