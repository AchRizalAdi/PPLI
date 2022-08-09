<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Transaksi</h3>
    </div>
    <!-- end user-panel-title-box -->

    <!-- {{ transaksi }} -->
    <div class="d-flex flex-row">
      <div
        v-if="checkPrivilege('provinsi-store')"
        class="d-grid gap-2 d-md-block"
      >
        <router-link
          to="add-transaksi"
          @click="resetnama()"
          type="button"
          class="btn btn-sm btn-dark mb-2"
        >
          <span class="ni ni-plus m-0 p-0"></span>
        </router-link>
      </div>
      <div
        v-if="checkPrivilege('provinsi-store')"
        class="d-grid ms-1 gap-2 d-md-block"
      >
        <router-link
          to="rekap-bulanan"
          @click="resetnama()"
          type="button"
          class="btn btn-sm btn-dark mb-2"
        >
          Rekap Bulanan
        </router-link>
      </div>
      <div
        v-if="checkPrivilege('provinsi-store')"
        class="d-grid ms-1 gap-2 d-md-block"
      >
        <router-link
          to="laporan-pembukuan"
          @click="resetnama()"
          type="button"
          class="btn btn-sm btn-dark mb-2"
        >
          Laporan Pembukuan
        </router-link>
      </div>
    </div>

    <div class="profile-setting-panel-wrap">
      <div class="table">
        <table class="table mb-0 table-s2" id="dataTable">
          <thead class="fs-14">
            <tr>
              <th
                scope="col"
                v-for="(list, i) in SectionData.transaksiData
                  .transaksiTableHead"
                :key="i"
              >
                {{ list }}
              </th>
            </tr>
          </thead>
          <tbody class="fs-13">
            <tr v-for="item in transaksi.data" :key="item.id">
              <td>{{ item.tanggal }}</td>
              <td>{{ item.khas.nama }}</td>
              <td>{{ item.akun.nama_akun }}</td>
              <td>{{ item.keterangan }}</td>
              <td>{{ item.jumlah }}</td>
              <td>{{ item.jenis_transaksi }}</td>
              <td class="row">
                <router-link
                  v-if="checkPrivilege('kontak-update')"
                  :to="{ name: 'edit-transaksi', params: { id: item.id } }"
                  class="col- p-0 m-0 icon-btn"
                  title="Edit"
                  ><em class="fa fa-pencil-square-o"></em
                ></router-link>
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
      transaksi: [],
      //   edit:'',
      name: "",
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
          this.deleteTransak(id);
          Swal.fire("Berhasil Terhapus!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Tidak Tersimpan", "", "info");
        }
      });
    },
    resetnama() {
      this.name = null;
    },
    getTransaksi: function () {
      axios.get("http://127.0.0.1:8000/api/transaksi/index").then(
        function (response) {
          this.transaksi = response.data;
          setTimeout(() => {
            $("#dataTable").DataTable();
          }, 100);
        }.bind(this)
      );
    },
    deleteProvinsi(id) {
      // alert(id);

      axios.delete("http://127.0.0.1:8000/api/provinsi/" + id).then(
        function () {
          // alert("delete succes");
          this.getProvinsis();
        }.bind(this)
      );
    },
    deleteTransak(id) {
      // alert(id);

      axios.delete("http://127.0.0.1:8000/api/transaksi/" + id).then(
        function () {
          // alert("delete succes");
          this.getTransaksi();
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
    this.getTransaksi();
    emitter.on("refreshPage", () => {
      this.getTransaksi();
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
