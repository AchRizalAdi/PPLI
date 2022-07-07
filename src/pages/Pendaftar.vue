<template>
  <div class="page-wrap">
        <!-- header  -->
    <header class="header-section has-header-main bg-gradient-primary is-theme bg-pattern-2">
        <!-- Header main -->
        <HeaderMain isTransparent="is-transparent on-dark"></HeaderMain>
        <!-- hero -->
        <HeroFour classnameTwo="sub-header-2" classname="hero-title" :title="SectionData.breadcrumbData.breadcrumbList.title" :lists="SectionData.breadcrumbData.breadcrumbList.navList"></HeroFour>
    </header>
        
        <!-- Footer  -->
    <Footer classname="bg-primary-darker is-theme"></Footer>
  </div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import HeroFour from '@/components/section/HeroFour.vue'

export default {
  name: 'pendaftaran-anggota',
  components: {
    HeroFour
  },
  data () {
    return {
      SectionData
    }
  }
}
</script>