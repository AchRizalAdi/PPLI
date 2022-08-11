<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Detail Member</h3>
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-s1 justify-content-left mb-3">
        <li class="breadcrumb-item">
          <router-link to="/member">Member</router-link>
        </li>
        <li class="breadcrumb-item">Detail Member</li>
      </ol>
    </nav>
    <!-- end user-panel-title-box -->
    <!-- {{ gambar }} -->

    <div class="profile-setting-panel-wrap">
      <div class="tab-content mt-3" id="myTabContent">
        <div
          class="tab-pane fade show active col-sm"
          id="account-information"
          role="tabpanel"
          aria-labelledby="account-information-tab"
        >
          <div class="profile-setting-panel">
            <!-- <h5 class="mb-4">Edit Profile</h5> -->
            <div class="d-flex">
              <div class="img-thumbnail">
                <img :src="path + gambar" width="200" />
              </div>
              <!-- <input
                class="upload-image"
                data-target="image-result"
                id="upload-image-file"
                type="file"
                hidden
              /> -->
              <div class="row">
                <h3 class="ms-3">
                  {{ register.BentukBadanUsaha }}. {{ register.NamaPerushaan }}
                </h3>
                <em class="col-sm icon ni ni-map-pin ms-3"
                  ><span class="ms-2"
                    >{{ register.alamat }} {{ cities.name }},
                    {{ prov.name }}</span
                  ></em
                >
                <em class="icon ni ni-call ms-3"
                  ><span class="ms-2">{{ register.PhoneNumber }}</span></em
                >
                <em class="icon ni ni-mail ms-3"
                  ><span class="ms-2">{{ register.email }}</span></em
                >
              </div>
              <!-- <label for="upload-image-file" class="upload-image-label btn"
                >Update Photo</label
              > -->
            </div>
            <!-- Batas Bawah -->
            <span class="ms-2 mt-3">
              <strong>Nama Anggota</strong>
              {{ register.name }}
            </span>
            <br />
            <span class="ms-2 mt-1">
              <strong>Anggota</strong> {{ register.status }}
            </span>
            <br />
            <router-link
              :to="{ name: 'edit-member', params: register.id }"
              class="btn btn-sm btn-dark mt-3 mb-2"
              title="Edit"
              >Edit Data</router-link
            >
            <div class="d-grid gap-2 d-md-block">
              <button
                @click="resetnama()"
                type="button"
                class="btn btn-dark btn-sm mb-2"
                data-bs-toggle="modal"
                data-bs-target="#messageModal"
              >
                Ubah Foto
              </button>
            </div>
            <!-- <div>
              <form
                @submit.prevent="postGambar()"
                enctype="multipart/form-data"
              >
                <input type="file" class="ms-2" @change="editGambar($event)" />
                <button type="submit" class="btn btn-dark btn-sm">
                  Submit
                </button>
              </form>
            </div> -->
            <!-- <div class="ms-2 mt-1">
              <span class=""> {{ register.AlasanBergabung }}</span>
            </div> -->
            <!-- Batas Bawah -->
            <ul
              class="nav mt-3 nav-tabs nav-tabs-s1 nav-tabs-mobile-size"
              id="myTab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  isActive
                  id="transaksi-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#transaksi"
                  type="button"
                >
                  Transaksi
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="iuran-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#iuran"
                  type="button"
                >
                  Iuran
                </button>
              </li>
            </ul>
            <div class="tab-content mt-4" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="transaksi"
                role="tabpanel"
                aria-labelledby="transaksi-tab"
              >
                <div class="profile-setting-panel">
                  <section class="category-section" :class="classname">
                    <div class="container mb-5">
                      <!-- section heading -->
                      <h4 class="mb-2">Riwayat Transaksi</h4>
                      <div class="table">
                        <table class="table mb-0 table-s2" id="dataTable">
                          <thead class="fs-14">
                            <tr>
                              <th
                                scope="col"
                                v-for="(list, i) in SectionData.waterMelonData
                                  .waterMelonTableHead"
                                :key="i"
                              >
                                {{ list }}
                              </th>
                            </tr>
                          </thead>
                          <tbody class="fs-13">
                            <tr v-for="item in transaksi" :key="item.id">
                              <td>{{ item.tanggal }}</td>
                              <td>{{ item.keterangan }}</td>
                              <td>{{ item.jumlah }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div class="tab-content mt-4" id="myTabContent">
                <!-- {{ iuran }} -->
                <div
                  class="tab-pane fade show"
                  id="iuran"
                  role="tabpanel"
                  aria-labelledby="iuran-tab"
                >
                  <div class="profile-setting-panel">
                    <section class="category-section" :class="classname">
                      <div class="container mb-5">
                        <!-- section heading -->
                        <h6 class="me-2">Tahun</h6>
                        <form
                          class="d-flex mt-1 mb-3"
                          @submit.prevent="getIuran()"
                        >
                          <v-select
                            v-model="tahun"
                            :options="tahuns"
                            :reduce="(tahuns) => tahuns.value"
                            label="text"
                          />
                          <button
                            class="btn btn-sm btn-dark ms-2"
                            type="submit"
                          >
                            Cari
                          </button>
                        </form>
                        <h3 class="mb-2">iuran</h3>
                        <div class="table">
                          <table class="table mb-0 table-s2" id="dataIuran">
                            <thead class="fs-14">
                              <tr>
                                <th
                                  scope="col"
                                  v-for="(list, i) in SectionData.fireMelonData
                                    .fireMelonTableHead"
                                  :key="i"
                                >
                                  {{ list }}
                                </th>
                              </tr>
                            </thead>
                            <tbody class="fs-13">
                              <tr v-for="item in iuran" :key="item.id">
                                <td>{{ item.bulan }}</td>
                                <td>{{ item.jumlah }}</td>
                                <td>{{ item.status }}</td>
                                <!-- <td>{{ item.tanggal }}</td>
                                <td>{{ item.keterangan }}</td>
                                <td>{{ item.jumlah }}</td> -->
                                <!-- <td>{{ item.khas.nama }}</td> -->
                                <!-- <td>{{ item.akun.nama_akun }}</td> -->
                                <!-- <td>{{ item.keterangan }}</td>
                              <td>{{ item.jumlah }}</td> -->
                                <!-- <td>{{ item.jenis_transaksi }}</td> -->
                                <td>
                                  <button
                                    @click="showIuran(item.id)"
                                    class="col- icon-btn p-0 m-0"
                                    title="Edit"
                                    data-bs-toggle="modal"
                                    data-bs-target="#updateModal"
                                  >
                                    <em class="fa fa-pencil-square-o"></em>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end profile-setting-panel -->
        </div>
        <!-- end tab-pane -->
      </div>
      <!-- end tab-content -->
    </div>
    <!-- end profile-setting-panel-wrap-->
    <form @submit.prevent="postGambar()" enctype="multipart/form-data">
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
              <img
                :src="previewimg"
                v-if="previewimg"
                class="mb-2"
                width="200"
              />
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
  </div>
  <!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import axios from "axios";
import $ from "jquery";
import Swal from "sweetalert2";

export default {
  name: "AccountSection",
  data() {
    return {
      SectionData,
      register: [],
      industris: [],
      cities: [],
      prov: [],
      wilayahs: [],
      transaksi: [],
      iuran: [],
      tahuns: [],
      tahun: [],
      tanggal_bayar: "",
      status: "",
      gambar: "",
      NamaPerushaan: "",
      PhoneNumber: "",
      alamat: "",
      name: "",
      BentukBadanUsaha: "",
      KotaId: [],
      provinsiId: [],
      email: "",
      path: "",
    };
  },
  created() {
    axios
      .get(`http://127.0.0.1:8000/api/member/show/${this.$route.params.id}`)
      .then((res) => {
        this.register = res.data.data;
        this.cities = res.data.data.cities;
        this.prov = res.data.data.provinsi;
      });

    // this.getIndustris();
    this.getTransaksi();
    this.getTahun();
    this.getGambar();
  },
  methods: {
    // showMember() {
    //   axios.post("http://127.0.0.1:8000/api/member/wlayah/show", {
    //     wilayah : this.wilayah
    //   });
    // },
    getGambar() {
      axios
        .get(`http://127.0.0.1:8000/api/member/gambar/${this.$route.params.id}`)
        .then((res) => {
          this.gambar = res.data;
          this.path = "http://127.0.0.1:8000";
          console.log(res);
        });
    },
    postGambar() {
      let formData = new FormData();

      formData.append("gambar", this.gambar);
      axios
        .post(
          `http://127.0.0.1:8000/api/member/gambar/${this.$route.params.id}`,
          formData
        )
        .then((res) => {
          this.$toast.success("gambar berhasil di update");
          console.log(res);
        });
    },
    editGambar(e) {
      this.gambar = e.target.files[0];
      this.previewimg = URL.createObjectURL(e.target.files[0]);
    },
    showPost() {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data telah tersimpan!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    getTahun: function () {
      axios.get("http://127.0.0.1:8000/api/iuran/selectOption").then(
        function (response) {
          this.tahuns = response.data.map((tahuns) => ({
            value: tahuns,
            text: tahuns,
          }));
        }.bind(this)
      );
    },
    getTransaksi: function () {
      axios
        .get(
          `http://127.0.0.1:8000/api/member/transaksi/${this.$route.params.id}`
        )
        .then(
          function (response) {
            this.transaksi = response.data;
            setTimeout(() => {
              $("#dataTable").DataTable();
            }, 100);
          }.bind(this)
        );
    },
    getIuran: function () {
      axios
        .post(
          `http://127.0.0.1:8000/api/iuran/updateShow/${this.$route.params.id}`,
          {
            tahun: this.tahun,
          }
        )
        .then(
          function (response) {
            this.iuran = response.data;
            setTimeout(() => {
              $("#dataIuran").DataTable();
            }, 100);
          }.bind(this)
        );
    },
    showIuran(id) {
      axios.get("http://127.0.0.1:8000/api/iuran/showUpdate/" + id).then(
        function (response) {
          this.id = response.data.id;
          this.tanggal_bayar = response.data.tanggal_bayar;
          this.status = response.data.status;
        }.bind(this)
      );
    },
    showMember(id) {
      // alert(id);a
      axios.get("http://127.0.0.1:8000/api/member/show/" + id).then(
        function (response) {
          this.id = response.data.id;
          this.gambar = response.data.gambar;
          this.NamaPerushaan = response.data.NamaPerushaan;
          this.PhoneNumber = response.data.PhoneNumber;
          this.status = response.data.status;
          this.alamat = response.data.alamat;
          this.name = response.data.name;
          this.BentukBadanUsaha = response.data.BentukBadanUsaha;
          this.email = response.data.email;
        }.bind(this)
      );
    },
    putIuran(id) {
      // alert(id);
      axios
        .post("http://127.0.0.1:8000/api/iuran/update/" + id, {
          tanggal_bayar: this.tanggal_bayar,
          status: this.status,
        })
        .then((response) => {
          this.showPost();
          this.getIuran();
          // this.$toast.show("berhasil update");
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error("gagal update");
          console.log(error);
        });
    },
    // postIuran() {
    //   axios
    //     .post("http://127.0.0.1:8000/api/iuran/index", {
    //       tahun: this.tahun,
    //     })
    //     .then((response) => {
    //       this.memberss = response.data;
    //       setTimeout(() => {
    //         $("#dataMembers").DataTable();
    //       }, 300);
    //       $("#dataMembers").DataTable().destroy();
    //       emitter.emit("refreshPage");
    //     });
    // },
  },
  mounted() {
    /*===========SHOW UPLOADED IMAGE ================== */
    function uploadImage(selector) {
      let elem = document.querySelectorAll(selector);
      if (elem.length > 0) {
        elem.forEach((item) => {
          item.addEventListener("change", function () {
            if (item.files && item.files[0]) {
              let img = document.getElementById(item.dataset.target);
              img.onload = function () {
                URL.revokeObjectURL(img.src);
              };
              img.src = URL.createObjectURL(item.files[0]);

              let allowedExtensions = ["jpg", "JPEG", "JPG", "png"];
              let fileExtension = this.value.split(".").pop();
              var lastDot = this.value.lastIndexOf(".");
              var ext = this.value.substring(lastDot + 1);
              var extTxt = (img.value = ext);
              if (!allowedExtensions.includes(fileExtension)) {
                alert(
                  extTxt +
                    " file type not allowed, Please upload jpg, JPG, JPEG, or png file"
                );
                img.src = " ";
              }
            }
          });
        });
      }
    }

    uploadImage(".upload-image");

    /* =========== Show/Hide passoword ============== */
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
};
</script>
