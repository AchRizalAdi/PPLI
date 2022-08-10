<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Home</h3>
    </div>
    <!-- end user-panel-title-box -->
    <!-- {{ userManajemen.length }} -->
    <div class="profile-setting-panel-wrap">
      <div class="table">
        <div class="row p-0 m-0">
          <div class="col-lg-3 col-6">
            <span class="card card-cat text-center h-100 text-green">
              <div class="card-body card-body-s1">
                <span
                  class="icon fa fa-user-circle mb-3 mx-auto icon-circle icon-wbg icon-lg"
                ></span>
                <h5 class="card-cat-title">Member</h5>
                <p class="card-cat-title">
                  {{ userManajemen.length }}
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
    };
  },

  methods: {
    getUserManajemen: function () {
      axios.get("http://127.0.0.1:8000/api/member/index").then(
        function (response) {
          this.userManajemen = response.data.data;
        }.bind(this)
      );
    },
  },
  created: function () {
    this.getUserManajemen();
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
