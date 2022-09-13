<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Home</h3>
    </div>
    <div class="profile-setting-panel-wrap">
      <div class="table">
        <div class="row p-0 m-0">
          <div class="col-lg-3 col-6">
            <span class="card card-cat text-center h-100 text-green bg-green">
              <div class="card-body card-body-s1">
                <span
                  class="icon fa fa-user-circle mb-3 mx-auto icon-circle icon-wbg icon-lg"
                ></span>
                <h5 class="card-cat-title text-white">Member</h5>
                <p class="card-cat-title text-white">
                  {{ userManajemen.length }}
                </p>
              </div>
            </span>
          </div>
          <div class="col-lg-3 col-6">
            <span class="card card-cat text-center h-100 text-cyan bg-cyan">
              <div class="card-body card-body-s1 ">
                <span
                  class="icon fa fa-handshake-o mb-3 mx-auto icon-circle icon-wbg icon-lg "
                ></span>
                <h5 class="card-cat-title text-white">Mitra</h5>
                <p class="card-cat-title text-white">
                  {{ mitra.length }}
                </p>
              </div>
            </span>
          </div>
          <div class="col-lg-5 col-6">
            <span class="card card-cat text-center h-100 text-indigo bg-indigo">
              <div class="card-body card-body-s1">
                <span
                  class="icon fa-solid fa-money-check-dollar mb-3 mx-auto icon-circle icon-wbg icon-lg"
                ></span>
                <h5 class="card-cat-title text-white">Iuran</h5>
                <p class="card-cat-title text-white">
                  Rp. {{ mitra.length }}
                </p>
              </div>
            </span>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
        <div class="row p-0 m-0 mt-4">
          <div class="col-lg-5 col-6">
            <span class="card card-cat text-center h-100 text-orange bg-orange">
              <div class="card-body card-body-s1">
                <span
                  class="icon fa-solid fa-building mb-3 mx-auto icon-circle icon-wbg icon-lg"
                ></span>
                <h5 class="card-cat-title text-white">Perusahaan</h5>
                <p class="card-cat-title text-white">
                  {{ mitra.length }}
                </p>
              </div>
            </span>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end table-responsive -->
    </div>
    <!-- end profile-setting-panel-wrap-->
  </div>
  <!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import axios from "axios";

export default {
  data() {
    return {
      name: "OfferSection",
      SectionData,
      page: 1,
      perPage: 6,
      records: [],
      userManajemen: [],
      mitra: [],
    };
  },

  methods: {
    getUserManajemen: function () {
      axios.get(process.env.VUE_APP_ROOT_API+"member/index").then(
        function (response) {
          this.userManajemen = response.data.data;
        }.bind(this)
      );
    },
    getMitra: function () {
      axios.get(process.env.VUE_APP_ROOT_API+"mitra").then(
        function (response) {
          this.mitra = response.data.data;
        }.bind(this)
      );
    },
  },
  created: function () {
    this.getUserManajemen();
    this.getMitra();
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
//
<!-- <select v-model="status" id="statusss" class='form-control w-100' @change="postStatus(item.id, $event)" >
//                                                 <option :value="null" disabled>Mail Verified</option>
//                                                 <option value="Approved by DPP">Approved by DPP</option>
//                                                 <option value="Approved by DPW">Approved by DPW</option>
//                                                 <option value="Rejected by DPP">Rejected by DPP</option>
//                                                 <option value="Rejected by DPW">Rejected by DPW</option>
//                                             </select> -->

//
<!-- <td><button class="icon-btn ms-auto" title="Accept" for="status" ><em class="ni ni-check"></em></button></td> -->
