<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Log Register</h3>
    </div>
    <!-- {{kondisi}} -->
    <!-- end user-panel-title-box -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-s1 justify-content-left mb-3">
        <li class="breadcrumb-item">
          <router-link to="/offers">Registrant</router-link>
        </li>
        <li class="breadcrumb-item">Log Register</li>
      </ol>
    </nav>
    <!-- <div class="d-flex flex-row">
      <div class="d-grid ms-1 gap-2 d-md-block">
        <router-link
          to="laporan-pembukuan"
          type="button"
          class="btn btn-sm btn-dark mb-3"
        >
          Log Register
        </router-link>
      </div>
    </div> -->
    <!-- {{registers}} -->
    <div class="profile-setting-panel-wrap">
      <div class="table-responsive">
        <table class="table mb-0 table-s2" id="dataLog">
          <thead class="fs-14">
            <tr>
              <th
                scope="col"
                v-for="(list, i) in SectionData.LogData.LogTableHead"
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
              <td>{{ item.nama }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.NamaPerushaan }}</td>
              <td>{{ item.PhoneNumber }}</td>
              <!-- <td><span v-for="items in item.company_industry" :key="items.id">{{items.name}}<br></span></td> -->
              <td>{{ item.RegisterDate }}</td>
              <!-- <td>{{ item.cities.name }}</td> -->
              <!-- <td>{{ item.BentukBadanUsaha }}</td> -->
              <!-- <td>{{ item.cekWilayah }}</td> -->
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
      // alert(document.getElementById('registers').value)
      axios.get(process.env.VUE_APP_ROOT_API+"statusRegister").then(
        function (response) {
          this.id = id;
          this.status_register = response.data;
        }.bind(this)
      );
    },
    getRegisters: function () {
      axios.get(process.env.VUE_APP_ROOT_API+"log/show").then(
        function (response) {
          this.registers = response.data.data;
          // this.kondisi = response.data.data;
          setTimeout(() => {
            $("#dataLog").DataTable();
          }, 100);
        }.bind(this)
      );
    },
    updateStatus(id) {
      // alert(id)
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
      // alert(id);

      axios.delete(process.env.VUE_APP_ROOT_API+"register/delete/" + id).then(
        function () {
          $("#dataLog").DataTable().destroy();
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
