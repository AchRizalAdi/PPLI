<template>
  <section class="subscibe-section section-space-sm">
    <div class="container">
        <div class="join-form-wrap">
            <div class="row g-gs align-items-center">
                <div class="col-lg-8">
                    <h3 class="form-title">{{ SectionData.termletterData.title }}</h3>
                </div><!-- end col -->
                <div class="col-lg-3 col-md-4">
                    <a class="btn d-md-block" href=""><router-link to="/register" class="btn btn-dark d-md-block">Join Now</router-link></a>
                </div><!-- end col -->
            </div><!-- row -->
        </div><!-- end join-form-wrap -->
    </div><!-- end container -->
    </section><!-- end subscibe-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
  name: 'Privacyletter',
  data () {
    return {
      SectionData
    }
  }
}
</script>
