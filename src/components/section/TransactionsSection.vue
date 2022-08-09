<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Kontaks</h3>
    </div>
    <!-- end user-panel-title-box -->

    <!-- {{ kontak }} -->
    <div v-if="checkPrivilege('kontak-store')" class="d-grid gap-2 d-md-block">
      <router-link
        to="/add-contact"
        type="button"
        class="btn btn-dark btn-sm mb-2"
        >Tambah Kontak</router-link
      >
      <router-link
        to="/virtual-card"
        type="button"
        class="btn btn-dark btn-sm mb-2 ms-2"
        >Kartu Nama</router-link
      >
      <!-- <button type="button" class="btn btn-primary btn-sm mb-2 ms-2">Card Name</button>     -->
    </div>
    <div class="profile-setting-panel-wrap">
      <div class="table">
        <table class="table mb-0 table-s2" id="dataKontak">
          <thead class="fs-14">
            <tr>
              <th
                scope="col"
                v-for="(list, i) in SectionData.contactsData.contactsTableHead"
                :key="i"
              >
                {{ list }}
              </th>
            </tr>
          </thead>
          <tbody class="fs-13">
            <tr v-for="(item, index) in kontak.data" :key="item.id">
              <td scope="row">
                <a href="#">{{ index + 1 }}</a>
              </td>
              <td>{{ item.nama }}</td>
              <td>{{ item.alamat }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.nomor }}</td>
              <td>{{ item.status }}</td>
              <td class="row">
                <router-link
                  v-if="checkPrivilege('kontak-show')"
                  :to="{ name: 'show-contact', params: { id: item.id } }"
                  class="col- icon-btn p-0 m-0"
                  title="Show"
                  ><em class="fa fa-eye"></em
                ></router-link>
                <!-- <button  @click="showCities(item.id)" class="col-sm-1 icon-btn " title="Show" data-bs-toggle="modal"  data-bs-target="#editModal"><em class="fa fa-eye" ></em></button> -->
                <router-link
                  v-if="checkPrivilege('kontak-update')"
                  :to="{ name: 'edit-contact', params: { id: item.id } }"
                  class="col- p-0 m-0 icon-btn"
                  title="Edit"
                  ><em class="fa fa-pencil-square-o"></em
                ></router-link>
                <button
                  v-if="checkPrivilege('kontak-delete')"
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
      kontak: [],
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
          this.deleteKontak(id);
          Swal.fire("Berhasil Terhapus!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Tidak Tersimpan", "", "info");
        }
      });
    },
    resetnama() {
      this.name = null;
    },
    getKontak() {
      axios.get("http://127.0.0.1:8000/api/kontak").then(
        function (response) {
          this.kontak = response.data;
          setTimeout(() => {
            $("#dataKontak").DataTable();
          }, 100);
        }.bind(this)
      );
    },
    deleteKontak(id) {
      axios.delete("http://127.0.0.1:8000/api/kontak/" + id).then(
        function () {
          $("#dataKontak").DataTable().destroy();
          emitter.emit("refreshPage");
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
    this.getKontak();
    emitter.on("refreshPage", () => {
      this.getKontak();
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
