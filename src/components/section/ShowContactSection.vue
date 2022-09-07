<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Detail Kontak</h3>
    </div>
    <!-- end user-panel-title-box -->
    <!-- {{ latitudes }} -->

    <!-- {{ longitudes }} -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-s1 justify-content-left mb-3">
        <li class="breadcrumb-item">
          <router-link to="/transactions">Kontak</router-link>
        </li>
        <li class="breadcrumb-item">Detail Kontak</li>
      </ol>
    </nav>
    <div class="container">
      <div class="d-flex">
        <div class="me-6">
          <div><strong class="me-2">Nama :</strong>{{ kontaks.nama }}</div>
          <div><strong class="me-2">Alamat :</strong>{{ kontaks.alamat }}</div>
          <div><strong class="me-2">Email :</strong>{{ kontaks.email }}</div>
          <div><strong class="me-2">Nomor :</strong>{{ kontaks.nomor }}</div>
          <div><strong class="me-2">Status :</strong>{{ kontaks.status }}</div>
          <div><strong class="me-2">Agama :</strong>{{ kontaks.agama }}</div>
          <div>
            <strong class="me-2">Tanggal Lahir :</strong
            >{{ kontaks.tanggal_lahir }}
          </div>
          <br />
          <div>
            <strong class="me-2">Nomor KTP :</strong>{{ kontaks.no_ktp }}
          </div>
          <div><strong class="me-2">NPWP :</strong>{{ kontaks.npwp }}</div>
        </div>
        <div class="ms-5">
          <h6 class="text-center">Foto Profil</h6>
          <div>
            <img
              :src="path + gambar"
              width="200"
              class="img-responsive circle"
            />
          </div>
          <div class="justify-content-center">
            <button
              
              type="button"
              class="btn btn-sm btn-dark me-2 mt-3 mb-2 text-center"
              data-bs-toggle="modal"
              data-bs-target="#messageModal"
            >
              Ubah Foto Profil
            </button>
          </div>
        </div>
        <div class="ms-5">
          <h6 class="text-center">Foto Perusahaan</h6>
          <div>
            <img :src="path + logo" width="200" class="img-responsive circle" />
          </div>
          <div>
            <button
              type="button"
              class="btn btn-sm btn-dark me-2 mt-3 mb-2 text-center"
              data-bs-toggle="modal"
              data-bs-target="#logoModel"
            >
              Ubah Foto Perusahaan
            </button>
          </div>
        </div>
      </div>
      <form @submit.prevent="postMap()">
        <div class="mt-4" id="mapContainer"></div>
        <div>
          <button  type="submit" class="btn btn-sm btn-dark me-2 mt-3 mb-2">
            Ubah Lokasi Perusahaan
          </button>
        </div>
      </form>
    </div>
  </div>
  <form @submit.prevent="postProfil()" enctype="multipart/form-data">
    <div
      class="modal fade"
      id="messageModal"
      tabindex="-1"
      aria-labelledby="reportModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="reportModalLabel">Upload Gambar</h4>
            <button
              type="button"
              class="btn-close icon-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <em class="ni ni-cross"></em>
            </button>
          </div>
          <div class="modal-body">
            <img :src="previewimg" v-if="previewimg" class="mb-2" width="200" />
            <div class="form-floating mb-3">
              <input type="file" class="ms-6" @change="editGambar($event)" />
            </div>

            <button
              class="btn btn-dark w-100"
              data-bs-dismiss="modal"
              type="submit"
            >
              Submit
            </button>
          </div>
          <!-- end modal-body -->
        </div>
        <!-- end modal-content -->
      </div>
      <!-- end modal-dialog -->
    </div>
    <!-- end modal-->
  </form>
  <form @submit.prevent="postLogo()" enctype="multipart/form-data">
    <div
      class="modal fade"
      id="logoModel"
      tabindex="-1"
      aria-labelledby="reportModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="reportModalLabel">Upload Gambar</h4>
            <button
              type="button"
              class="btn-close icon-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <em class="ni ni-cross"></em>
            </button>
          </div>
          <div class="modal-body">
            <img :src="previewimg" v-if="previewimg" class="mb-2" width="200" />
            <div class="form-floating mb-3">
              <input type="file" class="ms-6" @change="editGambar($event)" />
            </div>

            <button
              class="btn btn-dark w-100"
              data-bs-dismiss="modal"
              type="submit"
            >
              Submit
            </button>
          </div>
          <!-- end modal-body -->
        </div>
        <!-- end modal-content -->
      </div>
      <!-- end modal-dialog -->
    </div>
    <!-- end modal-->
  </form>
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Swal from "sweetalert2";
// import $ from "jquery";
// import { reactive } from 'vue';
// import { onMounted, ref } from 'vue';

export default {
  data() {
    return {
      map: null,
      maps: [],
      location: [-7.332884976404556, 112.77579898203327],
      SectionData,
      page: 1,
      i: 1,
      perPage: 6,
      records: [],
      kontaks: [],
      gambar: "",
      logo: "",
      latitude: "",
      longitude: "",
      latitudes: "",
      longitudes: "",
      pin: "",
      markerIcon: {
        icon: L.icon({
          iconSize: [25, 41],
          iconAnchor: [10, 41],
          popupAnchor: [2, -40],
          // specify the path here
          iconUrl:
            "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
          shadowUrl:
            "https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png",
        }),
      },
    };
  },
  created() {
    axios
      .get(process.env.VUE_APP_ROOT_API + `kontak/${this.$route.params.id}`)
      .then((res) => {
        this.kontaks = res.data.data;
      });
    this.getProfil();
    this.getLogo();
    this.getMaps();
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
    generateMap() {
      this.map = L.map("mapContainer").setView(
        [-7.2708569217015, 112.55045671345],
        6
      );
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);
      this.map.on("click", (e) => {
        console.log(e);
        // this.getMaps({
        this.latitude = e.latlng.lat;
        this.longitude = e.latlng.lng;
        // });
        if (typeof this.pin == "object") {
          this.pin.setLatLng(e.latlng);
        } else {
          this.pin = L.marker(
            [e.latlng.lat, e.latlng.lng],
            this.markerIcon
          ).addTo(this.map);
        }
      });
    },
    postProfil() {
      let formData = new FormData();

      formData.append("gambar", this.gambar);
      axios
        .post(
          process.env.VUE_APP_ROOT_API +
            `kontak/gambar/${this.$route.params.id}`,
          formData
        )
        .then((res) => {
          this.getProfil();
          this.getLogo();
          this.$toast.success("gambar berhasil di update");
          console.log(res);
        });
    },
    postLogo() {
      let formData = new FormData();

      formData.append("logo", this.logo);
      axios
        .post(
          process.env.VUE_APP_ROOT_API +
            `kontak/gambarlogo/${this.$route.params.id}`,
          formData
        )
        .then((res) => {
          this.getProfil();
          this.getLogo();
          this.$toast.success("gambar berhasil di update");
          console.log(res);
        });
    },
    getProfil() {
      axios
        .get(
          process.env.VUE_APP_ROOT_API +
            `kontak/getgambar/${this.$route.params.id}`
        )
        .then((res) => {
          this.gambar = res.data;
          this.path = "https://api.direktori.ppliofficial.com";
          console.log(res);
        });
    },
    getLogo() {
      axios
        .get(
          process.env.VUE_APP_ROOT_API +
            `kontak/getgambarlogo/${this.$route.params.id}`
        )
        .then((res) => {
          this.logo = res.data;
          this.path = "https://api.direktori.ppliofficial.com";
          console.log(res);
        });
    },
    editGambar(e) {
      this.gambar = e.target.files[0];
      this.logo = e.target.files[0];
      this.previewimg = URL.createObjectURL(e.target.files[0]);
    },
    updateKontaks() {
      axios
        .post(
          process.env.VUE_APP_ROOT_API + `kontak/${this.$route.params.id}`,
          this.kontaks
        )
        .then((res) => {
          this.$router.push({ name: "transactions" });
          this.$toast.success("Kontak berhasil di update");
          console.log(res);
        });
    },
    postMap() {
      axios
        .post(
          process.env.VUE_APP_ROOT_API + `kontak/map/${this.$route.params.id}`,
          {
            latitude: this.latitude,
            longitude: this.longitude,
          }
        )
        .then((response) => {
          this.showPost();
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error("provinsi sudah ada");
          console.log(error);
        });
    },
    getMaps() {
      axios
        .get(
          process.env.VUE_APP_ROOT_API +
            `kontak/getmap/${this.$route.params.id}`
        )
        .then((res) => {
          this.maps = res.data;
          this.latitudes = res.data.latitude;
          this.longitudes = res.data.longitude;
          this.map.flyTo([res.data.latitude, res.data.longitude], 14);
          this.pin = L.marker(
            [res.data.latitude, res.data.longitude],
            this.markerIcon
          ).addTo(this.map);
          // console.log(this.latitude);
        });
    },
  },
  computed: {
    displayedRecords() {
      const startIndex = this.perPage * (this.page - 1);
      const endIndex = startIndex + this.perPage;
      return this.records.slice(startIndex, endIndex);
    },
  },
  mounted() {
    this.generateMap();

    // this.map = L.map("mapContainer").setView(this.location, 5);
    // L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    //   maxZoom: 17,
    // }).addTo(this.map);

    // this.map.on("click", (e) => {
    //   this.form.patchValue({
    //     latitude: e.latlng.lat,
    //     longitude: e.latlng.lng,
    //   });
    //   if (typeof this.pin == "object") {
    //     this.pin.setLatLng(e.latlng);
    //   } else {
    //     this.pin = L.marker(
    //       [e.latlng.lat, e.latlng.lng],
    //       this.markerIcon
    //     ).addTo(this.map);
    //   }
    // });

    /*  ======== Show/Hide passoword ======== */
    function showHidePassword(selector) {
      let elem = document.querySelectorAll(selector);
      if (elem.length > 0) {
        elem.forEach((item) => {
          item.addEventListener("click", function (e) {
            e.preventDefault();
            let target = document.getElementById(item.getAttribute("href"));
            if (target.type == "password") {
              target.type = "text";
              item.classList.add("is-shown");
            } else {
              target.type = "password";
              item.classList.remove("is-shown");
            }
          });
        });
      }
    }

    showHidePassword(".password-toggle");
  },
  onBeforeUnmount() {
    if (this.map) {
      this.map.remove();
    }
  },
};
</script>
<style scoped>
#mapContainer {
  margin-top: 10px;
  width: 50vw;
  height: 50vh;
}
.circle {
  border: 2px solid rgb(0, 0, 0);
  width: 200px;
  height: 200px;
  border-radius: 100%;
}
</style>
