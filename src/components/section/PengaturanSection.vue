<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>{{ SectionData.pengaturanProfileData.title }}</h3>
    </div>
    <!-- end user-panel-title-box -->
    <div class="profile-setting-panel-wrap">
      <ul
        class="nav nav-tabs nav-tabs-s1 nav-tabs-mobile-size"
        id="myTab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pengaturan-umum-tab"
            data-bs-toggle="tab"
            data-bs-target="#pengaturan-umum"
            type="button"
          >
            Pengaturan Umum
          </button>
        </li>
        
        <li v-if="checkPrivilege('usermanagement-index')" class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="change-password-tab"
            data-bs-toggle="tab"
            data-bs-target="#change-password"
            type="button"
          >
            User Management
          </button>
        </li>
      </ul>
      <div class="tab-content mt-4" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="pengaturan-umum"
          role="tabpanel"
          aria-labelledby="pengaturan-umum-tab"
        >
          <div class="profile-setting-panel">
            <!-- <h5 class="mb-4">Umum</h5> -->

            <section class="category-section" :class="classname">
              <div class="container mb-5">
                <!-- section heading -->
                <SectionHeading
                  classname=""
                  :text="SectionData.settingUmumData.title"
                  isMargin=""
                ></SectionHeading>
                <div class="row g-gs">
                  <div
                    v-if="checkPrivilege('wilayah-index')"
                    class="col-lg-3 col-6"
                  >
                    <router-link
                      to="/wilayah"
                      class="card card-cat text-center h-100 text-dark"
                    >
                      <div class="card-body card-body-s1">
                        <span
                          class="icon fa fa-map-o mb-3 mx-auto icon-circle icon-wbg icon-lg"
                        ></span>
                        <h5 class="card-cat-title">Wilayah</h5>
                      </div>
                    </router-link>
                  </div>
                  <div
                    v-if="checkPrivilege('city-index')"
                    class="col-lg-3 col-6"
                  >
                    <router-link
                      to="/city"
                      class="card card-cat text-center h-100 text-blue"
                    >
                      <div class="card-body card-body-s1">
                        <span
                          class="icon fa fa-building-o mb-3 mx-auto icon-circle icon-wbg icon-lg"
                        ></span>
                        <h5 class="card-cat-title">Kota</h5>
                      </div>
                    </router-link>
                  </div>
                  <div
                    v-if="checkPrivilege('provinsi-index')"
                    class="col-lg-3 col-6"
                  >
                    <router-link
                      to="/provinsi"
                      class="card card-cat text-center h-100 text-teal"
                    >
                      <div class="card-body card-body-s1">
                        <span
                          class="icon fa fa-map-signs mb-3 mx-auto icon-circle icon-wbg icon-lg"
                        ></span>
                        <h5 class="card-cat-title">Provinsi</h5>
                      </div>
                    </router-link>
                  </div>
                  <div
                    v-if="checkPrivilege('industri-index')"
                    class="col-lg-3 col-6"
                  >
                    <router-link
                      to="/industry"
                      class="card card-cat text-center h-100 text-orange"
                    >
                      <div class="card-body card-body-s1">
                        <span
                          class="icon fa fa-industry mb-3 mx-auto icon-circle icon-wbg icon-lg"
                        ></span>
                        <h5 class="card-cat-title">Industri</h5>
                      </div>
                    </router-link>
                  </div>
                  <div
                    v-if="checkPrivilege('bank-index')"
                    class="col-lg-3 col-6"
                  >
                    <router-link
                      to="/bank"
                      class="card card-cat text-center h-100 text-green"
                    >
                      <div class="card-body card-body-s1">
                        <span
                          class="icon fa fa-university mb-3 mx-auto icon-circle icon-wbg icon-lg"
                        ></span>
                        <h5 class="card-cat-title">Bank</h5>
                      </div>
                    </router-link>
                  </div>
                  <div
                    v-if="checkPrivilege('tipemitra-index')"
                    class="col-lg-3 col-6"
                  >
                    <router-link
                      to="tipe-mitra"
                      class="card card-cat text-center h-100 text-pink"
                    >
                      <div class="card-body card-body-s1">
                        <span
                          class="icon fa fa-handshake-o mb-3 mx-auto icon-circle icon-wbg icon-lg"
                        ></span>
                        <h5 class="card-cat-title">Tipe Mitra</h5>
                      </div>
                    </router-link>
                  </div>
                  <div
                    v-if="checkPrivilege('settingemail-index')"
                    class="col-lg-3 col-6"
                  >
                    <router-link
                      to="setting-email"
                      class="card card-cat text-center h-100 text-grey"
                    >
                      <div class="card-body card-body-s1">
                        <span
                          class="icon fa fa-envelope-open-o mb-3 mx-auto icon-circle icon-wbg icon-lg"
                        ></span>
                        <h5 class="card-cat-title">Setting Email</h5>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </section>

            <section class="category-section" :class="classname">
              <div class="container">
                <!-- section heading -->
                <SectionHeading
                  classname=""
                  :text="SectionData.settingOrgData.title"
                  :content="SectionData.settingOrgData.content"
                  isMargin=""
                ></SectionHeading>
                <div class="row g-gs">
                  <div
                    v-if="checkPrivilege('pengurus-index')"
                    class="col-lg-3 col-6"
                  >
                    <router-link
                      to="/pengurusdata"
                      class="card card-cat text-center h-100 text-green"
                    >
                      <div class="card-body card-body-s1">
                        <span
                          class="icon fa fa-user-circle mb-3 mx-auto icon-circle icon-wbg icon-lg"
                        ></span>
                        <h5 class="card-cat-title">Pengurus</h5>
                      </div>
                    </router-link>
                  </div>
                  <!-- end col -->
                  <div
                    v-if="checkPrivilege('jabatan-index')"
                    class="col-lg-3 col-6"
                  >
                    <router-link
                      to="/jabatan"
                      class="card card-cat text-center h-100 text-pink"
                    >
                      <div class="card-body card-body-s1">
                        <span
                          class="icon fa fa-address-card-o mb-3 mx-auto icon-circle icon-wbg icon-lg"
                        ></span>
                        <h5 class="card-cat-title">Jabatan</h5>
                      </div>
                    </router-link>
                  </div>
                  <!-- end col -->
                  <div
                    v-if="checkPrivilege('kategori-index')"
                    class="col-lg-3 col-6"
                  >
                    <router-link
                      to="/kategori-akun"
                      class="card card-cat text-center h-100 text-black"
                    >
                      <div class="card-body card-body-s1">
                        <span
                          class="icon fa fa-address-book-o mb-3 mx-auto icon-circle icon-wbg icon-lg"
                        ></span>
                        <h5 class="card-cat-title">Kategori Akun</h5>
                      </div>
                    </router-link>
                  </div>
                  <!-- end col -->
                  <div
                    v-if="checkPrivilege('daftarkas-index')"
                    class="col-lg-3 col-6"
                  >
                    <router-link
                      to="/khas"
                      class="card card-cat text-center h-100 text-cyan"
                    >
                      <div class="card-body card-body-s1">
                        <span
                          class="icon fa fa-calculator mb-3 mx-auto icon-circle icon-wbg icon-lg"
                        ></span>
                        <h5 class="card-cat-title">Daftar Kas</h5>
                      </div>
                    </router-link>
                  </div>
                  <!-- end col -->
                </div>
                <!-- end row -->
              </div>
              <!-- end container -->
            </section>
            <!-- end category-section -->
          </div>
          <!-- end profile-setting-panel -->
        </div>
        <!-- end tab-pane -->

        <!-- ISI USER MANAGEMENT -->
        <!-- {{ userManajemen }} -->
        <div
          class="tab-pane fade"
          id="change-password"
          role="tabpanel"
          aria-labelledby="change-password-tab"
        >
          <div class="profile-setting-panel">
            <div class="d-grid gap-2 d-md-block">
              <router-link
                v-if="checkPrivilege('usermanagement-add')"
                to="/user-mana"
                type="button"
                class="btn btn-dark btn-sm mb-2"
                >Add User Management</router-link
              >
              <router-link
                v-if="checkPrivilege('group-index')"
                to="/group"
                type="button"
                class="btn btn-dark btn-sm mb-2 ms-2"
                >Group</router-link
              >
            </div>
            <div class="profile-setting-panel-wrap">
              <!-- {{rolesss}} -->
              <div class="table">
                <table class="table mb-0 table-s2" id="dataUser">
                  <thead class="fs-14">
                    <tr>
                      <th
                        scope="col"
                        v-for="(list, i) in SectionData.userMData
                          .userMTableHead"
                        :key="i"
                      >
                        {{ list }}
                      </th>
                    </tr>
                  </thead>
                  <!-- {{ roles }} -->

                  <!-- isi tabel -->
                  <tbody class="fs-13">
                    <tr
                      v-for="(item, index) in userManajemen.data"
                      :key="item.id"
                    >
                      <td scope="row">
                        <a href="#">{{ index + 1 }}</a>
                      </td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.email }}</td>
                      <td>{{ item.PhoneNumber }}</td>
                      <!-- <td>{{ item.status }}</td> -->
                      <td>{{ item.roles }}</td>
                      <td class="row">
                        <router-link
                          v-if="checkPrivilege('usermanagement-privilege')"
                          :to="{ name: 'privilage', params: { id: item.id } }"
                          class="col-sm p-0 m-0 icon-btn"
                          title="Show"
                          ><em class="fa-solid fa-gears"></em
                        ></router-link>
                        <button
                          v-if="checkPrivilege('usermanagement-edit-role')"
                          @click="tes(item.id)"
                          class="col-sm p-0 m-0 icon-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#updateModal"
                          title="Edit"
                        >
                          <em class="fa fa-pencil-square-o"></em>
                        </button>
                        <button
                          v-if="checkPrivilege('usermanagement-delete')"
                          v-show="item.cekRoles"
                          @click="showDelete(item.id)"
                          class="col-sm p-0 m-0 icon-btn"
                          title="Delete"
                        >
                          <em class="ni ni-trash"></em>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- end table-responsive -->
              <!-- pagination -->
              <div class="text-center mt-4 mt-md-5">
                <!-- <Pagination :records="records.length" v-model="page" :per-page="perPage"></Pagination> -->
              </div>
            </div>
            <!-- end profile-setting-panel-wrap-->
          </div>
          <!-- end profile-setting-panel -->
        </div>
        <!-- end tab-pane -->
      </div>
      <!-- end tab-content -->
      <form @submit.prevent="putUser(id)">
        <div
          class="modal fade"
          id="updateModal"
          tabindex="-1"
          aria-labelledby="reportModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title" id="reportModalLabel">update roles</h4>
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
                <div class="form-floating mb-3">
                  <select class="form-control" v-model="roles" required>
                    <option
                      v-for="item in rolesss"
                      :value="item.name"
                      :key="item.name"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
                <!-- end form-floating -->
                <button
                  class="btn btn-dark w-100"
                  data-bs-dismiss="modal"
                  type="submit"
                >
                  update
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
    <!-- end profile-setting-panel-wrap-->
  </div>
  <!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import axios from "axios";
import $ from "jquery";
import Swal from "sweetalert2";
import mitt from "mitt";
const emitter = mitt();

export default {
  name: "AccountSection",
  data() {
    return {
      SectionData,
      userManajemen: [],
      id: "",
      roles: "",
      rolesss: [],
    };
  },
  methods: {
    getRoles: function () {
      axios.get(process.env.VUE_APP_ROOT_API+"role/show").then(
        function (response) {
          this.rolesss = response.data.data;
        }.bind(this)
      );
    },
    showPost() {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Data telah tersimpan!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    showDelete(id) {
      Swal.fire({
        title: "Apakah anda ingin menghapus data ini?",
        showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: "Iya",
        denyButtonText: `Tidak`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.deleteUser(id);
          Swal.fire("Tersimpan!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Tidak Tersimpan", "", "info");
        }
      });
    },
    resetnama() {
      this.name = null;
    },
    putUser(id) {
      // alert(id);
      axios
        .post(process.env.VUE_APP_ROOT_API+"admin/update/User/" + id, {
          roles: this.roles,
        })
        .then((response) => {
          this.showPost();
          this.getUserManajemen();
          // this.$toast.show("berhasil update");
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error("gagal update");
          console.log(error);
        });
      this.roles = "";
    },
    tes(id) {
      // alert(id);
      axios.get(process.env.VUE_APP_ROOT_API+"admin/show/roles/" + id).then(
        function (response) {
          // console.log(response.data.roles)
          this.id = response.data.id;
          this.roles = response.data.roles;
          // this.ini=response.data.roles;
        }.bind(this)
      );
    },
    getUserManajemen: function () {
      axios.get(process.env.VUE_APP_ROOT_API+"userManajemen").then(
        function (response) {
          this.userManajemen = response.data;
          setTimeout(() => {
            $("#dataUser").DataTable();
          }, 100);
        }.bind(this)
      );
    },
    deleteUser(id) {
      // alert(id);

      axios.delete(process.env.VUE_APP_ROOT_API+"admin/delete/User/" + id).then(
        function () {
          // alert("delete succes");
          this.getUserManajemen();
        }.bind(this)
      );
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
    this.getRoles();
    this.getUserManajemen();
    emitter.on("refreshPage", () => {
      this.getUserManajemen();
    });
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