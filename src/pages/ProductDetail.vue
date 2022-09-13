<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
      <!-- Header main -->
      <HeaderMain></HeaderMain>
    </header>
    <section class="item-detail-section section-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 pe-xl-5">
            <div class="item-detail-content">
              <div class="item-detail-img-container mb-4">
                <img
                  src="@/images/ppli.png"
                  alt=""
                  class="w-100 h-100 rounded-3"
                />
                <h5 class="mt-3">
                  <em class="fa-solid fa-location-dot"></em> Alamat Kantor
                </h5>
                <p class="mb-3">
                  JL KALI WARON GANG 11 NO 5 SELATAN UJUNG JAWA <br />
                  {{ kota }}, {{ wilayah }}
                </p>
                <h5><em class="icon fa-solid fa-phone mb-1"></em> Telephone</h5>
                {{ noHp }}
                <h5>
                  <em class="icon fa-solid fa-envelope mt-3 mb-1"></em> Email
                </h5>
                <p>achmadrizaladiwayudisss2992@gmail.com</p>
              </div>
              <!-- end item-detail-img-container -->
            </div>
            <!-- end item-detail-content -->
          </div>
          <!-- end col -->
          <div class="col-lg-7">
            <div class="item-detail-content mt-4 mt-lg-0">
              <h1 class="item-detail-title mb-2">{{ title }}</h1>
              <h5 class="mb-2">
                Didirikan Tahun <em> {{ berdiri }}</em>
              </h5>
              <p class="item-detail-text mb-4">{{ content }}</p>
              <!-- <div class="mt-4" id="mapContainer"></div> -->
            </div>
            <!-- end item-detail-content -->
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- .container -->
    </section>
    <!-- end item-detail-section -->
    <!-- Related product -->
    <!-- <RelatedProduct></RelatedProduct> -->

    <!-- Footer  -->
    <Footer classname="bg-dark on-dark"></Footer>
  </div>
  <!-- end page-wrap -->
</template>

<style scoped>
/* #mapContainer {
  width: auto;
  height: 50vh;
} */
p{
  /* font-size: 10px; */
}
.container .icon {
  font-size: 15px;
}
</style>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
import HeaderMain from "../components/common/HeaderMain.vue";

export default {
    name: "ProductDetail",
    data() {
        return {
            SectionData,
            // location: [-7.332884976404556, 112.77579898203327],
            id: this.$route.params.id,
            title: "",
            imgLg: "",
            metaText: "",
            metaTextTwo: "",
            metaTextThree: "",
            content: "",
            kantorUtama: "",
            kota: "",
            wilayah: "",
            berdiri: "",
            noHp: "",
            email: "",
            website: "",
            jamKerja: "",
            hariKerja: "",
        };
    },
    mounted() {
        // this.generateMap();
        SectionData.productData.products.forEach((element) => {
            if (this.id == element.id) {
                this.imgLg = element.imgLg;
                this.title = element.title;
                this.metaText = element.metaText;
                this.metaTextTwo = element.metaTextTwo;
                this.metaTextThree = element.metaTextThree;
                this.content = element.content;
                this.kantorUtama = element.kantorUtama;
                this.kota = element.kota;
                this.wilayah = element.wilayah;
                this.berdiri = element.berdiri;
                this.noHp = element.noHp;
                this.email = element.email;
                this.website = element.website;
                this.jamKerja = element.jamKerja;
                this.hariKerja = element.hariKerja;
            }
        });
    },
    methods: {
        // generateMap() {
        //     this.map = L.map("mapContainer").setView([-7.2708569217015, 112.55045671345], 6);
        //     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        //         attribution: "© <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
        //     }).addTo(this.map);
        //     this.map.on("click", (e) => {
        //         console.log(e);
        //         // // this.getMaps({
        //         // this.latitude = e.latlng.lat;
        //         // this.longitude = e.latlng.lng;
        //         // // });
        //         // if (typeof this.pin == "object") {
        //         //     this.pin.setLatLng(e.latlng);
        //         // }
        //         // else {
        //         //     this.pin = L.marker([e.latlng.lat, e.latlng.lng], this.markerIcon).addTo(this.map);
        //         // }
        //     });
        // },
    },
    components: { HeaderMain }
};
</script>
