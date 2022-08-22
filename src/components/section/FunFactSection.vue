<template>
  <section class="fun-fact-section" :class="{ 'bg-gray': isBg }">
    <div class="container">
      <div class="row g-gs">
        <div class="col-md-4" :class="classname">
          <div class="card card-counter text-center">
            <div class="card-body card-body-s1">
              <img src="@/images/thumb/icon-timeline.svg" alt="" class="mb-3" />
              <h3 class="mb-1">{{ userManajemen.length }}</h3>
              <p>Company</p>
            </div>
            <!-- card-body -->
          </div>
          <!-- card -->
        </div>
        <!-- end col -->
        <div class="col-md-4" :class="classname">
          <div class="card card-counter text-center">
            <div class="card-body card-body-s1">
              <img
                src="@/images/thumb/icon-employees.svg"
                alt=""
                class="mb-3"
              />
              <h3 class="mb-1">{{ userManajemen.length }}</h3>
              <p>Members</p>
            </div>
            <!-- card-body -->
          </div>
          <!-- card -->
        </div>
        <!-- end col -->
        <div class="col-md-4" :class="classname">
          <div class="card card-counter text-center">
            <div class="card-body card-body-s1">
              <img src="@/images/thumb/icon-users.svg" alt="" class="mb-3" />
              <h3 class="mb-1">{{ mitra.length }}</h3>
              <p>Mitra</p>
            </div>
            <!-- card-body -->
          </div>
          <!-- card -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
  <!-- end fun-fact-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import axios from "axios";

export default {
  name: "FunFactSection",
  props: ["isBg", "classname", "items"],
  data() {
    return {
      SectionData,
      userManajemen: [],
      mitra: [],
    };
  },
  methods: {
    getUserManajemen: function () {
      axios.get(process.env.VUE_APP_ROOT_API + "member/index").then(
        function (response) {
          this.userManajemen = response.data.data;
        }.bind(this)
      );
    },
    getMitra: function () {
      axios.get(process.env.VUE_APP_ROOT_API + "mitra").then(
        function (response) {
          this.mitra = response.data;
        }.bind(this)
      );
    },
  },
  created: function () {
    this.getUserManajemen();
    this.getMitra();
  },
};
</script>
