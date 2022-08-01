<template>
   <div class="col-lg-9 ps-xl-5">
                        <div class="user-panel-title-box">
                            <h3>Add Contact</h3>
                        </div><!-- end user-panel-title-box -->
                        
                        <div class="profile-setting-panel-wrap">
                            <div class="table-responsive">
                                <form @submit.prevent="store()">
                            <!-- {{ registers }} -->

                             <div class="form-floating mb-3">
                                <input v-model="nama" type="text" class="form-control" id="name" placeholder="Nama" required>
                                <label for="name">Nama</label>
                            </div><!-- end form-floating -->  
                            <div class="form-floating mb-3">
                                <input v-model="alamat" type="alamat" class="form-control" id="alamat" placeholder="Alamat" required>
                                <label for="alamat">Alamat</label>
                            </div><!-- end form-floating -->
                            <div class="form-floating mb-3">
                                <input v-model="email" type="email" class="form-control" id="email" placeholder="Email" required>
                                <label for="email">Email</label>
                            </div><!-- end form-floating -->
                             <div class="form-floating mb-3">
                                <input v-model="nomor" type="nomor" class="form-control" id="nomor" placeholder="Nomor" required>
                                <label for="nomor">Nomor</label>
                            </div><!-- end form-floating -->
                            <div class="form-floating mb-3">
                                <input v-model="status" type="text" class="form-control" id="status" placeholder="Status" required>
                                <label for="status">Status</label>
                            </div><!-- end form-floating -->
                            <div class="form-floating mb-3">
                                <input v-model="agama" type="text" class="form-control" id="agama" placeholder="Agama" >
                                <label for="agama">Agama</label>
                            </div><!-- end form-floating -->
                            <div class="form-floating mb-3">
                                <input v-model="tanggal_lahir" type="date" class="form-control" id="tanggal_lahir" placeholder="Tanggal Lahir" >
                                <label for="tanggal_lahir">Tanggal Lahir</label>
                            </div><!-- end form-floating -->
                             <div class="form-floating mb-3">
                                <input v-model="no_ktp" type="text" class="form-control" id="no_ktp" placeholder="Nomor KTP" >
                                <label for="no_ktp">Nomor KTP</label>
                            </div>
                             <div class="form-floating mb-3">
                                <input v-model="npwp" type="text" class="form-control" id="npwp" placeholder="NPWP" >
                                <label for="npwp">NPWP</label>
                            </div>
                            <!-- BUTTON -->
                             <router-link to="/transactions" type="button" class="btn btn-sm btn-dark " >Back</router-link>
                            <button class="btn btn-sm btn-dark w-20 ms-2" type="submit" >Create Contact</button>
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
      nama:[],
      alamat:[],
      email:[],
      nomor:[],
      status:"",
      agama:"",
      tanggal_lahir:"",
      no_ktp:"",
      npwp:""
   
    }
  },
  
  methods: {
    store(){
        axios.post('http://127.0.0.1:8000/api/kontak', {
            nama: this.nama,
            alamat:this.alamat,
            email:this.email,
            nomor:this.nomor,
            status:this.status,
            agama:this.agama,
            tanggal_lahir:this.tanggal_lahir,
            no_ktp:this.no_ktp,
            npwp:this.npwp
        }).then(response => {        
            this.$toast.show("berhasil ditambahkan");
            
          this.$router.push({ name: "transactions" });
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
            // this.name = '';
        }
  
    
        
        },
 created: function(){
          
             
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

       