<template>
  <div class="page-wrap">
        <!-- header  -->
        <header class="header-section has-header-main bg-gradient-2">
          <!-- Header main -->
          <HeaderMain isTransparent="is-transparent"></HeaderMain>
          <!-- hero -->
          <heroThree></heroThree>
        </header>
        <!-- funFact  -->
      <funFactSection classname="col-xl-4 col-sm-2 col-4" :items="SectionData.funfactData.funfactListTwo"></funFactSection>
        <!-- Category  -->
        <Category classname="section-space-b"></Category>
        <!-- Recent Item Section  -->
        <RecentItemSection></RecentItemSection>
        
        <section class="section-space trending-section bg-gray">
            <div class="container">
                <!-- Recent Item Section  -->
        <RecentItemSection1></RecentItemSection1>
            </div><!-- .container -->
        </section><!-- trending-section -->

        <section class="section-space trending-section bg-white">
            <div class="container">
                <!-- Recent Item Section  -->
        <RecentItemSection2></RecentItemSection2>
            </div><!-- .container -->
        </section><!-- trending-section -->

        <section class="section-space trending-section bg-gray">
            <div class="container">
                <!-- Recent Item Section  -->
        <RecentItemSection3></RecentItemSection3>
            </div><!-- .container -->
        </section><!-- trending-section -->

        <!-- HowItWork  -->
        <HowItWork classname="col-lg-3" :title="SectionData.howItWorkData.titleTwo" :subtitle="SectionData.howItWorkData.content" gutterBottom="mb-3"></HowItWork>
        
        <!-- Newsletter  -->
        <Newsletter></Newsletter>
        <!-- Footer  -->
        <Footer classname="bg-dark on-dark"></Footer>
  </div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import heroThree from '@/components/section/HeroThree.vue'

export default {
  name: 'Home-v2',
  components: {
    heroThree
  },
  data () {
    return {
      SectionData
    }
  }
}
</script>