<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Member</h3>
    </div>

    <!-- end user-panel-title-box -->

    <!-- {{ provinsi }} -->
    <!-- v-if="checkPrivilege('dpw-store')" -->
    <!-- <div
      class="d-grid gap-2 d-md-block"
    >
      <button
        @click="resetnama()"
        type="button"
        class="btn btn-primary btn-sm mb-2"
        data-bs-toggle="modal"
        data-bs-target="#messageModal"
      >
      Tambah DPW
      </button>
    </div> -->
    <!-- {{ memberss }} -->
    <!-- {{wilayahss}} -->
    <!-- {{ membersss }} -->
    <h6 class>Filter DPD</h6>
    <form class="d-flex mb-3 mt-1" @submit.prevent="postWilayah()">
      <select class="form-control me-2 w-25" v-model="wilayah" required>
        <option value="0">All</option>
        <option v-for="item in wilayahss" :value="item.id" :key="item.id">
          {{ item.name }}
        </option>
      </select>
      <button class="btn btn-sm btn-dark" type="submit">Filter</button>
    </form>
    <div class="profile-setting-panel-wrap">
      <div class="table">
        <table class="table mb-0 table-s2" id="dataTable">
          <thead class="fs-14">
            <tr>
              <th
                scope="col"
                v-for="(list, i) in SectionData.UserMemberData
                  .UserMemberTableHead"
                :key="i"
              >
                {{ list }}
              </th>
            </tr>
          </thead>
          <tbody class="fs-13">
            <tr v-for="(item, index) in membersss" :key="item.id">
              <td scope="row">
                <a href="#">{{ index + 1 }}</a>
              </td>
              <td>{{ item.name }}</td>
              <td>{{ item.wilayah }}</td>
              <td>{{ item.PhoneNumber }}</td>
              <td>{{ item.email }}</td>
              <td>
                <router-link
                  v-if="checkPrivilege('member-show')"
                  v-show="item.cekWilayah"
                  :to="{ name: 'show-member', params: { id: item.id } }"
                  class="col- p-0 m-0 icon-btn btn-sm"
                  title="Show"
                  ><em class="fa fa-eye"></em
                ></router-link>
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
      memberss: [],
      membersss: [],
      wilayahss: [],
      wilayah: [],
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
    getWilayah: function () {
      axios.get(process.env.VUE_APP_ROOT_API+"select/wilayah").then(
        function (response) {
          this.wilayahss = response.data;
        }.bind(this)
      );
    },
    postWilayah() {
      axios
        .post(process.env.VUE_APP_ROOT_API+"member/wlayah/show", {
          wilayah: this.wilayah,
        })
        .then((response) => {
          this.membersss = response.data.data;
          setTimeout(() => {
            $("#dataTable").DataTable();
          }, 300);
          $("#dataTable").DataTable().destroy();
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
    this.getWilayah();

    emitter.on("refreshPage", () => {});
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
