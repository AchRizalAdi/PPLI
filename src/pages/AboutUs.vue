<template>
  <div class="page-wrap">
      <!-- header  -->
      <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
      </header>
      <!-- About section  -->
      <AboutSection class="pt-5 mt-3" :img="SectionData.aboutDataTwo.img" isClassThree="col-sm-9 ps-xl-5" isRound="ps-xl-4" isReverse="flex-lg-row-reverse" isClassTwo="pe-lg-5" :title="SectionData.aboutData.title" :content="SectionData.aboutData.content" :contenttwo="SectionData.aboutData.contentTwo" :contentthree="SectionData.aboutData.contentThree"></AboutSection>
      <!-- funFact 
      <funFactSection classname="col-xl-4 col-sm-2 col-4" :items="SectionData.funfactData.funfactListTwo"></funFactSection> -->
      <!-- About section  -->
      <AboutSection class="section-space-b" :img="SectionData.aboutDataTwo.img" isRound="rounded-3" :title="SectionData.aboutDataTwo.title" isClassTwo="ps-xl-5" :content="SectionData.aboutDataTwo.content" isClass="lead" :contenttwo="SectionData.aboutDataTwo.contentTwo" :contentthree="SectionData.aboutDataTwo.contentThree" :contentfour="SectionData.aboutDataTwo.contentFour"></AboutSection>
      <!-- Brand section  -->
      <BrandSection isBg="bg-gray"></BrandSection>
      
      <!-- Footer  -->
      <Footer classname="bg-dark on-dark"></Footer>
  </div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'AboutUs',
  data () {
    return {
      SectionData
    }
  },
}
</script>
