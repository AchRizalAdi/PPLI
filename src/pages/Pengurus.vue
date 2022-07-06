<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
        <!-- hero -->
        <HeroFour classname="hero-title" :title="SectionData.breadcrumbData.breadcrumbListFive.title" :lists="SectionData.breadcrumbData.breadcrumbListFive.navList"></HeroFour>
    </header>
    <!-- Blog  -->
    <section class="section-space-b blog-section">
        <div class="container">
            <!-- blog section -->
            <div class="row g-gs">
              <div class="col-lg-4 col-md-6" v-for="item of displayedRecords" :key="item.id">
                        <div class="card card-full card-blog">
                            <div class="card-body card-body-s1">
                                <h4 class="card-title mb-3">{{ item.title }}</h4>
                                <p class="card-text">{{ item.desc }}</p>
                            </div><!-- end card-body -->
                            <hr class="my-0">
                            <div class="card-body card-body-s1 py-3">
                                <div class="card-action-info">
                                    <span>
                                        <span><em class="ni ni-call me-1"></em>{{ item.nohp }}</span>
                                        <span class="me-1"><em class="ni ni-mail me-1"></em>{{ item.email }}</span>
                                    </span>
                                </div><!-- end card-action-info -->
                            </div><!-- end card-body -->
                        </div><!-- end card -->
                    </div><!-- end col -->
            </div>

           <div class="text-center mt-4 mt-md-5">
             <Pagination :records="SectionData.blogData.blogListThree.length" v-model="page" :per-page="perPage"></Pagination>
           </div>

        </div><!-- .container -->
    </section><!-- end blog-section -->
    <Footer classname="bg-dark on-dark"></Footer>
</div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import HeroFour from '@/components/section/HeroFour.vue'
import Pagination from 'v-pagination-3';

export default {
  name: 'Pengurus',
  components: {
    HeroFour,
    Pagination
  },
  data () {
    return {
      SectionData,
      page: 1,
      perPage: 6,
    }
  },
  computed: {
    displayedRecords() {
      const startIndex = this.perPage * (this.page - 1);
      const endIndex = startIndex + this.perPage;
      return this.SectionData.blogData.blogListThree.slice(startIndex, endIndex);
    }
  },
}
</script>

<style lang="css" scoped>
 .details {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
 }
 .btn {
   z-index: 2;
   position: relative;
 }
</style>