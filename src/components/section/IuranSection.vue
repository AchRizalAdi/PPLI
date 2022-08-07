<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Iuran</h3>
    </div>
    <!-- end user-panel-title-box -->

    <!-- {{ transaksi }} -->
    <div class="row">
      <div class="col">
        <h6 class>Tahun</h6>
        <form class="d-flex" @submit.prevent="postWilayah()">
          <select class="form-control me-2 w-50" v-model="wilayah">
            <option value="0">All</option>
            <option v-for="item in wilayahss" :value="item.id" :key="item.id">
              {{ item.name }}
            </option>
          </select>
          <button class="btn btn-sm btn-dark" type="submit">Filter</button>
        </form>
      </div>
      <div class="col">
        <h6 class>Bulan</h6>
        <form class="d-flex" @submit.prevent="postWilayah()">
          <select class="form-control me-2 w-50" v-model="wilayah">
            <option value="0">All</option>
            <option v-for="item in wilayahss" :value="item.id" :key="item.id">
              {{ item.name }}
            </option>
          </select>
          <button class="btn btn-sm btn-dark" type="submit">Filter</button>
        </form>
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
          <!-- <tbody class="fs-13">
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
          </tbody> -->
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
// import axios from "axios";
// import $ from "jquery";
// import Swal from "sweetalert2";
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
  },
  created: function () {
    // this.getProvinsis();
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
