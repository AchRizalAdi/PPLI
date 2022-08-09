<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Rekap Bulanan</h3>
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-s1 justify-content-left mb-3">
        <li class="breadcrumb-item">
          <router-link to="/transaksi">Transaksi</router-link>
        </li>
        <li class="breadcrumb-item">Rekap Bulanan</li>
      </ol>
    </nav>
    <!-- end user-panel-title-box -->
    <h6>Tahun</h6>
    <form class="d-flex mb-3 mt-1" @submit.prevent="postTahun()">
      <select class="form-control me-2 w-25" v-model="tahun" required>
        <option v-for="item in tahuns" :value="item" :key="item">
          {{ item }}
        </option>
      </select>
      <button class="btn btn-sm btn-dark" type="submit">Filter</button>
    </form>
    <!-- {{rekap}} -->
    <div class="profile-setting-panel-wrap">
      <div class="table">
        <table class="table mb-0 table-s2" id="dataTable">
          <thead class="fs-14">
            <tr>
              <th
                scope="col"
                v-for="(list, i) in SectionData.rekapData.rekapTableHead"
                :key="i"
              >
                {{ list }}
              </th>
            </tr>
          </thead>
          <tbody class="fs-13">
            <tr v-for="item in rekap.data" :key="item">
              <td>{{ item.bulan }}</td>
              <td>{{ item.debit }}</td>
              <td>{{ item.kredit }}</td>
              <!-- <td class="row">
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
              </td> -->
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
      tahuns: [],
      tahun: "",
      rekap: [],
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
          this.deleteTransak(id);
          Swal.fire("Berhasil Terhapus!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Tidak Tersimpan", "", "info");
        }
      });
    },
    getTahun: function () {
      axios.get("http://127.0.0.1:8000/api/transaksi/selectOption/tahun").then(
        function (response) {
          this.tahuns = response.data;
        }.bind(this)
      );
    },
    postTahun() {
      axios
        .post("http://127.0.0.1:8000/api/rekap/transaksi", {
          tahun: this.tahuns,
        })
        .then((response) => {
          // console.log(response)
          this.rekap = response.data;
          setTimeout(() => {
            $("#dataTable").DataTable();
          }, 300);
          $("#dataTable").DataTable().destroy();
          emitter.emit("refreshPage");
        })
        .catch((error) => {
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
    // this.getTransaksi();
    this.getTahun();

    emitter.on("refreshPage", () => {});
    // this.postTahun();
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
