<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Iuran</h3>
    </div>
    <div class="d-flex">
      <h6 class="me-2">Tahun</h6>
      <form class="d-flex" @submit.prevent="postIuran()">
        <v-select
          v-model="tahun"
          :options="tahuns"
          :reduce="(tahuns) => tahuns.value"
          label="text"
        />
      <h6 class="ms-3 me-2">Bulan</h6>
        <v-select
          v-model="bulan"
          :options="bulans"
          :reduce="(bulans) => bulans.value"
          label="text"
        />
        <button class="btn btn-sm btn-dark ms-2" type="submit">Cari</button>
      </form>
    </div>
    <!-- end user-panel-title-box -->
    <!-- {{ bulan }} -->
  <!-- {{memberss}} -->
    <div class="profile-setting-panel-wrap">
      <div class="table">
        <table class="table mb-0 table-s2" id="dataMembers">
          <thead class="fs-14">
            <tr>
              <th
                scope="col"
                v-for="(list, i) in SectionData.iuranData
                  .iuranTableHead"
                :key="i"
              >
                {{ list }}
              </th>
            </tr>
          </thead>
          <tbody class="fs-13">
            <tr v-for="item in memberss" :key="item.id">
              <td>{{ item.member.name }}</td>
              <td>{{ item.jumlah }}</td>
              <td>{{ item.status }}</td>
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

import mitt from "mitt";
const emitter = mitt();
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
      memberss: [],
      tahuns: [],
      bulans: [],
      tahun: "",
      bulan: ""
    };
  },

  methods: {
    getTahun: function () {
      axios.get(process.env.VUE_APP_ROOT_API+"iuran/selectOption").then(
        function (response) {
          this.tahuns = response.data.map((tahuns) => ({
            value: tahuns,
            text: tahuns,
          }));
        }.bind(this)
      );
    },
    getBulan: function () {
      axios.get(process.env.VUE_APP_ROOT_API+"iuran/selectOptionBulan").then(
        function (response) {
          this.bulans = response.data.map((bulans) => ({
            value: bulans,
            text: bulans,
          }));
        }.bind(this)
      );
    },
    postIuran() {
      axios
        .post(process.env.VUE_APP_ROOT_API+"iuran/index", {
          tahun: this.tahun,
          bulan: this.bulan,
        })
        .then((response) => {
          this.memberss = response.data;
          setTimeout(() => {
            $("#dataMembers").DataTable();
          }, 300);
          $("#dataMembers").DataTable().destroy();
          emitter.emit("refreshPage");
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
    this.getTahun();
    this.getBulan();
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
