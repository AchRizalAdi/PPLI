<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Jadwal Kegiatan</h3>
    </div>
    <!-- end user-panel-title-box -->

    <!-- {{ kontak }} -->
    <div class="row">
      <div
        class="col d-grid gap-2 d-md-block"
        v-if="checkPrivilege('kegiatan-add')"
      >
        <router-link
          to="/add-kegiatan"
          type="button"
          class="btn btn-dark btn-sm mb-2"
          >Tambah Kegiatan</router-link
        >
        <!-- <button type="button" class="btn btn-primary btn-sm mb-2 ms-2">Card Name</button>     -->
      </div>
      <!-- <div class="col">
                                <router-link to="" type="button" class="btn btn-dark btn-sm">List Daftar Kegiatan</router-link>
                            </div> -->
    </div>
    <!-- {{ kegiatan }} -->
    <div class="profile-setting-panel-wrap">
      <div class="table-responsive">
        <table class="table mb-0 table-s2" id="dataKegiatan">
          <thead class="fs-14">
            <tr>
              <th
                scope="col"
                v-for="(list, i) in SectionData.kegiatanData.kegiatanTableHead"
                :key="i"
              >
                {{ list }}
              </th>
            </tr>
          </thead>
          <tbody class="fs-13">
            <tr v-for="(item, index) in kegiatan" :key="item.id">
              <td scope="row">
                <a href="#">{{ index + 1 }}</a>
              </td>
              <td>{{ item.nama_kegiatan }}</td>
              <td>{{ item.sifat_kegiatan }}</td>
              <td>{{ item.lokasi_kegiatan }}</td>
              <td>{{ item.tanggal_rencana }}</td>
              <td>{{ item.tanggal_realisasi }}</td>
              <td v-html="item.keterangan"></td>
              <td class="row">
                <!-- <router-link :to="{name: 'show-contact', params: { id: item.id }}" class="col- icon-btn  p-0 m-0" title="Show"><em class="fa fa-eye" ></em></router-link> -->
                <!-- <button  @click="showCities(item.id)" class="col-sm-1 icon-btn " title="Show" data-bs-toggle="modal"  data-bs-target="#editModal"><em class="fa fa-eye" ></em></button> -->
                <router-link
                v-if="checkPrivilege('kegiatan-edit')"
                  :to="{ name: 'edit-kegiatan', params: { id: item.id } }"
                  class="col- p-0 m-0 icon-btn"
                  title="Edit"
                  ><em class="fa fa-pencil-square-o"></em
                ></router-link>
                <button
                v-if="checkPrivilege('kegiatan-delete')"
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
      kegiatan: [],
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
          this.deleteKegiatan(id);
          Swal.fire("Berhasil Terhapus!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Tidak Tersimpan", "", "info");
        }
      });
    },
    resetnama() {
      this.name = null;
    },
    getKegiatan() {
      axios.get(process.env.VUE_APP_ROOT_API+"kegiatan").then(
        function (response) {
          this.kegiatan = response.data;
          setTimeout(() => {
            $("#dataKegiatan").DataTable();
          }, 100);
        }.bind(this)
      );
    },
    deleteKegiatan(id) {
        axios.delete(process.env.VUE_APP_ROOT_API+"kegiatan/" + id).then(
          function () {
            $("#dataKegiatan").DataTable().destroy();
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
    this.getKegiatan();
    emitter.on("refreshPage", () => {
      this.getKegiatan();
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
