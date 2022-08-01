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
                        <form @submit.prevent="forget()">
                            <div class="form-floating mb-4 mt-4">
                                <input v-model="email" type="text" class="form-control" id="email" placeholder="Email">
                                <label for="email">Email</label>
                            </div><!-- end form-floating -->
                            <button class="btn btn-dark w-100" type="submit">kirim</button>
                        </form>
                    </div><!-- end col-lg-6 -->
                </div><!-- end row -->
            </div><!-- end container -->
    </section>
</template>
<script>

import SectionData from '@/store/store.js'
import axios from 'axios';
export default {
  name: 'ForgotSection',
  data () {
    return {
      SectionData,
      email:[],
    }
  },
  methods:{
     makeToast(append = false) {
        this.toastCount++
        this._vm.$bvToast(`This is toast number ${this.toastCount}`, {
          title: 'BootstrapVue Toast',
          autoHideDelay: 5000,
          appendToast: append
        })
      },
        reset(){
            this.email=null;
        },
        forget(){
            // alert('a');
            axios.post('http://127.0.0.1:8000/api/forgot',{
                email:this.email,
            }).then(function (response) {
                this.reset()
                this.$toast.show(response.data.message);
            }.bind(this));
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