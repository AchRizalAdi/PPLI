<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Detail Kontak</h3>
    </div>
    <!-- end user-panel-title-box -->
    <!-- {{kontaks }} -->
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
        <div class="me-5">
          <div><strong class="me-2">Nama :</strong>{{ kontaks.nama }}</div>
          <div><strong class="me-2">Alamat :</strong>{{ kontaks.alamat }}</div>
          <div><strong class="me-2">Email :</strong>{{ kontaks.email }}</div>
          <div><strong class="me-2">Nomor :</strong>{{ kontaks.nomor }}</div>
          <div><strong class="me-2">Status :</strong>{{ kontaks.status }}</div>
          <div><strong class="me-2">Agama :</strong>{{ kontaks.agama }}</div>
          <div><strong class="me-2">Tanggal Lahir :</strong>{{ kontaks.tanggal_lahir }}</div>
          <div><strong class="me-2">Nomor KTP :</strong>{{ kontaks.no_ktp }}</div>
          <div><strong class="me-2">NPWP :</strong>{{ kontaks.npwp }}</div>
        </div>
        <div class="ms-5">
          <h5>Foto Perusahaan</h5>
           <div class="img-thumbnail">
                <img :src="path + gambar" width="200" />
              </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import axios from "axios";
// import $ from "jquery";
// import { reactive } from 'vue';
// import { onMounted, ref } from 'vue';

export default {
  data() {
    return {
      SectionData,
      page: 1,
      i: 1,
      perPage: 6,
      records: [],
      kontaks: [],
    };
  },
  created() {
    axios
      .get(process.env.VUE_APP_ROOT_API + `kontak/${this.$route.params.id}`)
      .then((res) => {
        this.kontaks = res.data.data;
      });
  },
  methods: {
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
    // putKontak(id){
    //     axios.post(process.env.VUE_APP_ROOT_API+'kontak/'+id,{
    //          name: this.name
    //          }).then(function () {
    //         //  this.getProvinsis()
    //         alert('Kontak berhasil ditambahkan');
    //          }.bind(this));
    // },
    // showKontak (id){
    // // alert(id);
    //         axios.get(process.env.VUE_APP_ROOT_API+'kontak/'+id)
    //         .then(function (response) {
    //             this.edit = response.data.data.id;
    //             this.nama=response.data.data.nama;
    //             this.alamat=response.data.data.alamat;
    //             this.email=response.data.data.email;
    //             this.nomor=response.data.data.nomor;
    //             this.status=response.data.data.status;
    //          }.bind(this));
    //     },
    //         },
    //  created: function(){
  },
  computed: {
    displayedRecords() {
      const startIndex = this.perPage * (this.page - 1);
      const endIndex = startIndex + this.perPage;
      return this.records.slice(startIndex, endIndex);
    },
  },
  mounted() {
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
};
</script>
