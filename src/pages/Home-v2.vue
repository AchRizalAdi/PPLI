<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main bg-gradient-2">
      <!-- Header main -->
      <HeaderMain isTransparent="is-transparent"></HeaderMain>
      <!-- hero -->
      <heroTwo></heroTwo>
    </header>
    <!-- funFact  -->
    <funFactSection
      classname="col-xl-4 col-sm-2 col-4"
      :items="SectionData.funfactData.funfactListTwo"
    ></funFactSection>
    <!-- HowItWork  -->
    <HowItWork
      classname="col-lg-3"
      :title="SectionData.howItWorkData.titleTwo"
      :subtitle="SectionData.howItWorkData.titleThree"
      gutterBottom="mb-3"
    ></HowItWork>
    <!-- HowItWork  -->
    <HowItWork2
      classname="col-lg-3"
      :subtitle="SectionData.howItWorkData.content"
      gutterBottom="mb-3"
    ></HowItWork2>

    <!-- <section
      class="trending-section bg-gray"
      style="padding-top: 30px; padding-bottom: 30px"
    > -->
      <!-- <div class="container"> -->
        <!-- Recent Item Section  -->
        <!-- <RecentItemSection></RecentItemSection> -->
      <!-- </div> -->
    <!-- </section> -->
    <!-- <section
      class="trending-section bg-white"
      style="padding-top: 30px; padding-bottom: 30px"
    >
      <div class="container"> -->
        <!-- Recent Item Section  -->
        <!-- <RecentItemSection1></RecentItemSection1>
      </div> -->
      <!-- .container -->
    <!-- </section> -->
    <!-- trending-section -->

    <!-- <section -->
      <!-- class="trending-section bg-gray" -->
      <!-- style="padding-top: 30px; padding-bottom: 30px" -->
    <!-- > -->
      <!-- <div class="container"> -->
        <!-- Recent Item Section  -->
        <!-- <RecentItemSection2></RecentItemSection2> -->
      <!-- </div> -->
      <!-- .container -->
    <!-- </section> -->
    <!-- trending-section -->
<!-- 
    <section
      class="trending-section bg-white"
      style="padding-top: 30px; padding-bottom: 30px"
    >
      <div class="container"> -->
        <!-- Recent Item Section  -->
        <!-- <RecentItemSection3></RecentItemSection3> -->
      <!-- </div> -->
      <!-- .container -->
    <!-- </section> -->
    <!-- trending-section -->
    <!-- Category  -->
    <!-- <Category classname="section-space-b"></Category> -->

    <!-- Newsletter  -->
    <Termletter></Termletter>
    <!-- Footer  -->
    <Footer classname="bg-dark on-dark"></Footer>
  </div>
  <!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import heroTwo from "@/components/section/HeroTwo.vue";

export default {
  name: "Home-v2",
  components: {
    heroTwo,
  },
  data() {
    return {
      SectionData,
    };
  },
};
</script>
