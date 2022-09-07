  <template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>{{ SectionData.registersData.mainTitle }}</h3>
    </div>
    <!-- {{kondisi}} -->
    <!-- end user-panel-title-box -->
    <div class="d-flex flex-row">
      <div class="d-grid ms-1 gap-2 d-md-block">
        <router-link
          v-if="checkPrivilege('logregister-index')"
          to="/log"
          type="button"
          class="btn btn-sm btn-dark mb-3"
        >
          Log Register
        </router-link>
      </div>
    </div>

    <div class="profile-setting-panel-wrap">
      <div class="table-responsive">
        <table class="table mb-0 table-s2" id="dataReg">
          <thead class="fs-14">
            <tr>
              <th
                scope="col"
                v-for="(list, i) in SectionData.registersData
                  .registersTableHead"
                :key="i"
              >
                {{ list }}
              </th>
            </tr>
          </thead>
          <tbody class="fs-13">
            <tr
              v-for="(item, index) in registers"
              :value="item.id"
              :key="item.id"
            >
              <th scope="row" id="id">
                <a href="#">{{ index + 1 }}</a>
              </th>
              <td>{{ item.name }}</td>
              <td>{{ item.nama_perusahaan }}</td>
              <!-- <td>{{ item.PhoneNumber }}</td> -->
              <!-- <td><span v-for="items in item.company_industry" :key="items.id">{{items.name}}<br></span></td> -->
              <td>{{ item.wilayah }}</td>
              <!-- <td>{{ item.cities.name }}</td> -->
              <!-- <td>{{ item.BentukBadanUsaha }}</td> -->
              <!-- <td>{{ item.cekWilayah }}</td> -->
              <td>
                <button
                  :disabled="item.cekWilayah"
                  class="btn btn-warning btn-sm"
                  @click="update(item.id)"
                  id="statusss"
                  data-bs-toggle="modal"
                  data-bs-target="#statussModal"
                >
                  {{ item.status }}
                </button>
              </td>
              <td>
                <button
                  :disabled="item.cekStatus"
                  class="btn btn-primary btn-sm"
                  @click="sendEmail(item.id)"
                  id="pesan"
                  data-bs-toggle="modal"
                  data-bs-target="#pesanModal"
                >
                  Kirim Pesan
                </button>
              </td>
              <td class="row">
                <!-- v-if="checkPrivilege('kontak-update')" -->
                <router-link
                  v-if="checkPrivilege('register-show')"
                  :to="{ name: 'show-register', params: { id: item.id } }"
                  class="col- p-0 m-0 icon-btn btn-sm"
                  title="Show"
                  ><em class="fa fa-eye"></em
                ></router-link>
                <!-- v-if="checkPrivilege('logregister-index')" -->
                <button
                  v-if="checkPrivilege('register-delete')"
                  :disabled="item.cekWilayah"
                  type="button"
                  class="col- p-0 m-0 icon-btn btn-sm"
                  title="Delete"
                  @click="showDelete(item.id)"
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
      <div class="text-center mt-4 mt-md-2">
        <Pagination
          :records="records.length"
          v-model="page"
          :per-page="perPage"
        ></Pagination>
      </div>
      <!-- Modal store -->
      <form @submit.prevent="updateStatus(id)">
        <div
          class="modal fade"
          id="statussModal"
          tabindex="-1"
          aria-labelledby="reportModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title" id="reportModalLabel">Status Acc</h4>
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
                <!-- {{status_register}} -->
                <div class="form-group mb-2">
                  <label>status </label>
                  <select v-model="status" class="form-control" required>
                    <option
                      v-for="data in status_register.data"
                      :value="data.name"
                      :key="data.id"
                    >
                      {{ data.name }}
                    </option>
                  </select>
                </div>
                <button
                  class="btn btn-dark w-100"
                  data-bs-dismiss="modal"
                  type="submit"
                >
                  Select
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
      <!-- Modal Pesan -->
      <form @submit.prevent="pesan(id)">
        <div
          class="modal fade"
          id="pesanModal"
          tabindex="-1"
          aria-labelledby="reportModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title" id="reportModalLabel">Mail</h4>
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
                <div class="form-group mb-4">
                  <label>Isi Pesan DIbawah</label>
                  <div class="form-floating mb-3">
                    <textarea
                      type="input"
                      class="form-control"
                      id="nama"
                      v-model="isi_pesan"
                      required
                    ></textarea>
                  </div>
                  <!-- end form-floating -->
                </div>
                <button
                  class="btn btn-dark w-100"
                  data-bs-dismiss="modal"
                  type="submit"
                >
                  Send
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
import Pagination from "v-pagination-3";
import axios from "axios";
import $ from "jquery";
import Swal from "sweetalert2";
import mitt from "mitt";
const emitter = mitt();

export default {
  components: {
    Pagination,
  },

  data() {
    return {
      // checked: false,
      name: "OfferSection",
      SectionData,
      page: 1,
      perPage: 6,
      records: [],
      id: [],
      status_register: [],
      registers: [],
      isi_pesan: [],
      data: [],
      cekWilayah: [],
      // kondisi: ""
    };
  },

  methods: {
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
          this.deleteRegisters(id);
          Swal.fire("Berhasil Terhapus!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Tidak Tersimpan", "", "info");
        }
      });
    },
    // checkWilayah(){
    //   axios.get(process.env.VUE_APP_ROOT_API+"userRegister").then(
    //     function (response) {
    //       this.cekWilayah = response.data.data;
    //       // this.checked = cekWilayah.cekWilayah;
    //     }.bind(this)
    //   );
    // },
    update(id) {
      axios.get(process.env.VUE_APP_ROOT_API+"statusRegister").then(
        function (response) {
          this.id = id;
          this.status_register = response.data;
        }.bind(this)
      );
    },
    getRegisters: function () {
      axios.get(process.env.VUE_APP_ROOT_API+"userRegister").then(
        function (response) {
          this.registers = response.data.data;
          setTimeout(() => {
            $("#dataReg").DataTable();
          }, 100);
        }.bind(this)
      );
    },

    updateStatus(id) {
      axios
        .post(process.env.VUE_APP_ROOT_API+"update/member/" + id, {
          status: this.status,
        })
        .then((response) => {
          this.getRegisters();
          console.log(response);
          this.$toast.show(response.data.status);
        })
        .catch((error) => {
          this.$toast.show("gagal update");
          console.log(error);
        });
      this.status = "";
    },
    deleteRgisters(id) {
      axios.delete(process.env.VUE_APP_ROOT_API+"register/delete/" + id).then(
        function () {
          $("#dataReg").DataTable().destroy();
          emitter.emit("refreshPage");
          this.$toast.show("berhasil delete");
        }.bind(this)
      );
    },
    sendEmail(id) {
      this.id = id;
    },
    pesan(id) {
      axios
        .post(process.env.VUE_APP_ROOT_API+"register/email/" + id, {
          pesan: this.isi_pesan,
        })
        .then((response) => {
          this.getRegisters();
          this.$toast.show("pesan terkirim");
          console.log(response);
        })
        .catch((error) => {
          this.$toast.show("gagal mengirim pesan");
          console.log(error);
        });
      this.isi_pesan = "";
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
    this.getRegisters();
    emitter.on("refreshPage", () => {
      this.getRegisters();
    });
    // this.checkWilayah();
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