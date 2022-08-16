<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Pengumuman</h3>
    </div>
    <!-- end user-panel-title-box -->

    <!-- {{ provinsi }} -->
    <div
      v-if="checkPrivilege('pengumuman-add')"
      class="d-grid gap-2 d-md-block"
    >
      <button
        @click="resetnama()"
        type="button"
        class="btn btn-dark btn-sm mb-2"
        data-bs-toggle="modal"
        data-bs-target="#messageModal"
      >
        Tambah Pengumuman
      </button>
    </div>
    <!-- {{ tanggal }} -->
    <!-- {{ pengumuman }} -->
    <div class="profile-setting-panel-wrap">
      <div class="table">
        <table class="table mb-0 table-s2" id="dataPengg">
          <thead class="fs-14">
            <tr>
              <th
                scope="col"
                v-for="(list, i) in SectionData.pengumumansData
                  .pengumumansTableHead"
                :key="i"
              >
                {{ list }}
              </th>
            </tr>
          </thead>
          <tbody class="fs-13">
            <tr v-for="item in pengumuman.data" :key="item.id">
              <td>{{ item.wilayah.name }}</td>
              <td>{{ item.tanggal }}</td>
              <td>{{ item.judul }}</td>
              <td>{{ item.status }}</td>
              <!-- <td>{{ item.keterangan }}</td> -->
              <td class="row">
                <button
                v-if="checkPrivilege('pengumuman-show')"
                  @click="showPengumuman(item.id)"
                  class="col- icon-btn p-0 m-0"
                  title="Edit"
                  data-bs-toggle="modal"
                  data-bs-target="#showModal"
                >
                  <em class="fa fa-eye"></em>
                </button>
                <button
                  v-if="checkPrivilege('pengumuman-edit')"
                  @click="showPengumuman(item.id)"
                  class="col- icon-btn p-0 m-0"
                  title="Edit"
                  data-bs-toggle="modal"
                  data-bs-target="#updateModal"
                >
                  <em class="fa fa-pencil-square-o"></em>
                </button>
                <button
                  v-if="checkPrivilege('pengumuman-delete')"
                  @click="showDelete(item.id)"
                  class="col- icon-btn p-0 m-0"
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
        <Pagination
          :records="records.length"
          v-model="page"
          :per-page="perPage"
        ></Pagination>
      </div>
    </div>
    <!-- end profile-setting-panel-wrap-->
    <!-- Modal store -->
    <form @submit.prevent="postPengumuman()">
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
              <h4 class="modal-title" id="reportModalLabel">
                Tambah Pengumuman
              </h4>
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
              <div class="form-group mb-3">
                <label>Wilayah </label>
                <v-select
                  v-model="wilayah"
                  required
                  :options="wilayahs"
                  :reduce="(wilayahs) => wilayahs.value"
                  label="text"
                >
                </v-select>
              </div>
              <div class="form-floating mt-3 mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="judul"
                  placeholder="judul"
                  v-model="judul"
                  required
                />
                <label for="judul">Judul</label>
              </div>
              <label>Keterangan</label>
              <div class="form-floating mb-3">
                <editor
                  api-key="mfzmjkvruotbub8pu0xqk8j0h05uiv50w7tp9eo3u8n2rarv"
                  v-model="keterangan"
                />
              </div>
              <!-- {{ keterangan }} -->
              <!-- <textarea
                  type="text"
                  class="form-control"
                  id="keterangan"
                  placeholder="Keterangan"
                  v-model="keterangan"
                  required
                ></textarea>
                <label for="keterangan">Keterangan</label> -->
              <label for="status">Status</label>
              <select class="form-select h-2 mb-3" v-model="status">
                <!-- <label>I am i</label> -->
                <option value="Tampil">Tampil</option>
                <option value="Tidak Tampil">Tidak Tampil</option>
              </select>
              <!-- end form-floating -->
              <button class="btn btn-dark w-100" data-bs-dismiss="modal" type="submit">Add</button>
            </div>
            <!-- end modal-body -->
          </div>
          <!-- end modal-content -->
        </div>
        <!-- end modal-dialog -->
      </div>
      <!-- end modal-->
    </form>
    <div
      class="modal fade"
      id="showModal"
      tabindex="-1"
      aria-labelledby="reportModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="reportModalLabel">Detail Pengumuman</h4>
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
            <div class="d-flex flex-row">
              <h4 class="p-2 me-5">Wilayah</h4>
              <h4 class="p-2">:</h4>
              <p class="p-2 mb-3">{{ wilayahss }}</p>
            </div>

            <div class="d-flex flex-row">
              <h4 class="p-2 me-4">Judul</h4>
              <h4 class="p-2 ms-5">:</h4>
              <p class="p-2 mb-3">{{ judul }}</p>
            </div>

            <div class="d-flex flex-row">
              <h4 class="p-2 me-2">Keterangan</h4>
              <h4 class="p-2">:</h4>
              <p class="p-2 mb-3" v-html="keterangan"></p>
            </div>
            <!-- <h4 class="text-center"></h4>
            <p class="text-center mb-3">{{  }}</p>

            <h4 class="text-center">Keterangan</h4>
            <p class="text-center mb-3" v-html="keterangan"></p> -->

            <button class="btn btn-sm btn-dark" data-bs-dismiss="modal">
              Kembali
            </button>
            <!-- <h4 class="text-center">Judul </h4>
                <p class="text-center mb-3">{{judul}}</p> -->
            <!-- <v-select
                  v-model="wilayah"
                  required
                  :options="wilayahs"
                  :reduce="(wilayahs) => wilayahs.value"
                  label="text"
                >
                </v-select> -->
            <!-- <div class="form-floating mt-3 mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="judul"
                  placeholder="judul"
                  v-model="judul"
                  required
                />
                <label for="judul">Judul</label>
              </div> -->
            <!-- <label>Keterangan</label>
              <div class="form-floating mb-3">
                <editor
                  api-key="mfzmjkvruotbub8pu0xqk8j0h05uiv50w7tp9eo3u8n2rarv"
                  v-model="keterangan"
                />
              </div>
              <label for="status">Status</label>
              <select
                class="form-select h-2 mb-3"
                v-model="status"
                aria-label="Default select example"
              > -->
            <!-- <label>I am i</label> -->
            <!-- <option value="Tampil">Tampil</option>
                <option value="Tidak Tampil">Tidak Tampil</option>
              </select> -->
            <!-- end form-floating -->

            <!-- <button class="btn btn-dark w-100" type="submit">Add</button> -->
          </div>
          <!-- end modal-body -->
        </div>
        <!-- end modal-content -->
      </div>
      <!-- end modal-dialog -->
    </div>
    <!-- end modal-->
    <!-- Modal store -->
    <form @submit.prevent="putPengumuman(id)">
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
              <h4 class="modal-title" id="reportModalLabel">Ubah Pengumuman</h4>
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
              <div class="form-group mb-3">
                <label>Wilayah </label>
                <v-select
                  v-model="wilayah"
                  required
                  :options="wilayahs"
                  :reduce="(wilayahs) => wilayahs.value"
                  label="text"
                >
                </v-select>
              </div>
              <!-- {{ wilayah }} -->
              <div class="form-floating mt-3 mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="judul"
                  placeholder="judul"
                  v-model="judul"
                  required
                />
                <label for="judul">Judul</label>
              </div>
              <label>Keterangan</label>
              <div class="form-floating mb-3">
                <editor
                  api-key="mfzmjkvruotbub8pu0xqk8j0h05uiv50w7tp9eo3u8n2rarv"
                  v-model="keterangan"
                />
              </div>
              <!-- <QuillEditor
                  v-model="keterangan"
                  contentType="text"
                  theme="snow"
                /> -->
              <!-- <textarea
                  type="text"
                  class="form-control"
                  id="keterangan"
                  placeholder="Keterangan"
                  v-model="keterangan"
                  required
                ></textarea>
                <label for="keterangan">Keterangan</label> -->
              <label for="status">Status</label>
              <select class="form-select h-2 mb-3" v-model="status">
                <option value="Tampil">Tampil</option>
                <option value="Tidak Tampil">Tidak Tampil</option>
              </select>
              <!-- end form-floating -->
              <button
                class="btn btn-dark w-100"
                data-bs-dismiss="modal"
                type="submit"
              >
                Update
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
// import RichTextEditor from "@/components/RichTextEditor.vue";
import SectionData from "@/store/store.js";
import Pagination from "v-pagination-3";
import axios from "axios";
import $ from "jquery";
import Swal from "sweetalert2";
import Editor from "@tinymce/tinymce-vue";

import mitt from "mitt";
const emitter = mitt();
// import { reactive } from 'vue';
// import { onMounted, ref } from 'vue';

export default {
  components: {
    Pagination,
    editor: Editor,
    // Editor,
    // RichTextEditor,
  },
  data() {
    return {
      SectionData,
      page: 1,
      perPage: 6,
      records: [],
      name: "",
      wilayahs: [],
      pengumuman: [],
      wilayah: "",
      judul: "",
      keterangan: "",
      status: "",
      tanggal: "",
      wilayahss: "",
    };
  },

  methods: {
    resetnama() {
      this.wilayah = null;
      this.judul = null;
      this.status = null;
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
          this.deletePengumuman(id);
          Swal.fire("Berhasil Terhapus!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Tidak Tersimpan", "", "info");
        }
      });
    },
    getWilayahs: function () {
      axios.get("http://127.0.0.1:8000/api/select/wilayah").then(
        function (response) {
          this.wilayahs = response.data.map((wilayahs) => ({
            value: wilayahs.id,
            text: wilayahs.name,
          }));
        }.bind(this)
      );
    },
    getPengumuman: function () {
      axios.get("http://127.0.0.1:8000/api/pengumuman").then(
        function (response) {
          this.pengumuman = response.data;
          this.tanggal = response.data.tanggal;
          setTimeout(() => {
            $("#dataPengg").DataTable();
          }, 100);
        }.bind(this)
      );
    },
    deletePengumuman(id) {
      axios.delete("http://127.0.0.1:8000/api/pengumuman/" + id).then(
        function () {
          $("#dataPengg").DataTable().destroy();
          emitter.emit("refreshPage");
        }.bind(this)
      );
    },
    putPengumuman(id) {
      // alert(this.wilayah);
      axios
        .post("http://127.0.0.1:8000/api/pengumuman/" + id, {
          wilayah: this.wilayah,
          judul: this.judul,
          keterangan: this.keterangan,
          status: this.status,
        })
        .then((response) => {
          this.showPost();
          this.getPengumuman();
          this.$toast.success("berhasil di update");
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error("gagal di update");
          console.log(error);
        });
      // this.jabatanId = "";
      // this.memberId = "";
      // this.username = "";
      // this.status = "";
    },
    showPengumuman(id) {
      // alert(id);
      axios.get("http://127.0.0.1:8000/api/pengumuman/" + id).then(
        function (response) {
          this.id = response.data.data.id;
          this.wilayah = response.data.data.wilayah.id;
          this.wilayahss = response.data.data.wilayah.name
          this.judul = response.data.data.judul;
          this.keterangan = response.data.data.keterangan;
          this.status = response.data.data.status;
        }.bind(this)
      );
    },
    postPengumuman() {
      axios
        .post("http://127.0.0.1:8000/api/pengumuman", {
          wilayah: this.wilayah,
          judul: this.judul,
          keterangan: this.keterangan,
          status: this.status,
        })
        .then((response) => {
          this.showPost();
          $("#dataPengg").DataTable().destroy();
          emitter.emit("refreshPage");
          console.log(response);
        })
        .catch((error) => {
          alert("pengumuman sudah ada");
          console.log(error);
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
  },
  created: function () {
    this.getPengumuman();
    this.getWilayahs();
     emitter.on("refreshPage", () => {
      this.getPengumuman();
    });
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
