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
                                <input type="text" class="form-control" id="company_name" placeholder="Company Name">
                                <label for="company_name">Company Name</label>
                            </div><!-- end form-floating -->
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="person_in_charge" placeholder="Person In Charge">
                                <label for="person_in_charge">Person In Charge</label>
                            </div><!-- end form-floating -->
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="email" placeholder="name@example.com">
                                <label for="email">Email address</label>
                            </div><!-- end form-floating -->
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control password" id="password" placeholder="Password">
                                <label for="password">Password</label>
                                <a href="password" class="password-toggle" title="Toggle show/hide pasword">
                                    <em class="password-shown ni ni-eye-off"></em>
                                    <em class="password-hidden ni ni-eye"></em>
                                </a>
                            </div><!-- end form-floating -->
                            <select class="form-select mb-3" aria-label="Default select example">
                                <label>I am i</label>
                                <option value="shipper">Shipper</option>
                                <option value="provider">Logistic Provider</option>
                                </select>
                             <div class="form-floating mb-3">
                                <input type="number" class="form-control" id="phone" placeholder="Phone">
                                <label for="phone">Phone</label>
                            </div><!-- end form-floating -->
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="province" placeholder="Province">
                                <label for="province">Province</label>
                            </div><!-- end form-floating -->
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="distrik" placeholder="Distrik">
                                <label for="distrik">Distrik</label>
                            </div><!-- end form-floating -->
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="street_address" placeholder="Street Address">
                                <label for="street_address">Street Address</label>
                            </div><!-- end form-floating -->
                            <!-- form checkbox  -->
                            <div class="form-check mb-2">
                                <input id="agree" type="checkbox" value="agree" v-model="checked">
                                <span class="form-check-label mb-1 ms-2 form-text" for="terms" > {{ SectionData.registerData.termText }} <a data-bs-toggle="modal" data-bs-target="#placeBidModal"><router-link to="">terms of service</router-link></a> and <a><router-link to="">privacy and policy</router-link></a></span>                                
                            </div>
                            <!-- end form checkbox -->
                            <button :disabled="!checked" class="btn btn-dark w-100" type="submit">{{ SectionData.registerData.btnText }}</button>
                            <span class="d-block my-3">— or sign up with —</span>
                            <ul class="btns-group d-flex">
                                <li class="flex-grow-1" v-for="(list, i) in SectionData.registerData.btns" :key="i"><router-link :to="list.path" class="btn d-block" :class="list.btnClass"><em class="ni" :class="list.icon"></em> {{ list.title }} </router-link></li>
                            </ul>
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