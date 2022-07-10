<template>
  <div class="page-wrap">
        <!-- header  -->
    <header class="header-section has-header-main bg-gradient-primary is-theme bg-pattern-2">
          <!-- Header main -->
          <HeaderMain isTransparent="is-transparent"></HeaderMain>
        <!-- hero -->
        <HeroFour classnameTwo="sub-header-2" classname="hero-title" ></HeroFour>
    </header>
        <!-- Register section -->
    <RegisterSection></RegisterSection>
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