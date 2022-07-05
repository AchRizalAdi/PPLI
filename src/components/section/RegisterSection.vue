<template>
    <section class="register-section section-space-b pt-4 pt-md-5 mt-md-3">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-6 mb-lg-0 d-none d-lg-block">
                        <img :src="SectionData.registerData.img" alt="" class="img-fluid">
                    </div><!-- end col-lg-6 -->
                    <div class="col-lg-6 col-md-9">
                        <div class="section-head-sm">
                            <h2 class="mb-2" v-html=" SectionData.registerData.title"></h2>
                            <p>{{ SectionData.registerData.subTitle }}</p>
                        </div>
                        <form action="#">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="username" placeholder="Username">
                                <label for="username">Username</label>
                            </div><!-- end form-floating -->
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control password" id="password" placeholder="Password">
                                <label for="password">Password</label>
                                <a href="password" class="password-toggle" title="Toggle show/hide pasword">
                                    <em class="password-shown ni ni-eye-off"></em>
                                    <em class="password-hidden ni ni-eye"></em>
                                </a>
                            </div><!-- end form-floating -->
                             <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="nama" placeholder="nama">
                                <label for="nama">Nama</label>
                            </div><!-- end form-floating -->  
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="nama_perusahaan" placeholder="Nama Perusahaan">
                                <label for="nama_perusahaan">Nama Perusahaan</label>
                            </div><!-- end form-floating -->
                            <!-- <select class="form-select mb-3" aria-label="Default select example">
                                <label>I am i</label>
                                <option value="shipper">Shipper</option>
                                <option value="provider">Logistic Provider</option>
                                </select> -->
                             <div class="form-floating mb-3">
                                <input type="number" class="form-control" id="phone" placeholder="Phone">
                                <label for="phone">Phone</label>
                            </div><!-- end form-floating -->
                            <div class="form-floating mb-3">
                                <input type="number" class="form-control" id="company_industry_id" placeholder="Company Industri id">
                                <label for="company_industry_id">Company Industri id</label>
                            </div><!-- end form-floating -->
                            <div class="mb-3">
                                <v-select type="number" class="form-control" id="wilayah_id" placeholder="Wilayah" />
                            </div><!-- end form-floating -->
                            <div class="form mb-3">
                                <v-select type="number" class="form-control" id="kota" placeholder="Kota" />
                            </div><!-- end form-floating -->
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="alamat" placeholder="Alamat">
                                <label for="alamat">Alamat</label>
                            </div><!-- end form-floating -->
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="bentuk_badan_usaha" placeholder="Bentuk Badan Usaha">
                                <label for="bentuk_badan_usaha">Bentuk Badan Usaha</label>
                            </div><!-- end form-floating -->
                             <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="alasan_untuk_bergabung" placeholder="Alasan Untuk Bergabung">
                                <label for="alasan_untuk_bergabung">Alasan Untuk Bergabung</label>
                            </div><!-- end form-floating -->
                            <!-- form checkbox  -->
                            <div class="form-check mb-2">
                                <input id="agree" type="checkbox" value="agree" v-model="checked">
                                <span class="form-check-label mb-1 ms-2 form-text" for="terms" > {{ SectionData.registerData.termText }} <a><router-link to="/terms">terms of service</router-link></a> and <a><router-link to="/privacy">privacy and policy</router-link></a></span>                                
                            </div>
                            <!-- end form checkbox -->
                            <button :disabled="!checked" class="btn btn-dark w-100" type="submit">{{ SectionData.registerData.btnText }}</button>
                            <!-- <span class="d-block my-3">— or sign up with —</span>
                            <ul class="btns-group d-flex">
                                <li class="flex-grow-1" v-for="(list, i) in SectionData.registerData.btns" :key="i"><router-link :to="list.path" class="btn d-block" :class="list.btnClass"><em class="ni" :class="list.icon"></em> {{ list.title }} </router-link></li>
                            </ul> -->
                            <p class="mt-3 form-text">{{ SectionData.registerData.haveAccountText }} <router-link :to="SectionData.registerData.btnTextLink" class="btn-link">{{ SectionData.registerData.btnTextTwo }}</router-link></p>
                        </form>
                    </div><!-- end col-lg-6 -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section><!-- end register-section -->
    <ModalSection1></ModalSection1>
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
  name: 'RegisterSection',
  data () {
    return {
      SectionData,
      checked : false
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