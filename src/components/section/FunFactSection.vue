<template>
  <section class="fun-fact-section" :class="{ 'bg-gray': isBg }">
    <div class="container">
      <div class="row g-gs">
        <div class="col-md-4" :class="classname">
          <div class="card card-counter text-center">
            <div class="card-body card-body-s1">
              <i class="fa-regular fa-building"></i>
              <h3 class="mb-1">{{ userManajemen.length }}</h3>
              <p>Perusahaan</p>
            </div>
            <!-- card-body -->
          </div>
          <!-- card -->
        </div>
        <!-- end col -->
        <div class="col-md-4" :class="classname">
          <div class="card card-counter text-center">
            <div class="card-body card-body-s1">
              <i class="fa-solid fa-person"></i>
              <h3 class="mb-1">{{ userManajemen.length }}</h3>
              <p>Anggota</p>
            </div>
            <!-- card-body -->
          </div>
          <!-- card -->
        </div>
        <!-- end col -->
        <div class="col-md-4" :class="classname">
          <div class="card card-counter text-center">
            <div class="card-body card-body-s1">
              <i class="fa-regular fa-handshake"></i>
              <h3 class="mb-1">{{ mitra.length }}</h3>
              <p>Kemitraan</p>
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
          this.mitra = response.data.data;
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

<style>
.container i{
  font-size: 50px;
  margin-bottom: 20px;
}
</style>
