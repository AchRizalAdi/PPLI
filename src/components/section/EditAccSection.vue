<template>
   <div class="col-lg-9 ps-xl-5">
                        <div class="user-panel-title-box">
                            <h3>Form Edit Akun</h3>
                        </div><!-- end user-panel-title-box -->
                        
                        <div class="profile-setting-panel-wrap">
                            <div class="table-responsive">
                                <form @submit.prevent="store()">
                            <!-- {{ registers }} -->
                                <h5>Ubah Email</h5>
                             <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="email" placeholder="Email" required>
                                <label for="email">Email</label>
                            </div><!-- end form-floating -->  
                                <h5>Ubah Password</h5>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control password" id="password" placeholder="Password Lama" required>
                                <label for="password">Password Lama</label>
                            </div><!-- end form-floating -->
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control password" id="password" placeholder="Password Baru" required>
                                <label for="password">Password Baru</label>
                            </div><!-- end form-floating -->
                            <!-- BUTTON -->
                             <button class="btn btn-sm btn-dark w-20 ms-2" type="submit" >Simpan</button>
                            </form>
                            </div><!-- end table-responsive -->
                    </div><!-- end profile-setting-panel-wrap-->
        </div><!-- end col-lg-8 -->          
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
// import axios from 'axios';
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
      provinsis: [],
      name:[],
      cities:[],
      provinsi:[]
    }
  },
  
  methods: {
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

       