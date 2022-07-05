<template>
    <section class="login-section section-space-b pt-4 pt-md-5 mt-md-3">
        <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-6 mb-5 mb-lg-0 d-none d-lg-block">
                        <img :src="SectionData.forgot.img" alt="" class="img-fluid">
                    </div><!-- end col-lg-6 -->
                    <div class="col-lg-6">
                        <div class="section-head-sm">
                            <h2 class="mb-1">{{ SectionData.forgot.title }}</h2>
                            <p>{{ SectionData.forgot.subTitle }}</p>
                        </div>
                        <form action="#">
                            <div class="form-floating mb-4 mt-4">
                                <input type="text" class="form-control" id="username" placeholder="Username">
                                <label for="username">Username</label>
                            </div><!-- end form-floating -->
                           
                            <button class="btn btn-dark w-100" type="submit">{{ SectionData.forgot.btnText }}</button>
                            <ul class="btns-group d-flex ">
                                <li class="flex-grow-1" v-for="(list, i) in SectionData.forgot.btns" :key="i"><router-link :to="list.path" class="btn d-block" :class="list.btnClass"><em class="ni" :class="list.icon"></em> {{ list.title }} </router-link></li>
                            </ul>
                            <p class="mt-4 form-text">{{ SectionData.forgot.haveAccountText }} <router-link :to="SectionData.forgot.btnTextLink" class="btn-link">{{ SectionData.forgot.btnTextTwo }}</router-link></p>
                        </form>
                    </div><!-- end col-lg-6 -->
                </div><!-- end row -->
            </div><!-- end container -->
    </section>
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
  name: 'ForgotSection',
  data () {
    return {
      SectionData
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