<template>
    <section class="login-section section-space-b pt-4 pt-md-5 mt-md-3">
        <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-6 mb-5 mb-lg-0 d-none d-lg-block">
                        <img :src="SectionData.reset.img" alt="" class="img-fluid">
                    </div><!-- end col-lg-6 -->
                    <div class="col-lg-6">
                        <div class="section-head-sm">
                            <h2 class="mb-1">{{ SectionData.reset.title }}</h2>
                            <p>{{ SectionData.reset.subTitle }}</p>
                        </div>
                        <form action="#">
                           <div class="form-floating mb-3">
                                <input type="password" class="form-control password" id="password" placeholder="Password">
                                <label for="password">New Password</label>
                                <a href="password" class="password-toggle" title="Toggle show/hide pasword">
                                    <em class="password-shown ni ni-eye-off"></em>
                                    <em class="password-hidden ni ni-eye"></em>
                                </a>
                            </div><!-- end form-floating -->
                           
                            <button class="btn btn-dark w-100" type="submit">{{ SectionData.reset.btnText }}</button>
                            <ul class="btns-group d-flex ">
                                <li class="flex-grow-1" v-for="(list, i) in SectionData.reset.btns" :key="i"><router-link :to="list.path" class="btn d-block" :class="list.btnClass"><em class="ni" :class="list.icon"></em> {{ list.title }} </router-link></li>
                            </ul>
                            <p class="mt-4 form-text">{{ SectionData.reset.haveAccountText }} <router-link :to="SectionData.reset.btnTextLink" class="btn-link">{{ SectionData.reset.btnTextTwo }}</router-link></p>
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
  name: 'resetSection',
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