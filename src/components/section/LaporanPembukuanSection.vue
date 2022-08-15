<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Laporan Pembukuan</h3>
    </div>
          <!-- {{ laporan.data }} -->
    <!-- end user-panel-title-box -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-s1 justify-content-left mb-3">
        <li class="breadcrumb-item">
          <router-link to="/transaksi">Transaksi</router-link>
        </li>
        <li class="breadcrumb-item">Laporan Pembukuan</li>
      </ol>
    </nav>

    <div class="profile-setting-panel-wrap">
      <div class="table">
        <table class="table mb-0 table-s2" id="dataLaporan">
          <thead class="fs-14">
            <tr>
              <th
                scope="col"
                v-for="(list, i) in SectionData.laporanData.laporanTableHead"
                :key="i"
              >
                {{ list }}
              </th>
            </tr>
          </thead>
          <!-- {{ provinsis }} -->

          <tbody class="fs-13">
            <tr v-for="item in laporan.data" :key="item.id">
              <td>{{ item.khas.tanggal }}</td>
              <td>{{ item.khas.nama }}</td>
              <td>{{ item.khas.keterangan }}</td>
              <td>{{ item.debit }}</td>
              <td>{{ item.kredit }}</td>
              <td>{{ item.saldo_akhir }}</td>
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
      laporan: [],
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
          Swal.fire("Tersimpan!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Tidak Tersimpan", "", "info");
        }
      });
    },
    resetnama() {
      this.name = null;
    },
    getLaporan: function () {
      axios.get("http://127.0.0.1:8000/api/laporan").then(
        function (response) {
          this.laporan = response.data;
          setTimeout(() => {
            $("#dataLaporan").DataTable();
          }, 100);
        }.bind(this)
      );
    },
    getTransaksi: function () {
      axios.get("http://127.0.0.1:8000/api/transaksi/index").then(
        function (response) {
          this.transaksi = response.data;
          // setTimeout(() => {
          // }, 2000);
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
    showProvinsi(id) {
      // alert(id);
      axios.get("http://127.0.0.1:8000/api/provinsi/" + id).then(
        function (response) {
          this.edit = response.data.data.id;
          this.name = response.data.data.name;
        }.bind(this)
      );
    },
    putProvinsis(id) {
      // alert(id);
      axios
        .post("http://127.0.0.1:8000/api/provinsi/" + id, {
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
      this.name = "";
    },
    postProvinsis() {
      axios
        .post("http://127.0.0.1:8000/api/provinsi", {
          name: this.name,
        })
        .then((response) => {
          this.showPost();
          this.getProvinsis();
          console.log(response);
        })
        .catch((error) => {
          alert("provinsi sudah ada");
          console.log(error);
        });
      this.name = "";
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
    this.getLaporan();
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
