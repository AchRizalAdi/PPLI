<template>
    <div class="container">
                <div class="section-space-sm">
                    <div class="row">
                        <div class="col-lg-3 col-md-9 me-auto">
                            <div class="footer-item mb-4 mb-lg-0">
                                <div class="copyright-wrap d-flex flex-wrap py-3 align-items-center justify-content-between">
                                    <H6 class="mb-2">Sosial Media Kami</H6>
                                <ul class="styled-icon">
                                    <li><a href="#"><em class="icon ni ni-twitter"></em></a></li>
                                    <li><a href="#"><em class="icon ni ni-facebook-f"></em></a></li>
                                    <li><a href="#"><em class="icon ni ni-instagram"></em></a></li>
                                    <li><a href="#"><em class="icon ni ni-pinterest"></em></a></li>
                                </ul>
                    <p class="footer-copy-text py-2 mt-4" v-html="SectionData.copyTitle"></p>
                   <ul class="list-item list-item-s1 list-item-inline">
                        <li v-for="(list, i) in SectionData.footerData.footerListTwo" :key="i"><router-link :to="list.path">{{ list.title }}</router-link></li>
                    </ul>
                </div><!-- end d-flex -->
                                <!-- logo link -->
                                <!-- <LogoLink class="footer-logo-link"></LogoLink>
                                <p class="my-4 footer-para" v-if="SectionData.footerData.title">{{ SectionData.footerData.title }}</p> -->
                            </div><!-- end footer-item -->
                        </div><!-- end col-lg-3 -->
                        <!-- <div class="col-lg-8">
                            <div class="row g-gs">
                                <div class="col-lg-3 col-md-4 col-sm-4" v-for="item in SectionData.footerData.footerList" :key="item.id">
                                    <div class="footer-item">
                                        <h5 class="mb-4">{{ item.title }}</h5>     
                                        <p class="mb-4">{{ item.text }}</p>
                                        <ul class="list-item list-item-s1">
                                            <li v-for="(list, i) in item.navList" :key="i"><router-link :to="list.path">{{ list.title }}</router-link> <ul>{{ list.text }}</ul></li>
                                        </ul> -->
                                    <!-- </div>end footer-item -->
                                <!-- </div>end col -->
                            <!-- </div> -->
                        <!-- </div> -->
                    </div><!-- end row -->
                </div>
                <hr class="bg-white-slim my-0">
                
            </div><!-- .container -->
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'FooterSection',
  data () {
    return {
      SectionData
    }
  }
}
</script>
