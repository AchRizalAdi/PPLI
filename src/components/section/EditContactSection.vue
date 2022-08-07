<template>
   <div class="col-lg-9 ps-xl-5">
                        <div class="user-panel-title-box">
                            <h3>Edit Contact</h3>
                        </div><!-- end user-panel-title-box -->
                        
                        <div class="profile-setting-panel-wrap">
                            <div class="table-responsive">
                                <form @submit.prevent="updateKontaks">

                             <div class="form-floating mb-3">
                                <input v-model="kontaks.nama" type="text" class="form-control" id="name" placeholder="Nama" required>
                                <label for="name">Nama</label>
                            </div><!-- end form-floating -->  
                            <div class="form-floating mb-3">
                                <input v-model="kontaks.alamat" type="alamat" class="form-control" id="alamat" placeholder="Alamat" required>
                                <label for="alamat">Alamat</label>
                            </div><!-- end form-floating -->
                            <div class="form-floating mb-3">
                                <input v-model="kontaks.email" type="email" class="form-control" id="email" placeholder="Email" required>
                                <label for="email">Email</label>
                            </div><!-- end form-floating -->
                             <div class="form-floating mb-3">
                                <input v-model="kontaks.nomor" type="nomor" class="form-control" id="nomor" placeholder="Nomor" required>
                                <label for="nomor">Nomor</label>
                            </div><!-- end form-floating -->
                            <div class="form-floating mb-3">
                                <input v-model="kontaks.status" type="text" class="form-control" id="status" placeholder="Status" required>
                                <label for="status">Status</label>
                            </div><!-- end form-floating -->
                            <div class="form-floating mb-3">
                                <input v-model="kontaks.agama" type="text" class="form-control" id="agama" placeholder="Agama" >
                                <label for="agama">Agama</label>
                            </div><!-- end form-floating -->
                            <div class="form-floating mb-3">
                                <input v-model="kontaks.tanggal_lahir" type="date" class="form-control" id="tanggal_lahir" placeholder="Tanggal Lahir" >
                                <label for="tanggal_lahir">Tanggal Lahir</label>
                            </div><!-- end form-floating -->
                             <div class="form-floating mb-3">
                                <input v-model="kontaks.no_ktp" type="text" class="form-control" id="no_ktp" placeholder="Nomor KTP" >
                                <label for="no_ktp">Nomor KTP</label>
                            </div>
                             <div class="form-floating mb-3">
                                <input v-model="kontaks.npwp" type="text" class="form-control" id="npwp" placeholder="NPWP" >
                                <label for="npwp">NPWP</label>
                            </div>
                            <!-- BUTTON -->
                             <router-link to="/transactions" type="button" class="btn btn-sm btn-dark " >Kembali</router-link>
                            <button class="btn btn-sm btn-dark w-20 ms-2" type="submit" >Simpan Contact</button>
                            </form>
                            </div><!-- end table-responsive -->
                        </div><!-- end profile-setting-panel-wrap-->
            <!-- Modal store -->
            
        </div><!-- end col-lg-8 -->          
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import axios from 'axios';
// import $ from "jquery";
// import { reactive } from 'vue';
// import { onMounted, ref } from 'vue';

export default {
  data () {
    return {
      SectionData,
      page: 1,
      i:1,
      perPage: 6,
      records: [],
      kontaks: [],
        
    }
  },
  created() {
            axios
                .get(`http://127.0.0.1:8000/api/kontak/${this.$route.params.id}`)
                .then((res) => {
                    this.kontaks = res.data.data;
                });
        },
  methods: {
    updateKontaks() {
                axios
                    .post(`http://127.0.0.1:8000/api/kontak/${this.$route.params.id}`, this.kontaks)
                    .then((res) => {
                        this.$router.push({ name: 'transactions' });
                        this.$toast.success("Kontak berhasil di update");
                        console.log(res)
                    });
    },
    // putKontak(id){
    //     axios.post('http://127.0.0.1:8000/api/kontak/'+id,{
    //          name: this.name
    //          }).then(function () {  
    //         //  this.getProvinsis()
    //         alert('Kontak berhasil ditambahkan');
    //          }.bind(this));
    // },
    // showKontak (id){
    // // alert(id);
    //         axios.get('http://127.0.0.1:8000/api/kontak/'+id)
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
    }
  },
  mounted () {
    /*  ======== Show/Hide passoword ======== */
    function showHidePassword(selector){
        let elem = document.querySelectorAll(selector);
        if(elem.length > 0){
            elem.forEach(item => {
            item.addEventListener("click", function(e){
                e.preventDefault();
                let target = document.getElementById(item.getAttribute("href"));
                if(target.type == "password") {
                target.type = "text";
                item.classList.add("is-shown");
                }else{
                target.type = "password";
                item.classList.remove("is-shown");
                }
            });

            });
        }
    }

    showHidePassword(".password-toggle");

  }
}
</script>

       