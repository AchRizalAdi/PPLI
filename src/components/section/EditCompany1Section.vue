<template>
   <div class="col-lg-9 ps-xl-5">
                        <div class="user-panel-title-box">
                            <h3>Form Edit Perusahaan</h3>
                        </div><!-- end user-panel-title-box -->
                        <div class="profile-setting-panel-wrap">
                            <div class="table-responsive">
                                <!-- <form @submit.prevent="store()"> -->
                            <!-- {{ registers }} -->
                            <div class="d-flex align-items-center">
                            <div class="image-result-area avatar avatar-3">
                                <img id="image-result" :src="require('@/images/thumb/avatar-9.jpg')" alt="">
                            </div>
                              <input class="upload-image" data-target="image-result" id="upload-image-file" type="file" hidden>
                              <label for="upload-image-file" class="upload-image-label btn">Upload Logo Perusahaan</label>
                              <!-- <button class="btn btn-sm btn-dark ms-2">Delete</button> -->
                            </div><!-- end d-flex -->
                            <p class="form-text mt-1 mb-3">* file foto harus berformat .jpg, .png, dan .svg dengan maksimum size 3MB.</p>
                            <label class="form-label mt-1 mb-2">Nama Perusahaan</label>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control namaperusahaan" id="namaperusahaan" placeholder="Nama Perusahaan" required>
                            </div><!-- end form-floating -->
                             <div class="mb-3">
                                <label for="bio" class="form-label">Profile Perusahaan</label>
                                <textarea class="form-control form-control-s1" placeholder="" id="bio"></textarea>
                            </div>
                             <div class="mb-3">
                                <label for="bio" class="form-label">Kategori Perusahaan</label>
                                <select class="form-control">
                                    <option>sadasdas</option>
                                    <option>sadasdas</option>
                                </select>
                            </div>
                             <div class="row mt-4">
                                  <div class="col-lg-6 mb-3">
                                      <label for="didirikan" class="form-label">Didirikan</label>
                                      <input type="text" id="didirikan" class="form-control form-control-s1">
                                  </div><!-- end col -->
                                  <div class="col-lg-6 mb-3"> 
                                      <label for="karyawan" class="form-label">Karyawan</label>
                                            <select class="form-control">
                                              <option value="1-20">1-20 Karyawan</option>
                                              <option value="21-50">21-50 Karyawan</option>
                                              <option value="51-100">51-100 Karyawan</option>
                                              <option value="101-500">101-500 Karyawan</option>
                                              <option value="501-1000">501-1000 Karyawan</option>
                                            </select>
                                  </div><!-- end col -->
                              </div><!-- end row -->
                           <div class="row mt-4">
                            <div class="col-lg-6 mb-3">
                                <label for="provinsi" class="form-label">Provinsi</label>
                                  <select class='form-control' required id='provinsi' >
                                        <option></option>
                                  </select>
                            </div><!-- end col -->
                            <div class="col-lg-6 mb-3">
                                <label for="kota" class="form-label">Kota</label>
                                <select class='form-control' required id='kota' >
                                        <option></option>
                                  </select>
                            </div><!-- end col -->
                        </div><!-- end row -->
                        <div class="row mt-4">
                            <div class="col-lg-6 mb-3">
                                <label for="alamat" class="form-label">Alamat</label>
                                <input type="text" id="alamat" class="form-control form-control-s1">
                            </div><!-- end col -->
                            <div class="col-lg-6 mb-3">
                                <label for="postalcode" class="form-label">Postal Code</label>
                                <input type="text" id="postalcode" class="form-control form-control-s1">
                            </div><!-- end col -->
                        </div><!-- end row -->
                            <label class="form-label mt-1 mb-2">Nomor Handphone</label>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="nomorhandphone" required>
                            </div><!-- end form-floating -->
                            <div class="row mt-4">
                            <div class="col-lg-6 mb-3">
                                <label for="website" class="form-label">Website</label>
                                <input type="text" id="website" class="form-control form-control-s1">
                            </div><!-- end col -->
                            <div class="col-lg-6 mb-3">
                                <label for="facebook" class="form-label">Facebook</label>
                                <input type="text" id="facebook" class="form-control form-control-s1">
                            </div><!-- end col -->
                        </div><!-- end row -->
                        <div class="row mt-4">
                            <div class="col-lg-6 mb-3">
                                <label for="twitter" class="form-label">Twitter</label>
                                <input type="text" id="twitter" class="form-control form-control-s1">
                            </div><!-- end col -->
                            <div class="col-lg-6 mb-3">
                                <label for="instagram" class="form-label">Instagram</label>
                                <input type="text" id="instagram" class="form-control form-control-s1">
                            </div><!-- end col -->
                        </div><!-- end row -->
                            <!-- BUTTON -->
                             <button class="btn btn-sm btn-dark w-100 mt-2" type="submit" >Simpan</button>
                            <!-- </form> -->
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

       